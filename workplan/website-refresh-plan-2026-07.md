# Website Refresh Plan — July 2026 (full scope, staged)

**Companion to:** `docs/site-audit-2026-07.md`
**Supersedes:** the WordPress-publish portions of `workplan/openelis-website-update-workplan.md`; content specs (site-map, template, roadmap spec, copy drafts) carry over.
**Scope decision (Casey, 2026-07-02):** full plan — parity fixes AND the beyond-parity work — staged so quick wins complete first.
**Platform decisions:** leave WordPress; keep Bluehost; static HTML built from this repo; deploy = GitHub Action → SFTP to Bluehost; publishing becomes `git push`.

---

## Architecture

Plain HTML pages sharing one stylesheet and header/nav/footer partials, assembled by a small build script (no framework; revisit Eleventy only if News outgrows it). Repo is the single source of truth. Staging at a Bluehost subdomain; cutover is a docroot swap — no DNS or host change. Redirects via `.htaccess` (Apache-native).

**Translations (verified 2026-07-02):** the site uses GTranslate's paid proxy tier — `fr.openelis-global.org` etc. are server-side-translated, search-indexed pages served by GTranslate's proxy, independent of WordPress. Migration tasks: add GTranslate JS snippet to the static template, confirm hreflang output, spot-check language subdomains post-cutover. Native-language SEO seeding is preserved.

---

## Stage 1 — Media library (IN PROGRESS, quick win #1)

The docs-capture harness library already holds **243 PNGs + 39 walkthrough videos**. 140 website-relevant PNGs are triaged into `assets/screenshots/_incoming/`.

**Coverage from existing captures (no new work needed):**

| Website need | Existing capture set |
|---|---|
| Environmental Testing page | environmental-surveillance, environmental-order-results (incl. compliance dashboard, Laporan Hasil report), env-order-flow/stages, compliance-interactive, admin-compliance-standards |
| Vector & Reservoir page | vector-surveillance, vector-order-flow/stages, field-survey-interactive, admin-vector-reference-data |
| Sample & Storage page | sample-storage-management (hierarchy, freezer monitoring), handoff-storage-picker (move sample, location picker), barcode-labels |
| Analyzers page (kills emoji mockups) | analyzer-framework (list, types, error dashboard), analyzer-file-import, westgard-qc (QC dashboard, rule config, control lots) |
| EQA page (kills emoji mockups) | eqa (programs, participants, results analysis) |
| Homepage tiles | results-entry, result-validation, westgard-qc, sample-storage, order-entry, add-patient |
| Bonus storytelling | clinical-order-flow (6-step order→result journey), electronic-signatures, lab notebook, NCE/CAPA |

**1.1 Gap capture run** (targeted harness session):
- Pathology / IHC / Cytology (routes exist: `/PathologyDashboard`, `/ImmunohistochemistryDashboard`, `/CytologyDashboard`)
- ASTM field-mapping detail screen (the "it's just config" money shot for Analyzer Integration)
- Inventory: Odoo shots (separate app — reuse live site's existing Odoo webp if capture is impractical)

**1.2 Curation:** pick winners per page, rename per `docs/screenshot-brief.md` §3 convention, move from `_incoming/` to `assets/screenshots/{feature}/`, fill READMEs. Delete `_incoming/` when done (don't commit it).
**1.3 Video selection:** pick 3–5 walkthrough .webm for feature-page heroes; convert to MP4 (H.264) for compatibility.

## Stage 2 — Static foundation + port (quick-win heavy)

2.1 Base template: partials, one `site.css`, build script; assets served from our domain (kills `mybluehost.me` leakage); GTranslate snippet.
2.2 Port every WP page 1:1, URLs preserved exactly. Fixes baked into the port: Published Works de-duplicated and restyled; stale dates ("Coming 2025", "Q1 2026") corrected; Westgard shipped-vs-coming contradiction resolved; forum URL unified; canonical stats block everywhere.
2.3 Template-level SEO/AI legibility: per-page titles/descriptions/og:image, schema.org SoftwareApplication, sitemap.xml, llms.txt.
2.4 Performance budget: WebP/AVIF, < 500 KB/page target, Lighthouse ≥ 95 — framed for low-bandwidth users.
2.5 Contact form → Formspree (or Bluehost cgi-mail).
2.6 Deploy pipeline: GitHub Action → SFTP to staging subdomain on merge.

**Casey inputs:** Bluehost SFTP/SSH creds, staging subdomain name, canonical stats numbers, Westgard/EQA ground truth.

## Information architecture — One Health hub-and-spoke (decided 2026-07-02)

Three levels, each with one job:

1. **Homepage** — a One Health *teaser* band (not the full triad) high on the page, linking to the hub. This is the differentiator; it sits above the audience router.
2. **One Health hub** (`/capabilities/one-health/`) — the flagship page. Makes the category claim ("one platform for human, animal/vector, and environmental surveillance"), shows one real proof per domain, explains what makes it *actually* integrated (shared core, one audit model, FHIR-native), and routes to the spokes. Replaces Environmental as the headline feature.
3. **Spokes** — per-domain detail pages: `/capabilities/environmental-testing/` (built), `/capabilities/vector-reservoir/`, and clinical (reuse **Features & Functionality** as the clinical spoke for now — decision pending). Each spoke gets a "Part of One Health →" link back to the hub.

Separately, decision-makers travel a **different track** — they buy on risk, cost, and evidence, not features. The audience router's "Evaluating for your country" path points to a dedicated page:

**Why OpenELIS** (`/why-openelis/`) — the decision-maker / Value & Evidence page. Covers: total cost of ownership (COCOMO valuation — figures pending Casey sign-off), data sovereignty & no lock-in, proven-at-scale (Côte d'Ivoire national, Mauritius), peer-reviewed evidence (JMIR study), security & accreditation (ISO 15189 / SLIPTA), interoperability as national-architecture fit (FHIR/OpenHIE/DHIS2), governance & sustainability (DIGI/UW, CDC/PEPFAR), local ownership & low-resource fit, and One Health as budget consolidation. Catalyst/AI stays a forward-looking note, not a pillar.

## Stage 3 — Ship the stalled capability content

3.1 **One Health hub** (`/capabilities/one-health/`) — new flagship. [DRAFTED 2026-07-02]
3.2 **Why OpenELIS** decision-maker page (`/why-openelis/`). [DRAFTED 2026-07-02 — COCOMO figures approved by Casey]
3.3 Five capability spokes from COPY-DRAFTs + template, wired with Stage 1 media (environmental built).
3.4 "Try this yourself →" deep links into demo.openelis-global.org under key screenshots.
3.5 `/roadmap/` page per spec (nav stops pointing at Confluence).
3.6 Homepage: One Health teaser (done), Capability Spotlight + What's New + Road Ahead bands, audience router (done).
3.7 Nav restructure per `docs/site-map.md` — add One Health as top capability; Why OpenELIS under About or top-level.

**Casey inputs (carried from April):** hero CTA pattern; docs URL for Diagnostic Testing; FHIR IG URL; Slack URL.

## Stage 4 — QA + cutover

4.1 Design-consistency pass (one visual language site-wide); link check; mobile; accessibility basics.
4.2 `.htaccess` 301s (incl. lorem-ipsum blog slug); crawl staging vs production URL list — every URL resolves.
4.3 Casey go/no-go → docroot swap. WP backup kept 30 days, then removed.
4.4 Post-launch: 404-log watch week 1; verify GTranslate subdomains render new templates; hreflang check.
4.5 **Auto-News from GitHub releases:** Action pulls `I-TECH-UW/OpenELIS-Global-2` releases into a News page — staleness becomes structurally impossible. Old blog posts kept at their URLs; Blog leaves main nav in favor of News.

## Stage 5 — Evidence & storytelling (the bigger new work)

5.1 **Case-study pages:** Mauritius COVID (4,000% surge, ~$4.5M saved) and Côte d'Ivoire (JMIR 21-lab quasi-experimental study). Sources: published papers + handover packet.
5.2 **Value & Evidence page:** COCOMO II valuation (`sources/openelis-cocomo-ii-valuation.md`) + TCO framing for ministries/funders.
5.3 **Implementations page:** data-driven country cards from a JSON file (start), interactive world map (finish).
5.4 Demo video embed when Taib & Herbert deliver (Slack PM drafted, unsent).

## Stage 6 — Reach

6.1 Human-reviewed French copy for flagship pages (machine-translated FR already indexed via GTranslate; this upgrades quality where it counts).
6.2 Comparison content (vs commercial + other open-source LIS) — drafted carefully, community-reviewed before publish.
6.3 Walkthrough video library page (harness recordings, organized by capability).

---

## Sequencing

Stages 1–2 run in parallel starting now; Stage 3 follows 1+2; Stage 4 gates on 3. Stages 5–6 publish post-cutover via `git push` (cheap to iterate). Off-ramp at every stage boundary — WP stays live untouched until 4.3.

Rough shape: Stage 1 ≈ 1–2 sessions (mostly done); Stage 2 ≈ 1 week; Stage 3 ≈ 1 week; Stage 4 ≈ 2–4 days; Stage 5 ≈ 1 week; Stage 6 ≈ ongoing.

## Decision log

| Decision | Status |
|----------|--------|
| Leave WordPress; keep Bluehost | ✅ Casey 2026-07-02 |
| Full scope, staged quick-wins-first | ✅ Casey 2026-07-02 |
| GTranslate proxy survives migration | ✅ verified 2026-07-02 |
| Plain HTML + build script | Proposed default — confirm |
| Blog → auto-News from releases; old posts kept at URLs | Proposed default — confirm |
| Canonical stats block | ⏳ Casey to provide |
| Hero CTA pattern | ⏳ carried from April |
| EQA page status framing (shipped vs coming — captures exist on testing) | ⏳ Casey to confirm ground truth |
