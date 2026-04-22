# OpenELIS Global Website — Capability Showcase Workplan

**Status:** Draft v1.1
**Owner:** Casey Iiams-Hauser, Director of Product, DIGI / University of Washington
**Created:** April 21, 2026
**Last updated:** April 21, 2026
**Purpose:** Restructure openelis-global.org to surface high-value new capabilities, drive adoption and sponsorship interest, and establish a visible roadmap as a trust signal for Ministries of Health, NGOs, and implementers.

**Revision history:**
- v1.0 (Apr 21, 2026) — Initial workplan
- v1.1 (Apr 21, 2026) — Added `DIGI-UW/openelis-website` repo setup (new Phase 1.0); added Roadmap status badge system with sponsor-seeking badges for Blood Bank and AMR Resistance Module routed to Contact Us

---

## 1. Strategic framing

The current site's "Features and Functionality" section is a catch-all that hides individual capabilities. OpenELIS is shipping differentiated, high-value features — config-only ASTM/HL7 analyzer integration, Environmental Testing, Vector & Reservoir Surveillance, Inventory Management — that deserve dedicated surface area and their own sales stories.

For an open-source product where the "sale" is really *getting ministries of health, NGOs, and implementers to commit to adopting and funding deployment*, the website must do three things simultaneously:

1. **Prove momentum** — show that the project is alive, evolving, and backed
2. **Communicate differentiation** — show what OpenELIS does that others don't
3. **Convert interest into contact** — capture adoption, sponsorship, and contribution intent

This workplan restructures the site around these three goals.

---

## 2. Scope decisions

### In scope for this cycle
- **Set up `DIGI-UW/openelis-website` repo for version control** (new)
- Navigation restructure (Capabilities nav + Roadmap nav)
- Homepage redesign with Capability Spotlight + What's New + Road Ahead bands
- Feature page template standardization
- Roadmap status badge system (new)
- Five flagship feature pages:
  - Analyzer Integration (config-only ASTM/HL7)
  - Environmental Testing
  - Vector & Reservoir Surveillance
  - Inventory Management
  - Sample & Storage Management
- Dedicated Roadmap page with Blood Bank and AMR Resistance Module flagged as "Seeking sponsor"
- Screenshot capture program (handed off to Cowork)
- Analyzer integration demo video (requested from Taib / Herbert)

### Deferred (captured, revisit later)
- Blood Bank feature page — ships as Roadmap "In Active Development" tier with "Seeking sponsor" badge for now, becomes full page when the feature ships
- AMR Resistance Module feature page — same treatment, roadmap item with "Seeking sponsor" badge for now, feature page comes when funded and built
- Lab Notebook feature page — paused pending product direction decisions (hard-coding shift)
- Dedicated "Sponsor a Capability" page — for now, sponsor-seeking items route to generic Contact Us; revisit if traction warrants a dedicated page
- Full migration off WordPress to static site generator — revisit once git/WordPress workflow settles
- Country deployment map on homepage
- GitHub activity feed / auto-pulled release notes widget
- Community signals widget (Slack/Discord/Transifex activity)
- Interactive feature tour
- Config-only analyzer integration interactive demo widget (pick instrument → show generated config)
- Live demo server status / one-click demo launch integration
- Release notes auto-pull from GitHub

---

## 3. Information architecture

### New top-level navigation

```
Home
About ▾
Capabilities ▾
  ├─ Diagnostic Testing (flagship overview)
  ├─ Analyzer Integration                    [new page]
  ├─ Environmental Testing                   [new page]
  ├─ Vector & Reservoir Surveillance         [new page]
  ├─ Inventory Management                    [new page]
  ├─ Sample & Storage Management             [new page]
  ├─ FHIR & Interoperability
  └─ All Features →                          [existing catch-all preserved]
Roadmap ▾                                    [new top-level]
  ├─ Recently Shipped
  ├─ In Active Development
  └─ Planned / On the Horizon
Getting Started ▾
Documentation
Community
```

### Roadmap page — three-tier structure with sponsorship badges

Rationale: Visible roadmaps are one of the strongest trust signals in open source. They prove momentum, invite contribution, and create urgency for adoption decisions. A dedicated page at `openelis-global.org/roadmap` becomes a shareable URL that Jan and the DIGI team can send to funders and ministries as a sales tool.

#### Tiers

| Tier | What goes here | Example items |
|------|----------------|---------------|
| **Recently Shipped** | Last 2–3 releases, each with screenshot and version badge | Inventory Management (3.2.1.x), Storage & Freezer Monitoring, Patient Photo Capture |
| **In Active Development** | Current quarter work, with Jira epic links | Blood Bank (OGC-455/457/459/461/464), Validation v2/v3, FHIR Catalog Subscription |
| **Planned / On the Horizon** | Aspirational, community/funder wishlist | AMR Resistance Module (Jira epic TBD), long-term asks |

#### Funding status badge system

Each roadmap item carries a funding status badge so the ask is concrete:

| Badge | Meaning | Visual treatment |
|-------|---------|------------------|
| 🟢 **Funded & underway** | Money is in, work is happening | Teal badge (matches primary color) |
| 🟡 **Partially funded** | Some work funded, more needed to complete | Orange badge (matches CTA color) |
| 🔴 **Seeking sponsor** | Scoped but not funded, needs a partner to kick off | Red/maroon badge, with "Contact us →" link on the card |
| ⚪ **Concept** | On the wishlist, not yet scoped | Neutral gray badge |

#### Current sponsor-seeking items (flagged by Casey)

- **Blood Bank** — Donor management, crossmatch, component tracking. Scoped in Jira (OGC-455/457/459/461/464). Needs sponsor to fund completion.
- **AMR Resistance Module** — Antimicrobial resistance surveillance and reporting. Scoped in Jira (epic ID to be added). Needs sponsor to kick off build.

Both items get the 🔴 **Seeking sponsor** badge. The badge and card link to a generic Contact Us form — no dedicated sponsor page in this cycle.

#### Call-to-action section at bottom of Roadmap page

"Have a capability you need? Here's how to get it prioritized" — with links to Jira, Contact Us (for funders and ministries), and GitHub Discussions (for community developers). Converts the roadmap from a static list into an inbound adoption/sponsorship funnel.

---

## 4. Homepage redesign

New homepage stack, top to bottom:

1. **Hero section** (existing, may need minor refresh)
2. **Capability Spotlight band** — 3 large tiles for flagship capabilities (Analyzer Integration, Environmental, Vector). Each tile: screenshot, name, one-sentence value prop, "Learn more" link.
3. **What's New in OpenELIS Global 3 band** — 3–4 version-tagged tiles ("New in 3.2.1.x") showcasing recent additions (Inventory Management, Storage, etc.)
4. **Existing content sections** (partners, deployments, etc.)
5. **The Road Ahead teaser band** — 3 compact tiles showing what's in active development + "See the full roadmap →" link
6. **Footer** (existing)

Design language follows established OpenELIS conventions: wave SVG dividers between bands, gradient hero/CTA sections, rounded cards with shadows, teal/orange color scheme, compact hero padding.

---

## 5. Feature page template

All feature pages follow the same structure for consistency and so they feel like a family.

| Section | Purpose |
|---------|---------|
| 1. Hero | Feature name, one-sentence value prop, screenshot/mockup, primary CTA |
| 2. Why it matters | Problem solved, target audience, pain being addressed |
| 3. Key capabilities | 4–6 bullet cards with icons |
| 4. Screenshots / walkthrough | 2–4 annotated images, or embedded video for flagship pages |
| 5. Who's using it | Country deployments, implementer quotes (where available) |
| 6. Under the hood | Tech details for engineering audience (protocols, standards, data model notes) |
| 7. Related resources | Docs links, Jira epics, GitHub, demo server |
| 8. CTA band | "Deploy OpenELIS" / "Join the community" / "Read the docs" |

---

## 6. Phased execution plan

### Phase 1 — Planning, coordination, & infrastructure
Goal: Set up the work so other dependencies (Cowork, Taib/Herbert) can start in parallel, and establish version control.

| # | Item | Owner | Status |
|---|------|-------|--------|
| 1.0 | **Set up `DIGI-UW/openelis-website` repo** — initial structure, README, CONTRIBUTING, commit this workplan as first artifact | Casey + Claude | **Next up** |
| 1.1 | This workplan document | Casey | ✅ Drafted (will be committed to repo in 1.0) |
| 1.2 | Slack joint PM to Taib & Herbert requesting analyzer integration video | Casey | Queued |
| 1.3 | Screenshot capture brief for Cowork | Casey + Claude | Queued |
| 1.4 | AMR Resistance Module — capture Jira epic ID and short description for Roadmap item | Casey | Queued |

#### 1.0 Repo setup details

**Repo:** `DIGI-UW/openelis-website`
**Model:** Option C — git repo as source of truth for HTML fragments, assets, and documentation. WordPress remains the publishing surface. Decision on whether to go further (static site migration) deferred; this model buys us version control without forcing a publishing change.

**Initial structure:**

```
openelis-website/
├── README.md                    # Project overview, how to contribute
├── CONTRIBUTING.md              # Conventions (formalized from memory edits)
├── workplan/
│   └── openelis-website-update-workplan.md    # This doc
├── pages/
│   ├── homepage/                # HTML sections for the homepage
│   ├── capabilities/            # One dir per feature page
│   │   ├── analyzer-integration/
│   │   ├── environmental-testing/
│   │   ├── vector-reservoir/
│   │   ├── inventory-management/
│   │   └── sample-storage/
│   └── roadmap/
├── components/                  # Reusable HTML blocks
│   ├── hero.html
│   ├── capability-card.html
│   ├── wave-divider.svg
│   ├── cta-band.html
│   └── roadmap-item.html
├── assets/
│   ├── screenshots/             # Organized by feature page
│   ├── icons/
│   └── videos/
├── content/                     # Copy/markdown (optional; separate from markup)
└── docs/
    ├── design-conventions.md    # Colors, typography, layout rules
    ├── screenshot-brief.md      # Cowork handoff doc (Phase 1.3)
    └── wordpress-publish-guide.md   # How to get git content into WordPress
```

**Branch model:** `main` as canonical; feature branches per page or section; PR review before WordPress publish.

### Phase 2 — Information architecture
Goal: Agree on the site structure before building pages.

| # | Item | Dependencies |
|---|------|--------------|
| 2.1 | Site map / nav restructure spec (detailed) | None |
| 2.2 | Feature page template spec (detailed HTML structure, inline CSS) | 2.1 |
| 2.3 | Roadmap page spec | 2.1 |

### Phase 3 — Homepage updates
Goal: Get the homepage surfacing new capabilities.

| # | Item | Dependencies |
|---|------|--------------|
| 3.1 | Capability Spotlight band (HTML) | 2.2, screenshots for 3 flagships |
| 3.2 | What's New band (HTML) | Screenshots |
| 3.3 | Road Ahead teaser band (HTML) | 2.3 |

### Phase 4 — Feature pages (priority order)
Goal: Build the flagship pages.

| # | Page | Dependencies | Notes |
|---|------|--------------|-------|
| 4.1 | Analyzer Integration | Video from Taib/Herbert (blocks), screenshots | Flagship #1 — most differentiated |
| 4.2 | Environmental Testing | Screenshots | Flagship #2 — rare capability |
| 4.3 | Vector & Reservoir Surveillance | Screenshots | Flagship #3 — rarest capability |
| 4.4 | Inventory Management | Screenshots | Newly shipped, needs spotlight |
| 4.5 | Sample & Storage Management | Screenshots | Freezer monitoring, box/plate |

### Phase 5 — Supporting content & rollout
Goal: Fill in visuals and ship.

| # | Item | Dependencies |
|---|------|--------------|
| 5.1 | Cowork executes screenshot capture brief | 1.3 |
| 5.2 | Video received and embedded on Analyzer Integration page | 1.2 |
| 5.3 | Wire screenshots into all feature pages | 5.1, 4.x |
| 5.4 | QA pass (link check, mobile responsiveness, alt text, i18n considerations) | All pages live |
| 5.5 | Publish |  |

### Phase 6 — Deferred backlog
Recorded for future cycles (see Section 2 "Deferred").

---

## 7. Dependencies & handoffs

### Slack joint PM to Taib & Herbert
**Purpose:** Request a short demo video showing config-only ASTM/HL7 analyzer integration in action. Must be a joint PM so neither assumes the other is handling it.

**Content to include in the PM:**
- What the video is for (new Analyzer Integration feature page)
- Rough length (2–4 minutes)
- What to show (paste/upload HL7 or ASTM config → analyzer comes online → results flow through)
- Either of them can record it — whoever has demo time first
- Rough deadline (to be set)

### Screenshot capture brief for Cowork
**Purpose:** A structured, self-contained brief Cowork can execute against demo.openelis-global.org without further back-and-forth.

**Contents:**
- Demo server URL, login credentials, recommended demo data set
- Browser/window setup: consistent chrome, resolution, zoom, light theme
- Shot list per feature page with annotations (what to capture, what to exclude, what state the UI should be in)
- File naming convention (WordPress hyphen rule, upload path)
- Resolution and format targets (likely 2× for retina, PNG for UI, JPG for photos)
- Annotation/callout style for screenshots that need labels

---

## 8. OpenELIS website conventions (carry-forward)

All work produced under this plan must conform to existing OpenELIS website conventions:

- **Markup:** Inline CSS, Flexbox layout, `span` with `display:block` (not `div`) in anchors, WordPress-compatible HTML only
- **Colors:** Teal `#00695c` / `#00897b` (primary), orange `#e65100` / `#ff8f00` (partners/CTA), purple `#7b1fa2` (publications), blue `#1565c0` (technical)
- **Design:** Wave SVG dividers, floating icon decorations, gradient hero sections, rounded cards with shadows, color-coded category badges
- **Heroes:** Compact padding (60px 20px), no large circular icon holders, simple breadcrumb text, `h1`/`p` tags (not styled spans)
- **Links:** Demo at `demo.openelis-global.org`, demo info at `/getting-started/demo/`, YouTube `@openelisglobal`
- **Images:** Absolute URLs at `https://openelis-global.org/wp-content/uploads/2025/12/`; WordPress converts underscores to hyphens in filenames
- **Branding:** Stewarded by DIGI at University of Washington (`digi.uw.edu`), current version OpenELIS Global 3

---

## 9. Success criteria

This update is successful if:

1. A visitor landing on the homepage can identify at least 3 flagship capabilities without clicking into a subpage
2. "Features and Functionality" is no longer the only surface for new capabilities
3. Each flagship capability has a shareable feature page URL the DIGI team can send to funders and ministries
4. The Roadmap page is a live, credible signal that the project has momentum
5. The Analyzer Integration page includes a working demo video
6. Screenshots across all feature pages share a consistent visual treatment

---

## 10. Next actions (this session or next)

Working through items one by one per Casey's preference. Revised order:

1. **Phase 1.0** — Set up `DIGI-UW/openelis-website` repo with initial structure; commit this workplan as the first artifact
2. **Phase 1.2** — Draft the joint Slack PM to Taib & Herbert
3. **Phase 1.3** — Draft the Cowork screenshot capture brief (lives in `docs/screenshot-brief.md`)
4. **Phase 1.4** — Capture AMR Resistance Module Jira epic ID and short description
5. **Phase 2.1** — Site map / nav restructure spec
6. …continue through the plan

---

*End of workplan v1.1. Revise in place as scope evolves.*
