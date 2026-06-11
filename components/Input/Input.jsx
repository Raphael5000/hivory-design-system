/* Hivory Input — Engine field chrome: 34px, radius 8, green-600 focus ring. */
const hvInputCss = `
.hv-field{display:flex;flex-direction:column;gap:6px;font-family:var(--font-sans)}
.hv-field__label{font-size:12.5px;font-weight:500;color:var(--ink-700)}
.hv-input{height:34px;padding:0 12px;font-size:13.5px;font-family:var(--font-sans);color:var(--ink-900);background:var(--surface-card);border:1px solid var(--border-strong);border-radius:var(--radius-md);outline:none;box-sizing:border-box;width:100%;transition:border-color var(--duration-fast) var(--ease-out),box-shadow var(--duration-fast) var(--ease-out)}
.hv-input::placeholder{color:var(--text-faint)}
.hv-input:hover:not(:disabled):not(:focus){border-color:var(--ink-300)}
.hv-input:focus{border-color:var(--green-600);box-shadow:0 0 0 3px rgba(0,164,88,0.14)}
.hv-input:disabled{background:var(--ink-50);color:var(--text-faint);cursor:not-allowed}
.hv-input--error{border-color:var(--red-500)}
.hv-input--error:focus{border-color:var(--red-500);box-shadow:0 0 0 3px rgba(194,69,45,0.12)}
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
