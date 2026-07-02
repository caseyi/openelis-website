# Screenshot Capture Brief

**Purpose:** Defines exactly how screenshots are captured for feature pages and the Roadmap page so every image across the site shares the same chrome, resolution, zoom, theme, and data context.

**Scope:** All five flagship feature pages (Analyzer Integration, Environmental Testing, Vector & Reservoir Surveillance, Inventory Management, Sample & Storage Management), the Roadmap page, and the homepage Capability Spotlight + What's New + Road Ahead bands.

---

## 1. Demo server setup

- **URL:** https://testing.openelis-global.org
- **Credentials:** The default OpenELIS admin test account is used for captures. **Credentials are held out-of-band — they are NOT committed to this repo, since `caseyi/openelis-website` is public on GitHub.** Casey shares them directly with whoever is doing capture work. If you're doing capture and don't have credentials, ping Casey.
- **Demo data set:** Standard OpenELIS demo fixture as loaded on first boot of `testing.openelis-global.org`. If a Ministry-specific dataset is preferred later (for funder-facing authenticity), Casey will name it here.
- **Pre-capture verification:** The testing server may auto-reset on a schedule. Before any capture session, log in and confirm:
  - Expected patients, samples, analyzers, and configuration records are present
  - No test data from a prior session is polluting views (stray records with "asdf" or "test" in names)
  - The server is responding normally (no error banners, no stale session warnings)
- **If reset has happened:** Reload the demo fixture before continuing. If the reload process is non-obvious, escalate to Casey rather than guessing.
- **Security note:** Do not paste credentials into commit messages, PR descriptions, issue bodies, or any file in this repo. If a credential accidentally lands in git history, rotate it immediately and escalate to Casey.

## 2. Browser setup

| Setting | Value |
|---------|-------|
| Browser | Google Chrome, latest stable |
| Viewport | **1440 × 900** (exactly — use DevTools device toolbar if needed to lock it) |
| Zoom | **100%** — never deviate |
| Theme | Light mode only |
| Extensions | All disabled during capture (run in a clean profile or an Incognito window with extensions off) |
| DevTools | Closed |
| Bookmarks bar | Hidden (`View → Always Show Bookmarks Bar` off) |
| Browser chrome in screenshot | **Excluded** — capture only the app viewport |

**Capture tool:** Chrome DevTools "Capture full size screenshot" (Cmd/Ctrl+Shift+P → "Capture full size screenshot") or a dedicated tool like CleanShot X configured to exclude browser chrome. Whichever tool is used, it must produce a 2× (retina) output at the locked viewport.

## 3. File naming convention

Pattern: `{feature-slug}-{screen-name}-{variant}.png`

Rules:
- Lowercase only
- **Hyphens** only — no underscores, no spaces, no camelCase (WordPress converts underscores to hyphens, so standardize on hyphens from source to avoid broken links later)
- Feature slug must match the feature's repo directory slug exactly (`analyzer-integration`, `environmental-testing`, `vector-reservoir`, `inventory-management`, `sample-storage`, `roadmap`, `homepage`)
- Variant portion is optional; use it when the same screen appears in multiple states
- Annotated versions get an `-annotated` suffix: `analyzer-integration-config-astm-annotated.png`

Examples:

```
analyzer-integration-config-default.png
analyzer-integration-config-astm-selected.png
analyzer-integration-config-astm-annotated.png
environmental-testing-sample-entry-form.png
vector-reservoir-pool-creation-step-2.png
inventory-management-dashboard-populated.png
sample-storage-freezer-box-view.png
```

## 4. Format and resolution

- **PNG** for app UI (sharp text, clean edges) — default
- **JPG at 90% quality** for photo-heavy content only — rare on this site, likely none in this capture program
- **2× resolution** — capture at 2× for retina / high-DPI displays. Displayed size in WordPress is 50% of the capture dimensions, so a 1440 × 900 viewport at 2× yields a 2880 × 1800 image that renders crisply at 1440 × 900 on retina.
- **No pre-resize in git.** Commit full-resolution captures. WordPress generates its own resized thumbnails on upload.

## 5. Storage in the repo

Commit to `assets/screenshots/{feature-slug}/`. Each feature directory must contain a `README.md` listing:

- What's captured in the directory (bullet list of filenames with one-line descriptions)
- Date captured (YYYY-MM-DD)
- Demo data state used (which fixture, any edits made before capture)
- Any quirks worth flagging (e.g., "analyzer config screen takes ~3 seconds to render — wait before capturing")

Template for the per-directory README:

```markdown
# {Feature Name} screenshots

**Captured:** 2026-04-XX
**Demo data:** {fixture name}
**Capturer:** {name}

## Files

- `{filename}` — {what it shows}
- ...

## Notes

- Any demo quirks or capture gotchas
```

---

## 6. Shot list

Every shot below specifies: filename, navigation path, state/data required, whether annotation is needed, and any notes. Items marked *TBD* need Casey to confirm the exact path or state after first attempting the capture.

### 6.1 Analyzer Integration

Page goal: prove "connect any ASTM or HL7 analyzer without writing code."

| # | Filename | URL / nav | State required | Annotation | Notes |
|---|----------|-----------|----------------|------------|-------|
| 1 | `analyzer-integration-config-default.png` | `/admin/analyzers/config` | Empty state, no analyzer selected | No | Establish the clean starting point |
| 2 | `analyzer-integration-config-astm-selected.png` | `/admin/analyzers/config?type=astm` | ASTM profile selected, config fields populated | No | Show "it's just config" story |
| 3 | `analyzer-integration-config-astm-annotated.png` | Same as #2 | Same as #2 | Yes | Callouts: 1) Protocol dropdown, 2) Mapping fields, 3) Save button |
| 4 | `analyzer-integration-mapping-panel.png` | *TBD* — mapping screen | ASTM/HL7 field mapping visible | No | |
| 5 | `analyzer-integration-results-incoming.png` | `/results/incoming` | Mock incoming result flowing from an analyzer | No | Must show analyzer name + result values visibly inbound |
| 6 | `analyzer-integration-instruments-list.png` | `/admin/analyzers` | 3–5 analyzers configured | No | For the "many analyzers supported" story |

### 6.2 Environmental Testing

Page goal: "water, soil, air, waste — configurable to any country's environmental quality regime."

| # | Filename | URL / nav | State required | Annotation | Notes |
|---|----------|-----------|----------------|------------|-------|
| 1 | `environmental-testing-sample-entry.png` | *TBD* | Fresh environmental sample entry form | No | Entry form with sample classification visible |
| 2 | `environmental-testing-classification-dropdown.png` | *TBD* | Classification dropdown expanded | Yes | Callout the "water / soil / air / waste" options |
| 3 | `environmental-testing-quality-standards.png` | *TBD* — admin config for quality standards | Quality standard records list (Baku Mutu–style) | No | Proves configurability |
| 4 | `environmental-testing-results-view.png` | *TBD* | Environmental sample with results attached | No | |
| 5 | `environmental-testing-compliance-flag.png` | *TBD* | Sample that exceeds a standard, flagged | Yes | Callout the compliance warning UI |

### 6.3 Vector & Reservoir Surveillance

Page goal: "pooled testing, collection-lot management, public health surveillance."

| # | Filename | URL / nav | State required | Annotation | Notes |
|---|----------|-----------|----------------|------------|-------|
| 1 | `vector-reservoir-collection-lot.png` | *TBD* | Collection lot with specimens visible | No | Shows the lot-level abstraction |
| 2 | `vector-reservoir-pool-creation-step-1.png` | *TBD* | Pool creation, step 1 (specimens selected) | No | |
| 3 | `vector-reservoir-pool-creation-step-2.png` | *TBD* | Pool creation, step 2 (pooling ratio) | Yes | Annotate pool volume math / dilution factor |
| 4 | `vector-reservoir-surveillance-dashboard.png` | *TBD* | Dashboard view with map or trend | No | |
| 5 | `vector-reservoir-species-catalog.png` | *TBD* | Species reference data (mosquito, rodent, flea) | No | |

### 6.4 Inventory Management

Page goal: "newly shipped; track reagents, kits, consumables, and alert on low stock."

| # | Filename | URL / nav | State required | Annotation | Notes |
|---|----------|-----------|----------------|------------|-------|
| 1 | `inventory-management-dashboard.png` | *TBD* | Populated inventory, mixed stock levels | No | |
| 2 | `inventory-management-item-detail.png` | *TBD* | One item selected, full detail drawer/page | No | |
| 3 | `inventory-management-low-stock-alert.png` | *TBD* | Low stock state visible (alert banner or highlighted row) | Yes | Callout the alert |
| 4 | `inventory-management-receive-stock.png` | *TBD* | Receive-stock workflow mid-form | No | |
| 5 | `inventory-management-consumption-history.png` | *TBD* | Item consumption history view | No | |

### 6.5 Sample & Storage Management

Page goal: "storage hierarchy, freezer monitoring, position-level tracking."

| # | Filename | URL / nav | State required | Annotation | Notes |
|---|----------|-----------|----------------|------------|-------|
| 1 | `sample-storage-freezer-list.png` | *TBD* | List of freezers, temperature status per row | No | |
| 2 | `sample-storage-freezer-box-view.png` | *TBD* | One freezer opened, boxes visible | No | |
| 3 | `sample-storage-box-drill-in.png` | *TBD* | Box opened, positions (wells/vials) visible | No | The "find my sample in 2 clicks" story |
| 4 | `sample-storage-temperature-trend.png` | *TBD* | Freezer temperature over time, any excursions flagged | Yes | Callout any temperature excursion |
| 5 | `sample-storage-disposal-flow.png` | *TBD* | Disposal workflow step | No | |

### 6.6 Homepage (Capability Spotlight + What's New)

The Capability Spotlight band reuses the flagship feature hero shots. Name those captures with the same scheme and reference them from both places — do not re-capture for the homepage.

**Additional homepage-specific shots (if needed):**

| # | Filename | URL / nav | State required | Annotation | Notes |
|---|----------|-----------|----------------|------------|-------|
| 1 | `homepage-hero-dashboard.png` | Dashboard home, logged in | Populated with demo data | No | Only if hero image refresh is in scope — Casey to confirm |

### 6.7 Roadmap page

No new screenshots required for the Roadmap page itself — it uses icons + badges. The "Recently Shipped" tier cards reuse feature-page thumbnails.

---

## 7. Annotation style

When a screenshot needs callouts:

- **Arrow callouts:**
  - Orange `#e65100` for primary action highlights (the thing you want the viewer's eye on)
  - Blue `#1565c0` for technical / supporting details
- **Numbered badges:** Teal `#00695c` circles with white numbers, 24px diameter, used when callouts are sequenced (step 1, 2, 3)
- **Text labels:** System sans-serif font, 14px, weight 600, matching callout color
- **Drop shadow:** `0 2px 4px rgba(0,0,0,0.15)` so callouts lift off the screenshot
- **Line weight for arrows:** 2px
- **Corner radius for badge boxes:** 4px

Annotate in a dedicated tool (Figma, Pixelmator, CleanShot X, etc.) and export as PNG. Only commit the annotated PNG to git — source annotation files do not belong in the repo.

---

## 8. What to exclude from every screenshot

- **Real patient data** — even if demo names look obviously fake, double-check nothing looks identifiable. Replace with clearly fake values if unsure.
- Browser chrome (address bar, tabs, bookmarks, URL)
- Operating system chrome (menu bar, dock, taskbar)
- Mouse cursor — unless specifically capturing a hover or drag state
- DevTools or console output
- Browser notifications, update prompts, cookie banners
- Session-expiring toasts, stale-session warnings
- Any timestamp that shows the real capture date (or edit it out post-capture)
- Browser extensions or tooltips

---

## 9. Quality checklist per screenshot

- [ ] Captured at 1440 × 900 viewport, 2× resolution
- [ ] Light theme, 100% zoom
- [ ] No browser chrome, no OS chrome
- [ ] No real patient data, no identifiable test data
- [ ] No DevTools, no extensions visible
- [ ] No stale session warnings, no error banners
- [ ] Filename follows the convention
- [ ] Stored in the correct `assets/screenshots/{feature-slug}/` directory
- [ ] Listed in the directory `README.md`
- [ ] If annotated: annotation style matches §7

---

## 10. Coordination

Capture work is Phase 5.1 of the execution checklist. Before starting capture:

1. This brief must be merged to `main` (Phase 1.3 complete)
2. Casey must approve proceeding to capture (the demo credentials and dataset decisions may require a brief conversation)

**Batching:** Capture one feature's full shot list, open a PR with those images, ping Casey for a visual quality review on the first batch. If the look is right, continue autonomously through the remaining four features. If not, adjust and re-capture before moving on.

**If a shot is blocked:** Flag it in the PR description (missing demo data, broken feature on demo, unclear navigation). Do not fabricate or edit screenshots to fill gaps — better to leave a TBD than ship something fake.
