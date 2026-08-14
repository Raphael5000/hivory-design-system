/* Hivory Textarea — Input chrome, vertical resize. */
const hvTextareaCss = `
.hv-tafield{display:flex;flex-direction:column;gap:6px;font-family:var(--font-sans)}
.hv-tafield__label{font-size:12.5px;font-weight:500;color:var(--ink-700)}
.hv-textarea{padding:9px 12px;font-size:13.5px;line-height:1.5;font-family:var(--font-sans);color:var(--ink-900);background:var(--surface-card);border:none;border-radius:var(--radius-control);outline:none;box-sizing:border-box;width:100%;resize:vertical;min-height:72px;box-shadow:inset 0 0 0 1px var(--border-strong);caret-color:var(--green-500);transition:box-shadow var(--transition-soft)}
.hv-textarea::placeholder{color:var(--text-faint)}
.hv-textarea:hover:not(:disabled):not(:focus){box-shadow:inset 0 0 0 1px var(--ink-300);}
.hv-textarea:focus{box-shadow:inset 0 0 0 1px var(--green-600);box-shadow:inset 0 0 0 1.5px var(--green-600)}
.hv-textarea:disabled{background:var(--ink-50);color:var(--text-faint);cursor:not-allowed}
.hv-tafield__hint{font-size:12px;color:var(--text-muted)}
.hv-tafield__error{font-size:12px;color:var(--red-700);font-weight:500}
.hv-textarea--error{box-shadow:inset 0 0 0 1px var(--red-500);}
`;
function hvEnsureTextareaCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-textarea-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-textarea-css';
  s.textContent = hvTextareaCss;
  document.head.appendChild(s);
}

export function Textarea({ label, placeholder, value, defaultValue, onChange, rows = 3, hint, error, disabled = false }) {
  hvEnsureTextareaCss();
  return (
    <label className="hv-tafield">
      {label ? <span className="hv-tafield__label">{label}</span> : null}
      <textarea
        className={`hv-textarea${error ? ' hv-textarea--error' : ''}`}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        rows={rows}
        disabled={disabled}
      ></textarea>
      {error ? <span className="hv-tafield__error">{error}</span> : hint ? <span className="hv-tafield__hint">{hint}</span> : null}
    </label>
  );
}
