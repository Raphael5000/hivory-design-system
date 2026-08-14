/* Hivory Tabs — Engine: quiet underline tabs, ink active, 120ms. */
const hvTabsCss = `
.hv-tabs{display:flex;gap:2px;border-bottom:1px solid var(--border-subtle);font-family:var(--font-sans)}
.hv-tab{appearance:none;background:none;border:none;cursor:pointer;padding:9px 12px;font-size:13.5px;font-family:var(--font-sans);font-weight:500;color:var(--text-muted);border-bottom:2px solid transparent;margin-bottom:-1px; /* drift-ok: underline overlaps the tablist hairline by design */transition:color var(--duration-soft) var(--ease-out),box-shadow var(--duration-fast) var(--ease-out)}
.hv-tab:hover{color:var(--ink-700)}
.hv-tab--active{color:var(--ink-950);border-bottom-color:var(--ink-950)}
.hv-tab__count{margin-left:6px;font-size:11.5px;font-weight:500;color:var(--ink-400);background:var(--ink-100);border-radius:999px;padding:1px 7px}
.hv-tab--active .hv-tab__count{background:var(--green-50);color:var(--green-800)}
.hv-tab:focus-visible{outline:2px solid var(--border-focus);outline-offset:-2px;border-radius:4px}
`;
function hvEnsureTabsCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-tabs-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-tabs-css';
  s.textContent = hvTabsCss;
  document.head.appendChild(s);
}

/* items: [{ id, label, count? }] — controlled via activeId/onChange, or uncontrolled via defaultActiveId. */
export function Tabs({ items = [], activeId, defaultActiveId, onChange }) {
  hvEnsureTabsCss();
  const [internal, setInternal] = React.useState(defaultActiveId ?? (items[0] && items[0].id));
  const current = activeId !== undefined ? activeId : internal;
  const select = (id) => {
    if (activeId === undefined) setInternal(id);
    if (onChange) onChange(id);
  };
  return (
    <div className="hv-tabs" role="tablist">
      {items.map((it) => (
        <button
          key={it.id}
          type="button"
          role="tab"
          aria-selected={it.id === current}
          className={`hv-tab${it.id === current ? ' hv-tab--active' : ''}`}
          onClick={() => select(it.id)}
        >
          {it.label}
          {it.count !== undefined ? <span className="hv-tab__count">{it.count}</span> : null}
        </button>
      ))}
    </div>
  );
}
