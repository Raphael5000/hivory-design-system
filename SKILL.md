---
name: hivory-design
description: Use this skill to generate well-branded interfaces and assets for Hivory (AI-driven digital agency) and its sub-brand Meaning (AI marketing analyst), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the readme.md file within this skill, then CLAUDE.md (the binding v4.1 "Glass Engine" doctrine), and explore the other available files. Full spec pages with live specimens live under `specs/`; the portal doctrine is `docs/portal-design-language.md`.

Non-negotiables when designing for Hivory (v4.1 "Glass Engine"):
- Tokens in `tokens/*.css` are the source of truth. Never invent colors; never rename a token. `npm run drift` must pass.
- `#00EE7F` (green-500) is a FILL, never text on white. Green text on light = green-700 `#008347`. Text on green-500 is always black. Green is the single signal — never decoration, never an icon color, never a count badge.
- One brand-green CTA per view; exactly one elevated card per screen. Default actions are ink-filled pills (heights 26/33/40). No 1px borders — hairlines and whisper shadows.
- Type: the system face for all platform UI (Hanken Grotesk = `--font-brand`, marketing/brand moments only; Martel ONLY marketing-site H1/H2). Mono is RETIRED — machine facts are tabular-nums + a quieter color, never a second family.
- Text contrast is measured against `--ink-100` `#ECEDEA` (the darkest common text background), never white.
- Vertical rhythm runs on the seven-rung ladder 3 · 8 · 12 · 20 · 34 · 64 · 104; the 4px grid governs control interiors only.
- Motion: every duration/easing from a token; `--duration-soft` 180ms is the default; 120ms is press-only; nothing displaces on hover; press is `filter: brightness(0.94)`.
- Icons: Tabler outline, sized by font-size (14/16/18), never green. Exemptions: brand marks, the 9–11px house checkmark, chart geometry.
- Density doctrine: glance → hover → click. ≤4 stats per row, ≤3 metric chips per item, 1 meter column per table, 1 chart per card.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
