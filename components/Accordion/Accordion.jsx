import * as React from 'react';
/* Hivory Accordion — a table row that opens. ONE card holding ranked disclosure rows:
   rank · label · count · meter · chevron; the chevron rotates 90°, the body indents to the label.
   Open is disclosure, not selection — many rows may be open at once. */
const hvAccordionCss = `
.hv-acc{border-radius:var(--radius-xl);background:var(--surface-card);box-shadow:var(--shadow-card);overflow:hidden;font-family:var(--font-sans)}
.hv-acc__grid{display:grid;grid-template-columns:30px minmax(0,1fr) 64px 120px 24px;gap:16px;align-items:center}
.hv-acc__row + .hv-acc__row .hv-acc__head{box-shadow:inset 0 1px 0 var(--hairline)}
.hv-acc__head{width:100%;box-sizing:border-box;padding:0 20px;height:54px;background:none;border:none;font-family:var(--font-sans);text-align:left;cursor:pointer;transition:background-color var(--transition-soft),filter var(--duration-fast) var(--ease-out)}
.hv-acc__head:hover:not(:disabled){background-color:var(--hover-on-white)}
.hv-acc__head:active:not(:disabled){filter:brightness(0.94)}
.hv-acc__head:focus-visible{outline:2px solid var(--border-focus);outline-offset:-2px}
.hv-acc__row--open .hv-acc__head{background-color:var(--ink-50)}
.hv-acc__rank{font-size:var(--text-meta);color:var(--text-faint);font-variant-numeric:tabular-nums}
.hv-acc__label{font-size:var(--text-base);font-weight:var(--weight-row);color:var(--ink-900);letter-spacing:-0.008em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.hv-acc__count{text-align:right;font-size:var(--text-sm);font-weight:var(--weight-strong);color:var(--ink-900);font-variant-numeric:tabular-nums}
.hv-acc__car{display:inline-flex;justify-content:flex-end;color:var(--text-faint);transition:transform var(--duration-slow) var(--ease-glide),color var(--transition-soft)}
.hv-acc__row--open .hv-acc__car{transform:rotate(90deg);color:var(--ink-600)}
.hv-acc__head:hover:not(:disabled) .hv-acc__car{color:var(--ink-600)}
.hv-acc__track{height:8px;border-radius:var(--radius-pill);background:var(--ink-100);overflow:hidden}
.hv-acc__fill{display:block;height:100%;border-radius:var(--radius-pill);background:var(--green-600);transform-origin:left}
.hv-acc__body{padding:8px 20px 22px 66px}
.hv-acc__body .hv-acc__grid{grid-template-columns:minmax(0,1fr) 64px 120px 24px;padding:7px 0;animation:hv-acc-rise var(--duration-soft) var(--ease-out) both}
.hv-acc__body .hv-acc__fill{background:var(--ink-300);animation:hv-acc-grow var(--duration-slow) var(--ease-glide) both}
.hv-acc__name{font-size:var(--text-sm);color:var(--ink-700)}
.hv-acc__subcount{text-align:right;font-size:var(--text-sm);font-weight:var(--weight-strong);color:var(--ink-900);font-variant-numeric:tabular-nums}
.hv-acc__subrow--zero .hv-acc__name,.hv-acc__subrow--zero .hv-acc__subcount{color:var(--text-faint)}
.hv-acc__note{padding:10px 0 2px;font-size:var(--text-sm);color:var(--text-muted)}
.hv-acc__blank{padding:18px 20px;font-size:var(--text-sm);color:var(--text-muted)}
.hv-acc--loading .hv-acc__head{cursor:default}
.hv-acc__skel{display:inline-block;border-radius:var(--radius-pill);background:var(--ink-100);animation:hv-acc-pulse var(--duration-pulse) var(--ease-out) infinite}
.hv-acc__skel--count{height:12px;width:40px}
.hv-acc__skel--meter{height:8px;width:100%}
@keyframes hv-acc-grow{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@keyframes hv-acc-rise{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
@keyframes hv-acc-pulse{0%,100%{opacity:1}50%{opacity:.45}}
@media (prefers-reduced-motion: reduce){.hv-acc__skel{animation-duration:2.4s}}
`;
function hvEnsureAccordionCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-accordion-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-accordion-css';
  s.textContent = hvAccordionCss;
  document.head.appendChild(s);
}

const hvAccNum = (row) => {
  if (typeof row.value === 'number') return row.value;
  if (typeof row.count === 'number') return row.count;
  const n = parseFloat(row.count);
  return isNaN(n) ? 0 : n;
};

/* items: [{ id, label, count, value?, pct?, rows?: [{ label, count, value?, pct? }], emptyNote?, content? }] */
export function Accordion({
  items = [],
  defaultOpen = [],
  open,
  onToggle,
  loading = false,
  emptyText = 'Nothing to rank yet.'
}) {
  hvEnsureAccordionCss();
  const [inner, setInner] = React.useState(defaultOpen);
  const openIds = open !== undefined ? open : inner;
  const toggle = (id) => {
    const was = openIds.includes(id);
    const next = was ? openIds.filter((x) => x !== id) : openIds.concat(id);
    if (open === undefined) setInner(next);
    if (onToggle) onToggle(id, !was);
  };
  if (!items.length && !loading) {
    return <div className="hv-acc"><div className="hv-acc__blank">{emptyText}</div></div>;
  }
  const headMax = items.reduce((m, it) => Math.max(m, hvAccNum(it)), 0) || 1;
  return (
    <div className={`hv-acc${loading ? ' hv-acc--loading' : ''}`}>
      {items.map((it, i) => {
        const isOpen = !loading && openIds.includes(it.id);
        const pct = typeof it.pct === 'number' ? it.pct : Math.round((hvAccNum(it) / headMax) * 100);
        const rows = it.rows || [];
        const subMax = rows.reduce((m, r) => Math.max(m, hvAccNum(r)), 0) || 1;
        return (
          <div key={it.id} className={`hv-acc__row${isOpen ? ' hv-acc__row--open' : ''}`}>
            <button
              type="button"
              className="hv-acc__head hv-acc__grid"
              aria-expanded={isOpen}
              disabled={loading}
              onClick={() => toggle(it.id)}
            >
              {/* rank prop overrides the positional number — needed when items
                  of one ranking are split across stacked accordion instances. */}
              <span className="hv-acc__rank">{it.rank ?? i + 1}</span>
              <span className="hv-acc__label">{it.label}</span>
              {loading ? (
                <span style={{ textAlign: 'right' }}><span className="hv-acc__skel hv-acc__skel--count" data-motion="essential"></span></span>
              ) : (
                <span className="hv-acc__count">{it.count}</span>
              )}
              {loading ? (
                <span className="hv-acc__skel hv-acc__skel--meter" data-motion="essential"></span>
              ) : (
                <span className="hv-acc__track"><span className="hv-acc__fill" style={{ width: `${Math.max(0, Math.min(100, pct))}%` }}></span></span>
              )}
              <span className="hv-acc__car">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 3 5 5-5 5"></path></svg>
              </span>
            </button>
            {isOpen ? (
              <div className="hv-acc__body">
                {it.content ? it.content : rows.length ? rows.map((r, k) => {
                  const spct = typeof r.pct === 'number' ? r.pct : Math.round((hvAccNum(r) / subMax) * 100);
                  const delay = (k * 45) + 'ms';
                  return (
                    <div key={k} className={`hv-acc__grid${hvAccNum(r) === 0 ? ' hv-acc__subrow--zero' : ''}`} style={{ animationDelay: delay }}>
                      <span className="hv-acc__name">{r.label}</span>
                      <span className="hv-acc__subcount">{r.count}</span>
                      <span className="hv-acc__track"><span className="hv-acc__fill" style={{ width: `${Math.max(0, Math.min(100, spct))}%`, animationDelay: delay }}></span></span>
                      <span></span>
                    </div>
                  );
                }) : (
                  <div className="hv-acc__note">{it.emptyNote || 'Nothing beneath this yet.'}</div>
                )}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
