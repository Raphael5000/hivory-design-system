/* Hivory Card — Engine: white surface, subtle border, quiet shadow, radius 10. */
const hvCardCss = `
.hv-card{background:var(--surface-card);border:1px solid var(--border-subtle);border-radius:var(--radius-lg);box-shadow:var(--shadow-card);font-family:var(--font-sans);box-sizing:border-box}
.hv-card__head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding:16px 18px 0}
.hv-card__title{margin:0;font-size:14.5px;font-weight:600;letter-spacing:-0.01em;color:var(--ink-950)}
.hv-card__sub{margin:3px 0 0;font-size:12.5px;color:var(--text-muted)}
.hv-card__body{padding:16px 18px}
.hv-card--flush .hv-card__body{padding:0}
`;
function hvEnsureCardCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-card-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-card-css';
  s.textContent = hvCardCss;
  document.head.appendChild(s);
}

export function Card({ title, subtitle, actions, flush = false, children }) {
  hvEnsureCardCss();
  const hasHead = title || subtitle || actions;
  return (
    <section className={`hv-card${flush ? ' hv-card--flush' : ''}`}>
      {hasHead ? (
        <header className="hv-card__head">
          <div>
            {title ? <h3 className="hv-card__title">{title}</h3> : null}
            {subtitle ? <p className="hv-card__sub">{subtitle}</p> : null}
          </div>
          {actions ? <div style={{ display: 'flex', gap: '8px', flex: 'none' }}>{actions}</div> : null}
        </header>
      ) : null}
      <div className="hv-card__body">{children}</div>
    </section>
  );
}

/*
 * Scorecard — analytics metric tile for dashboards and summaries.
 *
 * Props:
 *   label       — metric name, e.g. "Website Views"
 *   value       — pre-formatted string, e.g. "585" or "R1,899.90"
 *   change      — percentage string, e.g. "+35.3%" or "-22.2%"
 *   sentiment   — 'up_is_good' | 'down_is_good' — determines color of change
 *
 * Sizing: 11px label, 22px mono value (tabular-nums), 11.5px change.
 * Change color respects sentiment: positive = signal green, negative = red.
 * A +35% on a "cost" metric (down_is_good) renders red, not green.
 */
function scorecardDirection(change, sentiment) {
  const num = parseFloat(change);
  if (isNaN(num) || num === 0) return 'neutral';
  const isUp = num > 0;
  if (sentiment === 'up_is_good') return isUp ? 'positive' : 'negative';
  return isUp ? 'negative' : 'positive';
}

export function Scorecard({ label, value, change, sentiment = 'up_is_good' }) {
  hvEnsureCardCss();
  const direction = change ? scorecardDirection(change, sentiment) : null;
  const showChange = change && change !== '+0.0%' && change !== '-0.0%';
  const num = parseFloat(change);
  const isDown = num < 0;
  const toneBg = direction === 'positive' ? 'var(--status-positive-bg)'
    : direction === 'negative' ? 'var(--status-negative-bg)'
    : 'var(--ink-100)';
  const toneText = direction === 'positive' ? 'var(--status-positive-text)'
    : direction === 'negative' ? 'var(--status-negative-text)'
    : 'var(--text-muted)';
  return (
    <div className="hv-card" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '0' }}>
      <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '22px', fontWeight: 600, color: 'var(--ink-950)', lineHeight: 1.1, marginTop: '4px', fontVariantNumeric: 'tabular-nums' }}>{value}</span>
      {showChange ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '3px',
            borderRadius: '999px', padding: '2px 8px',
            fontSize: '11px', fontWeight: 500,
            background: toneBg, color: toneText,
          }}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ flexShrink: 0, transform: isDown ? 'rotate(180deg)' : 'none' }}>
              <path d="M5 2.5V7.5M5 2.5L2.5 5M5 2.5L7.5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {change.replace(/^[+-]/, '')}
          </span>
          <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>vs prev period</span>
        </div>
      ) : null}
    </div>
  );
}

/* Legacy Stat — kept for backward compatibility. Prefer Scorecard for analytics. */
export function Stat({ label, value, delta, direction = 'up', deltaTone = 'positive' }) {
  hvEnsureCardCss();
  const toneColor = deltaTone === 'positive' ? 'var(--status-positive-text)'
    : deltaTone === 'caution' ? 'var(--status-caution-text)'
    : deltaTone === 'negative' ? 'var(--status-negative-text)'
    : 'var(--text-muted)';
  return (
    <div className="hv-card" style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
      <span style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>{label}</span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '24px', color: 'var(--ink-950)', lineHeight: 1.1 }}>{value}</span>
      {delta ? (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: toneColor }}>
          {direction === 'down' ? '▼' : '▲'} {delta}
        </span>
      ) : null}
    </div>
  );
}
