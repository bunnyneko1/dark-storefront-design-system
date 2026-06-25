/* ProductGrid — hero strip, category filter tags, responsive ProductCard grid. */
function ProductGrid({ onAdd, onOpen, cat, onCat }) {
  const { Tag, ProductCard, Badge } = window.EmberTobaccoCoDesignSystem_3a8c24;
  const isMobile = window.useIsMobile();
  const products = window.EMBER_PRODUCTS || [];
  const cats = [
    { id: 'all', label: 'All' },
    { id: 'regular', label: 'Regular' },
    { id: 'menthol', label: 'Menthol' },
  ];
  const [internalCat, setInternalCat] = React.useState('all');
  const curCat = cat !== undefined ? cat : internalCat;
  const setCat = onCat || setInternalCat;
  const shown = curCat === 'all' ? products : products.filter(p => p.style === curCat);

  return (
    <main style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px var(--gutter) 0' }}>
      <SectionHead eyebrow="The Manchester range" title="Browse our cigarettes" />

      {/* Filters */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14, marginBottom: 26 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {cats.map(c => (
            <Tag key={c.id} selectable selected={curCat === c.id} onClick={() => setCat(c.id)}>{c.label}</Tag>
          ))}
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)' }}>{shown.length} products</span>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, minmax(0, 1fr))' : 'repeat(auto-fill, minmax(240px, 1fr))', gap: isMobile ? 12 : 20 }}>
        {shown.map((p, i) => (
          <Reveal key={p.id} delay={(i % 8) * 55} y={18}>
            <ProductCard brand={p.brand} name={p.name} price={''}
              oldPrice={undefined} discount={p.discount}
              rating={p.rating} ratingCount={p.ratingCount} image={p.image} fit={p.fit}
              unit={p.unit} stock={p.stock} flag={p.flag} accent={p.accent}
              onAdd={() => onAdd(p)} onOpen={() => onOpen && onOpen(p)} />
          </Reveal>
        ))}
      </div>
    </main>
  );
}
window.ProductGrid = ProductGrid;
