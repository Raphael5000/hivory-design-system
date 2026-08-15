/* Hivory CapMeter — an allowance against its ceiling ("8 of 12 posts").
   Geometry borrowed wholesale from chart/hbar: 110px label column, 8px
   rounded track, tabular value right. The one difference: the track IS the
   allowance — full width always means the cap, never "the biggest row".
   Tone ladder: green under, amber at AND over the cap — never red, because
   the client paid for exactly this much and using it is the plan working.
   An overage draws as a hatched ink segment past the amber fill: "beyond
   the line", not "danger". It reports a fact; it never scolds or sells. */
const hvCapMeterCss = `
.hv-capmeter{font-family:var(--font-sans);color:var(--text-body)}
.hv-capmeter__row{display:grid;grid-template-columns:110px 1fr max-content;gap:16px;align-items:center}
.hv-capmeter--bare .hv-capmeter__row{grid-template-columns:1fr max-content;gap:12px}
.hv-capmeter__label{font-size:12.5px;color:var(--text-body);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.hv-capmeter--excluded .hv-capmeter__label{color:var(--text-faint)}
.hv-capmeter__track{position:relative;height:8px;border-radius:var(--radius-pill);background:var(--ink-100);overflow:hidden}
.hv-capmeter__fill{position:absolute;left:0;top:0;bottom:0;border-radius:var(--radius-pill);background:var(--green-600);transition:width var(--duration-slow) var(--ease-glide),background var(--duration-soft) var(--ease-out)}
.hv-capmeter__fill--amber{background:var(--amber-500)}
.hv-capmeter__hatch{position:absolute;top:0;bottom:0;right:0;background:repeating-linear-gradient(135deg,var(--ink-300) 0 2px,transparent 2px 5px)}
.hv-capmeter__val{font-size:12px;text-align:right;font-variant-numeric:tabular-nums;color:var(--text-secondary);white-space:nowrap;transition:color var(--duration-soft) var(--ease-out)}
.hv-capmeter__val--capped{color:var(--ink-900);font-weight:650}
.hv-capmeter__val--excluded{font-size:var(--text-meta);color:var(--text-faint)}
.hv-capmeter__note{margin-top:8px;font-size:11.5px;line-height:1.55;color:var(--status-caution-text)}
.hv-capmeter--bare .hv-capmeter__note{padding-right:0}
.hv-capmeter__skel{height:8px;border-radius:var(--radius-pill);background:var(--ink-100)}
.hv-capmeter__skel--val{height:12px;width:44px;justify-self:end;border-radius:var(--radius-sm)}
`;
function hvEnsureCapMeterCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-capmeter-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-capmeter-css';
  s.textContent = hvCapMeterCss;
  document.head.appendChild(s);
}

export function CapMeter({ label, used = 0, cap, note, excluded = false, loading = false }) {
  hvEnsureCapMeterCss();
  const bare = label == null;
  const cls = `hv-capmeter${bare ? ' hv-capmeter--bare' : ''}${excluded ? ' hv-capmeter--excluded' : ''}`;

  if (loading) {
    /* Skeleton the track and the value at their exact heights; the label
       stays real — it is known before the count is. Never a fill animating
       from zero: a growing bar reads as a real number climbing. */
    return (
      <div className={cls}>
        <div className="hv-capmeter__row">
          {bare ? null : <span className="hv-capmeter__label">{label}</span>}
          <span className="hv-capmeter__skel"></span>
          <span className="hv-capmeter__skel hv-capmeter__skel--val"></span>
        </div>
      </div>
    );
  }

  if (excluded) {
    /* Not in the plan: ink track, no fill, words where the value sits —
       greyed but still listed, because a missing row cannot be asked about. */
    return (
      <div className={cls}>
        <div className="hv-capmeter__row">
          {bare ? null : <span className="hv-capmeter__label">{label}</span>}
          <span className="hv-capmeter__track" aria-hidden="true"></span>
          <span className="hv-capmeter__val hv-capmeter__val--excluded">Not in your plan</span>
        </div>
      </div>
    );
  }

  const over = used > cap;
  const amber = used >= cap;
  /* The fill is used/cap clamped at 100%; an overage compresses the scale so
     the hatch sits BEYOND the amber fill and full width still means "all of
     it" — the bar and the number must agree. */
  const pct = cap > 0 ? Math.round((over ? cap / used : used / cap) * 100) : 0;

  return (
    <div className={cls}>
      <div className="hv-capmeter__row">
        {bare ? null : <span className="hv-capmeter__label">{label}</span>}
        <span className="hv-capmeter__track" aria-hidden="true">
          <span className={`hv-capmeter__fill${amber ? ' hv-capmeter__fill--amber' : ''}`} style={{ width: pct + '%' }}></span>
          {over ? <span className="hv-capmeter__hatch" style={{ left: pct + '%' }}></span> : null}
        </span>
        <span className={`hv-capmeter__val${amber ? ' hv-capmeter__val--capped' : ''}`}>{used} of {cap}</span>
      </div>
      {note && amber ? <div className="hv-capmeter__note">{note}</div> : null}
    </div>
  );
}
