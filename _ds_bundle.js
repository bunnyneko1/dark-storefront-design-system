/* @ds-bundle: {"format":3,"namespace":"EmberTobaccoCoDesignSystem_3a8c24","components":[{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"}],"sourceHashes":{"components/commerce/ProductCard.jsx":"14740bef0845","components/core/Badge.jsx":"853af9deb0c3","components/core/Button.jsx":"00e90309c5d0","components/core/IconButton.jsx":"8e358c9bbbcf","components/core/Tag.jsx":"d28960e15907","components/forms/Input.jsx":"abad55a3d5e9","components/forms/QuantityStepper.jsx":"6141aaf4e0fa","ui_kits/storefront/App.jsx":"794d8f9fa405","ui_kits/storefront/CartDrawer.jsx":"6a44b506065a","ui_kits/storefront/Checkout.jsx":"ea7815ec2cd8","ui_kits/storefront/Confirmation.jsx":"62ef38692204","ui_kits/storefront/Footer.jsx":"d66a8b887f1c","ui_kits/storefront/ProductDetail.jsx":"a5c2f4c11f73","ui_kits/storefront/ProductGrid.jsx":"1f2d50ce1b33","ui_kits/storefront/Reveal.jsx":"b237afdffca2","ui_kits/storefront/Sections.jsx":"d62fdfba8887","ui_kits/storefront/Showcase.jsx":"49b2bb3bd724","ui_kits/storefront/TopNav.jsx":"ef71dc28053f","ui_kits/storefront/data.js":"b0a8635ed9fa","ui_kits/storefront/icons.js":"c7b5e7238447","ui_kits/storefront/image-slot.js":"9309434cb09c","ui_kits/storefront/payment.js":"ec597cff5869","ui_kits/storefront/useMedia.js":"773cb127b4af"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EmberTobaccoCoDesignSystem_3a8c24 = window.EmberTobaccoCoDesignSystem_3a8c24 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small status pill. Tones map to stock + promo states.
 */
function Badge({
  children,
  tone = 'neutral',
  variant = 'soft',
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      fg: 'var(--cream-300)',
      bg: 'rgba(246,241,231,0.07)',
      bd: 'var(--line-strong)'
    },
    gold: {
      fg: 'var(--gold-300)',
      bg: 'var(--accent-soft)',
      bd: 'var(--line-gold)'
    },
    ember: {
      fg: 'var(--ember-300)',
      bg: 'rgba(166,59,43,0.14)',
      bd: 'rgba(166,59,43,0.4)'
    },
    instock: {
      fg: 'var(--in-stock)',
      bg: 'rgba(132,181,127,0.12)',
      bd: 'rgba(132,181,127,0.34)'
    },
    low: {
      fg: 'var(--low-stock)',
      bg: 'rgba(201,162,39,0.13)',
      bd: 'rgba(201,162,39,0.36)'
    },
    out: {
      fg: 'var(--out-of-stock)',
      bg: 'rgba(208,106,90,0.12)',
      bd: 'rgba(208,106,90,0.34)'
    }
  };
  const t = tones[tone] || tones.neutral;
  const solid = variant === 'solid';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 9px',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--w-semibold)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: solid ? 'var(--text-on-gold)' : t.fg,
      background: solid ? t.fg : t.bg,
      border: `1px solid ${solid ? 'transparent' : t.bd}`,
      borderRadius: 'var(--radius-xs)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Primary action. Brass-filled by default; ember + ghost + outline variants.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0 14px',
      height: 36,
      font: 'var(--text-xs)',
      track: '0.14em'
    },
    md: {
      padding: '0 22px',
      height: 46,
      font: 'var(--text-sm)',
      track: '0.13em'
    },
    lg: {
      padding: '0 32px',
      height: 56,
      font: 'var(--text-base)',
      track: '0.12em'
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6em',
    height: s.height,
    padding: s.padding,
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-label)',
    fontSize: s.font,
    fontWeight: 'var(--w-semibold)',
    letterSpacing: s.track,
    textTransform: 'uppercase',
    border: '1px solid transparent',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.42 : 1,
    transition: 'background var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out), color var(--dur) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    whiteSpace: 'nowrap',
    userSelect: 'none'
  };
  const variants = {
    primary: {
      background: 'linear-gradient(180deg, var(--gold-300), var(--gold-400))',
      color: 'var(--text-on-gold)',
      boxShadow: 'var(--glow-gold-soft)'
    },
    ember: {
      background: 'var(--ember-500)',
      color: 'var(--text-on-ember)',
      borderColor: 'var(--ember-400)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      borderColor: 'var(--line-gold)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: 'linear-gradient(180deg, var(--gold-200), var(--gold-300))',
      boxShadow: 'var(--glow-gold)'
    },
    ember: {
      background: 'var(--ember-400)',
      borderColor: 'var(--ember-300)'
    },
    outline: {
      borderColor: 'var(--gold-400)',
      color: 'var(--gold-300)'
    },
    ghost: {
      background: 'var(--accent-soft)',
      color: 'var(--text-strong)'
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...v,
      ...hoverStyle,
      transform: press && !disabled ? 'translateY(1px)' : 'none',
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
/**
 * Storefront product tile.
 * Renders a CSS "pack" placeholder unless an `image` URL is supplied.
 */
function ProductCard({
  name,
  brand,
  price,
  oldPrice,
  // optional struck-through original price
  discount,
  // optional, e.g. "26% OFF"
  rating,
  // optional 0–5
  ratingCount,
  // optional review count
  unit = 'per pack',
  stock = 'instock',
  // 'instock' | 'low' | 'out'
  flag,
  // optional Badge text, e.g. "New"
  image,
  fit = 'cover',
  // 'cover' (default) or 'contain' to show the whole pack
  accent = 'var(--gold-400)',
  onAdd,
  onOpen,
  // optional: open product detail (visual + title click)
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const stockMap = {
    instock: {
      tone: 'instock',
      label: 'In stock'
    },
    low: {
      tone: 'low',
      label: 'Low stock'
    },
    out: {
      tone: 'out',
      label: 'Out of stock'
    }
  };
  const sk = stockMap[stock] || stockMap.instock;
  const soldOut = stock === 'out';
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: `1px solid ${hover ? 'var(--line-gold)' : 'var(--line)'}`,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      transition: 'border-color var(--dur) var(--ease-out), transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
      transform: hover ? 'translateY(-3px)' : 'none',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      overflow: 'hidden',
      background: 'radial-gradient(120% 120% at 50% 0%, var(--ink-700), var(--ink-850))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: '1px solid var(--line)',
      cursor: onOpen ? 'pointer' : 'default'
    }
  }, flag && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "gold",
    variant: "solid"
  }, flag)), discount && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "ember",
    variant: "solid"
  }, discount)), image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: fit,
      padding: fit === 'contain' ? '3%' : 0,
      boxSizing: 'border-box',
      opacity: soldOut ? 0.4 : 1
    }
  }) :
  /*#__PURE__*/
  /* CSS pack placeholder */
  React.createElement("div", {
    style: {
      width: '38%',
      height: '64%',
      background: 'linear-gradient(160deg, var(--ink-600), var(--ink-850))',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-xs)',
      boxShadow: 'var(--shadow-sm), var(--inset-top)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 12,
      opacity: soldOut ? 0.4 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 3,
      background: accent,
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--cream-200)',
      letterSpacing: '0.04em',
      lineHeight: 1.1
    }
  }, brand)), soldOut && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 700,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--out-of-stock)'
    }
  }, "Sold out")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, brand), /*#__PURE__*/React.createElement("h3", {
    onClick: onOpen,
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-md)',
      fontWeight: 500,
      color: 'var(--text-strong)',
      lineHeight: 1.15,
      cursor: onOpen ? 'pointer' : 'default'
    }
  }, name), rating != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-label": `${rating} out of 5`,
    style: {
      fontSize: 12,
      color: 'var(--gold-400)',
      letterSpacing: '0.06em'
    }
  }, '\u2605'.repeat(Math.round(rating)) + '\u2606'.repeat(5 - Math.round(rating))), ratingCount != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-faint)'
    }
  }, "(", ratingCount, ")"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: sk.tone
  }, sk.label), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'flex-end',
      gap: 7
    }
  }, oldPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-faint)',
      textDecoration: 'line-through'
    }
  }, oldPrice), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-md)',
      fontWeight: 600,
      color: 'var(--gold-300)',
      fontVariantNumeric: 'tabular-nums',
      lineHeight: 1
    }
  }, price)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-faint)',
      marginTop: 2
    }
  }, unit))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: soldOut ? 'outline' : 'primary',
    size: "sm",
    fullWidth: true,
    disabled: soldOut,
    onClick: onAdd,
    style: {
      marginTop: 4
    }
  }, soldOut ? 'Notify me' : 'Add to cart')));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Square/circle icon-only control. Pass a Lucide (or any) icon node as children.
 */
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  shape = 'square',
  disabled = false,
  badge = null,
  ariaLabel,
  onClick,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 34,
    md: 42,
    lg: 50
  }[size] || 42;
  const [hover, setHover] = React.useState(false);
  const variants = {
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    },
    solid: {
      background: 'var(--surface-raised)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border)'
    },
    gold: {
      background: 'var(--gold-400)',
      color: 'var(--text-on-gold)',
      border: '1px solid var(--gold-400)'
    }
  };
  const hoverStyles = {
    ghost: {
      background: 'var(--accent-soft)',
      color: 'var(--text-strong)'
    },
    solid: {
      background: 'var(--ink-600)',
      borderColor: 'var(--border-strong)'
    },
    gold: {
      background: 'var(--gold-300)'
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dims,
      height: dims,
      borderRadius: shape === 'circle' ? 'var(--radius-pill)' : 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background var(--dur) var(--ease-out), color var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)',
      ...v,
      ...(hover && !disabled ? hoverStyles[variant] : {}),
      ...style
    }
  }, rest), children, badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -5,
      right: -5,
      minWidth: 18,
      height: 18,
      padding: '0 5px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--ember-500)',
      color: 'var(--cream-50)',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 600,
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      border: '1.5px solid var(--bg-page)'
    }
  }, badge));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Filter chip / category tag. Toggleable when `selectable`.
 */
function Tag({
  children,
  selected = false,
  selectable = false,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const active = selected;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      height: 34,
      padding: '0 16px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--w-medium)',
      letterSpacing: '0.01em',
      color: active ? 'var(--text-on-gold)' : hover ? 'var(--text-strong)' : 'var(--text-body)',
      background: active ? 'var(--gold-400)' : hover ? 'var(--surface-raised)' : 'transparent',
      border: `1px solid ${active ? 'var(--gold-400)' : 'var(--border)'}`,
      borderRadius: 'var(--radius-pill)',
      cursor: selectable ? 'pointer' : 'default',
      transition: 'all var(--dur) var(--ease-out)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text field with floating-style label and brass focus ring.
 */
function Input({
  label,
  type = 'text',
  placeholder = '',
  value,
  defaultValue,
  onChange,
  hint,
  error,
  iconLeft = null,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || `inp-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? 'var(--red-500)' : focus ? 'var(--gold-400)' : 'var(--border)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--w-semibold)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 48,
      padding: '0 14px',
      background: 'var(--surface-inset)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--ring)' : 'var(--inset-press)',
      opacity: disabled ? 0.5 : 1,
      transition: 'border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      background: 'transparent',
      border: 'none',
      outline: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)'
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--red-300)' : 'var(--text-faint)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
/**
 * Quantity stepper for cart lines. Clamps to [min, max].
 */
function QuantityStepper({
  value = 1,
  min = 1,
  max = 99,
  onChange,
  size = 'md',
  style = {}
}) {
  const dim = size === 'sm' ? 32 : 40;
  const set = n => {
    const clamped = Math.max(min, Math.min(max, n));
    onChange && onChange(clamped);
  };
  const btn = (label, fn, dis) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    onClick: fn,
    disabled: dis,
    style: {
      width: dim,
      height: dim,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      border: 'none',
      color: dis ? 'var(--text-faint)' : 'var(--text-body)',
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1,
      cursor: dis ? 'not-allowed' : 'pointer',
      transition: 'color var(--dur) var(--ease-out)'
    }
  }, label === 'Decrease' ? '\u2212' : '+');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-inset)',
      ...style
    }
  }, btn('Decrease', () => set(value - 1), value <= min), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: dim - 4,
      textAlign: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums',
      borderLeft: '1px solid var(--line)',
      borderRight: '1px solid var(--line)',
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, value), btn('Increase', () => set(value + 1), value >= max));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/App.jsx
try { (() => {
/* App — orchestrates the storefront: home → product detail → cart → checkout → confirmation. */
function App() {
  const [view, setView] = React.useState({
    name: 'home'
  });
  const [cartOpen, setCartOpen] = React.useState(false);
  const [items, setItems] = React.useState(() => {
    try {
      const s = localStorage.getItem('cart');
      return s ? JSON.parse(s) : [];
    } catch (e) {
      return [];
    }
  });
  // Persist cart across reloads.
  React.useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(items));
    } catch (e) {}
  }, [items]);
  const [shopCat, setShopCat] = React.useState('all');
  const [toast, setToast] = React.useState(null);
  const toastTimer = React.useRef(null);
  const products = window.PRODUCTS || [];

  // Handle return from Zap Pay (live mode): ?success=true&orderId=…
  React.useEffect(() => {
    const r = window.ZapPay && window.ZapPay.readReturn && window.ZapPay.readReturn();
    if (!r) return;
    const total = Number(sessionStorage.getItem('zap_total') || 0);
    if (r.success) {
      setItems([]);
      setView({
        name: 'confirmation',
        order: {
          number: r.orderId,
          total
        }
      });
    } else {
      setView({
        name: 'checkout',
        payError: true
      });
    }
    history.replaceState(null, '', location.pathname);
  }, []);
  const go = v => {
    setView(v);
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  };

  // Navigate to the shop, optionally filtered, and scroll to the grid.
  const goShop = cat => {
    if (cat) setShopCat(cat);
    setView({
      name: 'home'
    });
    setTimeout(() => {
      const el = document.getElementById('shop');
      el && window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }, 60);
  };
  const addToCart = (p, n = 1) => {
    setItems(prev => {
      const found = prev.find(i => i.id === p.id);
      if (found) return prev.map(i => i.id === p.id ? {
        ...i,
        qty: Math.min(10, i.qty + n)
      } : i);
      return [...prev, {
        id: p.id,
        brand: p.brand,
        name: p.name,
        price: p.price,
        accent: p.accent,
        image: p.image,
        qty: n
      }];
    });
    setToast({
      brand: p.brand,
      name: p.name,
      image: p.image
    });
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3000);
  };
  const setQty = (id, q) => setItems(prev => prev.map(i => i.id === id ? {
    ...i,
    qty: q
  } : i));
  const removeItem = id => setItems(prev => prev.filter(i => i.id !== id));
  const cartCount = items.reduce((s, i) => s + i.qty, 0);
  const WHATSAPP = '61400000000'; // ← replace with your real WhatsApp number
  const waHref = 'https://wa.me/' + WHATSAPP.replace(/[^0-9]/g, '');
  const openProduct = p => go({
    name: 'product',
    product: p
  });
  const goCheckout = () => {
    setCartOpen(false);
    go({
      name: 'checkout'
    });
  };
  const placeOrder = total => {
    const number = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    // Live: hand off to Zap Pay (redirects out, returns to this page).
    if (window.ZapPay && window.ZapPay.isLive()) {
      sessionStorage.setItem('zap_total', String(total));
      window.ZapPay.startPayment({
        amountAud: total,
        orderId: number
      });
      return;
    }
    // Reserved/simulated: keep the prototype flow working until keys are added.
    setItems([]);
    go({
      name: 'confirmation',
      order: {
        number,
        total
      }
    });
  };
  const related = p => products.filter(x => x.id !== p.id && x.style === p.style).concat(products.filter(x => x.id !== p.id && x.style !== p.style)).slice(0, 4);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(AnnouncementBar, null), /*#__PURE__*/React.createElement(TopNav, {
    cartCount: cartCount,
    onCartClick: () => setCartOpen(true),
    onHome: () => go({
      name: 'home'
    }),
    onCategory: cat => goShop(cat),
    products: products,
    onOpenProduct: openProduct
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, view.name === 'home' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroBanner, {
    onShop: () => goShop()
  }), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(TrustStrip, null)), /*#__PURE__*/React.createElement("div", {
    id: "shop"
  }, /*#__PURE__*/React.createElement(ProductGrid, {
    onAdd: addToCart,
    onOpen: openProduct,
    cat: shopCat,
    onCat: setShopCat
  })), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(BrandStory, {
    onShop: () => goShop()
  })), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(CategoryShowcase, {
    onPick: cat => goShop(cat)
  })), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Reviews, null)), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(PromoBanners, {
    onPick: cat => goShop(cat)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 80
    }
  })), view.name === 'product' && /*#__PURE__*/React.createElement(ProductDetail, {
    product: view.product,
    related: related(view.product),
    onBack: () => go({
      name: 'home'
    }),
    onAdd: addToCart,
    onOpen: openProduct
  }), view.name === 'checkout' && /*#__PURE__*/React.createElement(Checkout, {
    items: items,
    payError: view.payError,
    onBack: () => go({
      name: 'home'
    }),
    onPlace: placeOrder
  }), view.name === 'confirmation' && /*#__PURE__*/React.createElement(Confirmation, {
    order: view.order,
    onHome: () => go({
      name: 'home'
    })
  })), /*#__PURE__*/React.createElement(Footer, {
    onShop: cat => goShop(cat)
  }), /*#__PURE__*/React.createElement(CartDrawer, {
    open: cartOpen,
    items: items,
    onClose: () => setCartOpen(false),
    onQty: setQty,
    onRemove: removeItem,
    onCheckout: goCheckout
  }), /*#__PURE__*/React.createElement("div", {
    "aria-live": "polite",
    style: {
      position: 'fixed',
      left: '50%',
      bottom: toast ? 24 : -120,
      transform: 'translateX(-50%)',
      zIndex: 80,
      transition: 'bottom 0.4s var(--ease-out)',
      pointerEvents: toast ? 'auto' : 'none',
      maxWidth: 'calc(100vw - 32px)'
    }
  }, toast && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 14px 12px 12px',
      background: 'var(--surface-raised)',
      border: '1px solid var(--line-gold)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 46,
      flex: 'none',
      borderRadius: 'var(--radius-xs)',
      overflow: 'hidden',
      background: 'var(--ink-850)',
      border: '1px solid var(--border)'
    }
  }, toast.image && /*#__PURE__*/React.createElement("img", {
    src: toast.image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--in-stock)'
    }
  }, "Added to cart"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--text-strong)',
      marginTop: 2
    }
  }, toast.brand, " ", toast.name)), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setToast(null);
      setCartOpen(true);
    },
    style: {
      marginLeft: 6,
      padding: '8px 14px',
      background: 'var(--gold-400)',
      color: 'var(--text-on-gold)',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      fontFamily: 'var(--font-label)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, "View cart"))), /*#__PURE__*/React.createElement("a", {
    href: waHref,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Chat on WhatsApp",
    title: "Chat on WhatsApp",
    style: {
      position: 'fixed',
      right: 22,
      bottom: 22,
      zIndex: 50,
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: '#25D366',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 8px 24px rgba(0,0,0,0.45)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    n: "message-circle",
    s: 26,
    color: "#08210F"
  })));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/CartDrawer.jsx
try { (() => {
/* CartDrawer — slide-over cart with line items, quantity steppers, subtotal, checkout. */
function CartDrawer({
  open,
  items,
  onClose,
  onQty,
  onRemove,
  onCheckout
}) {
  const {
    Button,
    QuantityStepper,
    IconButton
  } = window.EmberTobaccoCoDesignSystem_3a8c24;
  const Ic = window.Icon;
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      background: 'var(--surface-overlay)',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity var(--dur) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: 70,
      width: 'min(420px, 100%)',
      background: 'var(--bg-page)',
      borderLeft: '1px solid var(--line-gold)',
      boxShadow: 'var(--shadow-overlay)',
      transform: open ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform var(--dur-slow) var(--ease-out)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 24px',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 500,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Your cart ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      color: 'var(--text-faint)'
    }
  }, "(", count, ")")), /*#__PURE__*/React.createElement(IconButton, {
    ariaLabel: "Close cart",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "x",
    s: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 24px'
    }
  }, items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '64px 0',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "shopping-bag",
    s: 30
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      marginTop: 14
    }
  }, "Your cart is empty.")) : items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.id,
    style: {
      display: 'flex',
      gap: 14,
      padding: '18px 0',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 64,
      flex: 'none',
      borderRadius: 'var(--radius-xs)',
      overflow: 'hidden',
      background: 'linear-gradient(160deg, var(--ink-600), var(--ink-850))',
      border: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: i.image ? 0 : 6
    }
  }, i.image ? /*#__PURE__*/React.createElement("img", {
    src: i.image,
    alt: i.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 2.5,
      background: i.accent,
      borderRadius: 2
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      margin: '0 0 3px'
    }
  }, i.brand), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, i.name)), /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemove(i.id),
    "aria-label": "Remove",
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-faint)',
      cursor: 'pointer',
      padding: 2,
      height: 'fit-content'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "trash-2",
    s: 15
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    size: "sm",
    value: i.qty,
    min: 1,
    max: 10,
    onChange: q => onQty(i.id, q)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--gold-300)'
    }
  }, "$", (i.price * i.qty).toFixed(2))))))), /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '20px 24px',
      borderTop: '1px solid var(--line)',
      background: 'var(--surface-inset)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 12,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Subtotal"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "$", subtotal.toFixed(2))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      color: 'var(--text-faint)',
      margin: '0 0 16px'
    }
  }, "{{CART_NOTE}}"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    disabled: items.length === 0,
    onClick: onCheckout
  }, "Proceed to checkout"))));
}
window.CartDrawer = CartDrawer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Checkout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Checkout — contact + shipping + payment form with a sticky order summary. */
function Checkout({
  items,
  onBack,
  onPlace,
  payError
}) {
  const {
    Button,
    Input
  } = window.EmberTobaccoCoDesignSystem_3a8c24;
  const Icon = window.Icon;
  const isMobile = window.useIsMobile();
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = items.length ? 12.95 : 0;
  const total = subtotal + shipping;

  // —— Form state + validation ——
  const [form, setForm] = React.useState({
    email: '',
    phone: '',
    name: '',
    street: '',
    suburb: '',
    state: '',
    postcode: '',
    card: '',
    expiry: '',
    cvc: ''
  });
  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState({});
  const digits = s => (s || '').replace(/[^0-9]/g, '');
  const validators = {
    email: v => !v.trim() ? 'Email is required' : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Enter a valid email',
    phone: v => !v.trim() ? 'Phone is required' : digits(v).length >= 8 && digits(v).length <= 12 ? '' : 'Enter a valid phone number',
    name: v => v.trim().length >= 2 ? '' : 'Full name is required',
    street: v => v.trim().length >= 4 ? '' : 'Street address is required',
    suburb: v => v.trim() ? '' : 'Required',
    state: v => v.trim() ? '' : 'Required',
    postcode: v => /^\d{4}$/.test(v.trim()) ? '' : '4 digits',
    card: v => digits(v).length >= 15 && digits(v).length <= 16 ? '' : 'Enter a valid card number',
    expiry: v => /^(0[1-9]|1[0-2])\s*\/\s*\d{2}$/.test(v.trim()) ? '' : 'MM / YY',
    cvc: v => /^\d{3,4}$/.test(v.trim()) ? '' : '3–4 digits'
  };
  const fmt = {
    card: v => digits(v).slice(0, 16).replace(/(.{4})/g, '$1 ').trim(),
    expiry: v => {
      const d = digits(v).slice(0, 4);
      return d.length >= 3 ? d.slice(0, 2) + ' / ' + d.slice(2) : d;
    },
    cvc: v => digits(v).slice(0, 4),
    postcode: v => digits(v).slice(0, 4)
  };
  const onField = key => e => {
    let v = e.target.value;
    if (fmt[key]) v = fmt[key](v);
    setForm(f => ({
      ...f,
      [key]: v
    }));
    if (touched[key]) setErrors(er => ({
      ...er,
      [key]: validators[key](v)
    }));
  };
  const onBlurField = key => () => {
    setTouched(t => ({
      ...t,
      [key]: true
    }));
    setErrors(er => ({
      ...er,
      [key]: validators[key](form[key])
    }));
  };
  const fieldProps = key => ({
    value: form[key],
    onChange: onField(key),
    onBlur: onBlurField(key),
    error: touched[key] ? errors[key] : ''
  });
  const submit = e => {
    e.preventDefault();
    const next = {};
    Object.keys(validators).forEach(k => {
      const msg = validators[k](form[k]);
      if (msg) next[k] = msg;
    });
    setErrors(next);
    setTouched(Object.keys(validators).reduce((a, k) => (a[k] = true, a), {}));
    if (Object.keys(next).length === 0) {
      onPlace(total);
    } else {
      const first = document.querySelector('[data-err="1"]');
      first && first.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };
  const Field = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, children);
  const Section = ({
    step,
    title,
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      border: '1px solid var(--line-gold)',
      color: 'var(--gold-300)',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, step), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 500,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title)), children);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '28px var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      padding: '8px 0',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "arrow-left",
    s: 16
  }), " Continue shopping"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(28px, 3.4vw, 40px)',
      fontWeight: 500,
      color: 'var(--text-strong)',
      margin: '0 0 28px',
      letterSpacing: '-0.015em'
    }
  }, "Checkout"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1.4fr) minmax(0, 1fr)',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement(Section, {
    step: "1",
    title: "Contact"
  }, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Input, _extends({
    label: "Email",
    type: "email",
    placeholder: "you@example.com"
  }, fieldProps('email')))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Input, _extends({
    label: "Phone",
    type: "tel",
    placeholder: "04xx xxx xxx"
  }, fieldProps('phone'))))), /*#__PURE__*/React.createElement(Section, {
    step: "2",
    title: "Shipping address"
  }, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Input, _extends({
    label: "Full name",
    placeholder: "Jordan Bishop"
  }, fieldProps('name')))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Input, _extends({
    label: "Street address",
    placeholder: "12 Flinders Lane"
  }, fieldProps('street')))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Input, _extends({
    label: "Suburb",
    placeholder: "Melbourne"
  }, fieldProps('suburb'))), /*#__PURE__*/React.createElement(Input, _extends({
    label: "State",
    placeholder: "VIC"
  }, fieldProps('state'))), /*#__PURE__*/React.createElement(Input, _extends({
    label: "Postcode",
    placeholder: "3000",
    inputMode: "numeric"
  }, fieldProps('postcode'))))), /*#__PURE__*/React.createElement(Section, {
    step: "3",
    title: "Payment"
  }, payError && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 14px',
      marginBottom: 16,
      border: '1px solid rgba(208,106,90,0.4)',
      background: 'rgba(166,59,43,0.12)',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "alert-circle",
    s: 16,
    color: "var(--red-300)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--red-300)'
    }
  }, "Payment was cancelled or failed. Please try again.")), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Input, _extends({
    label: "Card number",
    placeholder: "1234 5678 9012 3456",
    inputMode: "numeric",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "credit-card",
      s: 16
    })
  }, fieldProps('card')))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, _extends({
    label: "Expiry",
    placeholder: "MM / YY",
    inputMode: "numeric"
  }, fieldProps('expiry'))), /*#__PURE__*/React.createElement(Input, _extends({
    label: "CVC",
    placeholder: "123",
    inputMode: "numeric"
  }, fieldProps('cvc')))), /*#__PURE__*/React.createElement("p", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-faint)',
      margin: '12px 0 0'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "lock",
    s: 13
  }), " Secured by Zap Pay \xB7 you\u2019ll confirm payment on the next step")), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    fullWidth: true,
    disabled: items.length === 0
  }, "Place order \xB7 $", total.toFixed(2))), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: isMobile ? 'static' : 'sticky',
      top: 96,
      order: isMobile ? -1 : 0,
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-card)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 500,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Order summary")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 22px',
      maxHeight: 280,
      overflowY: 'auto'
    }
  }, items.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-faint)',
      padding: '24px 0'
    }
  }, "Your cart is empty.") : items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.id,
    style: {
      display: 'flex',
      gap: 12,
      padding: '14px 0',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 50,
      flex: 'none',
      borderRadius: 'var(--radius-xs)',
      overflow: 'hidden',
      background: 'linear-gradient(160deg, var(--ink-600), var(--ink-850))',
      border: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: i.image ? 0 : 5
    }
  }, i.image ? /*#__PURE__*/React.createElement("img", {
    src: i.image,
    alt: i.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 2.5,
      background: i.accent,
      borderRadius: 2
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--text-body)',
      margin: 0
    }
  }, i.brand, " ", i.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: 'var(--text-faint)',
      margin: '3px 0 0'
    }
  }, "Qty ", i.qty)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--gold-300)',
      flexShrink: 0
    }
  }, "$", (i.price * i.qty).toFixed(2))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 22px',
      background: 'var(--surface-inset)'
    }
  }, [['Subtotal', subtotal], ['Shipping', shipping]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13.5,
      color: 'var(--text-body)'
    }
  }, "$", v.toFixed(2)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      paddingTop: 12,
      marginTop: 4,
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 12,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "$", total.toFixed(2))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--text-faint)',
      margin: '12px 0 0'
    }
  }, "{{CHECKOUT_NOTE}}")))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 90
    }
  }));
}
window.Checkout = Checkout;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Checkout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Confirmation.jsx
try { (() => {
/* Confirmation — order placed screen. */
function Confirmation({
  order,
  onHome
}) {
  const {
    Button
  } = window.EmberTobaccoCoDesignSystem_3a8c24;
  const Icon = window.Icon;
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 620,
      margin: '0 auto',
      padding: '80px var(--gutter) 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      margin: '0 auto 24px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--accent-soft)',
      border: '1px solid var(--line-gold)',
      color: 'var(--gold-300)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "check",
    s: 30
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      margin: '0 0 14px'
    }
  }, "Order confirmed"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(30px, 4vw, 46px)',
      fontWeight: 500,
      color: 'var(--text-strong)',
      margin: '0 0 16px',
      lineHeight: 1.1,
      letterSpacing: '-0.015em'
    }
  }, "Thank you for your order"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--text-muted)',
      lineHeight: 1.6,
      margin: '0 0 32px'
    }
  }, "{{CONFIRMATION_BODY}}"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 40,
      padding: '20px 32px',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-card)',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      margin: '0 0 6px'
    }
  }, "Order number"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, order.number)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '1px solid var(--line)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      margin: '0 0 6px'
    }
  }, "Total paid"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--gold-300)',
      margin: 0
    }
  }, "$", order.total.toFixed(2)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onHome
  }, "Continue shopping")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 90
    }
  }));
}
window.Confirmation = Confirmation;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Confirmation.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Footer.jsx
try { (() => {
/* Footer — contact (WhatsApp + email) and working shop links. */
function Footer({
  onShop,
  whatsapp = '61400000000',
  email = '{{COMPANY_EMAIL}}'
}) {
  const Ic = window.Icon;
  const waHref = 'https://wa.me/' + String(whatsapp).replace(/[^0-9]/g, '');
  const waDisplay = '+' + String(whatsapp).replace(/[^0-9]/g, '');
  const shopLinks = [['All', 'all'], ['{{CATEGORY_1}}', 'cat-1'], ['{{CATEGORY_2}}', 'cat-2']];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--line)',
      background: 'var(--bg-void)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '48px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 40,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 64 64",
    width: "26",
    height: "26"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M32 8 L52 32 L32 56 L12 32 Z",
    fill: "none",
    stroke: "#CDA85B",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "32",
    r: "5",
    fill: "#A63B2B"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "32",
    r: "2.2",
    fill: "#E3C77E"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '0.05em',
      color: 'var(--text-strong)'
    }
  }, "{{COMPANY_NAME}}")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)',
      lineHeight: 1.6,
      margin: 0
    }
  }, "{{FOOTER_TAGLINE}}"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: waHref,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "WhatsApp",
    style: {
      color: 'var(--text-muted)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "message-circle",
    s: 18
  })), /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email,
    "aria-label": "Email",
    style: {
      color: 'var(--text-muted)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "mail",
    s: 18
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      margin: '0 0 14px'
    }
  }, "Shop"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, shopLinks.map(([label, cat]) => /*#__PURE__*/React.createElement("li", {
    key: label
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onShop && onShop(cat),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--text-muted)',
      transition: 'color var(--dur) var(--ease-out)'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--text-strong)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-muted)'
  }, label))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      margin: '0 0 14px'
    }
  }, "Support"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: waHref,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--text-muted)',
      textDecoration: 'none'
    }
  }, "Delivery")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: waHref,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--text-muted)',
      textDecoration: 'none'
    }
  }, "Tracking")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: waHref,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--text-muted)',
      textDecoration: 'none'
    }
  }, "Returns")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: waHref,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--text-muted)',
      textDecoration: 'none'
    }
  }, "Contact")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      paddingTop: 20,
      borderTop: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-faint)'
    }
  }, "\xA9 2026 {{COMPANY_NAME}}"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-faint)'
    }
  }, "{{FOOTER_NOTE}}"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ProductDetail.jsx
try { (() => {
/* ProductDetail — full product view: large image, pricing, quantity, details, related. */
function ProductDetail({
  product,
  related,
  onBack,
  onAdd,
  onOpen
}) {
  const {
    Button,
    Badge,
    QuantityStepper,
    ProductCard
  } = window.EmberTobaccoCoDesignSystem_3a8c24;
  const Icon = window.Icon;
  const isMobile = window.useIsMobile();
  const [qty, setQty] = React.useState(1);
  const p = product;
  const soldOut = p.stock === 'out';
  const stockMap = {
    instock: ['instock', 'In stock'],
    low: ['low', 'Low stock'],
    out: ['out', 'Out of stock']
  };
  const [tone, label] = stockMap[p.stock] || stockMap.instock;
  const desc = `${p.brand} ${p.name} — {{PRODUCT_DESCRIPTION}}`;
  const details = [['Brand', p.brand], ['Format', p.unit.replace(/^per /, '').replace(/^/, c => c.toUpperCase())], ['Category', '{{CATEGORY}}'], ['SKU', p.id.toUpperCase()]];
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '28px var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      padding: '8px 0',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "arrow-left",
    s: 16
  }), " Back to shop"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1fr) minmax(0, 1fr)',
      gap: isMobile ? 26 : 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1 / 1',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--line)',
      background: 'radial-gradient(120% 120% at 50% 0%, var(--ink-700), var(--ink-900))'
    }
  }, p.flag && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold",
    variant: "solid"
  }, p.flag)), p.discount && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "ember",
    variant: "solid"
  }, p.discount)), p.image ? /*#__PURE__*/React.createElement("img", {
    src: p.image,
    alt: p.brand + ' ' + p.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: p.fit || 'cover',
      padding: p.fit === 'contain' ? '3%' : 0,
      boxSizing: 'border-box'
    }
  }) : /*#__PURE__*/React.createElement("image-slot", {
    id: `detail-${p.id}`,
    style: {
      width: '100%',
      height: '100%'
    },
    shape: "rect",
    fit: "cover",
    placeholder: "Drop product image"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)'
    }
  }, p.brand), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(30px, 3.6vw, 44px)',
      fontWeight: 500,
      color: 'var(--text-strong)',
      margin: '8px 0 12px',
      lineHeight: 1.08,
      letterSpacing: '-0.015em'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 18
    }
  }, p.rating != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--gold-400)',
      letterSpacing: '0.08em'
    }
  }, '\u2605'.repeat(Math.round(p.rating)) + '\u2606'.repeat(5 - Math.round(p.rating))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-faint)'
    }
  }, p.rating.toFixed(1), " (", p.ratingCount, ")")), /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 34,
      fontWeight: 600,
      color: 'var(--gold-300)'
    }
  }, "$", p.price.toFixed(2)), p.oldPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 18,
      color: 'var(--text-faint)',
      textDecoration: 'line-through'
    }
  }, "$", p.oldPrice.toFixed(2)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-faint)'
    }
  }, p.unit)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      color: 'var(--text-body)',
      lineHeight: 1.7,
      margin: '0 0 26px',
      maxWidth: 460
    }
  }, desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    min: 1,
    max: 10,
    onChange: setQty
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    disabled: soldOut,
    onClick: () => onAdd(p, qty),
    style: {
      flex: 1
    }
  }, soldOut ? 'Sold out' : `Add ${qty} to cart`)), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, details.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '13px 18px',
      borderTop: i ? '1px solid var(--line)' : 'none',
      background: i % 2 ? 'transparent' : 'var(--surface-inset)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, v)))))), related && related.length > 0 && /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 0 0'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "You may also like",
    title: "{{RELATED_TITLE}}"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, minmax(0, 1fr))' : 'repeat(4, minmax(0, 1fr))',
      gap: isMobile ? 12 : 20
    }
  }, related.map(r => /*#__PURE__*/React.createElement(ProductCard, {
    key: r.id,
    brand: r.brand,
    name: r.name,
    price: '$' + r.price.toFixed(2),
    oldPrice: r.oldPrice ? '$' + r.oldPrice.toFixed(2) : undefined,
    discount: r.discount,
    image: r.image,
    rating: r.rating,
    ratingCount: r.ratingCount,
    unit: r.unit,
    stock: r.stock,
    flag: r.flag,
    accent: r.accent,
    fit: r.fit,
    onAdd: () => onAdd(r, 1),
    onOpen: () => onOpen(r)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 90
    }
  }));
}
window.ProductDetail = ProductDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ProductDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ProductGrid.jsx
try { (() => {
/* ProductGrid — hero strip, category filter tags, responsive ProductCard grid. */
function ProductGrid({
  onAdd,
  onOpen,
  cat,
  onCat
}) {
  const {
    Tag,
    ProductCard,
    Badge
  } = window.EmberTobaccoCoDesignSystem_3a8c24;
  const isMobile = window.useIsMobile();
  const products = window.PRODUCTS || [];
  const cats = [{
    id: 'all',
    label: 'All'
  }, {
    id: 'cat-1',
    label: '{{CATEGORY_1}}'
  }, {
    id: 'cat-2',
    label: '{{CATEGORY_2}}'
  }];
  const [internalCat, setInternalCat] = React.useState('all');
  const curCat = cat !== undefined ? cat : internalCat;
  const setCat = onCat || setInternalCat;
  const shown = curCat === 'all' ? products : products.filter(p => p.style === curCat);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "{{SHOP_EYEBROW}}",
    title: "{{SHOP_TITLE}}"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 14,
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c.id,
    selectable: true,
    selected: curCat === c.id,
    onClick: () => setCat(c.id)
  }, c.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-faint)'
    }
  }, shown.length, " products")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, minmax(0, 1fr))' : 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: isMobile ? 12 : 20
    }
  }, shown.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.id,
    delay: i % 8 * 55,
    y: 18
  }, /*#__PURE__*/React.createElement(ProductCard, {
    brand: p.brand,
    name: p.name,
    price: '$' + p.price.toFixed(2),
    oldPrice: p.oldPrice ? '$' + p.oldPrice.toFixed(2) : undefined,
    discount: p.discount,
    rating: p.rating,
    ratingCount: p.ratingCount,
    image: p.image,
    fit: p.fit,
    unit: p.unit,
    stock: p.stock,
    flag: p.flag,
    accent: p.accent,
    onAdd: () => onAdd(p),
    onOpen: () => onOpen && onOpen(p)
  })))));
}
window.ProductGrid = ProductGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ProductGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Reveal.jsx
try { (() => {
/* Reveal — scroll-into-view wrapper. Fades + rises its children once when
   they enter the viewport. Respects prefers-reduced-motion (shows instantly). */
function Reveal({
  children,
  y = 26,
  delay = 0
}) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window) || !el) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : `translateY(${y}px)`,
      transition: `opacity 0.7s cubic-bezier(0.22,0.61,0.36,1) ${delay}ms, transform 0.7s cubic-bezier(0.22,0.61,0.36,1) ${delay}ms`,
      willChange: 'opacity, transform'
    }
  }, children);
}
window.Reveal = Reveal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Reveal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Sections.jsx
try { (() => {
/* Extra storefront sections to add rhythm: announcement bar, brand story, reviews. */

function AnnouncementBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(90deg, var(--ember-600), var(--ember-500))',
      borderBottom: '1px solid rgba(0,0,0,0.3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '9px var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 11.5,
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--cream-50)'
    }
  }, "{{ANNOUNCEMENT}}")));
}
window.AnnouncementBar = AnnouncementBar;
function BrandStory({
  onShop
}) {
  const {
    Button
  } = window.EmberTobaccoCoDesignSystem_3a8c24;
  const Icon = window.Icon;
  const isMobile = window.useIsMobile();
  const points = [['leaf', '{{STORY_POINT_1}}'], ['snowflake', '{{STORY_POINT_2}}'], ['package-check', '{{STORY_POINT_3}}']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-850)',
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)',
      marginTop: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: isMobile ? '0' : '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1fr) minmax(0, 1.1fr)',
      gap: isMobile ? 0 : 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      alignSelf: 'stretch',
      minHeight: isMobile ? 280 : 460,
      borderRight: isMobile ? 'none' : '1px solid var(--line)',
      borderBottom: isMobile ? '1px solid var(--line)' : 'none',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "",
    alt: "{{STORY_IMAGE}}",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: isMobile ? '40px var(--gutter)' : '64px 0'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      margin: '0 0 14px'
    }
  }, "{{STORY_EYEBROW}}"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(30px, 3.8vw, 46px)',
      fontWeight: 500,
      color: 'var(--text-strong)',
      margin: '0 0 18px',
      lineHeight: 1.08,
      letterSpacing: '-0.015em'
    }
  }, "{{STORY_TITLE}}"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16.5,
      color: 'var(--text-muted)',
      lineHeight: 1.7,
      margin: '0 0 28px',
      maxWidth: 460
    }
  }, "{{STORY_BODY}}"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginBottom: 32
    }
  }, points.map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      flex: 'none',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--line-gold)',
      background: 'var(--accent-soft)',
      color: 'var(--gold-300)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: ic,
    s: 17
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, t)))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onShop
  }, "{{CTA_PRIMARY}}")))));
}
window.BrandStory = BrandStory;
function Reviews() {
  const isMobile = window.useIsMobile();
  const reviews = [{
    name: '{{REVIEW_1_NAME}}',
    place: '{{REVIEW_1_PLACE}}',
    text: '{{REVIEW_1_TEXT}}'
  }, {
    name: '{{REVIEW_2_NAME}}',
    place: '{{REVIEW_2_PLACE}}',
    text: '{{REVIEW_2_TEXT}}'
  }, {
    name: '{{REVIEW_3_NAME}}',
    place: '{{REVIEW_3_PLACE}}',
    text: '{{REVIEW_3_TEXT}}'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "{{REVIEWS_EYEBROW}}",
    title: "{{REVIEWS_TITLE}}"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0, 1fr))',
      gap: 18
    }
  }, reviews.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.name,
    className: "lift",
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-md)',
      padding: '24px 26px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--gold-400)',
      letterSpacing: '0.1em'
    }
  }, '\u2605\u2605\u2605\u2605\u2605'), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 500,
      color: 'var(--text-strong)',
      lineHeight: 1.45,
      margin: '14px 0 20px'
    }
  }, "\u201C", r.text, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, r.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 10.5,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, r.place))))));
}
window.Reviews = Reviews;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Showcase.jsx
try { (() => {
/* Showcase — image-driven storefront sections (hero, trust strip, category tiles, promo banners).
   Image areas are <image-slot> drop targets: drag your own product/banner photos in. */

function HeroBanner({
  onShop
}) {
  const {
    Button,
    Badge
  } = window.EmberTobaccoCoDesignSystem_3a8c24;
  const isMobile = window.useIsMobile();
  const [reveal, setReveal] = React.useState(false);
  React.useEffect(() => {
    const id = requestAnimationFrame(() => setReveal(true));
    return () => cancelAnimationFrame(id);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '36px var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-reveal": reveal ? '' : undefined,
    style: {
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-lg)',
      minHeight: isMobile ? 420 : 480
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ember-zoom",
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "ember-hero",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    },
    shape: "rect",
    fit: "cover",
    src: "",
    placeholder: "{{HERO_IMAGE}}"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ember-fade",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: isMobile ? 'linear-gradient(0deg, rgba(10,9,8,0.95) 8%, rgba(10,9,8,0.6) 45%, rgba(10,9,8,0.25) 100%)' : 'linear-gradient(90deg, rgba(10,9,8,0.94) 0%, rgba(10,9,8,0.78) 38%, rgba(10,9,8,0.32) 70%, rgba(10,9,8,0.1) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 560,
      minHeight: isMobile ? 420 : 480,
      padding: isMobile ? '32px 26px' : '56px 52px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: isMobile ? 'flex-end' : 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ember-rise",
    style: {
      display: 'inline-block',
      animationDelay: '0.15s'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold"
  }, "{{HERO_BADGE}}")), /*#__PURE__*/React.createElement("h1", {
    className: "ember-rise",
    style: {
      animationDelay: '0.28s',
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(30px, 7vw, 58px)',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--cream-50)',
      lineHeight: 1.04,
      margin: '18px 0 16px'
    }
  }, "{{HERO_HEADLINE}}"), /*#__PURE__*/React.createElement("p", {
    className: "ember-rise",
    style: {
      animationDelay: '0.42s',
      fontFamily: 'var(--font-body)',
      fontSize: isMobile ? 15 : 17,
      color: 'var(--cream-300)',
      maxWidth: 440,
      lineHeight: 1.6,
      margin: '0 0 28px'
    }
  }, "{{HERO_SUBTITLE}}"), /*#__PURE__*/React.createElement("div", {
    className: "ember-rise",
    style: {
      animationDelay: '0.54s',
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: isMobile ? 'md' : 'lg',
    onClick: onShop
  }, "{{CTA_PRIMARY}}"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: isMobile ? 'md' : 'lg',
    onClick: onShop
  }, "{{CTA_SECONDARY}}")))));
}
window.HeroBanner = HeroBanner;
function TrustStrip() {
  const isMobile = window.useIsMobile();
  const items = [['shield-check', '{{TRUST_1}}'], ['truck', '{{TRUST_2}}'], ['badge-check', '{{TRUST_3}}'], ['refresh-cw', '{{TRUST_4}}']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '20px var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
      gap: 0,
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--surface-card)'
    }
  }, items.map(([icon, label], i) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: isMobile ? '14px 16px' : '18px 22px',
      borderLeft: (isMobile ? i % 2 : i) ? '1px solid var(--line)' : 'none',
      borderTop: isMobile && i >= 2 ? '1px solid var(--line)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-400)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: icon,
    s: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: isMobile ? 12.5 : 13.5,
      color: 'var(--text-body)',
      lineHeight: 1.3
    }
  }, label)))));
}
window.TrustStrip = TrustStrip;
function SectionHead({
  eyebrow,
  title,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      margin: '0 0 22px'
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      margin: '0 0 8px'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(26px, 3vw, 36px)',
      fontWeight: 500,
      color: 'var(--text-strong)',
      margin: 0,
      letterSpacing: '-0.01em'
    }
  }, title)), action);
}
window.SectionHead = SectionHead;
function CategoryShowcase({
  onPick
}) {
  const cats = [{
    id: 'cat-tile-1',
    name: '{{CATEGORY_TILE_1_NAME}}',
    note: '{{CATEGORY_1}}',
    pick: 'cat-1',
    img: ""
  }, {
    id: 'cat-tile-2',
    name: '{{CATEGORY_TILE_2_NAME}}',
    note: '{{CATEGORY_1}}',
    pick: 'cat-1',
    img: ""
  }, {
    id: 'cat-tile-3',
    name: '{{CATEGORY_TILE_3_NAME}}',
    note: '{{CATEGORY_2}}',
    pick: 'cat-2',
    img: ""
  }, {
    id: 'cat-tile-4',
    name: '{{CATEGORY_TILE_4_NAME}}',
    note: '{{CATEGORY_2}}',
    pick: 'cat-2',
    img: ""
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "{{SHOWCASE_EYEBROW}}",
    title: "{{SHOWCASE_TITLE}}"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: 14
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("a", {
    key: c.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onPick && onPick(c.pick);
    },
    style: {
      position: 'relative',
      display: 'block',
      aspectRatio: '3 / 4',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      border: '1px solid var(--line)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: c.id,
    style: {
      width: '100%',
      height: '100%'
    },
    shape: "rect",
    fit: "cover",
    src: c.img,
    placeholder: `Drop ${c.name} image`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'linear-gradient(180deg, rgba(10,9,8,0) 38%, rgba(10,9,8,0.82) 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--gold-300)'
    }
  }, c.note), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 500,
      color: 'var(--cream-50)'
    }
  }, c.name), /*#__PURE__*/React.createElement(Icon, {
    n: "arrow-right",
    s: 18,
    color: "var(--cream-50)"
  })))))));
}
window.CategoryShowcase = CategoryShowcase;
function PromoBanners({
  onPick
}) {
  const {
    Button
  } = window.EmberTobaccoCoDesignSystem_3a8c24;
  const isMobile = window.useIsMobile();
  const banners = [{
    id: 'promo-1',
    eyebrow: '{{PROMO_1_EYEBROW}}',
    title: '{{PROMO_1_TITLE}}',
    cta: '{{PROMO_1_CTA}}',
    cat: 'cat-2'
  }, {
    id: 'promo-2',
    eyebrow: '{{PROMO_2_EYEBROW}}',
    title: '{{PROMO_2_TITLE}}',
    cta: '{{PROMO_2_CTA}}',
    cat: 'cat-1'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: 18
    }
  }, banners.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.id,
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--line)',
      minHeight: 240
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: b.id,
    style: {
      width: '100%',
      height: '100%',
      minHeight: 240
    },
    shape: "rect",
    fit: "cover",
    placeholder: "{{BANNER_IMAGE}}"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'linear-gradient(100deg, rgba(10,9,8,0.86) 30%, rgba(10,9,8,0.25) 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: isMobile ? '0 26px' : '0 40px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--gold-300)',
      margin: '0 0 10px'
    }
  }, b.eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 500,
      color: 'var(--cream-50)',
      margin: '0 0 20px',
      maxWidth: 280,
      lineHeight: 1.15
    }
  }, b.title), /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "md",
    onClick: () => onPick && onPick(b.cat)
  }, b.cta)))))));
}
window.PromoBanners = PromoBanners;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Showcase.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/TopNav.jsx
try { (() => {
/* TopNav — sticky storefront header with working search + account menu. */
function TopNav({
  cartCount,
  onCartClick,
  onHome,
  onCategory,
  products = [],
  onOpenProduct
}) {
  const {
    IconButton,
    Badge
  } = window.EmberTobaccoCoDesignSystem_3a8c24;
  const Ic = window.Icon;
  const isMobile = window.useIsMobile();
  const links = [['All', 'all'], ['{{CATEGORY_1}}', 'cat-1'], ['{{CATEGORY_2}}', 'cat-2']];
  const [active, setActive] = React.useState('All');
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [acctOpen, setAcctOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const [toast, setToast] = React.useState(null);
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    if (searchOpen && inputRef.current) inputRef.current.focus();
  }, [searchOpen]);
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setAcctOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const flash = msg => {
    setToast(msg);
    setAcctOpen(false);
    setTimeout(() => setToast(null), 2200);
  };
  const q = query.trim().toLowerCase();
  const results = (q ? products.filter(p => (p.brand + ' ' + p.name + ' ' + p.cat).toLowerCase().includes(q)) : products).slice(0, 8);
  const openResult = p => {
    setSearchOpen(false);
    setQuery('');
    onOpenProduct && onOpenProduct(p);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      height: 'var(--nav-height)',
      background: 'rgba(14,12,11,0.86)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      height: '100%',
      padding: '0 var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? 14 : 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onHome,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flex: 'none',
      cursor: onHome ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 64 64",
    width: "34",
    height: "34"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M32 8 L52 32 L32 56 L12 32 Z",
    fill: "none",
    stroke: "#CDA85B",
    strokeWidth: "1.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32 18 L44 32 L32 46 L20 32 Z",
    fill: "#0E0C0B"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "32",
    r: "5",
    fill: "#A63B2B"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "32",
    r: "2.2",
    fill: "#E3C77E"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '0.05em',
      color: 'var(--text-strong)'
    }
  }, "{{COMPANY_NAME}}"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 8,
      fontWeight: 600,
      letterSpacing: '0.34em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      marginTop: 3
    }
  }, "{{COMPANY_TAGLINE}}"))), isMobile ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }) : /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 6,
      flex: 1
    }
  }, links.map(([l, cat]) => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => {
      setActive(l);
      onCategory ? onCategory(cat) : onHome && onHome();
    },
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-label)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.13em',
      textTransform: 'uppercase',
      padding: '8px 12px',
      color: active === l ? 'var(--text-strong)' : 'var(--text-muted)',
      borderBottom: active === l ? '1.5px solid var(--gold-400)' : '1.5px solid transparent',
      transition: 'color var(--dur) var(--ease-out)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flex: 'none',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    ariaLabel: "Search",
    onClick: () => {
      setSearchOpen(true);
      setAcctOpen(false);
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "search"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    ariaLabel: "Account",
    onClick: () => setAcctOpen(o => !o)
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "user"
  })), acctOpen && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: () => setAcctOpen(false),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 44
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 10px)',
      right: 0,
      zIndex: 45,
      width: 220,
      background: 'var(--surface-card)',
      border: '1px solid var(--line-strong)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Welcome"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'var(--text-faint)',
      margin: '3px 0 0'
    }
  }, "Sign in to track orders")), [['log-in', 'Sign in'], ['package', 'My orders'], ['heart', 'Wishlist'], ['map-pin', 'Track order']].map(([ic, lab]) => /*#__PURE__*/React.createElement("button", {
    key: lab,
    onClick: () => flash(lab + ' — demo'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      width: '100%',
      padding: '11px 16px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      color: 'var(--text-body)',
      fontFamily: 'var(--font-body)',
      fontSize: 14
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--accent-soft)',
    onMouseLeave: e => e.currentTarget.style.background = 'none'
  }, /*#__PURE__*/React.createElement(Ic, {
    n: ic,
    s: 16
  }), " ", lab))))), /*#__PURE__*/React.createElement(IconButton, {
    variant: "solid",
    badge: cartCount > 0 ? cartCount : null,
    ariaLabel: "Cart",
    onClick: onCartClick
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "shopping-bag"
  })))), searchOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setSearchOpen(false),
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--surface-overlay)',
      backdropFilter: 'blur(6px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'min(640px, 92vw)',
      margin: '84px auto 0',
      background: 'var(--surface-card)',
      border: '1px solid var(--line-gold)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-overlay)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '16px 20px',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "search",
    s: 18,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "Search brands, products\u2026",
    style: {
      flex: 1,
      background: 'none',
      border: 'none',
      outline: 'none',
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-body)',
      fontSize: 17
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSearchOpen(false),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-faint)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "x",
    s: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 360,
      overflowY: 'auto',
      padding: 8
    }
  }, results.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-faint)',
      textAlign: 'center',
      padding: '30px 0'
    }
  }, "No products match \u201C", query, "\u201D.") : results.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    onClick: () => openResult(p),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      width: '100%',
      padding: '10px 12px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      borderRadius: 'var(--radius-sm)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--surface-raised)',
    onMouseLeave: e => e.currentTarget.style.background = 'none'
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 42,
      flex: 'none',
      borderRadius: 'var(--radius-xs)',
      overflow: 'hidden',
      background: 'linear-gradient(160deg, var(--ink-600), var(--ink-850))',
      border: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: p.image ? 0 : 5
    }
  }, p.image ? /*#__PURE__*/React.createElement("img", {
    src: p.image,
    alt: p.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 2.5,
      background: p.accent,
      borderRadius: 2
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, p.brand), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, p.name)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--gold-300)',
      flexShrink: 0
    }
  }, "$", p.price.toFixed(2))))))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 95,
      padding: '12px 20px',
      background: 'var(--surface-raised)',
      border: '1px solid var(--line-gold)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--text-body)'
    }
  }, toast));
}
window.TopNav = TopNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/TopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/data.js
try { (() => {
/* {{COMPANY_NAME}} — sample catalogue (placeholder data). */
window.PRODUCTS = [{ id: 'product-1', brand: '{{BRAND_NAME}}', name: '{{PRODUCT_1_NAME}}', cat: 'category', style: 'cat-1', price: 0, rating: 4.7, ratingCount: 18, unit: '{{UNIT}}', stock: 'instock', accent: 'var(--blue-400)' }, { id: 'product-2', brand: '{{BRAND_NAME}}', name: '{{PRODUCT_2_NAME}}', cat: 'category', style: 'cat-1', price: 0, oldPrice: 0, discount: '{{DISCOUNT}}', rating: 4.8, ratingCount: 24, unit: '{{UNIT}}', stock: 'instock', flag: '{{FLAG}}', accent: 'var(--ember-500)' }, { id: 'product-3', brand: '{{BRAND_NAME}}', name: '{{PRODUCT_3_NAME}}', cat: 'category', style: 'cat-1', price: 0, rating: 4.6, ratingCount: 12, unit: '{{UNIT}}', stock: 'low', accent: 'var(--gold-500)' }, { id: 'product-4', brand: '{{BRAND_NAME}}', name: '{{PRODUCT_4_NAME}}', cat: 'category', style: 'cat-2', price: 0, oldPrice: 0, discount: '{{DISCOUNT}}', rating: 4.9, ratingCount: 31, unit: '{{UNIT}}', stock: 'instock', flag: '{{FLAG}}', accent: 'var(--green-500)' }, { id: 'product-5', brand: '{{BRAND_NAME}}', name: '{{PRODUCT_5_NAME}}', cat: 'category', style: 'cat-2', price: 0, rating: 4.8, ratingCount: 27, unit: '{{UNIT}}', stock: 'instock', flag: '{{FLAG}}', accent: 'var(--blue-400)' }, { id: 'product-6', brand: '{{BRAND_NAME}}', name: '{{PRODUCT_6_NAME}}', cat: 'category', style: 'cat-1', price: 0, rating: 4.5, ratingCount: 9, unit: '{{UNIT}}', stock: 'instock', accent: 'var(--cream-400)' }, { id: 'product-7', brand: '{{BRAND_NAME}}', name: '{{PRODUCT_7_NAME}}', cat: 'category', style: 'cat-2', price: 0, oldPrice: 0, discount: '{{DISCOUNT}}', rating: 4.9, ratingCount: 21, unit: '{{UNIT}}', stock: 'instock', flag: '{{FLAG}}', accent: 'var(--blue-400)' }, { id: 'product-8', brand: '{{BRAND_NAME_2}}', name: '{{PRODUCT_8_NAME}}', cat: 'category', style: 'cat-1', price: 0, rating: 4.9, ratingCount: 17, unit: '{{UNIT}}', stock: 'instock', flag: '{{FLAG}}', accent: 'var(--gold-400)' }];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/data.js", error: String((e && e.message) || e) }); }

// ui_kits/storefront/icons.js
try { (() => {
/* Safe Lucide icon for React: React owns only an empty <span>; the <i data-lucide>
   is created imperatively inside it and swapped to <svg> by lucide — so re-renders
   never collide with reconciliation (no removeChild crashes). */
window.Icon = function Icon({
  n,
  s = 18,
  color
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', n);
    el.appendChild(i);
    if (window.lucide) window.lucide.createIcons({
      attrs: {
        width: s,
        height: s
      }
    });
  }, [n, s]);
  return React.createElement('span', {
    ref,
    style: {
      display: 'inline-flex',
      width: s,
      height: s,
      color: color || 'currentColor'
    }
  });
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/icons.js", error: String((e && e.message) || e) }); }

// ui_kits/storefront/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/storefront/payment.js
try { (() => {
/* Zap Pay — reserved payment interface (redirect gateway).
 * Prototype runs in SIMULATED mode until you go live:
 *   1) fill in `site`, `key`, and `callbackUrl`
 *   2) set `enabled: true`
 * Then "Place order" redirects to Zap Pay and the return is handled automatically.
 *
 * NOTE: step 6–7 of the guide (the server-to-server callbackUrl GET that confirms
 * amount + orderId) MUST be received and validated by a BACKEND — a static page
 * cannot receive it. Point `callbackUrl` at that backend endpoint. */
window.ZapPay = function () {
  const config = {
    enabled: false,
    // ← set true once site + key are provided
    endpoint: 'https://zap-payments.web.app',
    site: 'YOUR_SITE_ID',
    // ← from Zap Pay
    key: 'YOUR_API_KEY',
    // ← from Zap Pay
    callbackUrl: '' // ← your backend confirmation endpoint
  };

  // Build the redirect URL per the integration guide.
  function buildUrl({
    amountCents,
    orderId,
    returnUrl
  }) {
    const p = new URLSearchParams({
      site: config.site,
      key: config.key,
      amount: String(amountCents),
      // amount in cents, e.g. 2000 = $20.00
      orderId,
      returnUrl,
      callbackUrl: config.callbackUrl
    });
    return config.endpoint + '/?' + p.toString();
  }

  // Redirect the browser to Zap Pay to begin a payment.
  function startPayment({
    amountAud,
    orderId,
    returnUrl
  }) {
    const url = buildUrl({
      amountCents: Math.round(amountAud * 100),
      orderId,
      returnUrl: returnUrl || location.origin + location.pathname
    });
    window.location.href = url;
  }

  // Read the success/orderId params Zap Pay appends on return. null if not a return.
  function readReturn() {
    const q = new URLSearchParams(location.search);
    if (!q.has('success')) return null;
    return {
      success: q.get('success') === 'true',
      orderId: q.get('orderId')
    };
  }

  // Is the live integration configured + enabled?
  function isLive() {
    return config.enabled && config.site !== 'YOUR_SITE_ID' && !!config.key;
  }
  return {
    config,
    buildUrl,
    startPayment,
    readReturn,
    isLive
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/payment.js", error: String((e && e.message) || e) }); }

// ui_kits/storefront/useMedia.js
try { (() => {
/* useIsMobile — reactive viewport breakpoint hook. window.useIsMobile(bp=760). */
window.useIsMobile = function (bp) {
  bp = bp || 760;
  const get = () => typeof window !== 'undefined' && window.innerWidth <= bp;
  const [m, setM] = React.useState(get());
  React.useEffect(() => {
    const on = () => setM(get());
    on();
    // The preview iframe can settle to its final width AFTER mount without
    // firing resize/ResizeObserver — poll until the width is stable.
    let last = window.innerWidth,
      stable = 0;
    const poll = setInterval(() => {
      on();
      if (window.innerWidth === last) {
        if (++stable >= 4) clearInterval(poll);
      } else {
        last = window.innerWidth;
        stable = 0;
      }
    }, 200);
    const stop = setTimeout(() => clearInterval(poll), 4000);
    const mq = window.matchMedia ? window.matchMedia('(max-width:' + bp + 'px)') : null;
    if (mq && mq.addEventListener) mq.addEventListener('change', on);
    window.addEventListener('resize', on);
    window.addEventListener('load', on);
    return () => {
      clearInterval(poll);
      clearTimeout(stop);
      window.removeEventListener('resize', on);
      window.removeEventListener('load', on);
      if (mq && mq.removeEventListener) mq.removeEventListener('change', on);
    };
  }, []);
  return m;
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/useMedia.js", error: String((e && e.message) || e) }); }

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

})();
