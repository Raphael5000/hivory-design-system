/* Hivory Avatar — identity chips. Initials on ink-100, optional presence dot. */
const hvAvatarCss = `
.hv-avatar{position:relative;display:inline-flex;align-items:center;justify-content:center;border-radius:999px;background:var(--ink-100);color:var(--ink-700);font-family:var(--font-sans);font-weight:500;overflow:visible;flex:none;box-sizing:border-box}
.hv-avatar__img{width:100%;height:100%;border-radius:999px;object-fit:cover;display:block}
.hv-avatar--sm{width:24px;height:24px;font-size:10px}
.hv-avatar--md{width:32px;height:32px;font-size:12px}
.hv-avatar--lg{width:40px;height:40px;font-size:14.5px}
.hv-avatar__dot{position:absolute;right:-1px;bottom:-1px;width:9px;height:9px;border-radius:999px;background:var(--green-600);border:2px solid var(--white)}
.hv-avatar-group{display:inline-flex;align-items:center}
.hv-avatar-group .hv-avatar{border:2px solid var(--white)}
.hv-avatar-group .hv-avatar+.hv-avatar{margin-left:-8px}
.hv-avatar--overflow{background:var(--ink-50);color:var(--text-muted);font-size:11px}
`;
function hvEnsureAvatarCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-avatar-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-avatar-css';
  s.textContent = hvAvatarCss;
  document.head.appendChild(s);
}

function hvInitials(name) {
  if (!name) return '?';
  const parts = name.trim().split(/\s+/);
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
}

export function Avatar({ src, name, size = 'md', dot = false }) {
  hvEnsureAvatarCss();
  return (
    <span className={`hv-avatar hv-avatar--${size}`} title={name}>
      {src ? <img className="hv-avatar__img" src={src} alt={name || ''} /> : hvInitials(name)}
      {dot ? <span className="hv-avatar__dot"></span> : null}
    </span>
  );
}

/* Overlapping stack; names beyond `max` collapse into a +N chip. */
export function AvatarGroup({ names = [], size = 'md', max = 4 }) {
  hvEnsureAvatarCss();
  const shown = names.slice(0, max);
  const extra = names.length - shown.length;
  return (
    <span className="hv-avatar-group">
      {shown.map((n) => <Avatar key={n} name={n} size={size} />)}
      {extra > 0 ? <span className={`hv-avatar hv-avatar--${size} hv-avatar--overflow`}>+{extra}</span> : null}
    </span>
  );
}
