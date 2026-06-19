import React from 'react';

/**
 * Text field with floating-style label and brass focus ring.
 */
export function Input({
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
  const borderColor = error ? 'var(--red-500)' : (focus ? 'var(--gold-400)' : 'var(--border)');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7, width: '100%', ...style }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontFamily: 'var(--font-label)', fontSize: 'var(--text-2xs)', fontWeight: 'var(--w-semibold)',
          letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)',
        }}>{label}</label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        height: 48, padding: '0 14px',
        background: 'var(--surface-inset)',
        border: `1px solid ${borderColor}`,
        borderRadius: 'var(--radius-sm)',
        boxShadow: focus ? 'var(--ring)' : 'var(--inset-press)',
        opacity: disabled ? 0.5 : 1,
        transition: 'border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
      }}>
        {iconLeft && <span style={{ display: 'inline-flex', color: 'var(--text-muted)' }}>{iconLeft}</span>}
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1, minWidth: 0, height: '100%',
            background: 'transparent', border: 'none', outline: 'none',
            fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
            color: 'var(--text-strong)',
          }}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)',
          color: error ? 'var(--red-300)' : 'var(--text-faint)',
        }}>{error || hint}</span>
      )}
    </div>
  );
}
