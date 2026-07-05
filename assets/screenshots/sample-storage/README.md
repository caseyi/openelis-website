# Sample & Storage Management screenshots

**Captured:** 2026-07-05 via `openelis-screenshots` Playwright harness
**Instance:** `indonesiademo.openelis-global.org` (v3.2.1.10, English locale)
**Capturer:** Cowork (harness on Casey's Mac, run 13:59)
**Sourced from:** `~/Documents/OpenELIS QA/docs-media/sample-storage-management/`

## Files landed

- `sample-storage-stored-items.png` — Stored sample items (`/Storage/sample-items`). Memory notes 344 items on the seeded instance — strong populated hero.
- `sample-storage-hierarchy-rooms.png` — Storage hierarchy: rooms (`/Storage/rooms`).
- `sample-storage-storage-devices.png` — Storage devices (`/Storage/devices`) — the freezer list at the device level.
- `sample-storage-freezer-list.png` — Freezer Monitoring dashboard tab (`/FreezerMonitoring?tab=0`) — the live-monitoring version of the freezer list, distinct from the storage-devices shot.
- `sample-storage-freezer-box-view.png` — Storage boxes (`/Storage/boxes`).
- `sample-storage-temperature-trend.png` — Freezer historical trends (`/FreezerMonitoring?tab=2`).

## Not captured (skip + flag per Casey 2026-07-05)

- `sample-storage-box-drill-in.png` — position-level view inside a box; not a top-level route. Would need to click into a specific box row.
- `sample-storage-disposal-flow.png` — disposal is a modal launched from a sample-items row; harness doesn't reliably drive modals.

## Notes

- Two "freezer list" candidates captured (`sample-storage-storage-devices.png` vs `sample-storage-freezer-list.png`). Casey picks which represents the hero freezer shot on the feature page; other becomes a supporting shot or drops.
- `sample-storage-stored-items.png` is the strongest populated shot in this batch (344 items). Consider promoting it above the freezer story on the feature page.
- Sample-type names on `indonesiademo` are Indonesian ("Nyamuk dewasa", "Air Minum"). Visible in the stored-items shot — good match for the Indonesia SILNAS narrative but may look weird for a country-neutral marketing use. Casey to judge.
- Original harness output at `~/Documents/OpenELIS QA/docs-media/sample-storage-management/` (7 files + walkthrough.webm).
