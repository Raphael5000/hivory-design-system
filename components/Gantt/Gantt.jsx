/* Hivory Gantt — the plan you can click: quiet ink bars on a week grid, staircase bottom-up.
 *
 * The bars ARE the control. No tab row, no colour-per-phase: rest bars are a 7% ink
 * wash with text-nav labels, the selected bar fills ink-950 with a soft green-tinted
 * shadow. Every bar is a real <button> — click / Enter / Space select the phase and
 * fire onSelect; the detail region is the consumer's job. 38px lane pitch, 30px bars,
 * first phase bottom-left so the eye climbs with time. Labels never truncate: inside
 * the bar at 3+ weeks, outside to its right below that (part of the same button, so
 * one control per phase). Hover is tint only — nothing displaces. Chart geometry
 * (grid lines, bars) is data drawn from values and exempt from the icon rules.
 */
const hvGanttCss = `
.hv-gantt{font-family:var(--font-sans);color:var(--text-body)}
.hv-gantt__chart{position:relative}
.hv-gantt__grid{position:absolute;inset:0;pointer-events:none}
.hv-gantt__gridline{position:absolute;top:0;bottom:0;width:1px;background:var(--hairline)}
.hv-gantt__gridline--major{background:rgba(23,24,26,0.12)}
.hv-gantt__lanes{position:relative}
.hv-gantt__bar{position:absolute;height:30px;border:none;border-radius:8px;background:rgba(23,24,26,0.07);display:flex;align-items:center;padding:0 11px;box-sizing:border-box;cursor:pointer;overflow:visible;font-family:var(--font-sans);color:var(--text-nav);transition:background-color var(--duration-soft) var(--ease-out),box-shadow var(--duration-soft) var(--ease-out),color var(--duration-soft) var(--ease-out)}
.hv-gantt__bar:hover:not(.hv-gantt__bar--selected){background:rgba(23,24,26,0.12)}
.hv-gantt__bar:active{filter:brightness(0.94)}
.hv-gantt__bar:focus-visible{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-gantt__bar--selected{background:var(--ink-950);color:var(--white);box-shadow:0 8px 20px -6px rgba(20,40,30,0.35)}
.hv-gantt__label{font-size:12px;font-weight:600;white-space:nowrap}
.hv-gantt__label--out{position:absolute;left:100%;top:50%;transform:translateY(-50%);padding-left:10px;font-size:11.5px;color:var(--text-nav);transition:color var(--duration-soft) var(--ease-out)}
.hv-gantt__bar--selected .hv-gantt__label--out{color:var(--ink-950);font-weight:650}
.hv-gantt__axis{margin-top:12px;padding-top:8px;box-shadow:inset 0 1px 0 var(--hairline-strong);display:grid}
.hv-gantt__tick{font-size:9.5px;color:var(--text-faint);text-align:center;font-variant-numeric:tabular-nums;letter-spacing:0.04em}
.hv-gantt__empty{font-size:12.5px;color:var(--text-faint)}
@keyframes hv-gantt-shimmer{0%{background-position:120% 0}100%{background-position:-20% 0}}
.hv-gantt__skelbar{position:absolute;height:30px;border-radius:8px;background:linear-gradient(90deg,var(--ink-100) 25%,var(--ink-50) 45%,var(--ink-100) 65%);background-size:300% 100%;animation:hv-gantt-shimmer var(--duration-pulse) var(--ease-out) infinite}
@media (prefers-reduced-motion: reduce){.hv-gantt__skelbar{animation-duration:2400ms}}
`;
function hvEnsureGanttCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-gantt-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-gantt-css';
  s.textContent = hvGanttCss;
  document.head.appendChild(s);
}

/* Geometry constants — the DS gantt scale. */
const HV_GANTT_PITCH = 38;   /* lane pitch */
const HV_GANTT_BAR = 30;     /* bar height */
const HV_GANTT_PAD = 4;      /* top inset of the first lane */
const HV_GANTT_SKELETON = [
  { start: 1, end: 1 },
  { start: 2, end: 3 },
  { start: 3, end: 4 },
  { start: 5, end: 8 }
];

export function Gantt({
  phases = [],
  weeks,
  selected,
  defaultSelected = 0,
  onSelect,
  axisLabels,
  loading = false,
  emptyText = 'No phases yet — the plan has not been drawn'
}) {
  hvEnsureGanttCss();
  const [internal, setInternal] = React.useState(defaultSelected);
  const sel = selected !== undefined ? selected : internal;
  const n = phases.length;

  /* Empty — a plan with no phases is a statement, not a frame. */
  if (!n && !loading) {
    return (
      <div className="hv-gantt">
        <div className="hv-gantt__empty">{emptyText}</div>
      </div>
    );
  }

  const geo = n ? phases : HV_GANTT_SKELETON;
  const rows = geo.length;
  const maxEnd = geo.reduce((m, p) => Math.max(m, p.end || p.start || 1), 1);
  const w = weeks || maxEnd;
  const pct = (x) => (x / w) * 100 + '%';
  const height = rows * HV_GANTT_PITCH + HV_GANTT_PAD;
  const ticks = axisLabels || Array.from({ length: w }, (_, i) => 'W' + (i + 1));

  const pick = (i) => {
    if (selected === undefined) setInternal(i);
    if (onSelect) onSelect(i, phases[i]);
  };

  return (
    <div className="hv-gantt" aria-busy={loading ? 'true' : undefined}>
      <div className="hv-gantt__chart">
        <div className="hv-gantt__grid" aria-hidden="true">
          {Array.from({ length: w + 1 }, (_, i) => (
            <span key={i} className={'hv-gantt__gridline' + (i % 4 === 0 ? ' hv-gantt__gridline--major' : '')} style={{ left: pct(i) }}></span>
          ))}
        </div>
        <div className="hv-gantt__lanes" style={{ height }}>
          {geo.map((p, i) => {
            const start = p.start || 1;
            const end = p.end || start;
            const span = end - start + 1;
            const top = (rows - 1 - i) * HV_GANTT_PITCH + HV_GANTT_PAD;
            const place = { left: pct(start - 1), width: pct(span), top };
            if (loading) {
              return <span key={i} className="hv-gantt__skelbar" data-motion="essential" style={place}></span>;
            }
            const isSel = i === sel;
            const inside = span >= 3;
            return (
              <button
                key={i}
                type="button"
                className={'hv-gantt__bar' + (isSel ? ' hv-gantt__bar--selected' : '')}
                style={place}
                aria-pressed={isSel}
                onClick={() => pick(i)}
              >
                <span className={'hv-gantt__label' + (inside ? '' : ' hv-gantt__label--out')}>{p.label}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="hv-gantt__axis" style={{ gridTemplateColumns: 'repeat(' + w + ', 1fr)' }}>
        {ticks.map((t, i) => (
          <span key={i} className="hv-gantt__tick">{t}</span>
        ))}
      </div>
    </div>
  );
}
