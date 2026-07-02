# Roadmap Page Spec

**Phase:** 2.3
**Target URL:** `/roadmap/`
**Status:** Draft for Casey review. Initial tier assignments confirmed 2026-04-22 ("go for it"); AMR epic locked in as OGC-293.
**Dependencies for build (Phase 4.6):** This spec merged. Phase 1.4 complete — AMR Resistance Module Jira epic captured as **OGC-293** (https://uwdigi.atlassian.net/browse/OGC-293).

---

## 1. Purpose

The Roadmap page is a sales tool. Specifically:

1. **Proof of momentum.** Visible roadmaps are one of the strongest trust signals in open source. Ministries, NGOs, and implementer partners need to see that OpenELIS is alive, funded, and planning ahead before they commit to adopting or deploying it.
2. **Funder-facing URL.** DIGI (Jan, Rob, Casey) needs a stable, shareable link they can drop into funder conversations. "Here's what we're building; here's what needs a sponsor" converts interest into asks.
3. **Community-facing URL.** Prospective contributors need to see what's in scope and what's concept so they can self-route.

The page must be credible (accurate, verifiable), confident (not salesy), and actionable (every item leads somewhere — Jira, Contact Us, GitHub).

---

## 2. Page structure

```
┌──────────────────────────────────────────────────────────┐
│  Hero  —  "What's next for OpenELIS Global"              │
│          one-sentence framing + badge-key legend         │
├──────────────────────────────────────────────────────────┤
│  Tier 1 · Recently Shipped                               │
│    └─ 2–3 release cards, each with screenshot + version  │
├──────────────────────────────────────────────────────────┤
│  Tier 2 · In Active Development                          │
│    └─ 3–5 cards with funding badges + Jira epic links    │
├──────────────────────────────────────────────────────────┤
│  Tier 3 · Planned / On the Horizon                       │
│    └─ 3–5 cards, funding badges, Contact Us CTA on       │
│       Seeking-Sponsor items                              │
├──────────────────────────────────────────────────────────┤
│  How to get a capability prioritized                     │
│    └─ Three lanes: funders → Contact, implementers →     │
│       Jira, community devs → GitHub Discussions          │
├──────────────────────────────────────────────────────────┤
│  Footer CTA band                                         │
└──────────────────────────────────────────────────────────┘
```

### Hero

- Background: teal gradient (same as feature page hero) — `linear-gradient(135deg, #00695c 0%, #00897b 100%)`
- H1: "What's next for OpenELIS Global"
- Subhead: "An open, sponsored, and community-driven roadmap for the world's open-source LIMS." (or similar — keep plain-language, i18n-friendly)
- **Badge legend** inline below the subhead, shown as four small pills with the badge color + label so the key is visible before the user scrolls into tiers.
- No primary CTA in hero — the whole page is the CTA.

### Tier 1 — Recently Shipped

Proves momentum.

- 2–3 cards, one per recent release or newly-shipped capability
- Each card:
  - Small screenshot or icon (reuse feature-page thumbnails — no new captures needed)
  - Title (capability name)
  - Version badge (e.g., "OpenELIS 3.2.1")
  - One-sentence description
  - "Learn more →" link to the corresponding feature page (when available) or the `/features/` catch-all (when not)
- **Initial items** (confirmed by Casey 2026-04-22):
  - **Inventory Management** → links to `/capabilities/inventory-management/`, tagged `3.2.1.x`
  - **Sample & Storage Management** (Storage + Freezer Monitoring) → links to `/capabilities/sample-storage/`, tagged `3.2.1.x`
  - **Patient Photo Capture** (if shipped) → links to `/features/` until a feature page exists

### Tier 2 — In Active Development

Current-quarter work. Shows where effort is actually landing.

- 3–5 cards, each with a funding-status badge (§3)
- Each card:
  - Title
  - Funding-status badge (🟢 🟡 🔴 ⚪)
  - One-sentence scope
  - Jira epic link (for transparency — DIGI is public about the backlog)
  - "Learn more →" if there's a feature page, otherwise link to the Jira epic
  - For 🔴 Seeking sponsor items: "Sponsor this capability →" link to Contact Us
- **Initial items** (confirmed by Casey 2026-04-22):
  - **Blood Bank** — Donor management, crossmatch, component tracking. Jira: OGC-455 / 457 / 459 / 461 / 464. Badge: 🔴 **Seeking sponsor.** Contact Us CTA on card.
  - **Validation v2/v3** — Validation workflow modernization. Jira: *TBD (Casey to supply epic ID).* Badge: 🟢 Funded & underway.
  - **FHIR Catalog Subscription** — Catalog of orderables synced via FHIR Subscription. Jira: *TBD (Casey to supply epic ID).* Badge: 🟢 Funded & underway.
  - **Analyzer Integration (ongoing expansion)** — New analyzer support added via config profiles. Badge: 🟢 Funded & underway.

### Tier 3 — Planned / On the Horizon

Aspirational, wishlist, community/funder-solicited.

- 3–5 cards, same card template as Tier 2
- **Initial items** (confirmed by Casey 2026-04-22):
  - **AMR Resistance Module** — Antimicrobial resistance surveillance and reporting. Jira epic: **[OGC-293](https://uwdigi.atlassian.net/browse/OGC-293)**. Badge: 🔴 **Seeking sponsor.** Contact Us CTA on card.
  - **Lab Notebook** — Researcher-facing capture surface for R&D labs. Badge: ⚪ Concept. No Jira epic yet.
  - **Country Deployment Map** — Live map of OpenELIS deployments. Badge: ⚪ Concept.
  - Additional concept items as Casey identifies them.

### How to get a capability prioritized

Three-lane section that converts roadmap readers into inbound leads. Each lane is a card with an icon and a clear CTA.

| Lane | Audience | CTA | Destination |
|------|----------|-----|-------------|
| **Fund a capability** | Ministries, NGOs, donor-funded programs | Contact us → | `/contact/` (generic Contact Us form) |
| **Deploy and request** | Implementers, country programs | Open a feature request → | Jira, the public-facing ticket surface |
| **Build with us** | Community developers, open-source contributors | Join the discussion → | GitHub Discussions on `I-TECH-UW/OpenELIS-Global-2` |

### Footer CTA band

Standard OpenELIS CTA band — teal gradient, orange button. One headline, one button. Example: "Interested in adopting OpenELIS? We'd love to hear from you." → Contact us.

---

## 3. Funding-status badge system

Four states, each with a distinct color and a specific meaning.

| Badge | Hex | Meaning | When to use |
|-------|-----|---------|-------------|
| 🟢 Funded & underway | `#00695c` (teal — reuses primary brand color) | Money is in, work is actively happening | Current sprint / quarter deliverables with a funded owner |
| 🟡 Partially funded | `#e65100` (orange — reuses CTA color) | Some portion funded; more needed to complete | Capability with partial grant coverage, scope gaps unfunded |
| 🔴 Seeking sponsor | `#b71c1c` (maroon — **new** for this specific use) | Scoped but not funded; needs a partner to kick off | Blood Bank, AMR Resistance Module |
| ⚪ Concept | `#757575` (neutral gray — **new** for this specific use) | On the wishlist; not yet scoped | Lab Notebook, Country Deployment Map |

### Visual treatment

- Pill-shaped badge: `padding: 4px 12px; border-radius: 999px; font-size: 12px; font-weight: 600; color: #ffffff;` on badge color background
- Emoji included in label text: "🟢 Funded & underway"
- Badge sits in the top-right corner of each roadmap card

### CTA coupling

- Cards with 🔴 **Seeking sponsor** get an additional "Sponsor this capability →" link in the card footer, in orange `#e65100` text, pointing to `/contact/`
- All other badges: no extra CTA on the card beyond "Learn more →" or the Jira link
- All sponsor-seeking items route to the **same generic Contact Us** form — no per-capability sponsor page in this cycle (per workplan §2, deferred)

---

## 4. Card template

All three tiers use the same card component — only the badge and CTA vary.

```
┌──────────────────────────────────────────┐
│ [screenshot/icon]                        │
│                                          │
│ Capability Name              [🟢 badge]  │
│                                          │
│ One-sentence scope description.          │
│                                          │
│ [Jira epic: OGC-XXX]                     │
│                                          │
│ Learn more →   [Sponsor this →]*         │
└──────────────────────────────────────────┘
* Sponsor CTA only on 🔴 Seeking-sponsor cards
```

### HTML pattern (for Phase 4.6 implementation)

- Card container: `flex: 1 1 320px; background: #fff; border-radius: 12px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);`
- Layout: Flexbox column. Image at top (rounded 8px), then header row (title + badge, `display: flex; justify-content: space-between`), then description, then meta row (Jira link), then CTA row.
- Hover state: `transform: translateY(-2px);` and stronger shadow — matches feature-card hover pattern from design conventions.

---

## 5. Content authoring rules

Applies to every card on the Roadmap page:

- **Accuracy.** No feature is claimed "done" unless it's shipped. No timeline commitments unless funded (and even then, keep them soft — "in active development this quarter" not "shipping in July").
- **Plain language.** OpenELIS serves a global, multi-lingual audience. Avoid idiom, metaphor, sarcasm, or cultural references.
- **No internal jargon.** No project codenames, no Slack-channel references, no "we're working on the thing Emma asked about."
- **Jira links are public.** Every Jira epic linked from this page must be on a publicly accessible board. If an epic is in a private project, do not link it — describe the scope without the link.
- **No vaporware for funders.** If a capability is listed as Seeking Sponsor, the scope description must be honest about what funding unlocks and what it doesn't. "Donor management, crossmatch, component tracking" — not "full blood bank module with everything."

---

## 6. i18n considerations

- All badge labels are plain English and easy to translate
- Card descriptions are short and declarative — translation-friendly
- No culturally specific references in CTA copy
- The page is not being localized this cycle, but the copy is structured so localization later won't require a rewrite

---

## 7. Accessibility

- Badge color is not the only indicator — the emoji + text label carries meaning without relying on color alone (colorblind-safe)
- All cards are keyboard-navigable; "Learn more" and "Sponsor this" links have visible focus states
- Headings in order: H1 (page title), H2 per tier, H3 per card title
- All images have alt text
- Color contrast: verify each badge's white text meets WCAG AA on its colored background. The four badge colors (`#00695c`, `#e65100`, `#b71c1c`, `#757575`) all pass AA with white text at 12px+ weight 600.

---

## 8. Open questions for Casey

Review and confirm before Phase 4.6 build:

- [x] Tier 1 initial items — Inventory, Sample & Storage, Patient Photo Capture — **confirmed 2026-04-22**
- [x] Tier 2 initial items — Validation v2/v3 + FHIR Catalog Subscription **confirmed 🟢 Funded & underway**
- [x] Tier 3 — AMR Resistance Module Jira epic — **OGC-293 (confirmed 2026-04-22)**
- [ ] Tier 2 — epic IDs for Validation v2/v3 and FHIR Catalog Subscription (badge state confirmed; epic link still TBD)
- [ ] Tier 2 — any ongoing flagship work missing from the list (e.g., pathology, referrals)
- [ ] Tier 3 — any community asks / wishlist items to add as ⚪ Concept
- [ ] Hero copy — is "What's next for OpenELIS Global" the right headline?
- [ ] "How to get a capability prioritized" — are the three lanes (fund / deploy / build) the right framing for this audience?
- [ ] Contact Us destination — is `/contact/` the right URL, or does DIGI route this through a specific form?

---

## 9. Out of scope for this spec

- The full HTML build of the page — that's Phase 4.6
- Per-card copy for specific capabilities — Casey approves final wording during Phase 4.6 review
- A dedicated "Sponsor a Capability" landing page — deferred per workplan §2
- Automated Jira status sync — would be nice to have eventually (roadmap badge auto-updates when Jira status changes), but out of scope for this cycle
- Country deployment overlays on roadmap cards — deferred with the general "Country Deployment Map" concept
