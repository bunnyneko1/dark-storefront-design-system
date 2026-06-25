/* Inventory — full sortable/filterable stock table with inline quick-adjust. */
function Inventory({ inventory, query, onRestock, onAdjust, flashId }) {
  const Ic = window.Icon;
  const { Tag, Badge } = window.EmberTobaccoCoDesignSystem_3a8c24;
  const { Thumb, StockBar, STATUS } = window.AdminUI;
  const [filter, setFilter] = React.useState('all');
  const [sort, setSort] = React.useState({ key: 'status', dir: 1 });

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'needs', label: 'Needs restock' },
    { id: 'Regular', label: 'Regular' },
    { id: 'Menthol', label: 'Menthol' },
  ];

  const q = query.trim().toLowerCase();
  let rows = inventory.filter(p => {
    if (q && !(p.brand + ' ' + p.name + ' ' + p.sku).toLowerCase().includes(q)) return false;
    if (filter === 'needs') return window.stockStatus(p) !== 'ok';
    if (filter === 'Regular' || filter === 'Menthol') return p.cat === filter;
    return true;
  });
  const rank = { out: 0, low: 1, ok: 2 };
  rows = [...rows].sort((a, b) => {
    let av, bv;
    if (sort.key === 'status') { av = rank[window.stockStatus(a)]; bv = rank[window.stockStatus(b)]; }
    else if (sort.key === 'name') { av = (a.brand + a.name).toLowerCase(); bv = (b.brand + b.name).toLowerCase(); }
    else { av = a[sort.key]; bv = b[sort.key]; }
    if (av < bv) return -sort.dir;
    if (av > bv) return sort.dir;
    return 0;
  });

  const setSorting = (key) => setSort(s => s.key === key ? { key, dir: -s.dir } : { key, dir: 1 });
  const th = { padding: '12px 16px', fontFamily: 'var(--font-label)', fontSize: 10.5, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textAlign: 'left', whiteSpace: 'nowrap', userSelect: 'none' };
  const td = { padding: '12px 16px', borderTop: '1px solid var(--line)', verticalAlign: 'middle' };

  const SortTh = ({ k, children, align }) => (
    <th style={{ ...th, textAlign: align || 'left', cursor: 'pointer' }} onClick={() => setSorting(k)}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>{children}
        {sort.key === k && <Ic n={sort.dir === 1 ? 'chevron-up' : 'chevron-down'} s={13} />}</span>
    </th>
  );

  // compact inline ±1 stepper
  const Step = ({ p, dir }) => (
    <button onClick={() => onAdjust(p, dir, dir > 0 ? 'Quick add' : 'Quick remove')}
      disabled={dir < 0 && p.stock <= 0}
      style={{ width: 28, height: 28, flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', background: 'var(--surface-inset)', color: dir < 0 && p.stock <= 0 ? 'var(--text-faint)' : 'var(--text-body)', cursor: dir < 0 && p.stock <= 0 ? 'not-allowed' : 'pointer' }}
      onMouseEnter={e => { if (!(dir < 0 && p.stock <= 0)) { e.currentTarget.style.borderColor = 'var(--line-gold)'; e.currentTarget.style.color = 'var(--gold-300)'; } }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = dir < 0 && p.stock <= 0 ? 'var(--text-faint)' : 'var(--text-body)'; }}>
      <Ic n={dir > 0 ? 'plus' : 'minus'} s={14} />
    </button>
  );

  return (
    <div className="fade-in" style={{ padding: '24px 32px 48px' }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 18, flexWrap: 'wrap' }}>
        {filters.map(f => <Tag key={f.id} selectable selected={filter === f.id} onClick={() => setFilter(f.id)}>{f.label}</Tag>)}
        <span style={{ marginLeft: 'auto', alignSelf: 'center', fontSize: 13, color: 'var(--text-muted)' }}>{rows.length} of {inventory.length} products</span>
      </div>

      <div style={{ background: 'var(--surface-card)', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ background: 'var(--surface-inset)' }}>
            <tr>
              <SortTh k="name">Product</SortTh>
              <th style={th}>Category</th>
              <SortTh k="stock">Stock level</SortTh>
              <th style={{ ...th, textAlign: 'right' }}>Reorder at</th>
              <SortTh k="status">Status</SortTh>
              <th style={{ ...th, textAlign: 'center' }}>Quick adjust</th>
              <th style={{ ...th, textAlign: 'right' }}>Restock</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(p => {
              const st = window.stockStatus(p);
              return (
                <tr key={p.id} className={'inv-row' + (flashId === p.id ? ' row-flash' : '')}>
                  <td style={{ ...td, cursor: 'pointer' }} onClick={() => onRestock(p)}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <Thumb p={p} size={36} />
                      <div>
                        <div style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--text-strong)' }}>{p.brand} {p.name}</div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-faint)' }}>{p.sku}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ ...td, fontSize: 13.5, color: 'var(--text-muted)' }}>{p.cat}</td>
                  <td style={{ ...td, width: 200 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 6 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 16, fontWeight: 600, color: STATUS[st].color }}>{p.stock}</span>
                      <span style={{ fontSize: 12, color: 'var(--text-faint)' }}>packs</span>
                    </div>
                    <StockBar stock={p.stock} reorder={p.reorder} />
                  </td>
                  <td style={{ ...td, textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 13.5, color: 'var(--text-muted)' }}>{p.reorder}</td>
                  <td style={td}><Badge tone={STATUS[st].tone}>{STATUS[st].label}</Badge></td>
                  <td style={td}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center' }}>
                      <Step p={p} dir={-1} />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600, minWidth: 34, textAlign: 'center', color: 'var(--text-strong)' }}>{p.stock}</span>
                      <Step p={p} dir={1} />
                    </div>
                  </td>
                  <td style={{ ...td, textAlign: 'right' }}>
                    <button onClick={() => onRestock(p)} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--line-gold)', background: 'var(--accent-soft)', color: 'var(--gold-200)', cursor: 'pointer', fontSize: 13, fontWeight: 600 }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(205,168,91,0.2)'} onMouseLeave={e => e.currentTarget.style.background = 'var(--accent-soft)'}>
                      <Ic n="plus" s={14} /> Restock
                    </button>
                  </td>
                </tr>
              );
            })}
            {rows.length === 0 && (
              <tr><td colSpan={7} style={{ ...td, textAlign: 'center', padding: '48px 0', color: 'var(--text-muted)' }}>No products match your search.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
window.Inventory = Inventory;
