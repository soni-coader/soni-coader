# Project Blueprint

Implementation blueprint for the GitHub profile repository of **Aryant Shrirang**.

This document defines *what* to build and *in what order*. It does not contain implementation code.

| Source of truth | Owns |
|---|---|
| `PERSONAL_BRAND.md` | Identity, messaging, projects, keywords, taglines |
| `DESIGN_SYSTEM.md` | Visual language, color, motion, spacing, asset styling |
| `PROJECT_BLUEPRINT.md` | Structure, UX flow, assets list, animation plan, constraints |

No README content, SVG markup, or scripts should invent facts or visuals outside these three documents.

---

# Project Goal

Build a premium, modern, animated GitHub profile that positions Aryant Shrirang as a professional **Full Stack Developer (MERN Stack)** and **AI Automation Engineer**.

The profile must communicate, at a glance:

- Production-grade MERN engineering across SaaS, fintech, and blockchain
- Deep capability in RAG systems, OpenAI / LLM integration, and agentic automation (n8n)
- Ability to ship immersive, brand-aligned web experiences (Three.js, GSAP)
- Independent ownership from architecture to deployment
- Measurable impact (80+ apps, performance and automation outcomes from the brand doc)

Visually, the profile should feel **dark-first, minimal, futuristic, and AI-inspired** — confident rather than loud — and remain fully **GitHub-native compatible** (markdown + SVG embeds).

Outcome: a recruiter-ready profile that looks intentional, loads cleanly, and tells a coherent product-engineering story without clutter.

---

# User Experience

## First 10 Seconds (Recruiter Path)

When a recruiter opens the profile, the experience should unfold as follows:

| Second | Experience |
|---|---|
| 0–2s | Hero banner loads: name **Aryant Shrirang** and title **Full Stack Developer (MERN Stack) \| AI Automation Engineer** are immediately readable on a dark, premium canvas |
| 2–4s | Subtle motion registers quality — soft glow, sparse particles, or terminal typing — without distraction |
| 4–7s | Supporting line or terminal motif reinforces AI automation + full-stack identity (drawn from brand taglines / summary) |
| 7–10s | Eye naturally continues into About / Current Focus; recruiter understands *who*, *what*, and *why it matters* |

### Emotional Outcome by 10 Seconds

- “This person ships real products.”
- “Strong MERN + AI automation signal.”
- “Premium presentation — worth scrolling.”

### What Must Not Happen in the First 10 Seconds

- Unreadable text on mobile
- Flashy or chaotic animation competing with the name
- Dense badge walls or stat grids before identity is clear
- Invented claims not present in `PERSONAL_BRAND.md`

---

# README Structure

Exact section order for `README.md`. Do not reorder without updating this blueprint.

| # | Section | Purpose |
|---|---|---|
| 1 | Hero Banner | Primary visual identity (`banner.svg` / theme-aware light variant). Brand-first: name + professional title. |
| 2 | Typing Animation | Terminal-inspired typing line reinforcing role / focus (content from brand keywords or taglines). |
| 3 | About Me | Concise professional summary from `PERSONAL_BRAND.md`. |
| 4 | Current Focus | Present work themes: MERN products, AI automation / RAG, blockchain / fintech delivery. |
| 5 | Tech Stack | Grouped skills: Frontend, Backend, AI & Automation, Blockchain, Architecture, Tools. |
| 6 | Featured Projects | Concise summaries of major projects from the brand doc (Smart Udhar, Crypto Payment Gateway, AI / RAG Agents, Crypto MLM Ecosystem, Interactive 3D Platforms). |
| 7 | GitHub Stats | Stats card / `stats.svg` presentation aligned to design tokens where themeable. |
| 8 | Contribution Activity | Languages / activity visuals (`langs.svg`) and contribution narrative. |
| 9 | Snake Animation | Contribution snake (or equivalent activity animation) as a playful-but-professional closer to activity. |
| 10 | Contact | Email, LinkedIn, and other verified contact channels from the brand doc only. |
| 11 | Footer | Minimal closing line / attribution; calm, no clutter. |

### Section Rules

- One job per section: one headline idea, short supporting copy.
- Visual assets illustrate; they do not replace clear text hierarchy.
- Featured Projects stay concise — impact + stack, not full case studies.
- No section may introduce skills, employers, or metrics absent from `PERSONAL_BRAND.md`.

---

# Assets

Every planned visual asset. Paths are relative to the repository root.

## Core Profile Assets (`assets/`)

| Asset | Role | Notes |
|---|---|---|
| `assets/banner.svg` | Canonical dark hero banner | Terminal + AI aesthetic; brand-first layout per `docs/DESIGN_SYSTEM.md` / `docs/BANNER_WIREFRAME.md` |
| `assets/banner-light.svg` | Light theme hero variant | Same structure; light token mapping for contrast |
| `assets/lanyard.svg` | Animated lanyard / badge motif | Soft motion; premium, not cartoonish |
| `assets/avatar.png` | Profile avatar source image | Source portrait (also embedded in banner/lanyard SVGs) |
| `assets/stats.svg` | GitHub stats visualization | Theme colors aligned to design system where possible |
| `assets/langs.svg` | Top languages / skill mix visual | Clean, readable; dark-first |
| `assets/trophies.svg` | Achievements / trophies visual | Restrained; avoid noisy decoration |

## Supporting Directories

| Path | Role |
|---|---|
| `docs/` | Planning docs (brand, design system, blueprint, content, banner wireframe) |
| `.github/workflows/` | CI for snake animation / scheduled updates |
| `output` (remote branch) | Generated contribution snake SVGs from Actions |

## Documentation Assets

| File | Role |
|---|---|
| `docs/PERSONAL_BRAND.md` | Messaging source of truth |
| `docs/DESIGN_SYSTEM.md` | Visual source of truth |
| `docs/PROJECT_BLUEPRINT.md` | Implementation blueprint (this file) |
| `docs/CONTENT_PLAN.md` | Profile copy options |
| `docs/BANNER_WIREFRAME.md` | Banner layout contract |
| `README.md` | Public GitHub profile surface |

## Asset Creation Rules

- Prefer **SVG** for all illustrative and animated graphics.
- PNG only where required (e.g. photographic avatar).
- Empty placeholders exist until an asset is intentionally designed.
- Every finished asset must pass the `DESIGN_SYSTEM.md` quality checklist before merge.

---

# Animation Plan

All motion must follow `DESIGN_SYSTEM.md`: smooth, professional, no flashy effects, 60fps-feeling, calm loops.

## Hero Banner (`banner.svg` / `banner-light.svg`)

| Animation | Behavior | Duration guidance |
|---|---|---|
| Entrance | Staggered fade/slide of name, title, and terminal module | 400–800ms, ease-out |
| Gradient motion | Slow brand / AI gradient shift on accents or borders | 6–12s loop |
| Soft glow breathe | Low-amplitude primary/accent glow behind key elements | 3–5s loop |
| Floating particles | Sparse ambient drift | 8–16s loop |
| Scanner effect | Soft accent-tinted sweep across terminal or hero plane | 2.5–4s pass |
| Terminal typing (in-banner) | Optional prompt line typing inside glass terminal panel | 40–80ms per character feel |

## Typing Animation (README section)

| Animation | Behavior | Duration guidance |
|---|---|---|
| Typing cycle | Cycles through short role/focus strings from brand keywords or taglines | Readable pace; pause on full string |
| Caret blink | Subtle monospace caret | Calm, not frantic |

## Lanyard (`lanyard.svg`)

| Animation | Behavior | Duration guidance |
|---|---|---|
| Swing / idle | Soft pendulum or float — premium badge presence | Slow, low amplitude |
| Soft hover (if applicable) | Gentle brightness or lift | 150–250ms |

## Stats / Langs / Trophies

| Animation | Behavior | Duration guidance |
|---|---|---|
| Load entrance | Optional opacity/transform entrance | 250–400ms |
| Ambient accent | Minimal; prefer static clarity over constant motion | — |

## Snake / Contribution Animation

| Animation | Behavior | Duration guidance |
|---|---|---|
| Snake path | Classic contribution-snake motion across the grid | Continuous, smooth |
| Color mapping | Prefer Success / brand-compatible greens; avoid neon clash | Align to palette where themeable |

## Global Motion Rules

- Infinite loops = ambient only (particles, glow, slow gradients).
- No strobe, glitch, RGB split, or elastic bounce on core brand motion.
- Prefer transform and opacity over heavy filters.
- Respect reduced-motion intent where the platform allows (favor subtler or static fallbacks).

---

# Responsive Strategy

GitHub controls page chrome; this project controls README + embedded SVG behavior.

## Desktop

- Banner displays as a wide hero with balanced layout (identity + terminal motif).
- Full README section order visible with comfortable vertical rhythm (`space-7` / `space-8` conceptual separation).
- Stats, langs, and trophies can sit in a horizontal or grid arrangement if markdown allows without crowding.
- Typography hierarchy remains strong: name and title never compete with secondary chrome.

## Mobile

- Banner must remain legible when GitHub scales the SVG down — name and title stay primary.
- Avoid dense multi-column layouts inside SVGs; stack or simplify at narrow widths where feasible.
- Prefer full-width embeds; avoid side-by-side assets that become unreadable.
- Typing lines and project blurbs stay short so they do not wrap into walls of text.
- Touch targets are not interactive in README, but visual spacing should not feel cramped.

## Shared Rules

- Design banners at a canonical wide artboard; test readability at typical GitHub README widths.
- Critical text never sits on busy particle fields without glass or solid backing.
- Light banner variant available for users on light GitHub themes; dark remains canonical.

---

# Accessibility

| Rule | Requirement |
|---|---|
| Contrast | Strong contrast between Text Primary (`#F8FAFC`) and Background (`#0D1117`); Secondary text only for supporting copy |
| Text in assets | Name, title, and critical labels must remain readable at mobile scale |
| Alt text | Meaningful `alt` (or equivalent markdown image labels) for every embedded asset |
| Motion | Avoid flashing or high-frequency flicker; keep loops low-attention |
| Color meaning | Do not convey information by color alone (pair with labels/text) |
| Semantics | README headings in logical order matching the section list above |
| Links | Contact links use clear link text (Email, LinkedIn) — not “click here” |
| Truthfulness | No decorative text in SVGs that contradicts or invents résumé facts |

---

# Performance Rules

| Rule | Detail |
|---|---|
| Prefer SVG | Banners, icons, stats chrome, lanyard, decorative graphics |
| Keep assets lightweight | Minimize path complexity, embedded rasters, and unused defs |
| Avoid unnecessary dependencies | No front-end frameworks for the profile surface; GitHub markdown + SVG (+ Actions where needed) |
| Limit external calls | Cache or schedule generated cards; avoid redundant API hits on every view where controllable |
| Optimize avatar | Compressed PNG/WebP-equivalent practice; reasonable dimensions only |
| Animation cost | Prefer transform/opacity; avoid expensive per-frame filter stacks |
| README weight | Lean section copy; no oversized embeds stacked without need |
| CI discipline | Workflows regenerate only what changed; fail loudly on broken asset pipelines |

---

# Future Enhancements

Optional — not required for the initial premium profile launch.

| Enhancement | Description |
|---|---|
| Theme-aware banner switch | Auto-select `banner.svg` vs `banner-light.svg` based on GitHub theme where supported |
| Live stats pipeline | Scheduled GitHub Action to refresh `stats.svg` / `langs.svg` |
| Project deep-dives in `docs/` | Longer case studies linked from Featured Projects |
| Lanyard personalization | Dynamic role/status text on the lanyard badge |
| Multilingual About | Alternate short About for international recruiters |
| Social preview image | Dedicated Open Graph–style card in `images/` for link shares |
| Trophy / achievement refresh | Automated trophies update via workflow |
| Interactive portfolio link-out | Single CTA to an external portfolio without cluttering the hero |
| Reduced-motion static banners | Fully static SVG fallbacks for accessibility preferences |
| Contribution insights blurb | Short quarterly highlight under Contribution Activity |

---

# Implementation Phases (Guide)

Suggested build order — still no code in this document; phases are sequencing only.

| Phase | Focus | Done when |
|---|---|---|
| 1 | Foundation docs | Brand, design system, blueprint complete |
| 2 | Hero banner (dark) | `banner.svg` meets design checklist; name/title clear |
| 3 | Light banner | `banner-light.svg` parity with dark structure |
| 4 | Avatar + lanyard | Approved avatar; soft lanyard motion |
| 5 | README skeleton | All 11 sections present with brand-accurate copy |
| 6 | Typing + motion polish | Typing section + banner ambient animations tuned |
| 7 | Stats / langs / trophies | Themed, lightweight embeds |
| 8 | Snake + workflows | Contribution snake + CI where needed |
| 9 | Contact + footer | Verified links only; minimal closer |
| 10 | QA | Responsive check, contrast, performance, truthfulness audit |

---

# Definition of Done

The profile is ready to present when:

- [ ] README follows the exact section order above
- [ ] All copy traces to `PERSONAL_BRAND.md`
- [ ] All visuals follow `DESIGN_SYSTEM.md`
- [ ] Core assets listed in this blueprint exist and are intentional (not empty placeholders)
- [ ] First 10 seconds communicate name, title, and premium full-stack + AI signal
- [ ] Desktop and mobile readability verified
- [ ] Accessibility and performance rules satisfied
- [ ] No invented experience, metrics, or skills

---

# Governance

- Update `PERSONAL_BRAND.md` before changing résumé facts or project claims.
- Update `DESIGN_SYSTEM.md` before introducing new colors, radii, or motion patterns.
- Update `PROJECT_BLUEPRINT.md` before changing README section order, asset inventory, or UX goals.
- Implementation work begins only after these three documents agree.
