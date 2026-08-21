import * as React from 'react';
/* Hivory FilterSelect — multiselect dropdown filter. Quiet pill trigger tallies picks ("Status · 2");
   Menu-chrome checkbox list with optional status tone dots stays open across picks. Never a row of option pills. */
const hvFilterSelectCss = `
.hv-fsel{position:relative;display:inline-block;font-family:var(--font-sans)}
.hv-fsel__trigger{height:28px;padding:0 10px 0 13px;border:none;border-radius:var(--radius-pill);background-color:var(--surface-card);color:var(--text-secondary);box-shadow:var(--shadow-card);display:inline-flex;align-items:center;gap:6px;font-family:var(--font-sans);font-size:12px;font-weight:550;font-variant-numeric:tabular-nums;cursor:pointer;white-space:nowrap;transition:background-color var(--duration-soft) var(--ease-out),color var(--duration-soft) var(--ease-out),filter var(--duration-fast) var(--ease-out)}
.hv-fsel__trigger:hover:not(:disabled){color:var(--text-body);background-image:linear-gradient(var(--hover-on-white),var(--hover-on-white))}
.hv-fsel__trigger:active:not(:disabled){filter:brightness(0.94)}
.hv-fsel__trigger:focus-visible{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-fsel__trigger--active{background-color:var(--action-primary);color:var(--white);box-shadow:none}
.hv-fsel__trigger--active:hover:not(:disabled){color:var(--white);background-image:none;background-color:var(--action-primary-hover)}
.hv-fsel__trigger:disabled{color:var(--text-ghost);cursor:not-allowed}
.hv-fsel__chevron{flex:none;opacity:0.65}
.hv-fsel__menu{position:absolute;top:calc(100% + 6px);min-width:190px;max-width:320px;background:var(--surface-card);border-radius:var(--radius-xl);box-shadow:var(--shadow-overlay);padding:5px;z-index:50;box-sizing:border-box;transform-origin:top center;animation:hv-fsel-in var(--duration-soft) var(--ease-out)}
.hv-fsel__menu--left{left:0}
.hv-fsel__menu--right{right:0}
@keyframes hv-fsel-in{from{opacity:0;transform:translateY(-6px) scale(0.985)}to{opacity:1;transform:none}}
.hv-fsel__row{display:flex;align-items:flex-start;gap:9px;width:100%;box-sizing:border-box;min-height:32px;padding:7px 10px;border:none;background:none;text-align:left;font-family:var(--font-sans);font-size:13px;line-height:1.35;color:var(--text-body);border-radius:var(--radius-sm);cursor:pointer;transition:background-color var(--duration-soft) var(--ease-out),filter var(--duration-fast) var(--ease-out)}
.hv-fsel__label{flex:1;min-width:0}
.hv-fsel__row:hover{background:var(--ink-50)}
.hv-fsel__row:active{filter:brightness(0.94)}
.hv-fsel__row:focus-visible{outline:2px solid var(--border-focus);outline-offset:-2px}
.hv-fsel__box{width:15px;height:15px;margin-top:1.5px;/* drift-ok: optical centering of a 15px glyph on the 18px first text line, not a rhythm gap */border-radius:4px;display:flex;align-items:center;justify-content:center;color:var(--white);box-shadow:inset 0 0 0 1.5px rgba(23,24,26,0.16);flex:none;transition:background-color var(--duration-soft) var(--ease-out),box-shadow var(--duration-soft) var(--ease-out)}
.hv-fsel__row--on .hv-fsel__box{background-color:var(--action-primary);box-shadow:none}
.hv-fsel__dot{margin-left:auto;margin-top:6px;/* drift-ok: optical centering of the 6px dot on the 18px first text line, not a rhythm gap */width:6px;height:6px;border-radius:var(--radius-pill);flex:none}
.hv-fsel__row--clear{color:var(--text-muted)}
.hv-fsel__sep{height:1px;background:var(--hairline);margin:3px 6px}
.hv-fsel__empty{height:32px;display:flex;align-items:center;box-sizing:border-box;padding:0 10px;font-size:13px;color:var(--text-faint)}
`;
function hvEnsureFilterSelectCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-filterselect-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-filterselect-css';
  s.textContent = hvFilterSelectCss;
  document.head.appendChild(s);
}

const HV_FSEL_TONES = {
  positive: 'var(--green-500)',
  caution: 'var(--amber-500)',
  negative: 'var(--red-500)',
  neutral: 'var(--ink-250)'
};

/* options: [{ id, label, tone? ('positive'|'caution'|'negative'|'neutral') }] */
export function FilterSelect({
  label,
  options = [],
  value,
  defaultValue = [],
  onChange,
  align = 'left',
  defaultOpen = false,
  disabled = false,
  emptyText = 'No options match'
}) {
  hvEnsureFilterSelectCss();
  const [open, setOpen] = React.useState(defaultOpen);
  const [inner, setInner] = React.useState(defaultValue);
  const selected = value !== undefined ? value : inner;
  const ref = React.useRef(null);
  const trigRef = React.useRef(null);
  const commit = (next) => {
    if (value === undefined) setInner(next);
    if (onChange) onChange(next);
  };
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (ev) => { if (ref.current && !ref.current.contains(ev.target)) setOpen(false); };
    const onKey = (ev) => {
      if (ev.key !== 'Escape') return;
      setOpen(false);
      if (trigRef.current) trigRef.current.focus();
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey); };
  }, [open]);
  const n = selected.length;
  const toggleOpt = (id) => commit(selected.includes(id) ? selected.filter((x) => x !== id) : selected.concat(id));
  return (
    <span className="hv-fsel" ref={ref}>
      <button
        type="button"
        ref={trigRef}
        disabled={disabled}
        className={`hv-fsel__trigger${n ? ' hv-fsel__trigger--active' : ''}`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {n ? `${label} · ${n}` : label}
        <svg className="hv-fsel__chevron" width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m4 6.5 4 4 4-4"></path></svg>
      </button>
      {open ? (
        <div className={`hv-fsel__menu hv-fsel__menu--${align}`} role="menu" aria-label={typeof label === 'string' ? label : undefined}>
          {options.length ? options.map((o) => {
            const on = selected.includes(o.id);
            return (
              <button
                key={o.id}
                type="button"
                role="menuitemcheckbox"
                aria-checked={on}
                className={`hv-fsel__row${on ? ' hv-fsel__row--on' : ''}`}
                onClick={() => toggleOpt(o.id)}
              >
                <span className="hv-fsel__box" aria-hidden="true">
                  {on ? (
                    <svg width="9" height="9" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8.5 6.5 12 13 4.5"></path></svg>
                  ) : null}
                </span>
                {/* Long labels wrap — a filter option is never truncated. The box
                    and dot pin to the first line; the row grows from min-32. */}
                <span className="hv-fsel__label">{o.label}</span>
                {o.tone ? <span className="hv-fsel__dot" style={{ background: HV_FSEL_TONES[o.tone] || 'transparent' }}></span> : null}
              </button>
            );
          }) : (
            <div className="hv-fsel__empty">{emptyText}</div>
          )}
          {n ? (
            <React.Fragment>
              <div className="hv-fsel__sep"></div>
              <button type="button" role="menuitem" className="hv-fsel__row hv-fsel__row--clear" onClick={() => commit([])}>
                Clear
              </button>
            </React.Fragment>
          ) : null}
        </div>
      ) : null}
    </span>
  );
}
