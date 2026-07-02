# Deploy setup — GitHub Actions → Bluehost

The site builds in CI and syncs to Bluehost over secure FTP (FTPS). Publishing a change is just
`git push`. No credentials live in the repo — they're stored as GitHub Actions secrets.

Workflow file: `.github/workflows/deploy.yml`.

---

## One-time setup

### 1. Create an FTP account in Bluehost
1. Bluehost dashboard → **cPanel → FTP Accounts** (or Hosting → Advanced → FTP Accounts).
2. Create an account (or use the main one). Note the **FTP server host** (usually `ftp.openelis-global.org`
   or the server hostname), **username**, and **password**.
3. Bluehost supports **FTPS** (explicit TLS on port 21) — the workflow uses `protocol: ftps` so
   credentials and files are encrypted in transit.

### 2. Decide the two docroots
- **Production** — where the live site is served. For the primary domain this is typically
  `/public_html/`. (While WordPress still lives there, deploy to **staging first** and only point
  `PROD_DIR` at `/public_html/` at cutover.)
- **Staging** — a subdomain to preview safely. In cPanel → **Domains → Subdomains**, create e.g.
  `new.openelis-global.org`; note the **Document Root** it assigns (often `/public_html/new/`).

### 3. Add the GitHub secrets & variables
Repo → **Settings → Secrets and variables → Actions**.

**Secrets:**
| Name | Value |
|------|-------|
| `FTP_SERVER` | FTP host, e.g. `ftp.openelis-global.org` |
| `FTP_USERNAME` | the FTP account username |
| `FTP_PASSWORD` | the FTP account password |

**Variables:**
| Name | Value |
|------|-------|
| `STAGING_DIR` | staging docroot, e.g. `/public_html/new/` |
| `PROD_DIR` | production docroot, e.g. `/public_html/` |

> Paths must match what cPanel shows as the Document Root, with a trailing slash.

---

## Deploying

- **To staging (safe preview):** either merge to `main` (push to main auto-deploys to **staging**), or
  Actions tab → **Build & deploy site** → **Run workflow** → target = `staging`. Then open
  `https://new.openelis-global.org`.
- **To production:** Actions tab → **Run workflow** → target = `production` (explicit, deliberate step).
  Push-to-main does **not** touch production while WordPress is still live.

> Note: the **Run workflow** button only appears once this workflow exists on the default branch
> (`main`). Merging the PR is safe — push-to-main only deploys to staging.

The first deploy uploads everything; later deploys only transfer changed files (the action keeps a
`.ftp-deploy-sync-state.json` marker in the remote dir). `dangerous-clean-slate` is **off**, so files
already on the server that aren't part of our build (e.g. a WordPress install during transition) are
left alone — nothing is deleted out from under you.

---

## Cutover (when ready to go live)

1. Deploy to staging, review at the subdomain.
2. Back up the current WordPress site (cPanel → Backup, plus a database export).
3. Point `PROD_DIR` at the real docroot (`/public_html/`) and run the workflow with target =
   `production` — or merge to `main`.
4. Because `dangerous-clean-slate` is off, old WP files remain until you remove them. Once the static
   site is confirmed live, delete the leftover WordPress files/dirs from `/public_html/` (keep the DB
   backup 30 days).
5. Verify `.htaccess` redirects (add one for any changed URLs), the GTranslate language subdomains, and
   the contact form.

---

## Notes
- **Build locally** anytime: `node site/build.mjs` → `dist/`, then `cd dist && python3 -m http.server 8899`.
- **`.htaccess`**: if we need redirects, add an `.htaccess` file under `site/pages/` root output (or a
  `dist/.htaccess` step) — Bluehost is Apache, so it's respected natively.
- **Alternative to FTP**: if the Bluehost plan has SSH, we can switch to rsync-over-SSH
  (`easingthemes/ssh-deploy`) for faster syncs. FTPS is the universal default and is what's wired now.
