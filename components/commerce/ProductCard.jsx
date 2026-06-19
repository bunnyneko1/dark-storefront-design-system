import React from 'react';
import { Badge } from '../core/Badge.jsx';
import { Button } from '../core/Button.jsx';

/**
 * Storefront product tile.
 * Renders a CSS "pack" placeholder unless an `image` URL is supplied.
 */
export function ProductCard({
  name,
  brand,
  price,
  oldPrice,          // optional struck-through original price
  discount,          // optional, e.g. "26% OFF"
  rating,            // optional 0–5
  ratingCount,       // optional review count
  unit = 'per pack',
  stock = 'instock', // 'instock' | 'low' | 'out'
  flag,              // optional Badge text, e.g. "New"
  image,
  fit = 'cover',     // 'cover' (default) or 'contain' to show the whole pack
  accent = 'var(--gold-400)',
  onAdd,
  onOpen,            // optional: open product detail (visual + title click)
  style = {},
}) {
  const [hover, setHover] = React.useState(false);
  const stockMap = {
    instock: { tone: 'instock', label: 'In stock' },
    low: { tone: 'low', label: 'Low stock' },
    out: { tone: 'out', label: 'Out of stock' },
  };
  const sk = stockMap[stock] || stockMap.instock;
  const soldOut = stock === 'out';

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column',
        background: 'var(--surface-card)',
        border: `1px solid ${hover ? 'var(--line-gold)' : 'var(--line)'}`,
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        transition: 'border-color var(--dur) var(--ease-out), transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
        transform: hover ? 'translateY(-3px)' : 'none',
        boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
        ...style,
      }}
    >
      {/* Visual */}
      <div onClick={onOpen} style={{
        position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden',
        background: 'radial-gradient(120% 120% at 50% 0%, var(--ink-700), var(--ink-850))',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderBottom: '1px solid var(--line)', cursor: onOpen ? 'pointer' : 'default',
      }}>
        {flag && <div style={{ position: 'absolute', top: 12, left: 12 }}><Badge tone="gold" variant="solid">{flag}</Badge></div>}
        {discount && <div style={{ position: 'absolute', top: 12, right: 12 }}><Badge tone="ember" variant="solid">{discount}</Badge></div>}
        {image ? (
          <img src={image} alt={name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: fit, padding: fit === 'contain' ? '3%' : 0, boxSizing: 'border-box', opacity: soldOut ? 0.4 : 1 }} />
        ) : (
          /* CSS pack placeholder */
          <div style={{
            width: '38%', height: '64%',
            background: 'linear-gradient(160deg, var(--ink-600), var(--ink-850))',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xs)',
            boxShadow: 'var(--shadow-sm), var(--inset-top)',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            padding: 12, opacity: soldOut ? 0.4 : 1,
          }}>
            <span style={{ width: 22, height: 3, background: accent, borderRadius: 2 }} />
            <span style={{
              fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600,
              color: 'var(--cream-200)', letterSpacing: '0.04em', lineHeight: 1.1,
            }}>{brand}</span>
          </div>
        )}
        {soldOut && (
          <span style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-label)', fontSize: 'var(--text-2xs)', fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--out-of-stock)',
          }}>Sold out</span>
        )}
      </div>

      {/* Body */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 'var(--space-4)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <span style={{
            fontFamily: 'var(--font-label)', fontSize: 'var(--text-2xs)', fontWeight: 600,
            letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)',
          }}>{brand}</span>
          <h3 onClick={onOpen} style={{
            margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)',
            fontWeight: 500, color: 'var(--text-strong)', lineHeight: 1.15,
            cursor: onOpen ? 'pointer' : 'default',
          }}>{name}</h3>
          {rating != null && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
              <span aria-label={`${rating} out of 5`} style={{ fontSize: 12, color: 'var(--gold-400)', letterSpacing: '0.06em' }}>
                {'\u2605'.repeat(Math.round(rating)) + '\u2606'.repeat(5 - Math.round(rating))}
              </span>
              {ratingCount != null && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)' }}>({ratingCount})</span>}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 2 }}>
          <Badge tone={sk.tone}>{sk.label}</Badge>
          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'flex-end', gap: 7 }}>
              {oldPrice && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-faint)', textDecoration: 'line-through' }}>{oldPrice}</span>}
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 'var(--text-md)', fontWeight: 600,
                color: 'var(--gold-300)', fontVariantNumeric: 'tabular-nums', lineHeight: 1,
              }}>{price}</span>
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-2xs)', color: 'var(--text-faint)', marginTop: 2 }}>{unit}</div>
          </div>
        </div>

        <Button variant={soldOut ? 'outline' : 'primary'} size="sm" fullWidth disabled={soldOut} onClick={onAdd} style={{ marginTop: 4 }}>
          {soldOut ? 'Notify me' : 'Add to cart'}
        </Button>
      </div>
    </article>
  );
}
