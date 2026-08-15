/* @ds-bundle: {"format":3,"namespace":"HivoryDesignSystem_354905","components":[{"name":"Accordion","sourcePath":"components/Accordion/Accordion.jsx"},{"name":"Avatar","sourcePath":"components/Avatar/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/Avatar/Avatar.jsx"},{"name":"Badge","sourcePath":"components/Badge/Badge.jsx"},{"name":"Button","sourcePath":"components/Button/Button.jsx"},{"name":"CapMeter","sourcePath":"components/CapMeter/CapMeter.jsx"},{"name":"Card","sourcePath":"components/Card/Card.jsx"},{"name":"Scorecard","sourcePath":"components/Card/Card.jsx"},{"name":"Stat","sourcePath":"components/Card/Card.jsx"},{"name":"ChartLegend","sourcePath":"components/Charts/ChartLegend.jsx"},{"name":"ChartTooltip","sourcePath":"components/Charts/ChartTooltip.jsx"},{"name":"DateRangePicker","sourcePath":"components/DateRangePicker/DateRangePicker.jsx"},{"name":"FilterSelect","sourcePath":"components/FilterSelect/FilterSelect.jsx"},{"name":"Checkbox","sourcePath":"components/FormControls/Checkbox.jsx"},{"name":"Switch","sourcePath":"components/FormControls/Switch.jsx"},{"name":"Textarea","sourcePath":"components/FormControls/Textarea.jsx"},{"name":"Gantt","sourcePath":"components/Gantt/Gantt.jsx"},{"name":"Icon","sourcePath":"components/Icon/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/Icon/Icon.jsx"},{"name":"ImageSlot","sourcePath":"components/ImageSlot/ImageSlot.jsx"},{"name":"Input","sourcePath":"components/Input/Input.jsx"},{"name":"Separator","sourcePath":"components/LoadingDividers/Separator.jsx"},{"name":"Skeleton","sourcePath":"components/LoadingDividers/Skeleton.jsx"},{"name":"Menu","sourcePath":"components/Menu/Menu.jsx"},{"name":"MetricChip","sourcePath":"components/Metric/MetricChip.jsx"},{"name":"DifficultyMeter","sourcePath":"components/Metric/MetricChip.jsx"},{"name":"Modal","sourcePath":"components/Modal/Modal.jsx"},{"name":"IconButton","sourcePath":"components/ReviewActions/ReviewActions.jsx"},{"name":"ReviewActions","sourcePath":"components/ReviewActions/ReviewActions.jsx"},{"name":"Select","sourcePath":"components/Select/Select.jsx"},{"name":"SidebarIcon","sourcePath":"components/Sidebar/Sidebar.jsx"},{"name":"Sidebar","sourcePath":"components/Sidebar/Sidebar.jsx"},{"name":"SignIn","sourcePath":"components/SignIn/SignIn.jsx"},{"name":"SignatureBlock","sourcePath":"components/SignatureBlock/SignatureBlock.jsx"},{"name":"Spinner","sourcePath":"components/Spinner/Spinner.jsx"},{"name":"PulseDot","sourcePath":"components/Spinner/Spinner.jsx"},{"name":"SplitButton","sourcePath":"components/SplitButton/SplitButton.jsx"},{"name":"StatCard","sourcePath":"components/StatCard/StatCard.jsx"},{"name":"StepTimeline","sourcePath":"components/StepTimeline/StepTimeline.jsx"},{"name":"Stepper","sourcePath":"components/Stepper/Stepper.jsx"},{"name":"Table","sourcePath":"components/Table/Table.jsx"},{"name":"DataTable","sourcePath":"components/Table/Table.jsx"},{"name":"Tabs","sourcePath":"components/Tabs/Tabs.jsx"},{"name":"Toast","sourcePath":"components/Toast/Toast.jsx"},{"name":"ToastStack","sourcePath":"components/Toast/Toast.jsx"},{"name":"InfoTip","sourcePath":"components/Tooltip/InfoTip.jsx"},{"name":"Tooltip","sourcePath":"components/Tooltip/Tooltip.jsx"},{"name":"Topbar","sourcePath":"components/Topbar/Topbar.jsx"},{"name":"Transcript","sourcePath":"components/Transcript/Transcript.jsx"}],"sourceHashes":{"components/Accordion/Accordion.jsx":"d63883001699","components/Avatar/Avatar.jsx":"af91860e57a0","components/Badge/Badge.jsx":"ecd83cc1929e","components/Button/Button.jsx":"5a8a0360fcb3","components/CapMeter/CapMeter.jsx":"83dc0b9763cf","components/Card/Card.jsx":"2d6ba8489a80","components/Charts/ChartLegend.jsx":"019477cc7b67","components/Charts/ChartTooltip.jsx":"8f45a76190f0","components/DateRangePicker/DateRangePicker.jsx":"6d4a627d9cc0","components/FilterSelect/FilterSelect.jsx":"2660394ebdb4","components/FormControls/Checkbox.jsx":"188a8d9c28e6","components/FormControls/Switch.jsx":"cb43564c512a","components/FormControls/Textarea.jsx":"be49e0726381","components/Gantt/Gantt.jsx":"8e8337bbc378","components/Icon/Icon.jsx":"24f2423182bc","components/ImageSlot/ImageSlot.jsx":"b9e577e7ea19","components/Input/Input.jsx":"dd09eb37755a","components/LoadingDividers/Separator.jsx":"cd977e095808","components/LoadingDividers/Skeleton.jsx":"a71340dc9e26","components/Menu/Menu.jsx":"eb5bc34e8d40","components/Metric/MetricChip.jsx":"bc96388b0cd0","components/Modal/Modal.jsx":"30cd1c50f098","components/ReviewActions/ReviewActions.jsx":"ccfa0161d1af","components/Select/Select.jsx":"318e84617a40","components/Sidebar/Sidebar.jsx":"f79f71710091","components/SignIn/SignIn.jsx":"ed831096d6d2","components/SignatureBlock/SignatureBlock.jsx":"2adb4f0748cb","components/Spinner/Spinner.jsx":"0121520180f9","components/SplitButton/SplitButton.jsx":"33dff875fe95","components/StatCard/StatCard.jsx":"00ab307f3194","components/StepTimeline/StepTimeline.jsx":"3d638a63c81a","components/Stepper/Stepper.jsx":"bf1982c0f634","components/Table/Table.jsx":"0227840cff12","components/Tabs/Tabs.jsx":"8ff17fcadbcf","components/Toast/Toast.jsx":"6106958dc597","components/Tooltip/InfoTip.jsx":"f282c0984fc3","components/Tooltip/Tooltip.jsx":"4f1224edbdf1","components/Topbar/Topbar.jsx":"413cb0493c34","components/Transcript/Transcript.jsx":"1e883396fbc5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HivoryDesignSystem_354905 = window.HivoryDesignSystem_354905 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/Accordion/Accordion.jsx
try { (() => {
const hvAccordionCss = `
.hv-acc{border-radius:var(--radius-xl);background:var(--surface-card);box-shadow:var(--shadow-card);overflow:hidden;font-family:var(--font-sans)}
.hv-acc__grid{display:grid;grid-template-columns:30px minmax(0,1fr) 64px 120px 24px;gap:16px;align-items:center}
.hv-acc__row + .hv-acc__row .hv-acc__head{box-shadow:inset 0 1px 0 var(--hairline)}
.hv-acc__head{width:100%;box-sizing:border-box;padding:0 20px;height:54px;background:none;border:none;font-family:var(--font-sans);text-align:left;cursor:pointer;transition:background-color var(--transition-soft),filter var(--duration-fast) var(--ease-out)}
.hv-acc__head:hover:not(:disabled){background-color:var(--hover-on-white)}
.hv-acc__head:active:not(:disabled){filter:brightness(0.94)}
.hv-acc__head:focus-visible{outline:2px solid var(--border-focus);outline-offset:-2px}
.hv-acc__row--open .hv-acc__head{background-color:var(--ink-50)}
.hv-acc__rank{font-size:var(--text-meta);color:var(--text-faint);font-variant-numeric:tabular-nums}
.hv-acc__label{font-size:var(--text-base);font-weight:var(--weight-row);color:var(--ink-900);letter-spacing:-0.008em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.hv-acc__count{text-align:right;font-size:var(--text-sm);font-weight:var(--weight-strong);color:var(--ink-900);font-variant-numeric:tabular-nums}
.hv-acc__car{display:inline-flex;justify-content:flex-end;color:var(--text-faint);transition:transform var(--duration-slow) var(--ease-glide),color var(--transition-soft)}
.hv-acc__row--open .hv-acc__car{transform:rotate(90deg);color:var(--ink-600)}
.hv-acc__head:hover:not(:disabled) .hv-acc__car{color:var(--ink-600)}
.hv-acc__track{height:8px;border-radius:var(--radius-pill);background:var(--ink-100);overflow:hidden}
.hv-acc__fill{display:block;height:100%;border-radius:var(--radius-pill);background:var(--green-600);transform-origin:left}
.hv-acc__body{padding:8px 20px 22px 66px}
.hv-acc__body .hv-acc__grid{grid-template-columns:minmax(0,1fr) 64px 120px 24px;padding:7px 0;animation:hv-acc-rise var(--duration-soft) var(--ease-out) both}
.hv-acc__body .hv-acc__fill{background:var(--ink-300);animation:hv-acc-grow var(--duration-slow) var(--ease-glide) both}
.hv-acc__name{font-size:var(--text-sm);color:var(--ink-700)}
.hv-acc__subcount{text-align:right;font-size:var(--text-sm);font-weight:var(--weight-strong);color:var(--ink-900);font-variant-numeric:tabular-nums}
.hv-acc__subrow--zero .hv-acc__name,.hv-acc__subrow--zero .hv-acc__subcount{color:var(--text-faint)}
.hv-acc__note{padding:10px 0 2px;font-size:var(--text-sm);color:var(--text-muted)}
.hv-acc__blank{padding:18px 20px;font-size:var(--text-sm);color:var(--text-muted)}
.hv-acc--loading .hv-acc__head{cursor:default}
.hv-acc__skel{display:inline-block;border-radius:var(--radius-pill);background:var(--ink-100);animation:hv-acc-pulse var(--duration-pulse) var(--ease-out) infinite}
.hv-acc__skel--count{height:12px;width:40px}
.hv-acc__skel--meter{height:8px;width:100%}
@keyframes hv-acc-grow{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@keyframes hv-acc-rise{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
@keyframes hv-acc-pulse{0%,100%{opacity:1}50%{opacity:.45}}
@media (prefers-reduced-motion: reduce){.hv-acc__skel{animation-duration:2.4s}}
`;
function hvEnsureAccordionCss() {
  if (typeof document === "undefined" || document.getElementById("hv-accordion-css")) return;
  const s = document.createElement("style");
  s.id = "hv-accordion-css";
  s.textContent = hvAccordionCss;
  document.head.appendChild(s);
}
const hvAccNum = (row) => {
  if (typeof row.value === "number") return row.value;
  if (typeof row.count === "number") return row.count;
  const n = parseFloat(row.count);
  return isNaN(n) ? 0 : n;
};
function Accordion({
  items = [],
  defaultOpen = [],
  open,
  onToggle,
  loading = false,
  emptyText = "Nothing to rank yet."
}) {
  hvEnsureAccordionCss();
  const [inner, setInner] = React.useState(defaultOpen);
  const openIds = open !== void 0 ? open : inner;
  const toggle = (id) => {
    const was = openIds.includes(id);
    const next = was ? openIds.filter((x) => x !== id) : openIds.concat(id);
    if (open === void 0) setInner(next);
    if (onToggle) onToggle(id, !was);
  };
  if (!items.length && !loading) {
    return /* @__PURE__ */ React.createElement("div", { className: "hv-acc" }, /* @__PURE__ */ React.createElement("div", { className: "hv-acc__blank" }, emptyText));
  }
  const headMax = items.reduce((m, it) => Math.max(m, hvAccNum(it)), 0) || 1;
  return /* @__PURE__ */ React.createElement("div", { className: `hv-acc${loading ? " hv-acc--loading" : ""}` }, items.map((it, i) => {
    const isOpen = !loading && openIds.includes(it.id);
    const pct = typeof it.pct === "number" ? it.pct : Math.round(hvAccNum(it) / headMax * 100);
    const rows = it.rows || [];
    const subMax = rows.reduce((m, r) => Math.max(m, hvAccNum(r)), 0) || 1;
    return /* @__PURE__ */ React.createElement("div", { key: it.id, className: `hv-acc__row${isOpen ? " hv-acc__row--open" : ""}` }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        className: "hv-acc__head hv-acc__grid",
        "aria-expanded": isOpen,
        disabled: loading,
        onClick: () => toggle(it.id)
      },
      /* @__PURE__ */ React.createElement("span", { className: "hv-acc__rank" }, it.rank ?? i + 1),
      /* @__PURE__ */ React.createElement("span", { className: "hv-acc__label" }, it.label),
      loading ? /* @__PURE__ */ React.createElement("span", { style: { textAlign: "right" } }, /* @__PURE__ */ React.createElement("span", { className: "hv-acc__skel hv-acc__skel--count", "data-motion": "essential" })) : /* @__PURE__ */ React.createElement("span", { className: "hv-acc__count" }, it.count),
      loading ? /* @__PURE__ */ React.createElement("span", { className: "hv-acc__skel hv-acc__skel--meter", "data-motion": "essential" }) : /* @__PURE__ */ React.createElement("span", { className: "hv-acc__track" }, /* @__PURE__ */ React.createElement("span", { className: "hv-acc__fill", style: { width: `${Math.max(0, Math.min(100, pct))}%` } })),
      /* @__PURE__ */ React.createElement("span", { className: "hv-acc__car" }, /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "m6 3 5 5-5 5" })))
    ), isOpen ? /* @__PURE__ */ React.createElement("div", { className: "hv-acc__body" }, it.content ? it.content : rows.length ? rows.map((r, k) => {
      const spct = typeof r.pct === "number" ? r.pct : Math.round(hvAccNum(r) / subMax * 100);
      const delay = k * 45 + "ms";
      return /* @__PURE__ */ React.createElement("div", { key: k, className: `hv-acc__grid${hvAccNum(r) === 0 ? " hv-acc__subrow--zero" : ""}`, style: { animationDelay: delay } }, /* @__PURE__ */ React.createElement("span", { className: "hv-acc__name" }, r.label), /* @__PURE__ */ React.createElement("span", { className: "hv-acc__subcount" }, r.count), /* @__PURE__ */ React.createElement("span", { className: "hv-acc__track" }, /* @__PURE__ */ React.createElement("span", { className: "hv-acc__fill", style: { width: `${Math.max(0, Math.min(100, spct))}%`, animationDelay: delay } })), /* @__PURE__ */ React.createElement("span", null));
    }) : /* @__PURE__ */ React.createElement("div", { className: "hv-acc__note" }, it.emptyNote || "Nothing beneath this yet.")) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Accordion/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/Avatar/Avatar.jsx
try { (() => {
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
  if (typeof document === "undefined" || document.getElementById("hv-avatar-css")) return;
  const s = document.createElement("style");
  s.id = "hv-avatar-css";
  s.textContent = hvAvatarCss;
  document.head.appendChild(s);
}
function hvInitials(name) {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
}
function Avatar({ src, name, size = "md", dot = false }) {
  hvEnsureAvatarCss();
  return /* @__PURE__ */ React.createElement("span", { className: `hv-avatar hv-avatar--${size}`, title: name }, src ? /* @__PURE__ */ React.createElement("img", { className: "hv-avatar__img", src, alt: name || "" }) : hvInitials(name), dot ? /* @__PURE__ */ React.createElement("span", { className: "hv-avatar__dot" }) : null);
}
function AvatarGroup({ names = [], size = "md", max = 4 }) {
  hvEnsureAvatarCss();
  const shown = names.slice(0, max);
  const extra = names.length - shown.length;
  return /* @__PURE__ */ React.createElement("span", { className: "hv-avatar-group" }, shown.map((n) => /* @__PURE__ */ React.createElement(Avatar, { key: n, name: n, size })), extra > 0 ? /* @__PURE__ */ React.createElement("span", { className: `hv-avatar hv-avatar--${size} hv-avatar--overflow` }, "+", extra) : null);
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Avatar/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/Badge/Badge.jsx
try { (() => {
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
  if (typeof document === "undefined" || document.getElementById("hv-badge-css")) return;
  const s = document.createElement("style");
  s.id = "hv-badge-css";
  s.textContent = hvBadgeCss;
  document.head.appendChild(s);
}
function Badge({ status = "neutral", dot = false, children }) {
  hvEnsureBadgeCss();
  return /* @__PURE__ */ React.createElement("span", { className: `hv-badge hv-badge--${status}` }, dot ? /* @__PURE__ */ React.createElement("span", { className: "hv-badge__dot" }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Badge/Badge.jsx", error: String((e && e.message) || e) }); }

// components/Button/Button.jsx
try { (() => {
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
  if (typeof document === "undefined" || document.getElementById("hv-button-css")) return;
  const s = document.createElement("style");
  s.id = "hv-button-css";
  s.textContent = hvButtonCss;
  document.head.appendChild(s);
}
function Button({ variant = "primary", size = "md", disabled = false, type = "button", onClick, children }) {
  hvEnsureButtonCss();
  return /* @__PURE__ */ React.createElement("button", { type, disabled, onClick, className: `hv-btn hv-btn--${variant} hv-btn--${size}` }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button/Button.jsx", error: String((e && e.message) || e) }); }

// components/CapMeter/CapMeter.jsx
try { (() => {
const hvCapMeterCss = `
.hv-capmeter{font-family:var(--font-sans);color:var(--text-body)}
.hv-capmeter__row{display:grid;grid-template-columns:110px 1fr 72px;gap:16px;align-items:center}
.hv-capmeter--bare .hv-capmeter__row{grid-template-columns:1fr 60px;gap:12px}
.hv-capmeter__label{font-size:12.5px;color:var(--text-body);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.hv-capmeter--excluded .hv-capmeter__label{color:var(--text-faint)}
.hv-capmeter__track{position:relative;height:8px;border-radius:var(--radius-pill);background:var(--ink-100);overflow:hidden}
.hv-capmeter__fill{position:absolute;left:0;top:0;bottom:0;border-radius:var(--radius-pill);background:var(--green-600);transition:width var(--duration-slow) var(--ease-glide),background var(--duration-soft) var(--ease-out)}
.hv-capmeter__fill--amber{background:var(--amber-500)}
.hv-capmeter__hatch{position:absolute;top:0;bottom:0;right:0;background:repeating-linear-gradient(135deg,var(--ink-300) 0 2px,transparent 2px 5px)}
.hv-capmeter__val{font-size:12px;text-align:right;font-variant-numeric:tabular-nums;color:var(--text-secondary);white-space:nowrap;transition:color var(--duration-soft) var(--ease-out)}
.hv-capmeter__val--capped{color:var(--ink-900);font-weight:650}
.hv-capmeter__val--excluded{font-size:var(--text-meta);color:var(--text-faint)}
.hv-capmeter__note{margin-top:8px;font-size:11.5px;line-height:1.55;color:var(--status-caution-text)}
.hv-capmeter--bare .hv-capmeter__note{padding-right:72px}
.hv-capmeter__skel{height:8px;border-radius:var(--radius-pill);background:var(--ink-100)}
.hv-capmeter__skel--val{height:12px;width:44px;justify-self:end;border-radius:var(--radius-sm)}
`;
function hvEnsureCapMeterCss() {
  if (typeof document === "undefined" || document.getElementById("hv-capmeter-css")) return;
  const s = document.createElement("style");
  s.id = "hv-capmeter-css";
  s.textContent = hvCapMeterCss;
  document.head.appendChild(s);
}
function CapMeter({ label, used = 0, cap, note, excluded = false, loading = false }) {
  hvEnsureCapMeterCss();
  const bare = label == null;
  const cls = `hv-capmeter${bare ? " hv-capmeter--bare" : ""}${excluded ? " hv-capmeter--excluded" : ""}`;
  if (loading) {
    return /* @__PURE__ */ React.createElement("div", { className: cls }, /* @__PURE__ */ React.createElement("div", { className: "hv-capmeter__row" }, bare ? null : /* @__PURE__ */ React.createElement("span", { className: "hv-capmeter__label" }, label), /* @__PURE__ */ React.createElement("span", { className: "hv-capmeter__skel" }), /* @__PURE__ */ React.createElement("span", { className: "hv-capmeter__skel hv-capmeter__skel--val" })));
  }
  if (excluded) {
    return /* @__PURE__ */ React.createElement("div", { className: cls }, /* @__PURE__ */ React.createElement("div", { className: "hv-capmeter__row" }, bare ? null : /* @__PURE__ */ React.createElement("span", { className: "hv-capmeter__label" }, label), /* @__PURE__ */ React.createElement("span", { className: "hv-capmeter__track", "aria-hidden": "true" }), /* @__PURE__ */ React.createElement("span", { className: "hv-capmeter__val hv-capmeter__val--excluded" }, "Not in your plan")));
  }
  const over = used > cap;
  const amber = used >= cap;
  const pct = cap > 0 ? Math.round((over ? cap / used : used / cap) * 100) : 0;
  return /* @__PURE__ */ React.createElement("div", { className: cls }, /* @__PURE__ */ React.createElement("div", { className: "hv-capmeter__row" }, bare ? null : /* @__PURE__ */ React.createElement("span", { className: "hv-capmeter__label" }, label), /* @__PURE__ */ React.createElement("span", { className: "hv-capmeter__track", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("span", { className: `hv-capmeter__fill${amber ? " hv-capmeter__fill--amber" : ""}`, style: { width: pct + "%" } }), over ? /* @__PURE__ */ React.createElement("span", { className: "hv-capmeter__hatch", style: { left: pct + "%" } }) : null), /* @__PURE__ */ React.createElement("span", { className: `hv-capmeter__val${amber ? " hv-capmeter__val--capped" : ""}` }, used, " of ", cap)), note && amber ? /* @__PURE__ */ React.createElement("div", { className: "hv-capmeter__note" }, note) : null);
}
Object.assign(__ds_scope, { CapMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/CapMeter/CapMeter.jsx", error: String((e && e.message) || e) }); }

// components/Card/Card.jsx
try { (() => {
const hvCardCss = `
.hv-card{background:var(--surface-card);border-radius:var(--radius-xl);box-shadow:var(--shadow-card);font-family:var(--font-sans);box-sizing:border-box}
.hv-card__head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding:16px 18px 0}
.hv-card__title{margin:0;font-size:14.5px;font-weight:600;letter-spacing:-0.01em;color:var(--ink-950)}
.hv-card__sub{margin:3px 0 0;font-size:12.5px;color:var(--text-muted)}
.hv-card__body{padding:16px 18px}
.hv-card--flush .hv-card__body{padding:0}
`;
function hvEnsureCardCss() {
  if (typeof document === "undefined" || document.getElementById("hv-card-css")) return;
  const s = document.createElement("style");
  s.id = "hv-card-css";
  s.textContent = hvCardCss;
  document.head.appendChild(s);
}
function Card({ title, subtitle, actions, flush = false, children }) {
  hvEnsureCardCss();
  const hasHead = title || subtitle || actions;
  return /* @__PURE__ */ React.createElement("section", { className: `hv-card${flush ? " hv-card--flush" : ""}` }, hasHead ? /* @__PURE__ */ React.createElement("header", { className: "hv-card__head" }, /* @__PURE__ */ React.createElement("div", null, title ? /* @__PURE__ */ React.createElement("h3", { className: "hv-card__title" }, title) : null, subtitle ? /* @__PURE__ */ React.createElement("p", { className: "hv-card__sub" }, subtitle) : null), actions ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px", flex: "none" } }, actions) : null) : null, /* @__PURE__ */ React.createElement("div", { className: "hv-card__body" }, children));
}
function scorecardDirection(change, sentiment) {
  const num = parseFloat(change);
  if (isNaN(num) || num === 0) return "neutral";
  const isUp = num > 0;
  if (sentiment === "up_is_good") return isUp ? "positive" : "negative";
  return isUp ? "negative" : "positive";
}
function Scorecard({ label, value, change, sentiment = "up_is_good" }) {
  hvEnsureCardCss();
  const direction = change ? scorecardDirection(change, sentiment) : null;
  const showChange = change && change !== "+0.0%" && change !== "-0.0%";
  const num = parseFloat(change);
  const isDown = num < 0;
  const toneBg = direction === "positive" ? "var(--status-positive-bg)" : direction === "negative" ? "var(--status-negative-bg)" : "var(--ink-100)";
  const toneText = direction === "positive" ? "var(--status-positive-text)" : direction === "negative" ? "var(--status-negative-text)" : "var(--text-muted)";
  return /* @__PURE__ */ React.createElement("div", { className: "hv-card", style: { padding: "16px", display: "flex", flexDirection: "column", gap: "0" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", fontWeight: 500, color: "var(--text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, label), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: "var(--text-data)", fontWeight: 600, color: "var(--ink-950)", lineHeight: 1.1, marginTop: "3px", fontVariantNumeric: "tabular-nums" } }, value), showChange ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px", marginTop: "8px" } }, /* @__PURE__ */ React.createElement("span", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: "3px",
    borderRadius: "999px",
    padding: "2px 8px",
    fontSize: "11px",
    fontWeight: 500,
    background: toneBg,
    color: toneText
  } }, /* @__PURE__ */ React.createElement("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", style: { flexShrink: 0, transform: isDown ? "rotate(180deg)" : "none" } }, /* @__PURE__ */ React.createElement("path", { d: "M5 2.5V7.5M5 2.5L2.5 5M5 2.5L7.5 5", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })), change.replace(/^[+-]/, "")), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "var(--text-muted)" } }, "vs prev period")) : null);
}
function Stat({ label, value, delta, direction = "up", deltaTone = "positive" }) {
  hvEnsureCardCss();
  const toneColor = deltaTone === "positive" ? "var(--status-positive-text)" : deltaTone === "caution" ? "var(--status-caution-text)" : deltaTone === "negative" ? "var(--status-negative-text)" : "var(--text-muted)";
  return /* @__PURE__ */ React.createElement("div", { className: "hv-card", style: { padding: "16px 18px", display: "flex", flexDirection: "column", gap: "7px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12.5px", color: "var(--text-muted)" } }, label), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: "24px", color: "var(--ink-950)", lineHeight: 1.1 } }, value), delta ? /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: "12px", color: toneColor } }, direction === "down" ? "▼" : "▲", " ", delta) : null);
}
Object.assign(__ds_scope, { Card, Scorecard, Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Card/Card.jsx", error: String((e && e.message) || e) }); }

// components/Charts/ChartLegend.jsx
try { (() => {
const hvChartLegendCss = `
.hv-legend{display:flex;flex-wrap:wrap;gap:4px 16px;font-family:var(--font-sans);font-size:12px;color:var(--ink-700);align-items:center}
.hv-legend__item{display:inline-flex;align-items:center;gap:6px}
.hv-legend__swatch{width:8px;height:8px;border-radius:2px;flex:none}
.hv-legend__value{font-family:var(--font-mono);font-size:11.5px;color:var(--text-muted)}
`;
function hvEnsureChartLegendCss() {
  if (typeof document === "undefined" || document.getElementById("hv-chartlegend-css")) return;
  const s = document.createElement("style");
  s.id = "hv-chartlegend-css";
  s.textContent = hvChartLegendCss;
  document.head.appendChild(s);
}
const HV_SERIES = ["var(--data-1-on-light)", "var(--data-2)", "var(--data-3)", "var(--data-4)"];
const HV_SERIES_DARK = ["var(--data-1)", "var(--data-2)", "var(--data-3)", "var(--data-4)"];
function ChartLegend({ items = [], onDark = false }) {
  hvEnsureChartLegendCss();
  const palette = onDark ? HV_SERIES_DARK : HV_SERIES;
  return /* @__PURE__ */ React.createElement("div", { className: "hv-legend" }, items.map((it, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: "hv-legend__item" }, /* @__PURE__ */ React.createElement("span", { className: "hv-legend__swatch", style: { background: it.color || palette[i % palette.length] } }), it.label, it.value !== void 0 ? /* @__PURE__ */ React.createElement("span", { className: "hv-legend__value" }, it.value) : null)));
}
Object.assign(__ds_scope, { ChartLegend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Charts/ChartLegend.jsx", error: String((e && e.message) || e) }); }

// components/Charts/ChartTooltip.jsx
try { (() => {
const hvChartTooltipCss = `
.hv-charttip{display:inline-block;background:var(--ink-950);color:var(--white);border-radius:var(--radius-md);box-shadow:var(--shadow-overlay);padding:9px 12px;font-family:var(--font-sans);min-width:140px}
.hv-charttip__label{font-size:11px;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;color:var(--ink-400);margin-bottom:8px}
.hv-charttip__row{display:flex;align-items:center;gap:7px;font-size:12.5px;line-height:1.7}
.hv-charttip__dot{width:7px;height:7px;border-radius:2px;flex:none}
.hv-charttip__val{margin-left:auto;font-family:var(--font-mono);font-size:12px;padding-left:14px}
`;
function hvEnsureChartTooltipCss() {
  if (typeof document === "undefined" || document.getElementById("hv-charttip-css")) return;
  const s = document.createElement("style");
  s.id = "hv-charttip-css";
  s.textContent = hvChartTooltipCss;
  document.head.appendChild(s);
}
const HV_TIP_SERIES = ["var(--data-1)", "var(--data-2)", "var(--data-3)", "var(--data-4)"];
function ChartTooltip({ label, rows = [] }) {
  hvEnsureChartTooltipCss();
  return /* @__PURE__ */ React.createElement("div", { className: "hv-charttip", role: "status" }, label ? /* @__PURE__ */ React.createElement("div", { className: "hv-charttip__label" }, label) : null, rows.map((r, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "hv-charttip__row" }, /* @__PURE__ */ React.createElement("span", { className: "hv-charttip__dot", style: { background: r.color || HV_TIP_SERIES[i % HV_TIP_SERIES.length] } }), r.label, /* @__PURE__ */ React.createElement("span", { className: "hv-charttip__val" }, r.value))));
}
Object.assign(__ds_scope, { ChartTooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Charts/ChartTooltip.jsx", error: String((e && e.message) || e) }); }

// components/DateRangePicker/DateRangePicker.jsx
try { (() => {
const hvDrpCss = `
.hv-drp{position:relative;display:inline-block;font-family:var(--font-sans)}
.hv-drp__trigger{display:inline-flex;align-items:center;gap:8px;height:34px;padding:0 12px;font-size:13.5px;font-family:var(--font-sans);color:var(--ink-900);background:var(--surface-card);box-shadow:inset 0 0 0 1px var(--border-strong);border-radius:var(--radius-md);cursor:pointer;transition:box-shadow var(--duration-soft) var(--ease-out)}
.hv-drp__trigger:hover{box-shadow:inset 0 0 0 1px var(--ink-300);}
.hv-drp__trigger:focus-visible{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-drp__chev{color:var(--ink-400);font-size:10px}
.hv-drp__panel{position:absolute;top:calc(100% + 6px);left:0;display:flex;background:var(--surface-card);border-radius:var(--radius-2xl);box-shadow:var(--shadow-overlay);z-index:50;overflow:hidden}
.hv-drp__rail{display:flex;flex-direction:column;gap:2px;padding:8px;border-right:1px solid var(--border-subtle);min-width:128px}
.hv-drp__preset{appearance:none;border:none;background:none;text-align:left;font-family:var(--font-sans);font-size:13px;color:var(--ink-700);padding:6px 10px;border-radius:var(--radius-sm);cursor:pointer;white-space:nowrap;transition:background-color var(--duration-soft) var(--ease-out)}
.hv-drp__preset:hover{background:var(--ink-50)}
.hv-drp__preset--active{background:var(--ink-100);color:var(--ink-950);font-weight:500}
.hv-drp__cal{padding:12px 14px}
.hv-drp__calhead{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}
.hv-drp__month{font-size:13px;font-weight:600;color:var(--ink-950)}
.hv-drp__nav{appearance:none;border:none;background:none;cursor:pointer;color:var(--ink-400);font-size:12px;padding:3px 7px;border-radius:var(--radius-sm)}
.hv-drp__nav:hover{background:var(--ink-50);color:var(--ink-700)}
.hv-drp__grid{display:grid;grid-template-columns:repeat(7,28px);gap:1px}
.hv-drp__wd{font-size:10px;font-weight:500;letter-spacing:0.05em;color:var(--ink-400);text-align:center;padding:3px 0;text-transform:uppercase}
.hv-drp__day{appearance:none;border:none;background:none;font-family:var(--font-sans);font-size:12px;color:var(--ink-900);width:28px;height:26px;border-radius:var(--radius-sm);cursor:pointer;transition:background-color var(--duration-soft) var(--ease-out)}
.hv-drp__day:hover{background:var(--ink-100)}
.hv-drp__day--in{background:var(--green-50);border-radius:0}
.hv-drp__day--end{background:var(--ink-950);color:var(--white);font-weight:500}
.hv-drp__day--end:hover{background:var(--ink-950)}
`;
function hvEnsureDrpCss() {
  if (typeof document === "undefined" || document.getElementById("hv-drp-css")) return;
  const s = document.createElement("style");
  s.id = "hv-drp-css";
  s.textContent = hvDrpCss;
  document.head.appendChild(s);
}
const HV_DRP_PRESETS = [
  { id: "7d", label: "Last 7 days", days: 7 },
  { id: "30d", label: "Last 30 days", days: 30 },
  { id: "90d", label: "Last quarter", days: 90 },
  { id: "ytd", label: "Year to date" },
  { id: "custom", label: "Custom range" }
];
const HV_DRP_FMT = (d) => d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
function DateRangePicker({ defaultPreset = "30d", defaultOpen = false, onChange }) {
  hvEnsureDrpCss();
  const today = /* @__PURE__ */ new Date();
  const [open, setOpen] = React.useState(defaultOpen);
  const [preset, setPreset] = React.useState(defaultPreset);
  const [start, setStart] = React.useState(null);
  const [end, setEnd] = React.useState(null);
  const [view, setView] = React.useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (ev) => {
      if (ref.current && !ref.current.contains(ev.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);
  const pickPreset = (p) => {
    setPreset(p.id);
    if (p.id !== "custom") {
      const e2 = new Date(today);
      const s2 = p.days ? new Date(today.getTime() - p.days * 864e5) : new Date(today.getFullYear(), 0, 1);
      setStart(s2);
      setEnd(e2);
      if (onChange) onChange({ preset: p.id, start: s2, end: e2 });
      setOpen(false);
    }
  };
  const pickDay = (d) => {
    setPreset("custom");
    if (!start || start && end) {
      setStart(d);
      setEnd(null);
    } else if (d < start) {
      setStart(d);
    } else {
      setEnd(d);
      if (onChange) onChange({ preset: "custom", start, end: d });
    }
  };
  const activePreset = HV_DRP_PRESETS.find((p) => p.id === preset);
  const label = preset !== "custom" && activePreset ? activePreset.label : start && end ? `${HV_DRP_FMT(start)} – ${HV_DRP_FMT(end)}` : start ? `${HV_DRP_FMT(start)} – …` : "Select range";
  const first = new Date(view.getFullYear(), view.getMonth(), 1);
  const daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const lead = first.getDay();
  const cells = [];
  for (let i = 0; i < lead; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(view.getFullYear(), view.getMonth(), d));
  const sameDay = (a, b) => a && b && a.toDateString() === b.toDateString();
  const inRange = (d) => start && end && d > start && d < end;
  return /* @__PURE__ */ React.createElement("span", { className: "hv-drp", ref }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "hv-drp__trigger", onClick: () => setOpen(!open) }, /* @__PURE__ */ React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 14 14" }, /* @__PURE__ */ React.createElement("rect", { x: "1", y: "2.5", width: "12", height: "10.5", rx: "2", fill: "none", stroke: "var(--ink-400)", strokeWidth: "1.3" }), /* @__PURE__ */ React.createElement("path", { d: "M1 6h12M4.5 1v3M9.5 1v3", stroke: "var(--ink-400)", strokeWidth: "1.3", strokeLinecap: "round", fill: "none" })), label, /* @__PURE__ */ React.createElement("span", { className: "hv-drp__chev" }, "▾")), open ? /* @__PURE__ */ React.createElement("div", { className: "hv-drp__panel" }, /* @__PURE__ */ React.createElement("div", { className: "hv-drp__rail" }, HV_DRP_PRESETS.map((p) => /* @__PURE__ */ React.createElement("button", { key: p.id, type: "button", className: `hv-drp__preset${p.id === preset ? " hv-drp__preset--active" : ""}`, onClick: () => pickPreset(p) }, p.label))), /* @__PURE__ */ React.createElement("div", { className: "hv-drp__cal" }, /* @__PURE__ */ React.createElement("div", { className: "hv-drp__calhead" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "hv-drp__nav", onClick: () => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1)) }, "◀"), /* @__PURE__ */ React.createElement("span", { className: "hv-drp__month" }, view.toLocaleDateString("en-US", { month: "long", year: "numeric" })), /* @__PURE__ */ React.createElement("button", { type: "button", className: "hv-drp__nav", onClick: () => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1)) }, "▶")), /* @__PURE__ */ React.createElement("div", { className: "hv-drp__grid" }, ["S", "M", "T", "W", "T", "F", "S"].map((w, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: "hv-drp__wd" }, w)), cells.map((d, i) => d ? /* @__PURE__ */ React.createElement(
    "button",
    {
      key: i,
      type: "button",
      className: `hv-drp__day${inRange(d) ? " hv-drp__day--in" : ""}${sameDay(d, start) || sameDay(d, end) ? " hv-drp__day--end" : ""}`,
      onClick: () => pickDay(d)
    },
    d.getDate()
  ) : /* @__PURE__ */ React.createElement("span", { key: i }))))) : null);
}
Object.assign(__ds_scope, { DateRangePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/DateRangePicker/DateRangePicker.jsx", error: String((e && e.message) || e) }); }

// components/FilterSelect/FilterSelect.jsx
try { (() => {
const hvFilterSelectCss = `
.hv-fsel{position:relative;display:inline-block;font-family:var(--font-sans)}
.hv-fsel__trigger{height:28px;padding:0 10px 0 13px;border:none;border-radius:var(--radius-pill);background-color:var(--surface-card);color:var(--text-secondary);box-shadow:var(--shadow-card);display:inline-flex;align-items:center;gap:6px;font-family:var(--font-sans);font-size:12px;font-weight:550;font-variant-numeric:tabular-nums;cursor:pointer;white-space:nowrap;transition:background-color var(--duration-soft) var(--ease-out),color var(--duration-soft) var(--ease-out),filter var(--duration-fast) var(--ease-out)}
.hv-fsel__trigger:hover:not(:disabled){color:var(--text-body);background-image:linear-gradient(var(--hover-on-white),var(--hover-on-white))}
.hv-fsel__trigger:active:not(:disabled){filter:brightness(0.94)}
.hv-fsel__trigger:focus-visible{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-fsel__trigger--active{background-color:var(--action-primary);color:var(--white);box-shadow:none}
.hv-fsel__trigger--active:hover:not(:disabled){color:var(--white);background-image:none;background-color:var(--action-primary-hover)}
.hv-fsel__trigger:disabled{color:var(--text-ghost);cursor:not-allowed}
.hv-fsel__chevron{flex:none;opacity:0.65}
.hv-fsel__menu{position:absolute;top:calc(100% + 6px);min-width:190px;max-width:320px;background:var(--surface-card);border-radius:var(--radius-xl);box-shadow:var(--shadow-overlay);padding:5px;z-index:50;box-sizing:border-box;transform-origin:top center;animation:hv-fsel-in var(--duration-soft) var(--ease-out)}
.hv-fsel__menu--left{left:0}
.hv-fsel__menu--right{right:0}
@keyframes hv-fsel-in{from{opacity:0;transform:translateY(-6px) scale(0.985)}to{opacity:1;transform:none}}
.hv-fsel__row{display:flex;align-items:flex-start;gap:9px;width:100%;box-sizing:border-box;min-height:32px;padding:7px 10px;border:none;background:none;text-align:left;font-family:var(--font-sans);font-size:13px;line-height:1.35;color:var(--text-body);border-radius:var(--radius-sm);cursor:pointer;transition:background-color var(--duration-soft) var(--ease-out),filter var(--duration-fast) var(--ease-out)}
.hv-fsel__label{flex:1;min-width:0}
.hv-fsel__row:hover{background:var(--ink-50)}
.hv-fsel__row:active{filter:brightness(0.94)}
.hv-fsel__row:focus-visible{outline:2px solid var(--border-focus);outline-offset:-2px}
.hv-fsel__box{width:15px;height:15px;margin-top:1.5px;/* drift-ok: optical centering of a 15px glyph on the 18px first text line, not a rhythm gap */border-radius:4px;display:flex;align-items:center;justify-content:center;color:var(--white);box-shadow:inset 0 0 0 1.5px rgba(23,24,26,0.16);flex:none;transition:background-color var(--duration-soft) var(--ease-out),box-shadow var(--duration-soft) var(--ease-out)}
.hv-fsel__row--on .hv-fsel__box{background-color:var(--action-primary);box-shadow:none}
.hv-fsel__dot{margin-left:auto;margin-top:6px;/* drift-ok: optical centering of the 6px dot on the 18px first text line, not a rhythm gap */width:6px;height:6px;border-radius:var(--radius-pill);flex:none}
.hv-fsel__row--clear{color:var(--text-muted)}
.hv-fsel__sep{height:1px;background:var(--hairline);margin:3px 6px}
.hv-fsel__empty{height:32px;display:flex;align-items:center;box-sizing:border-box;padding:0 10px;font-size:13px;color:var(--text-faint)}
`;
function hvEnsureFilterSelectCss() {
  if (typeof document === "undefined" || document.getElementById("hv-filterselect-css")) return;
  const s = document.createElement("style");
  s.id = "hv-filterselect-css";
  s.textContent = hvFilterSelectCss;
  document.head.appendChild(s);
}
const HV_FSEL_TONES = {
  positive: "var(--green-500)",
  caution: "var(--amber-500)",
  negative: "var(--red-500)",
  neutral: "var(--ink-250)"
};
function FilterSelect({
  label,
  options = [],
  value,
  defaultValue = [],
  onChange,
  align = "left",
  defaultOpen = false,
  disabled = false,
  emptyText = "No options match"
}) {
  hvEnsureFilterSelectCss();
  const [open, setOpen] = React.useState(defaultOpen);
  const [inner, setInner] = React.useState(defaultValue);
  const selected = value !== void 0 ? value : inner;
  const ref = React.useRef(null);
  const trigRef = React.useRef(null);
  const commit = (next) => {
    if (value === void 0) setInner(next);
    if (onChange) onChange(next);
  };
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (ev) => {
      if (ref.current && !ref.current.contains(ev.target)) setOpen(false);
    };
    const onKey = (ev) => {
      if (ev.key !== "Escape") return;
      setOpen(false);
      if (trigRef.current) trigRef.current.focus();
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  const n = selected.length;
  const toggleOpt = (id) => commit(selected.includes(id) ? selected.filter((x) => x !== id) : selected.concat(id));
  return /* @__PURE__ */ React.createElement("span", { className: "hv-fsel", ref }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      ref: trigRef,
      disabled,
      className: `hv-fsel__trigger${n ? " hv-fsel__trigger--active" : ""}`,
      "aria-haspopup": "menu",
      "aria-expanded": open,
      onClick: () => setOpen(!open)
    },
    n ? `${label} · ${n}` : label,
    /* @__PURE__ */ React.createElement("svg", { className: "hv-fsel__chevron", width: "11", height: "11", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "m4 6.5 4 4 4-4" }))
  ), open ? /* @__PURE__ */ React.createElement("div", { className: `hv-fsel__menu hv-fsel__menu--${align}`, role: "menu", "aria-label": typeof label === "string" ? label : void 0 }, options.length ? options.map((o) => {
    const on = selected.includes(o.id);
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: o.id,
        type: "button",
        role: "menuitemcheckbox",
        "aria-checked": on,
        className: `hv-fsel__row${on ? " hv-fsel__row--on" : ""}`,
        onClick: () => toggleOpt(o.id)
      },
      /* @__PURE__ */ React.createElement("span", { className: "hv-fsel__box", "aria-hidden": "true" }, on ? /* @__PURE__ */ React.createElement("svg", { width: "9", height: "9", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "2.6", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8.5 6.5 12 13 4.5" })) : null),
      /* @__PURE__ */ React.createElement("span", { className: "hv-fsel__label" }, o.label),
      o.tone ? /* @__PURE__ */ React.createElement("span", { className: "hv-fsel__dot", style: { background: HV_FSEL_TONES[o.tone] || "transparent" } }) : null
    );
  }) : /* @__PURE__ */ React.createElement("div", { className: "hv-fsel__empty" }, emptyText), n ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "hv-fsel__sep" }), /* @__PURE__ */ React.createElement("button", { type: "button", role: "menuitem", className: "hv-fsel__row hv-fsel__row--clear", onClick: () => commit([]) }, "Clear")) : null) : null);
}
Object.assign(__ds_scope, { FilterSelect });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/FilterSelect/FilterSelect.jsx", error: String((e && e.message) || e) }); }

// components/FormControls/Checkbox.jsx
try { (() => {
const hvCheckboxCss = `
.hv-check{display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-family:var(--font-sans);font-size:13.5px;color:var(--ink-900)}
.hv-check input{position:absolute;opacity:0;width:0;height:0}
.hv-check__box{width:16px;height:16px;flex:none;border-radius:4px;box-shadow:inset 0 0 0 1px var(--border-strong);background:var(--surface-card);display:inline-flex;align-items:center;justify-content:center;transition:background-color var(--duration-soft) var(--ease-out),box-shadow var(--duration-fast) var(--ease-out);box-sizing:border-box}
.hv-check__box svg{opacity:0;transition:opacity var(--duration-soft) var(--ease-out)}
.hv-check input:checked+.hv-check__box{background:var(--ink-950);box-shadow:inset 0 0 0 1px var(--ink-950);}
.hv-check input:checked+.hv-check__box svg{opacity:1}
.hv-check input:focus-visible+.hv-check__box{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-check--disabled{opacity:.45;cursor:not-allowed}
`;
function hvEnsureCheckboxCss() {
  if (typeof document === "undefined" || document.getElementById("hv-checkbox-css")) return;
  const s = document.createElement("style");
  s.id = "hv-checkbox-css";
  s.textContent = hvCheckboxCss;
  document.head.appendChild(s);
}
function Checkbox({ label, checked, defaultChecked, onChange, disabled = false }) {
  hvEnsureCheckboxCss();
  return /* @__PURE__ */ React.createElement("label", { className: `hv-check${disabled ? " hv-check--disabled" : ""}` }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked, defaultChecked, onChange, disabled }), /* @__PURE__ */ React.createElement("span", { className: "hv-check__box" }, /* @__PURE__ */ React.createElement("svg", { width: "10", height: "10", viewBox: "0 0 10 10" }, /* @__PURE__ */ React.createElement("path", { d: "M1.5 5.5L4 8l4.5-6", fill: "none", stroke: "var(--white)", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }))), label ? /* @__PURE__ */ React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/FormControls/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/FormControls/Switch.jsx
try { (() => {
const hvSwitchCss = `
.hv-switch{display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-family:var(--font-sans);font-size:13.5px;color:var(--ink-900)}
.hv-switch input{position:absolute;opacity:0;width:0;height:0}
.hv-switch__track{width:34px;height:18px;flex:none;border-radius:999px;background:var(--ink-200);position:relative;transition:background-color var(--duration-soft) var(--ease-out);box-sizing:border-box}
.hv-switch__thumb{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:999px;background:var(--white);box-shadow:0 1px 2px rgba(13,13,13,0.18);transition:transform var(--duration-soft) var(--ease-out)}
.hv-switch input:checked+.hv-switch__track{background:var(--ink-950)}
.hv-switch input:checked+.hv-switch__track .hv-switch__thumb{transform:translateX(16px)}
.hv-switch input:focus-visible+.hv-switch__track{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-switch--disabled{opacity:.45;cursor:not-allowed}
`;
function hvEnsureSwitchCss() {
  if (typeof document === "undefined" || document.getElementById("hv-switch-css")) return;
  const s = document.createElement("style");
  s.id = "hv-switch-css";
  s.textContent = hvSwitchCss;
  document.head.appendChild(s);
}
function Switch({ label, checked, defaultChecked, onChange, disabled = false }) {
  hvEnsureSwitchCss();
  return /* @__PURE__ */ React.createElement("label", { className: `hv-switch${disabled ? " hv-switch--disabled" : ""}` }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", role: "switch", checked, defaultChecked, onChange, disabled }), /* @__PURE__ */ React.createElement("span", { className: "hv-switch__track" }, /* @__PURE__ */ React.createElement("span", { className: "hv-switch__thumb" })), label ? /* @__PURE__ */ React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/FormControls/Switch.jsx", error: String((e && e.message) || e) }); }

// components/FormControls/Textarea.jsx
try { (() => {
const hvTextareaCss = `
.hv-tafield{display:flex;flex-direction:column;gap:6px;font-family:var(--font-sans)}
.hv-tafield__label{font-size:12.5px;font-weight:500;color:var(--ink-700)}
.hv-textarea{padding:9px 12px;font-size:13.5px;line-height:1.5;font-family:var(--font-sans);color:var(--ink-900);background:var(--surface-card);border:none;border-radius:var(--radius-control);outline:none;box-sizing:border-box;width:100%;resize:vertical;min-height:72px;box-shadow:inset 0 0 0 1px var(--border-strong);caret-color:var(--green-500);transition:box-shadow var(--transition-soft)}
.hv-textarea::placeholder{color:var(--text-faint)}
.hv-textarea:hover:not(:disabled):not(:focus){box-shadow:inset 0 0 0 1px var(--ink-300);}
.hv-textarea:focus{box-shadow:inset 0 0 0 1px var(--green-600);box-shadow:inset 0 0 0 1.5px var(--green-600)}
.hv-textarea:disabled{background:var(--ink-50);color:var(--text-faint);cursor:not-allowed}
.hv-tafield__hint{font-size:12px;color:var(--text-muted)}
.hv-tafield__error{font-size:12px;color:var(--red-700);font-weight:500}
.hv-textarea--error{box-shadow:inset 0 0 0 1px var(--red-500);}
`;
function hvEnsureTextareaCss() {
  if (typeof document === "undefined" || document.getElementById("hv-textarea-css")) return;
  const s = document.createElement("style");
  s.id = "hv-textarea-css";
  s.textContent = hvTextareaCss;
  document.head.appendChild(s);
}
function Textarea({ label, placeholder, value, defaultValue, onChange, rows = 3, hint, error, disabled = false }) {
  hvEnsureTextareaCss();
  return /* @__PURE__ */ React.createElement("label", { className: "hv-tafield" }, label ? /* @__PURE__ */ React.createElement("span", { className: "hv-tafield__label" }, label) : null, /* @__PURE__ */ React.createElement(
    "textarea",
    {
      className: `hv-textarea${error ? " hv-textarea--error" : ""}`,
      placeholder,
      value,
      defaultValue,
      onChange,
      rows,
      disabled
    }
  ), error ? /* @__PURE__ */ React.createElement("span", { className: "hv-tafield__error" }, error) : hint ? /* @__PURE__ */ React.createElement("span", { className: "hv-tafield__hint" }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/FormControls/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/Gantt/Gantt.jsx
try { (() => {
const hvGanttCss = `
.hv-gantt{font-family:var(--font-sans);color:var(--text-body)}
.hv-gantt__chart{position:relative}
.hv-gantt__grid{position:absolute;inset:0;pointer-events:none}
.hv-gantt__gridline{position:absolute;top:0;bottom:0;width:1px;background:var(--hairline)}
.hv-gantt__gridline--major{background:rgba(23,24,26,0.12)}
.hv-gantt__lanes{position:relative}
.hv-gantt__bar{position:absolute;height:30px;border:none;border-radius:8px;background:rgba(23,24,26,0.07);display:flex;align-items:center;padding:0 11px;box-sizing:border-box;cursor:pointer;overflow:visible;font-family:var(--font-sans);color:var(--text-nav);transition:background-color var(--duration-soft) var(--ease-out),box-shadow var(--duration-soft) var(--ease-out),color var(--duration-soft) var(--ease-out)}
.hv-gantt__bar:hover:not(.hv-gantt__bar--selected){background:rgba(23,24,26,0.12)}
.hv-gantt__bar:active{filter:brightness(0.94)}
.hv-gantt__bar:focus-visible{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-gantt__bar--selected{background:var(--ink-950);color:var(--white);box-shadow:0 8px 20px -6px rgba(20,40,30,0.35)}
.hv-gantt__label{font-size:12px;font-weight:600;white-space:nowrap}
.hv-gantt__label--out{position:absolute;left:100%;top:50%;transform:translateY(-50%);padding-left:10px;font-size:11.5px;color:var(--text-nav);transition:color var(--duration-soft) var(--ease-out)}
.hv-gantt__bar--selected .hv-gantt__label--out{color:var(--ink-950);font-weight:650}
.hv-gantt__axis{margin-top:12px;padding-top:8px;box-shadow:inset 0 1px 0 var(--hairline-strong);display:grid}
.hv-gantt__tick{font-size:9.5px;color:var(--text-faint);text-align:center;font-variant-numeric:tabular-nums;letter-spacing:0.04em}
.hv-gantt__empty{font-size:12.5px;color:var(--text-faint)}
@keyframes hv-gantt-shimmer{0%{background-position:120% 0}100%{background-position:-20% 0}}
.hv-gantt__skelbar{position:absolute;height:30px;border-radius:8px;background:linear-gradient(90deg,var(--ink-100) 25%,var(--ink-50) 45%,var(--ink-100) 65%);background-size:300% 100%;animation:hv-gantt-shimmer var(--duration-pulse) var(--ease-out) infinite}
@media (prefers-reduced-motion: reduce){.hv-gantt__skelbar{animation-duration:2400ms}}
`;
function hvEnsureGanttCss() {
  if (typeof document === "undefined" || document.getElementById("hv-gantt-css")) return;
  const s = document.createElement("style");
  s.id = "hv-gantt-css";
  s.textContent = hvGanttCss;
  document.head.appendChild(s);
}
const HV_GANTT_PITCH = 38;
const HV_GANTT_BAR = 30;
const HV_GANTT_PAD = 4;
const HV_GANTT_SKELETON = [
  { start: 1, end: 1 },
  { start: 2, end: 3 },
  { start: 3, end: 4 },
  { start: 5, end: 8 }
];
function Gantt({
  phases = [],
  weeks,
  selected,
  defaultSelected = 0,
  onSelect,
  axisLabels,
  loading = false,
  emptyText = "No phases yet — the plan has not been drawn"
}) {
  hvEnsureGanttCss();
  const [internal, setInternal] = React.useState(defaultSelected);
  const sel = selected !== void 0 ? selected : internal;
  const n = phases.length;
  if (!n && !loading) {
    return /* @__PURE__ */ React.createElement("div", { className: "hv-gantt" }, /* @__PURE__ */ React.createElement("div", { className: "hv-gantt__empty" }, emptyText));
  }
  const geo = n ? phases : HV_GANTT_SKELETON;
  const rows = geo.length;
  const maxEnd = geo.reduce((m, p) => Math.max(m, p.end || p.start || 1), 1);
  const w = weeks || maxEnd;
  const pct = (x) => x / w * 100 + "%";
  const height = rows * HV_GANTT_PITCH + HV_GANTT_PAD;
  const ticks = axisLabels || Array.from({ length: w }, (_, i) => "W" + (i + 1));
  const pick = (i) => {
    if (selected === void 0) setInternal(i);
    if (onSelect) onSelect(i, phases[i]);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "hv-gantt", "aria-busy": loading ? "true" : void 0 }, /* @__PURE__ */ React.createElement("div", { className: "hv-gantt__chart" }, /* @__PURE__ */ React.createElement("div", { className: "hv-gantt__grid", "aria-hidden": "true" }, Array.from({ length: w + 1 }, (_, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: "hv-gantt__gridline" + (i % 4 === 0 ? " hv-gantt__gridline--major" : ""), style: { left: pct(i) } }))), /* @__PURE__ */ React.createElement("div", { className: "hv-gantt__lanes", style: { height } }, geo.map((p, i) => {
    const start = p.start || 1;
    const end = p.end || start;
    const span = end - start + 1;
    const top = (rows - 1 - i) * HV_GANTT_PITCH + HV_GANTT_PAD;
    const place = { left: pct(start - 1), width: pct(span), top };
    if (loading) {
      return /* @__PURE__ */ React.createElement("span", { key: i, className: "hv-gantt__skelbar", "data-motion": "essential", style: place });
    }
    const isSel = i === sel;
    const inside = span >= 3;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: i,
        type: "button",
        className: "hv-gantt__bar" + (isSel ? " hv-gantt__bar--selected" : ""),
        style: place,
        "aria-pressed": isSel,
        onClick: () => pick(i)
      },
      /* @__PURE__ */ React.createElement("span", { className: "hv-gantt__label" + (inside ? "" : " hv-gantt__label--out") }, p.label)
    );
  }))), /* @__PURE__ */ React.createElement("div", { className: "hv-gantt__axis", style: { gridTemplateColumns: "repeat(" + w + ", 1fr)" } }, ticks.map((t, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: "hv-gantt__tick" }, t))));
}
Object.assign(__ds_scope, { Gantt });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Gantt/Gantt.jsx", error: String((e && e.message) || e) }); }

// components/Icon/Icon.jsx
try { (() => {
function hvHexPath(cx, cy, r) {
  const w = r * 0.866;
  return `M${cx} ${cy - r}L${cx + w} ${cy - r / 2}V${cy + r / 2}L${cx} ${cy + r}L${cx - w} ${cy + r / 2}V${cy - r / 2}Z`;
}
const HIVORY_ICON_PATHS = {
  /* navigation */
  dashboard: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("rect", { x: "2", y: "2", width: "5", height: "5", rx: "1.2" }), /* @__PURE__ */ React.createElement("rect", { x: "9", y: "2", width: "5", height: "5", rx: "1.2" }), /* @__PURE__ */ React.createElement("rect", { x: "2", y: "9", width: "5", height: "5", rx: "1.2" }), /* @__PURE__ */ React.createElement("path", { d: hvHexPath(11.5, 11.5, 2.9) })),
  pipeline: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M2.5 3h11L9.5 7.8v4.7l-3-2V7.8L2.5 3Z" })),
  chart: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M2 13.5h12M4.5 10.5v-3M8 10.5V4.5M11.5 10.5V7" })),
  agent: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: hvHexPath(8, 8, 5.5) }), /* @__PURE__ */ React.createElement("path", { d: "M6.2 7.2v1.6M9.8 7.2v1.6" })),
  spark: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M8 2c.4 3.4 2.6 5.6 6 6-3.4.4-5.6 2.6-6 6-.4-3.4-2.6-5.6-6-6 3.4-.4 5.6-2.6 6-6Z" })),
  clock: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("circle", { cx: "8", cy: "8", r: "5.75" }), /* @__PURE__ */ React.createElement("path", { d: "M8 5v3.2l2.2 1.3" })),
  globe: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("circle", { cx: "8", cy: "8", r: "5.75" }), /* @__PURE__ */ React.createElement("path", { d: "M2.25 8h11.5M8 2.25c2.4 2 2.4 9.5 0 11.5M8 2.25c-2.4 2-2.4 9.5 0 11.5" })),
  upload: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M8 10.5V3M5 5.5 8 2.5l3 3M3 13.5h10" })),
  calendar: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("rect", { x: "2.5", y: "3.5", width: "11", height: "10", rx: "1.5" }), /* @__PURE__ */ React.createElement("path", { d: "M2.5 7h11M5.5 1.75V4M10.5 1.75V4" })),
  settings: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M2.5 4.5h11M2.5 8h11M2.5 11.5h11" }), /* @__PURE__ */ React.createElement("circle", { cx: "10", cy: "4.5", r: "1.6", fill: "var(--surface-card)" }), /* @__PURE__ */ React.createElement("circle", { cx: "5.5", cy: "8", r: "1.6", fill: "var(--surface-card)" }), /* @__PURE__ */ React.createElement("circle", { cx: "8.5", cy: "11.5", r: "1.6", fill: "var(--surface-card)" })),
  doc: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M4 2h5l3 3v9H4V2Z" }), /* @__PURE__ */ React.createElement("path", { d: "M9 2v3h3" })),
  search: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("circle", { cx: "7", cy: "7", r: "4.5" }), /* @__PURE__ */ React.createElement("path", { d: "M10.4 10.4 13.5 13.5" })),
  mail: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("rect", { x: "2", y: "3.5", width: "12", height: "9.5", rx: "1.5" }), /* @__PURE__ */ React.createElement("path", { d: "M2.5 4.5 8 9l5.5-4.5" })),
  users: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("circle", { cx: "8", cy: "5.5", r: "2.75" }), /* @__PURE__ */ React.createElement("path", { d: "M3.5 13.5c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" })),
  bell: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M8 2a4 4 0 0 1 4 4v3l1.5 2.5h-11L4 9V6a4 4 0 0 1 4-4Z" }), /* @__PURE__ */ React.createElement("path", { d: "M6.8 13.5a1.3 1.3 0 0 0 2.4 0" })),
  /* actions + state */
  "arrow-right": /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M2.5 8h11M9.5 4l4 4-4 4" })),
  check: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M2.5 8.5 6.5 12.5 13.5 4" })),
  close: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M3.5 3.5l9 9M12.5 3.5l-9 9" })),
  signout: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M6 2.5H3.5v11H6M10 5l3 3-3 3M13 8H6.5" })),
  moon: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M13 9.5A5.5 5.5 0 1 1 6.5 3a4.5 4.5 0 0 0 6.5 6.5Z" }))
};
function Icon({ name, size = 16, strokeWidth = 1.5, style }) {
  return /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", style, "aria-hidden": "true" }, HIVORY_ICON_PATHS[name] || HIVORY_ICON_PATHS.doc);
}
const ICON_NAMES = Object.keys(HIVORY_ICON_PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Icon/Icon.jsx", error: String((e && e.message) || e) }); }

// components/ImageSlot/ImageSlot.jsx
try { (() => {
const hvImageSlotCss = `
.hv-imgslot{position:relative;display:block;width:100%;height:100%;box-sizing:border-box;padding:0;border:none;appearance:none;overflow:hidden;background:var(--surface-sunken);box-shadow:inset 0 0 0 1px var(--hairline-strong);border-radius:var(--radius-control);cursor:pointer;font-family:var(--font-sans);text-align:center;transition:box-shadow var(--transition-soft),background-color var(--transition-soft)}
.hv-imgslot:focus-visible{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-imgslot:active{filter:brightness(0.94)}
.hv-imgslot--drop{box-shadow:inset 0 0 0 1.5px var(--green-600);background:var(--surface-brand-tint)}
.hv-imgslot--filled{background:var(--surface-card);box-shadow:inset 0 0 0 1px var(--hairline)}
.hv-imgslot--filled:hover{box-shadow:inset 0 0 0 1px var(--ink-300)}
.hv-imgslot--filled.hv-imgslot--drop{box-shadow:inset 0 0 0 1.5px var(--green-600)}
.hv-imgslot--static{cursor:default}
.hv-imgslot__ph{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:8px;box-sizing:border-box;font-size:12px;line-height:1.45;color:var(--text-muted);pointer-events:none}
.hv-imgslot__img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}
.hv-imgslot--contain .hv-imgslot__img{object-fit:contain;padding:8px;box-sizing:border-box}
.hv-imgslot__replace{position:absolute;left:50%;bottom:8px;transform:translateX(-50%);display:inline-flex;align-items:center;height:20px;padding:0 9px;border-radius:var(--radius-pill);background:var(--ink-800);color:var(--white);font-size:10.5px;font-weight:600;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity var(--transition-soft)}
.hv-imgslot--filled:hover .hv-imgslot__replace{opacity:1}
.hv-imgslot--filled:focus-visible .hv-imgslot__replace{opacity:1}
.hv-imgslot__skel{position:absolute;inset:0;background:linear-gradient(100deg,var(--ink-50) 40%,var(--ink-100) 50%,var(--ink-50) 60%);background-size:200% 100%;animation:hv-imgslot-shimmer var(--duration-pulse) var(--ease-out) infinite}
@keyframes hv-imgslot-shimmer{to{background-position:-200% 0}}
.hv-imgslot__credit{position:absolute;right:6px;bottom:6px;display:inline-flex;align-items:center;height:18px;padding:0 7px;border-radius:var(--radius-pill);background:rgba(23,24,26,0.55);color:var(--white);font-size:10px;font-weight:500;text-decoration:none;white-space:nowrap}
a.hv-imgslot__credit:hover{background:rgba(23,24,26,0.75)}
a.hv-imgslot__credit:focus-visible{outline:2px solid var(--border-focus);outline-offset:2px}
@media (prefers-reduced-motion:reduce){.hv-imgslot__skel{animation-duration:2.4s}}
`;
function hvEnsureImageSlotCss() {
  if (typeof document === "undefined" || document.getElementById("hv-imageslot-css")) return;
  const s = document.createElement("style");
  s.id = "hv-imageslot-css";
  s.textContent = hvImageSlotCss;
  document.head.appendChild(s);
}
const HV_IMGSLOT_RADII = { circle: "var(--radius-pill)", pill: "var(--radius-pill)" };
function hvImageSlotStore(id) {
  return id ? `hv-imgslot:${id}` : null;
}
function ImageSlot({
  id,
  placeholder,
  src,
  fit = "cover",
  shape = "rect",
  radius = 14,
  credit,
  creditHref,
  loading = false,
  readOnly = false,
  onChange
}) {
  hvEnsureImageSlotCss();
  const storeKey = hvImageSlotStore(id);
  const [img, setImg] = React.useState(() => {
    try {
      return storeKey && window.localStorage.getItem(storeKey) || null;
    } catch (err) {
      return null;
    }
  });
  const [over, setOver] = React.useState(false);
  const [reading, setReading] = React.useState(false);
  const fileRef = React.useRef(null);
  const accept = (file) => {
    if (!file || !/^image\//.test(file.type)) return;
    setReading(true);
    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result;
      setImg(url);
      setReading(false);
      try {
        if (storeKey) window.localStorage.setItem(storeKey, url);
      } catch (err) {
      }
      if (onChange) onChange(url, file);
    };
    reader.onerror = () => setReading(false);
    reader.readAsDataURL(file);
  };
  const shown = img || src || null;
  const busy = loading || reading;
  const borderRadius = HV_IMGSLOT_RADII[shape] || (shape === "rounded" ? `${radius}px` : void 0);
  const cls = [
    "hv-imgslot",
    fit === "contain" ? "hv-imgslot--contain" : "",
    shown && !busy ? "hv-imgslot--filled" : "",
    over ? "hv-imgslot--drop" : ""
  ].filter(Boolean).join(" ");
  const media = busy ? /* @__PURE__ */ React.createElement("span", { className: "hv-imgslot__skel", "data-motion": "essential", "aria-hidden": "true" }) : shown ? /* @__PURE__ */ React.createElement("img", { className: "hv-imgslot__img", src: shown, alt: placeholder || "", draggable: false }) : /* @__PURE__ */ React.createElement("span", { className: "hv-imgslot__ph" }, placeholder);
  const creditNode = shown && !busy && credit ? creditHref ? /* @__PURE__ */ React.createElement("a", { className: "hv-imgslot__credit", href: creditHref, target: "_blank", rel: "noreferrer", onClick: (ev) => ev.stopPropagation() }, credit) : /* @__PURE__ */ React.createElement("span", { className: "hv-imgslot__credit" }, credit) : null;
  if (readOnly) {
    return /* @__PURE__ */ React.createElement("span", { className: `${cls} hv-imgslot--static`, style: { borderRadius, display: "block" }, role: "img", "aria-label": placeholder || "Image" }, media, creditNode);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: cls,
      style: { borderRadius },
      "aria-label": `${placeholder || "Image"}${shown ? " — replace image" : " — add image"}`,
      "aria-busy": busy || void 0,
      onClick: () => {
        if (!busy && fileRef.current) fileRef.current.click();
      },
      onDragOver: (ev) => {
        ev.preventDefault();
        if (!busy) setOver(true);
      },
      onDragLeave: () => setOver(false),
      onDrop: (ev) => {
        ev.preventDefault();
        setOver(false);
        if (!busy && ev.dataTransfer && ev.dataTransfer.files) accept(ev.dataTransfer.files[0]);
      }
    },
    media,
    shown && !busy ? /* @__PURE__ */ React.createElement("span", { className: "hv-imgslot__replace", "aria-hidden": "true" }, "Replace") : null,
    creditNode
  ), /* @__PURE__ */ React.createElement(
    "input",
    {
      ref: fileRef,
      type: "file",
      accept: "image/*",
      tabIndex: -1,
      "aria-hidden": "true",
      style: { display: "none" },
      onChange: (ev) => {
        accept(ev.target.files && ev.target.files[0]);
        ev.target.value = "";
      }
    }
  ));
}
Object.assign(__ds_scope, { ImageSlot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ImageSlot/ImageSlot.jsx", error: String((e && e.message) || e) }); }

// components/Input/Input.jsx
try { (() => {
const hvInputCss = `
.hv-field{display:flex;flex-direction:column;gap:6px;font-family:var(--font-sans)}
.hv-field__label{font-size:12.5px;font-weight:500;color:var(--ink-700)}
.hv-input{height:34px;padding:0 12px;font-size:13.5px;font-family:var(--font-sans);color:var(--ink-900);background:var(--surface-card);border:none;border-radius:var(--radius-control);outline:none;box-sizing:border-box;width:100%;box-shadow:inset 0 0 0 1px var(--border-strong);caret-color:var(--green-500);transition:box-shadow var(--transition-soft)}
.hv-input::placeholder{color:var(--text-faint)}
.hv-input:hover:not(:disabled):not(:focus){box-shadow:inset 0 0 0 1px var(--ink-300)}
.hv-input:focus{box-shadow:inset 0 0 0 1.5px var(--green-600)}
.hv-input:disabled{background:var(--ink-50);color:var(--text-faint);cursor:not-allowed}
.hv-input--error{box-shadow:inset 0 0 0 1.5px var(--red-500)}
.hv-input--error:focus{box-shadow:inset 0 0 0 1.5px var(--red-500)}
.hv-field__hint{font-size:12px;color:var(--text-muted)}
.hv-field__error{font-size:12px;color:var(--red-700);font-weight:500}
`;
function hvEnsureInputCss() {
  if (typeof document === "undefined" || document.getElementById("hv-input-css")) return;
  const s = document.createElement("style");
  s.id = "hv-input-css";
  s.textContent = hvInputCss;
  document.head.appendChild(s);
}
function Input({ label, placeholder, value, defaultValue, onChange, type = "text", hint, error, disabled = false }) {
  hvEnsureInputCss();
  return /* @__PURE__ */ React.createElement("label", { className: "hv-field" }, label ? /* @__PURE__ */ React.createElement("span", { className: "hv-field__label" }, label) : null, /* @__PURE__ */ React.createElement(
    "input",
    {
      className: `hv-input${error ? " hv-input--error" : ""}`,
      type,
      placeholder,
      value,
      defaultValue,
      onChange,
      disabled
    }
  ), error ? /* @__PURE__ */ React.createElement("span", { className: "hv-field__error" }, error) : hint ? /* @__PURE__ */ React.createElement("span", { className: "hv-field__hint" }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Input/Input.jsx", error: String((e && e.message) || e) }); }

// components/LoadingDividers/Separator.jsx
try { (() => {
const hvSeparatorCss = `
.hv-sep{border:none;background:var(--border-subtle);flex:none}
.hv-sep--h{height:1px;width:100%;margin:0}
.hv-sep--v{width:1px;align-self:stretch;margin:0}
`;
function hvEnsureSeparatorCss() {
  if (typeof document === "undefined" || document.getElementById("hv-separator-css")) return;
  const s = document.createElement("style");
  s.id = "hv-separator-css";
  s.textContent = hvSeparatorCss;
  document.head.appendChild(s);
}
function Separator({ orientation = "horizontal", spacing = 0 }) {
  hvEnsureSeparatorCss();
  const style = orientation === "horizontal" ? spacing ? { marginTop: spacing, marginBottom: spacing } : void 0 : spacing ? { marginLeft: spacing, marginRight: spacing } : void 0;
  return /* @__PURE__ */ React.createElement("hr", { className: `hv-sep hv-sep--${orientation === "horizontal" ? "h" : "v"}`, style });
}
Object.assign(__ds_scope, { Separator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/LoadingDividers/Separator.jsx", error: String((e && e.message) || e) }); }

// components/LoadingDividers/Skeleton.jsx
try { (() => {
const hvSkeletonCss = `
@keyframes hv-skeleton-shimmer{0%{background-position:120% 0}100%{background-position:-20% 0}}
.hv-skeleton{display:block;background:linear-gradient(90deg,var(--ink-100) 25%,var(--ink-50) 45%,var(--ink-100) 65%);background-size:300% 100%;animation:hv-skeleton-shimmer var(--duration-pulse) var(--ease-out) infinite;border-radius:var(--radius-sm)}
.hv-skeleton--circle{border-radius:999px}
@media (prefers-reduced-motion: reduce){.hv-skeleton{animation:none;background:var(--ink-100)}}
`;
function hvEnsureSkeletonCss() {
  if (typeof document === "undefined" || document.getElementById("hv-skeleton-css")) return;
  const s = document.createElement("style");
  s.id = "hv-skeleton-css";
  s.textContent = hvSkeletonCss;
  document.head.appendChild(s);
}
function Skeleton({ variant = "line", width = "100%", height }) {
  hvEnsureSkeletonCss();
  const h = height !== void 0 ? height : variant === "line" ? 12 : variant === "circle" ? 32 : 80;
  const w = variant === "circle" && width === "100%" ? h : width;
  return /* @__PURE__ */ React.createElement("span", { className: `hv-skeleton${variant === "circle" ? " hv-skeleton--circle" : ""}`, style: { width: w, height: h } });
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/LoadingDividers/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/Menu/Menu.jsx
try { (() => {
const hvMenuCss = `
.hv-menu-wrap{position:relative;display:inline-block}
.hv-menu{position:absolute;top:calc(100% + 6px);min-width:180px;background:var(--surface-card);border-radius:var(--radius-xl);box-shadow:var(--shadow-overlay);padding:5px;z-index:50;font-family:var(--font-sans)}
.hv-menu--left{left:0}
.hv-menu--right{right:0}
.hv-menu__item{display:flex;align-items:center;gap:8px;width:100%;box-sizing:border-box;padding:7px 10px;border:none;background:none;text-align:left;font-family:var(--font-sans);font-size:13.5px;color:var(--ink-900);border-radius:var(--radius-sm);cursor:pointer;transition:background-color var(--duration-soft) var(--ease-out)}
.hv-menu__item:hover:not(:disabled){background:var(--ink-50)}
.hv-menu__item:disabled{color:var(--text-faint);cursor:not-allowed}
.hv-menu__item--danger{color:var(--red-700)}
.hv-menu__item--danger:hover:not(:disabled){background:var(--status-negative-bg)}
.hv-menu__sep{height:1px;background:var(--border-subtle);margin:5px 4px} /* drift-ok: menu-interior inset matches the panel's 5px padding — control interior, not rhythm */
.hv-menu__hint{margin-left:auto;font-size:11.5px;color:var(--text-faint);font-family:var(--font-mono)}
`;
function hvEnsureMenuCss() {
  if (typeof document === "undefined" || document.getElementById("hv-menu-css")) return;
  const s = document.createElement("style");
  s.id = "hv-menu-css";
  s.textContent = hvMenuCss;
  document.head.appendChild(s);
}
function Menu({ trigger, items = [], onSelect, align = "left", defaultOpen = false }) {
  hvEnsureMenuCss();
  const [open, setOpen] = React.useState(defaultOpen);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (ev) => {
      if (ref.current && !ref.current.contains(ev.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);
  return /* @__PURE__ */ React.createElement("span", { className: "hv-menu-wrap", ref }, /* @__PURE__ */ React.createElement("span", { onClick: () => setOpen(!open) }, trigger), open ? /* @__PURE__ */ React.createElement("div", { className: `hv-menu hv-menu--${align}`, role: "menu" }, items.map(
    (it, i) => it.type === "separator" ? /* @__PURE__ */ React.createElement("div", { key: i, className: "hv-menu__sep" }) : /* @__PURE__ */ React.createElement(
      "button",
      {
        key: it.id,
        type: "button",
        role: "menuitem",
        disabled: it.disabled,
        className: `hv-menu__item${it.danger ? " hv-menu__item--danger" : ""}`,
        onClick: () => {
          setOpen(false);
          if (onSelect) onSelect(it.id);
        }
      },
      it.label,
      it.hint ? /* @__PURE__ */ React.createElement("span", { className: "hv-menu__hint" }, it.hint) : null
    )
  )) : null);
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Menu/Menu.jsx", error: String((e && e.message) || e) }); }

// components/Metric/MetricChip.jsx
try { (() => {
const hvMetricCss = `
.hv-metric{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-sans);line-height:1;white-space:nowrap}
.hv-metric--chip{box-shadow:inset 0 0 0 1px var(--border-subtle);background:var(--surface-card);border-radius:var(--radius-sm);padding:5px 8px}
.hv-metric__label{font-size:10px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase;color:var(--text-faint)}
.hv-metric__value{font-family:var(--font-mono);font-size:11.5px;font-weight:500;color:var(--ink-900);font-variant-numeric:tabular-nums}
.hv-meter{display:inline-flex;align-items:center;gap:6px;line-height:1;white-space:nowrap}
.hv-meter__bars{display:inline-flex;align-items:flex-end;gap:1.5px;height:11px}
.hv-meter__bar{width:2.5px;border-radius:1px;background:var(--ink-200)}
.hv-meter__val{font-family:var(--font-mono);font-size:11.5px;font-weight:500;font-variant-numeric:tabular-nums}
`;
function hvEnsureMetricCss() {
  if (typeof document === "undefined" || document.getElementById("hv-metric-css")) return;
  const s = document.createElement("style");
  s.id = "hv-metric-css";
  s.textContent = hvMetricCss;
  document.head.appendChild(s);
}
function MetricChip({ label, value, variant = "chip", icon = null }) {
  hvEnsureMetricCss();
  return /* @__PURE__ */ React.createElement("span", { className: `hv-metric${variant === "chip" ? " hv-metric--chip" : ""}` }, icon, label ? /* @__PURE__ */ React.createElement("span", { className: "hv-metric__label" }, label) : null, /* @__PURE__ */ React.createElement("span", { className: "hv-metric__value" }, value));
}
const HV_METER_COLORS = {
  positive: "var(--status-positive-text)",
  caution: "var(--status-caution-text)",
  negative: "var(--status-negative-text)"
};
function hvMeterTone(value, semantics) {
  const v = semantics === "score" ? 100 - value : value;
  if (v < 30) return "positive";
  if (v < 60) return "caution";
  return "negative";
}
function DifficultyMeter({ value = 0, semantics = "difficulty", showValue = true, label }) {
  hvEnsureMetricCss();
  const tone = hvMeterTone(value, semantics);
  const color = HV_METER_COLORS[tone];
  const filled = Math.max(1, Math.min(4, Math.ceil(value / 25)));
  const heights = [4, 6.5, 9, 11];
  return /* @__PURE__ */ React.createElement("span", { className: "hv-meter", role: "img", "aria-label": `${label || (semantics === "score" ? "Score" : "Difficulty")} ${value} of 100` }, /* @__PURE__ */ React.createElement("span", { className: "hv-meter__bars", "aria-hidden": "true" }, heights.map((h, i) => /* @__PURE__ */ React.createElement(
    "span",
    {
      key: i,
      className: "hv-meter__bar",
      style: { height: h + "px", background: i < filled ? color : void 0 }
    }
  ))), showValue ? /* @__PURE__ */ React.createElement("span", { className: "hv-meter__val", style: { color } }, value) : null);
}
Object.assign(__ds_scope, { MetricChip, DifficultyMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Metric/MetricChip.jsx", error: String((e && e.message) || e) }); }

// components/Modal/Modal.jsx
try { (() => {
const hvModalCss = `
.hv-modal-overlay{position:fixed;inset:0;background:rgba(13,15,14,0.40);display:flex;align-items:center;justify-content:center;padding:24px;z-index:100}
.hv-modal{background:var(--surface-card);border-radius:var(--radius-xl);box-shadow:var(--shadow-overlay);width:100%;font-family:var(--font-sans);box-sizing:border-box}
.hv-modal__head{padding:18px 20px 0}
.hv-modal__title{margin:0;font-size:15.5px;font-weight:600;letter-spacing:-0.01em;color:var(--ink-950)}
.hv-modal__desc{margin:8px 0 0;font-size:13.5px;line-height:1.55;color:var(--text-muted)}
.hv-modal__body{padding:16px 20px}
.hv-modal__foot{display:flex;justify-content:flex-end;gap:8px;padding:0 20px 18px}
`;
function hvEnsureModalCss() {
  if (typeof document === "undefined" || document.getElementById("hv-modal-css")) return;
  const s = document.createElement("style");
  s.id = "hv-modal-css";
  s.textContent = hvModalCss;
  document.head.appendChild(s);
}
function Modal({ open = false, onClose, title, description, footer, width = 440, children }) {
  hvEnsureModalCss();
  React.useEffect(() => {
    if (!open || !onClose) return;
    const onKey = (ev) => {
      if (ev.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /* @__PURE__ */ React.createElement("div", { className: "hv-modal-overlay", onMouseDown: (ev) => {
    if (ev.target === ev.currentTarget && onClose) onClose();
  } }, /* @__PURE__ */ React.createElement("div", { className: "hv-modal", role: "dialog", "aria-modal": "true", style: { maxWidth: width } }, title || description ? /* @__PURE__ */ React.createElement("header", { className: "hv-modal__head" }, title ? /* @__PURE__ */ React.createElement("h2", { className: "hv-modal__title" }, title) : null, description ? /* @__PURE__ */ React.createElement("p", { className: "hv-modal__desc" }, description) : null) : null, children ? /* @__PURE__ */ React.createElement("div", { className: "hv-modal__body" }, children) : null, footer ? /* @__PURE__ */ React.createElement("footer", { className: "hv-modal__foot" }, footer) : null));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Modal/Modal.jsx", error: String((e && e.message) || e) }); }

// components/ReviewActions/ReviewActions.jsx
try { (() => {
const hvReviewCss = `
.hv-iconbtn{appearance:none;display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border:none;background:none;border-radius:var(--radius-sm);color:var(--ink-400);cursor:pointer;transition:background-color var(--duration-soft) var(--ease-out),color var(--duration-fast) var(--ease-out);flex:none}
.hv-iconbtn:hover:not(:disabled){background:var(--ink-100);color:var(--ink-700)}
.hv-iconbtn:disabled{opacity:.4;cursor:not-allowed}
.hv-iconbtn:focus-visible{outline:2px solid var(--border-focus);outline-offset:1px}
.hv-iconbtn--approve:hover:not(:disabled){background:var(--status-positive-bg);color:var(--status-positive-text)}
.hv-iconbtn--reject:hover:not(:disabled){background:var(--status-negative-bg);color:var(--status-negative-text)}
.hv-review{display:inline-flex;align-items:center;gap:2px}
.hv-review__chip{display:inline-flex;align-items:center;gap:5px;font-family:var(--font-sans);font-size:11.5px;font-weight:500;line-height:1;padding:4px 9px;border-radius:var(--radius-sm);white-space:nowrap}
.hv-review__chip--approved{color:var(--status-positive-text);background:var(--status-positive-bg)}
.hv-review__chip--rejected{color:var(--status-negative-text);background:var(--status-negative-bg)}
.hv-review__undo{appearance:none;border:none;background:none;font-family:var(--font-sans);font-size:11.5px;color:var(--text-faint);cursor:pointer;padding:2px 4px;border-radius:4px}
.hv-review__undo:hover{color:var(--ink-700)}
`;
function hvEnsureReviewCss() {
  if (typeof document === "undefined" || document.getElementById("hv-review-css")) return;
  const s = document.createElement("style");
  s.id = "hv-review-css";
  s.textContent = hvReviewCss;
  document.head.appendChild(s);
}
const HV_TICK = /* @__PURE__ */ React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 14 14" }, /* @__PURE__ */ React.createElement("path", { d: "M2.5 7.5L5.5 10.5L11.5 3.5", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }));
const HV_CROSS = /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 14 14" }, /* @__PURE__ */ React.createElement("path", { d: "M3.5 3.5L10.5 10.5M10.5 3.5L3.5 10.5", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }));
function IconButton({ tone = "neutral", label, onClick, disabled = false, children }) {
  hvEnsureReviewCss();
  const toneClass = tone === "approve" ? " hv-iconbtn--approve" : tone === "reject" ? " hv-iconbtn--reject" : "";
  return /* @__PURE__ */ React.createElement("button", { type: "button", className: `hv-iconbtn${toneClass}`, "aria-label": label, title: label, onClick, disabled }, children);
}
function ReviewActions({ state, defaultState = "pending", onApprove, onReject, onUndo, undoable = true }) {
  hvEnsureReviewCss();
  const [internal, setInternal] = React.useState(defaultState);
  const current = state !== void 0 ? state : internal;
  const decide = (next) => {
    if (state === void 0) setInternal(next);
    if (next === "approved" && onApprove) onApprove();
    if (next === "rejected" && onReject) onReject();
  };
  const undo = () => {
    if (state === void 0) setInternal("pending");
    if (onUndo) onUndo();
  };
  if (current === "pending") {
    return /* @__PURE__ */ React.createElement("span", { className: "hv-review" }, /* @__PURE__ */ React.createElement(IconButton, { tone: "approve", label: "Approve", onClick: () => decide("approved") }, HV_TICK), /* @__PURE__ */ React.createElement(IconButton, { tone: "reject", label: "Reject", onClick: () => decide("rejected") }, HV_CROSS));
  }
  return /* @__PURE__ */ React.createElement("span", { className: "hv-review" }, /* @__PURE__ */ React.createElement("span", { className: `hv-review__chip hv-review__chip--${current}` }, current === "approved" ? "Approved" : "Rejected"), undoable ? /* @__PURE__ */ React.createElement("button", { type: "button", className: "hv-review__undo", onClick: undo }, "Undo") : null);
}
Object.assign(__ds_scope, { IconButton, ReviewActions });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ReviewActions/ReviewActions.jsx", error: String((e && e.message) || e) }); }

// components/Select/Select.jsx
try { (() => {
const hvSelectCss = `
.hv-selfield{display:flex;flex-direction:column;gap:6px;font-family:var(--font-sans)}
.hv-selfield__label{font-size:12.5px;font-weight:500;color:var(--ink-700)}
.hv-select{appearance:none;height:34px;padding:0 32px 0 12px;font-size:13.5px;font-family:var(--font-sans);color:var(--ink-900);background-color:var(--surface-card);border:none;border-radius:var(--radius-control);outline:none;box-sizing:border-box;width:100%;box-shadow:inset 0 0 0 1px var(--border-strong);cursor:pointer;transition:box-shadow var(--duration-soft) var(--ease-out),box-shadow var(--duration-fast) var(--ease-out);background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2.5 4.5L6 8l3.5-3.5' fill='none' stroke='%236E6E6C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center}
.hv-select:hover:not(:disabled):not(:focus){box-shadow:inset 0 0 0 1px var(--ink-300);}
.hv-select:focus{box-shadow:inset 0 0 0 1px var(--green-600);box-shadow:inset 0 0 0 1.5px var(--green-600)}
.hv-select:disabled{background-color:var(--ink-50);color:var(--text-faint);cursor:not-allowed}
.hv-selfield__hint{font-size:12px;color:var(--text-muted)}
`;
function hvEnsureSelectCss() {
  if (typeof document === "undefined" || document.getElementById("hv-select-css")) return;
  const s = document.createElement("style");
  s.id = "hv-select-css";
  s.textContent = hvSelectCss;
  document.head.appendChild(s);
}
function Select({ label, options = [], value, defaultValue, onChange, hint, disabled = false }) {
  hvEnsureSelectCss();
  return /* @__PURE__ */ React.createElement("label", { className: "hv-selfield" }, label ? /* @__PURE__ */ React.createElement("span", { className: "hv-selfield__label" }, label) : null, /* @__PURE__ */ React.createElement("select", { className: "hv-select", value, defaultValue, onChange, disabled }, options.map((opt) => {
    const o = typeof opt === "string" ? { value: opt, label: opt } : opt;
    return /* @__PURE__ */ React.createElement("option", { key: o.value, value: o.value }, o.label);
  })), hint ? /* @__PURE__ */ React.createElement("span", { className: "hv-selfield__hint" }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Select/Select.jsx", error: String((e && e.message) || e) }); }

// components/Sidebar/Sidebar.jsx
try { (() => {
const hvSidebarCss = `
.hv-side{display:flex;flex-direction:column;width:272px;height:100%;box-sizing:border-box;background:var(--surface-card);box-shadow:inset -1px 0 0 var(--border-subtle);font-family:var(--font-sans);transition:width var(--duration-screen) var(--ease-out);overflow:hidden}
.hv-side--collapsed{width:56px}
.hv-side__head{padding:14px 10px 10px}
.hv-side__ws{display:flex;align-items:center;gap:10px;padding:8px 10px;box-shadow:inset 0 0 0 1px var(--border-subtle);background:var(--surface-sunken);border-radius:var(--radius-md);cursor:pointer;transition:background-color var(--duration-soft) var(--ease-out);min-width:0}
.hv-side__ws:hover{background:var(--ink-100)}
.hv-side--collapsed .hv-side__ws{justify-content:center;padding:8px 0;border-color:transparent;background:none}
.hv-side__ws-logo{width:22px;height:22px;border-radius:5px;background:var(--ink-950);color:var(--white);display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:600;flex:none}
.hv-side__ws-name{font-size:12.5px;font-weight:500;color:var(--ink-950);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}
.hv-side__ws-caret{flex:none;color:var(--ink-400)}
.hv-side__nav{flex:1;overflow-y:auto;padding:0 10px 8px;display:flex;flex-direction:column}
.hv-side__group{display:flex;align-items:center;gap:8px;width:100%;padding:8px 10px;margin-top:4px; /* drift-ok: nav-group inset on the 4px control grid */border:none;background:none;border-radius:var(--radius-sm);font-family:var(--font-sans);font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-faint);cursor:pointer;transition:color var(--duration-soft) var(--ease-out),background-color var(--duration-fast) var(--ease-out)}
.hv-side__group:hover{background:var(--ink-50);color:var(--ink-700)}
.hv-side__group:disabled{color:var(--ink-200);cursor:default;background:none}
.hv-side__chev{flex:none;transition:transform var(--duration-screen) var(--ease-out)}
.hv-side__chev--open{transform:rotate(90deg)}
.hv-side__signal{margin-left:auto;width:6px;height:6px;border-radius:999px;background:var(--green-600);flex:none}
.hv-side__items{overflow:hidden;transition:max-height var(--duration-screen) var(--ease-out),opacity var(--duration-screen) var(--ease-out)}
.hv-side__item{position:relative;display:flex;align-items:center;gap:10px;width:100%;box-sizing:border-box;padding:6px 10px 6px 28px;margin:2px 0; /* drift-ok: nav-row inset, control interior */border:none;background:none;border-radius:var(--radius-sm);font-family:var(--font-sans);font-size:13px;color:var(--ink-900);cursor:pointer;text-align:left;transition:background-color var(--duration-soft) var(--ease-out)}
.hv-side__item:hover:not(:disabled){background:var(--ink-50)}
.hv-side__item:disabled{color:var(--ink-300);cursor:default}
.hv-side__item--active{background:var(--ink-50);font-weight:600;color:var(--ink-950)}
.hv-side__item--active::before{content:"";position:absolute;left:2px;top:6px;bottom:6px;width:2px;border-radius:2px;background:var(--ink-950)}
.hv-side__item--top{padding-left:10px;font-weight:500}
.hv-side--collapsed .hv-side__item{justify-content:center;padding:8px 0}
.hv-side__icon{flex:none;color:var(--text-muted);display:inline-flex}
.hv-side__item--active .hv-side__icon{color:var(--ink-950)}
.hv-side__item:disabled .hv-side__icon{color:var(--ink-200)}
.hv-side__label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}
.hv-side__pill{flex:none;font-size:10px;font-weight:500;line-height:1;padding:3px 7px;border-radius:999px}
.hv-side__pill--caution{color:var(--status-caution-text);background:var(--status-caution-bg)}
.hv-side__pill--positive{color:var(--status-positive-text);background:var(--status-positive-bg)}
.hv-side__pill--neutral{color:var(--ink-500);background:var(--ink-100)}
.hv-side__foot{padding:10px;border-top:1px solid var(--border-subtle)}
.hv-side__foot .hv-side__item{padding-left:10px;color:var(--text-muted)}
.hv-side__foot .hv-side__item:hover:not(:disabled){color:var(--ink-900)}
`;
function hvEnsureSidebarCss() {
  if (typeof document === "undefined" || document.getElementById("hv-sidebar-css")) return;
  const s = document.createElement("style");
  s.id = "hv-sidebar-css";
  s.textContent = hvSidebarCss;
  document.head.appendChild(s);
}
const hvChevron = (open) => /* @__PURE__ */ React.createElement("svg", { className: `hv-side__chev${open ? " hv-side__chev--open" : ""}`, width: "10", height: "10", viewBox: "0 0 12 12" }, /* @__PURE__ */ React.createElement("path", { d: "M4 2.5L8 6L4 9.5", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }));
const HV_ICON_PATHS = {
  dashboard: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("rect", { x: "2", y: "2", width: "5", height: "5", rx: "1.2" }), /* @__PURE__ */ React.createElement("rect", { x: "9", y: "2", width: "5", height: "5", rx: "1.2" }), /* @__PURE__ */ React.createElement("rect", { x: "2", y: "9", width: "5", height: "5", rx: "1.2" }), /* @__PURE__ */ React.createElement("path", { d: "M11.5 8.6L14.01 10.05V12.95L11.5 14.4L8.99 12.95V10.05Z" })),
  pipeline: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M2.5 3h11L9.5 7.8v4.7l-3-2V7.8L2.5 3Z" })),
  doc: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M4 2h5l3 3v9H4V2Z" }), /* @__PURE__ */ React.createElement("path", { d: "M9 2v3h3" })),
  bot: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M8 2.5L12.76 5.25V10.75L8 13.5L3.24 10.75V5.25Z" }), /* @__PURE__ */ React.createElement("path", { d: "M6.2 7.2v1.6M9.8 7.2v1.6" })),
  chart: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M2 13.5h12M4.5 10.5v-3M8 10.5V4.5M11.5 10.5V7" })),
  globe: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("circle", { cx: "8", cy: "8", r: "5.75" }), /* @__PURE__ */ React.createElement("path", { d: "M2.25 8h11.5M8 2.25c2.4 2 2.4 9.5 0 11.5M8 2.25c-2.4 2-2.4 9.5 0 11.5" })),
  clock: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("circle", { cx: "8", cy: "8", r: "5.75" }), /* @__PURE__ */ React.createElement("path", { d: "M8 5v3.2l2.2 1.3" })),
  upload: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M8 10.5V3M5 5.5 8 2.5l3 3M3 13.5h10" })),
  signout: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M6 2.5H3.5v11H6M10 5l3 3-3 3M13 8H6.5" })),
  moon: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M13 9.5A5.5 5.5 0 1 1 6.5 3a4.5 4.5 0 0 0 6.5 6.5Z" }))
};
function SidebarIcon({ name }) {
  return /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, HV_ICON_PATHS[name] || HV_ICON_PATHS.doc);
}
function HvNavItem({ item, active, collapsed, onNavigate, top = false }) {
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      disabled: item.disabled,
      title: collapsed ? item.label : void 0,
      className: `hv-side__item${active ? " hv-side__item--active" : ""}${top ? " hv-side__item--top" : ""}`,
      onClick: () => {
        if (onNavigate) onNavigate(item.id);
      }
    },
    item.icon ? /* @__PURE__ */ React.createElement("span", { className: "hv-side__icon" }, item.icon) : null,
    !collapsed ? /* @__PURE__ */ React.createElement("span", { className: "hv-side__label" }, item.label) : null,
    !collapsed && item.pill ? /* @__PURE__ */ React.createElement("span", { className: `hv-side__pill hv-side__pill--${item.pillTone || "neutral"}` }, item.pill) : null
  );
}
function Sidebar({ workspace, topItems = [], sections = [], footerItems = [], activeId, onNavigate, collapsed = false, height = "100%" }) {
  hvEnsureSidebarCss();
  const [expanded, setExpanded] = React.useState(() => {
    const init = {};
    sections.forEach((s) => {
      init[s.key] = s.defaultExpanded !== false;
    });
    return init;
  });
  const toggle = (key) => setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  const sectionEnabled = (s) => s.items.some((it) => !it.disabled);
  const sectionHasActive = (s) => s.items.some((it) => it.id === activeId);
  return /* @__PURE__ */ React.createElement("aside", { className: `hv-side${collapsed ? " hv-side--collapsed" : ""}`, style: { height } }, workspace ? /* @__PURE__ */ React.createElement("div", { className: "hv-side__head" }, /* @__PURE__ */ React.createElement("div", { className: "hv-side__ws", role: "button" }, /* @__PURE__ */ React.createElement("span", { className: "hv-side__ws-logo" }, workspace.initials || (workspace.name || "HV").slice(0, 2).toUpperCase()), !collapsed ? /* @__PURE__ */ React.createElement("span", { className: "hv-side__ws-name" }, workspace.name) : null, !collapsed && workspace.switchable ? /* @__PURE__ */ React.createElement("svg", { className: "hv-side__ws-caret", width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M3.5 4.5L6 2L8.5 4.5M3.5 7.5L6 10L8.5 7.5" })) : null)) : null, /* @__PURE__ */ React.createElement("nav", { className: "hv-side__nav" }, topItems.map((it) => /* @__PURE__ */ React.createElement(HvNavItem, { key: it.id, item: it, top: true, active: it.id === activeId, collapsed, onNavigate })), sections.map((s) => {
    const open = !!expanded[s.key] && !collapsed;
    const enabled = sectionEnabled(s);
    return /* @__PURE__ */ React.createElement("div", { key: s.key }, !collapsed ? /* @__PURE__ */ React.createElement("button", { type: "button", className: "hv-side__group", disabled: !enabled, onClick: () => toggle(s.key) }, hvChevron(open), /* @__PURE__ */ React.createElement("span", null, s.label), !open && sectionHasActive(s) ? /* @__PURE__ */ React.createElement("span", { className: "hv-side__signal" }) : null) : null, /* @__PURE__ */ React.createElement("div", { className: "hv-side__items", style: { maxHeight: open || collapsed ? 500 : 0, opacity: open || collapsed ? 1 : 0 } }, s.items.map((it) => /* @__PURE__ */ React.createElement(HvNavItem, { key: it.id, item: it, active: it.id === activeId, collapsed, onNavigate }))));
  })), footerItems.length ? /* @__PURE__ */ React.createElement("div", { className: "hv-side__foot" }, footerItems.map((it) => /* @__PURE__ */ React.createElement(HvNavItem, { key: it.id, item: it, active: false, collapsed, onNavigate }))) : null);
}
Object.assign(__ds_scope, { SidebarIcon, Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Sidebar/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/SignIn/SignIn.jsx
try { (() => {
const hvSignInCss = `
.hv-signin{display:grid;grid-template-columns:0.92fr 1fr;min-height:660px;border-radius:var(--radius-2xl);overflow:hidden;box-shadow:var(--shadow-elevated);font-family:var(--font-sans);color:var(--text-body)}
.hv-signin--solo{grid-template-columns:1fr;min-height:0}
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
  .hv-signin{grid-template-columns:1fr;min-height:0}
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
  if (typeof document === "undefined" || document.getElementById("hv-signin-css")) return;
  const s = document.createElement("style");
  s.id = "hv-signin-css";
  s.textContent = hvSignInCss;
  document.head.appendChild(s);
}
const HV_SIGNIN_PROVIDER_ICONS = {
  google: /* @__PURE__ */ React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 18 18", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { fill: "#4285F4", d: "M17.6 9.2c0-.6-.1-1.3-.2-1.8H9v3.5h4.8a4.1 4.1 0 0 1-1.8 2.7v2.2h2.9c1.7-1.6 2.7-3.9 2.7-6.6z" }), " ", /* @__PURE__ */ React.createElement("path", { fill: "#34A853", d: "M9 18c2.4 0 4.5-.8 6-2.2l-2.9-2.2c-.8.5-1.8.9-3.1.9-2.4 0-4.4-1.6-5.2-3.8H.9v2.3A9 9 0 0 0 9 18z" }), " ", /* @__PURE__ */ React.createElement("path", { fill: "#FBBC05", d: "M3.8 10.7a5.4 5.4 0 0 1 0-3.4V5H.9a9 9 0 0 0 0 8l2.9-2.3z" }), " ", /* @__PURE__ */ React.createElement("path", { fill: "#EA4335", d: "M9 3.6c1.3 0 2.5.5 3.4 1.3l2.6-2.6A9 9 0 0 0 .9 5l2.9 2.3C4.6 5.2 6.6 3.6 9 3.6z" }), " "),
  github: /* @__PURE__ */ React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 16 16", fill: "var(--ink-900)", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "M8 0C3.58 0 0 3.67 0 8.2c0 3.62 2.29 6.69 5.47 7.77.4.08.55-.18.55-.4l-.01-1.42c-2.23.5-2.7-1.1-2.7-1.1-.36-.96-.89-1.21-.89-1.21-.73-.51.05-.5.05-.5.8.06 1.23.85 1.23.85.72 1.26 1.88.9 2.34.68.07-.53.28-.9.51-1.1-1.78-.21-3.65-.91-3.65-4.06 0-.9.31-1.63.82-2.2-.08-.21-.36-1.05.08-2.18 0 0 .67-.22 2.2.84a8.2 8.2 0 0 1 4 0c1.53-1.06 2.2-.84 2.2-.84.44 1.13.16 1.97.08 2.18.51.57.82 1.3.82 2.2 0 3.16-1.87 3.85-3.66 4.05.29.26.54.75.54 1.52l-.01 2.25c0 .22.14.48.55.4A8.21 8.21 0 0 0 16 8.2C16 3.67 12.42 0 8 0z" }))
};
const hvSignInErrIcon = /* @__PURE__ */ React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("circle", { cx: "8", cy: "8", r: "6" }), /* @__PURE__ */ React.createElement("path", { d: "M8 5.2v3.4M8 10.6v.2" }));
const hvSignInLockIcon = /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("rect", { x: "3.5", y: "7", width: "9", height: "6.5", rx: "1.6" }), /* @__PURE__ */ React.createElement("path", { d: "M5.6 7V5a2.4 2.4 0 0 1 4.8 0v2" }));
const hvSignInBackIcon = /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "M10 3 5 8l5 5" }));
const hvSignInCheckIcon = /* @__PURE__ */ React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 16 16", fill: "none", stroke: "var(--green-700)", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8.5 6.5 12 13 4.5" }));
const HV_SIGNIN_GATE_DEFAULTS = {
  password: { cta: "Sign in", recover: "Forgot?" },
  magic: { cta: "Email me a link", recover: null },
  key: { cta: "Sign in", recover: "Need access?" },
  sso: { cta: null, recover: null }
};
function SignIn({
  logo,
  logoSrc,
  logoAlt = "",
  line,
  sub,
  links = [],
  plate = true,
  glass = false,
  gate = "magic",
  providers = [],
  title = "Sign in",
  subtitle,
  emailLabel = "Work email",
  emailPlaceholder = "name@company.com",
  passwordLabel = "Password",
  keyLabel = "Access key",
  keyPlaceholder = "Paste your key",
  cta,
  busy = false,
  busyLabel = "Signing in",
  error,
  sessionNote,
  defaultEmail = "",
  initialView = "gate",
  recovery = {},
  onSubmit,
  onProvider,
  onRecoverSubmit
}) {
  hvEnsureSignInCss();
  const uid = React.useId();
  const gateDef = HV_SIGNIN_GATE_DEFAULTS[gate] || HV_SIGNIN_GATE_DEFAULTS.magic;
  const [view, setView] = React.useState(initialView);
  const [email, setEmail] = React.useState(defaultEmail);
  const [password, setPassword] = React.useState("");
  const [keyVal, setKeyVal] = React.useState("");
  const [recEmail, setRecEmail] = React.useState("");
  const hasEmail = gate === "password" || gate === "magic";
  const hasPassword = gate === "password";
  const hasKey = gate === "key";
  const typed = (!hasEmail || email.length > 0) && (!hasPassword || password.length > 0) && (!hasKey || keyVal.length > 0);
  const blocked = !typed || busy;
  const note = sessionNote !== void 0 ? sessionNote : gate === "key" ? "Held for this browser session only — never written to the device." : null;
  const rec = {
    title: "Request access",
    sub: null,
    cta: "Send request",
    sentTitle: "Check your inbox",
    sentBoxTitle: "Request sent",
    sentBody: "If your address is on the account, a link is on its way.",
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
    setView("sent");
  };
  const mark = logo || (logoSrc ? /* @__PURE__ */ React.createElement("img", { src: logoSrc, alt: logoAlt }) : null);
  const errId = `${uid}-err`;
  const field = (props) => /* @__PURE__ */ React.createElement(
    "input",
    {
      className: `hv-signin__fld${error && view === "gate" ? " hv-signin__fld--bad" : ""}`,
      readOnly: busy || void 0,
      "aria-invalid": error ? "true" : "false",
      "aria-describedby": error ? errId : void 0,
      ...props
    }
  );
  const errorRow = error ? /* @__PURE__ */ React.createElement("div", { className: "hv-signin__err", id: errId, role: "alert" }, hvSignInErrIcon, /* @__PURE__ */ React.createElement("span", null, error)) : null;
  const providerButtons = providers.length ? /* @__PURE__ */ React.createElement("div", { className: "hv-signin__provs" }, providers.map((p) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: p.id || p.label,
      type: "button",
      className: "hv-signin__sso",
      disabled: busy || void 0,
      onClick: () => {
        if (p.onClick) p.onClick();
        else if (onProvider) onProvider(p.id);
      }
    },
    p.icon || HV_SIGNIN_PROVIDER_ICONS[p.id] || null,
    p.label
  ))) : null;
  const recoverLink = gateDef.recover ? /* @__PURE__ */ React.createElement("button", { type: "button", className: "hv-signin__lnk", onClick: () => setView("recover") }, gateDef.recover) : null;
  const gateView = /* @__PURE__ */ React.createElement("form", { onSubmit: submit, noValidate: true }, /* @__PURE__ */ React.createElement("h2", { className: "hv-signin__h" }, title), subtitle ? /* @__PURE__ */ React.createElement("p", { className: "hv-signin__sub" }, subtitle) : null, providerButtons, providers.length && gate !== "sso" ? /* @__PURE__ */ React.createElement("div", { className: "hv-signin__or" }, /* @__PURE__ */ React.createElement("i", null), /* @__PURE__ */ React.createElement("span", null, "or"), /* @__PURE__ */ React.createElement("i", null)) : null, gate !== "sso" ? /* @__PURE__ */ React.createElement("div", { className: "hv-signin__fields", style: providers.length ? { marginTop: 0 } : void 0 }, hasEmail ? /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "hv-signin__lblrow" }, /* @__PURE__ */ React.createElement("label", { className: "hv-signin__lbl", htmlFor: `${uid}-email` }, emailLabel), !hasPassword ? recoverLink : null), field({ id: `${uid}-email`, type: "email", placeholder: emailPlaceholder, value: email, autoComplete: "email", autoFocus: true, onChange: (ev) => setEmail(ev.target.value) })) : null, hasPassword ? /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "hv-signin__lblrow" }, /* @__PURE__ */ React.createElement("label", { className: "hv-signin__lbl", htmlFor: `${uid}-pass` }, passwordLabel), recoverLink), field({ id: `${uid}-pass`, type: "password", value: password, autoComplete: "current-password", onChange: (ev) => setPassword(ev.target.value) })) : null, hasKey ? /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "hv-signin__lblrow" }, /* @__PURE__ */ React.createElement("label", { className: "hv-signin__lbl", htmlFor: `${uid}-key` }, keyLabel), recoverLink), field({ id: `${uid}-key`, type: "password", placeholder: keyPlaceholder, value: keyVal, autoComplete: "off", autoFocus: true, onChange: (ev) => setKeyVal(ev.target.value) })) : null, errorRow) : null, gate !== "sso" ? /* @__PURE__ */ React.createElement("div", { className: "hv-signin__ctarow" }, /* @__PURE__ */ React.createElement("button", { type: "submit", className: "hv-signin__cta", disabled: blocked }, busy ? /* @__PURE__ */ React.createElement("span", { className: "hv-signin__spin", "data-motion": "essential" }) : null, busy ? busyLabel : cta || gateDef.cta)) : null, note ? /* @__PURE__ */ React.createElement("div", { className: "hv-signin__legal" }, hvSignInLockIcon, /* @__PURE__ */ React.createElement("span", null, note)) : null);
  const recoverView = /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", { type: "button", className: "hv-signin__back", onClick: () => setView("gate") }, hvSignInBackIcon, "Back to sign in"), /* @__PURE__ */ React.createElement("h2", { className: "hv-signin__h" }, view === "sent" ? rec.sentTitle : rec.title), view === "sent" ? null : rec.sub ? /* @__PURE__ */ React.createElement("p", { className: "hv-signin__sub" }, rec.sub) : null, view === "recover" ? /* @__PURE__ */ React.createElement("form", { onSubmit: submitRecover, noValidate: true }, /* @__PURE__ */ React.createElement("div", { className: "hv-signin__fields" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "hv-signin__lblrow" }, /* @__PURE__ */ React.createElement("label", { className: "hv-signin__lbl", htmlFor: `${uid}-rec` }, emailLabel)), /* @__PURE__ */ React.createElement("input", { id: `${uid}-rec`, className: "hv-signin__fld", type: "email", placeholder: emailPlaceholder, value: recEmail, autoComplete: "email", autoFocus: true, onChange: (ev) => setRecEmail(ev.target.value) }))), /* @__PURE__ */ React.createElement("div", { className: "hv-signin__ctarow" }, /* @__PURE__ */ React.createElement("button", { type: "submit", className: "hv-signin__cta" }, rec.cta))) : /* @__PURE__ */ React.createElement("div", { className: "hv-signin__sent" }, hvSignInCheckIcon, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", { className: "hv-signin__sent-t" }, rec.sentBoxTitle), /* @__PURE__ */ React.createElement("span", { className: "hv-signin__sent-b", style: { display: "block" } }, rec.sentBody))));
  const utilityLinks = (cls) => links.length ? /* @__PURE__ */ React.createElement("div", { className: cls }, links.map((l, i) => /* @__PURE__ */ React.createElement(React.Fragment, { key: l.label }, i > 0 ? /* @__PURE__ */ React.createElement("span", { className: "hv-signin__sep" }) : null, /* @__PURE__ */ React.createElement("a", { href: l.href || "#", onClick: l.onClick }, l.label)))) : null;
  return /* @__PURE__ */ React.createElement("div", { className: `hv-signin${plate ? "" : " hv-signin--solo"}${glass ? " hv-signin--glass" : ""}` }, plate ? /* @__PURE__ */ React.createElement("div", { className: "hv-signin__plate" }, /* @__PURE__ */ React.createElement("span", { className: "hv-signin__glow" }), /* @__PURE__ */ React.createElement("span", { className: "hv-signin__dots" }), /* @__PURE__ */ React.createElement("div", { className: "hv-signin__platein" }, /* @__PURE__ */ React.createElement("div", { className: "hv-signin__lock" }, mark), line ? /* @__PURE__ */ React.createElement("div", { className: "hv-signin__line" }, line) : null, sub ? /* @__PURE__ */ React.createElement("div", { className: "hv-signin__platesub" }, sub) : null, utilityLinks("hv-signin__links"))) : null, /* @__PURE__ */ React.createElement("div", { className: "hv-signin__form" }, /* @__PURE__ */ React.createElement("div", { className: "hv-signin__formin" }, view === "gate" ? gateView : recoverView, plate ? utilityLinks("hv-signin__mlinks") : null)));
}
Object.assign(__ds_scope, { SignIn });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/SignIn/SignIn.jsx", error: String((e && e.message) || e) }); }

// components/SignatureBlock/SignatureBlock.jsx
try { (() => {
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
  if (typeof document === "undefined" || document.getElementById("hv-signatureblock-css")) return;
  const s = document.createElement("style");
  s.id = "hv-signatureblock-css";
  s.textContent = hvSignatureBlockCss;
  document.head.appendChild(s);
}
function SignatureBlock({
  summary = [],
  eyebrow = "Signature",
  namePlaceholder = "Full legal name",
  name,
  defaultName = "",
  onNameChange,
  authLabel = "I’m authorized to sign",
  authorized,
  defaultAuthorized = false,
  onAuthorizedChange,
  caption = "Signature — drawn from your typed name",
  ctaLabel = "Sign & accept",
  note = "Signing starts onboarding — no payment is taken today.",
  signed,
  defaultSigned = false,
  signedLabel,
  signedNote,
  onSign,
  loading = false
}) {
  hvEnsureSignatureBlockCss();
  const ns = typeof window !== "undefined" && window.HivoryDesignSystem_354905 || {};
  const DsInput = ns.Input;
  const DsCheckbox = ns.Checkbox;
  const DsButton = ns.Button;
  const DsSpinner = ns.Spinner;
  const [nameState, setNameState] = React.useState(defaultName);
  const [authState, setAuthState] = React.useState(defaultAuthorized);
  const [signedState, setSignedState] = React.useState(defaultSigned);
  const theName = name !== void 0 ? name : nameState;
  const theAuth = authorized !== void 0 ? authorized : authState;
  const isSigned = signed !== void 0 ? signed : signedState;
  const trimmed = (theName || "").trim();
  const ready = trimmed.length > 1 && theAuth;
  const locked = isSigned || loading;
  const handleName = (e) => {
    if (name === void 0) setNameState(e.target.value);
    if (onNameChange) onNameChange(e.target.value, e);
  };
  const handleAuth = (e) => {
    const v = e && e.target ? e.target.checked : !theAuth;
    if (authorized === void 0) setAuthState(v);
    if (onAuthorizedChange) onAuthorizedChange(v, e);
  };
  const handleSign = () => {
    if (!ready || locked) return;
    if (signed === void 0) setSignedState(true);
    if (onSign) onSign(trimmed);
  };
  const ctaText = isSigned ? signedLabel || "Signed" : ctaLabel;
  const noteText = isSigned ? signedNote || note : note;
  return /* @__PURE__ */ React.createElement("div", { className: "hv-sig" }, summary.length ? /* @__PURE__ */ React.createElement("div", { className: "hv-sig__summary" }, summary.map((row, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "hv-sig__srow" }, /* @__PURE__ */ React.createElement("span", { className: "hv-sig__slabel" }, row.label), /* @__PURE__ */ React.createElement("span", { className: "hv-sig__svalue" }, row.value)))) : null, eyebrow ? /* @__PURE__ */ React.createElement("div", { className: "hv-sig__eyebrow" + (summary.length ? "" : " hv-sig__eyebrow--first") }, eyebrow) : null, /* @__PURE__ */ React.createElement("div", { className: "hv-sig__field" }, DsInput ? /* @__PURE__ */ React.createElement(DsInput, { placeholder: namePlaceholder, value: theName, onChange: handleName, disabled: locked }) : /* @__PURE__ */ React.createElement("input", { className: "hv-sig__nativeinput", placeholder: namePlaceholder, value: theName, onChange: handleName, disabled: locked })), /* @__PURE__ */ React.createElement("div", { className: "hv-sig__line", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("span", { className: "hv-sig__ink" }, trimmed)), /* @__PURE__ */ React.createElement("div", { className: "hv-sig__caption" }, caption), /* @__PURE__ */ React.createElement("div", { className: "hv-sig__auth" }, DsCheckbox ? /* @__PURE__ */ React.createElement(DsCheckbox, { label: authLabel, checked: theAuth, onChange: handleAuth, disabled: locked }) : /* @__PURE__ */ React.createElement("label", { className: "hv-sig__nativeauth" }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: theAuth, onChange: handleAuth, disabled: locked }), authLabel)), /* @__PURE__ */ React.createElement("div", { className: "hv-sig__act" }, DsButton ? /* @__PURE__ */ React.createElement(DsButton, { variant: "brand", size: "lg", disabled: !ready || locked, onClick: handleSign }, /* @__PURE__ */ React.createElement("span", { className: "hv-sig__ctahold" + (loading ? " hv-sig__ctahold--busy" : "") }, /* @__PURE__ */ React.createElement("span", { className: "hv-sig__ctalabel" }, ctaText), loading ? /* @__PURE__ */ React.createElement("span", { className: "hv-sig__ctaspin" }, DsSpinner ? /* @__PURE__ */ React.createElement(DsSpinner, { size: 14, tone: "ink" }) : null) : null)) : /* @__PURE__ */ React.createElement("button", { type: "button", disabled: !ready || locked, onClick: handleSign }, ctaText)), /* @__PURE__ */ React.createElement("div", { className: "hv-sig__note" }, noteText));
}
Object.assign(__ds_scope, { SignatureBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/SignatureBlock/SignatureBlock.jsx", error: String((e && e.message) || e) }); }

// components/Spinner/Spinner.jsx
try { (() => {
const hvSpinnerCss = `
.hv-spin{display:inline-flex;align-items:center;gap:8px;font-family:var(--font-sans)}
.hv-spin__svg{display:block;flex:none}
.hv-spin__head{transform-origin:50% 50%;animation:hv-spin-cw var(--duration-spinner) linear infinite}
.hv-spin__track{transform-origin:50% 50%;animation:hv-spin-ccw calc(var(--duration-spinner) * 3) linear infinite}
.hv-spin--calm .hv-spin__head{animation-duration:2.4s}
.hv-spin--calm .hv-spin__track{animation-duration:7s}
.hv-spin__label{font-size:12.5px;font-weight:500;color:var(--text-muted);line-height:1}
.hv-spin--on-dark .hv-spin__label{color:var(--ink-300)}
@keyframes hv-spin-cw{to{transform:rotate(360deg)}}
@keyframes hv-spin-ccw{to{transform:rotate(-360deg)}}
@media (prefers-reduced-motion: reduce){
  .hv-spin__head,.hv-spin__track{animation:none;opacity:.6}
}
.hv-pulsedot{position:relative;display:inline-block;border-radius:999px;flex:none}
.hv-pulsedot::after{content:"";position:absolute;inset:0;border-radius:999px;background:inherit;animation:hv-pulse var(--duration-pulse) var(--ease-out) infinite}
@media (prefers-reduced-motion: reduce){.hv-pulsedot::after{animation:none}}
@keyframes hv-pulse{0%{transform:scale(1);opacity:.55}80%,100%{transform:scale(2.6);opacity:0}}
`;
function hvEnsureSpinnerCss() {
  if (typeof document === "undefined" || document.getElementById("hv-spinner-css")) return;
  const s = document.createElement("style");
  s.id = "hv-spinner-css";
  s.textContent = hvSpinnerCss;
  document.head.appendChild(s);
}
const HV_SPIN_TONES = {
  brand: { head: "var(--green-600)", track: "var(--green-300)" },
  ink: { head: "var(--ink-700)", track: "var(--ink-200)" },
  "on-dark": { head: "var(--green-500)", track: "var(--ink-700)" }
};
const HV_HEX_A = "M12 3 L19.79 7.5 L19.79 16.5 L12 21 L4.21 16.5 L4.21 7.5 Z";
const HV_HEX_B = "M16.5 4.21 L21 12 L16.5 19.79 L7.5 19.79 L3 12 L7.5 4.21 Z";
function Spinner({ size = 16, tone = "brand", label, calm = false }) {
  hvEnsureSpinnerCss();
  const c = HV_SPIN_TONES[tone] || HV_SPIN_TONES.brand;
  return /* @__PURE__ */ React.createElement(
    "span",
    {
      className: `hv-spin${calm ? " hv-spin--calm" : ""}${tone === "on-dark" ? " hv-spin--on-dark" : ""}`,
      role: "status",
      "aria-label": typeof label === "string" ? label : "Working"
    },
    /* @__PURE__ */ React.createElement("svg", { className: "hv-spin__svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { className: "hv-spin__track", d: HV_HEX_B, stroke: c.track, strokeWidth: "2", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { className: "hv-spin__head", d: HV_HEX_A, stroke: c.head, strokeWidth: "2", strokeLinejoin: "round", strokeLinecap: "round", strokeDasharray: "38 16" })),
    label ? /* @__PURE__ */ React.createElement("span", { className: "hv-spin__label" }, label) : null
  );
}
const HV_PULSE_TONES = {
  positive: "var(--green-600)",
  caution: "var(--status-caution-text)",
  info: "var(--status-info-text)",
  negative: "var(--status-negative-text)"
};
function PulseDot({ tone = "positive", size = 7 }) {
  hvEnsureSpinnerCss();
  return /* @__PURE__ */ React.createElement(
    "span",
    {
      className: "hv-pulsedot",
      style: { width: size, height: size, background: HV_PULSE_TONES[tone] || HV_PULSE_TONES.positive },
      "aria-hidden": "true"
    }
  );
}
Object.assign(__ds_scope, { Spinner, PulseDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Spinner/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/SplitButton/SplitButton.jsx
try { (() => {
const hvSplitButtonCss = `
.hv-split{position:relative;display:inline-flex;align-items:stretch;font-family:var(--font-sans)}
.hv-split__main,.hv-split__chev{appearance:none;border:none;font-family:var(--font-sans);font-weight:var(--weight-semibold);cursor:pointer;white-space:nowrap;box-sizing:border-box;transition:background-color var(--transition-soft),filter var(--duration-fast) var(--ease-out)}
.hv-split__main{height:33px;padding:0 18px;border-radius:var(--radius-pill) 0 0 var(--radius-pill);font-size:var(--text-sm);display:inline-flex;align-items:center;gap:6px}
.hv-split__main--solo{border-radius:var(--radius-pill)}
.hv-split__chev{height:33px;width:30px;padding:0;border-radius:0 var(--radius-pill) var(--radius-pill) 0;display:inline-flex;align-items:center;justify-content:center;box-shadow:inset 1px 0 0 rgba(255,255,255,0.18)}
.hv-split--sm .hv-split__main{height:26px;padding:0 13px;font-size:var(--text-label)}
.hv-split--sm .hv-split__chev{height:26px;width:25px}
.hv-split--primary .hv-split__main,.hv-split--primary .hv-split__chev{background:var(--action-primary);color:var(--on-action-primary)}
.hv-split--primary .hv-split__main:hover:not(:disabled),.hv-split--primary .hv-split__chev:hover:not(:disabled){background:var(--action-primary-hover)}
.hv-split--brand .hv-split__main,.hv-split--brand .hv-split__chev{background:var(--action-brand);color:var(--on-action-brand);font-weight:650}
.hv-split--brand .hv-split__main:hover:not(:disabled),.hv-split--brand .hv-split__chev:hover:not(:disabled){background:var(--action-brand-hover)}
.hv-split--brand .hv-split__chev{box-shadow:inset 1px 0 0 rgba(8,16,11,0.18)}
.hv-split__main:active:not(:disabled),.hv-split__chev:active:not(:disabled){filter:brightness(0.94)}
.hv-split__main:focus-visible,.hv-split__chev:focus-visible{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-split__main:disabled,.hv-split__chev:disabled{opacity:.45;cursor:not-allowed}
.hv-split__spinner{flex:none;animation:hv-split-spin var(--duration-spinner) linear infinite}
@keyframes hv-split-spin{to{transform:rotate(360deg)}}
@media (prefers-reduced-motion: reduce){.hv-split__spinner{animation-duration:2.4s}}
.hv-split__menu{position:absolute;right:0;min-width:208px;background:var(--surface-card);border-radius:var(--radius-xl);box-shadow:var(--shadow-overlay);padding:5px;z-index:30;box-sizing:border-box}
.hv-split__menu--up{bottom:calc(100% + 6px);animation:hv-split-in-up var(--duration-soft) var(--ease-out)}
.hv-split__menu--down{top:calc(100% + 6px);animation:hv-split-in-down var(--duration-soft) var(--ease-out)}
@keyframes hv-split-in-up{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
@keyframes hv-split-in-down{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}
.hv-split__item{display:flex;flex-direction:column;align-items:flex-start;gap:3px;width:100%;box-sizing:border-box;padding:7px 10px;border:none;background:none;border-radius:var(--radius-sm);font-family:var(--font-sans);font-size:var(--text-base);color:var(--ink-900);text-align:left;cursor:pointer;transition:background-color var(--duration-soft) var(--ease-out),filter var(--duration-fast) var(--ease-out)}
.hv-split__item:hover{background:var(--ink-50)}
.hv-split__item:active{filter:brightness(0.94)}
.hv-split__item:focus-visible{outline:2px solid var(--border-focus);outline-offset:-2px}
.hv-split__item-sub{font-size:var(--text-label);color:var(--text-faint)}
`;
function hvEnsureSplitButtonCss() {
  if (typeof document === "undefined" || document.getElementById("hv-splitbutton-css")) return;
  const s = document.createElement("style");
  s.id = "hv-splitbutton-css";
  s.textContent = hvSplitButtonCss;
  document.head.appendChild(s);
}
function SplitButton({
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  direction = "up",
  items = [],
  onAction,
  onSelect,
  chevronLabel = "More options",
  defaultOpen = false,
  children
}) {
  hvEnsureSplitButtonCss();
  const [open, setOpen] = React.useState(defaultOpen);
  const ref = React.useRef(null);
  const chevRef = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (ev) => {
      if (ref.current && !ref.current.contains(ev.target)) setOpen(false);
    };
    const onKey = (ev) => {
      if (ev.key !== "Escape") return;
      setOpen(false);
      if (chevRef.current) chevRef.current.focus();
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  const solo = items.length === 0;
  const spinner = /* @__PURE__ */ React.createElement("svg", { className: "hv-split__spinner", "data-motion": "essential", width: "12", height: "12", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "M8 1.5A6.5 6.5 0 1 1 1.5 8" }));
  return /* @__PURE__ */ React.createElement("span", { className: `hv-split hv-split--${variant} hv-split--${size}`, ref }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      disabled: disabled || loading,
      className: `hv-split__main${solo ? " hv-split__main--solo" : ""}`,
      onClick: onAction
    },
    loading ? spinner : null,
    children
  ), solo ? null : /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      ref: chevRef,
      disabled: disabled || loading,
      className: "hv-split__chev",
      "aria-haspopup": "menu",
      "aria-expanded": open,
      "aria-label": chevronLabel,
      onClick: () => setOpen(!open)
    },
    /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, direction === "up" ? /* @__PURE__ */ React.createElement("path", { d: "m4 9.5 4-4 4 4" }) : /* @__PURE__ */ React.createElement("path", { d: "m4 6.5 4 4 4-4" }))
  ), open && !solo && !disabled && !loading ? /* @__PURE__ */ React.createElement("div", { className: `hv-split__menu hv-split__menu--${direction}`, role: "menu", "aria-label": chevronLabel }, items.map((it) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: it.id,
      type: "button",
      role: "menuitem",
      className: "hv-split__item",
      onClick: () => {
        setOpen(false);
        if (onSelect) onSelect(it.id);
      }
    },
    it.label,
    it.sub ? /* @__PURE__ */ React.createElement("span", { className: "hv-split__item-sub" }, it.sub) : null
  ))) : null);
}
Object.assign(__ds_scope, { SplitButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/SplitButton/SplitButton.jsx", error: String((e && e.message) || e) }); }

// components/StatCard/StatCard.jsx
try { (() => {
const hvStatCardCss = `
.hv-statcard{display:flex;flex-direction:column;justify-content:space-between;min-height:108px;padding:16px 18px;border-radius:var(--radius-xl);background:var(--surface-card);box-shadow:var(--shadow-card);font-family:var(--font-sans);color:var(--text-body)}
.hv-statcard__label{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--text-muted)}
.hv-statcard__value{font-size:28px;font-weight:var(--weight-display);letter-spacing:-0.02em;line-height:1.05;color:var(--ink-950);font-variant-numeric:tabular-nums}
.hv-statcard__value--absent{color:var(--text-faint)}
.hv-statcard__sub{margin-top:3px;font-size:11.5px;line-height:1.4;color:var(--text-faint)}
.hv-statcard__skel{height:28px;width:76px;border-radius:var(--radius-sm);background:var(--ink-100)}
.hv-statcard__skel--sub{height:11px;width:52px;margin-top:3px}
`;
function hvEnsureStatCardCss() {
  if (typeof document === "undefined" || document.getElementById("hv-statcard-css")) return;
  const s = document.createElement("style");
  s.id = "hv-statcard-css";
  s.textContent = hvStatCardCss;
  document.head.appendChild(s);
}
function StatCard({ label, value, sub, info = null, loading = false }) {
  hvEnsureStatCardCss();
  const absent = value == null;
  return /* @__PURE__ */ React.createElement("div", { className: "hv-statcard" }, /* @__PURE__ */ React.createElement("div", { className: "hv-statcard__label" }, /* @__PURE__ */ React.createElement("span", null, label), info), loading ? (
    /* Skeleton the reading and qualifier at their exact heights; the label
       stays real — it is known before the number is. */
    /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "hv-statcard__skel" }), sub ? /* @__PURE__ */ React.createElement("div", { className: "hv-statcard__skel hv-statcard__skel--sub" }) : null)
  ) : /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: `hv-statcard__value${absent ? " hv-statcard__value--absent" : ""}` }, absent ? "—" : value), sub ? /* @__PURE__ */ React.createElement("div", { className: "hv-statcard__sub" }, sub) : null));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/StatCard/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/StepTimeline/StepTimeline.jsx
try { (() => {
const hvStepTimelineCss = `
.hv-steptl{display:inline-flex;flex-direction:column;align-items:center;font-family:var(--font-sans);color:var(--text-body)}
.hv-steptl__mark{position:relative;width:30px;height:34px;flex:none}
.hv-steptl__hex{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;animation:hv-steptl-cw var(--duration-spinner) steps(6) infinite}
.hv-steptl__hex--counter{opacity:0.5;animation-name:hv-steptl-ccw}
.hv-steptl__label{margin-top:12px;font-size:15px;font-weight:650;letter-spacing:-0.015em}
.hv-steptl__label--failed{color:var(--red-700)}
.hv-steptl__elapsed{margin-top:3px;font-size:15px;font-weight:600;color:var(--ink-600);font-variant-numeric:tabular-nums}
.hv-steptl__rail{display:flex;margin-top:20px}
.hv-steptl__ph{position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;width:78px}
.hv-steptl__link{position:absolute;top:7px;left:-31px;width:62px;height:2px;border-radius:var(--radius-pill);background:var(--ink-200);transition:background var(--duration-slow) var(--ease-out)}
.hv-steptl__link--past{background:var(--green-600)}
.hv-steptl__node{position:relative;width:16px;height:16px;border-radius:var(--radius-pill);display:inline-flex;align-items:center;justify-content:center;background:var(--white);box-shadow:inset 0 0 0 1.5px var(--ink-200);transition:background var(--duration-soft) var(--ease-out),box-shadow var(--duration-soft) var(--ease-out)}
.hv-steptl__node--done,.hv-steptl__node--active{background:var(--green-600);box-shadow:none}
.hv-steptl__node--active{animation:hv-steptl-pulse var(--duration-pulse) var(--ease-out) infinite}
.hv-steptl__node--failed{background:var(--red-700);box-shadow:none;animation:none}
.hv-steptl__core{width:5px;height:5px;border-radius:var(--radius-pill);background:var(--white)}
.hv-steptl__lb{font-size:11.5px;text-align:center;color:var(--text-muted);font-weight:550;transition:color var(--duration-soft) var(--ease-out)}
.hv-steptl__lb--reached{color:var(--ink-900)}
.hv-steptl__lb--active{font-weight:650}
.hv-steptl__lb--failed{color:var(--red-700);font-weight:650}
.hv-steptl__arrival{display:flex;align-items:center;gap:12px;font-family:var(--font-sans);color:var(--text-body)}
.hv-steptl__arrival-hex{width:34px;height:39px;display:inline-flex;align-items:center;justify-content:center;flex:none}
.hv-steptl__arrival-title{display:block;font-size:14px;font-weight:650;letter-spacing:-0.015em}
.hv-steptl__arrival-meta{display:block;margin-top:3px;font-size:11.5px;color:var(--text-muted);font-variant-numeric:tabular-nums}
@keyframes hv-steptl-cw{to{transform:rotate(360deg)}}
@keyframes hv-steptl-ccw{to{transform:rotate(-360deg)}}
@keyframes hv-steptl-pulse{0%{box-shadow:0 0 0 0 color-mix(in srgb, var(--green-600) 35%, transparent)}70%{box-shadow:0 0 0 7px color-mix(in srgb, var(--green-600) 0%, transparent)}100%{box-shadow:0 0 0 0 color-mix(in srgb, var(--green-600) 0%, transparent)}}
@media (prefers-reduced-motion: reduce){
  .hv-steptl__hex,.hv-steptl__node--active{animation-duration:2.4s !important;animation-iteration-count:infinite !important}
}
`;
function hvEnsureStepTimelineCss() {
  if (typeof document === "undefined" || document.getElementById("hv-steptimeline-css")) return;
  const s = document.createElement("style");
  s.id = "hv-steptimeline-css";
  s.textContent = hvStepTimelineCss;
  document.head.appendChild(s);
}
function HvTlCheck() {
  return /* @__PURE__ */ React.createElement("svg", { width: "9", height: "9", viewBox: "0 0 16 16", fill: "none", stroke: "var(--white)", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8.5 6.5 12 13 4.5" }));
}
function HvTlCross() {
  return /* @__PURE__ */ React.createElement("svg", { width: "9", height: "9", viewBox: "0 0 16 16", fill: "none", stroke: "var(--white)", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "M4.5 4.5l7 7M11.5 4.5l-7 7" }));
}
function StepTimeline({ phases = [], active = 0, label, elapsed, failed = false, arrived, mark = true }) {
  hvEnsureStepTimelineCss();
  if (arrived) {
    return /* @__PURE__ */ React.createElement("div", { className: "hv-steptl__arrival" }, /* @__PURE__ */ React.createElement("span", { className: "hv-steptl__arrival-hex", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("svg", { width: "30", height: "34", viewBox: "0 0 16 16", fill: "none", stroke: "var(--green-600)", strokeWidth: "1", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M8 2.6 12.68 5.3v5.4L8 13.4 3.32 10.7V5.3Z" }), /* @__PURE__ */ React.createElement("path", { d: "M6 8.2 7.5 9.7 10.2 6.4", strokeWidth: "1.7", strokeLinecap: "round" }))), /* @__PURE__ */ React.createElement("span", { style: { minWidth: 0 } }, /* @__PURE__ */ React.createElement("span", { className: "hv-steptl__arrival-title" }, arrived.title), arrived.meta ? /* @__PURE__ */ React.createElement("span", { className: "hv-steptl__arrival-meta" }, arrived.meta) : null));
  }
  return /* @__PURE__ */ React.createElement("div", { className: "hv-steptl" }, mark && !failed ? /* @__PURE__ */ React.createElement("span", { className: "hv-steptl__mark", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("span", { className: "hv-steptl__hex", "data-motion": "essential" }, /* @__PURE__ */ React.createElement("svg", { width: "26", height: "30", viewBox: "0 0 16 16", fill: "none", stroke: "var(--green-600)", strokeWidth: "1.15", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M8 2.1 12.9 4.95v5.7L8 13.5 3.1 10.65V4.95Z" }))), /* @__PURE__ */ React.createElement("span", { className: "hv-steptl__hex hv-steptl__hex--counter", "data-motion": "essential" }, /* @__PURE__ */ React.createElement("svg", { width: "26", height: "30", viewBox: "0 0 16 16", fill: "none", stroke: "var(--green-600)", strokeWidth: "1.15", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M13.4 8l-2.7 4.68H5.3L2.6 8l2.7-4.68h5.4Z" })))) : null, label ? /* @__PURE__ */ React.createElement("div", { className: `hv-steptl__label${failed ? " hv-steptl__label--failed" : ""}`, "aria-live": "polite" }, label) : null, elapsed ? /* @__PURE__ */ React.createElement("div", { className: "hv-steptl__elapsed" }, elapsed) : null, /* @__PURE__ */ React.createElement("div", { className: "hv-steptl__rail", "aria-hidden": "true" }, phases.map((name, i) => {
    const isDone = i < active;
    const isActive = i === active;
    const isFailed = isActive && failed;
    const reached = i <= active;
    const nodeCls = isFailed ? " hv-steptl__node--failed" : isDone ? " hv-steptl__node--done" : isActive ? " hv-steptl__node--active" : "";
    const lbCls = isFailed ? " hv-steptl__lb--failed" : (reached ? " hv-steptl__lb--reached" : "") + (isActive ? " hv-steptl__lb--active" : "");
    return /* @__PURE__ */ React.createElement("div", { key: i, className: "hv-steptl__ph" }, i > 0 ? /* @__PURE__ */ React.createElement("span", { className: `hv-steptl__link${reached ? " hv-steptl__link--past" : ""}` }) : null, /* @__PURE__ */ React.createElement("span", { className: `hv-steptl__node${nodeCls}`, "data-motion": isActive && !failed ? "essential" : void 0 }, isDone ? /* @__PURE__ */ React.createElement(HvTlCheck, null) : isFailed ? /* @__PURE__ */ React.createElement(HvTlCross, null) : isActive ? /* @__PURE__ */ React.createElement("span", { className: "hv-steptl__core" }) : null), /* @__PURE__ */ React.createElement("span", { className: `hv-steptl__lb${lbCls}` }, name));
  })));
}
Object.assign(__ds_scope, { StepTimeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/StepTimeline/StepTimeline.jsx", error: String((e && e.message) || e) }); }

// components/Stepper/Stepper.jsx
try { (() => {
const hvStepperCss = `
.hv-stepper{width:224px;box-sizing:border-box;border-radius:var(--radius-2xl);background:var(--glass-fill);-webkit-backdrop-filter:var(--glass-blur);backdrop-filter:var(--glass-blur);box-shadow:var(--shadow-glass-ring);padding:12px 10px;font-family:var(--font-sans)}
.hv-stepper__head{font-size:var(--text-eyebrow);font-weight:650;letter-spacing:var(--tracking-eyebrow);text-transform:uppercase;color:var(--ink-400);padding:6px 9px 8px}
.hv-stepper__steps{position:relative;display:flex;flex-direction:column;gap:3px}
.hv-stepper__pill{position:absolute;left:0;right:0;height:32px;border-radius:var(--radius-md);background:var(--selected-pill);box-shadow:var(--shadow-raised);transition:top var(--duration-slow) var(--ease-glide);pointer-events:none}
.hv-stepper__step{position:relative;display:flex;align-items:center;gap:10px;height:32px;padding:0 9px;border-radius:var(--radius-md);cursor:pointer;font-size:var(--text-row);letter-spacing:-0.005em;color:var(--ink-600);transition:color var(--duration-soft) var(--ease-out);background:none;border:none;font-family:var(--font-sans);text-align:left;width:100%;box-sizing:border-box}
.hv-stepper__step:hover:not(.hv-stepper__step--on):not(:disabled){background:var(--hover-on-canvas)}
.hv-stepper__step:active:not(:disabled){filter:brightness(0.94)}
.hv-stepper__step:focus-visible{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-stepper__step--on{color:var(--ink-900);font-weight:var(--weight-semibold)}
.hv-stepper__step:disabled{color:var(--ink-400);cursor:default}
.hv-stepper__label{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.hv-stepper__mark{width:19px;height:19px;border-radius:var(--radius-pill);flex:none;display:inline-flex;align-items:center;justify-content:center;font-size:9.5px;font-variant-numeric:tabular-nums;transition:background var(--duration-soft) var(--ease-out),box-shadow var(--duration-soft) var(--ease-out),color var(--duration-soft) var(--ease-out)}
.hv-stepper__mark--done{background:var(--green-50)}
.hv-stepper__mark--now{background:var(--ink-900);color:var(--white)}
.hv-stepper__mark--next{box-shadow:inset 0 0 0 1.5px var(--ink-200);color:var(--ink-400)}
.hv-stepper__colophon{padding:12px 9px 3px;font-size:var(--text-meta);line-height:var(--leading-normal);color:var(--text-faint)}
.hv-stepbar{font-family:var(--font-sans)}
.hv-stepbar__segs{display:flex;align-items:center;gap:4px}
.hv-stepbar__seg{flex:1;height:3px;border-radius:var(--radius-pill);background:var(--ink-200);transition:background var(--duration-soft) var(--ease-out)}
.hv-stepbar__seg--past{background:var(--green-600)}
.hv-stepbar__meta{display:flex;align-items:baseline;gap:8px;margin-top:8px}
.hv-stepbar__now{font-size:var(--text-sm);font-weight:var(--weight-strong);color:var(--text-body)}
.hv-stepbar__count{font-size:var(--text-meta);color:var(--text-faint);font-variant-numeric:tabular-nums}
`;
function hvEnsureStepperCss() {
  if (typeof document === "undefined" || document.getElementById("hv-stepper-css")) return;
  const s = document.createElement("style");
  s.id = "hv-stepper-css";
  s.textContent = hvStepperCss;
  document.head.appendChild(s);
}
function HvStepCheck() {
  return /* @__PURE__ */ React.createElement("svg", { width: "9", height: "9", viewBox: "0 0 16 16", fill: "none", stroke: "var(--green-600)", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8.5 6.5 12 13 4.5" }));
}
const HV_STEPPER_ROW = 35;
function Stepper({ steps = [], at = 0, reached, onStep, heading = "Sections", variant = "rail", colophon }) {
  hvEnsureStepperCss();
  const max = reached == null ? at : Math.max(reached, at);
  if (variant === "bar") {
    return /* @__PURE__ */ React.createElement("div", { className: "hv-stepbar" }, /* @__PURE__ */ React.createElement("div", { className: "hv-stepbar__segs", "aria-hidden": "true" }, steps.map((_, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: `hv-stepbar__seg${i <= at ? " hv-stepbar__seg--past" : ""}` }))), /* @__PURE__ */ React.createElement("div", { className: "hv-stepbar__meta" }, /* @__PURE__ */ React.createElement("span", { className: "hv-stepbar__now" }, steps[at]), /* @__PURE__ */ React.createElement("span", { className: "hv-stepbar__count" }, at + 1, " of ", steps.length)));
  }
  const onKeyDown = (ev) => {
    if (ev.key !== "ArrowDown" && ev.key !== "ArrowUp") return;
    ev.preventDefault();
    const stops = Array.from(ev.currentTarget.querySelectorAll("button:not(:disabled)"));
    const i = stops.indexOf(document.activeElement);
    const next = stops[i + (ev.key === "ArrowDown" ? 1 : -1)];
    if (next) next.focus();
  };
  return /* @__PURE__ */ React.createElement("nav", { className: "hv-stepper", "aria-label": heading }, /* @__PURE__ */ React.createElement("div", { className: "hv-stepper__head" }, heading), /* @__PURE__ */ React.createElement("div", { className: "hv-stepper__steps", onKeyDown }, /* @__PURE__ */ React.createElement("span", { className: "hv-stepper__pill", style: { top: at * HV_STEPPER_ROW + "px" }, "aria-hidden": "true" }), steps.map((label, i) => {
    const done = i < at;
    const now = i === at;
    const ahead = i > max;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: i,
        type: "button",
        className: `hv-stepper__step${now ? " hv-stepper__step--on" : ""}`,
        disabled: ahead,
        "aria-current": now ? "step" : void 0,
        onClick: () => {
          if (!ahead && onStep) onStep(i);
        }
      },
      /* @__PURE__ */ React.createElement("span", { className: `hv-stepper__mark hv-stepper__mark--${done ? "done" : now ? "now" : "next"}` }, done ? /* @__PURE__ */ React.createElement(HvStepCheck, null) : String(i + 1)),
      /* @__PURE__ */ React.createElement("span", { className: "hv-stepper__label" }, label)
    );
  })), colophon ? /* @__PURE__ */ React.createElement("div", { className: "hv-stepper__colophon" }, colophon) : null);
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Stepper/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/Table/Table.jsx
try { (() => {
const hvTableCss = `
.hv-table{width:100%;border-collapse:collapse;font-family:var(--font-sans);font-size:13.5px}
.hv-table th{padding:10px 18px;text-align:left;font-size:11.5px;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;color:var(--ink-400);border-bottom:1px solid var(--border-subtle);white-space:nowrap}
.hv-table td{padding:12px 18px;color:var(--ink-900);border-bottom:1px solid var(--ink-50)}
.hv-table tbody tr:last-child td{border-bottom:none}
.hv-table tbody tr{transition:background-color var(--duration-soft) var(--ease-out)}
.hv-table--hover tbody tr:hover{background:var(--ink-50)}
.hv-table .hv-table__num{text-align:right;font-family:var(--font-mono);font-size:12.5px;font-variant-numeric:tabular-nums}
.hv-table th.hv-table__num{font-family:var(--font-sans);font-size:11.5px;font-variant-numeric:normal}
.hv-table .hv-table__strong{font-weight:500;color:var(--ink-950)}
.hv-dtable{background:var(--surface-card);border-radius:var(--radius-xl);box-shadow:var(--shadow-card);overflow:hidden}
.hv-dtable__head{padding:12px 18px;border-bottom:1px solid var(--border-subtle)}
.hv-dtable__title{margin:0;font-size:13px;font-weight:600;color:var(--ink-950)}
`;
function hvEnsureTableCss() {
  if (typeof document === "undefined" || document.getElementById("hv-table-css")) return;
  const s = document.createElement("style");
  s.id = "hv-table-css";
  s.textContent = hvTableCss;
  document.head.appendChild(s);
}
function Table({ columns = [], rows = [], hover = true }) {
  hvEnsureTableCss();
  return /* @__PURE__ */ React.createElement("table", { className: `hv-table${hover ? " hv-table--hover" : ""}` }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, columns.map((c) => /* @__PURE__ */ React.createElement("th", { key: c.key, className: c.num ? "hv-table__num" : "" }, c.label)))), /* @__PURE__ */ React.createElement("tbody", null, rows.map((row, i) => /* @__PURE__ */ React.createElement("tr", { key: i }, columns.map((c) => /* @__PURE__ */ React.createElement("td", { key: c.key, className: `${c.num ? "hv-table__num" : ""}${c.strong ? " hv-table__strong" : ""}` }, row[c.key]))))));
}
function DataTable({ title, columns = [], rows = [], hover = true }) {
  hvEnsureTableCss();
  return /* @__PURE__ */ React.createElement("div", { className: "hv-dtable" }, title ? /* @__PURE__ */ React.createElement("div", { className: "hv-dtable__head" }, /* @__PURE__ */ React.createElement("h3", { className: "hv-dtable__title" }, title)) : null, /* @__PURE__ */ React.createElement("div", { style: { overflowX: "auto" } }, /* @__PURE__ */ React.createElement(Table, { columns, rows, hover })));
}
Object.assign(__ds_scope, { Table, DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Table/Table.jsx", error: String((e && e.message) || e) }); }

// components/Tabs/Tabs.jsx
try { (() => {
const hvTabsCss = `
.hv-tabs{display:flex;gap:2px;border-bottom:1px solid var(--border-subtle);font-family:var(--font-sans)}
.hv-tab{appearance:none;background:none;border:none;cursor:pointer;padding:9px 12px;font-size:13.5px;font-family:var(--font-sans);font-weight:500;color:var(--text-muted);border-bottom:2px solid transparent;margin-bottom:-1px; /* drift-ok: underline overlaps the tablist hairline by design */transition:color var(--duration-soft) var(--ease-out),box-shadow var(--duration-fast) var(--ease-out)}
.hv-tab:hover{color:var(--ink-700)}
.hv-tab--active{color:var(--ink-950);border-bottom-color:var(--ink-950)}
.hv-tab__count{margin-left:6px;font-size:11.5px;font-weight:500;color:var(--ink-400);background:var(--ink-100);border-radius:999px;padding:1px 7px}
.hv-tab--active .hv-tab__count{background:var(--green-50);color:var(--green-800)}
.hv-tab:focus-visible{outline:2px solid var(--border-focus);outline-offset:-2px;border-radius:4px}
`;
function hvEnsureTabsCss() {
  if (typeof document === "undefined" || document.getElementById("hv-tabs-css")) return;
  const s = document.createElement("style");
  s.id = "hv-tabs-css";
  s.textContent = hvTabsCss;
  document.head.appendChild(s);
}
function Tabs({ items = [], activeId, defaultActiveId, onChange }) {
  hvEnsureTabsCss();
  const [internal, setInternal] = React.useState(defaultActiveId ?? (items[0] && items[0].id));
  const current = activeId !== void 0 ? activeId : internal;
  const select = (id) => {
    if (activeId === void 0) setInternal(id);
    if (onChange) onChange(id);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "hv-tabs", role: "tablist" }, items.map((it) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: it.id,
      type: "button",
      role: "tab",
      "aria-selected": it.id === current,
      className: `hv-tab${it.id === current ? " hv-tab--active" : ""}`,
      onClick: () => select(it.id)
    },
    it.label,
    it.count !== void 0 ? /* @__PURE__ */ React.createElement("span", { className: "hv-tab__count" }, it.count) : null
  )));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Tabs/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/Toast/Toast.jsx
try { (() => {
const hvToastCss = `
.hv-toast-stack{position:fixed;right:16px;bottom:16px;display:flex;flex-direction:column;gap:8px;z-index:200;font-family:var(--font-sans)}
.hv-toast-stack--static{position:static}
.hv-toast{display:flex;align-items:flex-start;gap:10px;background:var(--ink-950);color:var(--white);border-radius:var(--radius-lg);box-shadow:var(--shadow-overlay);padding:11px 14px;min-width:260px;max-width:380px;box-sizing:border-box}
.hv-toast__dot{width:7px;height:7px;border-radius:999px;flex:none;margin-top:5px} /* drift-ok: optical alignment with the title's cap height */
.hv-toast__dot--positive{background:var(--green-500)}
.hv-toast__dot--negative{background:var(--status-negative-on-dark)}
.hv-toast__dot--neutral{background:var(--ink-400)}
.hv-toast__title{font-size:13px;font-weight:600;line-height:1.4}
.hv-toast__desc{font-size:12.5px;line-height:1.45;color:var(--ink-300);margin-top:0}
.hv-toast__close{margin-left:auto;flex:none;appearance:none;background:none;border:none;color:var(--ink-400);cursor:pointer;font-size:14px;line-height:1;padding:2px;border-radius:4px}
.hv-toast__close:hover{color:var(--white)}
`;
function hvEnsureToastCss() {
  if (typeof document === "undefined" || document.getElementById("hv-toast-css")) return;
  const s = document.createElement("style");
  s.id = "hv-toast-css";
  s.textContent = hvToastCss;
  document.head.appendChild(s);
}
function Toast({ tone = "neutral", title, description, onDismiss }) {
  hvEnsureToastCss();
  return /* @__PURE__ */ React.createElement("div", { className: "hv-toast", role: "status" }, /* @__PURE__ */ React.createElement("span", { className: `hv-toast__dot hv-toast__dot--${tone}` }), /* @__PURE__ */ React.createElement("div", null, title ? /* @__PURE__ */ React.createElement("div", { className: "hv-toast__title" }, title) : null, description ? /* @__PURE__ */ React.createElement("div", { className: "hv-toast__desc" }, description) : null), onDismiss ? /* @__PURE__ */ React.createElement("button", { type: "button", className: "hv-toast__close", onClick: onDismiss, "aria-label": "Dismiss" }, "×") : null);
}
function ToastStack({ static: isStatic = false, children }) {
  hvEnsureToastCss();
  return /* @__PURE__ */ React.createElement("div", { className: `hv-toast-stack${isStatic ? " hv-toast-stack--static" : ""}` }, children);
}
Object.assign(__ds_scope, { Toast, ToastStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Toast/Toast.jsx", error: String((e && e.message) || e) }); }

// components/Tooltip/InfoTip.jsx
try { (() => {
const hvInfoTipCss = `
.hv-infotip{position:relative;display:inline-flex}
.hv-infotip__btn{display:inline-flex;align-items:center;justify-content:center;padding:0;border:0;background:none;color:var(--text-muted);cursor:help}
.hv-infotip__btn:hover,.hv-infotip:focus-within .hv-infotip__btn{color:var(--ink-950);transition:color var(--duration-soft) var(--ease-out)}
.hv-infotip__pop{position:absolute;top:calc(100% + 8px);left:-10px;z-index:60;width:290px;padding:12px 14px;border-radius:var(--radius-lg);background:var(--surface-card);box-shadow:var(--shadow-overlay);font-family:var(--font-sans);font-size:12px;line-height:1.55;color:var(--text-body);text-align:left;white-space:normal;opacity:0;visibility:hidden;transform:translateY(2px);transition:opacity var(--duration-soft) var(--ease-out),transform var(--duration-soft) var(--ease-out),visibility 0s linear var(--duration-soft)}
.hv-infotip--end .hv-infotip__pop{left:auto;right:-10px}
.hv-infotip:hover .hv-infotip__pop,.hv-infotip:focus-within .hv-infotip__pop{opacity:1;visibility:visible;transform:none;transition-delay:0s}
.hv-infotip__title{display:block;font-weight:650;color:var(--ink-950);margin:0 0 8px}
.hv-infotip__note{display:block;margin-top:8px;font-size:11px;line-height:1.5;color:var(--status-caution-text)}
`;
function hvEnsureInfoTipCss() {
  if (typeof document === "undefined" || document.getElementById("hv-infotip-css")) return;
  const s = document.createElement("style");
  s.id = "hv-infotip-css";
  s.textContent = hvInfoTipCss;
  document.head.appendChild(s);
}
function InfoTip({ title, children, note, align = "start", size = 14 }) {
  hvEnsureInfoTipCss();
  return /* @__PURE__ */ React.createElement("span", { className: `hv-infotip${align === "end" ? " hv-infotip--end" : ""}` }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "hv-infotip__btn", "aria-label": `How ${title} is measured` }, /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("circle", { cx: "8", cy: "8", r: "5.75" }), /* @__PURE__ */ React.createElement("path", { d: "M8 7.4v3.4M8 5.1v.2" }))), /* @__PURE__ */ React.createElement("span", { className: "hv-infotip__pop", role: "tooltip" }, /* @__PURE__ */ React.createElement("b", { className: "hv-infotip__title" }, title), children, note ? /* @__PURE__ */ React.createElement("span", { className: "hv-infotip__note" }, note) : null));
}
Object.assign(__ds_scope, { InfoTip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Tooltip/InfoTip.jsx", error: String((e && e.message) || e) }); }

// components/Tooltip/Tooltip.jsx
try { (() => {
const hvTooltipCss = `
.hv-tip-wrap{position:relative;display:inline-block}
.hv-tip{position:absolute;left:50%;transform:translateX(-50%) translateY(2px);background:var(--ink-950);color:var(--white);font-family:var(--font-sans);font-size:11.5px;font-weight:500;line-height:1.35;padding:5px 9px;border-radius:var(--radius-sm);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity var(--duration-soft) var(--ease-out),transform var(--duration-fast) var(--ease-out);z-index:60}
.hv-tip--top{bottom:calc(100% + 6px)}
.hv-tip--bottom{top:calc(100% + 6px)}
.hv-tip-wrap:hover .hv-tip,.hv-tip-wrap:focus-within .hv-tip,.hv-tip--open{opacity:1;transform:translateX(-50%) translateY(0)}
`;
function hvEnsureTooltipCss() {
  if (typeof document === "undefined" || document.getElementById("hv-tooltip-css")) return;
  const s = document.createElement("style");
  s.id = "hv-tooltip-css";
  s.textContent = hvTooltipCss;
  document.head.appendChild(s);
}
function Tooltip({ label, side = "top", open = false, children }) {
  hvEnsureTooltipCss();
  return /* @__PURE__ */ React.createElement("span", { className: "hv-tip-wrap" }, children, /* @__PURE__ */ React.createElement("span", { className: `hv-tip hv-tip--${side}${open ? " hv-tip--open" : ""}`, role: "tooltip" }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Tooltip/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/Topbar/Topbar.jsx
try { (() => {
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
  if (typeof document === "undefined" || document.getElementById("hv-topbar-css")) return;
  const s = document.createElement("style");
  s.id = "hv-topbar-css";
  s.textContent = hvTopbarCss;
  document.head.appendChild(s);
}
function hvTopbarInitials(name) {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
}
const hvTopbarSearchIcon = /* @__PURE__ */ React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("circle", { cx: "7", cy: "7", r: "4.6" }), /* @__PURE__ */ React.createElement("path", { d: "M10.4 10.4 13.5 13.5" }));
function Topbar({ logo, logoSrc, logoAlt = "", client, crumb, sync, onSearch, account, loading = false }) {
  hvEnsureTopbarCss();
  const mark = logo || (logoSrc ? /* @__PURE__ */ React.createElement("img", { className: "hv-topbar__logo", src: logoSrc, alt: logoAlt }) : null);
  return /* @__PURE__ */ React.createElement("header", { className: "hv-topbar" }, /* @__PURE__ */ React.createElement("span", { className: "hv-topbar__lock" }, mark, loading || client ? /* @__PURE__ */ React.createElement("span", { className: "hv-topbar__div" }) : null, loading ? /* @__PURE__ */ React.createElement("span", { className: "hv-topbar__skel", style: { width: 96, height: 12 } }) : client ? /* @__PURE__ */ React.createElement("span", { className: "hv-topbar__client" }, client) : null), !loading && crumb ? /* @__PURE__ */ React.createElement("span", { className: "hv-topbar__crumb" }, "/ ", crumb) : null, /* @__PURE__ */ React.createElement("span", { className: "hv-topbar__sp" }), loading ? /* @__PURE__ */ React.createElement("span", { className: "hv-topbar__skel", style: { width: 128, height: 12 } }) : sync && sync.status === "live" ? /* @__PURE__ */ React.createElement("span", { className: "hv-topbar__live" }, /* @__PURE__ */ React.createElement("span", { className: "hv-topbar__dot", "data-motion": "essential" }), sync.label) : sync && sync.status === "stale" ? /* @__PURE__ */ React.createElement("span", { className: "hv-topbar__pill" }, sync.label) : null, onSearch ? /* @__PURE__ */ React.createElement("button", { type: "button", className: "hv-topbar__ib", "aria-label": "Search", onClick: onSearch }, hvTopbarSearchIcon) : null, account ? /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: "hv-topbar__av",
      "aria-label": account.name ? `Account — ${account.name}` : "Account",
      onClick: account.onClick
    },
    account.initials || hvTopbarInitials(account.name)
  ) : null);
}
Object.assign(__ds_scope, { Topbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Topbar/Topbar.jsx", error: String((e && e.message) || e) }); }

// components/Transcript/Transcript.jsx
try { (() => {
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
  if (typeof document === "undefined" || document.getElementById("hv-transcript-css")) return;
  const s = document.createElement("style");
  s.id = "hv-transcript-css";
  s.textContent = hvTranscriptCss;
  document.head.appendChild(s);
}
const HV_TR_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function hvTranscriptWhen(v) {
  if (v === void 0 || v === null) return "";
  if (typeof v === "string") return v;
  const d = v instanceof Date ? v : new Date(v);
  if (isNaN(d.getTime())) return "";
  const now = /* @__PURE__ */ new Date();
  const sameDay = d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth() && d.getDate() === now.getDate();
  if (sameDay) return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
  return d.getDate() + " " + HV_TR_MONTHS[d.getMonth()];
}
function hvTranscriptHex() {
  return /* @__PURE__ */ React.createElement("svg", { width: "16", height: "18", viewBox: "0 0 16 16", fill: "none", stroke: "var(--green-600)", strokeWidth: "1.2", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "M8 2.6 12.68 5.3v5.4L8 13.4 3.32 10.7V5.3Z" }));
}
function Transcript({
  title,
  when,
  messages = [],
  limit,
  total,
  sessionHref,
  onOpenSession,
  sessionLabel = "Open the session ›",
  readOnlyNote = "Read-only · this is the record",
  loading = false,
  emptyText = "No request — this ran on a standing rule",
  emptyHref,
  emptyLinkLabel = "Open the rule ›"
}) {
  hvEnsureTranscriptCss();
  const count = messages.length;
  const grand = total !== void 0 ? total : count;
  const shown = limit !== void 0 && limit < count ? messages.slice(0, limit) : messages;
  const truncated = shown.length < grand;
  const head = title || when !== void 0 ? /* @__PURE__ */ React.createElement("div", { className: "hv-transcript__head" }, title ? /* @__PURE__ */ React.createElement("span", { className: "hv-transcript__title" }, title) : null, /* @__PURE__ */ React.createElement("span", { className: "hv-transcript__spacer" }), when !== void 0 ? /* @__PURE__ */ React.createElement("span", { className: "hv-transcript__when" }, hvTranscriptWhen(when)) : null) : null;
  const openLink = sessionHref ? /* @__PURE__ */ React.createElement("a", { className: "hv-transcript__open", href: sessionHref, onClick: onOpenSession }, sessionLabel) : onOpenSession ? /* @__PURE__ */ React.createElement("button", { type: "button", className: "hv-transcript__open hv-transcript__open--btn", onClick: onOpenSession }, sessionLabel) : null;
  if (loading) {
    return /* @__PURE__ */ React.createElement("div", { className: "hv-transcript", "aria-busy": "true" }, head, /* @__PURE__ */ React.createElement("div", { className: "hv-transcript__msg hv-transcript__msg--you" }, /* @__PURE__ */ React.createElement("span", { className: "hv-transcript__skel hv-transcript__skel--bubble", "data-motion": "essential", style: { width: "62%", height: 42 } })), /* @__PURE__ */ React.createElement("div", { className: "hv-transcript__msg" }, /* @__PURE__ */ React.createElement("span", { className: "hv-transcript__gut" }), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", { className: "hv-transcript__skel", "data-motion": "essential", style: { width: "100%", height: 12 } }), /* @__PURE__ */ React.createElement("span", { className: "hv-transcript__skel", "data-motion": "essential", style: { width: "84%", height: 12, marginTop: 8 } }))), /* @__PURE__ */ React.createElement("div", { className: "hv-transcript__msg hv-transcript__msg--you" }, /* @__PURE__ */ React.createElement("span", { className: "hv-transcript__skel hv-transcript__skel--bubble", "data-motion": "essential", style: { width: "46%", height: 42 } })), /* @__PURE__ */ React.createElement("div", { className: "hv-transcript__msg" }, /* @__PURE__ */ React.createElement("span", { className: "hv-transcript__gut" }), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", { className: "hv-transcript__skel", "data-motion": "essential", style: { width: "92%", height: 12 } }), /* @__PURE__ */ React.createElement("span", { className: "hv-transcript__skel", "data-motion": "essential", style: { width: "58%", height: 12, marginTop: 8 } }))));
  }
  if (!count) {
    return /* @__PURE__ */ React.createElement("div", { className: "hv-transcript" }, head, /* @__PURE__ */ React.createElement("div", { className: "hv-transcript__empty" }, emptyText, emptyHref ? /* @__PURE__ */ React.createElement("a", { href: emptyHref }, emptyLinkLabel) : null));
  }
  return /* @__PURE__ */ React.createElement("div", { className: "hv-transcript" }, head, shown.map((m, i) => {
    const fade = truncated && i === shown.length - 1;
    if (m.from === "you") {
      return /* @__PURE__ */ React.createElement("div", { key: i, className: "hv-transcript__msg hv-transcript__msg--you" + (fade ? " hv-transcript__msg--fade" : "") }, /* @__PURE__ */ React.createElement("span", { className: "hv-transcript__sr" }, "You: "), /* @__PURE__ */ React.createElement("span", { className: "hv-transcript__bubble" }, m.text));
    }
    return /* @__PURE__ */ React.createElement("div", { key: i, className: "hv-transcript__msg" + (fade ? " hv-transcript__msg--fade" : "") }, /* @__PURE__ */ React.createElement("span", { className: "hv-transcript__gut" }, hvTranscriptHex()), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", { className: "hv-transcript__sr" }, "Engine: "), /* @__PURE__ */ React.createElement("span", { className: "hv-transcript__engine" }, m.text), m.steps ? /* @__PURE__ */ React.createElement("span", { className: "hv-transcript__steps" }, /* @__PURE__ */ React.createElement("svg", { width: "11", height: "11", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "m6 3 5 5-5 5" })), m.steps) : null, m.artifact ? /* @__PURE__ */ React.createElement("span", { className: "hv-transcript__art" }, /* @__PURE__ */ React.createElement("span", { className: "hv-transcript__articon", "aria-hidden": "true" }, m.artifact.icon || /* @__PURE__ */ React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M9.5 1.8H4.2v12.4h7.6V4.5Z" }), /* @__PURE__ */ React.createElement("path", { d: "M9.5 1.8v2.7h2.3" }))), /* @__PURE__ */ React.createElement("span", { className: "hv-transcript__artbody" }, /* @__PURE__ */ React.createElement("span", { className: "hv-transcript__arttitle" }, m.artifact.title), m.artifact.outcome ? /* @__PURE__ */ React.createElement("span", { className: "hv-transcript__artsub" }, m.artifact.outcome) : null)) : null));
  }), truncated ? /* @__PURE__ */ React.createElement("div", { className: "hv-transcript__count" }, shown.length, " of ", grand, " messages — the rest lives in the session") : null, /* @__PURE__ */ React.createElement("div", { className: "hv-transcript__foot" }, /* @__PURE__ */ React.createElement("span", { className: "hv-transcript__note" }, readOnlyNote), /* @__PURE__ */ React.createElement("span", { className: "hv-transcript__spacer" }), openLink));
}
Object.assign(__ds_scope, { Transcript });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Transcript/Transcript.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CapMeter = __ds_scope.CapMeter;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Scorecard = __ds_scope.Scorecard;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.ChartLegend = __ds_scope.ChartLegend;

__ds_ns.ChartTooltip = __ds_scope.ChartTooltip;

__ds_ns.DateRangePicker = __ds_scope.DateRangePicker;

__ds_ns.FilterSelect = __ds_scope.FilterSelect;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Gantt = __ds_scope.Gantt;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.ImageSlot = __ds_scope.ImageSlot;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Separator = __ds_scope.Separator;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.MetricChip = __ds_scope.MetricChip;

__ds_ns.DifficultyMeter = __ds_scope.DifficultyMeter;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ReviewActions = __ds_scope.ReviewActions;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.SidebarIcon = __ds_scope.SidebarIcon;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.SignIn = __ds_scope.SignIn;

__ds_ns.SignatureBlock = __ds_scope.SignatureBlock;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.PulseDot = __ds_scope.PulseDot;

__ds_ns.SplitButton = __ds_scope.SplitButton;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.StepTimeline = __ds_scope.StepTimeline;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastStack = __ds_scope.ToastStack;

__ds_ns.InfoTip = __ds_scope.InfoTip;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Topbar = __ds_scope.Topbar;

__ds_ns.Transcript = __ds_scope.Transcript;

})();
