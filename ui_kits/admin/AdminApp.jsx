/* App — back-office shell: state, routing, stock mutations, activity log. */
function AdminApp() {
  const [view, setView] = React.useState('dashboard');
  const [query, setQuery] = React.useState('');
  const [inventory, setInventory] = React.useState(() => window.EMBER_INVENTORY.map(p => ({ ...p })));
  const [activity, setActivity] = React.useState(() => window.EMBER_ACTIVITY.map(a => ({ ...a })));
  const [shipments] = React.useState(() => window.EMBER_SHIPMENTS.map(s => ({ ...s })));
  const [doneIds, setDoneIds] = React.useState([]);
  const [target, setTarget] = React.useState(null); // product in AdjustPanel
  const [flashId, setFlashId] = React.useState(null);
  const [toast, setToast] = React.useState(null);
  const Ic = window.Icon;
  const staff = window.EMBER_STAFF;

  const flash = (id) => { setFlashId(id); setTimeout(() => setFlashId(c => c === id ? null : c), 1000); };
  const notify = (msg) => { setToast(msg); clearTimeout(window.__t); window.__t = setTimeout(() => setToast(null), 2600); };
  const logIds = React.useRef(1000);

  const applyDelta = (id, delta) => setInventory(inv => inv.map(p => p.id === id ? { ...p, stock: Math.max(0, p.stock + delta) } : p));
  const addLog = (entries) => setActivity(a => [...entries.map(e => ({ id: 'n' + (++logIds.current), mins: 0, who: staff.name, ...e })), ...a]);

  // Quick inline ±1 from the table
  const onAdjust = (p, delta, note) => {
    if (delta < 0 && p.stock <= 0) return;
    applyDelta(p.id, delta);
    addLog([{ type: delta > 0 ? 'count' : 'adjust', product: p.id, delta, note }]);
    flash(p.id);
  };

  // From the slide-over panel
  const onApply = (p, mode, delta, note) => {
    applyDelta(p.id, delta);
    addLog([{ type: mode === 'receive' ? 'receive' : mode === 'set' ? 'count' : 'adjust', product: p.id, delta, note }]);
    setTarget(null);
    flash(p.id);
    notify((delta > 0 ? '+' : '') + delta + ' · ' + p.brand + ' ' + p.name + ' now ' + Math.max(0, p.stock + delta) + ' packs');
  };

  // Receive a whole PO
  const onReceivePO = (s, lineCounts) => {
    const entries = [];
    let total = 0;
    s.lines.forEach(l => {
      const qty = lineCounts[l.id] ?? l.qty;
      if (qty > 0) { applyDelta(l.id, qty); entries.push({ type: 'receive', product: l.id, delta: qty, note: s.id }); total += qty; }
    });
    if (entries.length) addLog(entries);
    setDoneIds(d => [...d, s.id]);
    notify('Received ' + s.id + ' · +' + total + ' packs checked in');
  };

  const lowCount = inventory.filter(p => window.stockStatus(p) !== 'ok').length;
  const arrivedCount = shipments.filter(s => s.status === 'arrived' && !doneIds.includes(s.id)).length;

  const meta = {
    dashboard: { title: 'Dashboard', subtitle: 'Good morning, ' + staff.name.split(' ')[0] + ' — here\u2019s where stock stands today.', search: false },
    inventory: { title: 'Inventory', subtitle: 'Live pack counts across every SKU. Adjust inline or open a product to restock.', search: true },
    receive:   { title: 'Receive shipments', subtitle: 'Check in arriving purchase orders to update stock in bulk.', search: false },
    activity:  { title: 'Activity log', subtitle: 'Every stock movement, newest first.', search: false },
  }[view];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-page)' }}>
      <Sidebar view={view} onNav={setView} lowCount={lowCount} arrivedCount={arrivedCount} />
      <main className="ember-scroll" style={{ flex: 1, minWidth: 0, height: '100vh', overflowY: 'auto' }}>
        <Topbar title={meta.title} subtitle={meta.subtitle} query={meta.search ? query : null} onQuery={meta.search ? setQuery : null} />
        {view === 'dashboard' && <Dashboard inventory={inventory} activity={activity} shipments={shipments.filter(s => !doneIds.includes(s.id))} onRestock={setTarget} onNav={setView} />}
        {view === 'inventory' && <Inventory inventory={inventory} query={query} onRestock={setTarget} onAdjust={onAdjust} flashId={flashId} />}
        {view === 'receive' && <Receive shipments={shipments} inventory={inventory} doneIds={doneIds} onReceivePO={onReceivePO} />}
        {view === 'activity' && <Activity activity={activity} inventory={inventory} />}
      </main>

      {target && <AdjustPanel product={inventory.find(p => p.id === target.id) || target} onClose={() => setTarget(null)} onApply={onApply} />}

      {toast && (
        <div className="fade-in" style={{ position: 'fixed', bottom: 26, left: '50%', transform: 'translateX(-50%)', zIndex: 95, display: 'flex', alignItems: 'center', gap: 10, padding: '13px 20px', background: 'var(--surface-raised)', border: '1px solid var(--line-gold)', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-lg)', fontSize: 13.5, color: 'var(--text-body)' }}>
          <Ic n="check-circle" s={17} color="var(--gold-300)" /> {toast}
        </div>
      )}
    </div>
  );
}
window.AdminApp = AdminApp;
