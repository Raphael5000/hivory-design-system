/* Hivory Button — Engine. Ink-filled primary; green reserved for the brand CTA. */
const hvButtonCss = `
.hv-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;font-family:var(--font-sans);font-weight:600;letter-spacing:-0.005em;border-radius:var(--radius-pill);border:none;background-clip:padding-box;cursor:pointer;white-space:nowrap;box-sizing:border-box;transition:background-color var(--transition-soft),box-shadow var(--transition-soft),color var(--transition-soft)}
.hv-btn:disabled{opacity:.45;cursor:not-allowed}
.hv-btn:focus-visible{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-btn--sm{height:26px;padding:0 13px;font-size:11.5px}
.hv-btn--md{height:33px;padding:0 18px;font-size:12.5px}
.hv-btn--lg{height:40px;padding:0 22px;font-size:13px;font-weight:650}
.hv-btn--primary{background:var(--action-primary);color:var(--on-action-primary)}
.hv-btn--primary:hover:not(:disabled){background:var(--action-primary-hover)}
.hv-btn--brand{background:var(--action-brand);color:var(--on-action-brand);font-weight:650;box-shadow:0 10px 24px -12px rgba(0,163,82,0.55)}
.hv-btn--brand:hover:not(:disabled){background:var(--action-brand-hover)}
.hv-btn--outline{background:var(--surface-card);color:var(--ink-900);box-shadow:inset 0 0 0 1px rgba(23,24,26,0.13)}
.hv-btn--outline:hover:not(:disabled){box-shadow:inset 0 0 0 1px rgba(23,24,26,0.26);background:var(--surface-card)}
.hv-btn--ghost{background:transparent;color:var(--ink-700)}
.hv-btn--ghost:hover:not(:disabled){background:var(--ink-100)}
.hv-btn--danger{background:var(--red-700);color:var(--white)}
.hv-btn--danger:hover:not(:disabled){background:var(--red-500)}
`;
function hvEnsureButtonCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-button-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-button-css';
  s.textContent = hvButtonCss;
  document.head.appendChild(s);
}

export function Button({ variant = 'primary', size = 'md', disabled = false, type = 'button', onClick, children }) {
  hvEnsureButtonCss();
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={`hv-btn hv-btn--${variant} hv-btn--${size}`}>
      {children}
    </button>
  );
}
