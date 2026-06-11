/* Hivory ChartLegend — 8px swatches in series order, 12px labels. */
const hvChartLegendCss = `
.hv-legend{display:flex;flex-wrap:wrap;gap:4px 16px;font-family:var(--font-sans);font-size:12px;color:var(--ink-700);align-items:center}
.hv-legend__item{display:inline-flex;align-items:center;gap:6px}
.hv-legend__swatch{width:8px;height:8px;border-radius:2px;flex:none}
.hv-legend__value{font-family:var(--font-mono);font-size:11.5px;color:var(--text-muted)}
`;
function hvEnsureChartLegendCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-chartlegend-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-chartlegend-css';
  s.textContent = hvChartLegendCss;
  document.head.appendChild(s);
}

const HV_SERIES = ['var(--data-1-on-light)', 'var(--data-2)', 'var(--data-3)', 'var(--data-4)'];
const HV_SERIES_DARK = ['var(--data-1)', 'var(--data-2)', 'var(--data-3)', 'var(--data-4)'];

/* items: [{ label, value? , color? }] — color defaults to series order. */
export function ChartLegend({ items = [], onDark = false }) {
  hvEnsureChartLegendCss();
  const palette = onDark ? HV_SERIES_DARK : HV_SERIES;
  return (
    <div className="hv-legend">
      {items.map((it, i) => (
        <span key={i} className="hv-legend__item">
          <span className="hv-legend__swatch" style={{ background: it.color || palette[i % palette.length] }}></span>
          {it.label}
          {it.value !== undefined ? <span className="hv-legend__value">{it.value}</span> : null}
        </span>
      ))}
    </div>
  );
}
