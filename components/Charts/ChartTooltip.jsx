/* Hivory ChartTooltip — dark ink panel (Toast chrome), mono values, series dots. */
const hvChartTooltipCss = `
.hv-charttip{display:inline-block;background:var(--ink-950);color:var(--white);border-radius:var(--radius-md);box-shadow:var(--shadow-overlay);padding:9px 12px;font-family:var(--font-sans);min-width:140px}
.hv-charttip__label{font-size:11px;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;color:var(--ink-400);margin-bottom:6px}
.hv-charttip__row{display:flex;align-items:center;gap:7px;font-size:12.5px;line-height:1.7}
.hv-charttip__dot{width:7px;height:7px;border-radius:2px;flex:none}
.hv-charttip__val{margin-left:auto;font-family:var(--font-mono);font-size:12px;padding-left:14px}
`;
function hvEnsureChartTooltipCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-charttip-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-charttip-css';
  s.textContent = hvChartTooltipCss;
  document.head.appendChild(s);
}

const HV_TIP_SERIES = ['var(--data-1)', 'var(--data-2)', 'var(--data-3)', 'var(--data-4)'];

/* label: x-axis value (e.g. "Aug 14") · rows: [{ label, value, color? }] */
export function ChartTooltip({ label, rows = [] }) {
  hvEnsureChartTooltipCss();
  return (
    <div className="hv-charttip" role="status">
      {label ? <div className="hv-charttip__label">{label}</div> : null}
      {rows.map((r, i) => (
        <div key={i} className="hv-charttip__row">
          <span className="hv-charttip__dot" style={{ background: r.color || HV_TIP_SERIES[i % HV_TIP_SERIES.length] }}></span>
          {r.label}
          <span className="hv-charttip__val">{r.value}</span>
        </div>
      ))}
    </div>
  );
}
