# Changelog

Versions are recorded in `package.json` and `tokens/tokens.json` (the diffable token record — diff it between versions to see exactly what changed; the WhoYou portal drifted precisely because CSS files don't announce changes).

## 4.1.3 (2026-08-21)

### Changed
- **SignIn is full bleed.** The gate is a screen, not a card: it now fills the viewport (`min-height: 100dvh`) with no radius and no elevation, instead of rendering as a 660px plate that had to be centred by every consumer. Consumers should place it directly — no centring frame. On mobile it stays full bleed, the plate collapsing to a band over a form that takes the rest (`grid-template-rows: auto 1fr`).
- `plate: false` (`.hv-signin--solo`) is unaffected and keeps its card chrome. It is a form panel embedded in someone else's layout, not a screen, so it carries the radius and elevation explicitly now that the base no longer supplies them.

## 4.1.2 (2026-08-21)

Distribution fixes. The system was consumable as a browser bundle and, it turns out, as almost nothing else — both bugs surfaced the first time a real bundler tried to import it (portal v2). No component behaviour, geometry or token changed; `_ds_bundle.js` is byte-identical below the header.

### Fixed
- **13 components assumed a `React` global.** Accordion, DateRangePicker, FilterSelect, Gantt, ImageSlot, Menu, Modal, ReviewActions, Sidebar, SignIn, SignatureBlock, SplitButton and Tabs call `React.useState` / `React.useId` / `React.Fragment` with no import. That works only inside `_ds_bundle.js`, which sets `window.React`; imported as ES modules — the documented path for consumers — they throw `ReferenceError: React is not defined` on any server render. That was the whole interactive half of the system, unusable in Next, Remix or any SSR framework. Sources now carry `import * as React from 'react'`, and `scripts/build-bundle.mjs` strips it before the IIFE wrap (an import inside a function body is a syntax error, so the bundle would not have built otherwise). The bundle still supplies React as a global; browser consumers are unaffected.
- **`styles.css` could not be imported by a bundler.** Its `@import "tokens/fonts.css"` had no leading `./`, so postcss/webpack/Turbopack resolved each as a *package* name and the build failed — while the readme instructs consumers to import exactly this file. Now `./tokens/…`.
- `package-lock.json` version was stale at 4.1.0.

## 4.1.1 (2026-08-15)

First fruits of the production feedback loop: the WhoYou dashboard went live on v4.1.0 and every hole it exposed lands here as system, not as app-side patches.

### Components
- **StatCard** — the KPI tile every analytics screen was about to hand-roll (and WhoYou did, drifting from the Card canon within a week). Label top, 28px tabular reading bottom, Card canon geometry; `null` renders an em-dash (absence), a measured zero renders `0` (a reading) — the caller decides, per the empty-cell doctrine.
- **InfoTip** (in Tooltip) — "how is this measured": a definition popover behind an info glyph drawn on the house icon grammar. Focus reveals it (the tab stop has a function); `note` carries a caution-toned pending-sign-off line; `align="end"` for last columns.

### Fixed
- **FilterSelect**: rows had a fixed 32px height, so a label long enough to wrap collided with the next row (found with WhoYou's real category copy). Rows now grow from min-32 with the checkbox and tone dot pinned to the first text line; the panel caps at 320px so wrapping is deliberate. Doctrine: a filter option is never truncated.

### Doctrine
- Rhythm: clarified Pair (8) vs Sibling (12) for text-over-text — page heading + lede is Sibling (12); the Pair rung's "title and subtitle" means compact surfaces (card titles, popover heads). WhoYou shipped page ledes at 8 by reading the table alone.
- Surfaces: **identity appears once per screen** — a rail and a Topbar never both carry the product's name; when a rail owns the frame there is no Topbar, and its load-bearing content (the sync reading) moves into the rail. WhoYou shipped both and the duplication read as clutter within a day.

## 4.1.0 — "Glass Engine" (2026-07-31, landed 2026-08-14)

Reconciled to the client-portal direction. The portal is canonical.

### Tokens (24 Jul reconciliation)
- Cool ink ladder `#1A1B1D → #C6C8C6` with new steps 800/750/600/250 (was the warm `#3D3D3C` family)
- `--green-600` `#00A352` · radii `control 10 / xl 14` (cards) `/ 2xl 16` (panels) · green-tinted shadows, `--shadow-elevated` (the one elevated card per screen), `--shadow-glass-ring`, `--scrim`
- Platform face → the system font stack; Hanken Grotesk demoted to `--font-brand` (marketing/brand moments)
- Fractional weights 550/650/680 · dense platform type scale (eyebrow 10 → file 23)
- Glass Engine theme layer: `--canvas`, `--glass-*`

### Tokens (31 Jul)
- `--text-muted` → `#63676A` and `--text-faint` → `#676B6E` — re-graded AA **against `--ink-100` `#ECEDEA`, the darkest common text background, never white** (this exact bug shipped twice when calibrated on white)
- `--hover-lift` retired at `0px` — nothing displaces on hover, ever; kept so consumers resolve, never reintroduce
- Full duration set: `--duration-modal` 140 · `--duration-soft` 180 (**the default**) · `--duration-screen` 200 · `--duration-slow` 240 · `--duration-gentle` 340 · `--duration-spinner` 1.15s · `--duration-pulse` 1.6s; `--duration-fast` 120 is **press-only**
- **Mono retired** (27 Jul): `--font-mono` resolves to the system sans; machine facts are `font-variant-numeric: tabular-nums` + a quieter colour
- Tabler icons webfont import added (`tokens/fonts.css`) — Tabler is the platform icon set (exemptions: brand marks, the 9–11px house checkmark, chart geometry)

### Component bundle (31 Jul fixes, applied to bundle **and** `.jsx` sources)
- Buttons are pills on the 26/33/40 height ladder, weight 600/650
- 1px borders replaced with inset rings / hairlines across Input, Select, Textarea, Checkbox, Menu, Card, DateRangePicker, MetricChip, Sidebar
- 16 state transitions moved 120ms → 180ms (`--duration-soft`; 120 is press-only)
- Menu/segment chrome aligned to spec (13.5px rows, 7/10 padding, min-width 180)
- Green caret on text fields; focus ring 1.5px `--green-600` inset
- Carried forward from local v1 work: Table numerals `tabular-nums` (now doctrine)

### New in the repo
- `CLAUDE.md` — binding repo rules (rhythm ladder, motion/colour/keyboard/surfaces doctrine, completeness bar)
- `scripts/drift-test.mjs` + `npm run drift` — nine rules, each a real defect found by hand on 31 Jul; escape hatch `/* drift-ok: reason */`
- `tokens/tokens.json` — the 186-token diffable version record
- `specs/` — 45 spec pages with live specimens (open in a browser; they are the acceptance criteria, not production code)
- `docs/portal-design-language.md` — the full binding doctrine (portal + proposal + foundations)
- Guideline cards updated to v4.1; new Rhythm, States & motion, and White label cards
- 12 components implemented from their spec pages: SplitButton, ImageSlot, Stepper, SignatureBlock, SignIn, Topbar, Accordion, StepTimeline, CapMeter, Transcript, Gantt, FilterSelect

### Compatibility
- **No token renamed or removed.** `--text-xl`, `--tracking-display`, `--tracking-marketing-display` kept as a compat block in `tokens/typography.css`.

## 1.0.0 — "Engine" (2026-07, superseded)

Initial system: warm-gray light platform, Hanken Grotesk everywhere, Geist Mono for data, 4px grid, radii 6–14, borders over shadows. Known in later docs as the v3 token state.
