# Analyzer Integration screenshots

**Captured:** 2026-07-05 (initial 13:59, refreshed 14:30 after `seed-analyzers` ran)
**Instance:** `indonesiademo.openelis-global.org` (v3.2.1.10, English locale)
**Capturer:** Cowork (harness on Casey's Mac)
**Sourced from:** `~/Documents/OpenELIS QA/docs-media/analyzer-framework/` and `analyzer-file-import/`

## Files landed

- `analyzer-integration-instruments-list.png` — Analyzers List (`/analyzers`). **19 total · 10 ACTIVE · 3 INACTIVE (renamed API-probe artefacts) · 6 SETUP.** Diverse type mix: Hematology (Mindray BC-5380, Sysmex XN, Horiba Pentra), Molecular (Genexpert, QuantStudio, FluoroCycler XT, MALDI Biotyper, DT-Prime), Chemistry (Mindray BA-88A, Mindray BS-200), Immunology (Abbott Architect, Multiskan FC, Tecan F50, Wondfo Finecare), Coagulation (Stago STart 4). Manufacturer names visible.
- `analyzer-integration-config-default.png` — Analyzer types & config (`/analyzers/types`). Config surface.
- `analyzer-integration-error-dashboard.png` — Error dashboard (`/analyzers/errors`).
- `analyzer-integration-qc-dashboard.png` — QC dashboard (`/analyzers/qc/db`).
- `analyzer-integration-westgard-rule-config.png` — Westgard rule configuration (`/analyzers/qc/rule-config`).
- `analyzer-integration-file-import.png` — File import (`/GenericSample/Import`).

## Marketing-shot polish (optional)

The instruments list currently shows three `_probe-deprecated-{4,5,6}` INACTIVE rows — artefacts of API investigation that couldn't be deleted (API returns 405 on DELETE — only rename+INACTIVE possible). For hero use, filter the Status dropdown to "Active" only before capture; alternatively hide them in post.

## How this batch was seeded

Ran `tests/docs/seed-analyzers.docs.spec.ts` — creates 14 realistic analyzers via `POST /api/OpenELIS-Global/rest/analyzer/analyzers`. Idempotent by name. See `~/Documents/OpenELIS QA/tests/docs/seed-analyzers.docs.spec.ts` for the SEEDS array.

## Not captured (skip + flag per Casey 2026-07-05)

- `analyzer-integration-config-astm-selected.png` — would need a specific analyzer's config drilled in.
- `analyzer-integration-config-astm-annotated.png` — annotation pass deferred.
- `analyzer-integration-mapping-panel.png` — `/analyzers/types` IS the mapping panel; `analyzer-integration-config-default.png` covers this.
- `analyzer-integration-results-incoming.png` — brief called for `/results/incoming` which isn't a route.

## Notes

- Original harness output at `~/Documents/OpenELIS QA/docs-media/analyzer-framework/` (7 files + walkthrough.webm) and `analyzer-file-import/` (3 files + walkthrough.webm).
- Same-name analyzers won't be re-created on subsequent seed runs; SEEDS array is idempotent-by-name.
