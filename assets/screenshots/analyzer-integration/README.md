# Analyzer Integration screenshots

**Captured:** _not yet — Phase 5.1_
**Demo data:** _TBD — capture session against testing.openelis-global.org_
**Capturer:** _TBD_

## Expected files (from `docs/screenshot-brief.md` §6.1)

- `analyzer-integration-config-default.png` — Analyzer config screen, empty state. Establishes the clean starting point.
- `analyzer-integration-config-astm-selected.png` — ASTM profile selected, config fields populated. Shows the "it's just config" story.
- `analyzer-integration-config-astm-annotated.png` — Same as above with callouts (1 = Protocol dropdown, 2 = Mapping fields, 3 = Save button).
- `analyzer-integration-mapping-panel.png` — Field mapping panel with ASTM/HL7 fields visible.
- `analyzer-integration-results-incoming.png` — Live result flowing in from a connected analyzer; analyzer name + result values visibly inbound.
- `analyzer-integration-instruments-list.png` — Instruments list with 3–5 analyzers configured.

## Notes

- Reference brief: `/docs/screenshot-brief.md` §6.1
- Capture order: hero shot first (config-default), then config-astm pair, then mapping/incoming/list.
- ASTM profile (Mindray BS-200, Cepheid GeneXpert ASTM) is the strongest demo for the "just config" story; HL7 profile is the richer second-pass story.
- For "instruments list" shot, configure at least one analyzer per pattern (A, A2, B, C) so the list visually shows the framework's range.
