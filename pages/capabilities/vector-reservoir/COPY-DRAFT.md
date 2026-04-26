# Vector & Reservoir Surveillance — page copy draft

**Phase:** 4.3
**Target URL:** `/capabilities/vector-reservoir/`
**Status:** Copy draft v2 (2026-04-26) — markdown form, awaiting Phase 2.2 template approval before HTML build.
**Source:** OGC-527 epic + child specs V-01 through V-04 (and addenda) + handover packet.

---

## ⚠️ CRITICAL FRAMING — same decision as Environmental Testing

The Vector specs (V-01 through V-04 and addenda) sit under the same OGC-527 parent epic. Status as of 2026-04-26:

- **In Progress:** V-01 Vector Specimen Types & Taxonomy (OGC-555), V-02 Vector Collection Workflow + CollectionLot (OGC-581)
- **Backlog:** V-03 Vector Testing & Identification (OGC-582), V-04 Vector Surveillance Reporting (OGC-585), V-04b Vector Host Index — Blood Meal Analysis (OGC-604)

**Vector & Reservoir Surveillance is not yet shipped as a coherent capability.** Same framing decision as Environmental Testing — see that draft's CRITICAL FRAMING section. **Casey to pick (a), (b), or (c).** The draft below uses framing (a) — "in active development with confirmed deployment partner."

---

## Hero (under framing (a))

**H1:** Vector and reservoir surveillance, in your LIMS.

**Subhead:**
Pooled testing, collection-lot management, species reference data, and the surveillance reporting your ministry actually files. Built with the Indonesia SILNAS partnership; tracked publicly across V-01 to V-04 in our open issue tracker.

**Status badge inline below subhead:** "🟡 In active development · OGC-527" (matches Environmental Testing).

**Breadcrumb:** Home › Capabilities › Vector & Reservoir Surveillance

**Primary CTA in hero:** "Talk with us" (orange) → `/getting-started/contact/?capability=vector-reservoir`

---

## Why it matters (Section 2)

Vector surveillance — mosquito, rodent, flea, tick collection programs — is the early warning system for arboviruses, plague, leptospirosis, and outbreak-prone diseases that don't make headlines until they do. Most lab software has no model for the entities surveillance programs actually work with: collection lots, pools, species hierarchies. OpenELIS adds those abstractions as first-class entities, in the same LIMS that handles the clinical work — so a positive pool can trigger a reflex follow-up on the same platform.

---

## Capability tiles (4 tiles)

### Tile 1 — Collection-lot management
A trap, a transect, a night's catch — a "lot" is the right abstraction for vector specimens, not a single sample. Lots carry collection method, GPS, time window, weather, and species composition; sub-samples and pools roll up to the lot. **V-02 (OGC-581, In Progress)** extends the OpenELIS Sample Collection model with a Vector domain toggle and the new CollectionLot entity.

### Tile 2 — Pooled testing built in
Configurable pool sizes and pooling logic. Track which specimens went into which pool, the dilution ratio, and the rolled-up positivity rate at the pool, lot, and site level. **V-03 (OGC-582, Backlog)** covers species ID workbench, test panel admin, and pool deconvolution — the math that makes pool-positive results actionable at the specimen level.

### Tile 3 — Species reference data
Mosquitoes (*Aedes aegypti*, *Anopheles gambiae*, *Culex* species), rodents, fleas, ticks. **V-01 (OGC-555, In Progress)** ships a hierarchical taxonomic reference (family → genus → species) so collection records use validated species names, not free text. Editable per deployment to add region-specific entries.

### Tile 4 — Surveillance reporting
**V-04 (OGC-585, Backlog)** is the Vector Surveillance Reporting layer — Apache Superset dashboards plus FHIR-native surveillance report exports for ministry submission. **V-04b (OGC-604)** adds the Vector Host Index — blood meal analysis and Human Blood Index reporting, the right metrics for arbovirus risk assessment.

---

## Screenshot section

**Section heading:** "What it looks like in OpenELIS"

**⚠️ Same caveat as Environmental Testing:** until V-01/V-02/V-03/V-04 land in production, screenshots are likely of design mockups (from `DIGI-UW/openelis-work` design gallery) rather than running software.

Filenames in `assets/screenshots/vector-reservoir/README.md` remain valid for eventual capture; design mockups may be the launch source.

---

## Optional "Who's Using It" section

**Recommendation:** SKIP for the launch draft. The natural narrative is the SILNAS / Indonesia partnership; revisit when first production deployment lands.

---

## Under the Hood

Vector & Reservoir Surveillance reuses the same OpenELIS sample/test/result core, with two additions: the **collection lot** (a parent abstraction grouping specimens) and the **pool** (a derived sample composed of multiple specimens with a known dilution ratio). Both are first-class entities in the data model; the rest is config.

- **CollectionLot model (V-02 / OGC-581, In Progress).** Collection metadata (GPS, time window, trap type, environmental conditions); specimen list with per-specimen species and stage.
- **Pool entity (V-03 / OGC-582, Backlog).** Configurable pool size; dilution ratios captured at pool creation; positivity rate calculation traceable through every level (specimen → pool → lot → site).
- **Species reference (V-01 / OGC-555, In Progress).** Hierarchical taxonomy editable in admin; new species addable per deployment.
- **Surveillance reports (V-04 / OGC-585, Backlog).** Apache Superset dashboards + FHIR-native surveillance exports.
- **Lab interoperability.** Vector PCR results from connected analyzers (FluoroCycler XT MPox panel, real-time PCR for arboviruses) flow through the same Analyzer Integration framework as clinical samples — no parallel pipeline.
- **Audit trail.** Same event model as clinical — chain of custody intrinsic to the design.

**Standards:**
- **FHIR** Specimen resources with extensions for pool/lot abstractions
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

**Body line:** OpenELIS already handles the lab side. The vector-specific surveillance layer is in active development with the SILNAS partnership. Let's talk about deployment timing.

**CTA button (orange `#e65100`):** Contact us → `/getting-started/contact/`

---

## Open questions for Casey

- [ ] **Top-priority decision:** same framing decision as Environmental Testing — (a) keep as flagship with "in active development" framing, (b) move to Roadmap, or (c) hold for launch.
- [ ] If (a): SME review by someone running vector programs, or by the SILNAS partner contact.
- [ ] Cross-link to Environmental Testing page (many ministries deploy both).
- [ ] Page name — "Vector & Reservoir Surveillance" (long but precise) or shorter "Vector Surveillance" / "Vector & Reservoir"?
- [ ] FHIR Specimen extensions for pool/lot — confirm what's spec'd vs. roadmap.
- [ ] DHIS2 / SORMAS integration claim for vector data — confirm shipped vs. roadmap.

---

## v2 changelog

- Added the CRITICAL FRAMING section noting OGC-527 reality
- Replaced previous overclaim framing with "in active development" status
- Added concrete spec references (V-01 through V-04 and addenda)
- Cited specific Jira keys: OGC-555, OGC-581, OGC-582, OGC-585, OGC-604
- Added Section 2 "Why it matters" per template requirement
- Updated Contact CTA to existing live-site path
- Added screenshot caveat: pre-launch captures may be mockups
- Cross-referenced Environmental Testing's framing decision
