# Hivory Design System — repo rules

Place this at the DS repo root. Every session in this codebase inherits it.

## The contract

**Tokens are the source of truth.** `tokens/*.css` is the only place a value is decided. Anything that reads a raw value instead of a token is a bug, however correct it looks.

**Never rename an existing token.** The bundle resolves them by name. Correct values, or add new ones. `--hover-lift` is held at `0px` rather than deleted for exactly this reason.

## Rhythm — seven rungs, geometric

The 4px grid governs the **inside** of controls (padding, heights, insets, icon boxes). It is the wrong instrument for vertical rhythm: at section scale it offers twenty indistinguishable options, and the eye reads **ratios**, not increments.

`3 · 8 · 12 · 20 · 34 · 64 · 104` — each ≈1.6× the last, each with one job:

| px | Name | Separates |
|---|---|---|
| 3 | Bond | a value and the label naming it |
| 8 | Pair | glyph and text; title and subtitle |
| 12 | Sibling | one row from the next; heading from its paragraph |
| 20 | Block | one block from the next; default card grid gap |
| 34 | Group | a run of blocks from the next run |
| 64 | Section | one section from the next |
| 104 | Chapter | one page-level region from the next |

- **Eyebrow, heading, lede are one unit** — all 12 apart *regardless of heading size*, then 34 to the first block. Scaling that gap with the type is what makes big headings float.
- **Section gaps are asymmetric** — 64 above a heading, 12 below. Equal space orphans it.
- **Gaps grow up the tree** — never let a child gap equal or exceed its parent's.
- **Space is the only grouping device** — before reaching for a rule, card, wash or border, spend a rung. Most boxes in a first draft are a spacing problem wearing a container.
- **Never nudge by 1–2px** to fix an optical problem. The cause is a wrong rung one level up.
- **Mocks are exempt** — anything imitating another surface keeps the measurements of the thing it depicts (a 44px avatar, a 38px record row).
- **Print has its own ladder** — points against a fixed page; the px rungs do not convert.

## Motion

Every duration and easing comes from a token. **No literal `ms` or `cubic-bezier` values anywhere.** `150` and `160ms` were collapsed into `--duration-soft`: against 180 they are sub-perceptual, and a distinction nobody can see is entropy, not craft.

```
--ease-out          cubic-bezier(0.2, 0.8, 0.2, 1)   the one house curve
--ease-glide        cubic-bezier(0.22, 1, 0.36, 1)   fast start, long settle
--duration-fast     120ms   PRESS ONLY
--duration-modal    140ms
--duration-soft     180ms   THE DEFAULT for every state change
--duration-screen   200ms   the only entrance
--duration-slow     240ms
--duration-gentle   340ms   arrivals, toasts
--duration-spinner  1.15s
--duration-pulse    1.6s
--hover-lift        0px     RETIRED — never reintroduce
```

**Soft-motion doctrine (binding).** Every state change eases on `--ease-out` at `--duration-soft`; things settle, never snap.

**Nothing displaces.** Hover and press are **tint, fill, ring or brightness** — never movement. No rise, no nudge, no scale: the cursor already says where you are, and a target that moves as you approach it is a worse target. Movement is reserved for things that genuinely *travel* — a gliding selection pill, an arriving toast, a tooltip's centring transform.

**Press is `filter: brightness(0.94)`** — not opacity, not transform. Inline styles beat stylesheet rules, so an opacity press silently loses on any element that sets its own opacity.

**Reduced motion calms informational animation rather than killing it.** Spinners, pulse dots and skeleton shimmer keep looping at 2.4s via `[data-motion="essential"]`. Freezing a spinner deletes the only signal that work is in flight, leaving a still picture indistinguishable from a stalled one.

## Colour

**Text contrast is measured against the darkest common background, never white.** `--ink-100` `#ECEDEA` is the worst case. This rule exists because `--text-faint` was re-graded to a "passing" 4.78:1 *on white* and still failed at 4.07:1 on real surfaces. The convenient measurement is not the honest one — and when correcting a value, round toward contrast, never toward the nearest value.

Current: `--text-muted` `#63676A` (4.86:1) · `--text-faint` `#676B6E` (4.58:1). The ink *ramp* is unchanged and still correct for borders, dots and meter tracks, which have no contrast requirement.

**Green is the single signal, and it is a fill — never text on white.** `--green-500` is 1.6:1 on white. Text on `--green-500` is **always black** (13.5:1). Legible greens on white: `--green-700` for AA, `--green-800` for AAA/small.

**Status colours never follow the brand.** Green means done, amber means it needs you, red means it failed — in every deployment. Brand answers *whose product is this*; status answers *what happened*.

**The canvas stays neutral cool grey on purpose.** It is not where personality lives — the client's brand is the hero. Do not "premium up" the console's own colours.

**Print hierarchy is never colour.** Rank comes from size and weight.

## Keyboard

A focus stop that Enter and Space cannot activate is **worse than none** — it promises an affordance that is not there. So never add `tabindex` in bulk. Per element: the right tag (`button` where it acts, `a` where it navigates), the right role, and a real key handler with `preventDefault` so Space does not scroll.

Invisible overlays that swallow clicks to close menus must **never** be focus stops.

## Icons

**Tabler** (outline, MIT) for all platform UI. Sized by `font-size`: 14 dense · 16 default · 18 roomy. `--text-muted` rest → `--ink-950` active → `--ink-200` disabled. **Never green.** Outline only.

Permanent exemptions — do not "fix" these:
- **Brand marks** — dual-hex spinner, hex agent mark, the lockup
- **The house checkmark** at 9–11px inside pills and nodes. `ti-check` is optically heavier at that size and is only used at 14px+.
- **Chart geometry** — series lines, fills, sparklines, meter tracks are data drawn from values.

## Surfaces

No 1px borders anywhere — hairlines and whisper shadows do the work. **Exactly one elevated card per screen**, the thing needing the user. Glass appears exactly twice — the rail and the sign-in panel — and both are the *frame* that holds work, never the work itself. **Glass is the frame, never the field:** inputs stay opaque, because a translucent input puts typed text over whatever is behind the window.

Radii: `sm 8 · md 9 · control 10 · lg 12 · xl 14` (cards) `· 2xl 16` (panels) `· pill 999`.
Button heights: **sm 26 · md 33 · lg 40**. One control, three sizes — not five.

## Component completeness bar

A component is not done until it carries: anatomy · variants shown together · all eight states (rest · hover · pressed · focus · selected · disabled · loading · empty) · motion · tokens used · do/don't · accessibility · content rules.

Where a state genuinely cannot apply, **say so in words with the reason.** A declared exemption counts; a silent omission does not.

Two findings worth inheriting: several components' correct empty state is **deletion** (a badge with no status is not a neutral badge, it is no badge), and an empty *cell* takes an em-dash while an empty *measurement* takes `0` — zero is a reading, absence is not.

## Working rules

**Fix on discovery.** No debt carried forward.

**Compute values, don't choose them.** Three separate times in this project a colour was set to the numerically nearest passing value rather than the safest, and each time it failed on a real surface. Derive against the worst case.

**Sweeping existing code stays clean; hand-authoring reintroduces drift.** Every violation cleared in a sweep came back the next time a page was written by hand. This is why the drift test below is not optional.

## Drift test

`npm run drift` must pass. It is the only thing that makes the rules above durable — see `scripts/drift-test.mjs`.
