# Contributing

This repo is the source of truth for [openelis-global.org](https://openelis-global.org). Contributions flow through branches and pull requests so changes stay reviewable and reversible before they hit the live WordPress site.

---

## Branch model

- `main` — the published-ish branch. Anything merged here is ready for, or already on, the live site.
- Feature branches — short-lived, scoped to one page or one initiative phase.

### Branch naming

Use one of the following prefixes and kebab-case slugs:

```
feat/<slug>      # new pages, new bands, new features
fix/<slug>       # fixes to existing content or markup
docs/<slug>      # docs-only changes (workplan, design conventions, README)
chore/<slug>     # repo hygiene (scaffold, configs, dependencies)
refactor/<slug>  # restructuring without behavior change
```

Example: `feat/capability-page-analyzer-integration`, `docs/screenshot-brief`, `chore/scaffold`.

## Pull request rules

- **One approving review** required before merge.
- **Squash merges only.** Commit history on `main` stays linear.
- **Head branches auto-delete** on merge.
- Conversation resolution required before merge.
- No force pushes to `main`; no deletion of `main`.

## Commit style — Conventional Commits

All commit messages use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<optional scope>): <short summary>

<optional body>

<optional footer(s)>
```

Types: `feat`, `fix`, `docs`, `chore`, `refactor`, `style`, `test`.

Examples:

```
feat(capabilities): add analyzer integration capability page
fix(homepage): correct teal-to-orange gradient on capability spotlight band
docs(workplan): bump to v1.2 after stakeholder review
chore: scaffold initial repo structure
```

## File naming

- **kebab-case** for all filenames and directories. Example: `analyzer-integration.html`, not `analyzer_integration.html` or `AnalyzerIntegration.html`.
- **Hyphens, not underscores** in asset filenames — WordPress converts underscores to hyphens on upload, which breaks references.
- Page directories mirror their URL slugs. `/capabilities/environmental-testing/` on the site → `pages/capabilities/environmental-testing/` in the repo.

## HTML file conventions

- **Inline CSS only** — no external stylesheets, no `<style>` blocks. WordPress strips or rewrites those.
- **Flexbox for layout.** No CSS Grid unless there is no reasonable Flexbox alternative.
- **No `<div>` inside `<a>` anchor tags** — WordPress strips them. Use `<span style="display:block">` for block-level content inside anchors.
- **Semantic HTML** — `<h1>`, `<h2>`, `<p>`, `<nav>`, `<section>`, `<article>`. One `<h1>` per page.
- **Absolute image URLs** — `https://openelis-global.org/wp-content/uploads/YYYY/MM/filename.png`.
- **Alt text on every image** — both for accessibility and for future i18n.

The full design spec lives in [`docs/design-conventions.md`](docs/design-conventions.md) — colors, layout, wave divider pattern, card styles, accessibility baseline, i18n readiness. Every HTML deliverable must conform.

## PR checklist

Copy this into the PR description and tick each box:

- [ ] Branch name uses one of `feat/`, `fix/`, `docs/`, `chore/`, `refactor/` prefixes
- [ ] Commit messages follow Conventional Commits
- [ ] Files use kebab-case; asset filenames use hyphens (no underscores)
- [ ] Inline CSS only; no `<style>` blocks or external stylesheets
- [ ] Flexbox used for layout; no `<div>` inside `<a>`
- [ ] All images have absolute URLs and `alt` text
- [ ] Headings in order (no skipping from `<h1>` to `<h3>`)
- [ ] Color contrast meets WCAG AA for body text
- [ ] Copy avoids idiom, metaphor, and culturally specific references (i18n readiness)
- [ ] Linked to the relevant workplan phase or issue in the PR description
- [ ] Screenshots (if any) conform to the capture spec in `docs/screenshot-brief.md`

## Stakeholder coordination

All cross-team coordination (Slack PMs, Jira ticketing, partner comms) is handled by the project lead at DIGI. Contributors do not DM stakeholders directly — flag needs in the PR description or on the relevant workplan phase.

## License

By contributing, you agree your contributions are licensed under the Mozilla Public License, v. 2.0, with the Healthcare Disclaimer — see [`LICENSE`](LICENSE).
