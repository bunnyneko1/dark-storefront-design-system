/* Confirmation — order placed screen. */
function Confirmation({ order, onHome }) {
  const { Button } = window.EmberTobaccoCoDesignSystem_3a8c24;
  const Icon = window.Icon;
  return (
    <main style={{ maxWidth: 620, margin: '0 auto', padding: '80px var(--gutter) 0', textAlign: 'center' }}>
      <span style={{ width: 64, height: 64, margin: '0 auto 24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--accent-soft)', border: '1px solid var(--line-gold)', color: 'var(--gold-300)' }}>
        <Icon n="check" s={30} />
      </span>
      <p style={{ fontFamily: 'var(--font-label)', fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-400)', margin: '0 0 14px' }}>Order confirmed</p>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 46px)', fontWeight: 500, color: 'var(--text-strong)', margin: '0 0 16px', lineHeight: 1.1, letterSpacing: '-0.015em' }}>Thank you for your order</h1>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 0 32px' }}>
        We&rsquo;ve received your order and will send a confirmation and tracking details by email shortly. Your parcel ships discreetly, Australia-wide.
      </p>

      <div style={{ display: 'inline-flex', gap: 40, padding: '20px 32px', border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', background: 'var(--surface-card)', marginBottom: 36 }}>
        <div>
          <p style={{ fontFamily: 'var(--font-label)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', margin: '0 0 6px' }}>Order number</p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 600, color: 'var(--text-strong)', margin: 0 }}>{order.number}</p>
        </div>
        <div style={{ borderLeft: '1px solid var(--line)' }} />
        <div>
          <p style={{ fontFamily: 'var(--font-label)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', margin: '0 0 6px' }}>Total paid</p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 600, color: 'var(--gold-300)', margin: 0 }}></p>
        </div>
      </div>

      <div>
        <Button variant="primary" size="lg" onClick={onHome}>Continue shopping</Button>
      </div>
      <div style={{ height: 90 }} />
    </main>
  );
}
window.Confirmation = Confirmation;
