# WordPress Publish Guide

How to move content from this repo onto openelis-global.org without breaking anything.

**Audience:** Whoever is doing the WordPress publish (primarily Casey, occasionally a DIGI teammate).

---

## 1. Model — why we work this way

- **This repo is the source of truth** for page structure, HTML markup, inline styles, and assets (screenshots, icons, video references).
- **WordPress is the publishing surface.** Content authored here is copy-pasted into WordPress pages; the repo's `main` branch is always the canonical reference.
- The WordPress editor may rewrite some HTML on save (this is why we use inline CSS, Flexbox, and `<span style="display:block">` in anchors — see `design-conventions.md`). Inspect the rendered page after publish to catch any rewrite.
- The repo predates the WordPress content in some cases. When WordPress and repo disagree, **update the repo first**, then publish.

---

## 2. Before publishing anything

1. Confirm the feature branch is merged to `main` in this repo and the commit SHA is recorded in the PR.
2. Confirm all referenced images are already uploaded to `https://openelis-global.org/wp-content/uploads/YYYY/MM/` at the exact URLs the HTML references.
3. Confirm the target WordPress page exists (or create it in draft state).
4. Take a note of the current WordPress page content — if publish goes sideways, you want a restore path. WordPress revisions usually cover this, but a copy into a scratch doc is a cheap insurance policy.

---

## 3. Uploading screenshots and other assets

**Upload path convention:** `https://openelis-global.org/wp-content/uploads/YYYY/MM/` where YYYY/MM is the year and month of upload. WordPress creates these directories automatically when you upload via the Media Library.

**Filename rules** (match the repo — see `design-conventions.md` and `screenshot-brief.md`):
- All lowercase
- Hyphens only — no underscores (WordPress silently converts underscores to hyphens on upload; do not rely on the conversion, standardize on hyphens at source)
- No spaces, ever

**Verify the absolute URL matches the HTML reference.** If the HTML says `https://openelis-global.org/wp-content/uploads/2026/04/analyzer-integration-hero.png`, upload in April 2026 so the `2026/04/` path segment is correct. If uploading in a different month, update the HTML reference before publishing.

**Alt text:** Set alt text in the WordPress Media Library at upload time — this propagates to the `alt` attribute on every place the image is used. The repo HTML also carries alt text as a fallback; keep them in sync.

---

## 4. Publishing a feature page

### Step-by-step

1. Open the target WordPress page in the block editor.
2. Switch to the **Code editor** view (not the visual block editor). This is essential — the visual editor will mangle the inline CSS.
3. Delete any existing content in the page.
4. Open the corresponding repo file (e.g., `pages/capabilities/analyzer-integration/index.html`) and copy the entire contents.
5. Paste into the WordPress code editor.
6. Switch back to the visual editor briefly to confirm WordPress accepted the markup. If the visual editor shows the page rendering correctly, switch back to code editor — don't save from visual.
7. Save as **Draft** first, not Publish.
8. Preview the draft page in a new tab.
9. Walk the QA checklist in §7 below.
10. If all checks pass, publish.

### What not to do

- Do not edit the HTML in the WordPress visual editor. Make edits in the repo, PR, merge, then re-publish from code editor.
- Do not split the HTML across multiple WordPress blocks. Use a single Custom HTML block (or the Classic Editor block in code-view mode) containing the full page markup.
- Do not rely on WordPress's built-in "Columns" or "Group" blocks for layout. The repo HTML uses Flexbox inline styles for exactly this reason — portable, WP-compatible, and reviewable in git.

---

## 5. Publishing a homepage band

Homepage bands (Capability Spotlight, What's New, Road Ahead) are page sections, not full pages. On the WordPress home page:

1. Open the home page in the block editor, switch to code editor view.
2. Locate the insertion point for the new band. Maintain reading order: hero → Capability Spotlight → What's New → existing bands → Road Ahead teaser → footer.
3. Paste the band HTML from `pages/homepage/{band-name}.html`.
4. Save as draft, preview, walk the QA checklist, then publish.
5. If replacing an existing band, remove the old markup entirely — don't leave it commented out in the page source.

---

## 6. Publishing the Roadmap page

The Roadmap page lives at `/roadmap/` (new page — create in WordPress if it doesn't exist yet).

- Create the page with slug exactly `roadmap`
- Add it to the main navigation menu (Appearance → Menus) as a top-level item, between "Capabilities" and "Getting Started"
- Follow the same publish procedure as a feature page (§4)

---

## 7. Post-publish QA checklist

Before marking a publish done, confirm on the live page:

- [ ] Page renders at desktop breakpoints (≥ 1440 wide) with expected layout
- [ ] Page renders at mobile (375 wide) — all bands stack, no horizontal scroll
- [ ] Hero gradient renders correctly (teal → teal gradient, not flat color)
- [ ] All images load (no broken image placeholders, no 404s in DevTools network tab)
- [ ] Alt text is set on every image (inspect the rendered HTML or use an a11y extension)
- [ ] All links navigate to the expected destination
- [ ] Navigation menu still works (new "Capabilities" and "Roadmap" items, no stray dropdowns)
- [ ] Page title, meta description, and OG tags are set (WordPress SEO plugin)
- [ ] Wave SVG dividers render between sections (not just a solid colored bar)
- [ ] No stray WordPress-added markup (`<p>` tags wrapping things that shouldn't be wrapped — rare but happens)

---

## 8. Recording the publish in git

For publish traceability:

1. Note the commit SHA of the `main` branch at time of publish.
2. Add a short note to the WordPress page revision description (if the theme supports it) or to an internal publish log (spreadsheet, Confluence page — whatever DIGI uses).
3. If the publish surfaces any markup issue that required a live edit, bring that change back into the repo as a hotfix PR — don't let the repo and WordPress drift.

---

## 9. Rollback

If a publish breaks something visible:

1. In the WordPress page editor, use **Revisions** (sidebar → Document → Revisions) to revert to the previous version.
2. File an issue in this repo describing what broke.
3. Fix in a branch, PR, merge, and re-publish from the updated `main`.

---

## 10. Redirects

When a URL changes (see `docs/site-map.md` §5 Redirect rules):

- Use the WordPress redirect plugin already installed on the site (Redirection, Rank Math, or Yoast Premium — whichever is active).
- 301 (permanent) for URL moves that should preserve SEO.
- 302 (temporary) only when intentionally temporary.
- Test each redirect in an Incognito window after adding, to avoid browser-cache false positives.

---

## 11. Coordination with DIGI team

- Major publishes (new feature page, homepage restructure, Roadmap page launch) should be announced in the DIGI team's Slack channel — a heads-up before the page goes live gives teammates a chance to flag anything mid-flight.
- Minor publishes (typo fix, badge update) don't need announcement.
