/* Hivory Input — Engine field chrome: 34px, radius 8, green-600 focus ring. */
const hvInputCss = `
.hv-field{display:flex;flex-direction:column;gap:6px;font-family:var(--font-sans)}
.hv-field__label{font-size:12.5px;font-weight:500;color:var(--ink-700)}
.hv-input{height:34px;padding:0 12px;font-size:13.5px;font-family:var(--font-sans);color:var(--ink-900);background:var(--surface-card);border:none;border-radius:var(--radius-control);outline:none;box-sizing:border-box;width:100%;box-shadow:inset 0 0 0 1px var(--border-strong);caret-color:var(--green-500);transition:box-shadow var(--transition-soft)}
.hv-input::placeholder{color:var(--text-faint)}
.hv-input:hover:not(:disabled):not(:focus){box-shadow:inset 0 0 0 1px var(--ink-300)}
.hv-input:focus{box-shadow:inset 0 0 0 1.5px var(--green-600)}
.hv-input:disabled{background:var(--ink-50);color:var(--text-faint);cursor:not-allowed}
.hv-input--error{box-shadow:inset 0 0 0 1.5px var(--red-500)}
.hv-input--error:focus{box-shadow:inset 0 0 0 1.5px var(--red-500)}
.hv-field__hint{font-size:12px;color:var(--text-muted)}
.hv-field__error{font-size:12px;color:var(--red-700);font-weight:500}
`;
function hvEnsureInputCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-input-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-input-css';
  s.textContent = hvInputCss;
  document.head.appendChild(s);
}

export function Input({ label, placeholder, value, defaultValue, onChange, type = 'text', hint, error, disabled = false }) {
  hvEnsureInputCss();
  return (
    <label className="hv-field">
      {label ? <span className="hv-field__label">{label}</span> : null}
      <input
        className={`hv-input${error ? ' hv-input--error' : ''}`}
        type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
      />
      {error ? <span className="hv-field__error">{error}</span> : hint ? <span className="hv-field__hint">{hint}</span> : null}
    </label>
  );
}
