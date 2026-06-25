/* Activity — full chronological log of every stock movement. */
function Activity({ activity, inventory }) {
  const Ic = window.Icon;
  const { Tag } = window.EmberTobaccoCoDesignSystem_3a8c24;
  const { timeAgo } = window.AdminUI;
  const [filter, setFilter] = React.useState('all');
  const byId = id => inventory.find(p => p.id === id) || { name: id, brand: '', sku: id };

  const TYPE = {
    receive: { label: 'Received', icon: 'truck', color: 'var(--gold-400)' },
    sale:    { label: 'Sale',     icon: 'shopping-cart', color: 'var(--text-faint)' },
    adjust:  { label: 'Adjusted', icon: 'settings-2', color: 'var(--ember-300)' },
    count:   { label: 'Recount',  icon: 'clipboard-check', color: 'var(--blue-400)' },
  };
  const filters = [['all', 'All'], ['receive', 'Received'], ['adjust', 'Adjusted'], ['count', 'Recounts'], ['sale', 'Sales']];
  const rows = activity.filter(a => filter === 'all' || a.type === filter);

  return (
    <div className="fade-in" style={{ padding: '24px 32px 48px', maxWidth: 820 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 18, flexWrap: 'wrap' }}>
        {filters.map(([id, lbl]) => <Tag key={id} selectable selected={filter === id} onClick={() => setFilter(id)}>{lbl}</Tag>)}
      </div>

      <div style={{ background: 'var(--surface-card)', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
        {rows.map((a, i) => {
          const p = byId(a.product);
          const t = TYPE[a.type] || TYPE.adjust;
          const up = a.delta > 0;
          return (
            <div key={a.id} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 20px', borderTop: i ? '1px solid var(--line)' : 'none' }}>
              <span style={{ width: 36, height: 36, flex: 'none', borderRadius: 999, background: 'var(--surface-raised)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: t.color }}><Ic n={t.icon} s={17} /></span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, color: 'var(--text-body)' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-strong)' }}>{p.brand} {p.name}</span>
                  <span style={{ color: 'var(--text-muted)' }}> · {t.label.toLowerCase()}</span>
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-faint)', marginTop: 2 }}>{a.who} · {a.note}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 600, color: up ? 'var(--in-stock)' : 'var(--text-muted)' }}>{up ? '+' : ''}{a.delta}</div>
                <div style={{ fontSize: 11.5, color: 'var(--text-faint)' }}>{timeAgo(a.mins)}</div>
              </div>
            </div>
          );
        })}
        {rows.length === 0 && <div style={{ padding: '40px 0', textAlign: 'center', color: 'var(--text-muted)' }}>No activity of this type yet.</div>}
      </div>
    </div>
  );
}
window.Activity = Activity;
