/* @ds-bundle: {"format":3,"namespace":"HivoryDesignSystem_354905","components":[{"name":"Avatar","sourcePath":"components/Avatar/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/Avatar/Avatar.jsx"},{"name":"Badge","sourcePath":"components/Badge/Badge.jsx"},{"name":"Button","sourcePath":"components/Button/Button.jsx"},{"name":"Card","sourcePath":"components/Card/Card.jsx"},{"name":"Stat","sourcePath":"components/Card/Card.jsx"},{"name":"ChartLegend","sourcePath":"components/Charts/ChartLegend.jsx"},{"name":"ChartTooltip","sourcePath":"components/Charts/ChartTooltip.jsx"},{"name":"DateRangePicker","sourcePath":"components/DateRangePicker/DateRangePicker.jsx"},{"name":"Checkbox","sourcePath":"components/FormControls/Checkbox.jsx"},{"name":"Switch","sourcePath":"components/FormControls/Switch.jsx"},{"name":"Textarea","sourcePath":"components/FormControls/Textarea.jsx"},{"name":"Icon","sourcePath":"components/Icon/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/Icon/Icon.jsx"},{"name":"Input","sourcePath":"components/Input/Input.jsx"},{"name":"Separator","sourcePath":"components/LoadingDividers/Separator.jsx"},{"name":"Skeleton","sourcePath":"components/LoadingDividers/Skeleton.jsx"},{"name":"Menu","sourcePath":"components/Menu/Menu.jsx"},{"name":"MetricChip","sourcePath":"components/Metric/MetricChip.jsx"},{"name":"DifficultyMeter","sourcePath":"components/Metric/MetricChip.jsx"},{"name":"Modal","sourcePath":"components/Modal/Modal.jsx"},{"name":"IconButton","sourcePath":"components/ReviewActions/ReviewActions.jsx"},{"name":"ReviewActions","sourcePath":"components/ReviewActions/ReviewActions.jsx"},{"name":"Select","sourcePath":"components/Select/Select.jsx"},{"name":"SidebarIcon","sourcePath":"components/Sidebar/Sidebar.jsx"},{"name":"Sidebar","sourcePath":"components/Sidebar/Sidebar.jsx"},{"name":"Spinner","sourcePath":"components/Spinner/Spinner.jsx"},{"name":"PulseDot","sourcePath":"components/Spinner/Spinner.jsx"},{"name":"Table","sourcePath":"components/Table/Table.jsx"},{"name":"Tabs","sourcePath":"components/Tabs/Tabs.jsx"},{"name":"Toast","sourcePath":"components/Toast/Toast.jsx"},{"name":"ToastStack","sourcePath":"components/Toast/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/Tooltip/Tooltip.jsx"}],"sourceHashes":{"components/Avatar/Avatar.jsx":"af91860e57a0","components/Badge/Badge.jsx":"ecd83cc1929e","components/Button/Button.jsx":"154c496bf3fb","components/Card/Card.jsx":"13bc89fd9a38","components/Charts/ChartLegend.jsx":"019477cc7b67","components/Charts/ChartTooltip.jsx":"33c4682cb7cf","components/DateRangePicker/DateRangePicker.jsx":"0d2e45d2771e","components/FormControls/Checkbox.jsx":"e5d34d877032","components/FormControls/Switch.jsx":"864dae5b1c74","components/FormControls/Textarea.jsx":"23449891da82","components/Icon/Icon.jsx":"99b155a03ce8","components/Input/Input.jsx":"0a7fb06fe9a5","components/LoadingDividers/Separator.jsx":"cd977e095808","components/LoadingDividers/Skeleton.jsx":"68c7f0a4cec3","components/Menu/Menu.jsx":"135048067bb6","components/Metric/MetricChip.jsx":"4344712e13b3","components/Modal/Modal.jsx":"d527521efc84","components/ReviewActions/ReviewActions.jsx":"fcecac18105e","components/Select/Select.jsx":"7db6239e3b30","components/Sidebar/Sidebar.jsx":"77a5097578b1","components/Spinner/Spinner.jsx":"1b73a3392cf5","components/Table/Table.jsx":"74eecb925a7c","components/Tabs/Tabs.jsx":"7b8a607e2ffc","components/Toast/Toast.jsx":"4ee0456bdf81","components/Tooltip/Tooltip.jsx":"95bf110bfaa4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HivoryDesignSystem_354905 = window.HivoryDesignSystem_354905 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/Avatar/Avatar.jsx
try { (() => {
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
function Avatar({
  src,
  name,
  size = 'md',
  dot = false
}) {
  hvEnsureAvatarCss();
  return /*#__PURE__*/React.createElement("span", {
    className: `hv-avatar hv-avatar--${size}`,
    title: name
  }, src ? /*#__PURE__*/React.createElement("img", {
    className: "hv-avatar__img",
    src: src,
    alt: name || ''
  }) : hvInitials(name), dot ? /*#__PURE__*/React.createElement("span", {
    className: "hv-avatar__dot"
  }) : null);
}

/* Overlapping stack; names beyond `max` collapse into a +N chip. */
function AvatarGroup({
  names = [],
  size = 'md',
  max = 4
}) {
  hvEnsureAvatarCss();
  const shown = names.slice(0, max);
  const extra = names.length - shown.length;
  return /*#__PURE__*/React.createElement("span", {
    className: "hv-avatar-group"
  }, shown.map(n => /*#__PURE__*/React.createElement(Avatar, {
    key: n,
    name: n,
    size: size
  })), extra > 0 ? /*#__PURE__*/React.createElement("span", {
    className: `hv-avatar hv-avatar--${size} hv-avatar--overflow`
  }, "+", extra) : null);
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Avatar/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/Badge/Badge.jsx
try { (() => {
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
function Badge({
  status = 'neutral',
  dot = false,
  children
}) {
  hvEnsureBadgeCss();
  return /*#__PURE__*/React.createElement("span", {
    className: `hv-badge hv-badge--${status}`
  }, dot ? /*#__PURE__*/React.createElement("span", {
    className: "hv-badge__dot"
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Badge/Badge.jsx", error: String((e && e.message) || e) }); }

// components/Button/Button.jsx
try { (() => {
/* Hivory Button — Engine. Ink-filled primary; green reserved for the brand CTA. */
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
  if (typeof document === 'undefined' || document.getElementById('hv-button-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-button-css';
  s.textContent = hvButtonCss;
  document.head.appendChild(s);
}
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  onClick,
  children
}) {
  hvEnsureButtonCss();
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    className: `hv-btn hv-btn--${variant} hv-btn--${size}`
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button/Button.jsx", error: String((e && e.message) || e) }); }

// components/Card/Card.jsx
try { (() => {
/* Hivory Card — Engine: white surface, subtle border, quiet shadow, radius 10. */
const hvCardCss = `
.hv-card{background:var(--surface-card);border-radius:var(--radius-xl);box-shadow:var(--shadow-card);font-family:var(--font-sans);box-sizing:border-box}
.hv-card__head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding:16px 18px 0}
.hv-card__title{margin:0;font-size:14.5px;font-weight:600;letter-spacing:-0.01em;color:var(--ink-950)}
.hv-card__sub{margin:3px 0 0;font-size:12.5px;color:var(--text-muted)}
.hv-card__body{padding:16px 18px}
.hv-card--flush .hv-card__body{padding:0}
`;
function hvEnsureCardCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-card-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-card-css';
  s.textContent = hvCardCss;
  document.head.appendChild(s);
}
function Card({
  title,
  subtitle,
  actions,
  flush = false,
  children
}) {
  hvEnsureCardCss();
  const hasHead = title || subtitle || actions;
  return /*#__PURE__*/React.createElement("section", {
    className: `hv-card${flush ? ' hv-card--flush' : ''}`
  }, hasHead ? /*#__PURE__*/React.createElement("header", {
    className: "hv-card__head"
  }, /*#__PURE__*/React.createElement("div", null, title ? /*#__PURE__*/React.createElement("h3", {
    className: "hv-card__title"
  }, title) : null, subtitle ? /*#__PURE__*/React.createElement("p", {
    className: "hv-card__sub"
  }, subtitle) : null), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      flex: 'none'
    }
  }, actions) : null) : null, /*#__PURE__*/React.createElement("div", {
    className: "hv-card__body"
  }, children));
}

/* Stat — metric tile used on dashboards. delta direction: 'up' | 'down'. */
function Stat({
  label,
  value,
  delta,
  direction = 'up',
  deltaTone = 'positive'
}) {
  hvEnsureCardCss();
  const toneColor = deltaTone === 'positive' ? 'var(--status-positive-text)' : deltaTone === 'caution' ? 'var(--status-caution-text)' : deltaTone === 'negative' ? 'var(--status-negative-text)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", {
    className: "hv-card",
    style: {
      padding: '16px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: '7px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12.5px',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '24px',
      color: 'var(--ink-950)',
      lineHeight: 1.1
    }
  }, value), delta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      color: toneColor
    }
  }, direction === 'down' ? '▼' : '▲', " ", delta) : null);
}
Object.assign(__ds_scope, { Card, Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Card/Card.jsx", error: String((e && e.message) || e) }); }

// components/Charts/ChartLegend.jsx
try { (() => {
/* Hivory ChartLegend — 8px swatches in series order, 12px labels. */
const hvChartLegendCss = `
.hv-legend{display:flex;flex-wrap:wrap;gap:4px 16px;font-family:var(--font-sans);font-size:12px;color:var(--ink-700);align-items:center}
.hv-legend__item{display:inline-flex;align-items:center;gap:6px}
.hv-legend__swatch{width:8px;height:8px;border-radius:2px;flex:none}
.hv-legend__value{font-family:var(--font-mono);font-size:11.5px;color:var(--text-muted)}
`;
function hvEnsureChartLegendCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-chartlegend-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-chartlegend-css';
  s.textContent = hvChartLegendCss;
  document.head.appendChild(s);
}
const HV_SERIES = ['var(--data-1-on-light)', 'var(--data-2)', 'var(--data-3)', 'var(--data-4)'];
const HV_SERIES_DARK = ['var(--data-1)', 'var(--data-2)', 'var(--data-3)', 'var(--data-4)'];

/* items: [{ label, value? , color? }] — color defaults to series order. */
function ChartLegend({
  items = [],
  onDark = false
}) {
  hvEnsureChartLegendCss();
  const palette = onDark ? HV_SERIES_DARK : HV_SERIES;
  return /*#__PURE__*/React.createElement("div", {
    className: "hv-legend"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "hv-legend__item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hv-legend__swatch",
    style: {
      background: it.color || palette[i % palette.length]
    }
  }), it.label, it.value !== undefined ? /*#__PURE__*/React.createElement("span", {
    className: "hv-legend__value"
  }, it.value) : null)));
}
Object.assign(__ds_scope, { ChartLegend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Charts/ChartLegend.jsx", error: String((e && e.message) || e) }); }

// components/Charts/ChartTooltip.jsx
try { (() => {
/* Hivory ChartTooltip — dark ink panel (Toast chrome), mono values, series dots. */
const hvChartTooltipCss = `
.hv-charttip{display:inline-block;background:var(--ink-950);color:var(--white);border-radius:var(--radius-md);box-shadow:var(--shadow-overlay);padding:9px 12px;font-family:var(--font-sans);min-width:140px}
.hv-charttip__label{font-size:11px;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;color:var(--ink-400);margin-bottom:6px}
.hv-charttip__row{display:flex;align-items:center;gap:7px;font-size:12.5px;line-height:1.7}
.hv-charttip__dot{width:7px;height:7px;border-radius:2px;flex:none}
.hv-charttip__val{margin-left:auto;font-family:var(--font-mono);font-size:12px;padding-left:14px}
`;
function hvEnsureChartTooltipCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-charttip-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-charttip-css';
  s.textContent = hvChartTooltipCss;
  document.head.appendChild(s);
}
const HV_TIP_SERIES = ['var(--data-1)', 'var(--data-2)', 'var(--data-3)', 'var(--data-4)'];

/* label: x-axis value (e.g. "Aug 14") · rows: [{ label, value, color? }] */
function ChartTooltip({
  label,
  rows = []
}) {
  hvEnsureChartTooltipCss();
  return /*#__PURE__*/React.createElement("div", {
    className: "hv-charttip",
    role: "status"
  }, label ? /*#__PURE__*/React.createElement("div", {
    className: "hv-charttip__label"
  }, label) : null, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "hv-charttip__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hv-charttip__dot",
    style: {
      background: r.color || HV_TIP_SERIES[i % HV_TIP_SERIES.length]
    }
  }), r.label, /*#__PURE__*/React.createElement("span", {
    className: "hv-charttip__val"
  }, r.value))));
}
Object.assign(__ds_scope, { ChartTooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Charts/ChartTooltip.jsx", error: String((e && e.message) || e) }); }

// components/DateRangePicker/DateRangePicker.jsx
try { (() => {
/* Hivory DateRangePicker — preset rail + month calendar. Ink range ends, green-50 span. */
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
  if (typeof document === 'undefined' || document.getElementById('hv-drp-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-drp-css';
  s.textContent = hvDrpCss;
  document.head.appendChild(s);
}
const HV_DRP_PRESETS = [{
  id: '7d',
  label: 'Last 7 days',
  days: 7
}, {
  id: '30d',
  label: 'Last 30 days',
  days: 30
}, {
  id: '90d',
  label: 'Last quarter',
  days: 90
}, {
  id: 'ytd',
  label: 'Year to date'
}, {
  id: 'custom',
  label: 'Custom range'
}];
const HV_DRP_FMT = d => d.toLocaleDateString('en-US', {
  month: 'short',
  day: 'numeric'
});
function DateRangePicker({
  defaultPreset = '30d',
  defaultOpen = false,
  onChange
}) {
  hvEnsureDrpCss();
  const today = new Date();
  const [open, setOpen] = React.useState(defaultOpen);
  const [preset, setPreset] = React.useState(defaultPreset);
  const [start, setStart] = React.useState(null);
  const [end, setEnd] = React.useState(null);
  const [view, setView] = React.useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = ev => {
      if (ref.current && !ref.current.contains(ev.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);
  const pickPreset = p => {
    setPreset(p.id);
    if (p.id !== 'custom') {
      const e2 = new Date(today);
      const s2 = p.days ? new Date(today.getTime() - p.days * 864e5) : new Date(today.getFullYear(), 0, 1);
      setStart(s2);
      setEnd(e2);
      if (onChange) onChange({
        preset: p.id,
        start: s2,
        end: e2
      });
      setOpen(false);
    }
  };
  const pickDay = d => {
    setPreset('custom');
    if (!start || start && end) {
      setStart(d);
      setEnd(null);
    } else if (d < start) {
      setStart(d);
    } else {
      setEnd(d);
      if (onChange) onChange({
        preset: 'custom',
        start,
        end: d
      });
    }
  };
  const activePreset = HV_DRP_PRESETS.find(p => p.id === preset);
  const label = preset !== 'custom' && activePreset ? activePreset.label : start && end ? `${HV_DRP_FMT(start)} – ${HV_DRP_FMT(end)}` : start ? `${HV_DRP_FMT(start)} – …` : 'Select range';
  const first = new Date(view.getFullYear(), view.getMonth(), 1);
  const daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const lead = first.getDay();
  const cells = [];
  for (let i = 0; i < lead; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(view.getFullYear(), view.getMonth(), d));
  const sameDay = (a, b) => a && b && a.toDateString() === b.toDateString();
  const inRange = d => start && end && d > start && d < end;
  return /*#__PURE__*/React.createElement("span", {
    className: "hv-drp",
    ref: ref
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "hv-drp__trigger",
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 14 14"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "2.5",
    width: "12",
    height: "10.5",
    rx: "2",
    fill: "none",
    stroke: "var(--ink-400)",
    strokeWidth: "1.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 6h12M4.5 1v3M9.5 1v3",
    stroke: "var(--ink-400)",
    strokeWidth: "1.3",
    strokeLinecap: "round",
    fill: "none"
  })), label, /*#__PURE__*/React.createElement("span", {
    className: "hv-drp__chev"
  }, "\u25BE")), open ? /*#__PURE__*/React.createElement("div", {
    className: "hv-drp__panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hv-drp__rail"
  }, HV_DRP_PRESETS.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    type: "button",
    className: `hv-drp__preset${p.id === preset ? ' hv-drp__preset--active' : ''}`,
    onClick: () => pickPreset(p)
  }, p.label))), /*#__PURE__*/React.createElement("div", {
    className: "hv-drp__cal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hv-drp__calhead"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "hv-drp__nav",
    onClick: () => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))
  }, "\u25C0"), /*#__PURE__*/React.createElement("span", {
    className: "hv-drp__month"
  }, view.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "hv-drp__nav",
    onClick: () => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))
  }, "\u25B6")), /*#__PURE__*/React.createElement("div", {
    className: "hv-drp__grid"
  }, ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "hv-drp__wd"
  }, w)), cells.map((d, i) => d ? /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    className: `hv-drp__day${inRange(d) ? ' hv-drp__day--in' : ''}${sameDay(d, start) || sameDay(d, end) ? ' hv-drp__day--end' : ''}`,
    onClick: () => pickDay(d)
  }, d.getDate()) : /*#__PURE__*/React.createElement("span", {
    key: i
  }))))) : null);
}
Object.assign(__ds_scope, { DateRangePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/DateRangePicker/DateRangePicker.jsx", error: String((e && e.message) || e) }); }

// components/FormControls/Checkbox.jsx
try { (() => {
/* Hivory Checkbox — 16px box, ink-950 checked fill, green focus ring. */
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
  if (typeof document === 'undefined' || document.getElementById('hv-checkbox-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-checkbox-css';
  s.textContent = hvCheckboxCss;
  document.head.appendChild(s);
}
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false
}) {
  hvEnsureCheckboxCss();
  return /*#__PURE__*/React.createElement("label", {
    className: `hv-check${disabled ? ' hv-check--disabled' : ''}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }), /*#__PURE__*/React.createElement("span", {
    className: "hv-check__box"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 10 10"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1.5 5.5L4 8l4.5-6",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/FormControls/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/FormControls/Switch.jsx
try { (() => {
/* Hivory Switch — 34×18 track, ink-950 when on (green stays reserved for status/CTA). */
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
  if (typeof document === 'undefined' || document.getElementById('hv-switch-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-switch-css';
  s.textContent = hvSwitchCss;
  document.head.appendChild(s);
}
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false
}) {
  hvEnsureSwitchCss();
  return /*#__PURE__*/React.createElement("label", {
    className: `hv-switch${disabled ? ' hv-switch--disabled' : ''}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }), /*#__PURE__*/React.createElement("span", {
    className: "hv-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hv-switch__thumb"
  })), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/FormControls/Switch.jsx", error: String((e && e.message) || e) }); }

// components/FormControls/Textarea.jsx
try { (() => {
/* Hivory Textarea — Input chrome, vertical resize. */
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
  if (typeof document === 'undefined' || document.getElementById('hv-textarea-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-textarea-css';
  s.textContent = hvTextareaCss;
  document.head.appendChild(s);
}
function Textarea({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  rows = 3,
  hint,
  error,
  disabled = false
}) {
  hvEnsureTextareaCss();
  return /*#__PURE__*/React.createElement("label", {
    className: "hv-tafield"
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "hv-tafield__label"
  }, label) : null, /*#__PURE__*/React.createElement("textarea", {
    className: `hv-textarea${error ? ' hv-textarea--error' : ''}`,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    rows: rows,
    disabled: disabled
  }), error ? /*#__PURE__*/React.createElement("span", {
    className: "hv-tafield__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "hv-tafield__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/FormControls/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/Icon/Icon.jsx
try { (() => {
/* Hivory Icons — custom in-house set, drawn on the brand's own grammar.
   GRAMMAR: 16px grid · 1.5px even stroke · round caps + joins · no fills.
   SIGNATURE: the hexagon (from the Hivory mark) replaces the generic square/
   circle wherever an icon needs a "container" — dashboard's fourth tile,
   the agent's body, the AI spark's geometry. Diagonals prefer the hexagon's
   60° family over generic 45°. Color: text-muted rest → ink-950 active →
   ink-200 disabled. Never green. */

/* Pointy-top hexagon path centered (cx,cy) radius r */
function hvHexPath(cx, cy, r) {
  const w = r * 0.866;
  return `M${cx} ${cy - r}L${cx + w} ${cy - r / 2}V${cy + r / 2}L${cx} ${cy + r}L${cx - w} ${cy + r / 2}V${cy - r / 2}Z`;
}
const HIVORY_ICON_PATHS = {
  /* navigation */
  dashboard: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "5",
    height: "5",
    rx: "1.2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "2",
    width: "5",
    height: "5",
    rx: "1.2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "9",
    width: "5",
    height: "5",
    rx: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: hvHexPath(11.5, 11.5, 2.9)
  })),
  pipeline: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 3h11L9.5 7.8v4.7l-3-2V7.8L2.5 3Z"
  })),
  chart: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M2 13.5h12M4.5 10.5v-3M8 10.5V4.5M11.5 10.5V7"
  })),
  agent: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: hvHexPath(8, 8, 5.5)
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.2 7.2v1.6M9.8 7.2v1.6"
  })),
  spark: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M8 2c.4 3.4 2.6 5.6 6 6-3.4.4-5.6 2.6-6 6-.4-3.4-2.6-5.6-6-6 3.4-.4 5.6-2.6 6-6Z"
  })),
  clock: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "5.75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 5v3.2l2.2 1.3"
  })),
  globe: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "5.75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.25 8h11.5M8 2.25c2.4 2 2.4 9.5 0 11.5M8 2.25c-2.4 2-2.4 9.5 0 11.5"
  })),
  upload: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M8 10.5V3M5 5.5 8 2.5l3 3M3 13.5h10"
  })),
  calendar: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "2.5",
    y: "3.5",
    width: "11",
    height: "10",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 7h11M5.5 1.75V4M10.5 1.75V4"
  })),
  settings: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 4.5h11M2.5 8h11M2.5 11.5h11"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "4.5",
    r: "1.6",
    fill: "var(--surface-card, #fff)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5.5",
    cy: "8",
    r: "1.6",
    fill: "var(--surface-card, #fff)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "11.5",
    r: "1.6",
    fill: "var(--surface-card, #fff)"
  })),
  doc: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M4 2h5l3 3v9H4V2Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 2v3h3"
  })),
  search: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "4.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.4 10.4 13.5 13.5"
  })),
  mail: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "3.5",
    width: "12",
    height: "9.5",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 4.5 8 9l5.5-4.5"
  })),
  users: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "5.5",
    r: "2.75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 13.5c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4"
  })),
  bell: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M8 2a4 4 0 0 1 4 4v3l1.5 2.5h-11L4 9V6a4 4 0 0 1 4-4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.8 13.5a1.3 1.3 0 0 0 2.4 0"
  })),
  /* actions + state */
  'arrow-right': /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 8h11M9.5 4l4 4-4 4"
  })),
  check: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 8.5 6.5 12.5 13.5 4"
  })),
  close: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M3.5 3.5l9 9M12.5 3.5l-9 9"
  })),
  signout: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M6 2.5H3.5v11H6M10 5l3 3-3 3M13 8H6.5"
  })),
  moon: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M13 9.5A5.5 5.5 0 1 1 6.5 3a4.5 4.5 0 0 0 6.5 6.5Z"
  }))
};
function Icon({
  name,
  size = 16,
  strokeWidth = 1.5,
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    "aria-hidden": "true"
  }, HIVORY_ICON_PATHS[name] || HIVORY_ICON_PATHS.doc);
}
const ICON_NAMES = Object.keys(HIVORY_ICON_PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Icon/Icon.jsx", error: String((e && e.message) || e) }); }

// components/Input/Input.jsx
try { (() => {
/* Hivory Input — Engine field chrome: 34px, radius 8, green-600 focus ring. */
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
  if (typeof document === 'undefined' || document.getElementById('hv-input-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-input-css';
  s.textContent = hvInputCss;
  document.head.appendChild(s);
}
function Input({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = 'text',
  hint,
  error,
  disabled = false
}) {
  hvEnsureInputCss();
  return /*#__PURE__*/React.createElement("label", {
    className: "hv-field"
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "hv-field__label"
  }, label) : null, /*#__PURE__*/React.createElement("input", {
    className: `hv-input${error ? ' hv-input--error' : ''}`,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled
  }), error ? /*#__PURE__*/React.createElement("span", {
    className: "hv-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "hv-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Input/Input.jsx", error: String((e && e.message) || e) }); }

// components/LoadingDividers/Separator.jsx
try { (() => {
/* Hivory Separator — 1px ink-100 rule. */
const hvSeparatorCss = `
.hv-sep{border:none;background:var(--border-subtle);flex:none}
.hv-sep--h{height:1px;width:100%;margin:0}
.hv-sep--v{width:1px;align-self:stretch;margin:0}
`;
function hvEnsureSeparatorCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-separator-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-separator-css';
  s.textContent = hvSeparatorCss;
  document.head.appendChild(s);
}
function Separator({
  orientation = 'horizontal',
  spacing = 0
}) {
  hvEnsureSeparatorCss();
  const style = orientation === 'horizontal' ? spacing ? {
    marginTop: spacing,
    marginBottom: spacing
  } : undefined : spacing ? {
    marginLeft: spacing,
    marginRight: spacing
  } : undefined;
  return /*#__PURE__*/React.createElement("hr", {
    className: `hv-sep hv-sep--${orientation === 'horizontal' ? 'h' : 'v'}`,
    style: style
  });
}
Object.assign(__ds_scope, { Separator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/LoadingDividers/Separator.jsx", error: String((e && e.message) || e) }); }

// components/LoadingDividers/Skeleton.jsx
try { (() => {
/* Hivory Skeleton — shimmer placeholder while data loads. */
const hvSkeletonCss = `
@keyframes hv-skeleton-shimmer{0%{background-position:120% 0}100%{background-position:-20% 0}}
.hv-skeleton{display:block;background:linear-gradient(90deg,var(--ink-100) 25%,var(--ink-50) 45%,var(--ink-100) 65%);background-size:300% 100%;animation:hv-skeleton-shimmer 1.4s var(--ease-out) infinite;border-radius:var(--radius-sm)}
.hv-skeleton--circle{border-radius:999px}
@media (prefers-reduced-motion: reduce){.hv-skeleton{animation:none;background:var(--ink-100)}}
`;
function hvEnsureSkeletonCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-skeleton-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-skeleton-css';
  s.textContent = hvSkeletonCss;
  document.head.appendChild(s);
}
function Skeleton({
  variant = 'line',
  width = '100%',
  height
}) {
  hvEnsureSkeletonCss();
  const h = height !== undefined ? height : variant === 'line' ? 12 : variant === 'circle' ? 32 : 80;
  const w = variant === 'circle' && width === '100%' ? h : width;
  return /*#__PURE__*/React.createElement("span", {
    className: `hv-skeleton${variant === 'circle' ? ' hv-skeleton--circle' : ''}`,
    style: {
      width: w,
      height: h
    }
  });
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/LoadingDividers/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/Menu/Menu.jsx
try { (() => {
/* Hivory Menu — dropdown for row actions and switchers. White panel, overlay shadow. */
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
.hv-menu__sep{height:1px;background:var(--border-subtle);margin:5px 4px}
.hv-menu__hint{margin-left:auto;font-size:11.5px;color:var(--text-faint);font-family:var(--font-mono)}
`;
function hvEnsureMenuCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-menu-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-menu-css';
  s.textContent = hvMenuCss;
  document.head.appendChild(s);
}

/* items: [{ id, label, hint?, danger?, disabled? } | { type: 'separator' }] */
function Menu({
  trigger,
  items = [],
  onSelect,
  align = 'left',
  defaultOpen = false
}) {
  hvEnsureMenuCss();
  const [open, setOpen] = React.useState(defaultOpen);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = ev => {
      if (ref.current && !ref.current.contains(ev.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);
  return /*#__PURE__*/React.createElement("span", {
    className: "hv-menu-wrap",
    ref: ref
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(!open)
  }, trigger), open ? /*#__PURE__*/React.createElement("div", {
    className: `hv-menu hv-menu--${align}`,
    role: "menu"
  }, items.map((it, i) => it.type === 'separator' ? /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "hv-menu__sep"
  }) : /*#__PURE__*/React.createElement("button", {
    key: it.id,
    type: "button",
    role: "menuitem",
    disabled: it.disabled,
    className: `hv-menu__item${it.danger ? ' hv-menu__item--danger' : ''}`,
    onClick: () => {
      setOpen(false);
      if (onSelect) onSelect(it.id);
    }
  }, it.label, it.hint ? /*#__PURE__*/React.createElement("span", {
    className: "hv-menu__hint"
  }, it.hint) : null))) : null);
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Menu/Menu.jsx", error: String((e && e.message) || e) }); }

// components/Metric/MetricChip.jsx
try { (() => {
/* Hivory Metric — small per-article/keyword indicators (difficulty, volume,
   position…) that work inside Table cells and standalone on cards.
   · MetricChip — labelled micro-stat. variant 'chip' (bordered, standalone)
     or 'bare' (naked, for table cells / tight rows).
   · DifficultyMeter — 0–100 with 4 rising bars; low = easy = green by default
     ('difficulty' semantics). semantics 'score' flips it (high = good). */
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
  if (typeof document === 'undefined' || document.getElementById('hv-metric-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-metric-css';
  s.textContent = hvMetricCss;
  document.head.appendChild(s);
}
function MetricChip({
  label,
  value,
  variant = 'chip',
  icon = null
}) {
  hvEnsureMetricCss();
  return /*#__PURE__*/React.createElement("span", {
    className: `hv-metric${variant === 'chip' ? ' hv-metric--chip' : ''}`
  }, icon, label ? /*#__PURE__*/React.createElement("span", {
    className: "hv-metric__label"
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    className: "hv-metric__value"
  }, value));
}
const HV_METER_COLORS = {
  positive: 'var(--status-positive-text)',
  caution: 'var(--status-caution-text)',
  negative: 'var(--status-negative-text)'
};
function hvMeterTone(value, semantics) {
  const v = semantics === 'score' ? 100 - value : value;
  if (v < 30) return 'positive';
  if (v < 60) return 'caution';
  return 'negative';
}
function DifficultyMeter({
  value = 0,
  semantics = 'difficulty',
  showValue = true,
  label
}) {
  hvEnsureMetricCss();
  const tone = hvMeterTone(value, semantics);
  const color = HV_METER_COLORS[tone];
  const filled = Math.max(1, Math.min(4, Math.ceil(value / 25)));
  const heights = [4, 6.5, 9, 11];
  return /*#__PURE__*/React.createElement("span", {
    className: "hv-meter",
    role: "img",
    "aria-label": `${label || (semantics === 'score' ? 'Score' : 'Difficulty')} ${value} of 100`
  }, /*#__PURE__*/React.createElement("span", {
    className: "hv-meter__bars",
    "aria-hidden": "true"
  }, heights.map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "hv-meter__bar",
    style: {
      height: h + 'px',
      background: i < filled ? color : undefined
    }
  }))), showValue ? /*#__PURE__*/React.createElement("span", {
    className: "hv-meter__val",
    style: {
      color: color
    }
  }, value) : null);
}
Object.assign(__ds_scope, { MetricChip, DifficultyMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Metric/MetricChip.jsx", error: String((e && e.message) || e) }); }

// components/Modal/Modal.jsx
try { (() => {
/* Hivory Modal — radius 14 panel on a soft ink scrim; quiet, border-led. */
const hvModalCss = `
.hv-modal-overlay{position:fixed;inset:0;background:rgba(13,15,14,0.40);display:flex;align-items:center;justify-content:center;padding:24px;z-index:100}
.hv-modal{background:var(--surface-card);border-radius:var(--radius-xl);box-shadow:var(--shadow-overlay);width:100%;font-family:var(--font-sans);box-sizing:border-box}
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
function Modal({
  open = false,
  onClose,
  title,
  description,
  footer,
  width = 440,
  children
}) {
  hvEnsureModalCss();
  React.useEffect(() => {
    if (!open || !onClose) return;
    const onKey = ev => {
      if (ev.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "hv-modal-overlay",
    onMouseDown: ev => {
      if (ev.target === ev.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hv-modal",
    role: "dialog",
    "aria-modal": "true",
    style: {
      maxWidth: width
    }
  }, title || description ? /*#__PURE__*/React.createElement("header", {
    className: "hv-modal__head"
  }, title ? /*#__PURE__*/React.createElement("h2", {
    className: "hv-modal__title"
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    className: "hv-modal__desc"
  }, description) : null) : null, children ? /*#__PURE__*/React.createElement("div", {
    className: "hv-modal__body"
  }, children) : null, footer ? /*#__PURE__*/React.createElement("footer", {
    className: "hv-modal__foot"
  }, footer) : null));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Modal/Modal.jsx", error: String((e && e.message) || e) }); }

// components/ReviewActions/ReviewActions.jsx
try { (() => {
/* Hivory ReviewActions — repeated inline approve/reject pairs.
   Rule: quiet at rest (ghost ink-400 glyphs), tone only on hover, collapse to a
   status chip once decided. Filled buttons are NEVER used for repeated row actions. */
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
  if (typeof document === 'undefined' || document.getElementById('hv-review-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-review-css';
  s.textContent = hvReviewCss;
  document.head.appendChild(s);
}
const HV_TICK = /*#__PURE__*/React.createElement("svg", {
  width: "13",
  height: "13",
  viewBox: "0 0 14 14"
}, /*#__PURE__*/React.createElement("path", {
  d: "M2.5 7.5L5.5 10.5L11.5 3.5",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const HV_CROSS = /*#__PURE__*/React.createElement("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 14 14"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3.5 3.5L10.5 10.5M10.5 3.5L3.5 10.5",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round"
}));

/* Generic quiet 28px icon button. tone: 'neutral' | 'approve' | 'reject'. */
function IconButton({
  tone = 'neutral',
  label,
  onClick,
  disabled = false,
  children
}) {
  hvEnsureReviewCss();
  const toneClass = tone === 'approve' ? ' hv-iconbtn--approve' : tone === 'reject' ? ' hv-iconbtn--reject' : '';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: `hv-iconbtn${toneClass}`,
    "aria-label": label,
    title: label,
    onClick: onClick,
    disabled: disabled
  }, children);
}

/* The approve/reject pair. Uncontrolled via defaultState, controlled via state.
   Collapses to a tinted chip (+ optional undo) once decided. */
function ReviewActions({
  state,
  defaultState = 'pending',
  onApprove,
  onReject,
  onUndo,
  undoable = true
}) {
  hvEnsureReviewCss();
  const [internal, setInternal] = React.useState(defaultState);
  const current = state !== undefined ? state : internal;
  const decide = next => {
    if (state === undefined) setInternal(next);
    if (next === 'approved' && onApprove) onApprove();
    if (next === 'rejected' && onReject) onReject();
  };
  const undo = () => {
    if (state === undefined) setInternal('pending');
    if (onUndo) onUndo();
  };
  if (current === 'pending') {
    return /*#__PURE__*/React.createElement("span", {
      className: "hv-review"
    }, /*#__PURE__*/React.createElement(IconButton, {
      tone: "approve",
      label: "Approve",
      onClick: () => decide('approved')
    }, HV_TICK), /*#__PURE__*/React.createElement(IconButton, {
      tone: "reject",
      label: "Reject",
      onClick: () => decide('rejected')
    }, HV_CROSS));
  }
  return /*#__PURE__*/React.createElement("span", {
    className: "hv-review"
  }, /*#__PURE__*/React.createElement("span", {
    className: `hv-review__chip hv-review__chip--${current}`
  }, current === 'approved' ? 'Approved' : 'Rejected'), undoable ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "hv-review__undo",
    onClick: undo
  }, "Undo") : null);
}
Object.assign(__ds_scope, { IconButton, ReviewActions });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ReviewActions/ReviewActions.jsx", error: String((e && e.message) || e) }); }

// components/Select/Select.jsx
try { (() => {
/* Hivory Select — same field chrome as Input, native select with chevron. */
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
  if (typeof document === 'undefined' || document.getElementById('hv-select-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-select-css';
  s.textContent = hvSelectCss;
  document.head.appendChild(s);
}
function Select({
  label,
  options = [],
  value,
  defaultValue,
  onChange,
  hint,
  disabled = false
}) {
  hvEnsureSelectCss();
  return /*#__PURE__*/React.createElement("label", {
    className: "hv-selfield"
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "hv-selfield__label"
  }, label) : null, /*#__PURE__*/React.createElement("select", {
    className: "hv-select",
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled
  }, options.map(opt => {
    const o = typeof opt === 'string' ? {
      value: opt,
      label: opt
    } : opt;
    return /*#__PURE__*/React.createElement("option", {
      key: o.value,
      value: o.value
    }, o.label);
  })), hint ? /*#__PURE__*/React.createElement("span", {
    className: "hv-selfield__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Select/Select.jsx", error: String((e && e.message) || e) }); }

// components/Sidebar/Sidebar.jsx
try { (() => {
/* Hivory Sidebar — app navigation rail, faithful to the portal's real Sidebar.tsx:
   272px card surface (56 collapsed), workspace chip header, uppercase group headers
   with chevron expand, 13px items / 14px icons / radius 7, active = ink-50 fill +
   semibold + 2px ink bar, signal dot marks collapsed sections holding the active page. */
const hvSidebarCss = `
.hv-side{display:flex;flex-direction:column;width:272px;height:100%;box-sizing:border-box;background:var(--surface-card);border-right:1px solid var(--border-subtle);font-family:var(--font-sans);transition:width 200ms var(--ease-out);overflow:hidden}
.hv-side--collapsed{width:56px}
.hv-side__head{padding:14px 10px 10px}
.hv-side__ws{display:flex;align-items:center;gap:10px;padding:8px 10px;box-shadow:inset 0 0 0 1px var(--border-subtle);background:var(--surface-sunken);border-radius:var(--radius-md);cursor:pointer;transition:background-color var(--duration-soft) var(--ease-out);min-width:0}
.hv-side__ws:hover{background:var(--ink-100)}
.hv-side--collapsed .hv-side__ws{justify-content:center;padding:8px 0;border-color:transparent;background:none}
.hv-side__ws-logo{width:22px;height:22px;border-radius:5px;background:var(--ink-950);color:var(--white);display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:600;flex:none}
.hv-side__ws-name{font-size:12.5px;font-weight:500;color:var(--ink-950);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}
.hv-side__ws-caret{flex:none;color:var(--ink-400)}
.hv-side__nav{flex:1;overflow-y:auto;padding:0 10px 8px;display:flex;flex-direction:column}
.hv-side__group{display:flex;align-items:center;gap:8px;width:100%;padding:8px 10px;margin-top:4px;border:none;background:none;border-radius:var(--radius-sm);font-family:var(--font-sans);font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-faint);cursor:pointer;transition:color var(--duration-soft) var(--ease-out),background-color var(--duration-fast) var(--ease-out)}
.hv-side__group:hover{background:var(--ink-50);color:var(--ink-700)}
.hv-side__group:disabled{color:var(--ink-200);cursor:default;background:none}
.hv-side__chev{flex:none;transition:transform 200ms var(--ease-out)}
.hv-side__chev--open{transform:rotate(90deg)}
.hv-side__signal{margin-left:auto;width:6px;height:6px;border-radius:999px;background:var(--green-600);flex:none}
.hv-side__items{overflow:hidden;transition:max-height 200ms var(--ease-out),opacity 200ms var(--ease-out)}
.hv-side__item{position:relative;display:flex;align-items:center;gap:10px;width:100%;box-sizing:border-box;padding:6px 10px 6px 28px;margin:2px 0;border:none;background:none;border-radius:var(--radius-sm);font-family:var(--font-sans);font-size:13px;color:var(--ink-900);cursor:pointer;text-align:left;transition:background-color var(--duration-soft) var(--ease-out)}
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
  if (typeof document === 'undefined' || document.getElementById('hv-sidebar-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-sidebar-css';
  s.textContent = hvSidebarCss;
  document.head.appendChild(s);
}
const hvChevron = open => /*#__PURE__*/React.createElement("svg", {
  className: `hv-side__chev${open ? ' hv-side__chev--open' : ''}`,
  width: "10",
  height: "10",
  viewBox: "0 0 12 12"
}, /*#__PURE__*/React.createElement("path", {
  d: "M4 2.5L8 6L4 9.5",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));

/* Nav glyphs — drawn to the Hivory icon grammar (16px grid, 1.5 stroke, hex signature).
   Master set lives in components/Icon; these mirror it so Sidebar stays self-contained. */
const HV_ICON_PATHS = {
  dashboard: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "5",
    height: "5",
    rx: "1.2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "2",
    width: "5",
    height: "5",
    rx: "1.2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "9",
    width: "5",
    height: "5",
    rx: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 8.6L14.01 10.05V12.95L11.5 14.4L8.99 12.95V10.05Z"
  })),
  pipeline: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 3h11L9.5 7.8v4.7l-3-2V7.8L2.5 3Z"
  })),
  doc: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M4 2h5l3 3v9H4V2Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 2v3h3"
  })),
  bot: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M8 2.5L12.76 5.25V10.75L8 13.5L3.24 10.75V5.25Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.2 7.2v1.6M9.8 7.2v1.6"
  })),
  chart: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M2 13.5h12M4.5 10.5v-3M8 10.5V4.5M11.5 10.5V7"
  })),
  globe: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "5.75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.25 8h11.5M8 2.25c2.4 2 2.4 9.5 0 11.5M8 2.25c-2.4 2-2.4 9.5 0 11.5"
  })),
  clock: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "5.75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 5v3.2l2.2 1.3"
  })),
  upload: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M8 10.5V3M5 5.5 8 2.5l3 3M3 13.5h10"
  })),
  signout: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M6 2.5H3.5v11H6M10 5l3 3-3 3M13 8H6.5"
  })),
  moon: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M13 9.5A5.5 5.5 0 1 1 6.5 3a4.5 4.5 0 0 0 6.5 6.5Z"
  }))
};
function SidebarIcon({
  name
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, HV_ICON_PATHS[name] || HV_ICON_PATHS.doc);
}
function HvNavItem({
  item,
  active,
  collapsed,
  onNavigate,
  top = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: item.disabled,
    title: collapsed ? item.label : undefined,
    className: `hv-side__item${active ? ' hv-side__item--active' : ''}${top ? ' hv-side__item--top' : ''}`,
    onClick: () => {
      if (onNavigate) onNavigate(item.id);
    }
  }, item.icon ? /*#__PURE__*/React.createElement("span", {
    className: "hv-side__icon"
  }, item.icon) : null, !collapsed ? /*#__PURE__*/React.createElement("span", {
    className: "hv-side__label"
  }, item.label) : null, !collapsed && item.pill ? /*#__PURE__*/React.createElement("span", {
    className: `hv-side__pill hv-side__pill--${item.pillTone || 'neutral'}`
  }, item.pill) : null);
}

/* sections: [{ key, label, items: [{ id, label, icon?, disabled?, pill?, pillTone? }], defaultExpanded? }] */
function Sidebar({
  workspace,
  topItems = [],
  sections = [],
  footerItems = [],
  activeId,
  onNavigate,
  collapsed = false,
  height = '100%'
}) {
  hvEnsureSidebarCss();
  const [expanded, setExpanded] = React.useState(() => {
    const init = {};
    sections.forEach(s => {
      init[s.key] = s.defaultExpanded !== false;
    });
    return init;
  });
  const toggle = key => setExpanded(prev => ({
    ...prev,
    [key]: !prev[key]
  }));
  const sectionEnabled = s => s.items.some(it => !it.disabled);
  const sectionHasActive = s => s.items.some(it => it.id === activeId);
  return /*#__PURE__*/React.createElement("aside", {
    className: `hv-side${collapsed ? ' hv-side--collapsed' : ''}`,
    style: {
      height
    }
  }, workspace ? /*#__PURE__*/React.createElement("div", {
    className: "hv-side__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hv-side__ws",
    role: "button"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hv-side__ws-logo"
  }, workspace.initials || (workspace.name || 'HV').slice(0, 2).toUpperCase()), !collapsed ? /*#__PURE__*/React.createElement("span", {
    className: "hv-side__ws-name"
  }, workspace.name) : null, !collapsed && workspace.switchable ? /*#__PURE__*/React.createElement("svg", {
    className: "hv-side__ws-caret",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.5 4.5L6 2L8.5 4.5M3.5 7.5L6 10L8.5 7.5"
  })) : null)) : null, /*#__PURE__*/React.createElement("nav", {
    className: "hv-side__nav"
  }, topItems.map(it => /*#__PURE__*/React.createElement(HvNavItem, {
    key: it.id,
    item: it,
    top: true,
    active: it.id === activeId,
    collapsed: collapsed,
    onNavigate: onNavigate
  })), sections.map(s => {
    const open = !!expanded[s.key] && !collapsed;
    const enabled = sectionEnabled(s);
    return /*#__PURE__*/React.createElement("div", {
      key: s.key
    }, !collapsed ? /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "hv-side__group",
      disabled: !enabled,
      onClick: () => toggle(s.key)
    }, hvChevron(open), /*#__PURE__*/React.createElement("span", null, s.label), !open && sectionHasActive(s) ? /*#__PURE__*/React.createElement("span", {
      className: "hv-side__signal"
    }) : null) : null, /*#__PURE__*/React.createElement("div", {
      className: "hv-side__items",
      style: {
        maxHeight: open || collapsed ? 500 : 0,
        opacity: open || collapsed ? 1 : 0
      }
    }, s.items.map(it => /*#__PURE__*/React.createElement(HvNavItem, {
      key: it.id,
      item: it,
      active: it.id === activeId,
      collapsed: collapsed,
      onNavigate: onNavigate
    }))));
  })), footerItems.length ? /*#__PURE__*/React.createElement("div", {
    className: "hv-side__foot"
  }, footerItems.map(it => /*#__PURE__*/React.createElement(HvNavItem, {
    key: it.id,
    item: it,
    active: false,
    collapsed: collapsed,
    onNavigate: onNavigate
  }))) : null);
}
Object.assign(__ds_scope, { SidebarIcon, Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Sidebar/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/Spinner/Spinner.jsx
try { (() => {
/* Hivory Spinner — brand activity indicator.
   Two counter-rotating hexagon outlines, echoing the dual-hex mark:
   a dashed "head" hex spins clockwise, a faint full "track" hex drifts
   counter-clockwise. Reduced motion: static mark at 60% opacity. */
const hvSpinnerCss = `
.hv-spin{display:inline-flex;align-items:center;gap:8px;font-family:var(--font-sans)}
.hv-spin__svg{display:block;flex:none}
.hv-spin__head{transform-origin:50% 50%;animation:hv-spin-cw 1.4s linear infinite}
.hv-spin__track{transform-origin:50% 50%;animation:hv-spin-ccw 3.6s linear infinite}
.hv-spin--calm .hv-spin__head{animation-duration:2.8s}
.hv-spin--calm .hv-spin__track{animation-duration:7s}
.hv-spin__label{font-size:12.5px;font-weight:500;color:var(--text-muted);line-height:1}
.hv-spin--on-dark .hv-spin__label{color:var(--ink-300)}
@keyframes hv-spin-cw{to{transform:rotate(360deg)}}
@keyframes hv-spin-ccw{to{transform:rotate(-360deg)}}
@media (prefers-reduced-motion: reduce){
  .hv-spin__head,.hv-spin__track{animation:none;opacity:.6}
}
.hv-pulsedot{position:relative;display:inline-block;border-radius:999px;flex:none}
.hv-pulsedot::after{content:"";position:absolute;inset:0;border-radius:999px;background:inherit;animation:hv-pulse 1.8s cubic-bezier(0.2,0.8,0.2,1) infinite}
@media (prefers-reduced-motion: reduce){.hv-pulsedot::after{animation:none}}
@keyframes hv-pulse{0%{transform:scale(1);opacity:.55}80%,100%{transform:scale(2.6);opacity:0}}
`;
function hvEnsureSpinnerCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-spinner-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-spinner-css';
  s.textContent = hvSpinnerCss;
  document.head.appendChild(s);
}
const HV_SPIN_TONES = {
  brand: {
    head: 'var(--green-600)',
    track: 'var(--green-300)'
  },
  ink: {
    head: 'var(--ink-700)',
    track: 'var(--ink-200)'
  },
  'on-dark': {
    head: 'var(--green-500)',
    track: 'var(--ink-700)'
  }
};

/* Pointy-top hexagon (r=9, c=12) and flat-top hexagon (30° rotated). */
const HV_HEX_A = 'M12 3 L19.79 7.5 L19.79 16.5 L12 21 L4.21 16.5 L4.21 7.5 Z';
const HV_HEX_B = 'M16.5 4.21 L21 12 L16.5 19.79 L7.5 19.79 L3 12 L7.5 4.21 Z';
function Spinner({
  size = 16,
  tone = 'brand',
  label,
  calm = false
}) {
  hvEnsureSpinnerCss();
  const c = HV_SPIN_TONES[tone] || HV_SPIN_TONES.brand;
  return /*#__PURE__*/React.createElement("span", {
    className: `hv-spin${calm ? ' hv-spin--calm' : ''}${tone === 'on-dark' ? ' hv-spin--on-dark' : ''}`,
    role: "status",
    "aria-label": typeof label === 'string' ? label : 'Working'
  }, /*#__PURE__*/React.createElement("svg", {
    className: "hv-spin__svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    className: "hv-spin__track",
    d: HV_HEX_B,
    stroke: c.track,
    strokeWidth: "2",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    className: "hv-spin__head",
    d: HV_HEX_A,
    stroke: c.head,
    strokeWidth: "2",
    strokeLinejoin: "round",
    strokeLinecap: "round",
    strokeDasharray: "38 16"
  })), label ? /*#__PURE__*/React.createElement("span", {
    className: "hv-spin__label"
  }, label) : null);
}

/* PulseDot — ambient "alive" indicator (agent running, live sync).
   Use Spinner for discrete in-flight work; PulseDot for ongoing presence. */
const HV_PULSE_TONES = {
  positive: 'var(--green-600)',
  caution: 'var(--status-caution-text)',
  info: 'var(--status-info-text)',
  negative: 'var(--status-negative-text)'
};
function PulseDot({
  tone = 'positive',
  size = 7
}) {
  hvEnsureSpinnerCss();
  return /*#__PURE__*/React.createElement("span", {
    className: "hv-pulsedot",
    style: {
      width: size,
      height: size,
      background: HV_PULSE_TONES[tone] || HV_PULSE_TONES.positive
    },
    "aria-hidden": "true"
  });
}
Object.assign(__ds_scope, { Spinner, PulseDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Spinner/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/Table/Table.jsx
try { (() => {
/* Hivory Table — Engine data table: uppercase 11.5px header, mono numerals, hover rows. */
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
`;
function hvEnsureTableCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-table-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-table-css';
  s.textContent = hvTableCss;
  document.head.appendChild(s);
}

/* columns: [{ key, label, num?, strong? }] · rows: array of objects keyed by column key.
   Cell values may be strings, numbers, or React nodes (e.g. a Badge). */
function Table({
  columns = [],
  rows = [],
  hover = true
}) {
  hvEnsureTableCss();
  return /*#__PURE__*/React.createElement("table", {
    className: `hv-table${hover ? ' hv-table--hover' : ''}`
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    className: c.num ? 'hv-table__num' : ''
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    className: `${c.num ? 'hv-table__num' : ''}${c.strong ? ' hv-table__strong' : ''}`
  }, row[c.key]))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Table/Table.jsx", error: String((e && e.message) || e) }); }

// components/Tabs/Tabs.jsx
try { (() => {
/* Hivory Tabs — Engine: quiet underline tabs, ink active, 120ms. */
const hvTabsCss = `
.hv-tabs{display:flex;gap:2px;border-bottom:1px solid var(--border-subtle);font-family:var(--font-sans)}
.hv-tab{appearance:none;background:none;border:none;cursor:pointer;padding:9px 12px;font-size:13.5px;font-family:var(--font-sans);font-weight:500;color:var(--text-muted);border-bottom:2px solid transparent;margin-bottom:-1px;transition:color var(--duration-soft) var(--ease-out),box-shadow var(--duration-fast) var(--ease-out)}
.hv-tab:hover{color:var(--ink-700)}
.hv-tab--active{color:var(--ink-950);border-bottom-color:var(--ink-950)}
.hv-tab__count{margin-left:6px;font-size:11.5px;font-weight:500;color:var(--ink-400);background:var(--ink-100);border-radius:999px;padding:1px 7px}
.hv-tab--active .hv-tab__count{background:var(--green-50);color:var(--green-800)}
.hv-tab:focus-visible{outline:2px solid var(--border-focus);outline-offset:-2px;border-radius:4px}
`;
function hvEnsureTabsCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-tabs-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-tabs-css';
  s.textContent = hvTabsCss;
  document.head.appendChild(s);
}

/* items: [{ id, label, count? }] — controlled via activeId/onChange, or uncontrolled via defaultActiveId. */
function Tabs({
  items = [],
  activeId,
  defaultActiveId,
  onChange
}) {
  hvEnsureTabsCss();
  const [internal, setInternal] = React.useState(defaultActiveId ?? (items[0] && items[0].id));
  const current = activeId !== undefined ? activeId : internal;
  const select = id => {
    if (activeId === undefined) setInternal(id);
    if (onChange) onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "hv-tabs",
    role: "tablist"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    type: "button",
    role: "tab",
    "aria-selected": it.id === current,
    className: `hv-tab${it.id === current ? ' hv-tab--active' : ''}`,
    onClick: () => select(it.id)
  }, it.label, it.count !== undefined ? /*#__PURE__*/React.createElement("span", {
    className: "hv-tab__count"
  }, it.count) : null)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Tabs/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/Toast/Toast.jsx
try { (() => {
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
function Toast({
  tone = 'neutral',
  title,
  description,
  onDismiss
}) {
  hvEnsureToastCss();
  return /*#__PURE__*/React.createElement("div", {
    className: "hv-toast",
    role: "status"
  }, /*#__PURE__*/React.createElement("span", {
    className: `hv-toast__dot hv-toast__dot--${tone}`
  }), /*#__PURE__*/React.createElement("div", null, title ? /*#__PURE__*/React.createElement("div", {
    className: "hv-toast__title"
  }, title) : null, description ? /*#__PURE__*/React.createElement("div", {
    className: "hv-toast__desc"
  }, description) : null), onDismiss ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "hv-toast__close",
    onClick: onDismiss,
    "aria-label": "Dismiss"
  }, "\xD7") : null);
}

/* Fixed bottom-right by default; static=true renders in flow (for specs). */
function ToastStack({
  static: isStatic = false,
  children
}) {
  hvEnsureToastCss();
  return /*#__PURE__*/React.createElement("div", {
    className: `hv-toast-stack${isStatic ? ' hv-toast-stack--static' : ''}`
  }, children);
}
Object.assign(__ds_scope, { Toast, ToastStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Toast/Toast.jsx", error: String((e && e.message) || e) }); }

// components/Tooltip/Tooltip.jsx
try { (() => {
/* Hivory Tooltip — ink-950 chip on hover/focus. Keep labels short; no interactive content. */
const hvTooltipCss = `
.hv-tip-wrap{position:relative;display:inline-block}
.hv-tip{position:absolute;left:50%;transform:translateX(-50%) translateY(2px);background:var(--ink-950);color:var(--white);font-family:var(--font-sans);font-size:11.5px;font-weight:500;line-height:1.35;padding:5px 9px;border-radius:var(--radius-sm);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity var(--duration-soft) var(--ease-out),transform var(--duration-fast) var(--ease-out);z-index:60}
.hv-tip--top{bottom:calc(100% + 6px)}
.hv-tip--bottom{top:calc(100% + 6px)}
.hv-tip-wrap:hover .hv-tip,.hv-tip-wrap:focus-within .hv-tip,.hv-tip--open{opacity:1;transform:translateX(-50%) translateY(0)}
`;
function hvEnsureTooltipCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-tooltip-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-tooltip-css';
  s.textContent = hvTooltipCss;
  document.head.appendChild(s);
}
function Tooltip({
  label,
  side = 'top',
  open = false,
  children
}) {
  hvEnsureTooltipCss();
  return /*#__PURE__*/React.createElement("span", {
    className: "hv-tip-wrap"
  }, children, /*#__PURE__*/React.createElement("span", {
    className: `hv-tip hv-tip--${side}${open ? ' hv-tip--open' : ''}`,
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Tooltip/Tooltip.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.ChartLegend = __ds_scope.ChartLegend;

__ds_ns.ChartTooltip = __ds_scope.ChartTooltip;

__ds_ns.DateRangePicker = __ds_scope.DateRangePicker;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

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

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.PulseDot = __ds_scope.PulseDot;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastStack = __ds_scope.ToastStack;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
