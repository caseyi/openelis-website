# Inventory Management — page copy draft

**Phase:** 4.4
**Target URL:** `/capabilities/inventory-management/`
**Status:** Copy draft v2 (2026-04-26) — markdown form, awaiting Phase 2.2 template approval before HTML build.
**Source:** OGC-64 Jira epic (Done) + handover packet + Casey clarification 2026-04-26 (built-in basic reagent inventory ↔ optional Odoo ERP integration). Existing live site `/features-and-functionality/#inventory` markets the Odoo path; this page leads with the OpenELIS-native module.

**Working name decision:** Page is titled "Inventory Management" to match the nav slug `/capabilities/inventory-management/`. Internal scope is the **built-in reagent inventory** (OGC-64). Casey may prefer narrower H1 like "Reagent & Lot Management" — see open questions.

---

## Hero

**H1:** Built-in reagent inventory, with ERP-grade options.

**Subhead:**
Track reagents, cartridges, and rapid diagnostic tests at the lot level — straight inside OpenELIS. Connect to Odoo when you need full ERP-grade billing and procurement. Pick the depth that fits your lab; both paths are open.

**Breadcrumb:** Home › Capabilities › Inventory Management

**Primary CTA in hero:** "Try the demo" (orange) → `/getting-started/demo/` *(per FEATURE-PAGE-TEMPLATE.md §1, hero CTA is required — Casey to confirm whether all five pages adopt this or stick with the page-as-CTA pattern I drafted earlier)*

---

## Why it matters (Section 2 — was missing in v1)

Running out of a reagent at 4pm on Friday is the difference between a lab open Monday and a lab in catch-up mode all week. OpenELIS has shipped a **basic reagent inventory** built in to the LIS — lot-level tracking, expiration alerts, FEFO suggestion, and direct linkage to test results and QC. For labs that need full ERP-grade billing, purchase orders, equipment maintenance, and accounting integration, OpenELIS connects to **Odoo**. One inventory story, two depths — pick what fits your operation.

---

## Capability tiles (4 tiles)

### Tile 1 — Built-in reagent, cartridge & RDT tracking
A unified interface for **Reagents, Cartridges, and RDTs** — three categories that cover most consumables in a clinical lab. Master Item Catalog manages the reference list; Inventory Lots track real-world stock at the lot level.

### Tile 2 — FEFO and expiration alerts
**First-Expired, First-Out** auto-suggestion when staff record usage. Per-item expiration thresholds you set in admin; soft-warning override when an exceptional case demands it. Low-stock and expiry alerts on the dashboard before they become a stockout.

### Tile 3 — Linked to results and QC
The "Lot Used" dropdown sits next to the Method field on Result Entry — making lot traceability part of the workflow, not a parallel one. Westgard QC linkage means lot changes feed the quality narrative automatically.

### Tile 4 — Reports built for accreditation and recall
Four standard reports out of the box: **Stock Levels**, **Usage Trends**, **Expiration Forecast**, and **Lot Traceability** (the recall-scenario report). Audit-ready output for ISO 15189, SLIPTA, and grant reporting.

---

## Optional 5th tile — ERP integration (the Odoo path)

For labs that need to go further: **Odoo ERP integration** (already shipped, marketed on the live site) layers procurement workflows, automated reordering, equipment maintenance scheduling, and integrated billing on top of the OpenELIS-native inventory. Two-way sync; one source of truth for what's in the lab and what's been ordered.

---

## Screenshot section

**Section heading:** "What it looks like in OpenELIS"

**Hero shot (full width):** `inventory-management-dashboard.png` — populated inventory dashboard.
**Caption:** Every reagent, cartridge, and RDT on one dashboard, color-coded by stock state.

**Supporting shots (3-up grid):**

1. `inventory-management-item-detail.png` — slide-out panel with item info, usage history, QC history.
   *Caption:* Drill into any item to see lot-by-lot history.

2. `inventory-management-low-stock-alert.png` — low-stock alert with reorder context (annotated).
   *Caption:* Configurable per-item thresholds catch slow-moving items before the bench does.

3. `inventory-management-receive-stock.png` — Add Lot quick-add modal mid-entry.
   *Caption:* Inline catalog item creation when you're receiving something new.

---

## Optional "Who's Using It" section

**Recommendation:** SKIP for the launch draft — testimonial quotes need partner sign-off (per FEATURE-PAGE-TEMPLATE.md §5: "If no real quote available, skip the section rather than fabricating").

---

## Under the Hood

OpenELIS's reagent inventory ships as a first-class module — same data model patterns, same audit trail, same role-based permissions as the rest of the LIS.

- **Item Catalog (master list):** name, type (Reagent/Cartridge/RDT), manufacturer, part number, storage requirements, quantity per unit, minimum stock level, expiration alert days, dilution notes (reagents), compatible analyzers (cartridges).
- **Inventory Lots:** catalog item reference, lot number, optional expiration date, date received, initial/current quantity, status, storage location, date opened, calculated expiry-after-opening.
- **Permissions model:** Results role (view + record usage + lot selection on result entry), Validation role (approve lot changes), Admin role (full CRUD on catalog/lots, configure alerts, disposal, reports).
- **Audit trail:** every adjustment, reason, and signature captured via the standard OpenELIS event model — exportable for accreditation reporting.
- **Disposal:** reuses the sample disposal modal — same workflow shape, same audit trail.

**Future enhancements (currently out of scope, on the Roadmap):**
- Automatic consumption decrement tied to test completion
- Tests-remaining tracking for cartridges
- Calibration workflow
- Procurement / ordering integration (currently routed through Odoo)
- Cost tracking
- **FHIR integration** (SupplyDelivery, InventoryItem, Device resources) — explicitly OUT of scope v1

---

## Related Resources (3 buttons)

1. **Documentation** → `https://docs.openelis-global.org/` *(specific section TBD)*
2. **Try the demo** → `/getting-started/demo/`
3. **GitHub** → `https://github.com/I-TECH-UW/OpenELIS-Global-2`

Optional 4th button (purple `#7b1fa2`):

4. **Jira epic** → `https://uwdigi.atlassian.net/browse/OGC-64`

---

## Closing CTA band

**Headline:** Ready to take inventory off the spreadsheet?

**Body line:** Built-in reagent inventory ships today. Need ERP-grade billing on top? OpenELIS connects to Odoo. Get in touch and we'll help you pick the right depth.

**CTA button (orange `#e65100`):** Contact us → `/getting-started/contact/`

---

## Open questions for Casey

- [ ] H1 — "Built-in reagent inventory, with ERP-grade options." is the v2 working draft. Alternatives: "Reagents, cartridges, and RDTs — tracked", "Inventory that works with your lab's depth", "Stock you can count on, the way your lab needs it".
- [ ] Page title in nav — "Inventory Management" (matches slug + existing site language) or shorter "Inventory" or more specific "Reagent & Lot Management"?
- [ ] Hero CTA pattern — handover template requires hero CTA; my v1 draft and feature template went page-as-CTA. **Decision propagates to all five capability pages.** Pick once.
- [ ] Should the page describe Odoo integration in equal weight (5-tile grid) or as a sidebar/optional section (current v2 draft)?
- [ ] Should the future-enhancements bullets stay on this page or move entirely to the Roadmap?
- [ ] Real OpenELIS-deployment quote when available?

---

## v2 changelog

- Added Section 2 "Why it matters" per FEATURE-PAGE-TEMPLATE.md §2 requirement
- Reframed scope around Casey's clarification 2026-04-26: built-in basic reagent inventory + optional Odoo ERP layer
- Replaced "kits, consumables" with the OGC-64 official terms: **Reagents, Cartridges, RDTs**
- Confirmed FEFO is shipped (not [VERIFY]'d any more)
- Named the four shipped reports (Stock Levels, Usage Trends, Expiration Forecast, Lot Traceability)
- Added "Lot Used dropdown adjacent to Method field on Result Entry" — concrete UX detail
- Removed the FHIR claim that contradicted OGC-64's "out of scope v1"
- Added Jira epic OGC-64 as a 4th Related Resource link
- Updated Contact CTA to the existing live-site path `/getting-started/contact/`
