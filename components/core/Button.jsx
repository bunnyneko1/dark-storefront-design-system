import React from 'react';

/**
 * Ember primary action. Brass-filled by default; ember + ghost + outline variants.
 */
export function Button({
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
    sm: { padding: '0 14px', height: 36, font: 'var(--text-xs)', track: '0.14em' },
    md: { padding: '0 22px', height: 46, font: 'var(--text-sm)', track: '0.13em' },
    lg: { padding: '0 32px', height: 56, font: 'var(--text-base)', track: '0.12em' },
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
    userSelect: 'none',
  };

  const variants = {
    primary: {
      background: 'linear-gradient(180deg, var(--gold-300), var(--gold-400))',
      color: 'var(--text-on-gold)',
      boxShadow: 'var(--glow-gold-soft)',
    },
    ember: {
      background: 'var(--ember-500)',
      color: 'var(--text-on-ember)',
      borderColor: 'var(--ember-400)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      borderColor: 'var(--line-gold)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
    },
  };

  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = variants[variant] || variants.primary;

  const hoverStyle = !disabled && hover ? {
    primary: { background: 'linear-gradient(180deg, var(--gold-200), var(--gold-300))', boxShadow: 'var(--glow-gold)' },
    ember: { background: 'var(--ember-400)', borderColor: 'var(--ember-300)' },
    outline: { borderColor: 'var(--gold-400)', color: 'var(--gold-300)' },
    ghost: { background: 'var(--accent-soft)', color: 'var(--text-strong)' },
  }[variant] : {};

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{ ...base, ...v, ...hoverStyle, transform: press && !disabled ? 'translateY(1px)' : 'none', ...style }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
