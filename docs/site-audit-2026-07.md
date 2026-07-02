# openelis-global.org Site Audit — July 2026

**Audited:** 2026-07-02 (Cowork, for Casey)
**Method:** Page-by-page fetch of the live WordPress site + inventory of `caseyi/openelis-website` repo state.

---

## 1. Overall state

The site got a real content refresh in December 2025. The homepage and the Features & Functionality page are in good shape content-wise, with ~13 genuine product screenshots. Everything added after that (Analyzers, EQA, Pathology, Catalyst pages) shipped without screenshots, and the older structural pages (Published Works, About cluster) never got the visual treatment at all. The April 2026 Capability Showcase work (5 capability pages, roadmap page, nav restructure) is drafted in this repo but none of it is live.

## 2. Findings by page

| Page | Screenshots | Issues |
|------|-------------|--------|
| Homepage `/` | 3 real (results, architecture SVG, analyzer mapping) | Stats conflict with Features page; "Explore the Interface" band promises 6 screenshots; forum linked as `talk.openelis-global.org` (nav says `talk.openelisci.org`) |
| Features & Functionality | ~10 real (Dec 2025) | "Coming 2025" ×6 on Catalyst tiles (stale); Westgard/EQA marked "Coming Soon" while Analyzers page presents Westgard as shipped; very long single page |
| Analyzers | **0** — all emoji/CSS mockups | Strong copy, no visual proof; Westgard claims contradict Features page |
| External Quality Assurance | **0** — all emoji/CSS mockups | "Coming in 3.2 (Q1 2026)" — now in the past; needs status update |
| Pathology | **0** — all emoji/CSS mockups | Rich copy (pathology, IHC, cytology) with nothing real to show |
| Catalyst AI Lab Assistant | **0** — all emoji/CSS mockups | "release in 2026" framing OK, but Features-page tiles still say 2025 |
| Published Works | n/a | **"Related Research & Publications" section duplicated in full** (paste-twice artifact); flat unstyled text runs; visually inconsistent with rest of site |
| Blog | n/a | Last post April 2020; one post at lorem-ipsum slug `/donec-iaculis-gravida-nulla/`; still in main nav |
| Roadmap (nav item) | n/a | Links off-site to Confluence; the planned `/roadmap/` page was never built |

## 3. Cross-cutting issues

1. **Three visual languages on one site:** screenshot-driven (Features), emoji-mockup (Analyzers/EQA/Pathology/Catalyst), unstyled text (Published Works, older About pages).
2. **No canonical stats.** Homepage: 1,000+ labs / 18.7M patients / 15+ years / 26+ countries. Features: "Thousands of labs / 4 continents / millions of tests / 4,000% surge / 99%+ uptime."
3. **Stale forward-looking claims** ("Coming 2025", "Q1 2026") actively undermine credibility in mid-2026.
4. **Social sharing broken:** every page's og:image is a blank placeholder; shared links render with no preview image.
5. **Infrastructure leakage:** logo served from `fji.akw.mybluehost.me/website_4fdc2c4b/...` on every page.
6. **WP editing artifacts:** duplicated Published Works section; TutorLMS generator version varies page-to-page (3.9.10–3.9.14); same YouTube video embedded for both Patient Management and Interoperability sections.

## 4. Repo state (what's ready to ship)

- 5 capability page copy drafts, v2/v3, source-grounded (analyzer-integration, environmental-testing, vector-reservoir, inventory-management, sample-storage)
- Homepage What's New + Road Ahead bands — HTML built, placeholder images
- Feature page HTML template, site-map/nav spec, roadmap page spec, screenshot capture brief (per-page shot lists), WordPress publish guide, WP-exit proposal
- `assets/screenshots/*` — **all empty** (README stubs only)

**What changed since April:** the Playwright screenshot harness is now working. The blocker that stalled Phase 5 is gone.

## 5. Open items carried from April (STATUS.md)

- Hero CTA pattern decision (propagates to all 5 capability pages)
- URLs/IDs owed: docs page for Diagnostic Testing nav link, canonical FHIR IG URL, Slack community URL, Jira epics for Validation v2/v3 + FHIR Catalog Subscription
- Demo video from Taib & Herbert (Slack PM drafted, unsent)
- Confluence Analyzer Tracker public-readability check
