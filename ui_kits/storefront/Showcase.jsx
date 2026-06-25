/* Showcase — image-driven storefront sections (hero, trust strip, category tiles, promo banners).
   Image areas are <image-slot> drop targets: drag your own product/banner photos in. */

function HeroBanner({ onShop }) {
  const { Button, Badge } = window.EmberTobaccoCoDesignSystem_3a8c24;
  const isMobile = window.useIsMobile();
  const [reveal, setReveal] = React.useState(false);
  React.useEffect(() => { const id = requestAnimationFrame(() => setReveal(true)); return () => cancelAnimationFrame(id); }, []);
  return (
    <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '36px var(--gutter) 0' }}>
      <div data-reveal={reveal ? '' : undefined} style={{
        position: 'relative', overflow: 'hidden',
        border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)',
        minHeight: isMobile ? 420 : 480,
      }}>
        <div className="ember-zoom" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <image-slot id="ember-hero" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} shape="rect" fit="cover" src="assets/banners/hero.jpg" placeholder="Drop hero image"></image-slot>
        </div>
        <div className="ember-fade" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: isMobile ? 'linear-gradient(0deg, rgba(10,9,8,0.95) 8%, rgba(10,9,8,0.6) 45%, rgba(10,9,8,0.25) 100%)' : 'linear-gradient(90deg, rgba(10,9,8,0.94) 0%, rgba(10,9,8,0.78) 38%, rgba(10,9,8,0.32) 70%, rgba(10,9,8,0.1) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 560, minHeight: isMobile ? 420 : 480, padding: isMobile ? '32px 26px' : '56px 52px', display: 'flex', flexDirection: 'column', justifyContent: isMobile ? 'flex-end' : 'center' }}>
          <span className="ember-rise" style={{ display: 'inline-block', animationDelay: '0.15s' }}><Badge tone="gold">Premium Selection</Badge></span>
          <h1 className="ember-rise" style={{ animationDelay: '0.28s', fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 7vw, 58px)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--cream-50)', lineHeight: 1.04, margin: '18px 0 16px' }}>
            Premium tobacco, delivered discreetly across Australia.
          </h1>
          <p className="ember-rise" style={{ animationDelay: '0.42s', fontFamily: 'var(--font-body)', fontSize: isMobile ? 15 : 17, color: 'var(--cream-300)', maxWidth: 440, lineHeight: 1.6, margin: '0 0 28px' }}>
            The full Manchester range — regular blends and menthol crush — shipped discreetly across Australia.
          </p>
          <div className="ember-rise" style={{ animationDelay: '0.54s', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button variant="primary" size={isMobile ? 'md' : 'lg'} onClick={onShop}>Shop the range</Button>
            <Button variant="outline" size={isMobile ? 'md' : 'lg'} onClick={onShop}>View best sellers</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
window.HeroBanner = HeroBanner;

function TrustStrip() {
  const isMobile = window.useIsMobile();
  const items = [
    ['shield-check', 'Discreet, secure checkout'],
    ['truck', 'Fast nationwide shipping'],
    ['badge-check', 'Trusted brands, genuine stock'],
    ['refresh-cw', '7-day satisfaction guarantee'],
  ];
  return (
    <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '20px var(--gutter) 0' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: 0,
        border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', overflow: 'hidden',
        background: 'var(--surface-card)',
      }}>
        {items.map(([icon, label], i) => (
          <div key={label} style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: isMobile ? '14px 16px' : '18px 22px',
            borderLeft: (isMobile ? i % 2 : i) ? '1px solid var(--line)' : 'none',
            borderTop: isMobile && i >= 2 ? '1px solid var(--line)' : 'none',
          }}>
            <span style={{ color: 'var(--gold-400)', display: 'inline-flex' }}>
              <Icon n={icon} s={20} />
            </span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: isMobile ? 12.5 : 13.5, color: 'var(--text-body)', lineHeight: 1.3 }}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
window.TrustStrip = TrustStrip;

function SectionHead({ eyebrow, title, action }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, margin: '0 0 22px' }}>
      <div>
        {eyebrow && <p style={{ fontFamily: 'var(--font-label)', fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-400)', margin: '0 0 8px' }}>{eyebrow}</p>}
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 500, color: 'var(--text-strong)', margin: 0, letterSpacing: '-0.01em' }}>{title}</h2>
      </div>
      {action}
    </div>
  );
}
window.SectionHead = SectionHead;

function CategoryShowcase({ onPick }) {
  const cats = [
    { id: 'cat-sapphire', name: 'Sapphire', note: 'Regular', pick: 'regular', img: 'assets/products/man-sapphire.png' },
    { id: 'cat-royal', name: 'Royal', note: 'Regular', pick: 'regular', img: 'assets/products/man-royal.png' },
    { id: 'cat-green', name: 'Green Crush', note: 'Menthol', pick: 'menthol', img: 'assets/products/man-green.png' },
    { id: 'cat-blue', name: 'Blue Crush', note: 'Menthol', pick: 'menthol', img: 'assets/products/man-blue.png' },
  ];
  return (
    <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px var(--gutter) 0' }}>
      <SectionHead eyebrow="Shop by variant" title="Explore the range" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 14 }}>
        {cats.map(c => (
          <a key={c.id} href="#" onClick={(e) => { e.preventDefault(); onPick && onPick(c.pick); }} style={{
            position: 'relative', display: 'block', aspectRatio: '3 / 4',
            borderRadius: 'var(--radius-md)', overflow: 'hidden',
            border: '1px solid var(--line)', textDecoration: 'none',
          }}>
            <image-slot id={c.id} style={{ width: '100%', height: '100%' }} shape="rect" fit="cover" src={c.img} placeholder={`Drop ${c.name} image`}></image-slot>
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'linear-gradient(180deg, rgba(10,9,8,0) 38%, rgba(10,9,8,0.82) 100%)',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 18,
            }}>
              <span style={{ fontFamily: 'var(--font-label)', fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-300)' }}>{c.note}</span>
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, color: 'var(--cream-50)' }}>{c.name}</span>
                <Icon n="arrow-right" s={18} color="var(--cream-50)" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
window.CategoryShowcase = CategoryShowcase;

function PromoBanners({ onPick }) {
  const { Button } = window.EmberTobaccoCoDesignSystem_3a8c24;
  const isMobile = window.useIsMobile();
  const banners = [
    { id: 'promo-menthol', eyebrow: 'Crush capsules', title: 'Pop for menthol — Green & Blue Crush', cta: 'Shop menthol', cat: 'menthol' },
    { id: 'promo-regular', eyebrow: 'Smooth & light', title: 'Sapphire, Royal & Light blends', cta: 'Shop regular', cat: 'regular' },
  ];
  return (
    <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px var(--gutter) 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 18 }}>
        {banners.map(b => (
          <div key={b.id} style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--line)', minHeight: 240 }}>
            <image-slot id={b.id} style={{ width: '100%', height: '100%', minHeight: 240 }} shape="rect" fit="cover" placeholder="Drop banner image"></image-slot>
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'linear-gradient(100deg, rgba(10,9,8,0.86) 30%, rgba(10,9,8,0.25) 100%)',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: isMobile ? '0 26px' : '0 40px',
            }}>
              <p style={{ fontFamily: 'var(--font-label)', fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-300)', margin: '0 0 10px' }}>{b.eyebrow}</p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 500, color: 'var(--cream-50)', margin: '0 0 20px', maxWidth: 280, lineHeight: 1.15 }}>{b.title}</h3>
              <div style={{ pointerEvents: 'auto' }}><Button variant="outline" size="md" onClick={() => onPick && onPick(b.cat)}>{b.cta}</Button></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.PromoBanners = PromoBanners;
