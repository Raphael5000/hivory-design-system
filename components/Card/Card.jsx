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

/* Stat — metric tile used on dashboards. delta direction: 'up' | 'down'. */
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
