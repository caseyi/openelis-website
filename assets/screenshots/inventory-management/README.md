# Inventory Management screenshots

**Captured:** 2026-07-05 via `openelis-screenshots` Playwright harness
**Instance:** `indonesiademo.openelis-global.org` (v3.2.1.10, English locale)
**Capturer:** Cowork (harness on Casey's Mac, run 13:59)
**Sourced from:** `~/Documents/OpenELIS QA/docs-media/inventory-management/`

## Files landed

- `inventory-management-dashboard.png` — Inventory dashboard (`/inventory`). The one shipped route for the module.

## Not captured (skip + flag per Casey 2026-07-05)

- `inventory-management-item-detail.png` — would need to drill into a specific item via row-action menu; unclear which item to open and whether the slide-out panel is reliably reachable via SPA route.
- `inventory-management-low-stock-alert.png` — requires seeded data with items below reorder threshold; unclear on `indonesiademo`. Annotation was also required (deferred).
- `inventory-management-receive-stock.png` — Add Lot / Receive Stock is a modal, not a route; harness doesn't reliably drive modals.
- `inventory-management-consumption-history.png` — same story: sub-drill within the slide-out panel.

## Notes

- Only one route (`/inventory`) is exposed at the top level. Drill-in shots need spec extension with modal-driving code or a screenshot walker.
- The dashboard shot may look sparse depending on seeded inventory state on `indonesiademo`. Casey to review whether it's usable as-is or needs data seeding before publish.
- Original harness output at `~/Documents/OpenELIS QA/docs-media/inventory-management/` (2 files + walkthrough.webm).
