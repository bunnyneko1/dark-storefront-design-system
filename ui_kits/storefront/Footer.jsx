/* Footer — contact (WhatsApp + email) and working shop links. */
function Footer({ onShop, whatsapp = '61400000000', email = 'hello@embertobacco.com.au' }) {
  const Ic = window.Icon;
  const waHref = 'https://wa.me/' + String(whatsapp).replace(/[^0-9]/g, '');
  const waDisplay = '+' + String(whatsapp).replace(/[^0-9]/g, '');
  const shopLinks = [['All', 'all'], ['Regular', 'regular'], ['Menthol', 'menthol']];

  return (
    <footer style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-void)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '48px var(--gutter)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, justifyContent: 'space-between' }}>
          <div style={{ maxWidth: 320 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, minHeight: 26 }}>
              {/* logo icon + company name intentionally left blank */}
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
              The Manchester range — regular and menthol crush — shipped discreetly across Australia.
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 18 }}>
              <a href={waHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ color: 'var(--text-muted)', display: 'inline-flex' }}><Ic n="message-circle" s={18} /></a>
              <a href={'mailto:' + email} aria-label="Email" style={{ color: 'var(--text-muted)', display: 'inline-flex' }}><Ic n="mail" s={18} /></a>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 56 }}>
            <div>
              <p style={{ fontFamily: 'var(--font-label)', fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-400)', margin: '0 0 14px' }}>Shop</p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                {shopLinks.map(([label, cat]) => (
                  <li key={label}>
                    <button onClick={() => onShop && onShop(cat)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-muted)', transition: 'color var(--dur) var(--ease-out)' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--text-strong)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>{label}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-label)', fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-400)', margin: '0 0 14px' }}>Support</p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                <li><a href={waHref} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-muted)', textDecoration: 'none' }}>Delivery</a></li>
                <li><a href={waHref} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-muted)', textDecoration: 'none' }}>Tracking</a></li>
                <li><a href={waHref} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-muted)', textDecoration: 'none' }}>Returns</a></li>
                <li><a href={waHref} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-muted)', textDecoration: 'none' }}>Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)' }}>© 2026</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)' }}>Shipping Australia-wide</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
