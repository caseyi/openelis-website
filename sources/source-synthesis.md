# Source Synthesis — Capability Showcase Initiative

**Last updated:** 2026-04-26
**Purpose:** Concise pointers to the source material backing every capability page draft. Not a full dump — a navigation aid.

---

## Existing live site (openelis-global.org)

Pulled 2026-04-26.

### Homepage positioning
- Headline: "The Leading Open-Source Laboratory Information System"
- Stats footprint: **1,000+ Labs Deployed · 18.7M+ Patients Supported · 15+ Years Proven · 99%+ Uptime · 26+ countries**
- Mauritius story: **4,000% surge capacity** during COVID; ~$4.5M saved vs commercial alternatives
- License framing: **Mozilla Public License**, "no per-user costs, no annual fees, no vendor lock-in. Invest your budget in implementation, not licensing"
- Stewardship: **DIGI at University of Washington**; supported by CDC, PEPFAR, implementing partners

### Country deployments (all confirmed on existing /features-and-functionality/)
Côte d'Ivoire (national lab network), Haiti (full HIE), Mauritius (national PHS), Indonesia (clinical lab network), Ethiopia (research + clinical), Madagascar (implementation partner), Papua New Guinea (implementation partner), Vietnam (clinical lab network), Tanzania (national Bahmni+OpenELIS), Lesotho (national Bahmni+OpenELIS), Nepal (Bahmni+OpenELIS), Cambodia (Bahmni+OpenELIS). Plus DRC, Liberia, India, South Sudan. Sibling project: **OpenELIS US** (separate codebase, State Public Health Labs in IA, MN, MO, SC).

### Existing capability sections marketed today
Patient Management · Sample Management (incl. **Move Sample, Sample Disposal** — already on the live site) · Results & Analysis (reflex rules, calculated values, pathology, **digital lab notebook**) · **Analyzer Integration** (ASTM E1381/E1394, HL7 v2.5.1, flat file CSV/TSV, plugin model) · Quality Control (Levey-Jennings, **Westgard Rules** — 1:2s, 1:3s, 2:2s, R:4s, 4:1s, 10x; "Westgard Rules Dashboard" labeled **Coming Soon**; "External QA Module" also **Coming Soon**) · Interoperability (FHIR R4, OpenMRS, iSantePlus, SORMAS, DHIS2, **offline-first**) · **Inventory & Equipment** (**Odoo ERP integration** for billing + maintenance; FEFO compliance) · Security (RBAC, **Keycloak/SAML/OAuth2 SSO**, AES-256 at rest, TLS in transit, HIPAA/GDPR/ISO) · Monitoring (**Prometheus + Grafana**)

### Existing /analyzers/ page (live now)
- Markets the **plugin-based architecture** (legacy/intermediate model)
- Pre-built profiles named: **GeneXpert (Cepheid), Sysmex, QuantStudio (Applied Biosystems), Aquios (Beckman Coulter), COBAS (Roche)** — 5 named pre-built, plus "Add Your Own" via `DIGI-UW/openelisglobal-plugins`
- Westgard rules dashboard featured prominently here (despite being "Coming Soon" elsewhere — possible drift between pages)
- Plugin deploys via JAR drop: `mv analyzer-plugin.jar /plugins/ && docker restart openelis`
- Setup docs: `https://uwdigi.atlassian.net/wiki/spaces/OG/pages/240058379/ASTM+Bi-Directional+Analyzer+Setup`

### Existing /getting-started/demo/ page
- Public demo: `demo.openelis-global.org` — **public credentials published on the page**: user `demo`, password `demoDEMO!`
- Caveats on page: public demo (no real PHI), DB resets periodically, Chrome recommended
- These public creds are NOT what we use for screenshot capture — we use `testing.openelis-global.org` admin creds (held out-of-band per `screenshot-brief.md`).

### Existing /catalyst-ai-lab-assistant/ — "Catalyst" capability
- AI-powered data assistant: natural language reporting, custom dashboard widgets, scheduled reports, privacy-first (schema-only, never patient data), visual form builder, fallback query builder
- All sub-features tagged **"Coming 2025"**
- Worth a dedicated Roadmap card (⚪ Concept or 🟢 Funded depending on actual state — Casey to assign)

### Existing top nav (current state)
Features and Functionality (with subnav) · About (with subnav) · Getting Started (with subnav) · Tools · **Roadmap (currently a Confluence link, not an internal page)** · Community · Blog. The new Roadmap page replaces the Confluence link.

---

## Confluence — Analyzer Integration Tracker (page 1097531396)

Pulled 2026-04-26 (last updated 2026-04-15).

- 20 active analyzer profiles + 1 deprioritized (Attune CytPix — no LIS connectivity, research instrument)
- 5 integration patterns (A · A2 · B · C · E)
- **1 VALIDATED** at LA2M Madagascar: **Thermo QuantStudio 5/7 Flex** (3 real XLS exports, 188 patients)
- HIGH-confidence specs (built from vendor docs): Mindray BS-series, Mindray BC-5380, Stago ST art, MALDI Biotyper sirius, Wondfo Finecare CSV, Sysmex XN-L + XP, Indiko/Gallery, MinION+TB-Profiler, BD EpiCenter
- MEDIUM-HIGH (Madagascar-validated against real exports): FluoroCycler XT, Tecan Infinite F50, Thermo Multiskan FC
- HL7 MLLP listener (OGC-325) shipped; Analyzer File Upload screen with slot-based preview (OGC-324) FRS v3.0 complete
- Reference: `https://uwdigi.atlassian.net/wiki/spaces/OG/pages/1097531396`

### Confluence — Analyzers (page 239829012, older "in development" page)
- Documents the **plugin model** (loaded JARs from `/var/lib/openelis-global/plugins/`)
- Plugin repo: `https://github.com/openelisglobal/openelisglobal-plugins`
- Older Perl-script file-watcher import path also documented (legacy)

---

## Jira epics — pulled 2026-04-26

| Key | Summary | Status | Use it for |
|-----|---------|--------|------------|
| **OGC-60** | Sample Storage Management | ✅ Done | Phase 4.5 — confirms shipped |
| **OGC-52** | Freezer data monitoring & dashboard | ✅ Done | Phase 4.5 — protocols: **Modbus RTU (RS-485 serial)**, **Modbus TCP** |
| **OGC-64** | Reagent/RDT/Cartridge management | ✅ Done | Phase 4.4 — full scope: lot tracking, **FEFO auto-suggestion**, expiration alerts, QC/Westgard linkage, 4 reports (**Stock Levels, Usage Trends, Expiration Forecast, Lot Traceability**), Lot dropdown adjacent to Method on Result Entry. **FHIR for inventory explicitly OUT OF SCOPE v1.** |
| **OGC-59** | Patient photo capture | ✅ Done | What's New band — confirmed shipped |
| **OGC-325** | HL7 v2.3.1 MLLP Listener Service | ✅ Done | Phase 4.1 — foundation for HL7 analyzer integration |
| **OGC-527** | Vector — Environmental & Vector Testing Module | 🟡 Backlog (epic) | Phase 4.2 + 4.3 — **EPIC IS BACKLOG; sub-stories partial in-progress.** Covers 16 specs (S-01 through V-04). Regulatory standards: PP No. 22/2021 (Baku Mutu Air), PP No. 41/1999 (Baku Mutu Udara Ambien), PermenLH No. 5/2014, WHO Drinking Water Guidelines, EPA NPDWR, EU Water Framework Directive |
| **OGC-447** | FHIR Catalog Subscription | 🟡 Backlog | Roadmap homepage card — **Backlog status, not "Funded & underway."** Adjust framing. |
| **OGC-293** | AMR Module — Microbiology Case Workbench & Configuration | 🟡 To be assigned | Roadmap Tier 3 — confirms 🔴 Seeking Sponsor. Detailed scope: Case Workbench, AMR Config (Organism Master, Antibiotic Master, Breakpoint Tables CLSI/EUCAST, AST Panels, Expert Rules, etc.), WHONET Integration |

### Environmental + Vector spec breakdown (OGC-527 children)

In Progress (currently being worked):
- OGC-528 S-01 Compliance Standards Administration ⏳
- OGC-555 V-01 Vector Specimen Types & Taxonomy ⏳
- OGC-581 V-02 Vector Collection Workflow + CollectionLot ⏳
- OGC-296 Sample Type Management Module ⏳
- OGC-312 Non-Conformity Overhaul ⏳
- OGC-354 Decouple Sample Collection (env support) — Selected for Development

Backlog (scoped, not started):
- S-02 Sampling Site Registry (OGC-531), S-03 Environmental Order Entry (OGC-537), S-04 Sample Type Domain Classification (OGC-538), S-05 Compliance Evaluation Engine (OGC-547), S-06 Laporan Hasil Compliance Report (OGC-552), S-07 Environmental Dashboard & Trend Analysis (OGC-553), S-08 QC Result Evaluation (OGC-554), S-09 Pre-Analytical Eligibility Gate (OGC-580), V-03 Vector Testing & Identification (OGC-582), V-04 Vector Surveillance Reporting (OGC-585), plus S-06b/S-07b/S-14/V-04b addenda

**Implication:** Phase 4.2 (Environmental) and 4.3 (Vector & Reservoir) capability pages cannot honestly claim these features are shipped. Either reframe as "in active development" pages or move to the Roadmap. **Casey decision needed.** This contradicts `02-context/DECISIONS-MADE.md` which lists both as flagship feature pages — suggests the decision was made before the Jira reality. (Or: some thin shipped baseline exists that I haven't surfaced; needs SME confirmation.)

---

## Handover packet — `cowork-handover/`

- `02-context/MISSION-AND-STRATEGY.md` — primary voice/positioning source. Audience priority: ministries → funders → NGOs → lab directors → developers. Tone: "global health infrastructure, not enterprise software." Avoid: generic SaaS copy, over-claiming, hiding the open-source story.
- `02-context/DECISIONS-MADE.md` — settled questions. Static-site migration explicitly **deferred** (revisit only via approval).
- `02-context/STAKEHOLDERS.md` — stakeholder map; Casey is the sole comms point.
- `06-deliverable-templates/FEATURE-PAGE-TEMPLATE.md` — defines 8 required sections including **"Why it matters" (Section 2)** which my copy drafts currently lack. Adding to all five.
- `sources/openelis-cocomo-ii-valuation.md` — COCOMO II valuation source (separate doc; for funder-facing value claims).

---

## What's still un-pulled and worth pulling later

- `/about/`, `/about/vision-mission/`, `/about/partners/` — for partner page voice match
- `/external-quality-assurance/`, `/pathology-2/`, `/catalyst-ai-lab-assistant/` — three existing capability pages whose voice the new pages should match
- `/getting-started/contact/` — confirm the Contact form supports the `?capability=blood-bank` URL parameter pattern in the Roadmap spec
- The OpenELIS FHIR Implementation Guide canonical URL (Casey to provide)
- The specific `docs.openelis-global.org` page for the Diagnostic Testing nav link (Casey to provide)
- OGC-527 child specs' FRS docs (in `DIGI-UW/openelis-work` repo design gallery)
