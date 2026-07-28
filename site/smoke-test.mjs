#!/usr/bin/env node
/* Smoke test — runs after `node site/build.mjs` in CI, before FTP upload.
 * Fails the workflow if the built site would deploy broken.
 *
 * Checks per built HTML page in dist/:
 *   - <a href>, <img src>, <link href>, <script src> internal refs resolve
 *   - CSS url(...) refs in inline styles + <style> blocks resolve
 *   - <title>, <h1>, and <meta name="description"> present + non-empty
 *   - No unresolved {{TOKENS}} left over from the build
 *
 * Global checks:
 *   - dist/sitemap.xml exists, every URL resolves, and every built page is listed
 *
 * Usage:
 *   node site/smoke-test.mjs            (checks ./dist)
 *   node site/smoke-test.mjs ./dist     (explicit path)
 *
 * Exit codes:
 *   0 — clean
 *   1 — at least one failure (prevents deploy)
 *
 * Deps: Node stdlib only. No npm install needed.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, '..');
const DIST = path.resolve(process.argv[2] || path.join(REPO, 'dist'));

const failures = [];
const fail = (where, what) => failures.push(`  ${where}: ${what}`);

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

// External URLs and anchors are not our problem (until we add a link checker later).
const isExternal = h => /^(https?:|mailto:|tel:|\/\/|#|data:)/i.test(h);

// Resolve a repo-absolute href (starts with /) against dist/. A trailing slash
// (or no extension) means look up the directory's index.html.
function resolveHref(href) {
  const clean = href.split('#')[0].split('?')[0];
  if (!clean.startsWith('/')) return null;
  const p = path.join(DIST, clean);
  if (fs.existsSync(p) && fs.statSync(p).isFile()) return p;
  const idx = path.join(p, 'index.html');
  if (fs.existsSync(idx)) return idx;
  return null;
}

function extractRefs(html) {
  const refs = [];
  for (const m of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/gi))       refs.push({ kind: 'a href',      href: m[1] });
  for (const m of html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/gi))      refs.push({ kind: 'img src',     href: m[1] });
  for (const m of html.matchAll(/<link\b[^>]*\bhref="([^"]+)"/gi))    refs.push({ kind: 'link href',   href: m[1] });
  for (const m of html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/gi))   refs.push({ kind: 'script src',  href: m[1] });
  for (const m of html.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/gi))  refs.push({ kind: 'css url()',   href: m[1] });
  return refs;
}

if (!fs.existsSync(DIST)) {
  console.error(`ERROR: dist not found at ${DIST}. Run \`node site/build.mjs\` first.`);
  process.exit(1);
}

const allFiles = walk(DIST);
const htmlFiles = allFiles.filter(f => f.endsWith('.html'));
console.log(`Smoke test — ${htmlFiles.length} pages, ${allFiles.length} total assets in ${DIST}\n`);

// Per-page checks
let refCount = 0;
for (const f of htmlFiles) {
  const rel = path.relative(DIST, f);
  const html = fs.readFileSync(f, 'utf8');

  // Unresolved build tokens
  if (/\{\{[A-Z_]+\}\}/.test(html)) fail(rel, 'unresolved {{TOKEN}} left in HTML');

  // <title>
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim();
  if (!title) fail(rel, 'missing <title> or empty');

  // <h1>
  const h1 = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, '').trim();
  if (!h1) fail(rel, 'missing <h1> or empty');

  // <meta name="description">
  const desc = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1];
  if (desc === undefined) fail(rel, 'missing <meta name="description">');
  else if (!desc.trim()) fail(rel, '<meta name="description"> is empty');

  // Refs
  for (const { kind, href } of extractRefs(html)) {
    if (isExternal(href)) continue;
    if (!href.startsWith('/')) continue; // skip relative for now
    refCount++;
    const resolved = resolveHref(href);
    if (!resolved) fail(rel, `broken ${kind} → ${href}`);
  }
}
console.log(`  ${refCount} internal refs checked across ${htmlFiles.length} pages`);

// Sitemap
const sitemapPath = path.join(DIST, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  fail('sitemap.xml', 'missing');
} else {
  const sm = fs.readFileSync(sitemapPath, 'utf8');
  const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  console.log(`  sitemap.xml lists ${urls.length} URLs`);
  const smPaths = new Set();
  for (const u of urls) {
    const p = u.replace(/^https?:\/\/[^/]+/, '');
    smPaths.add(p);
    if (!resolveHref(p)) fail('sitemap.xml', `URL doesn't resolve: ${u}`);
  }
  const builtPaths = new Set();
  for (const f of htmlFiles) {
    if (path.basename(f) !== 'index.html') continue;
    const rel = path.relative(DIST, path.dirname(f)).replace(/\\/g, '/');
    builtPaths.add(rel === '' ? '/' : '/' + rel + '/');
  }
  for (const b of builtPaths) {
    if (!smPaths.has(b)) fail('sitemap.xml', `built page missing from sitemap: ${b}`);
  }
}

// Summary
console.log('');
if (failures.length === 0) {
  console.log(`OK — smoke test passed. ${htmlFiles.length} pages, ${refCount} refs, all resolved.`);
  process.exit(0);
} else {
  console.error(`FAIL — smoke test caught ${failures.length} issue(s):\n`);
  console.error(failures.join('\n'));
  console.error('\nBuild is not safe to deploy. Fix these and retry.');
  process.exit(1);
}
