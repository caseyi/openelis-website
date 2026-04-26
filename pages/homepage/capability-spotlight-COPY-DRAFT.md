# Capability Spotlight — homepage band copy draft

**Phase:** 3.1
**Target file (when HTML built):** `pages/homepage/capability-spotlight.html`
**Insertion point on homepage:** Below hero, above the existing partners/deployments band, above What's New, above Road Ahead.
**Status:** Markdown copy draft v2 (2026-04-26). **HTML build deferred** — Phase 3.1 is 🟡 because this band sets the visual standard for all homepage bands; Casey reviews the content here, then HTML build follows once the look is approved.
**Source:** Each tile pulls its one-sentence value prop from the corresponding feature page's hero subhead, so cross-page voice stays consistent.

**⚠️ Tile selection depends on the Environmental + Vector framing decision** flagged in `pages/capabilities/environmental-testing/COPY-DRAFT.md` and `pages/capabilities/vector-reservoir/COPY-DRAFT.md`. Two of the three tiles below assume those flagship pages ship as "in active development." If Casey picks framing (b) — move them to Roadmap — the spotlight tiles need replacing with shipped-only capabilities (Inventory + Sample & Storage are the obvious candidates; Analyzer stays). Update before HTML build.

---

## Section heading and frame

**H2:** What OpenELIS does

**Subhead (one paragraph, centered):**
A laboratory information system built for clinical and public-health work, deployed in real labs across multiple countries, free and open source. These are the capabilities behind it.

**Visual treatment notes for HTML build:**
- Background: white or very light teal-tinted (`#f0f7f6`) — to be decided when band is built
- Section title centered, 32px / 600
- Subhead centered, 16px / 400, max-width 640px
- Three tiles below in a Flexbox row, wrapping on mobile
- Each tile: image at top (16:9), padding 28px, title H3, one-sentence value prop, "Learn more →" link
- Hover: lift translateY(-2px) + stronger shadow
- Card style matches feature-template's capability tiles for visual continuity

---

## Tile 1 — Analyzer Integration

**Image:** `analyzer-integration-config-default.png` (the analyzer config screen, empty state — same hero as the feature page)
**Alt text:** OpenELIS analyzer configuration screen showing protocol selection for a new instrument
**Title:** Analyzer Integration
**Body (1 sentence):**
Connect any analyzer — ASTM, HL7, vendor Excel templates, sequencing pipelines, even proprietary serial protocols — through configuration, not code.
**Link:** `/capabilities/analyzer-integration/`
**Link text:** Learn more →

---

## Tile 2 — Environmental Testing

**Image:** `environmental-testing-sample-entry.png`
**Alt text:** OpenELIS environmental sample entry form with sample classification dropdown visible
**Title:** Environmental Testing
**Body (1 sentence):**
Water, soil, air, and waste — with configurable quality regimes that flag results against your country's environmental standards. `[VERIFY: framing OK pending Phase 4.2 SME review]`
**Link:** `/capabilities/environmental-testing/`
**Link text:** Learn more →

---

## Tile 3 — Vector & Reservoir Surveillance

**Image:** `vector-reservoir-collection-lot.png`
**Alt text:** OpenELIS collection lot view showing specimens grouped by collection event
**Title:** Vector & Reservoir Surveillance
**Body (1 sentence):**
Pooled testing, collection-lot management, and surveillance reporting — built for public-health programs that need every mosquito and rodent in the dataset. `[VERIFY: framing OK pending Phase 4.3 SME review]`
**Link:** `/capabilities/vector-reservoir/`
**Link text:** Learn more →

---

## Optional CTA below the tiles

**Treatment options:**

(a) **No CTA** — let the tiles do the work; the visitor scrolls into What's New next. *Recommended for cleanliness.*

(b) **A small text link, centered:** "See all capabilities →" linking to the new Capabilities menu landing or `/features/` overflow.

(c) **A full button:** Same destination as (b), styled like the orange CTA button.

**Recommendation:** Option (a) for the launch. Add (b) only if engagement data later shows visitors stopping at the spotlight band. Option (c) is too much CTA on a page that has multiple downstream CTAs already.

---

## Open questions for Casey

- [ ] **Tile selection.** The workplan §6 says the spotlight is the three flagship capabilities (Analyzer / Environmental / Vector). The Capability Showcase Initiative also ships Inventory Management and Sample & Storage Management as Tier 1 (Recently Shipped) capabilities. Are those handled by What's New (current draft assumption), or should Capability Spotlight rotate them in? A 5-tile spotlight is too crowded; sticking with 3 keeps the band readable.
- [ ] **Section heading.** "What OpenELIS does" is the working draft. Alternatives: "Capabilities", "What it does", "What you can build with OpenELIS". Casey to pick.
- [ ] **Background color.** White (consistent with the feature template) or a soft teal tint (`#f0f7f6`) to differentiate the band from the surrounding sections? The Road Ahead band is already on a tinted background — picking the opposite for Spotlight gives the page rhythm.
- [ ] **CTA below the tiles** — option (a) / (b) / (c) above.
- [ ] **Tile-image scaling.** Hero shots are 2880×1800 captures; they crop to 16:9 in the tile. Confirm the focal point of each capture lands well in a 16:9 crop, or specify `object-position` per image when HTML is built.
- [ ] **Voice match.** Each tile's value-prop sentence should pull from the corresponding feature page's hero subhead — confirm the three subheads (Phase 4.1, 4.2, 4.3) are in their final form before HTML build, otherwise the band drifts from the pages.
