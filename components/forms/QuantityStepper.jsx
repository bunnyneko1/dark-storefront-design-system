import React from 'react';

/**
 * Quantity stepper for cart lines. Clamps to [min, max].
 */
export function QuantityStepper({ value = 1, min = 1, max = 99, onChange, size = 'md', style = {} }) {
  const dim = size === 'sm' ? 32 : 40;
  const set = (n) => {
    const clamped = Math.max(min, Math.min(max, n));
    onChange && onChange(clamped);
  };
  const btn = (label, fn, dis) => (
    <button
      type="button"
      aria-label={label}
      onClick={fn}
      disabled={dis}
      style={{
        width: dim, height: dim, flex: 'none',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: 'transparent', border: 'none',
        color: dis ? 'var(--text-faint)' : 'var(--text-body)',
        fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1,
        cursor: dis ? 'not-allowed' : 'pointer',
        transition: 'color var(--dur) var(--ease-out)',
      }}
    >{label === 'Decrease' ? '\u2212' : '+'}</button>
  );

  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center',
      border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-inset)', ...style,
    }}>
      {btn('Decrease', () => set(value - 1), value <= min)}
      <span style={{
        minWidth: dim - 4, textAlign: 'center',
        fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 600,
        color: 'var(--text-strong)', fontVariantNumeric: 'tabular-nums',
        borderLeft: '1px solid var(--line)', borderRight: '1px solid var(--line)',
        height: dim, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      }}>{value}</span>
      {btn('Increase', () => set(value + 1), value >= max)}
    </div>
  );
}
