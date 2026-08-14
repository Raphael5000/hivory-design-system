/* Hivory Topbar — the portal identity bar: glass floating on the canvas (the rail's treatment turned
   horizontal). Identity left (partner mark · client name), account right (sync line · search · avatar).
   It holds identity and account, never navigation — one row, 52px, and it never becomes a toolbar. */
const hvTopbarCss = `
.hv-topbar{display:flex;align-items:center;gap:14px;height:52px;padding:0 16px;box-sizing:border-box;margin:12px 12px 0;border-radius:var(--radius-2xl);background:var(--glass-fill);-webkit-backdrop-filter:var(--glass-blur);backdrop-filter:var(--glass-blur);box-shadow:var(--shadow-glass-ring);font-family:var(--font-sans);color:var(--text-body)}
.hv-topbar__lock{display:flex;align-items:center;gap:9px;min-width:0}
.hv-topbar__logo{height:18px;display:block;flex:none}
.hv-topbar__div{width:1px;height:16px;background:rgba(23,24,26,0.16);flex:none}
.hv-topbar__client{font-size:13px;font-weight:600;letter-spacing:-0.01em;color:var(--ink-950);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.hv-topbar__crumb{font-size:13px;color:var(--text-muted);white-space:nowrap}
.hv-topbar__sp{flex:1;min-width:0}
.hv-topbar__live{display:inline-flex;align-items:center;gap:7px;font-size:12px;color:var(--text-muted);white-space:nowrap;font-variant-numeric:tabular-nums}
.hv-topbar__dot{width:6px;height:6px;border-radius:var(--radius-pill);background:var(--green-500);flex:none;animation:hv-topbar-pulse var(--duration-pulse) var(--ease-out) infinite}
.hv-topbar__pill{display:inline-flex;align-items:center;height:20px;padding:0 8px;border-radius:var(--radius-pill);background:var(--status-caution-bg);color:var(--status-caution-text);font-size:10.5px;font-weight:650;white-space:nowrap;flex:none}
.hv-topbar__ib{appearance:none;border:none;padding:0;width:30px;height:30px;border-radius:var(--radius-md);background:transparent;display:inline-flex;align-items:center;justify-content:center;color:var(--text-muted);cursor:pointer;flex:none;transition:background-color var(--transition-soft),color var(--transition-soft)}
.hv-topbar__ib:hover{background:rgba(255,255,255,0.7);color:var(--ink-900)}
.hv-topbar__ib:active{filter:brightness(0.94)}
.hv-topbar__ib:focus-visible{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-topbar__av{appearance:none;border:none;padding:0;width:28px;height:28px;border-radius:var(--radius-pill);background:var(--ink-100);color:var(--ink-700);display:inline-flex;align-items:center;justify-content:center;font-family:var(--font-sans);font-size:10.5px;font-weight:700;letter-spacing:0.02em;flex:none;cursor:pointer;transition:box-shadow var(--transition-soft)}
.hv-topbar__av:hover{box-shadow:0 0 0 3px rgba(255,255,255,0.7)}
.hv-topbar__av:active{filter:brightness(0.94)}
.hv-topbar__av:focus-visible{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-topbar__skel{display:inline-block;border-radius:var(--radius-pill);background:var(--ink-100);animation:hv-topbar-pulse var(--duration-pulse) var(--ease-out) infinite}
@keyframes hv-topbar-pulse{0%,100%{opacity:1}50%{opacity:0.4}}
@media (max-width:640px){.hv-topbar{gap:10px;padding:0 12px}.hv-topbar__crumb,.hv-topbar__live{display:none}}
@media (prefers-reduced-motion:reduce){.hv-topbar__dot,.hv-topbar__skel{animation-duration:2.4s}}
`;
function hvEnsureTopbarCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-topbar-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-topbar-css';
  s.textContent = hvTopbarCss;
  document.head.appendChild(s);
}

function hvTopbarInitials(name) {
  if (!name) return '?';
  const parts = name.trim().split(/\s+/);
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
}

/* Search glyph — Hivory icon grammar (16px grid, 1.5 stroke); mirrors the master set in components/Icon. */
const hvTopbarSearchIcon = (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
    <circle cx="7" cy="7" r="4.6" />
    <path d="M10.4 10.4 13.5 13.5" />
  </svg>
);

/*
 * sync: { status: 'live' | 'stale', label } — the live line is a pulse dot plus one human sentence;
 *       on failure it degrades to a caution pill in the same slot. It never vanishes silently.
 * account: { name, initials?, onClick } — the avatar is the only route to sign-out; never hidden.
 * loading: lockup and avatar render immediately; only the client name and sync line skeleton.
 */
export function Topbar({ logo, logoSrc, logoAlt = '', client, crumb, sync, onSearch, account, loading = false }) {
  hvEnsureTopbarCss();
  const mark = logo || (logoSrc ? <img className="hv-topbar__logo" src={logoSrc} alt={logoAlt} /> : null);
  return (
    <header className="hv-topbar">
      <span className="hv-topbar__lock">
        {mark}
        {loading || client ? <span className="hv-topbar__div"></span> : null}
        {loading
          ? <span className="hv-topbar__skel" style={{ width: 96, height: 12 }}></span>
          : (client ? <span className="hv-topbar__client">{client}</span> : null)}
      </span>
      {!loading && crumb ? <span className="hv-topbar__crumb">/ {crumb}</span> : null}
      <span className="hv-topbar__sp"></span>
      {loading ? (
        <span className="hv-topbar__skel" style={{ width: 128, height: 12 }}></span>
      ) : sync && sync.status === 'live' ? (
        <span className="hv-topbar__live">
          <span className="hv-topbar__dot" data-motion="essential"></span>
          {sync.label}
        </span>
      ) : sync && sync.status === 'stale' ? (
        <span className="hv-topbar__pill">{sync.label}</span>
      ) : null}
      {onSearch ? (
        <button type="button" className="hv-topbar__ib" aria-label="Search" onClick={onSearch}>
          {hvTopbarSearchIcon}
        </button>
      ) : null}
      {account ? (
        <button
          type="button"
          className="hv-topbar__av"
          aria-label={account.name ? `Account — ${account.name}` : 'Account'}
          onClick={account.onClick}
        >
          {account.initials || hvTopbarInitials(account.name)}
        </button>
      ) : null}
    </header>
  );
}
