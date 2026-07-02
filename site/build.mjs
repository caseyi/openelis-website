#!/usr/bin/env node
/* Minimal static-site build. No framework.
 * - Each page under site/pages/**  is an HTML fragment beginning with a JSON meta comment:
 *     <!--meta {"title":"...","desc":"...","path":"/foo/","active":"features","og":"/assets/..."} -->
 * - Build wraps the fragment in site/_layout/base.html, substitutes tokens, writes dist/<path>/index.html
 * - Copies site/_assets -> dist/_assets and assets/screenshots -> dist/assets/screenshots
 *
 * Usage:  node site/build.mjs         (from repo root)
 */
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(path.dirname(decodeURIComponent(new URL(import.meta.url).pathname)), '..');
const SITE = path.join(ROOT, 'site');
const DIST = path.join(ROOT, 'dist');

const base = fs.readFileSync(path.join(SITE, '_layout', 'base.html'), 'utf8');

function rmrf(p) { fs.rmSync(p, { recursive: true, force: true }); }
function cp(src, dst) {
  // Manual walk-copy: fs.cpSync tries to preserve dir metadata, which the
  // mounted workspace filesystem rejects (EACCES). Copy file bytes only.
  if (!fs.existsSync(src)) return;
  const st = fs.statSync(src);
  if (st.isDirectory()) {
    if (path.basename(src).startsWith('_incoming')) return; // triage area, never ship
    fs.mkdirSync(dst, { recursive: true });
    for (const e of fs.readdirSync(src)) cp(path.join(src, e), path.join(dst, e));
  } else {
    if (src.endsWith('.webm') || src.endsWith('.json')) return; // videos handled separately
    fs.mkdirSync(path.dirname(dst), { recursive: true });
    fs.writeFileSync(dst, fs.readFileSync(src));
  }
}
function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else if (e.name.endsWith('.html')) out.push(full);
  }
  return out;
}

rmrf(DIST);
fs.mkdirSync(DIST, { recursive: true });

// Assets
cp(path.join(SITE, '_assets'), path.join(DIST, '_assets'));
cp(path.join(ROOT, 'assets', 'screenshots'), path.join(DIST, 'assets', 'screenshots'));

const pages = walk(path.join(SITE, 'pages'));
const built = [];

for (const file of pages) {
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/^\s*<!--meta\s*([\s\S]*?)-->/);
  if (!m) { console.warn('SKIP (no meta):', file); continue; }
  let meta;
  try { meta = JSON.parse(m[1]); }
  catch (e) { console.error('BAD META in', file, e.message); process.exitCode = 1; continue; }

  const content = raw.slice(m[0].length).trim();
  const html = base
    .replace(/{{TITLE}}/g, meta.title || 'OpenELIS Global')
    .replace(/{{DESC}}/g, (meta.desc || '').replace(/"/g, '&quot;'))
    .replace(/{{PATH}}/g, meta.path || '/')
    .replace(/{{OG_IMAGE}}/g, meta.og || '/_assets/og-default.png')
    .replace('{{CONTENT}}', content)
    .replace('<body>', `<body data-active="${meta.active || ''}">`);

  const outDir = path.join(DIST, meta.path || '/');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  built.push(meta.path || '/');
}

// sitemap.xml
const urls = built.map(p => `  <url><loc>https://openelis-global.org${p}</loc></url>`).join('\n');
fs.writeFileSync(path.join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);

// llms.txt — makes the site legible to AI-assisted procurement research
fs.writeFileSync(path.join(DIST, 'llms.txt'),
`# OpenELIS Global
Open-source Laboratory Information System (LIMS) for clinical, environmental, and public-health labs.
FHIR-native, no licensing fees, Mozilla Public License. Stewarded by DIGI at the University of Washington.

## Pages
${built.map(p => `- https://openelis-global.org${p}`).join('\n')}
`);

console.log(`Built ${built.length} pages -> dist/`);
built.forEach(p => console.log('  ', p));
