/* Hivory StatCard — one KPI tile: the label at the top, the reading at the
   bottom, air between them so a row of tiles shares one baseline. Born in the
   WhoYou admin dashboard, which hand-rolled exactly this and drifted from the
   Card canon within a week — the reason it now lives here.
   · Card canon geometry: 16px 18px padding, --radius-xl, --shadow-card.
   · The reading is 28px display weight, tabular — a stat is a number first.
   · Label row carries an optional info slot (InfoTip) at the Pair rung (8).
   · Value→qualifier is the Bond rung (3): "217" and "This month" are one fact.
   · Absence vs zero: a metric that cannot be measured yet renders an em-dash
     in --text-faint; a measured zero must be passed as 0 and renders as the
     reading it is. The component never decides which — the caller knows. */
const hvStatCardCss = `
.hv-statcard{display:flex;flex-direction:column;justify-content:space-between;min-height:108px;padding:16px 18px;border-radius:var(--radius-xl);background:var(--surface-card);box-shadow:var(--shadow-card);font-family:var(--font-sans);color:var(--text-body)}
.hv-statcard__label{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--text-muted)}
.hv-statcard__value{font-size:28px;font-weight:var(--weight-display);letter-spacing:-0.02em;line-height:1.05;color:var(--ink-950);font-variant-numeric:tabular-nums}
.hv-statcard__value--absent{color:var(--text-faint)}
.hv-statcard__sub{margin-top:3px;font-size:11.5px;line-height:1.4;color:var(--text-faint)}
.hv-statcard__skel{height:28px;width:76px;border-radius:var(--radius-sm);background:var(--ink-100)}
.hv-statcard__skel--sub{height:11px;width:52px;margin-top:3px}
`;
function hvEnsureStatCardCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-statcard-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-statcard-css';
  s.textContent = hvStatCardCss;
  document.head.appendChild(s);
}

export function StatCard({ label, value, sub, info = null, loading = false }) {
  hvEnsureStatCardCss();
  const absent = value == null;

  return (
    <div className="hv-statcard">
      <div className="hv-statcard__label">
        <span>{label}</span>
        {info}
      </div>
      {loading ? (
        /* Skeleton the reading and qualifier at their exact heights; the label
           stays real — it is known before the number is. */
        <div>
          <div className="hv-statcard__skel"></div>
          {sub ? <div className="hv-statcard__skel hv-statcard__skel--sub"></div> : null}
        </div>
      ) : (
        <div>
          <div className={`hv-statcard__value${absent ? ' hv-statcard__value--absent' : ''}`}>
            {absent ? '—' : value}
          </div>
          {sub ? <div className="hv-statcard__sub">{sub}</div> : null}
        </div>
      )}
    </div>
  );
}
