# Design System

Single source of truth for the visual design of the GitHub profile of **Aryant Shrirang** — Full Stack Developer (MERN Stack) | AI Automation Engineer.

All visual assets (banners, SVGs, icons, README presentation) must follow this document. No visual decision should be made outside this system without updating it first.

---

## Design Goal

Create a premium, modern, animated GitHub profile that reflects an experienced Full Stack Developer and AI Automation Engineer.

The profile should feel:

- Confident, not loud
- Technical, not cluttered
- Animated, not flashy
- Distinctive, yet fully GitHub-native compatible

---

## Style Direction

| Attribute | Intent |
|---|---|
| Modern | Contemporary layout, current visual language |
| Minimal | One clear idea per section; no decorative noise |
| Premium | Refined spacing, restrained color use, polished motion |
| Futuristic | Terminal, AI, and cyber cues — subtle, not costume |
| AI-inspired | Soft glow, scanner lines, gradient motion, particle depth |
| Clean | Strong hierarchy, readable type, consistent rhythm |
| Developer-focused | Monospace accents, terminal motifs, code-native aesthetics |

**Avoid:** neon overload, heavy glitch, cartoon icons, dense badge walls, competing gradients, distracting loops.

---

## Theme

- **Primary theme:** Dark-first
- **Compatibility:** GitHub native (dark UI, markdown rendering, SVG embeds)
- **Secondary consideration:** Light banner variant (`banner-light.svg`) for contrast and accessibility when needed
- **Default surface context:** GitHub profile dark background (`#0D1117` family)

Dark is the canonical experience. Light assets exist as a controlled alternate, not a second brand.

---

## Color Palette

### Core Tokens

| Token | Hex | Role |
|---|---|---|
| Primary | `#7C3AED` | Brand accent, CTAs, key highlights, primary glow |
| Secondary | `#4F46E5` | Supporting accent, gradient partner to Primary |
| Accent | `#06B6D4` | AI / tech signal, scanner lines, secondary highlights |
| Success | `#22C55E` | Positive states, contribution / success cues |
| Warning | `#F59E0B` | Attention, secondary status (use sparingly) |
| Background | `#0D1117` | Page / canvas base (GitHub dark) |
| Surface | `#161B22` | Cards, panels, elevated surfaces |
| Text Primary | `#F8FAFC` | Headings, primary body copy |
| Text Secondary | `#94A3B8` | Captions, labels, muted metadata |

### Usage Rules

- Background and Surface carry most of the UI; color accents are intentional punctuation.
- Primary + Secondary form the main brand gradient pair.
- Accent (`#06B6D4`) signals AI / automation / terminal activity — do not overuse as fill.
- Success and Warning are status colors only, not decorative fills.
- Text Secondary never replaces Text Primary for core identity content (name, title).

### Opacity Guidance

| Use | Opacity |
|---|---|
| Soft glow (primary) | 15–25% |
| Glass overlay | 8–16% |
| Particle / ambient | 10–40% |
| Borders on dark | 12–24% white or brand tint |
| Disabled / muted UI | 40–60% of token |

---

## Typography

### Families

| Role | Style | Use |
|---|---|---|
| UI / Body | Clean sans-serif | Name, titles, descriptions, labels |
| Code / Terminal | Monospace | Terminal lines, prompts, code snippets, tech tags |

### Hierarchy (Conceptual)

| Level | Intent |
|---|---|
| Display / Hero Name | Strongest presence; brand-first signal |
| Section Title | Clear section identity |
| Body | Readable supporting copy |
| Caption / Meta | Secondary info, timestamps, labels |
| Terminal / Code | Monospace; slightly smaller or equal to body |

### Rules

- Prefer clarity over ornament.
- Keep line length comfortable in banner and SVG text blocks.
- Monospace is reserved for terminal and code contexts — not for the full profile voice.
- Avoid mixing more than one sans-serif and one monospace family in a single asset.

---

## Spacing System

Base unit: **4px**

| Token | Value | Typical use |
|---|---|---|
| `space-1` | 4px | Tight icon gaps, hairline offsets |
| `space-2` | 8px | Inline element spacing |
| `space-3` | 12px | Compact stacks |
| `space-4` | 16px | Default component padding |
| `space-5` | 24px | Section internal padding |
| `space-6` | 32px | Card / panel padding |
| `space-7` | 48px | Section separation |
| `space-8` | 64px | Major layout blocks / banner margins |

### Rules

- Maintain consistent vertical rhythm between README sections.
- Banner internal padding should map to `space-5`–`space-7`.
- Do not invent one-off gaps; snap to the scale above.

---

## Border Radius

| Token | Value | Use |
|---|---|---|
| `radius-sm` | 6px | Small chips, tags, tight controls |
| `radius-md` | 10px | Buttons, inputs, small panels |
| `radius-lg` | 16px | Cards, glass panels, banner modules |
| `radius-xl` | 24px | Hero containers, large surfaces |
| `radius-full` | Pill / circle | Avatars, status dots only |

Rounded corners are part of the premium language. Prefer `radius-lg` for primary surfaces.

---

## Shadows

Soft, layered, never harsh.

| Token | Intent |
|---|---|
| `shadow-sm` | Subtle lift for small elements |
| `shadow-md` | Default card / panel elevation |
| `shadow-lg` | Hero modules, featured surfaces |
| `shadow-glow-primary` | Soft violet glow around key brand elements |
| `shadow-glow-accent` | Soft cyan glow for AI / scanner accents |

### Rules

- Shadows should feel diffused, not cinematic.
- Glow shadows use Primary or Accent at low opacity.
- No multi-stack “neon bloom” effects.

---

## Gradients

| Name | Direction | Stops | Use |
|---|---|---|---|
| Brand Gradient | Diagonal or horizontal | Primary `#7C3AED` → Secondary `#4F46E5` | Titles, borders, CTAs |
| AI Gradient | Soft angle | Secondary `#4F46E5` → Accent `#06B6D4` | AI / automation motifs |
| Surface Gradient | Vertical | Background `#0D1117` → Surface `#161B22` | Banner canvas depth |
| Glow Gradient | Radial | Primary or Accent at low opacity → transparent | Ambient light behind hero content |
| Border Gradient | Along edge | Primary → Accent (or Brand pair) | Gradient borders on panels |

### Rules

- One dominant gradient per composition.
- Gradient borders should be thin and refined.
- Animated gradients move slowly; never strobe.

---

## Glassmorphism

Use where depth helps hierarchy — not on every surface.

| Property | Guidance |
|---|---|
| Fill | Surface color at low–medium opacity |
| Blur | Soft; enough to separate layers, not obscure text |
| Border | Light, low-opacity edge or gradient border |
| Content | Must remain fully legible |

Prefer glass for terminal windows, floating panels, and overlay modules inside the banner.

---

## Icon Style

- Flat SVG icons only
- Consistent stroke or fill weight within a set
- Consistent sizing within a context (e.g. 16 / 20 / 24px conceptual sizes)
- GitHub-compatible (embeddable, crisp at 1x and 2x)
- Align with brand colors when tinted; default to Text Primary / Text Secondary on dark
- No skeuomorphic, 3D, or emoji-as-icon substitutes in core UI

---

## Banner Style

### Concept

Hero section with **terminal inspiration** and a restrained **AI / cyber aesthetic**.

### Layout Principles

- Balanced composition: identity left or center-weighted; supporting terminal / visual motif as counterbalance
- Brand-first: name and professional title are the hero signals
- One dominant visual idea; no stacked promo clutter
- Full-bleed canvas within the SVG artboard; content inset with spacing system
- Responsive: readable at GitHub README widths (desktop and mobile embed scales)

### Visual Ingredients (allowed)

- Terminal window / prompt motif
- Soft floating particles
- Subtle scanner line
- Gradient motion (slow)
- Soft primary / accent glow
- Glass panel for terminal or info module

### Visual Ingredients (disallowed)

- Detached floating badges over the hero
- Dense stat strips in the first viewport of the banner
- Loud glitch, RGB split, or rapid flicker
- Inset “card collage” as the main hero idea

### Variants

| Asset | Role |
|---|---|
| `banner.svg` | Canonical dark hero |
| `banner-light.svg` | Light alternate; same structure, adjusted tokens for contrast |

---

## Animation Principles

Motion should feel **smooth, professional, and purposeful**.

| Principle | Meaning |
|---|---|
| Smooth | Eased motion; no abrupt jumps |
| Professional | Supports hierarchy and presence |
| No flashy effects | No bounce spam, strobe, or chaotic loops |
| 60fps feeling | Prefer transforms and opacity; avoid heavy filter thrash |
| Subtle glow | Breathing light, not pulsing neon |
| Floating particles | Slow drift; sparse density |
| Gradient motion | Slow shift of brand / AI gradients |
| Typing animation | Terminal authenticity; moderate speed |
| Scanner effect | Soft, infrequent pass; Accent-tinted |
| Soft hover | Gentle brightness / glow / lift — if interaction exists |

### Motion Personality

Calm · Precise · Intelligent · Premium

---

## Animation Duration Guidelines

| Category | Duration | Notes |
|---|---|---|
| Micro / hover | 150–250ms | Soft feedback |
| UI transition | 250–400ms | Panel fades, state changes |
| Typing (per character feel) | 40–80ms | Readable; not frantic |
| Scanner pass | 2.5–4s | One soft sweep |
| Particle drift loop | 8–16s | Ambient, nearly unnoticed |
| Gradient shift loop | 6–12s | Slow brand motion |
| Glow breathe | 3–5s | Low amplitude |
| Entrance (banner load) | 400–800ms | Staggered, elegant |

### Easing

- Prefer ease-out for entrances
- Prefer ease-in-out for loops
- Avoid elastic / bounce for core brand motion

### Loop Rules

- Infinite loops must be low-attention ambient motion
- Never loop high-contrast flashes
- Respect reduced-motion intent where the platform allows (favor opacity/transform subtlety)

---

## UI Style Summary

| Element | Spec |
|---|---|
| Corners | Rounded (`radius-md`–`radius-xl`) |
| Depth | Soft shadows + optional glass |
| Edges | Gradient borders where emphasis is needed |
| Surfaces | Background / Surface hierarchy |
| Spacing | 4px-based scale |
| Accents | Primary, Secondary, Accent — sparingly |
| Motion | Subtle, 60fps-feeling, professional |

---

## Component / Asset Mapping

| Asset | Design notes |
|---|---|
| `banner.svg` | Dark hero; terminal + AI aesthetic; brand-first |
| `banner-light.svg` | Same layout language; light token mapping |
| `lanyard.svg` | Soft motion; brand-aligned; not cartoonish |
| `stats.svg` / `langs.svg` / `trophies.svg` | Align colors to palette where themeable; keep clean |
| Icons / badges | Flat SVG; consistent size; GitHub-safe |
| README presentation | Dark-compatible; spacing rhythm; minimal chrome |

---

## Accessibility & Readability

- Maintain strong contrast between Text Primary and Background
- Text Secondary for supporting copy only
- Do not place critical text over busy particle fields without a glass or solid backing
- Banner text must remain legible when GitHub scales the SVG down on mobile

---

## Quality Checklist

Before shipping any visual asset, confirm:

- [ ] Uses only defined color tokens (or documented opacities of them)
- [ ] Follows spacing and radius scales
- [ ] Motion matches duration and easing guidelines
- [ ] Feels premium and calm — not flashy
- [ ] Remains GitHub-native compatible
- [ ] Supports the Full Stack + AI Automation brand story
- [ ] Works on dark-first viewing; light variant only when intended

---

## Governance

- `DESIGN_SYSTEM.md` overrides ad-hoc visual choices
- `PERSONAL_BRAND.md` owns messaging and content truth
- Visual changes that introduce new colors, radii, or motion patterns must update this file first
