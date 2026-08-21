import * as React from 'react';
/* Hivory SignIn — the gate. Left: the plate, the one surface a partner completely owns (dark ramp,
   green bloom, one line). Right: the same disciplined form every console ships — providers first,
   42px opaque fields, an ink verb, recovery resolving in place. Glass may frame the panel (one of
   the system's two glass surfaces) but is never the field: inputs stay opaque on every deployment. */
const hvSignInCss = `
.hv-signin{display:grid;grid-template-columns:0.92fr 1fr;min-height:100vh;min-height:100dvh;overflow:hidden;font-family:var(--font-sans);color:var(--text-body)}
.hv-signin--solo{grid-template-columns:1fr;grid-template-rows:1fr;min-height:0;border-radius:var(--radius-2xl);box-shadow:var(--shadow-elevated)}
.hv-signin__plate{position:relative;padding:38px;display:flex;flex-direction:column;overflow:hidden;background:linear-gradient(158deg,#1C2B22 0%,var(--surface-dark) 54%,#0B120E 100%)} /* drift-ok: plate-local dark ramp per spec — no token equivalent */
.hv-signin__glow{position:absolute;width:520px;height:520px;left:-170px;top:-190px;border-radius:var(--radius-pill);background:radial-gradient(circle,rgba(0,238,127,0.22) 0%,transparent 66%)}
.hv-signin__dots{position:absolute;inset:0;opacity:0.6;background-image:radial-gradient(circle at 1px 1px,rgba(255,255,255,0.10) 1px,transparent 0);background-size:24px 24px;mask-image:radial-gradient(at 20% 10%,#000 0%,transparent 74%);-webkit-mask-image:radial-gradient(at 20% 10%,#000 0%,transparent 74%)}
.hv-signin__platein{position:relative;display:flex;flex-direction:column;height:100%}
.hv-signin__lock{display:flex;align-items:center;gap:10px}
.hv-signin__lock img{height:20px;display:block}
.hv-signin__line{margin-top:auto;font-size:28px;font-weight:500;letter-spacing:-0.028em;line-height:1.22;color:var(--white);max-width:18ch}
.hv-signin__platesub{margin-top:12px;font-size:13.5px;line-height:1.65;color:rgba(255,255,255,0.58);max-width:36ch}
.hv-signin__links{margin-top:34px;display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.hv-signin__links a{font-size:11.5px;color:rgba(255,255,255,0.58);text-decoration:none;transition:color var(--transition-soft)}
.hv-signin__links a:hover{color:var(--white)}
.hv-signin__sep{width:3px;height:3px;border-radius:var(--radius-pill);background:rgba(255,255,255,0.28);flex:none}
.hv-signin__form{background:var(--surface-card);padding:38px;display:flex;align-items:center;justify-content:center}
.hv-signin--glass .hv-signin__form{background:var(--glass-fill);-webkit-backdrop-filter:var(--glass-blur);backdrop-filter:var(--glass-blur)}
.hv-signin--glass.hv-signin--solo{box-shadow:var(--shadow-glass-ring)}
.hv-signin__formin{width:100%;max-width:340px}
.hv-signin__h{margin:0;font-size:28px;font-weight:650;letter-spacing:-0.028em;line-height:1.15;color:var(--ink-950)}
.hv-signin__sub{margin:8px 0 0;font-size:13.5px;line-height:1.6;color:var(--ink-600)}
.hv-signin__fields{margin-top:34px;display:flex;flex-direction:column;gap:12px}
.hv-signin__lblrow{display:flex;align-items:baseline;justify-content:space-between;padding-bottom:7px}
.hv-signin__lbl{font-size:12px;font-weight:600;color:var(--ink-700)}
.hv-signin__lnk{appearance:none;border:none;background:none;padding:0;font-family:var(--font-sans);font-size:11.5px;font-weight:500;color:var(--text-muted);cursor:pointer;transition:color var(--transition-soft)}
.hv-signin__lnk:hover{color:var(--ink-900)}
.hv-signin__lnk:focus-visible{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-signin__fld{width:100%;box-sizing:border-box;height:42px;padding:0 14px;border:none;border-radius:var(--radius-control);background:var(--surface-card);box-shadow:inset 0 0 0 1px var(--border-strong);font-family:var(--font-sans);font-size:14px;color:var(--ink-900);caret-color:var(--green-500);outline:none;transition:box-shadow var(--transition-soft)}
.hv-signin__fld::placeholder{color:var(--text-faint)}
.hv-signin__fld:hover:not(:focus):not(:read-only){box-shadow:inset 0 0 0 1px var(--ink-300)}
.hv-signin__fld:focus{box-shadow:inset 0 0 0 1.5px var(--green-600),0 0 0 4px rgba(0,163,82,0.13)}
.hv-signin__fld--bad{box-shadow:inset 0 0 0 1.5px var(--red-500)}
.hv-signin__fld--bad:focus{box-shadow:inset 0 0 0 1.5px var(--red-500),0 0 0 4px rgba(0,163,82,0.13)}
.hv-signin__err{display:flex;align-items:flex-start;gap:7px;margin-top:8px;font-size:12px;line-height:1.5;color:var(--red-700)}
.hv-signin__err svg{flex:none;margin-top:3px}
.hv-signin__ctarow{margin-top:20px}
.hv-signin__cta{width:100%;height:42px;border:none;border-radius:var(--radius-pill);background:var(--action-primary);color:var(--on-action-primary);font-family:var(--font-sans);font-size:13.5px;font-weight:600;letter-spacing:-0.005em;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:9px;transition:background-color var(--transition-soft)}
.hv-signin__cta:hover:not(:disabled){background:var(--action-primary-hover)}
.hv-signin__cta:active{filter:brightness(0.94)}
.hv-signin__cta:disabled{opacity:0.4;cursor:not-allowed;filter:none}
.hv-signin__cta:focus-visible{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-signin__spin{width:13px;height:13px;border-radius:var(--radius-pill);box-shadow:inset 0 0 0 1.5px rgba(255,255,255,0.3);border-top:1.5px solid var(--white);display:inline-block;box-sizing:border-box;animation:hv-signin-spin var(--duration-spinner) linear infinite}
@keyframes hv-signin-spin{to{transform:rotate(360deg)}}
.hv-signin__provs{margin-top:34px;display:flex;flex-direction:column;gap:12px}
.hv-signin__sso{width:100%;height:42px;border:none;border-radius:var(--radius-pill);background:var(--surface-card);box-shadow:inset 0 0 0 1px var(--border-strong);font-family:var(--font-sans);font-size:13.5px;font-weight:550;color:var(--ink-900);cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:10px;transition:box-shadow var(--transition-soft)}
.hv-signin__sso:hover:not(:disabled){box-shadow:inset 0 0 0 1px var(--ink-300)}
.hv-signin__sso:active{filter:brightness(0.94)}
.hv-signin__sso:disabled{opacity:0.4;cursor:not-allowed;filter:none}
.hv-signin__sso:focus-visible{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-signin__or{display:flex;align-items:center;gap:14px;margin:20px 0}
.hv-signin__or span{font-size:11.5px;color:var(--text-faint)}
.hv-signin__or i{flex:1;height:1px;background:var(--hairline-strong)}
.hv-signin__legal{margin-top:20px;padding-top:18px;border-top:1px solid var(--hairline);display:flex;align-items:flex-start;gap:8px;font-size:11.5px;line-height:1.55;color:var(--ink-600)}
.hv-signin__legal svg{flex:none;margin-top:3px}
.hv-signin__back{appearance:none;border:none;background:none;padding:0;display:inline-flex;align-items:center;gap:6px;font-family:var(--font-sans);font-size:12px;font-weight:550;color:var(--text-muted);cursor:pointer;transition:color var(--transition-soft)}
.hv-signin__back:hover{color:var(--ink-900)}
.hv-signin__back:focus-visible{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-signin__back+.hv-signin__h{margin-top:20px}
.hv-signin__sent{margin-top:34px;display:flex;align-items:flex-start;gap:11px;padding:16px;border-radius:var(--radius-lg);background:var(--status-positive-bg)}
.hv-signin__sent svg{flex:none;margin-top:3px}
.hv-signin__sent-t{font-size:13px;font-weight:650;color:var(--green-800)}
.hv-signin__sent-b{margin-top:3px;font-size:12.5px;line-height:1.55;color:var(--green-800);opacity:0.85}
.hv-signin__mlinks{display:none;margin-top:20px;padding-top:18px;border-top:1px solid var(--hairline);align-items:center;justify-content:center;gap:16px;flex-wrap:wrap}
.hv-signin__mlinks a{font-size:11.5px;color:var(--text-muted);text-decoration:none;transition:color var(--transition-soft)}
.hv-signin__mlinks a:hover{color:var(--ink-900)}
.hv-signin__mlinks .hv-signin__sep{background:var(--ink-300)}
@media (max-width:860px){
  .hv-signin{grid-template-columns:1fr;grid-template-rows:auto 1fr}
  .hv-signin__plate{padding:20px 22px}
  .hv-signin__line{margin-top:20px;font-size:21px;max-width:26ch}
  .hv-signin__platesub{display:none}
  .hv-signin__links{display:none}
  .hv-signin__form{padding:28px 22px 24px}
  .hv-signin__formin{max-width:none}
  .hv-signin__h{font-size:24px}
  .hv-signin__mlinks{display:flex}
}
@media (prefers-reduced-motion:reduce){.hv-signin__spin{animation-duration:2.4s}}
`;
function hvEnsureSignInCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-signin-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-signin-css';
  s.textContent = hvSignInCss;
  document.head.appendChild(s);
}

/* Built-in provider marks. Google's brand colours are literal by that brand's own rule. */
const HV_SIGNIN_PROVIDER_ICONS = {
  google: (
    <svg width="16" height="16" viewBox="0 0 18 18" aria-hidden="true">
      <path fill="#4285F4" d="M17.6 9.2c0-.6-.1-1.3-.2-1.8H9v3.5h4.8a4.1 4.1 0 0 1-1.8 2.7v2.2h2.9c1.7-1.6 2.7-3.9 2.7-6.6z" /> {/* drift-ok: Google brand mark colour */}
      <path fill="#34A853" d="M9 18c2.4 0 4.5-.8 6-2.2l-2.9-2.2c-.8.5-1.8.9-3.1.9-2.4 0-4.4-1.6-5.2-3.8H.9v2.3A9 9 0 0 0 9 18z" /> {/* drift-ok: Google brand mark colour */}
      <path fill="#FBBC05" d="M3.8 10.7a5.4 5.4 0 0 1 0-3.4V5H.9a9 9 0 0 0 0 8l2.9-2.3z" /> {/* drift-ok: Google brand mark colour */}
      <path fill="#EA4335" d="M9 3.6c1.3 0 2.5.5 3.4 1.3l2.6-2.6A9 9 0 0 0 .9 5l2.9 2.3C4.6 5.2 6.6 3.6 9 3.6z" /> {/* drift-ok: Google brand mark colour */}
    </svg>
  ),
  github: (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="var(--ink-900)" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.67 0 8.2c0 3.62 2.29 6.69 5.47 7.77.4.08.55-.18.55-.4l-.01-1.42c-2.23.5-2.7-1.1-2.7-1.1-.36-.96-.89-1.21-.89-1.21-.73-.51.05-.5.05-.5.8.06 1.23.85 1.23.85.72 1.26 1.88.9 2.34.68.07-.53.28-.9.51-1.1-1.78-.21-3.65-.91-3.65-4.06 0-.9.31-1.63.82-2.2-.08-.21-.36-1.05.08-2.18 0 0 .67-.22 2.2.84a8.2 8.2 0 0 1 4 0c1.53-1.06 2.2-.84 2.2-.84.44 1.13.16 1.97.08 2.18.51.57.82 1.3.82 2.2 0 3.16-1.87 3.85-3.66 4.05.29.26.54.75.54 1.52l-.01 2.25c0 .22.14.48.55.4A8.21 8.21 0 0 0 16 8.2C16 3.67 12.42 0 8 0z" />
    </svg>
  )
};

const hvSignInErrIcon = (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
    <circle cx="8" cy="8" r="6" />
    <path d="M8 5.2v3.4M8 10.6v.2" />
  </svg>
);
const hvSignInLockIcon = (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3.5" y="7" width="9" height="6.5" rx="1.6" />
    <path d="M5.6 7V5a2.4 2.4 0 0 1 4.8 0v2" />
  </svg>
);
const hvSignInBackIcon = (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 3 5 8l5 5" />
  </svg>
);
const hvSignInCheckIcon = (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="var(--green-700)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 8.5 6.5 12 13 4.5" />
  </svg>
);

const HV_SIGNIN_GATE_DEFAULTS = {
  password: { cta: 'Sign in', recover: 'Forgot?' },
  magic: { cta: 'Email me a link', recover: null },
  key: { cta: 'Sign in', recover: 'Need access?' },
  sso: { cta: null, recover: null }
};

/*
 * gate: 'password' | 'magic' | 'key' | 'sso' — one frame, four gates.
 * The verb enables on the first character, never on validity. One error message for every
 * failure — it never reveals whether the account exists. Recovery resolves IN PLACE.
 */
export function SignIn({
  logo, logoSrc, logoAlt = '', line, sub, links = [], plate = true, glass = false,
  gate = 'magic', providers = [],
  title = 'Sign in', subtitle,
  emailLabel = 'Work email', emailPlaceholder = 'name@company.com',
  passwordLabel = 'Password', keyLabel = 'Access key', keyPlaceholder = 'Paste your key',
  cta, busy = false, busyLabel = 'Signing in', error,
  sessionNote, defaultEmail = '', initialView = 'gate',
  recovery = {},
  onSubmit, onProvider, onRecoverSubmit
}) {
  hvEnsureSignInCss();
  const uid = React.useId();
  const gateDef = HV_SIGNIN_GATE_DEFAULTS[gate] || HV_SIGNIN_GATE_DEFAULTS.magic;
  const [view, setView] = React.useState(initialView);
  const [email, setEmail] = React.useState(defaultEmail);
  const [password, setPassword] = React.useState('');
  const [keyVal, setKeyVal] = React.useState('');
  const [recEmail, setRecEmail] = React.useState('');

  const hasEmail = gate === 'password' || gate === 'magic';
  const hasPassword = gate === 'password';
  const hasKey = gate === 'key';
  const typed = (!hasEmail || email.length > 0) && (!hasPassword || password.length > 0) && (!hasKey || keyVal.length > 0);
  const blocked = !typed || busy;
  const note = sessionNote !== undefined ? sessionNote
    : (gate === 'key' ? 'Held for this browser session only — never written to the device.' : null);
  const rec = {
    title: 'Request access', sub: null, cta: 'Send request',
    sentTitle: 'Check your inbox', sentBoxTitle: 'Request sent',
    sentBody: 'If your address is on the account, a link is on its way.',
    ...recovery
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (blocked) return;
    if (onSubmit) onSubmit({ email, password, key: keyVal });
  };
  const submitRecover = (ev) => {
    ev.preventDefault();
    if (onRecoverSubmit) onRecoverSubmit(recEmail);
    setView('sent');
  };

  const mark = logo || (logoSrc ? <img src={logoSrc} alt={logoAlt} /> : null);
  const errId = `${uid}-err`;

  const field = (props) => (
    <input
      className={`hv-signin__fld${error && view === 'gate' ? ' hv-signin__fld--bad' : ''}`}
      readOnly={busy || undefined}
      aria-invalid={error ? 'true' : 'false'}
      aria-describedby={error ? errId : undefined}
      {...props}
    />
  );

  const errorRow = error ? (
    <div className="hv-signin__err" id={errId} role="alert">
      {hvSignInErrIcon}
      <span>{error}</span>
    </div>
  ) : null;

  const providerButtons = providers.length ? (
    <div className="hv-signin__provs">
      {providers.map((p) => (
        <button
          key={p.id || p.label} type="button" className="hv-signin__sso"
          disabled={busy || undefined}
          onClick={() => { if (p.onClick) p.onClick(); else if (onProvider) onProvider(p.id); }}
        >
          {p.icon || HV_SIGNIN_PROVIDER_ICONS[p.id] || null}
          {p.label}
        </button>
      ))}
    </div>
  ) : null;

  const recoverLink = gateDef.recover ? (
    <button type="button" className="hv-signin__lnk" onClick={() => setView('recover')}>{gateDef.recover}</button>
  ) : null;

  const gateView = (
    <form onSubmit={submit} noValidate>
      <h2 className="hv-signin__h">{title}</h2>
      {subtitle ? <p className="hv-signin__sub">{subtitle}</p> : null}
      {providerButtons}
      {providers.length && gate !== 'sso' ? <div className="hv-signin__or"><i></i><span>or</span><i></i></div> : null}
      {gate !== 'sso' ? (
        <div className="hv-signin__fields" style={providers.length ? { marginTop: 0 } : undefined}>
          {hasEmail ? (
            <div>
              <div className="hv-signin__lblrow">
                <label className="hv-signin__lbl" htmlFor={`${uid}-email`}>{emailLabel}</label>
                {!hasPassword ? recoverLink : null}
              </div>
              {field({ id: `${uid}-email`, type: 'email', placeholder: emailPlaceholder, value: email, autoComplete: 'email', autoFocus: true, onChange: (ev) => setEmail(ev.target.value) })}
            </div>
          ) : null}
          {hasPassword ? (
            <div>
              <div className="hv-signin__lblrow">
                <label className="hv-signin__lbl" htmlFor={`${uid}-pass`}>{passwordLabel}</label>
                {recoverLink}
              </div>
              {field({ id: `${uid}-pass`, type: 'password', value: password, autoComplete: 'current-password', onChange: (ev) => setPassword(ev.target.value) })}
            </div>
          ) : null}
          {hasKey ? (
            <div>
              <div className="hv-signin__lblrow">
                <label className="hv-signin__lbl" htmlFor={`${uid}-key`}>{keyLabel}</label>
                {recoverLink}
              </div>
              {field({ id: `${uid}-key`, type: 'password', placeholder: keyPlaceholder, value: keyVal, autoComplete: 'off', autoFocus: true, onChange: (ev) => setKeyVal(ev.target.value) })}
            </div>
          ) : null}
          {errorRow}
        </div>
      ) : null}
      {gate !== 'sso' ? (
        <div className="hv-signin__ctarow">
          <button type="submit" className="hv-signin__cta" disabled={blocked}>
            {busy ? <span className="hv-signin__spin" data-motion="essential"></span> : null}
            {busy ? busyLabel : (cta || gateDef.cta)}
          </button>
        </div>
      ) : null}
      {note ? <div className="hv-signin__legal">{hvSignInLockIcon}<span>{note}</span></div> : null}
    </form>
  );

  const recoverView = (
    <div>
      <button type="button" className="hv-signin__back" onClick={() => setView('gate')}>{hvSignInBackIcon}Back to sign in</button>
      <h2 className="hv-signin__h">{view === 'sent' ? rec.sentTitle : rec.title}</h2>
      {view === 'sent'
        ? null
        : (rec.sub ? <p className="hv-signin__sub">{rec.sub}</p> : null)}
      {view === 'recover' ? (
        <form onSubmit={submitRecover} noValidate>
          <div className="hv-signin__fields">
            <div>
              <div className="hv-signin__lblrow">
                <label className="hv-signin__lbl" htmlFor={`${uid}-rec`}>{emailLabel}</label>
              </div>
              <input id={`${uid}-rec`} className="hv-signin__fld" type="email" placeholder={emailPlaceholder} value={recEmail} autoComplete="email" autoFocus onChange={(ev) => setRecEmail(ev.target.value)} />
            </div>
          </div>
          <div className="hv-signin__ctarow">
            <button type="submit" className="hv-signin__cta">{rec.cta}</button>
          </div>
        </form>
      ) : (
        <div className="hv-signin__sent">
          {hvSignInCheckIcon}
          <span>
            <span className="hv-signin__sent-t">{rec.sentBoxTitle}</span>
            <span className="hv-signin__sent-b" style={{ display: 'block' }}>{rec.sentBody}</span>
          </span>
        </div>
      )}
    </div>
  );

  const utilityLinks = (cls) => links.length ? (
    <div className={cls}>
      {links.map((l, i) => (
        <React.Fragment key={l.label}>
          {i > 0 ? <span className="hv-signin__sep"></span> : null}
          <a href={l.href || '#'} onClick={l.onClick}>{l.label}</a>
        </React.Fragment>
      ))}
    </div>
  ) : null;

  return (
    <div className={`hv-signin${plate ? '' : ' hv-signin--solo'}${glass ? ' hv-signin--glass' : ''}`}>
      {plate ? (
        <div className="hv-signin__plate">
          <span className="hv-signin__glow"></span>
          <span className="hv-signin__dots"></span>
          <div className="hv-signin__platein">
            <div className="hv-signin__lock">{mark}</div>
            {line ? <div className="hv-signin__line">{line}</div> : null}
            {sub ? <div className="hv-signin__platesub">{sub}</div> : null}
            {utilityLinks('hv-signin__links')}
          </div>
        </div>
      ) : null}
      <div className="hv-signin__form">
        <div className="hv-signin__formin">
          {view === 'gate' ? gateView : recoverView}
          {plate ? utilityLinks('hv-signin__mlinks') : null}
        </div>
      </div>
    </div>
  );
}
