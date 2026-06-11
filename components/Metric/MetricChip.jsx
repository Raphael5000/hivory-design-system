/* Hivory Metric — small per-article/keyword indicators (difficulty, volume,
   position…) that work inside Table cells and standalone on cards.
   · MetricChip — labelled micro-stat. variant 'chip' (bordered, standalone)
     or 'bare' (naked, for table cells / tight rows).
   · DifficultyMeter — 0–100 with 4 rising bars; low = easy = green by default
     ('difficulty' semantics). semantics 'score' flips it (high = good). */
const hvMetricCss = `
.hv-metric{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-sans);line-height:1;white-space:nowrap}
.hv-metric--chip{border:1px solid var(--border-subtle);background:var(--surface-card);border-radius:var(--radius-sm);padding:5px 8px}
.hv-metric__label{font-size:10px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase;color:var(--text-faint)}
.hv-metric__value{font-family:var(--font-mono);font-size:11.5px;font-weight:500;color:var(--ink-900);font-variant-numeric:tabular-nums}
.hv-meter{display:inline-flex;align-items:center;gap:6px;line-height:1;white-space:nowrap}
.hv-meter__bars{display:inline-flex;align-items:flex-end;gap:1.5px;height:11px}
.hv-meter__bar{width:2.5px;border-radius:1px;background:var(--ink-200)}
.hv-meter__val{font-family:var(--font-mono);font-size:11.5px;font-weight:500;font-variant-numeric:tabular-nums}
`;
function hvEnsureMetricCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-metric-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-metric-css';
  s.textContent = hvMetricCss;
  document.head.appendChild(s);
}

export function MetricChip({ label, value, variant = 'chip', icon = null }) {
  hvEnsureMetricCss();
  return (
    <span className={`hv-metric${variant === 'chip' ? ' hv-metric--chip' : ''}`}>
      {icon}
      {label ? <span className="hv-metric__label">{label}</span> : null}
      <span className="hv-metric__value">{value}</span>
    </span>
  );
}

const HV_METER_COLORS = {
  positive: 'var(--status-positive-text)',
  caution: 'var(--status-caution-text)',
  negative: 'var(--status-negative-text)'
};

function hvMeterTone(value, semantics) {
  const v = semantics === 'score' ? 100 - value : value;
  if (v < 30) return 'positive';
  if (v < 60) return 'caution';
  return 'negative';
}

export function DifficultyMeter({ value = 0, semantics = 'difficulty', showValue = true, label }) {
  hvEnsureMetricCss();
  const tone = hvMeterTone(value, semantics);
  const color = HV_METER_COLORS[tone];
  const filled = Math.max(1, Math.min(4, Math.ceil(value / 25)));
  const heights = [4, 6.5, 9, 11];
  return (
    <span className="hv-meter" role="img" aria-label={`${label || (semantics === 'score' ? 'Score' : 'Difficulty')} ${value} of 100`}>
      <span className="hv-meter__bars" aria-hidden="true">
        {heights.map((h, i) => (
          <span
            key={i}
            className="hv-meter__bar"
            style={{ height: h + 'px', background: i < filled ? color : undefined }}
          ></span>
        ))}
      </span>
      {showValue ? <span className="hv-meter__val" style={{ color: color }}>{value}</span> : null}
    </span>
  );
}
