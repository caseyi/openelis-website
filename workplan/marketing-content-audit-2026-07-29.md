# Marketing content audit & workplan — 2026-07-29

**Trigger:** Casey — "I want to do a review of my website content in these files, as a good marketing tool, what are the gaps? What are we understating?" plus "what do we need to make it look more polished."

**Method:** Read all 18 built pages in `site/pages/**` and the shared layout, then compared claims against primary source material gathered this session — the Confluence Analyzer Integration Tracker (page 1097531396), Jira epics (OGC-60/52/64/59/325/527/447/293), the COCOMO II valuation doc, the live-site deployment data, and the seeded `indonesiademo` instance.

**Headline finding:** The writing quality is good — "Why it matters" callouts, plain language, no SaaS filler, honest hedging on Catalyst. The problem is not craft. It's that **the site understates evidence we already hold**, and is **missing three or four assets a ministry needs in order to say yes.**

---

## Part 1 — What we're understating

### 1.1 The peer-reviewed outcome study (highest-value unused asset)

A 2024 *JMIR Public Health & Surveillance* study across 21 clinical laboratories in Côte d'Ivoire found laboratory data timeliness and completeness **improved measurably following OpenELIS implementation**.

For a product sold to ministries and funders, independent published evidence of outcome improvement is the single most valuable marketing asset available. Current treatment:

- One sentence mid-page on `/why-openelis/`
- A title in a list on `/about/published-works/`

Missing: pull quote, extracted finding, "what the study measured / what it found" callout, homepage placement.

### 1.2 Analyzer integration — the site is now *less* specific than the old WP site

| Source | Claim |
|---|---|
| Old WordPress site | "50+ analyzers" |
| Current site | "GeneXpert, Sysmex, Cobas, QuantStudio, and more" |
| **Confluence tracker (actual)** | **20 documented profiles across 5 integration patterns (A/A2/B/C/E)** |
| **Tracker validation status** | **QuantStudio 5/7 Flex — VALIDATED against real production output at LA2M Madagascar (188 patients, 3 real export files)** |
| Also Madagascar-validated | Tecan Infinite F50, Thermo Multiskan FC, Bruker FluoroCycler XT |
| Live API | `/rest/analyzer/profiles` serves 20 named profile templates |

"Validated against real instrument output in production" is a claim almost no competitor can make. We are not making it.

### 1.3 The COCOMO valuation is buried

376 person-years · ~$34M to reproduce at global salary rates · ~$68M at US rates.

Currently: a soft grey `.uth` box in the *third* section of `/why-openelis/`. The About page dilutes it further to "hundreds of person-years."

For a ministry building a procurement business case, "you are inheriting $34M of engineering, free" is a headline, not a footnote.

### 1.4 Mauritius is a case study being spent as a sentence

4,000% COVID testing surge absorbed · ~$4.5M saved vs commercial alternatives. Complete narrative arc — pressure, response, outcome, number — compressed into one clause on two pages.

**There is no case study anywhere on this site.**

---

## Part 2 — Gaps that block conversion

| Gap | Cost |
|---|---|
| **No case studies / no customer voice** | 26+ countries, 15 years, zero quotes from any lab director, ministry official, or implementer. Peer proof is the #1 conversion asset for public-sector buyers. |
| **No competitive framing** | Ministries evaluate against DHIS2-LIS, Bahmni, SENAITE, LabWare, Beaker. No "how we compare" content means absence from their comparison spreadsheet. |
| **No total-cost picture** | "$0 licensing" is not a business case. Procurement needs implementation, hosting, training, support costs to build approval paperwork. |
| **No support / implementation pathway** | The real ministry question is "who do I call when it breaks at 2am." "Backed to last" answers abandonment risk, not operational risk. Partner network? Paid support? SLAs? |
| **No deployment map** | 26+ countries as one prose sentence. A map is the highest-impact single visual for this audience. (Noted as deferred in the original workplan — worth revisiting.) |
| **No email capture anywhere** | Zero list-building across the entire site. |
| **Contact form is a `mailto:`** | Silently fails for webmail-in-browser users (likely a majority). Primary conversion path is partially broken. Formspree upgrade path already noted in source comments. |
| **No version / release / changelog surface** | For open-source evaluation, release cadence *is* project-health evidence. We ship continuously and show none of it. |

---

## Part 3 — Credibility risks

1. **`/about/published-works/` stat band says "36+ Publications" — the page lists 14.** Anyone who counts finds the gap.

   **Probable origin of the inflated number (found 2026-07-29):** `docs/site-audit-2026-07.md` records that the *old WordPress* Published Works page had its "Related Research & Publications" section **duplicated in full** — a paste-twice editing artifact. Anyone counting entries on the rendered old page would have counted duplicates. The "36+/20+" figures likely came from that miscount rather than from a real bibliography.

   **Still to verify — publications parity with the old site.** Confirmed the new page has 14 unique entries (10 peer-reviewed journal articles, 1 thesis, 1 conference poster, 1 conference paper, 1 blog post; 2010–2024; Côte d'Ivoire, Vietnam, Haiti, Malawi, Mauritius + Global). **Not yet confirmed:** whether the migration to static dropped any entries the old WP page carried. Old WP content lives in MySQL (the cutover was a folder rename, so the DB should be intact), not in the `website_4fdc2c4b_wpbak_20260703` file backup. Options to check: (a) Wayback Machine snapshot of `/about/published-works/`, (b) query the WP database via cPanel, (c) Casey checks WP admin directly. Stat band has been set to the accurate 14/10 in the meantime — trivially revised upward if more are recovered.
2. **EQA makes the site's boldest differentiator claim with zero evidence.** "Most lab systems let you record EQA results at best. OpenELIS lets a national reference lab *administer* proficiency-testing programs." No screenshots, a `TODO(seed)` in source, and a "View roadmap" CTA that signals it may not be shipped. Either evidence it or soften it.
3. **"Certified for use on high-security government networks"** — stated once, no detail. Which government, what certification? Penetration testing referenced with no date, vendor, or report.
4. **FHIR Implementation Guides referenced but not linked.** Credibility artifact sitting unused.

---

## Part 4 — Polish

### Shipping in production source right now
- `<!-- TODO(Casey) -->` — About page, unconfirmed staff titles
- `<!-- REVIEWER NOTE (Casey) -->` — One Health page, missing vector screenshot
- `<!-- TODO(seed) -->` — EQA page, missing screenshots

### Visual / asset
- Partner logos: mixed formats (`webp`/`jpg`/`png`/`svg`), inconsistent sizing, **none hyperlinked** — WHO, UNICEF, PATH, OpenMRS, Regenstrief, CDC, PEPFAR all dead images
- EQA page: no screenshots at all
- One Health: missing third domain tile (vector) — two-tile grid unbalanced against a three-domain claim
- Vector surveillance screenshots need seeding (same pattern used successfully for analyzers/inventory/storage on 2026-07-29)

### Copy / detail
- Contact page lead is grammatically broken: *"Want to set up a demo, evaluating OpenELIS for your country, sponsoring a capability, or contributing code — tell us…"*
- Published works: no DOIs; one link is a bare ResearchGate profile path that will rot
- Contact: no response-time promise, no confirmation state, no spam protection, no privacy note
- Download: no version number, no system requirements, no checksum
- Getting Started: promises "credentials included" in an H2, credentials actually one click away
- Roadmap in primary nav jumps to Confluence (off-brand); `/roadmap/` 404s by design

---

## Part 5 — Prioritized execution list

| # | Item | Owner | Status |
|---|---|---|---|
| 1 | Fix the `mailto:` contact form (Formspree) | Casey decision → Cowork build | Blocked — needs Formspree account |
| 2 | Pull the JMIR finding into a proper callout (homepage + Why) | Cowork drafts → Casey approves | |
| 3 | Write the Mauritius case study as a real page | Cowork drafts → Casey approves | |
| 4 | Rewrite analyzer integration using tracker data (20 profiles, 5 patterns, name the validated ones) | Cowork | |
| 5 | Promote the COCOMO number out of the grey box | Cowork | |
| 6 | Reconcile "36+" vs 14 publications | Cowork | |
| 7 | Strip the three TODO comments; hyperlink partner logos | Cowork | |
| 8 | Seed vector data + capture the missing One Health screenshot | Cowork | |
| 9 | Add a deployment map | Casey decision → Cowork build | Blocked — needs data source decision |
| 10 | Decide EQA: evidence it or soften it | Casey decision | Blocked — needs shipped-status answer |

### Decisions needed from Casey
- **Staff titles** — confirm exact titles for Herman Muhereza and Samuel Male on `/about/` (was a source TODO, moved here 2026-07-29 when the comment was stripped from shipped HTML)
- **Formspree** (or alternative) account for the contact form
- **Deployment map** — data source and whether an interactive map or a static SVG
- **EQA shipped status** — is provider-mode proficiency testing actually built and demonstrable?
- **Support model** — is there a paid-support or partner-network story we can publish?
- **Competitive positioning** — willing to name competitors, or prefer an unnamed "how to evaluate a LIMS" framing?

---

## Appendix — where the source evidence lives

- Confluence Analyzer Integration Tracker: page `1097531396` (20 analyzers, 5 patterns, confidence ratings, validation data inventory)
- Jira epics: OGC-60, OGC-52, OGC-64, OGC-59, OGC-325, OGC-527, OGC-447, OGC-293
- COCOMO II valuation: `sources/openelis-cocomo-ii-valuation.md`
- Source synthesis from the 2026-04 pass: `sources/source-synthesis.md`
- Seeding runbooks (analyzers / inventory / storage): `cowork-handover-v2/SEEDING-*.md`
- Screenshot capture harness: `~/Documents/OpenELIS QA/` (Playwright, driven via Control-your-Mac)
