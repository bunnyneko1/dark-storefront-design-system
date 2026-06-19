/* ProductDetail — full product view: large image, pricing, quantity, details, related. */
function ProductDetail({ product, related, onBack, onAdd, onOpen }) {
  const { Button, Badge, QuantityStepper, ProductCard } = window.EmberTobaccoCoDesignSystem_3a8c24;
  const Icon = window.Icon;
  const isMobile = window.useIsMobile();
  const [qty, setQty] = React.useState(1);
  const p = product;
  const soldOut = p.stock === 'out';
  const stockMap = { instock: ['instock', 'In stock'], low: ['low', 'Low stock'], out: ['out', 'Out of stock'] };
  const [tone, label] = stockMap[p.stock] || stockMap.instock;

  const desc = `${p.brand} ${p.name} — {{PRODUCT_DESCRIPTION}}`;
  const details = [
    ['Brand', p.brand],
    ['Format', p.unit.replace(/^per /, '').replace(/^/, c => c.toUpperCase())],
    ['Category', '{{CATEGORY}}'],
    ['SKU', p.id.toUpperCase()],
  ];

  return (
    <main style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '28px var(--gutter) 0' }}>
      <button onClick={onBack} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontSize: 14, padding: '8px 0', marginBottom: 14 }}>
        <Icon n="arrow-left" s={16} /> Back to shop
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1fr) minmax(0, 1fr)', gap: isMobile ? 26 : 40, alignItems: 'start' }}>
        {/* Image */}
        <div style={{ position: 'relative', aspectRatio: '1 / 1', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--line)', background: 'radial-gradient(120% 120% at 50% 0%, var(--ink-700), var(--ink-900))' }}>
          {p.flag && <div style={{ position: 'absolute', top: 16, left: 16, zIndex: 2 }}><Badge tone="gold" variant="solid">{p.flag}</Badge></div>}
          {p.discount && <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 2 }}><Badge tone="ember" variant="solid">{p.discount}</Badge></div>}
          {p.image
            ? <img src={p.image} alt={p.brand + ' ' + p.name} style={{ width: '100%', height: '100%', objectFit: p.fit || 'cover', padding: p.fit === 'contain' ? '3%' : 0, boxSizing: 'border-box' }} />
            : <image-slot id={`detail-${p.id}`} style={{ width: '100%', height: '100%' }} shape="rect" fit="cover" placeholder="Drop product image"></image-slot>}
        </div>

        {/* Info */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontFamily: 'var(--font-label)', fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-400)' }}>{p.brand}</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 3.6vw, 44px)', fontWeight: 500, color: 'var(--text-strong)', margin: '8px 0 12px', lineHeight: 1.08, letterSpacing: '-0.015em' }}>{p.name}</h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            {p.rating != null && (
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 14, color: 'var(--gold-400)', letterSpacing: '0.08em' }}>{'\u2605'.repeat(Math.round(p.rating)) + '\u2606'.repeat(5 - Math.round(p.rating))}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)' }}>{p.rating.toFixed(1)} ({p.ratingCount})</span>
              </span>
            )}
            <Badge tone={tone}>{label}</Badge>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 20 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 34, fontWeight: 600, color: 'var(--gold-300)' }}>${p.price.toFixed(2)}</span>
            {p.oldPrice && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 18, color: 'var(--text-faint)', textDecoration: 'line-through' }}>${p.oldPrice.toFixed(2)}</span>}
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-faint)' }}>{p.unit}</span>
          </div>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, color: 'var(--text-body)', lineHeight: 1.7, margin: '0 0 26px', maxWidth: 460 }}>{desc}</p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
            <QuantityStepper value={qty} min={1} max={10} onChange={setQty} />
            <Button variant="primary" size="lg" disabled={soldOut} onClick={() => onAdd(p, qty)} style={{ flex: 1 }}>
              {soldOut ? 'Sold out' : `Add ${qty} to cart`}
            </Button>
          </div>

          {/* Details table */}
          <div style={{ border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            {details.map(([k, v], i) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '13px 18px', borderTop: i ? '1px solid var(--line)' : 'none', background: i % 2 ? 'transparent' : 'var(--surface-inset)' }}>
                <span style={{ fontFamily: 'var(--font-label)', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{k}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-body)' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related */}
      {related && related.length > 0 && (
        <section style={{ padding: '72px 0 0' }}>
          <SectionHead eyebrow="You may also like" title="{{RELATED_TITLE}}" />
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, minmax(0, 1fr))' : 'repeat(4, minmax(0, 1fr))', gap: isMobile ? 12 : 20 }}>
            {related.map(r => (
              <ProductCard key={r.id} brand={r.brand} name={r.name} price={'$' + r.price.toFixed(2)}
                oldPrice={r.oldPrice ? '$' + r.oldPrice.toFixed(2) : undefined} discount={r.discount} image={r.image}
                rating={r.rating} ratingCount={r.ratingCount} unit={r.unit} stock={r.stock} flag={r.flag} accent={r.accent} fit={r.fit}
                onAdd={() => onAdd(r, 1)} onOpen={() => onOpen(r)} />
            ))}
          </div>
        </section>
      )}
      <div style={{ height: 90 }} />
    </main>
  );
}
window.ProductDetail = ProductDetail;
