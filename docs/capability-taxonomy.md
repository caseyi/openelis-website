# Capability taxonomy — the two-axis model

**Decided 2026-07-02 (Casey).** The site organizes capabilities on **two axes**, not one. This resolves
the "most features are clinical, but some are cross-cutting" problem: clinical is not a catch-all bucket,
and platform features that serve every domain are not buried under "clinical."

## Axis 1 — Domains (the *what you survey*)

The One Health axis. Application areas. These are the **spokes** off the One Health hub
(`/capabilities/one-health/`):

| Domain | Page | Maturity |
|--------|------|----------|
| Human health | **Features & Functionality** (`/features-and-functionality/`) — doubles as the platform page | Mature, national-scale |
| Animal & vector | `/capabilities/vector-reservoir/` | Newer; deployed on Indonesia demo |
| Environmental | `/capabilities/environmental-testing/` | Newer; SILNAS partnership |

> **Reframe (Casey, 2026-07-02):** the "environmental" spoke is really **Regulatory & Compliance Testing** —
> evaluate any result against any regulation: environmental quality, **food safety, pharmaceutical/drug,
> product/technical testing — anything measured against a standard.** Environmental is the deepest-built
> example, not the boundary. The underlying **Compliance Evaluation Engine + Compliance Standards
> Administration** is domain-agnostic, so it's ALSO listed as a cross-cutting platform capability (Axis 2).
> Page title broadened to "Regulatory & Compliance Testing"; slug kept as `/environmental-testing/` for now
> (rename candidate: `/regulatory-testing/` or `/compliance-testing/` — Casey to decide). This capability
> arguably reaches beyond One Health (food/drug/product aren't strictly One Health domains) — flagged for
> Casey: One Health stays the headline, compliance testing is both a domain example and a platform capability.

There is **no separate "clinical" spoke** — clinical is the deepest layer and is covered by the
Features & Functionality page, which the One Health hub's "Human health" tile links to.

## Axis 2 — Platform capabilities (the *how*)

Cross-cutting. These power **all three domains** and are framed as the shared engine — which is itself
the proof that One Health is one integrated platform, not three bolted-together apps. They live on the
Features & Functionality page (and may get their own capability pages later), each badged by applicability.

| Capability | Applicability | Notes |
|-----------|---------------|-------|
| Quality control (Levey-Jennings, Westgard) | **All domains** | Same QC engine across clinical, vector, env |
| Interoperability (FHIR R4, OpenMRS, DHIS2, SORMAS, offline-first) | **All domains** | Carries every domain's data to national systems |
| Security & access (RBAC, Keycloak/SAML/OAuth2 SSO, AES-256, TLS) | **All domains** | One audit model, one accreditation story |
| Sample & storage management (freezer monitoring, Modbus RTU/TCP) | **All domains** | OGC-60 / OGC-52 |
| Reporting & Catalyst (dashboards, scheduled reports, AI assistant) | **All domains** | Catalyst is roadmap-stage |
| Monitoring (Prometheus + Grafana) | **All domains** | |
| Analyzer integration (ASTM E1381/E1394, HL7 v2.5.1, flat file, plugins) | **Clinical-focused, extensible** | Instruments are mostly clinical; plugin model is open |
| Inventory & equipment (reagent lot, FEFO, Odoo ERP) | **Clinical-focused** | Reagent/RDT/cartridge oriented (OGC-64) |

## Three lenses over one set of capabilities (2026-07-02)

The same capabilities are reached three ways, for three audiences. Each lens **links into** the
capabilities rather than re-describing them — so there's no duplication:

1. **One Health hub** (`/capabilities/one-health/`) — by **domain** (what you survey). Program/surveillance framing.
2. **Features & Functionality** (`/features-and-functionality/`) — by **capability** (what the platform does). Lab-director framing.
3. **Why OpenELIS** (`/why-openelis/`) — by **decision criteria** (cost, sovereignty, evidence). Ministry/funder framing.

### Spoke pages (own URL) vs. sections on Features

**Own page** — differentiator, distinct audience, or existing SEO:
Analyzers · Pathology · External Quality Assurance (EQA) · Catalyst (roadmap-framed) · Technical Details ·
Regulatory & Compliance testing (env) · Vector & reservoir.

**Section on the Features page** — no standalone marketing needed:
Patient management · Sample management · Results & analysis · Quality control · Interoperability ·
Inventory · Security · Monitoring.

### Features page internal structure

Overview cards (jump-links) → deep sections in two groups → proven-at-scale → technical foundation → CTA.
The two groups resolve the clinical-vs-cross-cutting tension in the content itself (no badges):
- **Clinical testing lifecycle:** Patient → Sample → Results → QC
- **Platform capabilities (span every domain):** Regulatory compliance evaluation · Interoperability ·
  Analyzer integration · Inventory · Security · Monitoring

### Fixes to bake in when porting existing content
- Stale "Coming 2025 / Coming Soon" on Westgard, EQA, Catalyst → correct to current reality.
- Conflicting stat blocks → the one canonical set (1,000+ / 18.7M+ / 26+ / 15+ / $0).
- Same YouTube video embedded twice (Patient + Interoperability) → dedupe.
- Reframe Catalyst toward roadmap, not "coming 2025."

## How the axes connect on the site

- **One Health hub** presents the three domains; each domain tile links to its spoke.
- **Each domain spoke** carries a short **"Powered by the OpenELIS platform"** strip linking to the
  cross-cutting capabilities — so a vector or environmental reader knows they also get FHIR, QC, security,
  etc., without that page re-explaining them.
- **Features & Functionality** presents the clinical lifecycle *and* the cross-cutting capabilities,
  each badged "All domains" or "Clinical-focused."

## Honesty guardrails

- Don't claim full cross-domain parity for clinical-leaning features (analyzers, inventory) — say
  "extensible" / "clinical-focused," not "works everywhere."
- Clinical genuinely is the biggest, most mature layer; it's fine for its page to be the largest.
- Catalyst/AI stays forward-looking, never a pillar of the current-capability story.
