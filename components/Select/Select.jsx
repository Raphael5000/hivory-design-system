/* Hivory Select — same field chrome as Input, native select with chevron. */
const hvSelectCss = `
.hv-selfield{display:flex;flex-direction:column;gap:6px;font-family:var(--font-sans)}
.hv-selfield__label{font-size:12.5px;font-weight:500;color:var(--ink-700)}
.hv-select{appearance:none;height:34px;padding:0 32px 0 12px;font-size:13.5px;font-family:var(--font-sans);color:var(--ink-900);background-color:var(--surface-card);border:1px solid var(--border-strong);border-radius:var(--radius-md);outline:none;box-sizing:border-box;width:100%;cursor:pointer;transition:border-color var(--duration-fast) var(--ease-out),box-shadow var(--duration-fast) var(--ease-out);background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2.5 4.5L6 8l3.5-3.5' fill='none' stroke='%236E6E6C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center}
.hv-select:hover:not(:disabled):not(:focus){border-color:var(--ink-300)}
.hv-select:focus{border-color:var(--green-600);box-shadow:0 0 0 3px rgba(0,164,88,0.14)}
.hv-select:disabled{background-color:var(--ink-50);color:var(--text-faint);cursor:not-allowed}
.hv-selfield__hint{font-size:12px;color:var(--text-muted)}
`;
function hvEnsureSelectCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-select-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-select-css';
  s.textContent = hvSelectCss;
  document.head.appendChild(s);
}

export function Select({ label, options = [], value, defaultValue, onChange, hint, disabled = false }) {
  hvEnsureSelectCss();
  return (
    <label className="hv-selfield">
      {label ? <span className="hv-selfield__label">{label}</span> : null}
      <select className="hv-select" value={value} defaultValue={defaultValue} onChange={onChange} disabled={disabled}>
        {options.map((opt) => {
          const o = typeof opt === 'string' ? { value: opt, label: opt } : opt;
          return <option key={o.value} value={o.value}>{o.label}</option>;
        })}
      </select>
      {hint ? <span className="hv-selfield__hint">{hint}</span> : null}
    </label>
  );
}
