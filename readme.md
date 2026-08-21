# Hivory Design System — v4.1 "Glass Engine"

**Hivory — The engine for growth.** Hivory is an **AI-driven digital agency that achieves uncommon growth**. It is the parent brand; sub-products live under it (first: **Meaning**). This repo is the design system's source of truth: brand, tokens, components, guidelines, spec pages, and the drift test that keeps them honest.

Binding rules live in **`CLAUDE.md`** (rhythm, motion, colour, keyboard, surfaces, completeness bar). The full portal doctrine is **`docs/portal-design-language.md`**. Version history is **`CHANGELOG.md`**; the canonical version is `package.json` (`4.1.0`), and `tokens/tokens.json` is the diffable token record.

## Brand primary

The Hivory logo (`assets/logo/`) sets the primary color: **electric green `#00EE7F`** (`--green-500`). The mark is two overlapping rotated hexagonal outlines in green; the wordmark is black (on-light) or white (on-dark). The mark is *always* green — never recolor it except to pure black/white when sitting on green itself.

## Direction: "Glass Engine"

The portal is canonical. Two layers:

- **CORE** — brand-universal values: the green ramp, the cool ink ladder, companions (teal/amber), semantics.
- **GLASS ENGINE** (platform theme) — the surface treatment the portal wears: a cool-grey canvas (`#F2F3F2`) with two faint radial washes, **one glass object per screen (the sidebar)** — glass is the frame, never the field — solid white cards over hairlines, **exactly one elevated card per screen** (the thing needing the user; `--shadow-elevated`). **No 1px borders anywhere** — hairlines and whisper shadows do the work. The canvas stays neutral on purpose: the client's brand is the hero; don't "premium up" the console's own colours.

Radii: `sm 8 · md 9 · control 10 · lg 12 · xl 14` (cards) `· 2xl 16` (panels) `· pill 999`. Buttons are pills: **sm 26 · md 33 · lg 40** — one control, three sizes.

## Colour logic (v4 — cool ladder, worst-case contrast)

- Cool ink ladder `--ink-950 … --ink-50` (`#0D0D0D → #F6F6F3`) with role-graded steps: 900 body · 800 action fill · 750 action hover · 700 secondary · 600 nav · 500 muted labels · 400 faint · 300 ghost · 250 struck · 200/100 borders · 50 inset surfaces.
- **Text contrast is measured against the darkest common background, never white**: `--ink-100` `#ECEDEA` is the worst case. `--text-muted` `#63676A` (4.86:1) · `--text-faint` `#676B6E` (4.58:1). When correcting a value, round toward contrast, never toward the nearest value.
- `#00EE7F` (`--green-500`) is the **single signal** and a **fill, never text on white** (1.6:1 ✗). Text on green-500 is **always black** (13.5:1 ✓). Legible greens on white: `--green-700` `#008347` AA · `--green-800` `#005C32` AAA · `--green-600` `#00A352` large text/icons/functional marks only.
- Green means signal — live dots, deltas, the mark, agent activity. Never decoration, never an icon color, never a count badge. Counts are quiet: tabular grey text or a neutral pill.
- **Status colours never follow the brand.** Green done · amber needs-you · red failed, in every deployment. Brand answers *whose product*; status answers *what happened*.

## Typography

- **The system face** (`--font-sans`: SF/Segoe stack) — all platform UI. Dense scale: eyebrow 10 · meta 11 · label 11.5 · xs 12 · sm 12.5 · row 13 · **base 13.5** · lg 15 · data 20 · title 21 · file 23; display sizes 28/36/48/64 for marketing + hero moments. Fractional weights 550/650/680 carry titles.
- **Hanken Grotesk** (`--font-brand`) — marketing and brand moments only.
- **Martel** (`--font-marketing-display`) — marketing website ONLY, H1/H2 only, runs light (200/400, italic 300).
- **Mono is retired.** `--font-mono` resolves to the system sans. Machine facts (metrics, timestamps, code) are marked by `font-variant-numeric: tabular-nums` + a quieter colour — never a second family.

## Rhythm — seven rungs, geometric

The 4px grid governs the **inside** of controls; vertical rhythm runs on `3 · 8 · 12 · 20 · 34 · 64 · 104` (Bond · Pair · Sibling · Block · Group · Section · Chapter), each ≈1.6× the last, each with one job. Eyebrow/heading/lede are one unit (12 apart, then 34 to the first block); section gaps are asymmetric (64 above a heading, 12 below); gaps grow up the tree; space is the only grouping device. See `CLAUDE.md` and `guidelines/rhythm.html`; full spec `specs/Foundation - Rhythm.dc.html`.

## Motion

Every duration and easing comes from a token — no literal `ms` or `cubic-bezier` anywhere. `--duration-soft` 180ms on `--ease-out` is **the default for every state change**; `--duration-fast` 120ms is **press-only**; 200ms is the only entrance. **Nothing displaces on hover** (`--hover-lift` retired at `0px`); hover is tint/fill/ring/brightness. Press is `filter: brightness(0.94)`. Reduced motion calms informational loops to 2.4s via `[data-motion="essential"]` — never freezes them.

## Iconography

**Tabler** (outline, MIT) is the platform icon set, loaded as a webfont via `tokens/fonts.css` (`<i class="ti ti-search">`), sized by `font-size`: 14 dense · 16 default · 18 roomy; `--text-muted` rest → `--ink-950` active → `--ink-200` disabled. **Never green. Outline only.**

Permanent exemptions — do not "fix" these: **brand marks** (dual-hex spinner, hex agent mark, the lockup), **the house checkmark** at 9–11px inside pills and nodes, **chart geometry** (series, fills, sparklines, meter tracks). The in-house glyph set (`components/Icon`, 20 glyphs on the hexagon grammar) remains for those house uses; marketing surfaces don't use Tabler.

## Sub-brands

Sub-brands share Hivory's mark and token vocabulary and differ via a **theme scope**: `tokens/brands/meaning.css` → `[data-brand="meaning"]`. Assets in `assets/logo/<sub-brand>/`. Every lockup ships in exactly four colorways: black-green · green-white · all-black · all-white.

**White label** (partner theming) swaps exactly three tokens — `--action-brand`, `--on-action-brand`, `--border-focus`. Status colours never follow the brand; `--on-action-brand` is measured, never chosen. Spec: `specs/Foundation - White label.dc.html`.

### Meaning

First sub-brand. **Meaning is an AI analyst for your marketing and sales activity.** Lockup = shared hex mark + "Meaning" wordmark; dark-surface-first. TBD with user: whether Meaning gets its own accent color.

## Content fundamentals

- **Hivory (agency)** speaks as "we": confident, senior, outcome-led. *Uncommon growth.* Short declarative sentences; say the number; zero hype-words, no emoji.
- **Meaning (product)** speaks to "you" about your data: an analyst's voice — plain-language findings, evidence attached.

## Density doctrine

**The system is dense so the product isn't.** 13px working type; air lives at the edges, not between rows. Disclosure ladder: glance (Badge, one number, PulseDot) → hover (Tooltip) → click (Modal/detail). Budgets per view: 1 brand-green CTA · ≤4 scorecards per row · ≤3 MetricChips per item · 1 meter column per table · 1 chart per card. `guidelines/density-doctrine.html`.

## Components

### Importable (in `_ds_bundle.js` → `window.HivoryDesignSystem_354905`)

Button · Badge · Input · Select · Card/Stat/Scorecard · Table · Tabs · Avatar/AvatarGroup · Menu · Modal · Checkbox/Switch/Textarea · Tooltip · Toast/ToastStack · Skeleton/Separator · MetricChip/DifficultyMeter · Spinner/PulseDot · ChartLegend/ChartTooltip · DateRangePicker · IconButton/ReviewActions · Sidebar/SidebarIcon — plus the v4.1 set: **SplitButton · ImageSlot · Stepper · SignatureBlock · SignIn · Topbar · Accordion · StepTimeline · CapMeter · Transcript · Gantt · FilterSelect**.

Each lives at `components/<Name>/` as dependency-free `.jsx` (CSS-in-template-string, injected once) + `.d.ts` (design rules in JSDoc) + a `card.html` specimen. A component is **done** only when it carries the completeness bar: anatomy · variants together · all eight states (or a declared exemption in words) · motion · tokens used · do/don't · a11y · content rules — the spec pages under `specs/Component - *.dc.html` are the acceptance criteria.

### Spec pages (`specs/`)

45 pages with live specimens (need `specs/support.js`; open any page in a browser). They are documentation and acceptance criteria, **not production code**. `specs/Foundation - Inventory.dc.html` is the live coverage board.

## Distribution — the contract with consumers

The WhoYou portal drifted because it **copied** tokens and nothing announced that values changed. The contract now:

1. **Consumers import `tokens/*.css` + `styles.css` from this repo** (pin a commit/tag); never copy values out. `styles.css` pulls in `components.css` too, which is what makes the components render correctly when the consumer **server-renders** — the runtime CSS injection cannot run before hydration.
2. **`tokens/tokens.json` is the changelog**: diff it between versions to see exactly what changed. Regenerated from the CSS — never hand-edit.
3. **`scripts/drift-test.mjs` goes in every consumer's CI** (`npm run drift` here): nine rules, each a real defect found by hand. Escape hatch: `/* drift-ok: reason */` with a reason.
4. **Never rename an existing token.** Correct values or add new ones (`--hover-lift` is held at `0px` for exactly this reason; `--text-xl` and the tracking aliases live in the compat block of `tokens/typography.css`).
5. Components ship as the browser bundle (`_ds_bundle.js`) + readable `.jsx` sources — not an npm package (deliberate, for now). The bundle header's `sourceHashes` are regenerated by the host tooling; after hand-edits to `.jsx` they go stale until the next regeneration.

## Index

- `styles.css` — global entry; imports everything under `tokens/` plus `components.css`
- `components.css` — GENERATED component rules (from the sources, by `scripts/build-bundle.mjs`)
- `tokens/` — colors · typography · layout · fonts · `brands/meaning.css` · `tokens.json` (version record)
- `CLAUDE.md` — binding repo rules · `docs/portal-design-language.md` — full doctrine · `CHANGELOG.md`
- `scripts/drift-test.mjs` — `npm run drift`
- `components/<Name>/` — `.jsx` + `.d.ts` + `card.html` · `_ds_bundle.js` + `_ds_manifest.json` — generated browser bundle + manifest
- `guidelines/` — specimen cards (Brand · Colors · Type · Spacing · Components groups)
- `specs/` — the 45 spec pages + `support.js`
- `templates/dashboard` — the Dashboard template · `templates/email-audit` — email template audit harness
- `handoff/portal/` — superseded v1 portal runbook (kept for the record)
- `assets/logo/hivory/` & `assets/logo/meaning/` — four lockups per brand (+ Hivory `mark-*.svg`)

## Deferred (deliberately)

Mobile geometry (screens-locked milestone) · npm packaging · marketing section kit (hivory.io is its own language — warm ivory, Martel display, `--mk-*` tokens; see `specs/Kit - Marketing.dc.html`) · real screen-reader / second-browser passes (ARIA is reasoned, not tested).
