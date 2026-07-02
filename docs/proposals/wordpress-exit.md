# Proposal: Move openelis-global.org off WordPress

**Author:** drafted by Cowork for Casey, 2026-04-26
**Audience:** Casey, Jan, Rob (DIGI leadership)
**Decision needed:** Approval to begin Phase 1 of the migration alongside the current Capability Showcase Initiative.
**Status:** Draft for internal review.

---

## Recommendation

Move openelis-global.org from WordPress to a static site, built with a lightweight site generator (Eleventy or Astro) and hosted on Cloudflare Pages or Netlify. Run the new site at a preview subdomain alongside WordPress while we migrate, then DNS-cutover when ready.

**Estimated total effort:** 3–5 weeks of focused work, parallel to ongoing capability-page work.
**Estimated incremental hosting cost:** $0 / month (free tier is sufficient).
**Estimated time savings, ongoing:** ~2 hours per page publish today → ~2 minutes per push after migration.

---

## Why now

The Capability Showcase Initiative is forcing us to confront the WordPress workflow head-on. Every page in this initiative requires inline-CSS HTML pasted into the WordPress code editor, careful QA after each save (because the visual editor mangles markup), and manual coordination between the repo and the WP admin. We've already had to write conventions ("don't use grid, use flexbox"; "don't use `<div>` inside anchors, use `<span style='display:block'>"`) just to make markup survive the WP save cycle.

The repo we just stood up (`caseyi/openelis-website`) is the right shape for static; treating WordPress as the publishing surface forces the repo to fight the host. If we're going to put discipline into the repo anyway, putting it into a static-friendly host is the smaller incremental investment.

Three durable reasons:

1. **Publishing becomes `git push`.** Every content change is a PR, reviewed, merged, and deployed automatically — same workflow as code. Today's nine-step publish guide collapses to "push to main."
2. **Source-of-truth conflicts go away.** WordPress can't silently rewrite markup if it's not part of the pipeline. Repo and live site stay in lockstep.
3. **Security posture improves.** No PHP, no plugins to patch, no admin login to compromise. Static-site security failures are vanishingly rare.

---

## What changes — and what stays the same

| Area | WordPress today | Static site after migration |
|------|-----------------|----------------------------|
| Where content lives | WP admin + repo (drift risk) | Repo only (single source of truth) |
| Publishing | Code-editor paste, manual QA | `git push` → live in ~30s |
| Per-PR previews | None | Automatic preview URL |
| Forms (Contact Us) | WP form plugin | Formspree, Netlify Forms, or a tiny serverless function |
| Blog / news posts | WP posts | Markdown files in `posts/`, build-time render |
| Search | WP search | Pagefind (build-time index) — optional, can defer |
| Image uploads | WP Media Library | Repo `assets/` + automatic CDN serving |
| URL structure | Existing `/about/`, `/getting-started/`, etc. | **Identical** — no SEO impact if we preserve paths |
| Domain | openelis-global.org | **Identical** — DNS cutover is invisible to visitors |
| Hosting cost | Whatever WP host charges | $0 (free tier of Cloudflare Pages or Netlify covers this) |
| Editorial workflow for non-developers | WP admin UI | Either PR workflow OR a lightweight headless CMS (Decap, Sanity) writing to the repo |

---

## Technical approach

**Site generator:** Eleventy (simplest, JS-based, low-magic) or Astro (more modern, slightly more capable, similar ergonomics). Both turn templates + page content into individual HTML files at build time. **Recommendation:** Eleventy unless we expect to add interactive components later, in which case Astro.

**Hosting:** Cloudflare Pages (default) or Netlify. Both:
- Connect to the GitHub repo
- Build on every push to `main`
- Deploy preview on every PR
- Free SSL + global CDN
- Free tier handles our traffic comfortably

**Build pipeline:** GitHub Actions (already free for public repos) or the host's built-in build runner. No CI setup required for the host options above.

**Forms:** Netlify Forms (if Netlify) or Formspree (host-agnostic). Both free at our volume. The current WordPress contact form replaces 1:1.

**Editorial layer for non-developers (optional, Phase 3):** Decap CMS (open-source, Git-backed) or Sanity (free tier). Either lets non-technical contributors edit content through a familiar admin UI; commits land in the repo automatically.

---

## Migration path (phased)

### Phase 1 — Stand up the static site alongside WordPress (Weeks 1–2)
- Scaffold Eleventy/Astro in the existing repo on a feature branch
- Port the structural pages (About, Governance, Partners, Publications) — straight HTML lift, no design changes
- Deploy to a preview subdomain (`v2.openelis-global.org` or similar)
- WordPress site stays live at the main domain — zero visitor impact

### Phase 2 — Move the active work to static (Weeks 2–3)
- New Capability Showcase pages (5 flagship + Roadmap) build directly into the static site, not WordPress
- Homepage restructure (Capability Spotlight, What's New, Road Ahead bands) ships static
- WP site stays live but stops getting new content

### Phase 3 — Migrate remaining content (Weeks 3–4)
- Blog/news posts ported to markdown
- Any remaining tail pages (events, etc.)
- Editorial CMS layer added if needed for DIGI staff

### Phase 4 — DNS cutover (Week 4 or 5)
- Final QA pass on the static site at `v2.openelis-global.org`
- DNS update points the apex domain at the new host
- WordPress site decommissioned (kept as a snapshot/backup for ~30 days)
- Old WP host can be cancelled

**Off-ramp at any phase:** Until DNS cutover, WordPress is still live and authoritative. We can stop, reverse, or extend the timeline at any phase boundary without any visitor-facing impact.

---

## Cost

**Hosting:** $0/month on free tiers (Cloudflare Pages, Netlify, or GitHub Pages all comfortably cover our traffic).
**Domain:** Unchanged — we keep the registrar.
**Old WordPress hosting:** Cancellable at the end of migration. **Net savings** if WP hosting is non-trivial today.
**Tooling:** Free (Eleventy/Astro/Decap are all open-source).
**One-time effort:** 3–5 weeks of focused work, runnable in parallel with the existing Capability Showcase work — not in addition to it. Most of the migration time is content moves, not engineering.

---

## Risks and mitigations

| Risk | Mitigation |
|------|-----------|
| URL changes break inbound links | Preserve every existing URL exactly; audit before cutover; add 301s for any unavoidable changes |
| DNS cutover surprises | Schedule a maintenance window; lower TTL 24 hours ahead; cutover during low-traffic period |
| DIGI staff who post to WP today need to learn new workflow | Phase 3 adds a CMS layer (Decap/Sanity) so they keep an admin-UI experience |
| Build pipeline failure on push | Branch protection + auto-deploy preview means broken builds never reach production |
| Static can't do something WP did | Audit before migration; specific dynamic features (calendar, member-only content, etc.) get specific solutions or get pulled forward to scope |

---

## What this proposal is **not**

- Not a re-design. URL structure, brand, content, and visual language all stay the same. We're changing the publishing pipeline, not the site.
- Not a re-platforming of OpenELIS Global the product. This is the marketing site only.
- Not asking for new budget. Free hosting, existing repo, work fits inside the team's current capacity.

---

## Decision needed

**To proceed:** Approval from Casey, Jan, Rob to begin Phase 1 of the migration in parallel with ongoing Capability Showcase work.

**To defer:** Acknowledge the cost of staying — every capability page we ship to WP is a paste-and-pray loop, and the publish guide will keep growing.

**Next step if approved:** Cowork scaffolds Eleventy on a feature branch this week and stands up the preview subdomain. No production impact until DNS cutover at the end of the timeline.

---

## Open questions

- Does openelis-global.org currently run on Bluehost, or somewhere else? (Affects hosting-decommission step.)
- Where is the domain registered? (Affects DNS cutover logistics.)
- Are there DIGI staff who currently post to WP that we need to plan a CMS layer for?
- Any time-sensitive WP-specific functionality (event registration, member portal, etc.) we need to preserve?
