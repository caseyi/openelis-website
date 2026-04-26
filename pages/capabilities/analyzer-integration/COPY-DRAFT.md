# Analyzer Integration — page copy draft

**Phase:** 4.1
**Target URL:** `/capabilities/analyzer-integration/`
**Status:** Copy draft v2 (2026-04-26) — markdown form, awaiting Phase 2.2 template approval before HTML build. HTML build also blocked on demo video from Phase 1.2.
**Source:** Confluence Analyzer Integration Tracker (page 1097531396, 20 analyzers, 5 patterns, last updated 2026-04-15) + existing live `/analyzers/` page + Jira OGC-325 (HL7 MLLP listener — Done).

**Note on positioning:** The existing live `/analyzers/` page leads with the **plugin-based architecture** and 5 named pre-built profiles (GeneXpert, Sysmex, QuantStudio, Aquios, COBAS). The new page expands the story: **20+ analyzer profiles documented and in active integration**, across 5 patterns covering nearly every connectivity model in clinical labs. Both pages can coexist — `/analyzers/` is the deeper feature dive; this is the capability-level pitch.

---

## Hero

**H1:** Connect any analyzer. Without writing code.

**Subhead:**
ASTM, HL7, vendor Excel templates, sequencing pipeline outputs, even proprietary serial protocols. OpenELIS treats analyzer integration as configuration — drop in a profile, map fields, and the instrument is talking to the LIS. Five integration patterns, twenty profiles in scope, one validated and running in Madagascar.

**Breadcrumb:** Home › Capabilities › Analyzer Integration

**Primary CTA in hero:** "Try the demo" (orange) → `/getting-started/demo/` *(pending hero-CTA pattern decision)*

---

## Why it matters (Section 2)

Manual transcription of analyzer results is slow, error-prone, and frustrating. Every transcription error is a potential patient safety event. Most proprietary LIMS handle new analyzers with custom adapter development — weeks of engineering for each new instrument. OpenELIS treats analyzer onboarding as a configuration exercise: pick a protocol, drop in a profile, map field codes, save. Bench scientists get auto-imported results; lab managers get a defensible audit trail; technologists get their day back.

---

## Capability tiles (4 tiles)

### Tile 1 — Five integration patterns, one engine
**Pattern A** — ASTM E1394-97 over TCP/IP. **Pattern A2** — HL7 v2.5 over MLLP. **Pattern B** — sequencing pipeline outputs (e.g., TB-Profiler JSON). **Pattern C** — file-based imports (CSV, Excel, XML). **Pattern E** — proprietary vendor serial protocols. The OpenELIS adapter framework handles all five through a common configuration surface.

### Tile 2 — Twenty profiles in scope today
Clinical chemistry, hematology, immunoassay, ELISA, real-time PCR, microbiology ID/AST, blood culture, coagulation, sequencing, electrophoresis — Mindray BS/BC, Sysmex XN-L and XP, Cepheid GeneXpert (ASTM + HL7), Thermo QuantStudio 5/7 Flex, Tecan Infinite F50, Thermo Multiskan FC, Bruker FluoroCycler XT, Stago ST art, bioMérieux VIDAS, Bruker MALDI Biotyper sirius, BD EpiCenter (microbiology aggregator), Wondfo Finecare, MinION + TB-Profiler, and more. Live status is public on the Confluence Tracker.

### Tile 3 — Validated against real lab output
The Thermo QuantStudio 5/7 Flex profile is **validated at LA2M (Madagascar)** against three real export files spanning 188 patients. The Tecan Infinite F50, Thermo Multiskan FC, and Bruker FluoroCycler XT profiles are built from real Madagascar exports — not just vendor docs. "Works on real data" beats "matches the spec" every time.

### Tile 4 — Open by design
Every adapter, profile, and field mapping lives in the open-source OpenELIS repos (core + `openelisglobal-plugins` + Confluence Tracker). Add a new analyzer with a pull request. Improve someone else's profile. The Tracker is public on the wiki.

---

## Screenshot + video section

**Section heading:** "See it in action"

**Embedded video (when shipped):** the Phase 1.2 demo video from Taib or Herbert — paste/upload an HL7 or ASTM config, watch an analyzer come online, see results flow through. **Reserve a 16:9 embed slot here.** Phase 4.1 HTML build is blocked on this video.

**Hero screenshot (until video lands):** `analyzer-integration-config-default.png` — the config screen, empty state.
**Caption:** Adding an analyzer starts with a profile. Pick a protocol, fill in the protocol-specific fields, save.

**Supporting shots (3-up grid):**

1. `analyzer-integration-config-astm-annotated.png` — ASTM profile with callouts.
   *Caption:* Field mapping happens in the UI. No source code required to point an instrument's analyte codes at OpenELIS test definitions.

2. `analyzer-integration-results-incoming.png` — live result flowing in from a connected analyzer.
   *Caption:* Results land on the Validation queue with the analyzer name, lot, and timestamp attached automatically.

3. `analyzer-integration-instruments-list.png` — instruments list with multiple analyzers configured across patterns.
   *Caption:* One OpenELIS instance can manage every connected analyzer in the lab — and across sites.

---

## Optional "Who's Using It" section

**Recommendation:** Madagascar / LA2M is the natural narrative — multiple analyzer profiles validated against real production data there. Casey to confirm partner sign-off on a public quote before any attribution lands. Skip rather than fabricate per FEATURE-PAGE-TEMPLATE.md §5.

---

## Under the Hood

OpenELIS's analyzer integration is built around five named patterns that cover essentially every connectivity model in clinical and public-health labs. Pattern selection is the first decision when onboarding a new instrument; everything else is mapping.

**Pattern A — ASTM E1394-97 over TCP/IP.** OpenELIS runs an ASTM listener; the instrument connects as a client and pushes (or queries) results in framed ASTM messages. **Examples in scope:** Mindray BS/BC analyzers, Cepheid GeneXpert (ASTM mode), Thermo Indiko, Sysmex XN-L and XP series, Bruker MALDI Biotyper sirius, BD EpiCenter (microbiology aggregator covering BACTEC MGIT, Phoenix, BACTEC FX/9000).

**Pattern A2 — HL7 v2.5 over MLLP.** The OpenELIS HL7 MLLP Listener Service (OGC-325, shipped) accepts ORU messages from any conforming instrument; instrument-specific adapters handle the payload differences. **Examples:** Mindray BS-series and BC-5380, Cepheid GeneXpert (HL7 mode).

**Pattern B — Pipeline output.** For instruments where the "instrument" is really a sequencer plus a bioinformatics pipeline. Results come in as structured JSON. **Example:** MinION + TB-Profiler — full WHO-graded MDR/Pre-XDR/XDR resistance classification, per-drug calls with mutation details, sequencing QC metrics, all rendered through the slot-based custom preview component (OGC-324, FRS v3.0).

**Pattern C — File-based imports.** CSV, Excel, XML — exports the instrument or its software produces, uploaded by lab staff or dropped by a watcher service. **Examples:** Thermo QuantStudio 5/7 Flex (Excel — VALIDATED at LA2M), Tecan Infinite F50 (custom lab Excel templates), Thermo Multiskan FC (SkanIt CSV/XLSX), Bruker FluoroCycler XT (standardized Excel template), Wondfo Finecare FS-205 (history.csv), DNA Technology DT-Prime (XML).

**Pattern E — Proprietary vendor serial protocols.** The long tail. **Examples:** Stago ST art (vendor serial), bioMérieux VIDAS (BCI protocol).

**Shared infrastructure (already shipped):**
- HL7 MLLP Listener Service (OGC-325)
- Analyzer File Upload Screen with Slot-Based Preview System (OGC-324, FRS v3.0)

**Plugin model and profile model coexist.** The legacy/intermediate path uses analyzer plugin JARs dropped into `/var/lib/openelis-global/plugins/` (per the existing live `/analyzers/` page); the modern path uses configuration profiles in the Tracker pattern. Both are open source. Both ship today. Choose the one that fits your instrument and timeline.

---

## Related Resources (3 buttons + optional)

1. **Documentation** → `https://docs.openelis-global.org/` *(specific section TBD)*
2. **Try the demo** → `/getting-started/demo/`
3. **GitHub** → `https://github.com/I-TECH-UW/OpenELIS-Global-2` and `https://github.com/DIGI-UW/openelisglobal-plugins`

Optional 4th button (purple `#7b1fa2`):

4. **Analyzer Integration Tracker (Confluence)** → `https://uwdigi.atlassian.net/wiki/spaces/OG/pages/1097531396` — live status of every analyzer profile, plus validation data and field-collection checklists. *[VERIFY: confirm Confluence space is publicly readable before linking from a public marketing page.]*

---

## Closing CTA band

**Headline:** Have an analyzer that needs a profile?

**Body line:** OpenELIS's integration framework is open-source and built for partners. Bring an instrument, bring a vendor doc, bring a real export file — we'll help you stand up the profile.

**CTA button (orange `#e65100`):** Get in touch → `/getting-started/contact/`

---

## Open questions for Casey

- [ ] Hero headline — "Connect any analyzer. Without writing code." is the working draft. Alternatives: "Any analyzer, any protocol, one LIS"; "From bench to LIS in a profile, not a sprint"; "Configure new analyzers in hours, not weeks" (matches existing /analyzers/ language).
- [ ] **Demo video** — when Taib or Herbert lands the recording, embed slot is reserved. The page is shippable without the video (screenshot fallback) but lands harder with it.
- [ ] How does this page relate to the existing `/analyzers/` page? (a) Both coexist (this page = capability pitch, that page = deep feature dive); (b) This replaces `/analyzers/` and we redirect; (c) Move content from `/analyzers/` into this page and retire the old URL with a redirect.
- [ ] Linking the Confluence Tracker — is the OG Confluence space publicly readable, or members-only? If members-only, drop the Tracker link from public marketing.
- [ ] "Who's Using It" — Madagascar partner quote permissions (Ingenoysa, LA2M, or Herbert/Taib)?
- [ ] Tile 2 says "Twenty profiles in scope today." Existing site claims "50+ analyzers" — that's likely counting older plugin-model integrations and field-tested instruments not yet in the new Tracker. Casey to pick the framing: 20 documented profiles in the modern Tracker, OR 50+ across all integration paths?

---

## v2 changelog

- Added Section 2 "Why it matters" per template requirement
- Acknowledged the existing /analyzers/ page positioning (plugin model, 5 named profiles, Westgard) and framed the new page as expansion not replacement
- Added Madagascar / LA2M validation story prominently (Tile 3)
- Confirmed OGC-325 HL7 MLLP Listener as Done
- Added Pattern descriptions with concrete instrument examples per pattern
- Updated Contact CTA to existing live-site path `/getting-started/contact/`
- Reserved video embed slot for Phase 1.2 deliverable
- Added second GitHub link to `openelisglobal-plugins` repo per the existing /analyzers/ page reference
