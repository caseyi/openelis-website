# Project Status — Capability Showcase Initiative

**Last updated:** 2026-04-26 (session 4 — source-grounded v2 drafts)
**Repo:** [caseyi/openelis-website](https://github.com/caseyi/openelis-website) (public, future home: DIGI-UW)
**Tracker for:** Casey, in lieu of digging through every commit

---

## Where we are

Phase 1 done. Phase 2 specs drafted, awaiting one-pass Casey review. Phase 3 homepage bands and Phase 4 capability copy drafts have moved through a **v2 source-grounded pass** — every claim now traces to Jira (epic IDs cited inline), the existing live site (positioning + voice match), or the handover packet. The screenshot directory structure is scaffolded. A WP-exit proposal exists for the side-decision Casey raised.

**One critical decision needed from Casey** before Phase 4.2 / 4.3 HTML build: see "Open framing decision" below. **One smaller decision** about hero CTA pattern propagates to all five capability pages. Both decisions are described in detail in the relevant draft files.

---

## What's drafted, where

### Phase 1 — done

| Deliverable | Location | Status |
|-------------|----------|--------|
| Repo scaffold (README, CONTRIBUTING, LICENSE, .gitignore) | repo root | ✅ pushed (commit 430184f) |
| Slack PM to Taib & Herbert (1.2) | `coordination/phase-1-2-slack-pm-analyzer-demo.md` | ✅ drafted; you send |
| Screenshot capture brief (1.3) | `docs/screenshot-brief.md` | 🟡 awaiting your review |
| AMR epic ID (1.4) | OGC-293 captured | ✅ done |

### Phase 2 — drafts ready for checkpoint

| Deliverable | Location | Status |
|-------------|----------|--------|
| Site map / nav (2.1) | `docs/site-map.md` | 🟡 awaiting your review |
| Feature page HTML template (2.2) | `pages/capabilities/_template/index.html` | 🟡 awaiting your review |
| Roadmap page spec (2.3) | `docs/roadmap-page-spec.md` | 🟡 awaiting your review |
| WordPress publish guide | `docs/wordpress-publish-guide.md` | ✅ drafted; revisit if WP-exit approved |

### Phase 3 — homepage bands

| Deliverable | Location | Status |
|-------------|----------|--------|
| Capability Spotlight (3.1, 🟡) | `pages/homepage/capability-spotlight-COPY-DRAFT.md` | Copy v2; tile selection depends on framing decision below |
| What's New (3.2, 🟢) | `pages/homepage/whats-new.html` | ✅ HTML built; placeholder image URLs |
| Road Ahead (3.3, 🟢) | `pages/homepage/road-ahead.html` | ✅ HTML built; FHIR card badge updated to ⚪ Scoped (was 🟢 Funded — Jira reality is Backlog) |

### Phase 4 — capability page copy drafts (v2, Jira-grounded)

| Deliverable | Location | Status |
|-------------|----------|--------|
| 4.1 Analyzer Integration (🟡) | `pages/capabilities/analyzer-integration/COPY-DRAFT.md` | v2 — full Pattern A/A2/B/C/E breakdown, 20 profiles in scope, Madagascar/LA2M validation called out |
| 4.2 Environmental Testing (🟡) | `pages/capabilities/environmental-testing/COPY-DRAFT.md` | v2 — **CRITICAL FRAMING DECISION at top of file** |
| 4.3 Vector & Reservoir (🟡) | `pages/capabilities/vector-reservoir/COPY-DRAFT.md` | v2 — same critical framing decision |
| 4.4 Inventory Management (🟢) | `pages/capabilities/inventory-management/COPY-DRAFT.md` | v2 — built-in basic + Odoo ERP framing per Casey 2026-04-26 |
| 4.5 Sample & Storage (🟢) | `pages/capabilities/sample-storage/COPY-DRAFT.md` | v2 — Modbus RTU + Modbus TCP from OGC-52 confirmed |
| 4.6 Roadmap page (🟡) | — | Spec (2.3) approval before HTML |

### Phase 5 — content & rollout

| Deliverable | Location | Status |
|-------------|----------|--------|
| 5.1 Screenshot directory READMEs | `assets/screenshots/{feature}/README.md` | ✅ scaffolded |
| 5.1 Actual screenshots | `assets/screenshots/{feature}/*.png` | Not yet |
| 5.2 Demo video embed | — | Pending video from Taib & Herbert (Phase 1.2) |
| 5.3 Wire screenshots into pages | — | Pending 5.1 |
| 5.4 QA pass | — | Pending |
| 5.5 WordPress publish | — | Pending; WP-exit decision in flight |

### Source material captured

| Source | Location | Note |
|--------|----------|------|
| Source synthesis (one-pager) | `sources/source-synthesis.md` | New — pointers to every source backing the drafts |
| WP-exit proposal | `docs/proposals/wordpress-exit.md` | For sharing with Jan and Rob |

---

## Open framing decision (Casey, please)

**Phase 4.2 (Environmental Testing) and 4.3 (Vector & Reservoir Surveillance):** the Jira reality is that **OGC-527** (the parent epic for both) is in **Backlog**. Most child specs (S-01 through V-04) are also Backlog; a handful (S-01 Compliance Standards, V-01 Vector Specimen Types, V-02 Vector Collection Workflow, OGC-296 Sample Type Management) are In Progress. **No coherent Environmental or Vector module ships today.**

The handover (`02-context/MISSION-AND-STRATEGY.md`) says explicitly: *"If a feature isn't shipped, it doesn't go on a feature page — it goes on the Roadmap."* But `02-context/DECISIONS-MADE.md` lists both as flagship feature pages. These conflict given current state.

**Three options:**

(a) **Keep both as flagship pages, reframed as "in active development."** Status badge on hero, honest about Jira state, useful for the SILNAS funding conversation. Pages of this shape are normal in open-source ("here's what we're building"), but they tug against the no-overclaim guidance. *My recommendation; current v2 drafts use this.*

(b) **Move Environmental + Vector to the Roadmap.** Replace the two flagship slots with currently-shipped capabilities — confirm what's shipped (Pathology, External QA, FHIR & Interoperability, Validation v2/v3 are candidates).

(c) **Hold the launch.** Keep the pages drafted, but don't publish until first SILNAS production deployment lands.

**Once you pick:** Capability Spotlight homepage band (Phase 3.1) tile selection depends on this; if (b), the spotlight needs different tiles.

---

## Other open Casey-only items

1. **Phase 2 review pass.** Four spec docs (1.3, 2.1, 2.2, 2.3) drafted and waiting for one-time review. Approving these unlocks: capability page HTML build, screenshot capture, Roadmap page HTML build.
2. **WP-vs-static decision.** Proposal at `docs/proposals/wordpress-exit.md`.
3. **Hero CTA pattern decision.** Handover template requires hero CTA; my Phase 2.2 template + early drafts went page-as-CTA. v2 drafts switched to required hero CTA. Decision propagates to all five capability pages.
4. **URLs/IDs you owe me:**
   - Specific `docs.openelis-global.org` page for the Diagnostic Testing nav link
   - Canonical FHIR Implementation Guide URL for the FHIR & Interoperability nav link
   - Jira epic IDs for Validation v2/v3 and FHIR Catalog Subscription
   - Slack community URL (Community menu link)
5. **SME fact-check** for Phase 4.2 / 4.3 (if framing (a) wins) — SILNAS partner contact is the obvious reviewer.
6. **Demo video** from Taib & Herbert. Slack PM drafted; you'd send.
7. **Confluence Tracker public-readability** — confirm the Analyzer Integration Tracker is OK to link from public marketing (it's referenced from the Phase 4.1 page).
8. **Catalyst AI Lab Assistant** — exists on the live site as `/catalyst-ai-lab-assistant/`, all sub-features tagged "Coming 2025." Worth a Roadmap card. Tier and badge to assign.

---

## What I can do without further input

- Refine drafts based on your feedback
- Pull additional Jira epics or Confluence pages if specific claims need deeper grounding
- Pull more openelis-global.org pages (About, Vision & Mission, Partners, Contact) if voice-matching the new pages would benefit
- Scaffold an Eleventy or Astro static-site setup on a feature branch (only if WP-exit is approved)
- Continue refining specs based on review comments

If you want me to keep going without supervision, point me at the next 🟢 thing or just say "go." If you want to review what's there, the framing decision above + the four 🟡 spec checkpoints are the right starting points.

---

## Quick reference

- **Repo:** https://github.com/caseyi/openelis-website
- **Source synthesis:** `sources/source-synthesis.md`
- **WP-exit proposal:** `docs/proposals/wordpress-exit.md`
- **Workplan:** `workplan/openelis-website-update-workplan.md`
- **Design conventions:** `docs/design-conventions.md`
- **Live site:** https://openelis-global.org
- **Capture server:** `testing.openelis-global.org` (creds out-of-band)
- **Public demo:** `demo.openelis-global.org` (creds `demo` / `demoDEMO!`, published on `/getting-started/demo/`)
- **Docs site:** `docs.openelis-global.org`
- **AMR epic:** OGC-293
- **Confluence Analyzer Tracker:** [page 1097531396](https://uwdigi.atlassian.net/wiki/spaces/OG/pages/1097531396)
