/* Hivory SignatureBlock — type-to-sign: the typed name becomes the signature preview.
 *
 * The only screen with legal weight. Five parts in one order: summary (the deal
 * restated), name field ("Full legal name"), signature line (the typed name at 27px
 * italic 300 over a 1px ink-200 rule — the system face, NEVER a script webfont: a
 * fake handwriting face makes a typed name pretend to be ink), authorisation
 * checkbox (this IS the confirmation — no modal follows), and the act (the single
 * brand-green fill, disabled until name + authorisation exist, with one plain line
 * beneath removing the fear it creates). One component renders blank and signed.
 *
 * Composes the DS Input, Checkbox, Button and Spinner from the bundle namespace at
 * render time (no imports); falls back to bare native controls outside the bundle.
 * No motion on the signature itself — animating a legal mark implies a ceremony
 * that has not happened yet. The preview is aria-hidden (it repeats the field).
 */
const hvSignatureBlockCss = `
.hv-sig{max-width:480px;font-family:var(--font-sans);color:var(--text-body)}
.hv-sig__summary{border-radius:var(--radius-xl);background:var(--surface-card);box-shadow:var(--shadow-card);padding:6px 20px}
.hv-sig__srow{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 0;box-shadow:inset 0 -1px 0 var(--hairline)}
.hv-sig__srow:last-child{box-shadow:none}
.hv-sig__slabel{font-size:var(--text-sm);color:var(--text-muted)}
.hv-sig__svalue{font-size:var(--text-row);font-weight:var(--weight-semibold);text-align:right;font-variant-numeric:tabular-nums}
.hv-sig__eyebrow{margin-top:34px;font-size:var(--text-meta);font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--green-700)}
.hv-sig__eyebrow--first{margin-top:0}
.hv-sig__field{margin-top:12px;max-width:340px}
.hv-sig__line{margin-top:20px;min-height:44px;padding:0 4px 10px;display:flex;align-items:flex-end;box-shadow:inset 0 -1px 0 var(--ink-200);box-sizing:border-box}
.hv-sig__ink{font-style:italic;font-weight:300;font-size:27px;letter-spacing:0.01em;line-height:1.1;color:var(--ink-900)}
.hv-sig__caption{margin-top:8px;font-size:var(--text-meta);color:var(--text-faint)}
.hv-sig__auth{margin-top:20px}
.hv-sig__act{margin-top:34px}
.hv-sig__note{margin-top:8px;font-size:var(--text-meta);color:var(--text-faint)}
.hv-sig__ctahold{position:relative;display:inline-flex;align-items:center;justify-content:center}
.hv-sig__ctahold--busy .hv-sig__ctalabel{visibility:hidden}
.hv-sig__ctaspin{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.hv-sig__nativeinput{height:34px;padding:0 12px;width:100%;box-sizing:border-box;font-family:var(--font-sans);font-size:13.5px;color:var(--ink-900);background:var(--surface-card);border:none;border-radius:var(--radius-control);box-shadow:inset 0 0 0 1px var(--border-strong)}
.hv-sig__nativeauth{display:inline-flex;align-items:center;gap:8px;font-size:13.5px;color:var(--ink-900);cursor:pointer}
`;
function hvEnsureSignatureBlockCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-signatureblock-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-signatureblock-css';
  s.textContent = hvSignatureBlockCss;
  document.head.appendChild(s);
}

export function SignatureBlock({
  summary = [],
  eyebrow = 'Signature',
  namePlaceholder = 'Full legal name',
  name,
  defaultName = '',
  onNameChange,
  authLabel = 'I’m authorized to sign',
  authorized,
  defaultAuthorized = false,
  onAuthorizedChange,
  caption = 'Signature — drawn from your typed name',
  ctaLabel = 'Sign & accept',
  note = 'Signing starts onboarding — no payment is taken today.',
  signed,
  defaultSigned = false,
  signedLabel,
  signedNote,
  onSign,
  loading = false
}) {
  hvEnsureSignatureBlockCss();
  const ns = (typeof window !== 'undefined' && window.HivoryDesignSystem_354905) || {};
  const DsInput = ns.Input;
  const DsCheckbox = ns.Checkbox;
  const DsButton = ns.Button;
  const DsSpinner = ns.Spinner;

  const [nameState, setNameState] = React.useState(defaultName);
  const [authState, setAuthState] = React.useState(defaultAuthorized);
  const [signedState, setSignedState] = React.useState(defaultSigned);
  const theName = name !== undefined ? name : nameState;
  const theAuth = authorized !== undefined ? authorized : authState;
  const isSigned = signed !== undefined ? signed : signedState;
  const trimmed = (theName || '').trim();
  const ready = trimmed.length > 1 && theAuth;
  const locked = isSigned || loading;    /* field + checkbox go read-only mid-commit and after */

  const handleName = (e) => {
    if (name === undefined) setNameState(e.target.value);
    if (onNameChange) onNameChange(e.target.value, e);
  };
  const handleAuth = (e) => {
    const v = e && e.target ? e.target.checked : !theAuth;
    if (authorized === undefined) setAuthState(v);
    if (onAuthorizedChange) onAuthorizedChange(v, e);
  };
  const handleSign = () => {
    if (!ready || locked) return;
    if (signed === undefined) setSignedState(true);
    if (onSign) onSign(trimmed);
  };

  const ctaText = isSigned ? (signedLabel || 'Signed') : ctaLabel;
  const noteText = isSigned ? (signedNote || note) : note;

  return (
    <div className="hv-sig">
      {summary.length ? (
        <div className="hv-sig__summary">
          {summary.map((row, i) => (
            <div key={i} className="hv-sig__srow">
              <span className="hv-sig__slabel">{row.label}</span>
              <span className="hv-sig__svalue">{row.value}</span>
            </div>
          ))}
        </div>
      ) : null}

      {eyebrow ? <div className={'hv-sig__eyebrow' + (summary.length ? '' : ' hv-sig__eyebrow--first')}>{eyebrow}</div> : null}

      <div className="hv-sig__field">
        {DsInput ? (
          <DsInput placeholder={namePlaceholder} value={theName} onChange={handleName} disabled={locked} />
        ) : (
          <input className="hv-sig__nativeinput" placeholder={namePlaceholder} value={theName} onChange={handleName} disabled={locked} />
        )}
      </div>

      {/* The signature line — fixed 44px height whether empty or filled: a rule that
          grows as you type would move the button under the cursor. aria-hidden: it
          repeats the field above, and hearing your own name twice is noise. */}
      <div className="hv-sig__line" aria-hidden="true">
        <span className="hv-sig__ink">{trimmed}</span>
      </div>
      <div className="hv-sig__caption">{caption}</div>

      <div className="hv-sig__auth">
        {DsCheckbox ? (
          <DsCheckbox label={authLabel} checked={theAuth} onChange={handleAuth} disabled={locked} />
        ) : (
          <label className="hv-sig__nativeauth">
            <input type="checkbox" checked={theAuth} onChange={handleAuth} disabled={locked} />
            {authLabel}
          </label>
        )}
      </div>

      <div className="hv-sig__act">
        {DsButton ? (
          <DsButton variant="brand" size="lg" disabled={!ready || locked} onClick={handleSign}>
            <span className={'hv-sig__ctahold' + (loading ? ' hv-sig__ctahold--busy' : '')}>
              <span className="hv-sig__ctalabel">{ctaText}</span>
              {loading ? (
                <span className="hv-sig__ctaspin">{DsSpinner ? <DsSpinner size={14} tone="ink" /> : null}</span>
              ) : null}
            </span>
          </DsButton>
        ) : (
          <button type="button" disabled={!ready || locked} onClick={handleSign}>{ctaText}</button>
        )}
      </div>
      <div className="hv-sig__note">{noteText}</div>
    </div>
  );
}
