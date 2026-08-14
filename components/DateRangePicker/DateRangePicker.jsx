/* Hivory DateRangePicker — preset rail + month calendar. Ink range ends, green-50 span. */
const hvDrpCss = `
.hv-drp{position:relative;display:inline-block;font-family:var(--font-sans)}
.hv-drp__trigger{display:inline-flex;align-items:center;gap:8px;height:34px;padding:0 12px;font-size:13.5px;font-family:var(--font-sans);color:var(--ink-900);background:var(--surface-card);box-shadow:inset 0 0 0 1px var(--border-strong);border-radius:var(--radius-md);cursor:pointer;transition:box-shadow var(--duration-soft) var(--ease-out)}
.hv-drp__trigger:hover{box-shadow:inset 0 0 0 1px var(--ink-300);}
.hv-drp__trigger:focus-visible{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-drp__chev{color:var(--ink-400);font-size:10px}
.hv-drp__panel{position:absolute;top:calc(100% + 6px);left:0;display:flex;background:var(--surface-card);border-radius:var(--radius-2xl);box-shadow:var(--shadow-overlay);z-index:50;overflow:hidden}
.hv-drp__rail{display:flex;flex-direction:column;gap:2px;padding:8px;border-right:1px solid var(--border-subtle);min-width:128px}
.hv-drp__preset{appearance:none;border:none;background:none;text-align:left;font-family:var(--font-sans);font-size:13px;color:var(--ink-700);padding:6px 10px;border-radius:var(--radius-sm);cursor:pointer;white-space:nowrap;transition:background-color var(--duration-soft) var(--ease-out)}
.hv-drp__preset:hover{background:var(--ink-50)}
.hv-drp__preset--active{background:var(--ink-100);color:var(--ink-950);font-weight:500}
.hv-drp__cal{padding:12px 14px}
.hv-drp__calhead{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}
.hv-drp__month{font-size:13px;font-weight:600;color:var(--ink-950)}
.hv-drp__nav{appearance:none;border:none;background:none;cursor:pointer;color:var(--ink-400);font-size:12px;padding:3px 7px;border-radius:var(--radius-sm)}
.hv-drp__nav:hover{background:var(--ink-50);color:var(--ink-700)}
.hv-drp__grid{display:grid;grid-template-columns:repeat(7,28px);gap:1px}
.hv-drp__wd{font-size:10px;font-weight:500;letter-spacing:0.05em;color:var(--ink-400);text-align:center;padding:3px 0;text-transform:uppercase}
.hv-drp__day{appearance:none;border:none;background:none;font-family:var(--font-sans);font-size:12px;color:var(--ink-900);width:28px;height:26px;border-radius:var(--radius-sm);cursor:pointer;transition:background-color var(--duration-soft) var(--ease-out)}
.hv-drp__day:hover{background:var(--ink-100)}
.hv-drp__day--in{background:var(--green-50);border-radius:0}
.hv-drp__day--end{background:var(--ink-950);color:var(--white);font-weight:500}
.hv-drp__day--end:hover{background:var(--ink-950)}
`;
function hvEnsureDrpCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-drp-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-drp-css';
  s.textContent = hvDrpCss;
  document.head.appendChild(s);
}

const HV_DRP_PRESETS = [
  { id: '7d', label: 'Last 7 days', days: 7 },
  { id: '30d', label: 'Last 30 days', days: 30 },
  { id: '90d', label: 'Last quarter', days: 90 },
  { id: 'ytd', label: 'Year to date' },
  { id: 'custom', label: 'Custom range' }
];
const HV_DRP_FMT = (d) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

export function DateRangePicker({ defaultPreset = '30d', defaultOpen = false, onChange }) {
  hvEnsureDrpCss();
  const today = new Date();
  const [open, setOpen] = React.useState(defaultOpen);
  const [preset, setPreset] = React.useState(defaultPreset);
  const [start, setStart] = React.useState(null);
  const [end, setEnd] = React.useState(null);
  const [view, setView] = React.useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;
    const onDoc = (ev) => { if (ref.current && !ref.current.contains(ev.target)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  const pickPreset = (p) => {
    setPreset(p.id);
    if (p.id !== 'custom') {
      const e2 = new Date(today);
      const s2 = p.days ? new Date(today.getTime() - p.days * 864e5) : new Date(today.getFullYear(), 0, 1);
      setStart(s2); setEnd(e2);
      if (onChange) onChange({ preset: p.id, start: s2, end: e2 });
      setOpen(false);
    }
  };

  const pickDay = (d) => {
    setPreset('custom');
    if (!start || (start && end)) { setStart(d); setEnd(null); }
    else if (d < start) { setStart(d); }
    else {
      setEnd(d);
      if (onChange) onChange({ preset: 'custom', start, end: d });
    }
  };

  const activePreset = HV_DRP_PRESETS.find((p) => p.id === preset);
  const label = preset !== 'custom' && activePreset ? activePreset.label
    : start && end ? `${HV_DRP_FMT(start)} – ${HV_DRP_FMT(end)}`
    : start ? `${HV_DRP_FMT(start)} – …`
    : 'Select range';

  const first = new Date(view.getFullYear(), view.getMonth(), 1);
  const daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const lead = first.getDay();
  const cells = [];
  for (let i = 0; i < lead; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(view.getFullYear(), view.getMonth(), d));
  const sameDay = (a, b) => a && b && a.toDateString() === b.toDateString();
  const inRange = (d) => start && end && d > start && d < end;

  return (
    <span className="hv-drp" ref={ref}>
      <button type="button" className="hv-drp__trigger" onClick={() => setOpen(!open)}>
        <svg width="13" height="13" viewBox="0 0 14 14"><rect x="1" y="2.5" width="12" height="10.5" rx="2" fill="none" stroke="var(--ink-400)" strokeWidth="1.3"/><path d="M1 6h12M4.5 1v3M9.5 1v3" stroke="var(--ink-400)" strokeWidth="1.3" strokeLinecap="round" fill="none"/></svg>
        {label}
        <span className="hv-drp__chev">▾</span>
      </button>
      {open ? (
        <div className="hv-drp__panel">
          <div className="hv-drp__rail">
            {HV_DRP_PRESETS.map((p) => (
              <button key={p.id} type="button" className={`hv-drp__preset${p.id === preset ? ' hv-drp__preset--active' : ''}`} onClick={() => pickPreset(p)}>{p.label}</button>
            ))}
          </div>
          <div className="hv-drp__cal">
            <div className="hv-drp__calhead">
              <button type="button" className="hv-drp__nav" onClick={() => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))}>◀</button>
              <span className="hv-drp__month">{view.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
              <button type="button" className="hv-drp__nav" onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))}>▶</button>
            </div>
            <div className="hv-drp__grid">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((w, i) => <span key={i} className="hv-drp__wd">{w}</span>)}
              {cells.map((d, i) => d ? (
                <button
                  key={i}
                  type="button"
                  className={`hv-drp__day${inRange(d) ? ' hv-drp__day--in' : ''}${sameDay(d, start) || sameDay(d, end) ? ' hv-drp__day--end' : ''}`}
                  onClick={() => pickDay(d)}
                >{d.getDate()}</button>
              ) : <span key={i}></span>)}
            </div>
          </div>
        </div>
      ) : null}
    </span>
  );
}
