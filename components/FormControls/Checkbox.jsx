/* Hivory Checkbox — 16px box, ink-950 checked fill, green focus ring. */
const hvCheckboxCss = `
.hv-check{display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-family:var(--font-sans);font-size:13.5px;color:var(--ink-900)}
.hv-check input{position:absolute;opacity:0;width:0;height:0}
.hv-check__box{width:16px;height:16px;flex:none;border-radius:4px;border:1px solid var(--border-strong);background:var(--surface-card);display:inline-flex;align-items:center;justify-content:center;transition:background-color var(--duration-fast) var(--ease-out),border-color var(--duration-fast) var(--ease-out);box-sizing:border-box}
.hv-check__box svg{opacity:0;transition:opacity var(--duration-fast) var(--ease-out)}
.hv-check input:checked+.hv-check__box{background:var(--ink-950);border-color:var(--ink-950)}
.hv-check input:checked+.hv-check__box svg{opacity:1}
.hv-check input:focus-visible+.hv-check__box{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-check--disabled{opacity:.45;cursor:not-allowed}
`;
function hvEnsureCheckboxCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-checkbox-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-checkbox-css';
  s.textContent = hvCheckboxCss;
  document.head.appendChild(s);
}

export function Checkbox({ label, checked, defaultChecked, onChange, disabled = false }) {
  hvEnsureCheckboxCss();
  return (
    <label className={`hv-check${disabled ? ' hv-check--disabled' : ''}`}>
      <input type="checkbox" checked={checked} defaultChecked={defaultChecked} onChange={onChange} disabled={disabled} />
      <span className="hv-check__box">
        <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1.5 5.5L4 8l4.5-6" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
