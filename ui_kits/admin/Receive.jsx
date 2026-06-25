/* Receive — check in incoming purchase orders, updating stock in bulk. */
function Receive({ shipments, inventory, doneIds, onReceivePO }) {
  const Ic = window.Icon;
  const { Button, Badge } = window.EmberTobaccoCoDesignSystem_3a8c24;
  const { Thumb } = window.AdminUI;
  const supp = window.EMBER_SUPPLIERS;
  const byId = id => inventory.find(p => p.id === id) || { name: id, brand: '', sku: id };

  // local editable received counts: { [poId]: { [productId]: qty } }
  const [counts, setCounts] = React.useState(() => {
    const init = {};
    shipments.forEach(s => { init[s.id] = {}; s.lines.forEach(l => init[s.id][l.id] = l.qty); });
    return init;
  });
  const setCount = (po, pid, v) => setCounts(c => ({ ...c, [po]: { ...c[po], [pid]: Math.max(0, v) } }));

  const statusBadge = (s) => {
    if (doneIds.includes(s.id)) return <Badge tone="instock" variant="solid">Received</Badge>;
    if (s.status === 'arrived') return <Badge tone="gold" variant="solid">Arrived</Badge>;
    return <Badge tone="neutral">In transit</Badge>;
  };
  const labelCss = { fontFamily: 'var(--font-label)', fontSize: 10.5, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' };

  const sorted = [...shipments].sort((a, b) => {
    const w = s => doneIds.includes(s.id) ? 2 : s.status === 'arrived' ? 0 : 1;
    return w(a) - w(b);
  });

  return (
    <div className="fade-in" style={{ padding: '24px 32px 48px', display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 880 }}>
      {sorted.map(s => {
        const done = doneIds.includes(s.id);
        const total = s.lines.reduce((t, l) => t + (counts[s.id][l.id] ?? l.qty), 0);
        return (
          <div key={s.id} style={{ background: 'var(--surface-card)', border: '1px solid ' + (s.status === 'arrived' && !done ? 'var(--line-gold)' : 'var(--line)'), borderRadius: 'var(--radius-lg)', overflow: 'hidden', opacity: done ? 0.72 : 1 }}>
            {/* PO header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px', borderBottom: '1px solid var(--line)', background: 'var(--surface-inset)' }}>
              <div style={{ width: 42, height: 42, flex: 'none', borderRadius: 'var(--radius-md)', background: 'var(--surface-raised)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-300)' }}><Ic n="truck" s={20} /></div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 600, color: 'var(--text-strong)' }}>{s.id}</span>
                  {statusBadge(s)}
                </div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>{supp[s.supplier].name} · lead {supp[s.supplier].lead}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={labelCss}>ETA</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-body)', marginTop: 2 }}>{s.eta}</div>
              </div>
            </div>

            {/* Lines */}
            <div>
              {s.lines.map((l, i) => {
                const p = byId(l.id);
                const val = counts[s.id][l.id] ?? l.qty;
                const mismatch = val !== l.qty;
                return (
                  <div key={l.id} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 20px', borderTop: i ? '1px solid var(--line)' : 'none' }}>
                    <Thumb p={p} size={34} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>{p.brand} {p.name}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-faint)' }}>{p.sku} · expected {l.qty}</div>
                    </div>
                    {done ? (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600, color: 'var(--in-stock)' }}><Ic n="check" s={16} /> +{val}</span>
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <button onClick={() => setCount(s.id, l.id, val - 1)} style={{ width: 30, height: 30, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', background: 'var(--surface-inset)', color: 'var(--text-body)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Ic n="minus" s={14} /></button>
                        <input type="number" value={val} min={0} onChange={e => setCount(s.id, l.id, parseInt(e.target.value || '0', 10))} style={{ width: 66, height: 34, textAlign: 'center', background: 'var(--surface-inset)', border: '1px solid ' + (mismatch ? 'var(--line-gold)' : 'var(--border)'), borderRadius: 'var(--radius-sm)', color: 'var(--text-strong)', fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 600, outline: 'none' }} />
                        <button onClick={() => setCount(s.id, l.id, val + 1)} style={{ width: 30, height: 30, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', background: 'var(--surface-inset)', color: 'var(--text-body)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Ic n="plus" s={14} /></button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Footer action */}
            {!done && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderTop: '1px solid var(--line)' }}>
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Checking in <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-strong)', fontWeight: 600 }}>{total}</span> packs across {s.lines.length} line{s.lines.length > 1 ? 's' : ''}</span>
                <Button variant="primary" size="sm" iconLeft={<Ic n="check-check" s={16} />} onClick={() => onReceivePO(s, counts[s.id])}>Check in shipment</Button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
window.Receive = Receive;
