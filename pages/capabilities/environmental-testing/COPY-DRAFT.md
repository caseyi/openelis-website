# Environmental Testing — page copy draft

**Phase:** 4.2
**Target URL:** `/capabilities/environmental-testing/`
**Status:** Copy draft v2 (2026-04-26) — markdown form, awaiting Phase 2.2 template approval before HTML build.
**Source:** OGC-527 Vector — Environmental & Vector Testing Module (epic in Backlog) + child specs S-01 through S-09 + handover packet.

---

## ⚠️ CRITICAL FRAMING DECISION FOR CASEY

The OGC-527 epic is **Backlog status** as of 2026-04-26. Most child specs are also Backlog; a handful are In Progress (S-01 Compliance Standards Admin, V-01 Vector Specimen Types, V-02 Vector Collection Workflow, OGC-296 Sample Type Management). **No Environmental Testing capabilities are shipped today** as a coherent module.

`02-context/MISSION-AND-STRATEGY.md` says explicitly: *"If a feature isn't shipped, it doesn't go on a feature page — it goes on the Roadmap."* And `02-context/DECISIONS-MADE.md` lists Environmental Testing as a flagship feature page.

**These two statements conflict given current Jira reality.** Casey to pick:

(a) **Keep this page as flagship**, reframed as "in active development with confirmed deployment partner" — the draft below uses this framing. Pages of this shape are normal in open-source ("here's what we're building, here's where the work lives"), but they tug against the handover's no-overclaim guidance.

(b) **Move Environmental + Vector to the Roadmap**, replace the two flagship slots with currently-shipped capabilities (e.g., Validation v2/v3, Pathology, External QA — confirm what's shipped).

(c) **Status quo with stronger fact-check** — keep the page, ship it once the SILNAS partner has at least one production instance to point at.

**My recommendation:** (a) for now, with the page clearly framed as "scoped, funded via SILNAS, in active development" — strong open-source signal, honest about state, useful for the Indonesia/SILNAS funding conversation. Switch to "shipped" framing when the first production deployment lands.

---

## Hero (under framing (a))

**H1:** Environmental testing, configured to your country's rules.

**Subhead:**
Water, soil, air, waste — sample-source tracking, location and GPS, configurable quality regimes, automatic compliance flags. Built with the Indonesia SILNAS partnership; tracked publicly across 16 specs in our open issue tracker.

**Status badge inline below subhead:** "🟡 In active development · OGC-527" (or however Casey wants to surface the status).

**Breadcrumb:** Home › Capabilities › Environmental Testing

**Primary CTA in hero:** "Talk with us" (orange) → `/getting-started/contact/?capability=environmental-testing` *(confirm form supports the parameter pattern)*

---

## Why it matters (Section 2)

Most clinical LIMS treat environmental data as "not our problem." Ministries of Health that run combined clinical + environmental + vector surveillance programs are stuck reconciling spreadsheets against the LIS at the end of every quarter. OpenELIS's environmental module brings water, soil, air, and waste sampling into the same system as the clinical work — same audit trail, same accreditation evidence, same FHIR-native data layer. One LIMS, one source of truth.

---

## Capability tiles (4 tiles)

### Tile 1 — Sample types beyond the clinic
Water (drinking, surface, waste), soil, air, sediment, and food matrices. Each sample type carries its own field set — collection method, container, preservation, location. The Sample Type Domain Classification (OGC-538) makes Clinical / Environmental / Both a first-class enum on the SampleType entity, in active development.

### Tile 2 — Configurable quality regimes
Plug in your country's environmental quality standards. The Compliance Standards Administration (OGC-528, In Progress) handles configurable threshold sets per test definition. Standards already on the scope list:
- **Indonesia:** PP No. 22/2021 (Baku Mutu Air), PP No. 41/1999 (Baku Mutu Udara Ambien), PermenLH No. 5/2014
- **International:** WHO Drinking Water Guidelines, EPA NPDWR, EU Water Framework Directive

### Tile 3 — Sampling-site registry, not just patients
The Sampling Site Registry (OGC-531) handles non-patient and site-based registration — the right abstraction for environmental work where the "subject" is a river, a watershed, a treatment plant. GPS coordinates, sampling-site reference IDs, watershed metadata. Travels with every sample.

### Tile 4 — Compliance flagging built into validation
Compliance Evaluation Engine (OGC-547) auto-evaluates results against regulatory thresholds with pass/marginal/fail indicators alongside the existing clinical reference ranges. No separate compliance dashboard to maintain — flags surface where the lab is already working. Laporan Hasil compliance report (OGC-552) is the Indonesia-specific certificate-of-test export template.

---

## Screenshot section

**Section heading:** "What it looks like in OpenELIS"

**⚠️ Capture work for this page is contingent on shipped functionality.** Until OGC-527 child specs land in production on `testing.openelis-global.org`, screenshots will be of mockups (from `DIGI-UW/openelis-work` design gallery) rather than running software. Capture brief §6.2 placeholders are accurate for the eventual shipped UI; for the launch draft, design mockups may be the only available source.

(Filenames in `assets/screenshots/environmental-testing/README.md` remain valid; sourcing changes — design-mockup vs. live-capture — is the decision.)

---

## Optional "Who's Using It" section

**Recommendation:** SKIP for the launch draft. The natural narrative is the SILNAS / Indonesia partnership — once the first production deployment lands, we revisit with a real partner quote and accurate attribution.

---

## Under the Hood

Environmental Testing reuses the same OpenELIS sample/test/result core that powers clinical workflows — there's no parallel "environmental" data model. What differs is at the sample-type, field, and validation layer, and all of that is config.

- **Sample classification (OGC-538, In Progress).** Sample types defined in admin config; field sets bound per type; collection metadata modeled as standard sample fields.
- **Quality standards (OGC-528, In Progress).** Configurable threshold sets attached to test definitions; pass/marginal/fail tiering.
- **Compliance reporting (OGC-552, Backlog).** Laporan Hasil — Indonesian certificate-of-test (Sertifikat Hasil Uji) export template; framework supports country-specific report templates.
- **Environmental Dashboard (OGC-553, Backlog).** Trend analysis, time-series views, with PNG/PDF chart export (OGC-602).
- **Holding-time auto-calculation (OGC-593, Backlog).** SOP-driven holding-time tracking and worklist deadline enforcement.
- **Pre-analytical eligibility gate (OGC-580, Backlog).** Sample acceptance/rejection with resampling workflow.
- **Audit trail.** Same event model as clinical — chain of custody, sample movement, result review all logged.

**Standards:**
- **ISO 17025** (testing labs) compatibility is part of the scope (per OGC-602 label)
- **ISO 15189** (medical labs) compatibility is preserved from the core OpenELIS stack
- **FHIR** Observation resources with compliance metadata exposed for downstream surveillance / data hub integration

---

## Related Resources (3 buttons)

1. **Documentation** → `https://docs.openelis-global.org/` *(specific section TBD)*
2. **Try the demo** → `/getting-started/demo/` (note: environmental sample types may not yet be present in the demo dataset; surface the available content honestly)
3. **GitHub** → `https://github.com/I-TECH-UW/OpenELIS-Global-2`

Optional 4th button (purple `#7b1fa2`):

4. **OGC-527 epic** → `https://uwdigi.atlassian.net/browse/OGC-527` — public issue tracker with all 16 child specs

---

## Closing CTA band

**Headline:** Want OpenELIS to handle your country's environmental quality data?

**Body line:** Configurable to any quality regime, scoped, in active development with the SILNAS partnership. Bring your standards and let's talk about partnership timing.

**CTA button (orange `#e65100`):** Contact us → `/getting-started/contact/`

---

## Open questions for Casey

- [ ] **Top-priority decision:** the framing decision in the CRITICAL FRAMING section above. (a), (b), or (c).
- [ ] If (a): SME review for the technical claims. SILNAS partner contact would be ideal.
- [ ] If (b): which currently-shipped capability replaces this slot in the flagship five?
- [ ] Hero headline alternatives — "Environmental data, one LIMS"; "Public-health environmental testing, made open"; "Water, soil, air — to your country's rules".
- [ ] Indonesia regulatory standards list — confirm scope: PP 22/2021, PP 41/1999, PermenLH 5/2014.
- [ ] Cross-link to Vector & Reservoir Surveillance page (many ministries deploy both).
- [ ] Hero status badge — yes/no? If yes, what color? (Yellow🟡 In Active Development is a natural choice; matches the four-badge system from the Roadmap spec.)

---

## v2 changelog

- Added the CRITICAL FRAMING section based on Jira reality (OGC-527 is Backlog, most children Backlog or In Progress)
- Replaced the previous overclaim framing with explicit "in active development" status + status badge in hero
- Added concrete spec references (S-01 through S-09, OGC-528, OGC-531, OGC-538, OGC-547, OGC-552, OGC-553, OGC-580, OGC-593, OGC-602)
- Used real regulatory standard names from OGC-527 description (PP 22/2021, PP 41/1999, PermenLH 5/2014, WHO, EPA, EU)
- Replaced [VERIFY] flags with concrete Backlog/In Progress status callouts
- Added Section 2 "Why it matters" per template requirement
- Updated Contact CTA to existing live-site path
- Added screenshot caveat: pre-launch captures may be mockups not running software
