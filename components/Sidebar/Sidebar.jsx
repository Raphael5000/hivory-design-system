/* Hivory Sidebar — app navigation rail, faithful to the portal's real Sidebar.tsx:
   272px card surface (56 collapsed), workspace chip header, uppercase group headers
   with chevron expand, 13px items / 14px icons / radius 7, active = ink-50 fill +
   semibold + 2px ink bar, signal dot marks collapsed sections holding the active page. */
const hvSidebarCss = `
.hv-side{display:flex;flex-direction:column;width:272px;height:100%;box-sizing:border-box;background:var(--surface-card);border-right:1px solid var(--border-subtle);font-family:var(--font-sans);transition:width 200ms var(--ease-out);overflow:hidden}
.hv-side--collapsed{width:56px}
.hv-side__head{padding:14px 10px 10px}
.hv-side__ws{display:flex;align-items:center;gap:10px;padding:8px 10px;border:1px solid var(--border-subtle);background:var(--surface-sunken);border-radius:var(--radius-md);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-out);min-width:0}
.hv-side__ws:hover{background:var(--ink-100)}
.hv-side--collapsed .hv-side__ws{justify-content:center;padding:8px 0;border-color:transparent;background:none}
.hv-side__ws-logo{width:22px;height:22px;border-radius:5px;background:var(--ink-950);color:var(--white);display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:600;flex:none}
.hv-side__ws-name{font-size:12.5px;font-weight:500;color:var(--ink-950);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}
.hv-side__ws-caret{flex:none;color:var(--ink-400)}
.hv-side__nav{flex:1;overflow-y:auto;padding:0 10px 8px;display:flex;flex-direction:column}
.hv-side__group{display:flex;align-items:center;gap:8px;width:100%;padding:8px 10px;margin-top:4px;border:none;background:none;border-radius:var(--radius-sm);font-family:var(--font-sans);font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-faint);cursor:pointer;transition:color var(--duration-fast) var(--ease-out),background-color var(--duration-fast) var(--ease-out)}
.hv-side__group:hover{background:var(--ink-50);color:var(--ink-700)}
.hv-side__group:disabled{color:var(--ink-200);cursor:default;background:none}
.hv-side__chev{flex:none;transition:transform 200ms var(--ease-out)}
.hv-side__chev--open{transform:rotate(90deg)}
.hv-side__signal{margin-left:auto;width:6px;height:6px;border-radius:999px;background:var(--green-600);flex:none}
.hv-side__items{overflow:hidden;transition:max-height 200ms var(--ease-out),opacity 200ms var(--ease-out)}
.hv-side__item{position:relative;display:flex;align-items:center;gap:10px;width:100%;box-sizing:border-box;padding:6px 10px 6px 28px;margin:2px 0;border:none;background:none;border-radius:var(--radius-sm);font-family:var(--font-sans);font-size:13px;color:var(--ink-900);cursor:pointer;text-align:left;transition:background-color var(--duration-fast) var(--ease-out)}
.hv-side__item:hover:not(:disabled){background:var(--ink-50)}
.hv-side__item:disabled{color:var(--ink-300);cursor:default}
.hv-side__item--active{background:var(--ink-50);font-weight:600;color:var(--ink-950)}
.hv-side__item--active::before{content:"";position:absolute;left:2px;top:6px;bottom:6px;width:2px;border-radius:2px;background:var(--ink-950)}
.hv-side__item--top{padding-left:10px;font-weight:500}
.hv-side--collapsed .hv-side__item{justify-content:center;padding:8px 0}
.hv-side__icon{flex:none;color:var(--text-muted);display:inline-flex}
.hv-side__item--active .hv-side__icon{color:var(--ink-950)}
.hv-side__item:disabled .hv-side__icon{color:var(--ink-200)}
.hv-side__label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}
.hv-side__pill{flex:none;font-size:10px;font-weight:500;line-height:1;padding:3px 7px;border-radius:999px}
.hv-side__pill--caution{color:var(--status-caution-text);background:var(--status-caution-bg)}
.hv-side__pill--positive{color:var(--status-positive-text);background:var(--status-positive-bg)}
.hv-side__pill--neutral{color:var(--ink-500);background:var(--ink-100)}
.hv-side__foot{padding:10px;border-top:1px solid var(--border-subtle)}
.hv-side__foot .hv-side__item{padding-left:10px;color:var(--text-muted)}
.hv-side__foot .hv-side__item:hover:not(:disabled){color:var(--ink-900)}
`;
function hvEnsureSidebarCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-sidebar-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-sidebar-css';
  s.textContent = hvSidebarCss;
  document.head.appendChild(s);
}

const hvChevron = (open) => (
  <svg className={`hv-side__chev${open ? ' hv-side__chev--open' : ''}`} width="10" height="10" viewBox="0 0 12 12"><path d="M4 2.5L8 6L4 9.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

/* Nav glyphs — drawn to the Hivory icon grammar (16px grid, 1.5 stroke, hex signature).
   Master set lives in components/Icon; these mirror it so Sidebar stays self-contained. */
const HV_ICON_PATHS = {
  dashboard: <g><rect x="2" y="2" width="5" height="5" rx="1.2"/><rect x="9" y="2" width="5" height="5" rx="1.2"/><rect x="2" y="9" width="5" height="5" rx="1.2"/><path d="M11.5 8.6L14.01 10.05V12.95L11.5 14.4L8.99 12.95V10.05Z"/></g>,
  pipeline: <g><path d="M2.5 3h11L9.5 7.8v4.7l-3-2V7.8L2.5 3Z"/></g>,
  doc: <g><path d="M4 2h5l3 3v9H4V2Z"/><path d="M9 2v3h3"/></g>,
  bot: <g><path d="M8 2.5L12.76 5.25V10.75L8 13.5L3.24 10.75V5.25Z"/><path d="M6.2 7.2v1.6M9.8 7.2v1.6"/></g>,
  chart: <g><path d="M2 13.5h12M4.5 10.5v-3M8 10.5V4.5M11.5 10.5V7"/></g>,
  globe: <g><circle cx="8" cy="8" r="5.75"/><path d="M2.25 8h11.5M8 2.25c2.4 2 2.4 9.5 0 11.5M8 2.25c-2.4 2-2.4 9.5 0 11.5"/></g>,
  clock: <g><circle cx="8" cy="8" r="5.75"/><path d="M8 5v3.2l2.2 1.3"/></g>,
  upload: <g><path d="M8 10.5V3M5 5.5 8 2.5l3 3M3 13.5h10"/></g>,
  signout: <g><path d="M6 2.5H3.5v11H6M10 5l3 3-3 3M13 8H6.5"/></g>,
  moon: <g><path d="M13 9.5A5.5 5.5 0 1 1 6.5 3a4.5 4.5 0 0 0 6.5 6.5Z"/></g>,
};
export function SidebarIcon({ name }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{HV_ICON_PATHS[name] || HV_ICON_PATHS.doc}</svg>
  );
}

function HvNavItem({ item, active, collapsed, onNavigate, top = false }) {
  return (
    <button
      type="button"
      disabled={item.disabled}
      title={collapsed ? item.label : undefined}
      className={`hv-side__item${active ? ' hv-side__item--active' : ''}${top ? ' hv-side__item--top' : ''}`}
      onClick={() => { if (onNavigate) onNavigate(item.id); }}
    >
      {item.icon ? <span className="hv-side__icon">{item.icon}</span> : null}
      {!collapsed ? <span className="hv-side__label">{item.label}</span> : null}
      {!collapsed && item.pill ? <span className={`hv-side__pill hv-side__pill--${item.pillTone || 'neutral'}`}>{item.pill}</span> : null}
    </button>
  );
}

/* sections: [{ key, label, items: [{ id, label, icon?, disabled?, pill?, pillTone? }], defaultExpanded? }] */
export function Sidebar({ workspace, topItems = [], sections = [], footerItems = [], activeId, onNavigate, collapsed = false, height = '100%' }) {
  hvEnsureSidebarCss();
  const [expanded, setExpanded] = React.useState(() => {
    const init = {};
    sections.forEach((s) => { init[s.key] = s.defaultExpanded !== false; });
    return init;
  });
  const toggle = (key) => setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  const sectionEnabled = (s) => s.items.some((it) => !it.disabled);
  const sectionHasActive = (s) => s.items.some((it) => it.id === activeId);
  return (
    <aside className={`hv-side${collapsed ? ' hv-side--collapsed' : ''}`} style={{ height }}>
      {workspace ? (
        <div className="hv-side__head">
          <div className="hv-side__ws" role="button">
            <span className="hv-side__ws-logo">{workspace.initials || (workspace.name || 'HV').slice(0, 2).toUpperCase()}</span>
            {!collapsed ? <span className="hv-side__ws-name">{workspace.name}</span> : null}
            {!collapsed && workspace.switchable ? (
              <svg className="hv-side__ws-caret" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 4.5L6 2L8.5 4.5M3.5 7.5L6 10L8.5 7.5"/></svg>
            ) : null}
          </div>
        </div>
      ) : null}
      <nav className="hv-side__nav">
        {topItems.map((it) => (
          <HvNavItem key={it.id} item={it} top active={it.id === activeId} collapsed={collapsed} onNavigate={onNavigate} />
        ))}
        {sections.map((s) => {
          const open = !!expanded[s.key] && !collapsed;
          const enabled = sectionEnabled(s);
          return (
            <div key={s.key}>
              {!collapsed ? (
                <button type="button" className="hv-side__group" disabled={!enabled} onClick={() => toggle(s.key)}>
                  {hvChevron(open)}
                  <span>{s.label}</span>
                  {!open && sectionHasActive(s) ? <span className="hv-side__signal"></span> : null}
                </button>
              ) : null}
              <div className="hv-side__items" style={{ maxHeight: open || collapsed ? 500 : 0, opacity: open || collapsed ? 1 : 0 }}>
                {s.items.map((it) => (
                  <HvNavItem key={it.id} item={it} active={it.id === activeId} collapsed={collapsed} onNavigate={onNavigate} />
                ))}
              </div>
            </div>
          );
        })}
      </nav>
      {footerItems.length ? (
        <div className="hv-side__foot">
          {footerItems.map((it) => (
            <HvNavItem key={it.id} item={it} active={false} collapsed={collapsed} onNavigate={onNavigate} />
          ))}
        </div>
      ) : null}
    </aside>
  );
}
