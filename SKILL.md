---
name: hivory-design
description: Use this skill to generate well-branded interfaces and assets for Hivory (AI-driven digital agency) and its sub-brand Meaning (AI marketing analyst), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Non-negotiables when designing for Hivory:
- Tokens in `tokens/*.css` are the source of truth. Never invent colors.
- `#00EE7F` (green-500) is a FILL, never text on white. Green text on light = green-700 `#008347`. Text on green-500 is always black.
- One brand-green CTA per view. Default actions are black-filled.
- Typeface: Hanken Grotesk everywhere; Martel ONLY for marketing-site H1/H2; Geist Mono for data.
- Density doctrine: glance → hover → click. ≤4 stats per row, ≤3 metric chips per item, 1 meter column per table.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
