# Inventory Management screenshots

**Captured:** 2026-07-05 (initial 13:59, refreshed 17:03 and 17:11 after `seed-inventory` + `patch-inventory-thresholds`)
**Instance:** `indonesiademo.openelis-global.org` (v3.2.1.10, English locale)
**Capturer:** Cowork (harness on Casey's Mac)
**Sourced from:** `~/Documents/OpenELIS QA/docs-media/inventory-management/`

## Files landed

- `inventory-management-dashboard.png` — Inventory dashboard (`/inventory`). **20 Total Lots · 5 Expiring Soon · 2 Expired.** Item mix: REAGENT (HIV VL Extraction Kit, Sysmex CELLPACK, Multiskan Wash Buffer, Ziehl-Neelsen Stain Set, Turbidol PT Reagent), CARTRIDGE (Xpert MTB/RIF Ultra, Xpert HIV-1 VL), RDT (HIV Determine, Malaria RDT, SARS-CoV-2 Antigen), HIV_KIT (Wantai HIV Ab/Ag Combo ELISA), SYPHILIS_KIT (Wondfo Syphilis Ab). Real manufacturer names visible (Roche, Sysmex, Thermo Fisher, Cepheid, Abbott, SD Biosensor, Beijing Wantai, Wondfo Biotech). Color-coded Stock Status pills: green "In Stock", yellow "Expiring (8d)" / "Expiring (23d)", red "Expired".

## How this was seeded

Ran `tests/docs/seed-inventory.docs.spec.ts` — creates 12 items + 19 lots via `POST /api/OpenELIS-Global/rest/inventory/items` and `POST /rest/inventory/lots`. Idempotent by name.

Followed by `tests/docs/patch-inventory-thresholds.docs.spec.ts` — PUTs each item with `lowStockThreshold` (the low-stock trigger, which is NOT `minimumStockLevel` as I first guessed).

See `cowork-handover-v2/SEEDING-INVENTORY.md` for API details.

## Not captured (skip + flag)

- `inventory-management-item-detail.png` — slide-out panel, requires row-action drill-in.
- `inventory-management-receive-stock.png` — Add Lot is a modal, not a top-level route.
- `inventory-management-consumption-history.png` — sub-drill within item detail.
- `inventory-management-low-stock-alert.png` — deferred; may re-capture once Low Stock counter updates from the threshold patches (page reload may be needed).

## Known quirks

- **`label.button.action`** shows as a literal column header in the last column — untranslated i18n key. Not a data issue; needs an English translation added in `messages_en.properties` (or wherever OpenELIS localization lives).
- **MIN-ITEM** row at top with LOT-WINNING-1 — probe artefact from API investigation. `partNumber` and `minimumStockLevel` fields aren't in the DTO, so my initial POST attempts failed; two shell items got created before I found the right field set. Renaming stuck (DELETE returns 405); consider PUT-renaming to `_probe-*` and marking Inactive if it shows up in marketing shots.

## Notes

- Original harness output at `~/Documents/OpenELIS QA/docs-media/inventory-management/`.
- Seeding is repeatable — after any demo reset, run `seed-inventory` + `patch-inventory-thresholds`.
