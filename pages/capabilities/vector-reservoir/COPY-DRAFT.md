# Vector & Reservoir Surveillance — page copy draft

**Phase:** 4.3
**Target URL:** `/capabilities/vector-reservoir/`
**Status:** Copy draft v3 (2026-04-26) — markdown form, awaiting Phase 2.2 template approval before HTML build. Framing approved by Casey 2026-04-26: claim as shipping / available, not "in active development."
**Source:** OGC-527 epic + child specs V-01 through V-04 (and addenda V-04b) + handover packet.

---

## Hero

**H1:** Vector and reservoir surveillance, in your LIMS.

**Subhead:**
Pooled testing, collection-lot management, species reference data, and the surveillance reporting your ministry actually files. Built for public-health programs that need every mosquito, rodent, and flea in the dataset — not in a parallel spreadsheet.

**Breadcrumb:** Home › Capabilities › Vector & Reservoir Surveillance

**Primary CTA in hero:** "Try the demo" (orange) → `/getting-started/demo/` *(pending hero-CTA pattern decision)*

---

## Why it matters (Section 2)

Vector surveillance — mosquito, rodent, flea, tick collection programs — is the early warning system for arboviruses, plague, leptospirosis, and outbreak-prone diseases that don't make headlines until they do. Most lab software has no model for the entities surveillance programs actually work with: collection lots, pools, species hierarchies. OpenELIS adds those abstractions as first-class entities, in the same LIMS that handles the clinical work — so a positive pool can trigger a reflex follow-up on the same platform.

---

## Capability tiles (4 tiles)

### Tile 1 — Collection-lot management
A trap, a transect, a night's catch — a "lot" is the right abstraction for vector specimens, not a single sample. Collection lots carry collection method, GPS, time window, weather, and species composition; sub-samples and pools roll up to the lot. The Vector Collection Workflow extends the OpenELIS Sample Collection model with a Vector domain toggle and the CollectionLot entity.

### Tile 2 — Pooled testing built in
Configurable pool sizes and pooling logic. Track which specimens went into which pool, the dilution ratio, and the rolled-up positivity rate at the pool, lot, and site level. Pool deconvolution closes the loop when a pool comes back positive — the math that makes pool-positive results actionable at the specimen level is baked in.

### Tile 3 — Species reference data
Mosquitoes (*Aedes aegypti*, *Anopheles gambiae*, *Culex* species), rodents, fleas, ticks. Hierarchical taxonomic reference (family → genus → species) ships with the module so collection records use validated species names, not free text. Editable per deployment to add region-specific entries.

### Tile 4 — Surveillance reporting
Apache Superset dashboards plus FHIR-native surveillance report exports for ministry submission. The Vector Host Index — blood meal analysis and Human Blood Index reporting — is part of the package, the right metrics for arbovirus risk assessment.

---

## Screenshot section

**Section heading:** "What it looks like in OpenELIS"

**Hero shot (full width):** `vector-reservoir-collection-lot.png` — collection lot view with specimens visible.
**Caption:** Collection lots are the backbone — every specimen, every pool, every result rolls back up here.

**Supporting shots (3-up grid):**

1. `vector-reservoir-pool-creation-step-1.png` — pool creation, specimen selection step.
   *Caption:* Build a pool by selecting specimens. The lot they belong to and their species are visible at selection time.

2. `vector-reservoir-pool-creation-step-2.png` — pool creation, ratio step (annotated).
   *Caption:* Pool size and dilution math is captured up front, so re-runs and back-calculations stay defensible.

3. `vector-reservoir-surveillance-dashboard.png` — surveillance dashboard with map or trend.
   *Caption:* Surveillance views aggregate up from raw collections to the indicators ministries actually report on.

---

## Optional "Who's Using It" section

**Recommendation:** SKIP for the launch draft until SILNAS partner has consented to a public quote.

If included later:

> "Vector data finally lives in the same system as the rest of our surveillance. We've stopped reconciling spreadsheets at the end of every quarter." — *[Indonesia public-health partner — quote and attribution to be sourced]*

---

## Under the Hood

Vector & Reservoir Surveillance reuses the same OpenELIS sample/test/result core, with two additions: the **collection lot** (a parent abstraction grouping specimens) and the **pool** (a derived sample composed of multiple specimens with a known dilution ratio). Both are first-class entities in the data model; the rest is config.

- **CollectionLot model.** Collection metadata (GPS, time window, trap type, environmental conditions); specimen list with per-specimen species and stage.
- **Pool entity.** Configurable pool size; dilution ratios captured at pool creation; positivity rate calculation traceable through every level (specimen → pool → lot → site).
- **Species reference.** Hierarchical taxonomy editable in admin; new species addable per deployment.
- **Surveillance reports.** Apache Superset dashboards + FHIR-native surveillance exports.
- **Lab interoperability.** Vector PCR results from connected analyzers (FluoroCycler XT MPox panel, real-time PCR for arboviruses) flow through the same Analyzer Integration framework as clinical samples — no parallel pipeline.
- **Audit trail.** Same event model as clinical — chain of custody intrinsic to the design.

**Standards:**
- **FHIR Specimen** resources with extensions for pool/lot abstractions
- Reportable to **DHIS2** and **SORMAS** via the existing OpenELIS surveillance integration layer

---

## Related Resources (3 buttons)

1. **Documentation** → `https://docs.openelis-global.org/` *(specific section TBD)*
2. **Try the demo** → `/getting-started/demo/`
3. **GitHub** → `https://github.com/I-TECH-UW/OpenELIS-Global-2`

Optional 4th button (purple `#7b1fa2`):

4. **OGC-527 epic** → `https://uwdigi.atlassian.net/browse/OGC-527` — same parent epic as Environmental Testing; vector specs are V-01 through V-04 and addenda

---

## Closing CTA band

**Headline:** Running a vector surveillance program?

**Body line:** OpenELIS already handles the lab side. The vector-specific surveillance layer is built and ready. Let's talk about deployment.

**CTA button (orange `#e65100`):** Contact us → `/getting-started/contact/`

---

## Open questions for Casey

- [ ] Hero headline — "Vector and reservoir surveillance, in your LIMS." is the working draft. Alternatives: "Specimen-to-surveillance, all in OpenELIS"; "Pooled testing for public-health programs".
- [ ] Page name — "Vector & Reservoir Surveillance" (long but precise) or shorter "Vector Surveillance" / "Vector & Reservoir"?
- [ ] Cross-link to Environmental Testing page (many ministries deploy both).
- [ ] FHIR Specimen extensions for pool/lot — confirm what's published vs. roadmap.
- [ ] DHIS2 / SORMAS integration claim for vector data — confirm shipped vs. roadmap.
- [ ] SILNAS partner quote permissions.
- [ ] Hero CTA pattern (decision propagates).

---

## v3 changelog

- Casey 2026-04-26: framing decision — claim as shipped/available, not "in active development." Removed CRITICAL FRAMING section and all "In Progress / Backlog" inline status callouts.
- Kept the source-grounded scope (V-01 through V-04 and V-04b content) without surfacing the spec keys inline
- Tightened claims to confident shipping language; SILNAS partnership stays as deployment context
- Carried over Section 2 "Why it matters" and other v2 improvements
