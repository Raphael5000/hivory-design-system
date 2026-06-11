# Hivory Design System

**Hivory — The engine for growth.** Hivory is an **AI-driven digital agency that achieves uncommon growth**. It is the parent brand; sub-products live under it. The first sub-product is **Meaning**.

Built from scratch, brick by brick, with the user. Current scope: **brand (logo + icons), tokens, components, guidelines, one template (Dashboard)**. Marketing-layer components and the Meaning UI kit come next.

## Brand primary

The Hivory logo (supplied by the user, `assets/logo/`) sets the primary color: **electric green `#00EE7F`** (`--green-500`). The mark is two overlapping rotated hexagonal outlines in green; the wordmark is set in black (on-light) or white (on-dark). The mark is *always* green — never recolor it except to pure black/white when sitting on green itself.

## Direction: "Engine"

Chosen from a 3-way Linear↔Wealthsimple exploration — the 50/50 blend: **light, structured, quietly warm**. Linear's order, Wealthsimple's ease.
- Light platform on warm gray (`--surface-app` #FAFAF9), white cards, borders over shadows
- Black-filled primary actions; green only for hero CTA + live signals
- Companions: **teal** (info/secondary data) + **amber** (warmth/caution) — see `tokens/colors.css`
- Radius 8–10, 4px spacing grid, 120ms `cubic-bezier(0.2,0.8,0.2,1)` motion (`tokens/layout.css`)
- Platform base type ~13.5px (= `--text-sm`), marketing roomier
- Martel: marketing website ONLY (unchanged)

### Color logic (v2 — black & white platforms, contrast-graded green)
- The platforms are **black & white first**: white pages with black type, black sections with white type. Neutrals are pure gray, no undertone.
- `#00EE7F` (`--green-500`) is the **single signal color** and is a **fill, never text on white** (1.6:1 ✗). Text on green-500 is **always black** (13.5:1 ✓), never white.
- Legible greens on white: `--green-700` #008347 for AA text/links (4.9:1), `--green-800` #005C32 for AAA/small text (8.2:1), `--green-600` only for large text/icons (3.3:1).
- On black, green-500 runs at full intensity (12.6:1 ✓) — data highlights, metrics, the mark.
- Default actions are black (`--action-primary`); electric green is reserved for the hero CTA (`--action-brand`, black label) and data signals.

## Typography

Two brand families with a hard scope rule:
- **Hanken Grotesk** (Google Fonts, OFL, variable 300–800) — the workhorse: ALL platform type and marketing body/H3+. Chosen 2026-06 to replace Söhne (Klim — unaffordable); closest free match to its temperament. Weights in use: 400/500/600. Platform runs a dense 13px base in the app shell; use `font-variant-numeric: tabular-nums` on data surfaces.
- **Martel** (serif, Google Fonts 200/300/400) — `--font-marketing-display`. **MARKETING WEBSITE ONLY, and only H1 + H2.** Martel runs LIGHT: weight 200 for hero display (leading 1.02), 400 for standard H1/H2 (leading 1.4), italic 300 for single-word accents inside display headings. Never on the platform; never below H2.
- **Geist Mono** (Google Fonts, OFL) — data, metrics, code (`--font-mono`). Replaced Söhne Mono.

### Platform notes (from the Meaning repo, for future UI-kit work)
- Meaning v2 app: shadcn-style semantic tokens, OKLCH neutrals hued 155, light primary `#00A352` / dark primary `#00EE7F`, ease `cubic-bezier(0.2, 0.8, 0.2, 1)`, 120ms transitions, 13px base, tabular-nums for data.
- Buttons: ink-filled primary (not green), outline/ghost/subtle variants, green reserved for AI-action "brand" tint. Radius ~8px.
- `design-handoff/` in that repo holds prior Meaning design-system tokens + chat/dashboard components — source of truth when we build the Meaning UI kit.

## Sub-brands

Sub-brands share Hivory's mark, type and token vocabulary, and differ via a **theme scope** — a CSS attribute selector that overrides semantic tokens while inheriting everything else:

- `tokens/brands/meaning.css` → `[data-brand="meaning"]` — apply with `<body data-brand="meaning">`.
- Assets live in `assets/logo/<sub-brand>/`.

### Meaning
First sub-brand. **Meaning is an AI analyst for your marketing and sales activity** — it watches campaign and pipeline data and tells you what it means. Lockup = shared hex mark + "Meaning" wordmark; dark-surface-first. **TBD with user: whether Meaning gets its own accent color.**

### Logo color variants (applies to ALL brand logos)
Every lockup ships in exactly four colorways — never mix others:
1. **black-green** — green mark, black wordmark · primary on light
2. **green-white** — green mark, white wordmark · primary on dark
3. **all-black** — mono on light
4. **all-white** — mono on dark or on green

## Iconography

**Custom in-house set** (`components/Icon` — `<Icon name="…"/>`, 20 glyphs) — drawn on the brand's own grammar, the way Wealthsimple/Linear own theirs:
- **Grammar:** 16px grid, 1.5px even stroke, round caps + joins, no fills, no duotone, no emoji. Diagonals prefer the hexagon's 60° family over generic 45°.
- **Signature:** the mark's hexagon replaces the generic square/circle wherever an icon needs a container — dashboard's fourth tile, the agent's body.
- **Sizes:** 14px dense UI (sidebar) · 16px default · 18px roomy. Color: `text-muted` rest, `ink-950` active/hover, `ink-200` disabled. **Never green.**
- **Long-tail fallback in product code:** Phosphor (MIT — the free pack closest to this grammar). Any icon used often enough gets drawn into the custom set.
- `SidebarIcon` mirrors 10 of these glyphs so Sidebar stays self-contained. Spec cards: `guidelines/iconography.html` + the Icon component card.

## Content fundamentals (draft — confirm with user)

- **Hivory (agency)** speaks as "we": confident, senior, outcome-led. Signature idea: *uncommon growth* — results that look like outliers. Short declarative sentences; say the number; zero hype-words ("synergy", "supercharge"), no emoji.
  - e.g. "We engineer uncommon growth." / "Pipeline up 38% in one quarter."
- **Meaning (product)** speaks to "you" about your data: an analyst's voice — plain-language findings, evidence attached. It *tells you what your marketing and sales activity means*, not just what happened.
  - e.g. "Your CAC rose 12% — driven entirely by paid social. Here's the fix."

## Density doctrine

**The system is dense so the product isn't.** Components carry maximum capability; any single view uses the minimum. Codified in `guidelines/density-doctrine.html`:
- **Disclosure ladder:** glance (Badge, one number, PulseDot) → hover (Tooltip/ChartTooltip) → click (Modal/detail, all the MetricChips).
- **Per-view budgets:** 1 brand-green CTA · ≤4 Stats per row · ≤3 MetricChips per item (rest behind +N) · 1 meter column per table · 1 chart per card · mono = data only.
A consuming project that wants to show more should add a disclosure step, not a denser screen.

## Components

Core set, all in Engine style under `components/<Name>/` (`.jsx` + `.d.ts` + card). Load via `_ds_bundle.js`; read from `window.HivoryDesignSystem_354905`.
- **Button** — primary (ink fill) · brand (green-500, hero CTA — max one per view) · outline · ghost · danger; sm/md/lg
- **Badge** — status chips: positive/info/caution/negative/neutral, optional dot
- **Input / Select** — 34px field chrome, radius 8, green-600 focus ring, hint/error
- **Card / Stat** — white surface, subtle border, quiet shadow, radius 10; Stat tiles render metrics in mono; `flush` for tables
- **Table** — uppercase header, right-aligned mono numerals, hover rows; cells accept React nodes (Badges)
- **Tabs** — quiet underline, ink active, count pill goes green when selected
- **Avatar / AvatarGroup** — initials on ink-100, presence dot, overlapping +N stack
- **Menu** — dropdown for row actions; danger zone below separator; mono shortcut hints
- **Modal** — radius-14 panel on soft ink scrim; Esc/scrim close; footer action row
- **Checkbox / Switch / Textarea** — form set complete; ink checked states (green stays reserved), Input chrome
- **Tooltip** — ink chip on hover/focus, short labels only
- **Toast / ToastStack** — dark ink notice, bottom-right, tone dots (presentational — app owns state)
- **Skeleton / Separator** — shimmer placeholders (reduced-motion safe), 1px rules
- **MetricChip / DifficultyMeter** — per-article/keyword micro-indicators (KD, volume, position, content score). DifficultyMeter: 4 rising bars on the 0–100 scale, low=green for difficulty, `semantics:'score'` flips it; auto status-token colors. MetricChip: uppercase micro-label + mono value; `variant:'chip'` standalone on cards, `variant:'bare'` inside Table cells; takes a meter or Icon as `icon`. Rule: in tables use bare meters/values (the column header is the label); outside tables use chips (the chip carries its own label).
- **Spinner / PulseDot** — the activity primitives (critical: agents busy, syncs, API calls in flight). Spinner = two counter-rotating hexagon outlines echoing the dual-hex mark; tones brand/ink/on-dark, optional label, `calm` for long-running agent work. PulseDot = ambient radiating dot for ongoing presence ("3 agents running"). Rule of thumb: Spinner for discrete in-flight work, PulseDot for ongoing aliveness, Skeleton for first paint.
- **ChartLegend / ChartTooltip** — the chart visual spec: series order `--data-1→4`, horizontal grid only (`ink-100`), no axis lines, 10px mono axis labels, ink tooltip with mono values. Green-600 for series on light, green-500 on dark.
- **DateRangePicker** — preset rail (7d/30d/quarter/YTD/custom) + month calendar; ink range ends, green-50 span
- **Dashboard widget pattern** (guidelines card) — Scorecard row → chart-in-Card → table-in-Card on the warm-gray app surface
- **IconButton / ReviewActions** — repeated inline approve/reject. RULE: quiet ghost glyphs at rest (ink-400, no fill), tone appears on hover only (green/red tint), pair collapses to a tinted chip + Undo once decided. Bulk approval = one "Approve all" outline button in the header — never N filled buttons.

## Index
- `styles.css` — global entry; imports everything under `tokens/`
- `tokens/colors.css` — green ramp, ink neutrals, semantic aliases
- `tokens/typography.css` — families, scale, weights, leading, tracking
- `tokens/layout.css` — radii, spacing, shadows, motion (Engine)
- `tokens/fonts.css` — webfont imports (substitutes, see above)
- `assets/logo/hivory/` & `assets/logo/meaning/` — each brand ships the same four lockups: `black-green.svg`, `green-white.svg`, `all-black.svg`, `all-white.svg` (+ Hivory `mark-green/black/white.svg`)
- `tokens/brands/meaning.css` — Meaning theme scope
- `guidelines/` — specimen cards for the Design System tab

- **Sidebar / SidebarIcon** — app rail matched to the portal's production Sidebar.tsx: 272px card surface (56 collapsed), workspace switcher chip, uppercase group headers with chevron expand, 13px items · 14px icons · radius 7, active = ink-50 fill + semibold + 2px ink left bar, green signal dot on collapsed sections holding the active page, status pills (e.g. "Review"), ghost footer rows

## Not yet built (intentionally)
Sidebar/app shell · marketing section kit · status language card · UI kits · slides · templates · SKILL.md
