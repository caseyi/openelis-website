# Site Map & Navigation Restructure Spec

**Phase:** 2.1
**Scope:** Full nav tree for openelis-global.org, covering the restructure that supports the Capability Showcase Initiative (new Capabilities menu, new Roadmap top-level item).
**Status:** Draft for Casey review.

---

## 1. Guiding principles

1. **Capabilities, not "features."** The generic "Features and Functionality" surface is the problem this restructure solves; it hides differentiated capabilities. Each flagship capability gets a dedicated URL so the DIGI team has shareable links for ministry and funder conversations.
2. **Roadmap is a top-level item.** Open-source momentum is a sales signal. Roadmap moves out of "About" (where it is effectively invisible) and onto the main nav.
3. **Preserve existing URLs where possible.** The site has been indexed; don't break inbound links. When URLs must change, issue redirects (§5).
4. **Mobile-first for the new Capabilities menu.** The expanded Capabilities dropdown is the most likely nav pattern to break on mobile — spec it explicitly (§4).

---

## 2. New top-level navigation

```
Home                                                       /
About ▾                                                    (menu)
  ├─ About OpenELIS                                        /about/
  ├─ Governance & Stewardship                              /governance/
  ├─ Partners                                              /partners/
  └─ Publications                                          /publications/
Capabilities ▾                                             (menu)                    [RESTRUCTURED]
  ├─ Diagnostic Testing                                    /capabilities/diagnostic-testing/   [existing, relocated]
  ├─ Analyzer Integration                                  /capabilities/analyzer-integration/ [NEW]
  ├─ Environmental Testing                                 /capabilities/environmental-testing/ [NEW]
  ├─ Vector & Reservoir Surveillance                       /capabilities/vector-reservoir/      [NEW]
  ├─ Inventory Management                                  /capabilities/inventory-management/  [NEW]
  ├─ Sample & Storage Management                           /capabilities/sample-storage/        [NEW]
  ├─ FHIR & Interoperability                               /capabilities/fhir/                  [existing, relocated]
  └─ All Features →                                        /features/                          [existing catch-all preserved]
Roadmap                                                    /roadmap/                           [NEW, top-level]
Getting Started ▾                                          (menu)
  ├─ Demo                                                  /getting-started/demo/
  ├─ Installation                                          /getting-started/install/
  └─ Quick Start Guide                                     /getting-started/quickstart/
Documentation                                              (external link)                    [no change]
Community ▾                                                (menu)
  ├─ Slack                                                 (external)
  ├─ GitHub                                                (external)
  └─ Contribute                                            /community/contribute/
```

### What's new

| Nav item | URL | Source material |
|----------|-----|-----------------|
| Capabilities (the menu itself) | — | Replaces/wraps the former "Features and Functionality" surface |
| Analyzer Integration | `/capabilities/analyzer-integration/` | New page, Phase 4.1 |
| Environmental Testing | `/capabilities/environmental-testing/` | New page, Phase 4.2 |
| Vector & Reservoir Surveillance | `/capabilities/vector-reservoir/` | New page, Phase 4.3 |
| Inventory Management | `/capabilities/inventory-management/` | New page, Phase 4.4 |
| Sample & Storage Management | `/capabilities/sample-storage/` | New page, Phase 4.5 |
| Roadmap | `/roadmap/` | New top-level, Phase 4.6 |

### What's relocated (not renamed, not retired)

| Nav item | Old location | New location | Action |
|----------|--------------|--------------|--------|
| Diagnostic Testing | Under "Features and Functionality" | Under "Capabilities" | Move + redirect |
| FHIR & Interoperability | Under "Features and Functionality" | Under "Capabilities" | Move + redirect |
| All Features (catch-all) | Top-level "Features and Functionality" | Under "Capabilities" as "All Features →" | Preserve existing URL, reframe as overflow page |

### What's retired

Nothing is fully retired in this cycle. The former "Features and Functionality" top-level nav entry goes away, but the catch-all page at `/features/` (or the existing equivalent URL) remains reachable under "Capabilities → All Features" for SEO continuity.

### What's deferred to a later cycle

| Deferred item | Reason |
|---------------|--------|
| Dedicated Blood Bank capability page | Ships as a Roadmap item with "Seeking sponsor" badge for now; becomes a full page when funded + built |
| Dedicated AMR Resistance Module capability page | Same treatment as Blood Bank |
| Dedicated Lab Notebook capability page | Paused pending product direction (hard-coding shift) |
| Dedicated "Sponsor a Capability" page | Sponsor-seeking items route to a generic Contact Us form for this cycle |

---

## 3. Per-item link destination table

Every nav entry must have an unambiguous destination. This table is authoritative.

| Menu path | Label | Destination | Type |
|-----------|-------|-------------|------|
| Root | Home | `/` | Page |
| About | About OpenELIS | `/about/` | Page |
| About | Governance & Stewardship | `/governance/` | Page |
| About | Partners | `/partners/` | Page |
| About | Publications | `/publications/` | Page |
| Capabilities | Diagnostic Testing | `/capabilities/diagnostic-testing/` | Page |
| Capabilities | Analyzer Integration | `/capabilities/analyzer-integration/` | Page |
| Capabilities | Environmental Testing | `/capabilities/environmental-testing/` | Page |
| Capabilities | Vector & Reservoir Surveillance | `/capabilities/vector-reservoir/` | Page |
| Capabilities | Inventory Management | `/capabilities/inventory-management/` | Page |
| Capabilities | Sample & Storage Management | `/capabilities/sample-storage/` | Page |
| Capabilities | FHIR & Interoperability | `/capabilities/fhir/` | Page |
| Capabilities | All Features → | `/features/` | Page (overflow) |
| Root | Roadmap | `/roadmap/` | Page |
| Getting Started | Demo | `/getting-started/demo/` | Page |
| Getting Started | Installation | `/getting-started/install/` | Page |
| Getting Started | Quick Start Guide | `/getting-started/quickstart/` | Page |
| Root | Documentation | (external URL — Casey to confirm canonical) | External link |
| Community | Slack | (external URL — Casey to confirm) | External link |
| Community | GitHub | `https://github.com/I-TECH-UW/OpenELIS-Global-2` | External link |
| Community | Contribute | `/community/contribute/` | Page |

**Items Casey still needs to confirm:** exact current paths for About, Governance, Publications, and the Documentation external URL. Default values assumed for now; update this table during review.

---

## 4. Mobile menu behavior

The expanded Capabilities menu has 8 items — too many for a mobile dropdown that opens inline without scrolling past the fold.

### Pattern

- **≥ 768px:** Horizontal top nav with hover dropdowns. Capabilities dropdown as a single column of 8 links.
- **< 768px:** Full-screen slide-in drawer from the right. Accordion-style submenus: tapping "Capabilities" expands the list in-place, pushing other top-level items down. Only one top-level section expanded at a time — tapping another collapses the first.
- **Capabilities dropdown internal ordering (mobile + desktop):** Diagnostic Testing first (flagship overview), then the five new capability pages in workplan priority order (Analyzer Integration → Environmental Testing → Vector & Reservoir → Inventory Management → Sample & Storage), then FHIR, then "All Features →" as the last row (visually separated with a divider line).

### Accessibility

- All dropdowns keyboard-accessible (Tab to reach, Enter/Space to open, Escape to close)
- Focus visible on keyboard focus (not just hover)
- Mobile drawer has a close button top-right, and closes on Escape
- ARIA labels on the menu buttons, `aria-expanded` toggled correctly

---

## 5. Redirect rules

Any URL that changes under this restructure needs a 301 redirect to preserve SEO and inbound links. The relocations below are the only ones expected in this cycle.

| Old URL | New URL | Type |
|---------|---------|------|
| `/features/diagnostic-testing/` (if that's the current path) | `/capabilities/diagnostic-testing/` | 301 |
| `/features/fhir/` (if current) | `/capabilities/fhir/` | 301 |
| `/features/` | Unchanged — stays at `/features/` as the "All Features" overflow | — |
| `/features/analyzer-integration/` (if anyone ever linked here) | `/capabilities/analyzer-integration/` | 301 |

**Note:** The actual current paths for Diagnostic Testing and FHIR need Casey to confirm (the WordPress menu order and slug history aren't fully known from the workplan). If those pages are already at `/capabilities/...`, no redirect is needed. If they're at `/features/...` or somewhere else, add the 301.

**Redirect mechanism:** WordPress plugin (Redirection, Rank Math, or Yoast Premium) — whichever the site already uses. Do not rely on `.htaccess`-level redirects without confirming the WordPress stack supports that path.

---

## 6. Footer navigation

The footer does not need restructuring in this cycle. It currently lists About / Contact / GitHub / DIGI links; those remain. One small addition:

- Add a footer link to `/roadmap/` under the "Project" column, mirroring the new top-level nav item. This catches users who scroll to the bottom looking for "what's next" without clicking into the main nav.

---

## 7. Review checkpoints for Casey

Before moving to Phase 2.2 (feature page template), please confirm or correct:

- [ ] The eight items under "Capabilities" are the right set (no capability missing, no capability that should be cut)
- [ ] The ordering inside "Capabilities" (flagship first, priority sequence, FHIR, "All Features →" last)
- [ ] "Roadmap" as a top-level sibling to "Capabilities" (vs. nested under About or Community)
- [ ] Exact current paths for Diagnostic Testing and FHIR so redirects can be written correctly
- [ ] Documentation external URL (which docs site is canonical)
- [ ] Any copy changes to the labels ("Sample & Storage Management" reads long — consider "Storage Management"?)

---

## 8. Out of scope for this spec

- Homepage internal-link restructure (covered under Phase 3.1–3.3)
- Breadcrumbs on inner pages (established pattern — "Home › Capabilities › {Feature Name}" — is already in the feature page template spec)
- Any changes to the Documentation external site
- Search behavior
- Language switcher (the site is English-primary; i18n is out of scope this cycle)
