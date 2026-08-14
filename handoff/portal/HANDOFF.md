# Portal alignment handoff — hivory-client-portal

> **⚠ SUPERSEDED (2026-08-14).** This runbook targets DS v1 ("Engine"); the system is now
> **v4.1 "Glass Engine"** (see `CHANGELOG.md`). Do not apply these values. The client-portal
> migration has its own current bundle (`design_handoff_whoyou_admin`); consumers should import
> `tokens/` from this repo, diff `tokens/tokens.json` between versions, and run
> `scripts/drift-test.mjs` in CI. Kept for the record of the v1 contract mapping.

Urgent realignment of `Raphael5000/hivory-client-portal` to Hivory Design System v1 ("Engine").
The portal already uses the shadcn CSS-variable contract, so **everything below happens in
`src/app/globals.css` — zero component changes.**

## Why
The portal's theme was adapted from an older "Meaning v2" pass. Four drifts vs. the final system:

1. **Söhne is loaded from `assets.anthropic.com`** — unlicensed, third-party CDN, could break
   during a client demo. The system's typeface is **Hanken Grotesk** (Google Fonts, OFL).
2. Neutrals are green-tinted (oklch hue 155); the system uses **warm gray** neutrals.
3. Signal green is `#00703B`; the system's is **`#008347`** (green-700, AA 4.9:1).
4. Chart palette has blue/purple; the system's data order is **green → teal → amber → warm gray**.

## Steps (≈15 min, for Claude Code or a human)

All replacement blocks are in `globals-theme.css` next to this file, with matching section numbers.

1. **Fonts** — delete the three `Söhne` `@font-face` rules. Add the Google Fonts `@import`
   (Section 1) directly below the existing tailwind/shadcn `@import` lines (imports must
   precede all other rules).
2. **`@theme inline`** — replace the three `--font-*` lines per Section 2
   (`'Söhne'` → `'Hanken Grotesk'`, `'Söhne Mono'` → `'Geist Mono'`).
   In `@layer base → body`, change `font-feature-settings: 'ss01', 'cv11'` → `normal`
   (those features are Söhne/Inter-specific).
3. **Light tokens** — replace the first `:root { … }` token block with Section 3.
4. **Dark tokens** — replace the `.dark { … }` token block with Section 4.
5. **Review-system extras** — globals.css declares a *second* `:root` / `.dark` pair further
   down (`--hl`, `--av-bg`, `--border-strong`…). Update those values to the ones at the END
   of Sections 3 / 4 (or delete the duplicates — the main blocks now carry them).
6. **Hardcoded hex sweep** — grep the repo for these and swap:
   - `#00703B` → `var(--signal)`
   - `#B42318` → `var(--destructive)`  ·  `#067647` / `#32D583` → `var(--success)`
   - `oklch(… 155)` anywhere outside globals.css → nearest token
   - `#2563EB` (pl-badge blue dot) → `var(--chart-2)` · `#D97706` → `var(--chart-3)`
7. **Verify** — run dev, check: login, pipeline list (badges, pulse dots, approve/reject
   buttons), article review (highlights use the new `--hl`), dark-mode toggle, one chart.

## Sanity contrasts (already checked)
- signal `#008347` on white 4.9:1 AA · on `--background #FAFAF9` 4.7:1 AA
- `#00EE7F` is never text on light — fills/dark-surface only (text on it: black)
- destructive `#8F2F1D` on white 7.4:1

## Hosting the design system repo
Create `Raphael5000/hivory-design-system` and push the v1 zip contents (download from the
design project). Then in the portal repo, point agents at it — add to `CLAUDE.md`:

```
Design system: https://github.com/Raphael5000/hivory-design-system
Read its readme.md + SKILL.md before any UI work. Tokens in tokens/*.css are the
source of truth; globals.css in this repo mirrors them via the shadcn contract.
```
