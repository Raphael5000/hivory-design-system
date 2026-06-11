/* Hivory Badge — Engine status chips on the tinted status tokens. */
const hvBadgeCss = `
.hv-badge{display:inline-flex;align-items:center;gap:5px;font-family:var(--font-sans);font-size:11.5px;font-weight:500;line-height:1;padding:4px 9px;border-radius:var(--radius-sm);white-space:nowrap}
.hv-badge__dot{width:6px;height:6px;border-radius:999px;background:currentColor;flex:none}
.hv-badge--positive{color:var(--status-positive-text);background:var(--status-positive-bg)}
.hv-badge--info{color:var(--status-info-text);background:var(--status-info-bg)}
.hv-badge--caution{color:var(--status-caution-text);background:var(--status-caution-bg)}
.hv-badge--negative{color:var(--status-negative-text);background:var(--status-negative-bg)}
.hv-badge--neutral{color:var(--ink-700);background:var(--ink-100)}
`;
function hvEnsureBadgeCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-badge-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-badge-css';
  s.textContent = hvBadgeCss;
  document.head.appendChild(s);
}

export function Badge({ status = 'neutral', dot = false, children }) {
  hvEnsureBadgeCss();
  return (
    <span className={`hv-badge hv-badge--${status}`}>
      {dot ? <span className="hv-badge__dot"></span> : null}
      {children}
    </span>
  );
}
