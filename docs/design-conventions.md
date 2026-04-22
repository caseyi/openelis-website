# OpenELIS Website Design Conventions

These conventions govern all HTML, CSS, and asset work. They carry forward the established OpenELIS website design language. **Every deliverable must conform.**

---

## Markup rules

- **Inline CSS only** — no external stylesheets, no `<style>` blocks in the head
- **Flexbox for layout** — no CSS Grid unless absolutely necessary; no float-based layouts
- Use `<span style="display:block">` (not `<div>`) inside `<a>` anchor tags for block-level link content — WordPress strips `<div>` inside anchors
- WordPress-compatible HTML only — no modern features that WordPress's editor will strip or rewrite (no `<template>`, no custom elements, no `contenteditable`, etc.)
- Semantic HTML — use `<h1>`, `<h2>`, `<p>`, `<nav>`, `<section>`, `<article>` rather than styled `<span>`s
- Proper heading hierarchy — one `<h1>` per page, then `<h2>`, `<h3>` etc. in order

---

## Color palette

| Purpose | Hex values |
|---------|------------|
| Primary (brand teal) | `#00695c`, `#00897b` |
| Partners / CTA (orange) | `#e65100`, `#ff8f00` |
| Publications (purple) | `#7b1fa2` |
| Technical content (blue) | `#1565c0` |

### When to use each color

- **Teal** — hero gradients, primary buttons, brand surfaces, active nav state
- **Orange** — secondary CTAs ("Get Started", "Contact Us"), partner cards, highlighting action
- **Purple** — anything publication-related (papers, research output, citations)
- **Blue** — technical content (API docs links, standards references like FHIR/HL7)

### Roadmap-specific status colors (new in this initiative)

| Badge | Color |
|-------|-------|
| 🟢 Funded & underway | Teal — reuses `#00695c` |
| 🟡 Partially funded | Orange — reuses `#e65100` |
| 🔴 Seeking sponsor | Maroon `#b71c1c` (new — for this specific use) |
| ⚪ Concept | Neutral gray `#757575` (new — for this specific use) |

---

## Typography

- Use WordPress-default font stack unless a specific override is already in place on the site
- Heading sizes: follow existing site rhythm; don't introduce new scales
- Line heights: 1.4–1.6 for body, 1.2–1.3 for headings
- Avoid custom web fonts — adds load time and accessibility complexity

---

## Layout elements

### Wave SVG dividers between sections

Use the existing wave divider pattern. Example:

```html
<svg viewBox="0 0 1440 100" preserveAspectRatio="none"
     style="display:block; width:100%; height:60px;">
  <path d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z"
        fill="#00695c"/>
</svg>
```

Swap `fill` for the color of the section the wave is flowing **into**.

### Hero sections

- **Compact padding:** `60px 20px` — not the oversized padding seen on some older pages
- **No large circular icon holders** — they date the design
- **Simple breadcrumb text** — not pill-shaped badges
- Use `<h1>` and `<p>` tags directly, not styled `<span>`s
- Gradient backgrounds using primary teal: `background: linear-gradient(135deg, #00695c 0%, #00897b 100%);`

### Cards

- Rounded corners: `border-radius: 12px`
- Soft box-shadows: `box-shadow: 0 4px 12px rgba(0,0,0,0.08)`
- Padding: 24px–32px internal
- Hover state: subtle lift via `transform: translateY(-2px)` and slightly stronger shadow

### Floating icon decorations

Small colored circles with icons, positioned with absolute positioning on section backgrounds. Use sparingly; should feel like accents, not pattern.

### Color-coded category badges

Small pill-shaped labels using the palette colors. Example:

```html
<span style="display:inline-block; background:#1565c0; color:#fff;
             padding:4px 12px; border-radius:999px; font-size:12px;
             font-weight:600;">Technical</span>
```

---

## Links

- Demo server: `https://demo.openelis-global.org`
- Demo info page: `/getting-started/demo/`
- YouTube channel: `@openelisglobal`
- GitHub (core product): `https://github.com/I-TECH-UW/OpenELIS-Global2`
- GitHub (design work): `https://github.com/DIGI-UW/openelis-work`
- GitHub (this website): `https://github.com/DIGI-UW/openelis-website`
- DIGI: `https://digi.uw.edu`

---

## Images

- **Absolute URLs** — `https://openelis-global.org/wp-content/uploads/YYYY/MM/filename.png` (use the relevant date-based upload directory for the period being worked on)
- **Hyphens in filenames, not underscores** — WordPress converts underscores to hyphens, so standardize on hyphens from the start to avoid broken links
- **Alt text on every image** — non-negotiable, both for accessibility and for i18n (alt text gets translated)
- **Consistent visual treatment for screenshots** — same browser chrome, resolution, zoom, light theme. See `06-deliverable-templates/SCREENSHOT-BRIEF-TEMPLATE.md` for the full capture spec.

---

## Branding

- Stewarded by DIGI at the University of Washington — [digi.uw.edu](https://digi.uw.edu)
- Current product version: **OpenELIS Global 3** (3.2.1.x specifically)
- Footer must link to `digi.uw.edu`
- Never refer to OpenELIS as a "platform" or "solution" — it's a **system** or a **product**. ("Laboratory information management system" is the canonical phrase.)

---

## Accessibility baseline

- All images have `alt` text
- Color contrast meets WCAG AA (use a contrast checker; teal on white is fine, but white on teal for small text may fail)
- Keyboard-accessible interactive elements
- Headings in order (no skipping from `<h1>` to `<h3>`)
- Link text describes the destination (no "click here")

---

## i18n readiness

OpenELIS is deployed in multiple languages. The WordPress site is English-primary, but:

- Flag any copy that uses idiom, metaphor, or culturally specific references — these are hard to translate
- Prefer simple, declarative sentences over complex ones
- Avoid sarcasm, humor, or wordplay in headline copy
- Keep sentence structure translation-friendly (subject-verb-object)

You're not translating the site in this cycle, but don't build walls against future translation.
