# OpenELIS Global — Public Website

Source of truth for [openelis-global.org](https://openelis-global.org).

This repository holds the page templates, HTML fragments, screenshots, and supporting assets behind the OpenELIS Global public website. The site itself runs on WordPress; content authored here is copied into WordPress pages on publish. Putting the content under version control gives us review, history, and a clean place to coordinate larger initiatives (page restructures, new capability pages, roadmap updates).

> **Note on location:** This is a working copy at `caseyi/openelis-website` during the initial scaffolding of the Capability Showcase Initiative. The intended home is `DIGI-UW/openelis-website`; content will promote there via PR once repo-creation access is sorted.

---

## Purpose

- Capture the public-website source material in git so changes are reviewable and reversible.
- Coordinate the **Capability Showcase Initiative** — restructuring the homepage, publishing five flagship capability pages, and adding a Roadmap page that functions as a funder-facing sales asset.
- Provide a stable reference for design conventions, screenshot capture specs, and the living workplan.

## What's in here

| Path | What it holds |
|------|----------------|
| `pages/homepage/` | Homepage HTML fragments (hero, capability spotlight band, "What's new" band, Road Ahead teaser) |
| `pages/capabilities/` | One subdirectory per flagship feature page. `_template/` is the reusable page skeleton. |
| `pages/roadmap/` | The Roadmap page HTML, including the four-tier status badge system |
| `components/` | Reusable HTML snippets (wave dividers, card blocks, nav fragments) |
| `assets/screenshots/` | Screenshot library, organized by capability. See `docs/screenshot-brief.md` (coming in Phase 1.3) for capture spec. |
| `assets/icons/` | Custom icons and inline SVGs |
| `assets/videos/` | Placeholder references for embedded video content (video files themselves live on Vimeo / YouTube) |
| `content/` | Long-form copy that spans multiple pages (shared blurbs, boilerplate) |
| `docs/design-conventions.md` | The established OpenELIS website design language — colors, markup rules, layout, accessibility, i18n. **Every deliverable conforms to this.** |
| `workplan/openelis-website-update-workplan.md` | The living plan for the Capability Showcase Initiative |

## Publishing workflow

1. Content authored or edited on a feature branch (`feat/…`, `fix/…`, `docs/…`, `chore/…`).
2. PR opened against `main` with a filled-out checklist (see `CONTRIBUTING.md`).
3. One approving review, squash merge to `main`.
4. On publish days, HTML fragments are copied into the corresponding WordPress pages; screenshots upload to `wp-content/uploads/YYYY/MM/` with absolute URLs matching the paths referenced here.

`main` is the published-ish branch: anything on `main` should be ready for, or already on, the live site.

## Design conventions — the short version

Full spec in [`docs/design-conventions.md`](docs/design-conventions.md).

- **Inline CSS only**, Flexbox for layout, WordPress-compatible HTML (no `<div>` inside `<a>` — use `<span style="display:block">`).
- Palette: teal `#00695c`/`#00897b` (brand), orange `#e65100`/`#ff8f00` (CTAs), purple `#7b1fa2` (publications), blue `#1565c0` (technical content).
- Roadmap status badges: 🟢 `#00695c` funded · 🟡 `#e65100` partially funded · 🔴 `#b71c1c` seeking sponsor · ⚪ `#757575` concept.
- Images use absolute URLs under `https://openelis-global.org/wp-content/uploads/YYYY/MM/`, hyphens (not underscores) in filenames, alt text on every one.

## Stewardship

OpenELIS Global is stewarded by **DIGI at the University of Washington** — [digi.uw.edu](https://digi.uw.edu). The core product repo lives at [`I-TECH-UW/OpenELIS-Global-2`](https://github.com/I-TECH-UW/OpenELIS-Global-2).

## License

Content and code in this repository are released under the Mozilla Public License, v. 2.0, with the Healthcare Disclaimer carried forward from OpenELIS Global. See [`LICENSE`](LICENSE).
