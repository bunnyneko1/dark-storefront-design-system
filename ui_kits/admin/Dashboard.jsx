/* Dashboard — at-a-glance overview for staff starting a shift. */
function Dashboard({ inventory, activity, shipments, onRestock, onNav }) {
  const Ic = window.Icon;
  const { Button, Badge } = window.EmberTobaccoCoDesignSystem_3a8c24;
  const { timeAgo, Thumb, StockBar, STATUS } = window.AdminUI;

  const low = inventory.filter(p => window.stockStatus(p) === 'low');
  const out = inventory.filter(p => window.stockStatus(p) === 'out');
  const needs = inventory.filter(p => window.stockStatus(p) !== 'ok').sort((a, b) => a.stock - b.stock);
  const totalUnits = inventory.reduce((s, p) => s + p.stock, 0);
  const arrived = shipments.filter(s => s.status === 'arrived');
  const incomingUnits = shipments.reduce((s, sh) => s + sh.lines.reduce((t, l) => t + l.qty, 0), 0);

  const stats = [
    { label: 'Active SKUs', value: inventory.length, icon: 'package', sub: totalUnits.toLocaleString() + ' packs on hand' },
    { label: 'Low stock', value: low.length, icon: 'trending-down', tone: 'low', sub: 'at or below reorder point' },
    { label: 'Out of stock', value: out.length, icon: 'circle-alert', tone: 'out', sub: 'needs restock now' },
    { label: 'Incoming', value: incomingUnits.toLocaleString(), icon: 'truck', tone: 'gold', sub: shipments.length + ' open purchase orders' },
  ];

  const labelCss = { fontFamily: 'var(--font-label)', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' };
  const card = { background: 'var(--surface-card)', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)' };

  return (
    <div className="fade-in" style={{ padding: '28px 32px 48px', display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Arrived shipment callout */}
      {arrived.length > 0 && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px', borderRadius: 'var(--radius-lg)', background: 'linear-gradient(100deg, rgba(205,168,91,0.14), rgba(140,47,34,0.10))', border: '1px solid var(--line-gold)' }}>
          <div style={{ width: 42, height: 42, flex: 'none', borderRadius: 'var(--radius-md)', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-300)' }}><Ic n="truck" s={22} /></div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-strong)' }}>{arrived.length} shipment{arrived.length > 1 ? 's' : ''} arrived and ready to receive</div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{arrived.map(s => s.id).join(', ')} — check in stock to update counts.</div>
          </div>
          <Button variant="primary" size="sm" iconRight={<Ic n="arrow-right" s={15} />} onClick={() => onNav('receive')}>Receive now</Button>
        </div>
      )}

      {/* KPI stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {stats.map(s => (
          <div key={s.label} style={{ ...card, padding: '18px 20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={labelCss}>{s.label}</span>
              <span style={{ color: s.tone === 'low' ? 'var(--low-stock)' : s.tone === 'out' ? 'var(--out-of-stock)' : s.tone === 'gold' ? 'var(--gold-400)' : 'var(--text-faint)' }}><Ic n={s.icon} s={18} /></span>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 600, lineHeight: 1.1, marginTop: 10, color: s.tone === 'out' && s.value > 0 ? 'var(--out-of-stock)' : 'var(--text-strong)' }}>{s.value}</div>
            <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 4 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Two-column: needs attention + activity */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.55fr 1fr', gap: 16 }}>
        {/* Needs restock */}
        <div style={{ ...card, overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid var(--line)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, color: 'var(--text-strong)' }}>Needs restock</span>
              <Badge tone="low">{needs.length}</Badge>
            </div>
            <button onClick={() => onNav('inventory')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--gold-400)', fontSize: 13, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 4 }}>All inventory <Ic n="chevron-right" s={15} /></button>
          </div>
          <div>
            {needs.length === 0 && <div style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--text-muted)', fontSize: 14 }}>Everything is above its reorder point. 🎉</div>}
            {needs.map((p, i) => {
              const st = window.stockStatus(p);
              return (
                <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 20px', borderTop: i ? '1px solid var(--line)' : 'none' }}>
                  <Thumb p={p} size={34} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--text-strong)' }}>{p.brand} {p.name}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-faint)' }}>{p.sku}</div>
                  </div>
                  <div style={{ width: 120 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 5 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: STATUS[st].color }}>{p.stock}</span>
                      <span style={{ color: 'var(--text-faint)' }}>/ {p.reorder}</span>
                    </div>
                    <StockBar stock={p.stock} reorder={p.reorder} />
                  </div>
                  <Button variant="outline" size="sm" onClick={() => onRestock(p)}>Restock</Button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent activity */}
        <div style={{ ...card, overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid var(--line)' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, color: 'var(--text-strong)' }}>Recent activity</span>
            <button onClick={() => onNav('activity')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--gold-400)', fontSize: 13, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 4 }}>View all <Ic n="chevron-right" s={15} /></button>
          </div>
          <div style={{ padding: '4px 0' }}>
            {activity.slice(0, 6).map((a, i) => {
              const p = inventory.find(x => x.id === a.product) || { name: a.product, brand: '' };
              const up = a.delta > 0;
              const meta = { receive: ['truck', 'var(--gold-400)'], sale: ['shopping-cart', 'var(--text-faint)'], adjust: ['settings-2', 'var(--ember-300)'], count: ['clipboard-check', 'var(--blue-400)'] }[a.type] || ['dot', 'var(--text-faint)'];
              return (
                <div key={a.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 20px' }}>
                  <span style={{ width: 30, height: 30, flex: 'none', borderRadius: 999, background: 'var(--surface-raised)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: meta[1] }}><Ic n={meta[0]} s={15} /></span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13.5, color: 'var(--text-body)' }}><span style={{ color: 'var(--text-strong)', fontWeight: 600 }}>{p.brand} {p.name}</span></div>
                    <div style={{ fontSize: 11.5, color: 'var(--text-faint)' }}>{a.who.split(' ')[0]} · {timeAgo(a.mins)}</div>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13.5, fontWeight: 600, color: up ? 'var(--in-stock)' : 'var(--text-muted)' }}>{up ? '+' : ''}{a.delta}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
window.Dashboard = Dashboard;
