#!/usr/bin/env python3
"""Deploy the built static site (dist/) to a cPanel docroot via the cPanel API.

Credential resolution (first match wins for each key):
  1. Environment variables (used in CI):
       CPANEL_HOST, CPANEL_USER, CPANEL_API_TOKEN, CPANEL_PORT (default 2083)
  2. ~/.bluehost/credentials file (used locally):
       CPANEL_HOST=box2587.bluehost.com
       CPANEL_USER=fjiakwmy
       CPANEL_API_TOKEN=...
       CPANEL_PORT=2083

Source directory:
  - $OPENELIS_SRC (if set)
  - else <repo>/dist

Usage:
  python3 site/deploy-cpanel.py <DEST_relative_to_home>

  # local, deploy to prod
  python3 site/deploy-cpanel.py public_html/website_4fdc2c4b

  # CI, deploy to staging (needs staging-prefix rewrite done separately)
  CPANEL_HOST=... CPANEL_USER=... CPANEL_API_TOKEN=... \\
    python3 site/deploy-cpanel.py public_html/openelis-staging

Exit codes:
  0 — deploy clean (0 failures)
  1 — missing credentials / bad args / any file upload failure
"""

import json
import os
import ssl
import sys
import urllib.parse
import urllib.request
import uuid


def load_credentials():
    env = {}
    creds_path = os.path.expanduser("~/.bluehost/credentials")
    if os.path.exists(creds_path):
        for line in open(creds_path):
            line = line.strip()
            if line.startswith("#") or "=" not in line:
                continue
            k, v = line.split("=", 1)
            env[k] = v.strip().strip('"')
    for k in ("CPANEL_HOST", "CPANEL_USER", "CPANEL_API_TOKEN", "CPANEL_PORT"):
        v = os.environ.get(k)
        if v:
            env[k] = v
    missing = [k for k in ("CPANEL_HOST", "CPANEL_USER", "CPANEL_API_TOKEN") if not env.get(k)]
    if missing:
        sys.exit(
            "ERROR: missing cPanel credentials: "
            + ", ".join(missing)
            + " (set env vars or ~/.bluehost/credentials)"
        )
    env.setdefault("CPANEL_PORT", "2083")
    return env


def main():
    if len(sys.argv) < 2 or sys.argv[1].startswith("-"):
        sys.exit("Usage: deploy-cpanel.py <DEST_relative_to_home>")
    dest = sys.argv[1].strip("/")

    env = load_credentials()
    host, user, tok, port = env["CPANEL_HOST"], env["CPANEL_USER"], env["CPANEL_API_TOKEN"], env["CPANEL_PORT"]
    headers = {"Authorization": "cpanel %s:%s" % (user, tok)}
    ctx = ssl.create_default_context()
    base = "https://%s:%s" % (host, port)

    src = os.environ.get("OPENELIS_SRC")
    if not src:
        repo_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        src = os.path.join(repo_root, "dist")
    if not os.path.isdir(src):
        sys.exit("ERROR: source not found at %s (run `node site/build.mjs` first)" % src)
    print("Source:      %s" % src, flush=True)
    print("Destination: %s@%s:%s" % (user, host, dest), flush=True)

    def api2(params):
        req = urllib.request.Request(
            base + "/json-api/cpanel?" + urllib.parse.urlencode(params),
            headers=headers,
        )
        return json.load(urllib.request.urlopen(req, timeout=90, context=ctx))

    def mkdir(path, name):
        try:
            api2({
                "cpanel_jsonapi_user": user,
                "cpanel_jsonapi_apiversion": "2",
                "cpanel_jsonapi_module": "Fileman",
                "cpanel_jsonapi_func": "mkdir",
                "path": path,
                "name": name,
            })
        except Exception as e:
            print("  mkdir ERR %s/%s: %s" % (path, name, e), flush=True)

    def upload(destdir, localfile, fname):
        with open(localfile, "rb") as fh:
            blob = fh.read()
        boundary = "----b" + uuid.uuid4().hex
        parts = []
        parts += [("--" + boundary).encode(), b'Content-Disposition: form-data; name="dir"', b"", destdir.encode()]
        parts += [("--" + boundary).encode(), b'Content-Disposition: form-data; name="overwrite"', b"", b"1"]
        parts += [
            ("--" + boundary).encode(),
            ('Content-Disposition: form-data; name="file-1"; filename="%s"' % fname).encode(),
            b"Content-Type: application/octet-stream",
            b"",
            blob,
        ]
        parts += [("--" + boundary + "--").encode(), b""]
        body = b"\r\n".join(parts)
        req = urllib.request.Request(
            base + "/execute/Fileman/upload_files",
            data=body,
            headers={**headers, "Content-Type": "multipart/form-data; boundary=" + boundary},
        )
        j = json.load(urllib.request.urlopen(req, timeout=180, context=ctx))
        return (j.get("result", j) or {}).get("status")

    # collect dirs + files
    dirs = set()
    files = []
    for root, ds, fs in os.walk(src):
        rel = os.path.relpath(root, src)
        rel = "" if rel == "." else rel
        for d in ds:
            dirs.add((rel + "/" + d) if rel else d)
        for f in fs:
            files.append((rel, f))

    # create dirs, parents first
    for rel in sorted(dirs, key=lambda x: x.count("/")):
        par = os.path.dirname(rel)
        mkdir(dest + ("/" + par if par else ""), os.path.basename(rel))
    print("made %d dirs; uploading %d files..." % (len(dirs), len(files)), flush=True)

    ok = fail = 0
    for rel, f in files:
        dd = dest + ("/" + rel if rel else "")
        lf = os.path.join(src, rel, f)
        try:
            s = upload(dd, lf, f)
            if s == 1:
                ok += 1
            else:
                fail += 1
                print("FAIL %s/%s status=%s" % (rel, f, s), flush=True)
        except Exception as e:
            fail += 1
            print("ERR  %s/%s %s" % (rel, f, e), flush=True)
        if (ok + fail) % 40 == 0:
            print("  progress %d/%d" % (ok + fail, len(files)), flush=True)

    print("DONE uploaded ok=%d fail=%d total=%d" % (ok, fail, len(files)), flush=True)
    if fail:
        sys.exit(1)


if __name__ == "__main__":
    main()
