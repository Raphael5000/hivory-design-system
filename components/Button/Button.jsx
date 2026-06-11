/* Hivory Button — Engine. Ink-filled primary; green reserved for the brand CTA. */
const hvButtonCss = `
.hv-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;font-family:var(--font-sans);font-weight:500;border-radius:var(--radius-md);border:1px solid transparent;cursor:pointer;white-space:nowrap;transition:background-color var(--duration-fast) var(--ease-out),border-color var(--duration-fast) var(--ease-out),color var(--duration-fast) var(--ease-out)}
.hv-btn:disabled{opacity:.45;cursor:not-allowed}
.hv-btn:focus-visible{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-btn--sm{height:28px;padding:0 10px;font-size:12.5px}
.hv-btn--md{height:34px;padding:0 14px;font-size:13.5px}
.hv-btn--lg{height:40px;padding:0 18px;font-size:14.5px}
.hv-btn--primary{background:var(--action-primary);color:var(--on-action-primary)}
.hv-btn--primary:hover:not(:disabled){background:var(--action-primary-hover)}
.hv-btn--brand{background:var(--action-brand);color:var(--on-action-brand);font-weight:600}
.hv-btn--brand:hover:not(:disabled){background:var(--action-brand-hover)}
.hv-btn--outline{background:var(--surface-card);color:var(--ink-900);border-color:var(--border-strong)}
.hv-btn--outline:hover:not(:disabled){border-color:var(--ink-300);background:var(--ink-50)}
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
