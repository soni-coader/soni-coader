# Banner Wireframe

Design blueprint for `assets/banner.svg` (and structural parity for `assets/banner-light.svg`).

| Source of truth | Owns |
|---|---|
| `PERSONAL_BRAND.md` | Name, title, identity facts |
| `DESIGN_SYSTEM.md` | Color, motion, spacing, banner rules |
| `PROJECT_BLUEPRINT.md` | First-10-seconds UX, asset role |
| `CONTENT_PLAN.md` | Headline, subheading, typing lines, CTA copy |
| `BANNER_WIREFRAME.md` | Visual layout only (this file) |

**Do not generate SVG code from this document until explicitly requested.**

**Composition rule (non-negotiable):** The first read is brand-first — **Aryant Shrirang** and **Full Stack Developer (MERN Stack) | AI Automation Engineer**. No element may overpower the name. No detached floating badges over the hero. No dense stat strips in the banner.

---

# Canvas Size

| Property | Value | Notes |
|---|---|---|
| Recommended artboard | **1200 × 420 px** | Wide hero suited to GitHub README embeds |
| Alternate artboard | **1280 × 480 px** | Use only if more vertical room is needed for terminal + avatar |
| Aspect ratio target | ~2.85 : 1 | Keeps the banner cinematic without becoming a tall poster |
| ViewBox | `0 0 1200 420` | Canonical for `banner.svg` |
| Safe content area | Inset **48px** from all edges (`space-7`) | All critical text and modules stay inside this frame |
| Inner content band | x: 48–1152 · y: 48–372 | Working layout rectangle |
| Corner treatment | Outer canvas may be rectangular; inner panels use `radius-lg` (16px) / `radius-xl` (24px) | Per design system |
| Export scale | Design at 1x; ensure crispness when GitHub scales down on mobile | Prefer vector text and shapes |

### Safe Zones

| Zone | Purpose |
|---|---|
| Top / bottom 48px | Ambient particles and glow only — no critical text |
| Left identity column | Primary text lockup — highest priority |
| Center module | Terminal / editor — supporting, not competing |
| Right portrait | Avatar + effects — visual counterweight |

---

# Layout Structure

Three-column balance on a full-bleed dark canvas. One composition, not a dashboard.

```text
┌──────────────────────────────────────────────────────────────┐
│ BACKGROUND (gradient · grid · particles · ambient light)     │
│  ┌─────────────┐   ┌──────────────────┐   ┌──────────────┐   │
│  │ LEFT        │   │ CENTER           │   │ RIGHT        │   │
│  │ Identity    │   │ Terminal / AI    │   │ Avatar       │   │
│  │ ~38% width  │   │ workstation      │   │ ~28% width   │   │
│  │             │   │ ~34% width       │   │              │   │
│  └─────────────┘   └──────────────────┘   └──────────────┘   │
└──────────────────────────────────────────────────────────────┘
```

| Region | Approx. horizontal share | Role |
|---|---|---|
| Background layer | 100% | Atmosphere only |
| Left section | ~36–40% | Brand identity (hero signal) |
| Center section | ~32–36% | Terminal / code / AI motif |
| Right section | ~26–30% | Avatar presence |

Vertical alignment: all three content columns share a common optical middle band so the composition reads as one row on desktop.

---

# Banner Components

Component inventory for `banner.svg`. Each component maps to a layout region above. Spec only — no implementation.

## Background

| Component | Role |
|---|---|
| Gradient | Full-bleed base: Background `#0D1117` with soft Surface Gradient depth (`#0D1117` → `#161B22`) |
| Grid | Faint technical grid or mesh at ≤12% opacity; Accent or white tint; ambient only |
| Ambient Glow | Large soft radial washes — Primary violet and optional Accent cyan at 15–25% opacity; max one of each |
| Particles | Sparse floating nodes/dots at 10–40% opacity; slow drift; never dense |

**Source asset:** `assets/background-pattern.svg` (reusable grid / particle / glow defs referenced or inlined by the banner)

## Identity

| Component | Role |
|---|---|
| Greeting | “Hi, I’m” — Text Secondary, smallest identity type |
| Name | **Aryant Shrirang** — Text Primary; strongest signal on the banner |
| Title | **Full Stack Developer (MERN Stack) \| AI Automation Engineer** — Brand Gradient or Primary→Secondary emphasis |
| Typing Animation | Monospace focus line cycling CONTENT_PLAN typing strings; Accent caret |
| CTA | Quiet invitation chip/caption — open to full-stack & AI roles; `radius-md`; optional gradient border |

**Placement:** Left section. Name must outrank every other component.

## Terminal

| Component | Role |
|---|---|
| Window Header | Traffic-light dots + session title (e.g. `aryant@portfolio — zsh` / `ai-agent.session`) |
| Terminal | Glass panel body on Surface; monospace prompts; Accent active-line cue |
| Code Snippet | Short calm snippet suggesting MERN / RAG / n8n — few lines, readable size |
| Tech Chips | Integrated labels inside panel footer/rail only (React · Node · RAG · n8n) — not detached over the hero |

**Source asset:** `assets/terminal-icons.svg` (window controls, status marks, chip icons — flat SVG, consistent size)

## Avatar

| Component | Role |
|---|---|
| Avatar Image | Circular / soft-rounded portrait from `assets/avatar.png` (placeholder until photo provided) |
| Glow | Soft Primary radial glow behind frame (15–25% opacity); optional Accent rim |
| Scanner | Accent-tinted sweep across frame / hologram veil — infrequent, low contrast |
| Border | Thin gradient ring (Primary → Accent) or glass ring; `radius-full` preferred |

**Placement:** Right section. Supports brand; never replaces the name as hero.

## Effects

| Effect | Applies to | Behavior |
|---|---|---|
| Gradient Animation | Title accent, terminal border, avatar border | Slow Brand / AI gradient shift — 6–12s loop |
| Cursor Blink | Identity typing line + terminal caret | Calm monospace blink — not frantic |
| Floating Particles | Background particle layer | Sparse drift — 8–16s loop |
| Scanner Sweep | Avatar frame / hologram; optional soft terminal pass | Accent sweep — 2.5–4s; no flicker |

Motion personality: Calm · Precise · Intelligent · Premium. No glitch, strobe, or RGB split.

---

# Assets Required

Banner-specific files under `assets/`:

| Asset | Purpose | Status intent |
|---|---|---|
| `avatar.png` | Portrait for Avatar Image component | Placeholder until approved photo |
| `banner.svg` | Canonical dark hero — assembles all components | Empty until implementation |
| `banner-light.svg` | Light-theme structural twin | Empty until implementation |
| `terminal-icons.svg` | Flat icons for Window Header, status, tech chips | Empty until implementation |
| `background-pattern.svg` | Reusable grid / glow / particle pattern defs | Empty until implementation |

### Composition Rule for Assets

- `banner.svg` / `banner-light.svg` are the shipped heroes
- `background-pattern.svg` and `terminal-icons.svg` may be inlined or referenced during build; final README embed remains the banner file(s)
- Prefer SVG for all except photographic `avatar.png`
- No asset may introduce colors or motion outside `DESIGN_SYSTEM.md`

---

# Left Section

**Purpose:** Brand lockup — the recruiter’s first 2 seconds.

### Placement

- Anchored to the left of the safe area
- Vertically centered as a stacked text block (slight bias upward allowed for optical balance)
- Generous line spacing; no crowding against the center panel

### Content (top → bottom)

| Element | Content source | Visual treatment |
|---|---|---|
| Greeting | Short professional opener (e.g. “Hi, I’m”) | Text Secondary (`#94A3B8`), sans-serif, smaller than name |
| Name | **Aryant Shrirang** | Text Primary (`#F8FAFC`), largest type on the banner — display hierarchy |
| Professional title | **Full Stack Developer (MERN Stack) \| AI Automation Engineer** | Brand Gradient text or Primary→Secondary emphasis; clearly secondary to name but still strong |
| Supporting line | CONTENT_PLAN Hero Subheading #1 (or shorter excerpt) | Text Secondary; one line preferred; wrap to two max |
| Typing line | Optional monospace prompt cycling brand focus strings | Monospace; Accent caret; does not exceed title visual weight |
| CTA cue | Soft contact hint (e.g. “Open to full-stack & AI roles”) | Small caption; not a loud button; optional chip with `radius-md` and gradient border |

### Left Section Rules

- Name is the loudest element in the entire banner
- Title must remain fully legible at mobile scale
- No metrics, stats, or project lists in this column
- CTA stays quiet — identity first, invitation second

---

# Center Section

**Purpose:** Terminal-inspired AI / developer workstation — proves technical craft without stealing focus from the name.

### Placement

- Optical center of the canvas
- Contained inside a **glassmorphism panel** (`radius-xl`, soft border / gradient border)
- Slightly overlapping background grid; never overlapping the name lockup

### Modules (inside the glass panel only)

| Module | Description |
|---|---|
| Window chrome | Minimal traffic-light dots + title bar label (e.g. `aryant@portfolio — zsh` or `ai-agent.session`) |
| Terminal body | Dark Surface fill (`#161B22` family); monospace prompt lines |
| Code / prompt content | Short, believable lines suggesting MERN + AI work (e.g. RAG query, n8n workflow, API boot) — not a wall of code |
| AI signal | Thin Accent (`#06B6D4`) highlight on active line, status pill (“agent online”), or soft neural/node motif in the panel header — restrained |
| Tech chips | **Integrated** mini labels inside the panel footer or side rail only (e.g. React · Node · RAG · n8n) — not free-floating over the hero |
| Editor optional | A shallow second tab or split showing a tiny code snippet — only if it stays readable and calm |

### Explicitly Not in Center

- Detached floating badges scattered across the banner
- Dense tech grids or trophy walls
- Large unreadably small code blocks
- Competing headline text

### Visual Style

- Glass fill at low opacity over Surface
- Soft `shadow-md` / `shadow-glow-accent` at low intensity
- Gradient border using Brand or AI gradient — thin and refined
- One dominant panel; avoid card stacks

---

# Right Section

**Purpose:** Human presence and premium AI framing — visual counterweight to the identity column.

### Placement

- Right side of the safe area
- Vertically centered
- Clear breathing room from the center glass panel (`space-5`–`space-6`)

### Elements

| Element | Description |
|---|---|
| Avatar placement | Circular or softly rounded portrait frame (`radius-full` or large rounded rect). References `assets/avatar.png` when available; silhouette placeholder until photo is provided |
| Frame | Thin gradient border (Primary → Accent) or glass ring |
| Hologram effect | Very subtle scanline / light veil over or behind the avatar — premium AI cue, not sci-fi costume |
| Glow | Soft radial glow behind avatar using Primary (`#7C3AED`) at 15–25% opacity; optional Accent rim light |
| Scanner animation | Soft Accent-tinted horizontal or vertical sweep across the avatar frame or hologram veil — infrequent, low contrast |
| Status cue (optional) | Tiny Success dot (“available”) near the frame — caption-sized only |

### Right Section Rules

- Avatar supports the brand; it does not replace the name as the hero
- Hologram and scanner stay subtle per design system (no glitch, no RGB split)
- No stacked badges beside the portrait

---

# Background

Full-bleed atmospheric layer. Content sits above it; background never reduces name contrast.

| Layer ingredient | Treatment |
|---|---|
| Base fill | Background `#0D1117` |
| Surface depth | Soft vertical Surface Gradient (`#0D1117` → `#161B22`) for gentle depth |
| Brand ambient | Large, blurred radial Glow Gradient (Primary and/or Accent at low opacity) — corners or behind center panel |
| Grid | Faint technical grid or perspective mesh at very low opacity (12% or less); Accent or white tint |
| Particles | Sparse floating dots / soft nodes; 10–40% opacity; avoid dense starfields |
| Ambient lighting | One primary violet wash + one cooler cyan wash max; do not stack competing neon regions |
| Edge vignette | Optional soft darkening at edges to push focus inward |

### Background Rules

- Full-bleed within the SVG artboard
- No inset “hero image card” as the main idea — the canvas itself is the hero plane
- Particles and grid are ambient only — never behind critical text without a solid/glass backing

---

# Animations

Describe only. Do not implement in this document.

| Animation | Where | Behavior | Duration / easing |
|---|---|---|---|
| Entrance stagger | Left → Center → Right | Fade/slide into place on load | 400–800ms total, ease-out |
| Name settle | Left | Slight opacity/transform settle | Within entrance window |
| Title fade | Left | Follows name by a short delay | Staggered entrance |
| Typing cycle | Left typing line and/or center terminal | Characters appear; pause; clear or cycle next string from CONTENT_PLAN typing lines | 40–80ms per character feel; calm pauses |
| Caret blink | Typing contexts | Soft monospace caret blink | Steady, not frantic |
| Gradient motion | Panel borders, title accent, avatar ring | Slow Brand / AI gradient shift | 6–12s loop, ease-in-out |
| Glow breathe | Behind avatar + soft Primary wash | Low-amplitude opacity pulse | 3–5s loop |
| Particle drift | Background | Sparse slow drift / float | 8–16s loop |
| Scanner pass | Right hologram / avatar frame; optional soft pass on center panel | Accent-tinted sweep | 2.5–4s per pass; not continuous flicker |
| Terminal line highlight | Center active line | Soft Accent emphasis on current line | Tied to typing cycle |
| Status pulse | Optional “agent online” / available dot | Very soft Success opacity breathe | 3–5s; low amplitude |

### Motion Personality

Calm · Precise · Intelligent · Premium

### Disallowed Motion

- Strobe, glitch, RGB split, elastic bounce
- Fast particle storms
- Animations that reduce text legibility
- Competing loops at high contrast

---

# Mobile Layout

GitHub scales the SVG as a single image — true reflow is limited. Design for legibility when the banner is **narrow**.

### Strategy

| Priority | Approach |
|---|---|
| 1 | Keep name and title large enough to survive ~50% scale |
| 2 | Prefer a **stacked optical hierarchy** even in the wide artboard: identity visually strongest left; center and right quieter |
| 3 | Avoid micro-type in the terminal — few lines, larger monospace |
| 4 | Avatar frame stays simple; hologram detail can soften at small sizes |
| 5 | If a dedicated mobile variant is later required, use the same layer structure with a taller artboard (e.g. 800 × 600) and vertical stack: Left → Center → Right |

### Narrow-Width Read Order

1. Name  
2. Professional title  
3. Avatar presence (recognition)  
4. Terminal motif (craft signal)  
5. Ambient motion (quality signal)

### Mobile Must-Pass Test

At phone README width, a recruiter can still read **Aryant Shrirang** and **Full Stack Developer (MERN Stack) | AI Automation Engineer** without zooming.

---

# SVG Layers

Layer order from **back → front** (painter’s algorithm):

| Order | Layer | Contents |
|---|---|---|
| 1 | Canvas base | Background fill `#0D1117` |
| 2 | Atmosphere gradients | Surface gradient, radial Primary/Accent glows, vignette |
| 3 | Technical grid | Faint grid / mesh |
| 4 | Particles | Sparse floating particles |
| 5 | Center panel shadow | Soft shadow under glass workstation |
| 6 | Center glass panel | Terminal / editor chrome, body, integrated tech chips |
| 7 | Right glow plate | Radial glow behind avatar |
| 8 | Avatar frame + image | Portrait, gradient ring |
| 9 | Hologram / scanner | Scan veil and scanner sweep (above avatar art, below text) |
| 10 | Left identity lockup | Greeting, name, title, subheading, typing line, CTA cue |
| 11 | Foreground accents | Optional thin highlight lines; never covering name |

**Text and name lockup stay near the top of the stack** so atmosphere never paints over identity.

---

# Accessibility

| Requirement | Detail |
|---|---|
| Contrast | Name and title use Text Primary (or equivalent high-contrast treatment) on Background; minimum strong contrast against `#0D1117` |
| Secondary text | Greeting, subheading, CTA use Text Secondary only when still readable |
| Backing | Critical text sits on clear canvas or subtle solid/glass backing — never raw busy particles |
| Scale | Name remains the largest text; title remains the second-largest |
| Motion | No flashing; scanner and glow stay low-contrast; prefer transform/opacity |
| Meaning | Do not rely on color alone for status (pair “available” with label or clear shape) |
| Alt text (README embed) | Meaningful description, e.g. “Aryant Shrirang — Full Stack Developer (MERN Stack) and AI Automation Engineer” |
| Light variant | `banner-light.svg` keeps the same layout structure with token remapping so contrast holds on light GitHub themes |
| Truthfulness | Banner text must match CONTENT_PLAN / PERSONAL_BRAND — no invented titles or metrics |

---

# Content Binding (for implementation later)

Default copy when `banner.svg` is built:

| Slot | Default |
|---|---|
| Greeting | Hi, I’m |
| Name | Aryant Shrirang |
| Title | Full Stack Developer (MERN Stack) \| AI Automation Engineer |
| Subheading | 2.10+ years building and deploying 80+ web applications across SaaS, AI, fintech, and blockchain. |
| Typing lines | From CONTENT_PLAN typing animation lines |
| CTA cue | Open to conversations about full-stack product roles and AI automation initiatives |
| Terminal theme | MERN + RAG / n8n / AI agent session aesthetic |

---

# Design Checklist (before drawing SVG)

- [ ] Artboard 1200 × 420 with 48px safe inset
- [ ] All Banner Components present: Background, Identity, Terminal, Avatar, Effects
- [ ] Name is the strongest visual signal
- [ ] Title fully legible at mobile scale
- [ ] Center is one glass terminal panel — no detached badge cloud
- [ ] Right avatar has soft glow + subtle scanner only
- [ ] Background uses design-system colors only
- [ ] Animations match duration guidelines and stay calm
- [ ] Layer order keeps identity above atmosphere
- [ ] Required assets exist: `avatar.png`, `banner.svg`, `banner-light.svg`, `terminal-icons.svg`, `background-pattern.svg`
- [ ] No SVG implementation attempted in this document until explicitly requested

---

# Governance

- Update this wireframe before changing banner layout structure.
- Update `DESIGN_SYSTEM.md` before changing colors, radii, or motion language.
- Update `CONTENT_PLAN.md` before changing banner copy.
- Implement `banner.svg` only after this wireframe is approved as the layout contract.
