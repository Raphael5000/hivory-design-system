/* Hivory Modal — radius 14 panel on a soft ink scrim; quiet, border-led. */
const hvModalCss = `
.hv-modal-overlay{position:fixed;inset:0;background:rgba(13,15,14,0.40);display:flex;align-items:center;justify-content:center;padding:24px;z-index:100}
.hv-modal{background:var(--surface-card);border:1px solid var(--border-subtle);border-radius:var(--radius-xl);box-shadow:var(--shadow-overlay);width:100%;font-family:var(--font-sans);box-sizing:border-box}
.hv-modal__head{padding:18px 20px 0}
.hv-modal__title{margin:0;font-size:15.5px;font-weight:600;letter-spacing:-0.01em;color:var(--ink-950)}
.hv-modal__desc{margin:5px 0 0;font-size:13.5px;line-height:1.55;color:var(--text-muted)}
.hv-modal__body{padding:16px 20px}
.hv-modal__foot{display:flex;justify-content:flex-end;gap:8px;padding:0 20px 18px}
`;
function hvEnsureModalCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-modal-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-modal-css';
  s.textContent = hvModalCss;
  document.head.appendChild(s);
}

export function Modal({ open = false, onClose, title, description, footer, width = 440, children }) {
  hvEnsureModalCss();
  React.useEffect(() => {
    if (!open || !onClose) return;
    const onKey = (ev) => { if (ev.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="hv-modal-overlay" onMouseDown={(ev) => { if (ev.target === ev.currentTarget && onClose) onClose(); }}>
      <div className="hv-modal" role="dialog" aria-modal="true" style={{ maxWidth: width }}>
        {(title || description) ? (
          <header className="hv-modal__head">
            {title ? <h2 className="hv-modal__title">{title}</h2> : null}
            {description ? <p className="hv-modal__desc">{description}</p> : null}
          </header>
        ) : null}
        {children ? <div className="hv-modal__body">{children}</div> : null}
        {footer ? <footer className="hv-modal__foot">{footer}</footer> : null}
      </div>
    </div>
  );
}
