import React from 'react';

/**
 * Small status pill. Tones map to stock + promo states.
 */
export function Badge({ children, tone = 'neutral', variant = 'soft', style = {}, ...rest }) {
  const tones = {
    neutral: { fg: 'var(--cream-300)', bg: 'rgba(246,241,231,0.07)', bd: 'var(--line-strong)' },
    gold:    { fg: 'var(--gold-300)', bg: 'var(--accent-soft)', bd: 'var(--line-gold)' },
    ember:   { fg: 'var(--ember-300)', bg: 'rgba(166,59,43,0.14)', bd: 'rgba(166,59,43,0.4)' },
    instock: { fg: 'var(--in-stock)', bg: 'rgba(132,181,127,0.12)', bd: 'rgba(132,181,127,0.34)' },
    low:     { fg: 'var(--low-stock)', bg: 'rgba(201,162,39,0.13)', bd: 'rgba(201,162,39,0.36)' },
    out:     { fg: 'var(--out-of-stock)', bg: 'rgba(208,106,90,0.12)', bd: 'rgba(208,106,90,0.34)' },
  };
  const t = tones[tone] || tones.neutral;
  const solid = variant === 'solid';

  return (
    <span
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
