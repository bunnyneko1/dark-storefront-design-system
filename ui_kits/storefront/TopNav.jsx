/* TopNav — sticky storefront header with working search + account menu. */
function TopNav({ cartCount, onCartClick, onHome, onCategory, products = [], onOpenProduct }) {
  const { IconButton, Badge } = window.EmberTobaccoCoDesignSystem_3a8c24;
  const Ic = window.Icon;
  const isMobile = window.useIsMobile();
  const links = [
    ['All', 'all'], ['Regular', 'regular'], ['Menthol', 'menthol'],
  ];
  const [active, setActive] = React.useState('All');
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [acctOpen, setAcctOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const [toast, setToast] = React.useState(null);
  const inputRef = React.useRef(null);

  React.useEffect(() => { if (searchOpen && inputRef.current) inputRef.current.focus(); }, [searchOpen]);
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') { setSearchOpen(false); setAcctOpen(false); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const flash = (msg) => { setToast(msg); setAcctOpen(false); setTimeout(() => setToast(null), 2200); };

  const q = query.trim().toLowerCase();
  const results = (q
    ? products.filter(p => (p.brand + ' ' + p.name + ' ' + p.cat).toLowerCase().includes(q))
    : products).slice(0, 8);

  const openResult = (p) => { setSearchOpen(false); setQuery(''); onOpenProduct && onOpenProduct(p); };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 40, height: 'var(--nav-height)', background: 'rgba(14,12,11,0.86)', backdropFilter: 'blur(14px)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', height: '100%', padding: '0 var(--gutter)', display: 'flex', alignItems: 'center', gap: isMobile ? 14 : 32 }}>
        {/* Logo */}
        <div onClick={onHome} style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 'none', cursor: onHome ? 'pointer' : 'default', minWidth: 40, minHeight: 40 }}>
          {/* logo icon + company name intentionally left blank */}
        </div>

        {/* Links */}
        {isMobile ? <div style={{ flex: 1 }} /> : (
        <nav style={{ display: 'flex', gap: 6, flex: 1 }}>
          {links.map(([l, cat]) => (
            <button key={l} onClick={() => { setActive(l); onCategory ? onCategory(cat) : (onHome && onHome()); }} style={{
              background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-label)', fontSize: 12, fontWeight: 600,
              letterSpacing: '0.13em', textTransform: 'uppercase', padding: '8px 12px',
              color: active === l ? 'var(--text-strong)' : 'var(--text-muted)',
              borderBottom: active === l ? '1.5px solid var(--gold-400)' : '1.5px solid transparent',
              transition: 'color var(--dur) var(--ease-out)',
            }}>{l}</button>
          ))}
        </nav>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 'none', position: 'relative' }}>
          <IconButton ariaLabel="Search" onClick={() => { setSearchOpen(true); setAcctOpen(false); }}><Ic n="search" /></IconButton>
          <div style={{ position: 'relative' }}>
            <IconButton ariaLabel="Account" onClick={() => setAcctOpen(o => !o)}><Ic n="user" /></IconButton>
            {acctOpen && (
              <React.Fragment>
                <div onClick={() => setAcctOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 44 }} />
                <div style={{ position: 'absolute', top: 'calc(100% + 10px)', right: 0, zIndex: 45, width: 220, background: 'var(--surface-card)', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden' }}>
                  <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: 16, color: 'var(--text-strong)', margin: 0 }}>Welcome</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--text-faint)', margin: '3px 0 0' }}>Sign in to track orders</p>
                  </div>
                  {[['log-in', 'Sign in'], ['package', 'My orders'], ['heart', 'Wishlist'], ['map-pin', 'Track order']].map(([ic, lab]) => (
                    <button key={lab} onClick={() => flash(lab + ' — demo')} style={{ display: 'flex', alignItems: 'center', gap: 11, width: '100%', padding: '11px 16px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', color: 'var(--text-body)', fontFamily: 'var(--font-body)', fontSize: 14 }}
                      onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-soft)'} onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                      <Ic n={ic} s={16} /> {lab}
                    </button>
                  ))}
                </div>
              </React.Fragment>
            )}
          </div>
          <IconButton variant="solid" badge={cartCount > 0 ? cartCount : null} ariaLabel="Cart" onClick={onCartClick}><Ic n="shopping-bag" /></IconButton>
        </div>
      </div>

      {/* Search overlay */}
      {searchOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 90 }}>
          <div onClick={() => setSearchOpen(false)} style={{ position: 'absolute', inset: 0, background: 'var(--surface-overlay)', backdropFilter: 'blur(6px)' }} />
          <div style={{ position: 'relative', maxWidth: 'min(640px, 92vw)', margin: '84px auto 0', background: 'var(--surface-card)', border: '1px solid var(--line-gold)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-overlay)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', borderBottom: '1px solid var(--line)' }}>
              <Ic n="search" s={18} color="var(--text-muted)" />
              <input ref={inputRef} value={query} onChange={e => setQuery(e.target.value)} placeholder="Search brands, products…" style={{ flex: 1, background: 'none', border: 'none', outline: 'none', color: 'var(--text-strong)', fontFamily: 'var(--font-body)', fontSize: 17 }} />
              <button onClick={() => setSearchOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-faint)', display: 'inline-flex' }}><Ic n="x" s={18} /></button>
            </div>
            <div className="ember-scroll" style={{ maxHeight: 360, overflowY: 'auto', padding: 8 }}>
              {results.length === 0 ? (
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-faint)', textAlign: 'center', padding: '30px 0' }}>No products match &ldquo;{query}&rdquo;.</p>
              ) : results.map(p => (
                <button key={p.id} onClick={() => openResult(p)} style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', padding: '10px 12px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', borderRadius: 'var(--radius-sm)' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-raised)'} onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                  <span style={{ width: 34, height: 42, flex: 'none', borderRadius: 'var(--radius-xs)', overflow: 'hidden', background: 'linear-gradient(160deg, var(--ink-600), var(--ink-850))', border: '1px solid var(--border)', display: 'flex', alignItems: 'flex-end', padding: p.image ? 0 : 5 }}>
                    {p.image ? <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span style={{ width: 12, height: 2.5, background: p.accent, borderRadius: 2 }} />}
                  </span>
                  <span style={{ flex: 1, minWidth: 0 }}>
                    <span style={{ display: 'block', fontFamily: 'var(--font-label)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{p.brand}</span>
                    <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 15, color: 'var(--text-strong)' }}>{p.name}</span>
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600, color: 'var(--gold-300)', flexShrink: 0 }}></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div style={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 95, padding: '12px 20px', background: 'var(--surface-raised)', border: '1px solid var(--line-gold)', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-lg)', fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-body)' }}>{toast}</div>
      )}
    </header>
  );
}
window.TopNav = TopNav;
