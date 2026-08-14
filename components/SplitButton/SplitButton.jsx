/* Hivory SplitButton — a publishing verb split in two: the main segment fires the default action,
   the chevron opens a Menu of schedule alternatives (upward by default — it lives in footers). */
const hvSplitButtonCss = `
.hv-split{position:relative;display:inline-flex;align-items:stretch;font-family:var(--font-sans)}
.hv-split__main,.hv-split__chev{appearance:none;border:none;font-family:var(--font-sans);font-weight:var(--weight-semibold);cursor:pointer;white-space:nowrap;box-sizing:border-box;transition:background-color var(--transition-soft),filter var(--duration-fast) var(--ease-out)}
.hv-split__main{height:33px;padding:0 18px;border-radius:var(--radius-pill) 0 0 var(--radius-pill);font-size:var(--text-sm);display:inline-flex;align-items:center;gap:6px}
.hv-split__main--solo{border-radius:var(--radius-pill)}
.hv-split__chev{height:33px;width:30px;padding:0;border-radius:0 var(--radius-pill) var(--radius-pill) 0;display:inline-flex;align-items:center;justify-content:center;box-shadow:inset 1px 0 0 rgba(255,255,255,0.18)}
.hv-split--sm .hv-split__main{height:26px;padding:0 13px;font-size:var(--text-label)}
.hv-split--sm .hv-split__chev{height:26px;width:25px}
.hv-split--primary .hv-split__main,.hv-split--primary .hv-split__chev{background:var(--action-primary);color:var(--on-action-primary)}
.hv-split--primary .hv-split__main:hover:not(:disabled),.hv-split--primary .hv-split__chev:hover:not(:disabled){background:var(--action-primary-hover)}
.hv-split--brand .hv-split__main,.hv-split--brand .hv-split__chev{background:var(--action-brand);color:var(--on-action-brand);font-weight:650}
.hv-split--brand .hv-split__main:hover:not(:disabled),.hv-split--brand .hv-split__chev:hover:not(:disabled){background:var(--action-brand-hover)}
.hv-split--brand .hv-split__chev{box-shadow:inset 1px 0 0 rgba(8,16,11,0.18)}
.hv-split__main:active:not(:disabled),.hv-split__chev:active:not(:disabled){filter:brightness(0.94)}
.hv-split__main:focus-visible,.hv-split__chev:focus-visible{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-split__main:disabled,.hv-split__chev:disabled{opacity:.45;cursor:not-allowed}
.hv-split__spinner{flex:none;animation:hv-split-spin var(--duration-spinner) linear infinite}
@keyframes hv-split-spin{to{transform:rotate(360deg)}}
@media (prefers-reduced-motion: reduce){.hv-split__spinner{animation-duration:2.4s}}
.hv-split__menu{position:absolute;right:0;min-width:208px;background:var(--surface-card);border-radius:var(--radius-xl);box-shadow:var(--shadow-overlay);padding:5px;z-index:30;box-sizing:border-box}
.hv-split__menu--up{bottom:calc(100% + 6px);animation:hv-split-in-up var(--duration-soft) var(--ease-out)}
.hv-split__menu--down{top:calc(100% + 6px);animation:hv-split-in-down var(--duration-soft) var(--ease-out)}
@keyframes hv-split-in-up{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
@keyframes hv-split-in-down{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}
.hv-split__item{display:flex;flex-direction:column;align-items:flex-start;gap:3px;width:100%;box-sizing:border-box;padding:7px 10px;border:none;background:none;border-radius:var(--radius-sm);font-family:var(--font-sans);font-size:var(--text-base);color:var(--ink-900);text-align:left;cursor:pointer;transition:background-color var(--duration-soft) var(--ease-out),filter var(--duration-fast) var(--ease-out)}
.hv-split__item:hover{background:var(--ink-50)}
.hv-split__item:active{filter:brightness(0.94)}
.hv-split__item:focus-visible{outline:2px solid var(--border-focus);outline-offset:-2px}
.hv-split__item-sub{font-size:var(--text-label);color:var(--text-faint)}
`;
function hvEnsureSplitButtonCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-splitbutton-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-splitbutton-css';
  s.textContent = hvSplitButtonCss;
  document.head.appendChild(s);
}

/* items: [{ id, label, sub? }] — plain-word alternatives, soonest first, three rows at most. */
export function SplitButton({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  direction = 'up',
  items = [],
  onAction,
  onSelect,
  chevronLabel = 'More options',
  defaultOpen = false,
  children
}) {
  hvEnsureSplitButtonCss();
  const [open, setOpen] = React.useState(defaultOpen);
  const ref = React.useRef(null);
  const chevRef = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (ev) => { if (ref.current && !ref.current.contains(ev.target)) setOpen(false); };
    const onKey = (ev) => {
      if (ev.key !== 'Escape') return;
      setOpen(false);
      if (chevRef.current) chevRef.current.focus();
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey); };
  }, [open]);
  const solo = items.length === 0;
  const spinner = (
    <svg className="hv-split__spinner" data-motion="essential" width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M8 1.5A6.5 6.5 0 1 1 1.5 8"></path>
    </svg>
  );
  return (
    <span className={`hv-split hv-split--${variant} hv-split--${size}`} ref={ref}>
      <button
        type="button"
        disabled={disabled || loading}
        className={`hv-split__main${solo ? ' hv-split__main--solo' : ''}`}
        onClick={onAction}
      >
        {loading ? spinner : null}
        {children}
      </button>
      {solo ? null : (
        <button
          type="button"
          ref={chevRef}
          disabled={disabled || loading}
          className="hv-split__chev"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-label={chevronLabel}
          onClick={() => setOpen(!open)}
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {direction === 'up' ? <path d="m4 9.5 4-4 4 4"></path> : <path d="m4 6.5 4 4 4-4"></path>}
          </svg>
        </button>
      )}
      {open && !solo && !disabled && !loading ? (
        <div className={`hv-split__menu hv-split__menu--${direction}`} role="menu" aria-label={chevronLabel}>
          {items.map((it) => (
            <button
              key={it.id}
              type="button"
              role="menuitem"
              className="hv-split__item"
              onClick={() => { setOpen(false); if (onSelect) onSelect(it.id); }}
            >
              {it.label}
              {it.sub ? <span className="hv-split__item-sub">{it.sub}</span> : null}
            </button>
          ))}
        </div>
      ) : null}
    </span>
  );
}
