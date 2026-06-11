/* Hivory Toast — dark ink notice, bottom-right stack. Presentational: app owns state. */
const hvToastCss = `
.hv-toast-stack{position:fixed;right:16px;bottom:16px;display:flex;flex-direction:column;gap:8px;z-index:200;font-family:var(--font-sans)}
.hv-toast-stack--static{position:static}
.hv-toast{display:flex;align-items:flex-start;gap:10px;background:var(--ink-950);color:var(--white);border-radius:var(--radius-lg);box-shadow:var(--shadow-overlay);padding:11px 14px;min-width:260px;max-width:380px;box-sizing:border-box}
.hv-toast__dot{width:7px;height:7px;border-radius:999px;flex:none;margin-top:5px}
.hv-toast__dot--positive{background:var(--green-500)}
.hv-toast__dot--negative{background:#FF7A5C}
.hv-toast__dot--neutral{background:var(--ink-400)}
.hv-toast__title{font-size:13px;font-weight:600;line-height:1.4}
.hv-toast__desc{font-size:12.5px;line-height:1.45;color:var(--ink-300);margin-top:1px}
.hv-toast__close{margin-left:auto;flex:none;appearance:none;background:none;border:none;color:var(--ink-400);cursor:pointer;font-size:14px;line-height:1;padding:2px;border-radius:4px}
.hv-toast__close:hover{color:var(--white)}
`;
function hvEnsureToastCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-toast-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-toast-css';
  s.textContent = hvToastCss;
  document.head.appendChild(s);
}

export function Toast({ tone = 'neutral', title, description, onDismiss }) {
  hvEnsureToastCss();
  return (
    <div className="hv-toast" role="status">
      <span className={`hv-toast__dot hv-toast__dot--${tone}`}></span>
      <div>
        {title ? <div className="hv-toast__title">{title}</div> : null}
        {description ? <div className="hv-toast__desc">{description}</div> : null}
      </div>
      {onDismiss ? <button type="button" className="hv-toast__close" onClick={onDismiss} aria-label="Dismiss">×</button> : null}
    </div>
  );
}

/* Fixed bottom-right by default; static=true renders in flow (for specs). */
export function ToastStack({ static: isStatic = false, children }) {
  hvEnsureToastCss();
  return <div className={`hv-toast-stack${isStatic ? ' hv-toast-stack--static' : ''}`}>{children}</div>;
}
