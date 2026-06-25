/* Shared back-office UI helpers, exported on window.AdminUI. */
(function () {
  const STATUS = {
    ok:  { label: 'In stock', color: 'var(--in-stock)',     tone: 'instock' },
    low: { label: 'Low',      color: 'var(--low-stock)',     tone: 'low' },
    out: { label: 'Out',      color: 'var(--out-of-stock)',  tone: 'out' },
  };

  function timeAgo(mins) {
    if (mins < 1) return 'just now';
    if (mins < 60) return mins + 'm ago';
    const h = Math.floor(mins / 60);
    if (h < 24) return h + 'h ago';
    const d = Math.floor(h / 24);
    return d + 'd ago';
  }

  // Product thumbnail tile matching the storefront swatch treatment.
  function Thumb({ p, size = 40 }) {
    return (
      <span style={{ width: size, height: size * 1.2, flex: 'none', borderRadius: 'var(--radius-xs)', overflow: 'hidden', background: 'linear-gradient(160deg, var(--ink-600), var(--ink-850))', border: '1px solid var(--border)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: p.image ? 0 : 6 }}>
        {p.image
          ? <img src={p.image} alt="" onError={e => { e.currentTarget.style.display = 'none'; }} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          : <span style={{ width: size * 0.32, height: 3, background: p.accent, borderRadius: 2 }} />}
      </span>
    );
  }

  // Stock vs reorder bar.
  function StockBar({ stock, reorder }) {
    const cap = Math.max(reorder * 2, stock, 1);
    const pct = Math.min(100, (stock / cap) * 100);
    const status = stock <= 0 ? 'out' : stock <= reorder ? 'low' : 'ok';
    const reorderPct = Math.min(100, (reorder / cap) * 100);
    return (
      <div style={{ position: 'relative', height: 6, borderRadius: 999, background: 'var(--ink-600)', overflow: 'visible' }}>
        <div style={{ position: 'absolute', inset: 0, width: pct + '%', borderRadius: 999, background: STATUS[status].color, transition: 'width 0.3s var(--ease-out)' }} />
        <div title="Reorder point" style={{ position: 'absolute', top: -2, bottom: -2, left: reorderPct + '%', width: 1.5, background: 'var(--cream-300)', opacity: 0.5 }} />
      </div>
    );
  }

  window.AdminUI = { STATUS, timeAgo, Thumb, StockBar };
})();
