/* Hivory Transcript — read-only conversation record: the live chat with the verbs taken out.
 *
 * The client's words are quoted verbatim in an ink-wash bubble (radius 16/16/5/16,
 * right-aligned, max 78%); the engine speaks as plain page text behind a 28px gutter
 * holding the 16px hex mark, so every voice shares one left edge. Steps lines never
 * expand; artifact cards are inert and carry OUTCOMES ("published 25 Jul, 14:00"),
 * never live states. No composer, ever — one way out, the footer session link.
 *
 * Time standard: `when` accepts a preformatted string, or a Date/epoch rendered per
 * the platform clock — today "14:00", any other day "24 Jul" (tabular-nums).
 * Truncation is honest: `limit` fades the last shown message and states "N of M" —
 * the words themselves are never shortened.
 */
const hvTranscriptCss = `
.hv-transcript{width:100%;max-width:520px;font-family:var(--font-sans);color:var(--text-body)}
.hv-transcript__head{display:flex;align-items:baseline;gap:10px;padding-bottom:12px;box-shadow:inset 0 -1px 0 var(--hairline)}
.hv-transcript__title{font-size:12.5px;font-weight:650}
.hv-transcript__spacer{flex:1}
.hv-transcript__when{font-size:11px;color:var(--text-faint);font-variant-numeric:tabular-nums;white-space:nowrap}
.hv-transcript__msg{display:grid;grid-template-columns:28px 1fr;margin-top:20px}
.hv-transcript__msg--you{display:flex;justify-content:flex-end}
.hv-transcript__msg--fade{-webkit-mask-image:linear-gradient(to bottom,black 30%,transparent 98%);mask-image:linear-gradient(to bottom,black 30%,transparent 98%)}
.hv-transcript__gut{padding-top:2px}
.hv-transcript__bubble{max-width:78%;border-radius:16px 16px 5px 16px;background:rgba(23,24,26,0.055);padding:11px 14px;font-size:13.5px;line-height:1.6;color:var(--text-body);box-sizing:border-box}
.hv-transcript__engine{display:block;font-size:13.5px;line-height:1.7;color:var(--text-body)}
.hv-transcript__steps{margin-top:8px;display:inline-flex;align-items:center;gap:6px;font-size:11px;color:var(--text-muted);font-variant-numeric:tabular-nums}
.hv-transcript__art{margin-top:12px;display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:var(--radius-lg);background:var(--surface-card);box-shadow:var(--shadow-card)}
.hv-transcript__articon{width:24px;height:24px;border-radius:7px;background:var(--ink-50);display:inline-flex;align-items:center;justify-content:center;flex:none;color:var(--ink-600)}
.hv-transcript__artbody{flex:1;min-width:0}
.hv-transcript__arttitle{display:block;font-size:12.5px;font-weight:550}
.hv-transcript__artsub{display:block;margin-top:3px;font-size:11px;color:var(--text-muted);font-variant-numeric:tabular-nums}
.hv-transcript__count{margin-top:12px;font-size:11px;color:var(--text-faint);font-variant-numeric:tabular-nums}
.hv-transcript__empty{margin-top:20px;font-size:12.5px;line-height:1.6;color:var(--text-muted)}
.hv-transcript__empty a{margin-left:6px}
.hv-transcript__foot{margin-top:20px;padding-top:12px;box-shadow:inset 0 1px 0 var(--hairline);display:flex;align-items:baseline;gap:10px}
.hv-transcript__note{font-size:11px;color:var(--text-faint)}
.hv-transcript__open,.hv-transcript__empty a{font-size:11px;font-weight:600;color:var(--green-800);text-decoration:none;transition:color var(--duration-soft) var(--ease-out)}
.hv-transcript__open:hover,.hv-transcript__empty a:hover{color:var(--green-700)}
.hv-transcript__open--btn{border:none;background:transparent;padding:0;font-family:var(--font-sans);cursor:pointer}
.hv-transcript__open:focus-visible,.hv-transcript__empty a:focus-visible{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-transcript__sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
@keyframes hv-transcript-shimmer{0%{background-position:120% 0}100%{background-position:-20% 0}}
.hv-transcript__skel{display:block;background:linear-gradient(90deg,var(--ink-100) 25%,var(--ink-50) 45%,var(--ink-100) 65%);background-size:300% 100%;border-radius:var(--radius-sm);animation:hv-transcript-shimmer var(--duration-pulse) var(--ease-out) infinite}
.hv-transcript__skel--bubble{border-radius:16px 16px 5px 16px}
@media (prefers-reduced-motion: reduce){.hv-transcript__skel{animation-duration:2400ms}}
`;
function hvEnsureTranscriptCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-transcript-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-transcript-css';
  s.textContent = hvTranscriptCss;
  document.head.appendChild(s);
}

const HV_TR_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
/* Platform time standard: today = "14:00", any other day = "24 Jul". Strings pass through. */
function hvTranscriptWhen(v) {
  if (v === undefined || v === null) return '';
  if (typeof v === 'string') return v;
  const d = v instanceof Date ? v : new Date(v);
  if (isNaN(d.getTime())) return '';
  const now = new Date();
  const sameDay = d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth() && d.getDate() === now.getDate();
  if (sameDay) return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
  return d.getDate() + ' ' + HV_TR_MONTHS[d.getMonth()];
}

/* The 16px hex mark in the gutter — functional inline mark, green-600 per the mark-usage rule. */
function hvTranscriptHex() {
  return (
    <svg width="16" height="18" viewBox="0 0 16 16" fill="none" stroke="var(--green-600)" strokeWidth="1.2" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 2.6 12.68 5.3v5.4L8 13.4 3.32 10.7V5.3Z"></path>
    </svg>
  );
}

export function Transcript({
  title,
  when,
  messages = [],
  limit,
  total,
  sessionHref,
  onOpenSession,
  sessionLabel = 'Open the session ›',
  readOnlyNote = 'Read-only · this is the record',
  loading = false,
  emptyText = 'No request — this ran on a standing rule',
  emptyHref,
  emptyLinkLabel = 'Open the rule ›'
}) {
  hvEnsureTranscriptCss();
  const count = messages.length;
  const grand = total !== undefined ? total : count;
  const shown = limit !== undefined && limit < count ? messages.slice(0, limit) : messages;
  const truncated = shown.length < grand;

  const head = title || when !== undefined ? (
    <div className="hv-transcript__head">
      {title ? <span className="hv-transcript__title">{title}</span> : null}
      <span className="hv-transcript__spacer"></span>
      {when !== undefined ? <span className="hv-transcript__when">{hvTranscriptWhen(when)}</span> : null}
    </div>
  ) : null;

  const openLink = sessionHref ? (
    <a className="hv-transcript__open" href={sessionHref} onClick={onOpenSession}>{sessionLabel}</a>
  ) : onOpenSession ? (
    <button type="button" className="hv-transcript__open hv-transcript__open--btn" onClick={onOpenSession}>{sessionLabel}</button>
  ) : null;

  /* Loading — skeleton at the real measures, header stays real. Never the thinking
     spinner: that would claim the conversation is still happening. */
  if (loading) {
    return (
      <div className="hv-transcript" aria-busy="true">
        {head}
        <div className="hv-transcript__msg hv-transcript__msg--you">
          <span className="hv-transcript__skel hv-transcript__skel--bubble" data-motion="essential" style={{ width: '62%', height: 42 }}></span>
        </div>
        <div className="hv-transcript__msg">
          <span className="hv-transcript__gut"></span>
          <span>
            <span className="hv-transcript__skel" data-motion="essential" style={{ width: '100%', height: 12 }}></span>
            <span className="hv-transcript__skel" data-motion="essential" style={{ width: '84%', height: 12, marginTop: 8 }}></span>
          </span>
        </div>
        <div className="hv-transcript__msg hv-transcript__msg--you">
          <span className="hv-transcript__skel hv-transcript__skel--bubble" data-motion="essential" style={{ width: '46%', height: 42 }}></span>
        </div>
        <div className="hv-transcript__msg">
          <span className="hv-transcript__gut"></span>
          <span>
            <span className="hv-transcript__skel" data-motion="essential" style={{ width: '92%', height: 12 }}></span>
            <span className="hv-transcript__skel" data-motion="essential" style={{ width: '58%', height: 12, marginTop: 8 }}></span>
          </span>
        </div>
      </div>
    );
  }

  /* Empty — the absence is itself the provenance; never an empty frame. */
  if (!count) {
    return (
      <div className="hv-transcript">
        {head}
        <div className="hv-transcript__empty">
          {emptyText}
          {emptyHref ? <a href={emptyHref}>{emptyLinkLabel}</a> : null}
        </div>
      </div>
    );
  }

  return (
    <div className="hv-transcript">
      {head}
      {shown.map((m, i) => {
        const fade = truncated && i === shown.length - 1;
        if (m.from === 'you') {
          return (
            <div key={i} className={'hv-transcript__msg hv-transcript__msg--you' + (fade ? ' hv-transcript__msg--fade' : '')}>
              <span className="hv-transcript__sr">You: </span>
              <span className="hv-transcript__bubble">{m.text}</span>
            </div>
          );
        }
        return (
          <div key={i} className={'hv-transcript__msg' + (fade ? ' hv-transcript__msg--fade' : '')}>
            <span className="hv-transcript__gut">{hvTranscriptHex()}</span>
            <span>
              <span className="hv-transcript__sr">Engine: </span>
              <span className="hv-transcript__engine">{m.text}</span>
              {m.steps ? (
                <span className="hv-transcript__steps">
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 3 5 5-5 5"></path></svg>
                  {m.steps}
                </span>
              ) : null}
              {m.artifact ? (
                <span className="hv-transcript__art">
                  <span className="hv-transcript__articon" aria-hidden="true">
                    {m.artifact.icon || (
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 1.8H4.2v12.4h7.6V4.5Z"></path><path d="M9.5 1.8v2.7h2.3"></path></svg>
                    )}
                  </span>
                  <span className="hv-transcript__artbody">
                    <span className="hv-transcript__arttitle">{m.artifact.title}</span>
                    {m.artifact.outcome ? <span className="hv-transcript__artsub">{m.artifact.outcome}</span> : null}
                  </span>
                </span>
              ) : null}
            </span>
          </div>
        );
      })}
      {truncated ? (
        <div className="hv-transcript__count">{shown.length} of {grand} messages — the rest lives in the session</div>
      ) : null}
      <div className="hv-transcript__foot">
        <span className="hv-transcript__note">{readOnlyNote}</span>
        <span className="hv-transcript__spacer"></span>
        {openLink}
      </div>
    </div>
  );
}
