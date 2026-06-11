/* Hivory Switch — 34×18 track, ink-950 when on (green stays reserved for status/CTA). */
const hvSwitchCss = `
.hv-switch{display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-family:var(--font-sans);font-size:13.5px;color:var(--ink-900)}
.hv-switch input{position:absolute;opacity:0;width:0;height:0}
.hv-switch__track{width:34px;height:18px;flex:none;border-radius:999px;background:var(--ink-200);position:relative;transition:background-color var(--duration-fast) var(--ease-out);box-sizing:border-box}
.hv-switch__thumb{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:999px;background:var(--white);box-shadow:0 1px 2px rgba(13,13,13,0.18);transition:transform var(--duration-fast) var(--ease-out)}
.hv-switch input:checked+.hv-switch__track{background:var(--ink-950)}
.hv-switch input:checked+.hv-switch__track .hv-switch__thumb{transform:translateX(16px)}
.hv-switch input:focus-visible+.hv-switch__track{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-switch--disabled{opacity:.45;cursor:not-allowed}
`;
function hvEnsureSwitchCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-switch-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-switch-css';
  s.textContent = hvSwitchCss;
  document.head.appendChild(s);
}

export function Switch({ label, checked, defaultChecked, onChange, disabled = false }) {
  hvEnsureSwitchCss();
  return (
    <label className={`hv-switch${disabled ? ' hv-switch--disabled' : ''}`}>
      <input type="checkbox" role="switch" checked={checked} defaultChecked={defaultChecked} onChange={onChange} disabled={disabled} />
      <span className="hv-switch__track"><span className="hv-switch__thumb"></span></span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
