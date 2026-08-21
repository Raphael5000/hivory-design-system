import * as React from 'react';
/* Hivory Menu — dropdown for row actions and switchers. White panel, overlay shadow. */
const hvMenuCss = `
.hv-menu-wrap{position:relative;display:inline-block}
.hv-menu{position:absolute;top:calc(100% + 6px);min-width:180px;background:var(--surface-card);border-radius:var(--radius-xl);box-shadow:var(--shadow-overlay);padding:5px;z-index:50;font-family:var(--font-sans)}
.hv-menu--left{left:0}
.hv-menu--right{right:0}
.hv-menu__item{display:flex;align-items:center;gap:8px;width:100%;box-sizing:border-box;padding:7px 10px;border:none;background:none;text-align:left;font-family:var(--font-sans);font-size:13.5px;color:var(--ink-900);border-radius:var(--radius-sm);cursor:pointer;transition:background-color var(--duration-soft) var(--ease-out)}
.hv-menu__item:hover:not(:disabled){background:var(--ink-50)}
.hv-menu__item:disabled{color:var(--text-faint);cursor:not-allowed}
.hv-menu__item--danger{color:var(--red-700)}
.hv-menu__item--danger:hover:not(:disabled){background:var(--status-negative-bg)}
.hv-menu__sep{height:1px;background:var(--border-subtle);margin:5px 4px} /* drift-ok: menu-interior inset matches the panel's 5px padding — control interior, not rhythm */
.hv-menu__hint{margin-left:auto;font-size:11.5px;color:var(--text-faint);font-family:var(--font-mono)}
`;
function hvEnsureMenuCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-menu-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-menu-css';
  s.textContent = hvMenuCss;
  document.head.appendChild(s);
}

/* items: [{ id, label, hint?, danger?, disabled? } | { type: 'separator' }] */
export function Menu({ trigger, items = [], onSelect, align = 'left', defaultOpen = false }) {
  hvEnsureMenuCss();
  const [open, setOpen] = React.useState(defaultOpen);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (ev) => { if (ref.current && !ref.current.contains(ev.target)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);
  return (
    <span className="hv-menu-wrap" ref={ref}>
      <span onClick={() => setOpen(!open)}>{trigger}</span>
      {open ? (
        <div className={`hv-menu hv-menu--${align}`} role="menu">
          {items.map((it, i) =>
            it.type === 'separator' ? (
              <div key={i} className="hv-menu__sep"></div>
            ) : (
              <button
                key={it.id}
                type="button"
                role="menuitem"
                disabled={it.disabled}
                className={`hv-menu__item${it.danger ? ' hv-menu__item--danger' : ''}`}
                onClick={() => { setOpen(false); if (onSelect) onSelect(it.id); }}
              >
                {it.label}
                {it.hint ? <span className="hv-menu__hint">{it.hint}</span> : null}
              </button>
            )
          )}
        </div>
      ) : null}
    </span>
  );
}
