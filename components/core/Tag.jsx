import React from 'react';

/**
 * Filter chip / category tag. Toggleable when `selectable`.
 */
export function Tag({ children, selected = false, selectable = false, onClick, style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const active = selected;
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        height: 34,
        padding: '0 16px',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--w-medium)',
        letterSpacing: '0.01em',
        color: active ? 'var(--text-on-gold)' : (hover ? 'var(--text-strong)' : 'var(--text-body)'),
        background: active ? 'var(--gold-400)' : (hover ? 'var(--surface-raised)' : 'transparent'),
        border: `1px solid ${active ? 'var(--gold-400)' : 'var(--border)'}`,
        borderRadius: 'var(--radius-pill)',
        cursor: selectable ? 'pointer' : 'default',
        transition: 'all var(--dur) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
