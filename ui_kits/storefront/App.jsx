/* App — orchestrates the storefront: home → product detail → cart → checkout → confirmation. */
function App() {
  const [view, setView] = React.useState({ name: 'home' });
  const [cartOpen, setCartOpen] = React.useState(false);
  const [items, setItems] = React.useState(() => {
    try { const s = localStorage.getItem('cart'); return s ? JSON.parse(s) : []; } catch (e) { return []; }
  });
  // Persist cart across reloads.
  React.useEffect(() => {
    try { localStorage.setItem('cart', JSON.stringify(items)); } catch (e) {}
  }, [items]);
  const [shopCat, setShopCat] = React.useState('all');
  const [toast, setToast] = React.useState(null);
  const toastTimer = React.useRef(null);
  const products = window.PRODUCTS || [];

  // Handle return from Zap Pay (live mode): ?success=true&orderId=…
  React.useEffect(() => {
    const r = window.ZapPay && window.ZapPay.readReturn && window.ZapPay.readReturn();
    if (!r) return;
    const total = Number(sessionStorage.getItem('zap_total') || 0);
    if (r.success) { setItems([]); setView({ name: 'confirmation', order: { number: r.orderId, total } }); }
    else { setView({ name: 'checkout', payError: true }); }
    history.replaceState(null, '', location.pathname);
  }, []);

  const go = (v) => { setView(v); window.scrollTo({ top: 0, behavior: 'auto' }); };

  // Navigate to the shop, optionally filtered, and scroll to the grid.
  const goShop = (cat) => {
    if (cat) setShopCat(cat);
    setView({ name: 'home' });
    setTimeout(() => { const el = document.getElementById('shop'); el && window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' }); }, 60);
  };

  const addToCart = (p, n = 1) => {
    setItems(prev => {
      const found = prev.find(i => i.id === p.id);
      if (found) return prev.map(i => i.id === p.id ? { ...i, qty: Math.min(10, i.qty + n) } : i);
      return [...prev, { id: p.id, brand: p.brand, name: p.name, price: p.price, accent: p.accent, image: p.image, qty: n }];
    });
    setToast({ brand: p.brand, name: p.name, image: p.image });
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3000);
  };
  const setQty = (id, q) => setItems(prev => prev.map(i => i.id === id ? { ...i, qty: q } : i));
  const removeItem = (id) => setItems(prev => prev.filter(i => i.id !== id));
  const cartCount = items.reduce((s, i) => s + i.qty, 0);
  const WHATSAPP = '61400000000'; // ← replace with your real WhatsApp number
  const waHref = 'https://wa.me/' + WHATSAPP.replace(/[^0-9]/g, '');

  const openProduct = (p) => go({ name: 'product', product: p });
  const goCheckout = () => { setCartOpen(false); go({ name: 'checkout' }); };
  const placeOrder = (total) => {
    const number = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    // Live: hand off to Zap Pay (redirects out, returns to this page).
    if (window.ZapPay && window.ZapPay.isLive()) {
      sessionStorage.setItem('zap_total', String(total));
      window.ZapPay.startPayment({ amountAud: total, orderId: number });
      return;
    }
    // Reserved/simulated: keep the prototype flow working until keys are added.
    setItems([]);
    go({ name: 'confirmation', order: { number, total } });
  };

  const related = (p) => products.filter(x => x.id !== p.id && x.style === p.style).concat(products.filter(x => x.id !== p.id && x.style !== p.style)).slice(0, 4);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AnnouncementBar />
      <TopNav cartCount={cartCount} onCartClick={() => setCartOpen(true)} onHome={() => go({ name: 'home' })} onCategory={(cat) => goShop(cat)} products={products} onOpenProduct={openProduct} />
      <div style={{ flex: 1 }}>
        {view.name === 'home' && (
          <React.Fragment>
            <HeroBanner onShop={() => goShop()} />
            <Reveal><TrustStrip /></Reveal>
            <div id="shop"><ProductGrid onAdd={addToCart} onOpen={openProduct} cat={shopCat} onCat={setShopCat} /></div>
            <Reveal><BrandStory onShop={() => goShop()} /></Reveal>
            <Reveal><CategoryShowcase onPick={(cat) => goShop(cat)} /></Reveal>
            <Reveal><Reviews /></Reveal>
            <Reveal><PromoBanners onPick={(cat) => goShop(cat)} /></Reveal>
            <div style={{ height: 80 }} />
          </React.Fragment>
        )}
        {view.name === 'product' && (
          <ProductDetail product={view.product} related={related(view.product)}
            onBack={() => go({ name: 'home' })} onAdd={addToCart} onOpen={openProduct} />
        )}
        {view.name === 'checkout' && (
          <Checkout items={items} payError={view.payError} onBack={() => go({ name: 'home' })} onPlace={placeOrder} />
        )}
        {view.name === 'confirmation' && (
          <Confirmation order={view.order} onHome={() => go({ name: 'home' })} />
        )}
      </div>
      <Footer onShop={(cat) => goShop(cat)} />
      <CartDrawer open={cartOpen} items={items} onClose={() => setCartOpen(false)} onQty={setQty} onRemove={removeItem} onCheckout={goCheckout} />

      {/* Add-to-cart toast */}
      <div aria-live="polite" style={{ position: 'fixed', left: '50%', bottom: toast ? 24 : -120, transform: 'translateX(-50%)', zIndex: 80, transition: 'bottom 0.4s var(--ease-out)', pointerEvents: toast ? 'auto' : 'none', maxWidth: 'calc(100vw - 32px)' }}>
        {toast && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 14px 12px 12px', background: 'var(--surface-raised)', border: '1px solid var(--line-gold)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)' }}>
            <span style={{ width: 38, height: 46, flex: 'none', borderRadius: 'var(--radius-xs)', overflow: 'hidden', background: 'var(--ink-850)', border: '1px solid var(--border)' }}>
              {toast.image && <img src={toast.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
            </span>
            <span style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'var(--font-label)', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--in-stock)' }}>Added to cart</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-strong)', marginTop: 2 }}>{toast.brand} {toast.name}</span>
            </span>
            <button onClick={() => { setToast(null); setCartOpen(true); }} style={{ marginLeft: 6, padding: '8px 14px', background: 'var(--gold-400)', color: 'var(--text-on-gold)', border: 'none', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontFamily: 'var(--font-label)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>View cart</button>
          </div>
        )}
      </div>

      {/* Floating WhatsApp button */}
      <a href={waHref} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" title="Chat on WhatsApp"
        style={{ position: 'fixed', right: 22, bottom: 22, zIndex: 50, width: 52, height: 52, borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.45)', textDecoration: 'none' }}>
        <window.Icon n="message-circle" s={26} color="#08210F" />
      </a>
    </div>
  );
}
window.App = App;
