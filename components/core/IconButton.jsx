import React from 'react';

/**
 * Square/circle icon-only control. Pass a Lucide (or any) icon node as children.
 */
export function IconButton({
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
  const dims = { sm: 34, md: 42, lg: 50 }[size] || 42;
  const [hover, setHover] = React.useState(false);

  const variants = {
    ghost: { background: 'transparent', color: 'var(--text-body)', border: '1px solid transparent' },
    solid: { background: 'var(--surface-raised)', color: 'var(--text-strong)', border: '1px solid var(--border)' },
    gold: { background: 'var(--gold-400)', color: 'var(--text-on-gold)', border: '1px solid var(--gold-400)' },
  };
  const hoverStyles = {
    ghost: { background: 'var(--accent-soft)', color: 'var(--text-strong)' },
    solid: { background: 'var(--ink-600)', borderColor: 'var(--border-strong)' },
    gold: { background: 'var(--gold-300)' },
  };
  const v = variants[variant] || variants.ghost;

  return (
    <button
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {children}
      {badge != null && (
        <span style={{
          position: 'absolute', top: -5, right: -5, minWidth: 18, height: 18, padding: '0 5px',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          background: 'var(--ember-500)', color: 'var(--cream-50)',
          fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600, lineHeight: 1,
          borderRadius: 'var(--radius-pill)', border: '1.5px solid var(--bg-page)',
        }}>{badge}</span>
      )}
    </button>
  );
}
