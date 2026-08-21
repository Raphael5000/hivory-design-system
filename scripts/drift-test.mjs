#!/usr/bin/env node
/**
 * Hivory Design System — drift test
 *
 * Every rule this checks was a real defect found by hand on 31 Jul 2026, and
 * several were reintroduced within hours of being cleared. Prose does not hold;
 * a failing test does. Wire this into CI as `npm run drift`.
 *
 * Usage:  node scripts/drift-test.mjs [--fix-hints] [src...]
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, extname, join } from 'node:path';

const ROOTS = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const SRC = ROOTS.length ? ROOTS : ['src'];
// .html added for this repo: guideline cards and component cards are HTML specimens.
const EXT = new Set(['.css', '.scss', '.ts', '.tsx', '.js', '.jsx', '.vue', '.svelte', '.html']);

// ─── the system's values ──────────────────────────────────────────────────────
const LADDER = [0, 3, 8, 12, 20, 34, 64, 104];
const DURATION_TOKENS = [120, 140, 180, 200, 240, 340, 1150, 1600];
/** Darkest common text background. Text tokens are calibrated against THIS, never white. */
const WORST_BG = '#ECEDEA';
const AA = 4.5;

// Files/dirs that legitimately contain raw values.
const EXEMPT_PATH = [
  /tokens?\//i,              // the token files ARE where raw values live
  /\.test\./, /__tests__/,
  /node_modules/, /dist\//, /build\//, /\.next\//,
  /vendor\//, /generated\//,
  // repo-specific (added at v4.1):
  /^specs\//,                // frozen spec documentation from the design host — pages QUOTE
                             //   values as content (the WhoYou audit lists drifted hexes on
                             //   purpose); a line scanner cannot tell doc text from CSS
  /support\.js$/,            // generated dc-runtime ("do not edit" header)
  /templates\/email-audit\// // standalone audit harness depicting foreign email surfaces —
                             //   mocks keep the measurements of the thing they depict
];
/** Inline escape hatch: `/* drift-ok: reason *​/` on the same line. */
const INLINE_OK = /drift-ok/;

// ─── helpers ──────────────────────────────────────────────────────────────────
const walk = (dir, out = []) => {
  let entries;
  try { entries = readdirSync(dir); } catch { return out; }
  for (const name of entries) {
    const p = join(dir, name);
    if (EXEMPT_PATH.some((re) => re.test(p))) continue;
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (EXT.has(extname(p))) out.push(p);
  }
  return out;
};

const srgb = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
const hexRgb = (h) => {
  h = h.replace('#', '');
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
};
const lum = (hex) => { const [r, g, b] = hexRgb(hex).map(srgb); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
const ratio = (a, b) => {
  const la = lum(a), lb = lum(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
};
const nearestRung = (n) => LADDER.reduce((b, r) => (Math.abs(r - n) < Math.abs(b - n) ? r : b), LADDER[0]);

// ─── rules ────────────────────────────────────────────────────────────────────
/**
 * Each rule: { id, why, scan(line) -> null | message }
 * `why` is printed on failure — a rule nobody understands gets disabled.
 */
/* The glyphs the system actually ships, from icons.txt. The webfont is
   subsetted, so a glyph outside this list renders as nothing at all — a silent
   visual failure with no error anywhere. This turns it into a build failure. */
const SHIPPED_GLYPHS = (() => {
  try {
    const here = dirname(fileURLToPath(import.meta.url));
    return new Set(
      readFileSync(join(here, '..', 'icons.txt'), 'utf8')
        .split('\n')
        .map((l) => l.replace(/#.*$/, '').trim())
        .filter(Boolean),
    );
  } catch {
    return null;
  }
})();

const RULES = [
  {
    id: 'icon-not-shipped',
    why: 'The Tabler webfont is subsetted to icons.txt. A glyph outside it renders as blank space with no error — add it to icons.txt in the design system and rebuild (scripts/build-icons.mjs).',
    scan(line) {
      if (!SHIPPED_GLYPHS) return null;
      const m = line.match(/\bti\s+(ti-[a-z0-9-]+)|\bclassName=\{?[`"'][^`"']*\b(ti-[a-z0-9-]+)/);
      const name = m && (m[1] || m[2]);
      if (!name || SHIPPED_GLYPHS.has(name)) return null;
      return `${name} is not in the shipped icon subset`;
    }
  },

  {
    id: 'raw-hex',
    why: 'A raw hex bypasses the tokens, so a theme change cannot reach it. This is exactly how the WhoYou theme ended up hand-patching --status-positive-* to undo its own override.',
    scan(line) {
      // ignore hex inside a mask/gradient alpha stop, where the value is a channel not a colour
      if (/mask|-webkit-mask/.test(line)) return null;
      const m = line.match(/#[0-9a-fA-F]{3}(?:[0-9a-fA-F]{3})?\b/);
      return m ? `raw colour ${m[0]} — use a token` : null;
    }
  },
  {
    id: 'literal-duration',
    why: 'Timing must come from a token or the motion doctrine cannot be changed in one place. 150 and 160ms were found in sixteen places and are sub-perceptual against 180 — a distinction nobody can see is entropy.',
    scan(line) {
      if (!/transition|animation/.test(line)) return null;
      const m = line.match(/(?<![\w-])(\d+)ms(?![\w-])/) || line.match(/(?<![\w-])(\d?\.\d+)s(?![\w-])/);
      if (!m) return null;
      const ms = m[0].endsWith('ms') ? parseFloat(m[1]) : parseFloat(m[1]) * 1000;
      if (ms <= 2) return null;                       // 1ms is the reduced-motion collapse
      if (ms === 2400) return null;                   // the calmed essential-motion loop
      const near = DURATION_TOKENS.reduce((b, t) => (Math.abs(t - ms) < Math.abs(b - ms) ? t : b));
      return `literal ${m[0]} in a transition — nearest token is ${near}ms`;
    }
  },
  {
    id: 'literal-easing',
    why: 'There is one house curve (--ease-out) and one glide curve (--ease-glide). A hand-written bezier is a third curve nobody agreed to.',
    scan(line) {
      const m = line.match(/cubic-bezier\([^)]*\)/);
      return m ? `literal ${m[0]} — use --ease-out or --ease-glide` : null;
    }
  },
  {
    id: 'hover-displacement',
    why: 'Nothing lifts. The cursor already says where you are, and a target that moves as you approach it is a worse target. --hover-lift is retired at 0px.',
    scan(line) {
      if (!/:hover|onMouseEnter|style-hover/.test(line)) return null;
      const m = line.match(/translate[XY]?\(\s*-?[\d.]+(px|rem|em)/) || line.match(/scale\(\s*[\d.]+/);
      // translateX(-50%) is centring, not a lift
      if (m && /translateX\(\s*-?50%/.test(line)) return null;
      return m ? `displacement on hover (${m[0]}…) — use tint, fill, ring or brightness` : null;
    }
  },
  {
    id: 'press-not-brightness',
    why: 'Press is filter: brightness(0.94). Inline styles beat stylesheet rules, so an opacity or transform press silently loses on any element that sets its own.',
    scan(line) {
      if (!/:active/.test(line)) return null;
      if (/brightness/.test(line)) return null;
      const m = line.match(/(opacity|transform)\s*:/);
      return m ? `:active uses ${m[1]} — press is brightness(0.94)` : null;
    }
  },
  {
    id: 'second-font-family',
    why: 'Mono was retired 27 Jul. One family everywhere; machine facts are marked by tabular-nums and a quieter colour, never by a second typeface.',
    scan(line) {
      const m = line.match(/['"](Geist Mono|SF Mono|Menlo|Monaco|Consolas|Courier[^'"]*)['"]/) ||
                line.match(/font-family:[^;]*\bmonospace\b/);
      return m ? `second font family (${m[0]}) — mono is retired; use tabular-nums` : null;
    }
  },
  {
    id: 'off-ladder-margin',
    why: 'Vertical rhythm runs on 3 · 8 · 12 · 20 · 34 · 64 · 104. A value 1–2px off a rung is a nudge covering for a wrong rung one level up.',
    scan(line) {
      const m = line.match(/margin(?:-top|-bottom)?\s*:\s*(-?[\d.]+)px/);
      if (!m) return null;
      const n = Math.abs(parseFloat(m[1]));
      if (LADDER.includes(n)) return null;
      return `margin ${n}px is off the ladder — nearest rung ${nearestRung(n)}px`;
    }
  },
  {
    id: 'one-px-border',
    why: 'The system uses hairlines and whisper shadows; a 1px border adds a pixel to the object and breaks pill symmetry. Use an inset ring.',
    scan(line) {
      const m = line.match(/border\s*:\s*1px\s+solid/);
      return m ? '1px solid border — use a hairline or an inset ring' : null;
    }
  }
];

// ─── token contrast (structural, not per-line) ────────────────────────────────
function checkTextTokens(files) {
  const problems = [];
  const tokenFile = files.find((f) => /colors?\.css$/i.test(f)) ||
    (() => { try { return walk('.').find((f) => /tokens?\/colors?\.css$/i.test(f)); } catch { return null; } })();
  if (!tokenFile) return problems;
  let css;
  try { css = readFileSync(tokenFile, 'utf8'); } catch { return problems; }
  for (const m of css.matchAll(/--(text-[a-z-]+)\s*:\s*(#[0-9a-fA-F]{3,6})\s*;/g)) {
    const [, name, hex] = m;
    const r = ratio(hex, WORST_BG);
    if (r < AA) {
      problems.push({
        file: tokenFile, line: 0, rule: 'text-token-contrast',
        msg: `--${name} ${hex} is ${r.toFixed(2)}:1 on ${WORST_BG} (needs ${AA}) — calibrate against the DARKEST common background, never white`
      });
    }
  }
  return problems;
}

// ─── run ──────────────────────────────────────────────────────────────────────
const files = SRC.flatMap((s) => { try { return statSync(s).isDirectory() ? walk(s) : [s]; } catch { return []; } });
if (!files.length) {
  console.error(`drift: no source files found under ${SRC.join(', ')}`);
  process.exit(2);
}

const found = [];
for (const file of files) {
  const lines = readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, i) => {
    if (INLINE_OK.test(line)) return;
    for (const rule of RULES) {
      const msg = rule.scan(line);
      if (msg) found.push({ file, line: i + 1, rule: rule.id, msg });
    }
  });
}
found.push(...checkTextTokens(files));

// ─── report ───────────────────────────────────────────────────────────────────
const byRule = found.reduce((a, p) => { (a[p.rule] = a[p.rule] || []).push(p); return a; }, {});
const why = Object.fromEntries(RULES.map((r) => [r.id, r.why]));
why['text-token-contrast'] =
  'A text token was calibrated on white and fails on real surfaces. This exact bug shipped twice: --text-faint measured a passing 4.78:1 on white while failing at 4.07:1 on --ink-100.';

console.log(`\ndrift — ${files.length} files scanned\n`);
if (!found.length) {
  console.log('  ✓ clean\n');
  process.exit(0);
}

for (const [id, hits] of Object.entries(byRule)) {
  console.log(`  ✗ ${id} — ${hits.length}`);
  console.log(`    ${why[id]}\n`);
  for (const h of hits.slice(0, 12)) console.log(`      ${h.file}:${h.line}  ${h.msg}`);
  if (hits.length > 12) console.log(`      … and ${hits.length - 12} more`);
  console.log('');
}
console.log(`  ${found.length} problems across ${Object.keys(byRule).length} rules.`);
console.log('  Escape hatch: add /* drift-ok: <reason> */ on the line, with a reason.\n');
process.exit(1);
