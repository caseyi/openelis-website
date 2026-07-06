# Sample & Storage Management screenshots

**Captured:** 2026-07-05 (initial 13:59, refreshed 17:11 after `seed-storage` populated the hierarchy)
**Instance:** `indonesiademo.openelis-global.org` (v3.2.1.10, English locale)
**Capturer:** Cowork (harness on Casey's Mac)
**Sourced from:** `~/Documents/OpenELIS QA/docs-media/sample-storage-management/`

## Files landed

- `sample-storage-stored-items.png` — Stored sample items (`/Storage/sample-items`). **344 items across 14 pages.** Populated hero. Indonesian sample types visible (Nyamuk dewasa, Air Minum) — good match for the SILNAS narrative.
- `sample-storage-hierarchy-rooms.png` — Rooms (`/Storage/rooms`). **5 rooms:** Hema Lab, Molecular Lab, Serology Lab, Sample Reception, Cold Chain Room.
- `sample-storage-storage-devices.png` — Devices (`/Storage/devices`). **11 devices across 4 rooms**: freezers, refrigerators, ultra-low freezers (-80), sample freezers (-20), vaccine refrigerators. All Active.
- `sample-storage-freezer-list.png` — Cold Storage Monitoring dashboard (`/FreezerMonitoring?tab=0`).
- `sample-storage-freezer-box-view.png` — Storage boxes (`/Storage/boxes`).
- `sample-storage-temperature-trend.png` — Freezer historical trends (`/FreezerMonitoring?tab=2`). **Note:** the `?tab=N` URL param doesn't switch the tab widget — this shot lands on the Dashboard tab, not the Trends tab. SPA bug; captured as-is.

## How this was seeded

Ran `tests/docs/seed-storage.docs.spec.ts` — creates 5 rooms + 10 devices via `POST /rest/storage/rooms` and `POST /rest/storage/devices`. Idempotent by name (409 on duplicate is caught and treated as skip). See `cowork-handover-v2/SEEDING-STORAGE.md`.

## Not captured (skip + flag)

- `sample-storage-box-drill-in.png` — position-level view inside a box; not a top-level route.
- `sample-storage-disposal-flow.png` — disposal is a modal launched from a sample-items row.

## Known quirks

- **Cold Storage Dashboard shows "0 Total Storage Units"** despite the `/rest/coldstorage/devices` endpoint returning 1 registered device (Freezer 1). The dashboard's counter appears to query a different criteria (maybe active-monitoring-configured devices). Follow-on: figure out the coldstorage device POST shape (my probes hit HttpMessageNotReadableException on 4 field-name attempts) so newly-created storage devices auto-register for monitoring.
- **`?tab=N` URL param broken** on FreezerMonitoring — the left-nav sub-item selection updates, but the tab widget in the main pane stays on Dashboard.
- **Freezer 4X row in devices list** is a probe artefact from earlier API investigation. Same treatment as MIN-ITEM in inventory: rename to `_probe-*` and mark Inactive if it shows up in marketing hero shots.

## Notes

- Original harness output at `~/Documents/OpenELIS QA/docs-media/sample-storage-management/`.
- The stored-items shot's sample types are Indonesian (Nyamuk dewasa = adult mosquito; Air Minum = drinking water). For country-neutral marketing, either accept the Indonesia flavor as SILNAS-appropriate context, or seed a different `indonesiademo` clone with English sample-type names.
