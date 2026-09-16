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
     reading it is. The component never decides which — the caller knows.
   · Toggle (4.5.11): a tile can be the control that shows or hides its own
     series on a chart beneath it — the tile IS the legend, so the reader
     never matches a colour to a key. It renders as a real <button> with
     aria-pressed, a tick box in the label row, and when selected a 3px top
     rule and a faint wash in its series colour (`accent`, a token reference)
     — never a full fill, because the ramp's lighter shades cannot carry
     on-colour text. The reading stays ink: a selected tile is still a fact. */
const hvStatCardCss = `
.hv-statcard{display:flex;flex-direction:column;justify-content:space-between;min-height:108px;padding:16px 18px;border-radius:var(--radius-xl);background:var(--surface-card);box-shadow:var(--shadow-card);font-family:var(--font-sans);color:var(--text-body)}
.hv-statcard--dense{min-height:0;gap:10px}
.hv-statcard__label{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--text-muted)}
.hv-statcard__value{font-size:28px;font-weight:var(--weight-display);letter-spacing:-0.02em;line-height:1.05;color:var(--ink-950);font-variant-numeric:tabular-nums}
.hv-statcard__value--absent{color:var(--text-faint)}
.hv-statcard__sub{margin-top:3px;font-size:11.5px;line-height:1.4;color:var(--text-faint)}
.hv-statcard__skel{height:28px;width:76px;border-radius:var(--radius-sm);background:var(--ink-100)}
.hv-statcard__skel--sub{height:11px;width:52px;margin-top:3px}
.hv-statcard--toggle{position:relative;overflow:hidden;width:100%;margin:0;border:0;text-align:left;cursor:pointer;font:inherit;-webkit-appearance:none;appearance:none}
.hv-statcard--toggle::before{content:"";position:absolute;inset:0 0 auto 0;height:3px;background:var(--hv-statcard-accent,var(--series-1));opacity:0;transition:opacity var(--duration-soft) ease}
.hv-statcard--toggle:hover{box-shadow:var(--shadow-raised)}
.hv-statcard--toggle:focus-visible{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-statcard--selected{background:color-mix(in srgb,var(--hv-statcard-accent,var(--series-1)) 9%,var(--surface-card))}
.hv-statcard--selected::before{opacity:1}
.hv-statcard--selected .hv-statcard__label{color:var(--text-body)}
.hv-statcard__tick{flex:0 0 auto;width:14px;height:14px;border-radius:var(--radius-sm);border:1.5px solid var(--border-strong,var(--ink-300));background:var(--surface-card);display:inline-grid;place-items:center}
.hv-statcard__tick svg{width:10px;height:10px;opacity:0}
.hv-statcard--selected .hv-statcard__tick{border-color:var(--hv-statcard-accent,var(--series-1));background:var(--hv-statcard-accent,var(--series-1))}
.hv-statcard--selected .hv-statcard__tick svg{opacity:1}
`;
function hvEnsureStatCardCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-statcard-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-statcard-css';
  s.textContent = hvStatCardCss;
  document.head.appendChild(s);
}

export function StatCard({
  label, value, sub, info = null, loading = false, dense = false,
  toggle = false, selected = false, onToggle, accent,
}) {
  hvEnsureStatCardCss();
  const absent = value == null;
  const className =
    `hv-statcard${dense ? ' hv-statcard--dense' : ''}` +
    `${toggle ? ' hv-statcard--toggle' : ''}${toggle && selected ? ' hv-statcard--selected' : ''}`;
  const Root = toggle ? 'button' : 'div';
  const rootProps = toggle
    ? { type: 'button', 'aria-pressed': selected, onClick: onToggle,
        style: accent ? { '--hv-statcard-accent': accent } : undefined }
    : {};

  return (
    <Root className={className} {...rootProps}>
      <div className="hv-statcard__label">
        {toggle ? (
          <span className="hv-statcard__tick" aria-hidden="true">
            <svg viewBox="0 0 10 10" fill="none" stroke="var(--on-action-brand)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 5.2 4.2 7.4 8 3" /></svg>
          </span>
        ) : null}
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
    </Root>
  );
}
