/* CartDrawer — slide-over cart with line items, quantity steppers, subtotal, checkout. */
function CartDrawer({ open, items, onClose, onQty, onRemove, onCheckout }) {
  const { Button, QuantityStepper, IconButton } = window.EmberTobaccoCoDesignSystem_3a8c24;
  const Ic = window.Icon;

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <React.Fragment>
      {/* Scrim */}
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0, zIndex: 60,
        background: 'var(--surface-overlay)',
        opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity var(--dur) var(--ease-out)',
      }} />
      {/* Panel */}
      <aside style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 70,
        width: 'min(420px, 100%)',
        background: 'var(--bg-page)', borderLeft: '1px solid var(--line-gold)',
        boxShadow: 'var(--shadow-overlay)',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform var(--dur-slow) var(--ease-out)',
        display: 'flex', flexDirection: 'column',
      }}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid var(--line)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, color: 'var(--text-strong)', margin: 0 }}>
            Your cart <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text-faint)' }}>({count})</span>
          </h2>
          <IconButton ariaLabel="Close cart" onClick={onClose}><Ic n="x" s={18} /></IconButton>
        </header>

        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 24px' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '64px 0', color: 'var(--text-faint)' }}>
              <Ic n="shopping-bag" s={30} />
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, marginTop: 14 }}>Your cart is empty.</p>
            </div>
          ) : items.map(i => (
            <div key={i.id} style={{ display: 'flex', gap: 14, padding: '18px 0', borderBottom: '1px solid var(--line)' }}>
              <div style={{ width: 52, height: 64, flex: 'none', borderRadius: 'var(--radius-xs)', overflow: 'hidden', background: 'linear-gradient(160deg, var(--ink-600), var(--ink-850))', border: '1px solid var(--border)', display: 'flex', alignItems: 'flex-end', padding: i.image ? 0 : 6 }}>
                {i.image ? <img src={i.image} alt={i.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span style={{ width: 16, height: 2.5, background: i.accent, borderRadius: 2 }} />}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                  <div>
                    <p style={{ fontFamily: 'var(--font-label)', fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', margin: '0 0 3px' }}>{i.brand}</p>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: 16, color: 'var(--text-strong)', margin: 0 }}>{i.name}</p>
                  </div>
                  <button onClick={() => onRemove(i.id)} aria-label="Remove" style={{ background: 'none', border: 'none', color: 'var(--text-faint)', cursor: 'pointer', padding: 2, height: 'fit-content' }}>
                    <Ic n="trash-2" s={15} />
                  </button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                  <QuantityStepper size="sm" value={i.qty} min={1} max={10} onChange={(q) => onQty(i.id, q)} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 600, color: 'var(--gold-300)' }}>${(i.price * i.qty).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer style={{ padding: '20px 24px', borderTop: '1px solid var(--line)', background: 'var(--surface-inset)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
            <span style={{ fontFamily: 'var(--font-label)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Subtotal</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 24, fontWeight: 600, color: 'var(--text-strong)' }}>${subtotal.toFixed(2)}</span>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, color: 'var(--text-faint)', margin: '0 0 16px' }}>{'{{CART_NOTE}}'}</p>
          <Button variant="primary" size="lg" fullWidth disabled={items.length === 0} onClick={onCheckout}>Proceed to checkout</Button>
        </footer>
      </aside>
    </React.Fragment>
  );
}
window.CartDrawer = CartDrawer;
