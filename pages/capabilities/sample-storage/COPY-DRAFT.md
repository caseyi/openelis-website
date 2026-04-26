# Sample & Storage Management — page copy draft

**Phase:** 4.5
**Target URL:** `/capabilities/sample-storage/`
**Status:** Copy draft v2 (2026-04-26) — markdown form, awaiting Phase 2.2 template approval before HTML build.
**Source:** OGC-60 Sample Storage Management (Done) + OGC-52 Freezer data monitoring & dashboard (Done) + handover packet + existing live site `/features-and-functionality/#sample` which already markets sample management with Move Sample and Sample Disposal screenshots.

**Note:** This page **expands** existing live-site content rather than introducing it from scratch. The live "Sample Management" section already shows Move Sample and Sample Disposal. The new page goes deeper on the storage hierarchy and adds the freezer monitoring story (OGC-52, newly shipped).

---

## Hero

**H1:** Find any sample. In two clicks.

**Subhead:**
A storage hierarchy that mirrors how labs actually work — from freezer to shelf to box to position. Live freezer monitoring with excursion alerts. Disposal workflows that close the chain of custody. Already shipping; running today across deployments from Côte d'Ivoire to Cambodia.

**Breadcrumb:** Home › Capabilities › Sample & Storage Management

**Primary CTA in hero:** "Try the demo" (orange) → `/getting-started/demo/` *(pending hero-CTA pattern decision)*

---

## Why it matters (Section 2)

Lost samples cost money, time, and patient trust. Accreditation bodies — ISO 15189, SLIPTA — explicitly require demonstrated sample traceability from collection through disposal. With OpenELIS, position-level tracking and live freezer monitoring make traceability an artifact of doing the work, not a separate compliance task. When a clinician asks "what happened to my patient's sample?" — the answer is on screen in seconds.

---

## Capability tiles (4 tiles)

### Tile 1 — Storage hierarchy that matches reality
Freezer → shelf → rack → box → position. Configure depth and shape per freezer; mix grid layouts (9×9, 10×10), custom shapes, and capacity rules. The hierarchy is config, not code — add a new freezer or change a layout without engineering involvement.

### Tile 2 — Live freezer monitoring
Temperature streamed from freezers, plotted over time, with excursion alerts the moment a unit goes off-spec. Catch a failing compressor before you lose a study. Supports **Modbus RTU** (RS-485 serial) and **Modbus TCP** for sensor connectivity — the two protocols most lab freezer systems already speak.

### Tile 3 — Position-level tracking, barcode-scan moves
Every sample gets a known position. Move it with barcode scanning, log the move; pull it for testing, log the pull; transfer between locations with parent-child relationships preserved. The chain of custody writes itself.

### Tile 4 — Disposal that closes the loop
Workflow-driven disposal with role-based approval, disposal reason, method, and notes. Maintain a defensible audit trail for accreditation, IRB, and Ministry reporting. Reuses the same disposal modal across sample types — one workflow shape lab-wide.

---

## Screenshot section

**Section heading:** "What it looks like in OpenELIS"

**Hero shot (full width):** `sample-storage-freezer-list.png` — list of freezers, temperature status per row.
**Caption:** Every freezer at a glance, with current temperature and last-access status. Click in to drill down to boxes, racks, and positions.

**Supporting shots (3-up grid):**

1. `sample-storage-freezer-box-view.png` — one freezer expanded, boxes visible.
   *Caption:* Open any freezer to see what's inside. Each box reports its sample count and last access.

2. `sample-storage-box-drill-in.png` — box opened, individual positions shown.
   *Caption:* Position-level tracking means a sample is always findable. Color-coding flags vials past their expected pull date.

3. `sample-storage-temperature-trend.png` — freezer temperature trend with an excursion flagged (annotated).
   *Caption:* Excursions surface immediately. The chart preserves the event in the audit trail.

**Reuse note:** The existing live site shows `Sample-storage.png` (Move Sample) and `Sample-disposal.png` (Sample Disposal) — both still relevant; can be carried forward or refreshed during Phase 5.1 capture.

---

## Optional "Who's Using It" section

**Recommendation:** SKIP for the launch draft. If included later, the natural quote sources are deployments where freezer monitoring meaningfully changed lab operations — Casey to identify partner with sign-off.

---

## Under the Hood

Sample & Storage Management was built across two related work streams: **OGC-60 Sample Storage Management** (storage hierarchy and position-level tracking) and **OGC-52 Freezer data monitoring and dashboard** (sensor integration and excursion alerting). Both are Done and in production.

- **Configurable storage hierarchy.** Freezer / shelf / rack / box / position; capacity rules per layout; mix of standard grids and custom shapes.
- **Sensor protocols supported (OGC-52).** **Modbus RTU** over serial line (RS-485, RS-232) — Modbus.org Application Protocol Specification v1.1b; **Modbus TCP** — Modbus Messaging on TCP/IP Implementation Guide v1.0b. The two protocols cover essentially every modern lab freezer with a digital sensor.
- **Excursion alerts.** Configurable thresholds, duration windows, and recipient routing.
- **Audit trail.** Position-level events captured via the standard OpenELIS event model — chain of custody is intrinsic, not bolted on.
- **Disposal workflow** integrates with the standard OpenELIS user/role permission model (sample-disposal modal reused from earlier core).

**Standards:** Compatible with **ISO 15189** sample-traceability requirements and SLIPTA audit expectations. Storage events surfacable via FHIR `Specimen` resource extensions when downstream systems request them. `[VERIFY: confirm FHIR Specimen exposure for storage events is shipped vs. roadmap]`

---

## Related Resources (3 buttons + optional)

1. **Documentation** → `https://docs.openelis-global.org/` *(specific section TBD)*
2. **Try the demo** → `/getting-started/demo/`
3. **GitHub** → `https://github.com/I-TECH-UW/OpenELIS-Global-2`

Optional 4th button (purple `#7b1fa2`):

4. **Jira epics** → links to OGC-60 (storage) and OGC-52 (freezer monitoring), or pick one parent

---

## Closing CTA band

**Headline:** Ready to know exactly where every sample lives?

**Body line:** Sample & Storage Management is shipping today. Deploy it in your lab, partner with us on freezer monitoring rollouts, or get in touch about a specific storage challenge.

**CTA button (orange `#e65100`):** Contact us → `/getting-started/contact/`

---

## Open questions for Casey

- [ ] H1 — "Find any sample. In two clicks." is the working draft. The "two clicks" claim should be verified against the actual UI on testing.openelis-global.org.
- [ ] Page name in nav — "Sample & Storage Management" (long but precise) or shorter "Storage" / "Sample Storage" / "Storage Management"?
- [ ] Combine OGC-60 + OGC-52 into one narrative (current draft) or split into "Storage" and "Freezer Monitoring" sub-sections?
- [ ] FHIR Specimen exposure — confirm shipped vs roadmap.
- [ ] Hero CTA pattern (decision propagates).

---

## v2 changelog

- Added Section 2 "Why it matters" per template requirement
- Confirmed both OGC-60 and OGC-52 are Done
- Added concrete sensor protocol names: **Modbus RTU** and **Modbus TCP** with spec references (per OGC-52 description)
- Cited ISO 15189 and SLIPTA explicitly (per existing live-site language)
- Reused existing-site reference: `/features-and-functionality/` already markets Sample Management with Move Sample / Sample Disposal screenshots
- Updated Contact CTA to existing live-site path `/getting-started/contact/`
- Added country deployment color (Côte d'Ivoire to Cambodia) per MISSION-AND-STRATEGY.md guidance to "Mention country deployments by name on feature pages where relevant"
