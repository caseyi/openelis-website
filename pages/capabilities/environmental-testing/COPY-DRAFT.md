# Environmental Testing — page copy draft

**Phase:** 4.2
**Target URL:** `/capabilities/environmental-testing/`
**Status:** Copy draft v3 (2026-04-26) — markdown form, awaiting Phase 2.2 template approval before HTML build. Framing approved by Casey 2026-04-26: claim as shipping / available, not "in active development."
**Source:** OGC-527 Vector — Environmental & Vector Testing Module + child specs S-01 through S-09 (16 specs total) + handover packet.

---

## Hero

**H1:** Environmental testing, configured to your country's rules.

**Subhead:**
Water, soil, air, waste — sample-source tracking, location and GPS, configurable quality regimes, automatic compliance flags. Built with the Indonesia SILNAS partnership; deployable for any country whose ministry runs combined clinical and environmental surveillance.

**Breadcrumb:** Home › Capabilities › Environmental Testing

**Primary CTA in hero:** "Try the demo" (orange) → `/getting-started/demo/` *(pending hero-CTA pattern decision)*

---

## Why it matters (Section 2)

Most clinical LIMS treat environmental data as "not our problem." Ministries that run combined clinical, environmental, and vector surveillance programs end up reconciling spreadsheets against the LIS at the end of every quarter. OpenELIS's environmental module brings water, soil, air, and waste sampling into the same system as the clinical work — same audit trail, same accreditation evidence, same FHIR-native data layer. One LIMS, one source of truth.

---

## Capability tiles (4 tiles)

### Tile 1 — Sample types beyond the clinic
Water (drinking, surface, waste), soil, air, sediment, and food matrices. Each sample type carries its own field set — collection method, container, preservation, location. The Sample Type Domain Classification makes Clinical / Environmental / Both a first-class enum on every sample, so the same lab handles both worlds without losing the distinction.

### Tile 2 — Configurable quality regimes
Plug in your country's environmental quality standards. The Compliance Standards Administration handles configurable threshold sets per test definition, with multi-tier indicators. Standards already supported:
- **Indonesia:** PP No. 22/2021 (Baku Mutu Air), PP No. 41/1999 (Baku Mutu Udara Ambien), PermenLH No. 5/2014
- **International:** WHO Drinking Water Guidelines, EPA NPDWR, EU Water Framework Directive

### Tile 3 — Sampling-site registry, not just patients
The Sampling Site Registry handles non-patient and site-based registration — the right abstraction for environmental work where the "subject" is a river, a watershed, a treatment plant. GPS coordinates, sampling-site reference IDs, watershed metadata travel with every sample.

### Tile 4 — Compliance flagging built into validation
The Compliance Evaluation Engine auto-evaluates results against regulatory thresholds with pass/marginal/fail indicators alongside clinical reference ranges. No separate compliance dashboard to maintain — flags surface where the lab is already working. The Laporan Hasil compliance report (Sertifikat Hasil Uji) ships as the Indonesia-specific certificate-of-test export template; the framework supports country-specific report templates anywhere else.

---

## Screenshot section

**Section heading:** "What it looks like in OpenELIS"

**Hero shot (full width):** `environmental-testing-sample-entry.png` — environmental sample entry form mid-fill.
**Caption:** Sample entry adapts to the sample type. Water samples ask different questions than soil samples — and the form follows.

**Supporting shots (3-up grid):**

1. `environmental-testing-classification-dropdown.png` — sample classification dropdown expanded (annotated).
   *Caption:* Pick the sample type at intake and the rest of the form follows the right rules.

2. `environmental-testing-quality-standards.png` — quality standards admin page.
   *Caption:* Quality regimes are admin config. Add a new standard, set its thresholds, attach it to test definitions — done.

3. `environmental-testing-compliance-flag.png` — result with compliance flag, annotated.
   *Caption:* Results that exceed thresholds get flagged automatically. The threshold and source standard travel with the result through reporting.

---

## Optional "Who's Using It" section

**Recommendation:** SKIP for the launch draft until SILNAS partner has consented to a public quote and attribution.

If included later, the natural narrative is the Indonesia / SILNAS partnership:

> "Environmental quality monitoring used to live outside the lab system entirely. With OpenELIS we have water, soil, and clinical results in one place — and our compliance reporting writes itself." — *[Indonesia Ministry / SILNAS partner — quote and attribution to be sourced]*

---

## Under the Hood

Environmental Testing reuses the same OpenELIS sample/test/result core that powers clinical workflows — there's no parallel "environmental" data model. What differs is at the sample-type, field, and validation layer, and all of that is config.

- **Sample classification.** Sample types defined in admin config; field sets bound per type; collection metadata (GPS, container, preservation) modeled as standard sample fields. Clinical / Environmental / Both is a first-class enum on the SampleType entity.
- **Quality standards.** Configurable threshold sets attached to test definitions; multi-tier evaluation (pass / marginal / fail).
- **Compliance reporting.** Laporan Hasil — Indonesian certificate-of-test (Sertifikat Hasil Uji) — ships as a country-specific template; the framework supports country-specific report templates anywhere else.
- **Environmental Dashboard.** Trend analysis, time-series views, with PNG/PDF chart export.
- **Holding-time auto-calculation.** SOP-driven holding-time tracking and worklist deadline enforcement.
- **Pre-analytical eligibility gate.** Sample acceptance/rejection with resampling workflow.
- **Audit trail.** Same event model as clinical — chain of custody, sample movement, result review all logged.

**Standards:**
- **ISO 17025** (testing labs) compatibility for environmental work
- **ISO 15189** (medical labs) compatibility preserved from the core OpenELIS stack
- **FHIR Observation** resources with compliance metadata exposed for downstream surveillance and data hub integration

---

## Related Resources (3 buttons)

1. **Documentation** → `https://docs.openelis-global.org/` *(specific section TBD)*
2. **Try the demo** → `/getting-started/demo/`
3. **GitHub** → `https://github.com/I-TECH-UW/OpenELIS-Global-2`

Optional 4th button (purple `#7b1fa2`):

4. **OGC-527 epic** → `https://uwdigi.atlassian.net/browse/OGC-527` — public issue tracker covering all 16 environmental + vector specs

---

## Closing CTA band

**Headline:** Want OpenELIS to handle your country's environmental quality data?

**Body line:** Configurable to any quality regime. Bring your standards and let's talk about deployment.

**CTA button (orange `#e65100`):** Contact us → `/getting-started/contact/`

---

## Open questions for Casey

- [ ] Hero headline alternatives — "Environmental data, one LIMS"; "Public-health environmental testing, made open"; "Water, soil, air — to your country's rules".
- [ ] Confirm Indonesia regulatory standards list: PP 22/2021, PP 41/1999, PermenLH 5/2014.
- [ ] Cross-link to Vector & Reservoir Surveillance page (many ministries deploy both).
- [ ] SILNAS partner quote — permissions and attribution.
- [ ] Hero CTA pattern (decision propagates).
- [ ] FHIR Observation exposure for environmental samples — confirm specific FHIR profile published or roadmap.

---

## v3 changelog

- Casey 2026-04-26: framing decision — claim as shipped/available, not "in active development." Removed CRITICAL FRAMING section and all "In Progress / Backlog" inline status callouts.
- Kept the source-grounded content (regulatory standards, capability scope from S-01 through S-09)
- Tightened claims to confident shipping language; SILNAS partnership stays as deployment context
- Carried over Section 2 "Why it matters" and other v2 improvements
