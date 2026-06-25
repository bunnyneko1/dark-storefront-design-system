/* AdjustPanel — slide-over to receive, remove, or recount a single product. */
function AdjustPanel({ product, onClose, onApply }) {
  const Ic = window.Icon;
  const { Button, Badge } = window.EmberTobaccoCoDesignSystem_3a8c24;
  const { Thumb, STATUS } = window.AdminUI;
  const [mode, setMode] = React.useState('receive'); // receive | remove | set
  const [qty, setQty] = React.useState(48);
  const [reason, setReason] = React.useState('Damaged');

  React.useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  React.useEffect(() => { setQty(mode === 'set' ? product.stock : mode === 'remove' ? 6 : 48); }, [mode]);

  if (!product) return null;
  const cur = product.stock;
  const next = mode === 'receive' ? cur + qty : mode === 'remove' ? Math.max(0, cur - qty) : qty;
  const delta = next - cur;
  const nextStatus = next <= 0 ? 'out' : next <= product.reorder ? 'low' : 'ok';

  const modes = [
    { id: 'receive', label: 'Receive', icon: 'package-plus' },
    { id: 'remove', label: 'Remove', icon: 'package-minus' },
    { id: 'set', label: 'Set count', icon: 'clipboard-check' },
  ];
  const chips = mode === 'receive' ? [24, 48, 120, 240] : mode === 'remove' ? [1, 3, 6, 12] : [product.reorder, product.reorder * 2];
  const reasons = mode === 'remove'
    ? ['Damaged', 'Expired', 'Theft / loss', 'Sample / staff', 'Other']
    : ['Cycle count correction', 'Found stock', 'System error', 'Other'];

  const labelCss = { fontFamily: 'var(--font-label)', fontSize: 10.5, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' };
  const showReason = mode !== 'receive';

  const apply = () => {
    if (delta === 0) { onClose(); return; }
    const note = mode === 'receive' ? 'Shipment received' : reason;
    onApply(product, mode, delta, note);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 80 }}>
      <div className="fade-in" onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'var(--surface-overlay)', backdropFilter: 'blur(4px)' }} />
      <aside className="panel-in" style={{ position: 'absolute', top: 0, right: 0, height: '100%', width: 'min(440px, 94vw)', background: 'var(--surface-card)', borderLeft: '1px solid var(--line-gold)', boxShadow: 'var(--shadow-overlay)', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '20px 22px', borderBottom: '1px solid var(--line)' }}>
          <Thumb p={product} size={44} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, color: 'var(--text-strong)' }}>{product.brand} {product.name}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-faint)' }}>{product.sku}</div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-faint)', display: 'inline-flex', padding: 4 }}><Ic n="x" s={20} /></button>
        </div>

        <div className="ember-scroll" style={{ flex: 1, overflowY: 'auto', padding: 22, display: 'flex', flexDirection: 'column', gap: 22 }}>
          {/* Current */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', background: 'var(--surface-inset)', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)' }}>
            <span style={labelCss}>On hand now</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 20, fontWeight: 600, color: STATUS[window.stockStatus(product)].color }}>{cur}</span>
              <Badge tone={STATUS[window.stockStatus(product)].tone}>{STATUS[window.stockStatus(product)].label}</Badge>
            </span>
          </div>

          {/* Mode segmented */}
          <div>
            <div style={{ ...labelCss, marginBottom: 8 }}>Action</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6, padding: 4, background: 'var(--surface-inset)', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)' }}>
              {modes.map(m => (
                <button key={m.id} onClick={() => setMode(m.id)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, padding: '10px 4px', borderRadius: 'var(--radius-sm)', border: 'none', cursor: 'pointer',
                  background: mode === m.id ? 'var(--accent-soft)' : 'transparent', color: mode === m.id ? 'var(--gold-200)' : 'var(--text-muted)', boxShadow: mode === m.id ? 'inset 0 0 0 1px var(--line-gold)' : 'none' }}>
                  <Ic n={m.icon} s={18} /><span style={{ fontSize: 12.5, fontWeight: 600 }}>{m.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Qty */}
          <div>
            <div style={{ ...labelCss, marginBottom: 8 }}>{mode === 'set' ? 'New counted total' : mode === 'remove' ? 'Packs to remove' : 'Packs received'}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <button onClick={() => setQty(q => Math.max(0, q - 1))} style={{ width: 44, height: 44, flex: 'none', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--surface-inset)', color: 'var(--text-body)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Ic n="minus" s={18} /></button>
              <input type="number" value={qty} min={0} onChange={e => setQty(Math.max(0, parseInt(e.target.value || '0', 10)))} style={{ flex: 1, height: 44, textAlign: 'center', background: 'var(--surface-inset)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', color: 'var(--text-strong)', fontFamily: 'var(--font-mono)', fontSize: 20, fontWeight: 600, outline: 'none' }} />
              <button onClick={() => setQty(q => q + 1)} style={{ width: 44, height: 44, flex: 'none', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--surface-inset)', color: 'var(--text-body)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Ic n="plus" s={18} /></button>
            </div>
            <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
              {chips.map(c => (
                <button key={c} onClick={() => setQty(c)} style={{ padding: '6px 12px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border)', background: 'transparent', color: 'var(--text-muted)', cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: 12.5 }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--line-gold)'; e.currentTarget.style.color = 'var(--gold-300)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}>
                  {mode === 'set' ? '' : mode === 'remove' ? '−' : '+'}{c}
                </button>
              ))}
            </div>
          </div>

          {/* Reason */}
          {showReason && (
            <div>
              <div style={{ ...labelCss, marginBottom: 8 }}>Reason</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {reasons.map(r => (
                  <button key={r} onClick={() => setReason(r)} style={{ padding: '8px 13px', borderRadius: 'var(--radius-pill)', border: '1px solid ' + (reason === r ? 'var(--line-gold)' : 'var(--border)'), background: reason === r ? 'var(--accent-soft)' : 'transparent', color: reason === r ? 'var(--gold-200)' : 'var(--text-muted)', cursor: 'pointer', fontSize: 13 }}>{r}</button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer preview + apply */}
        <div style={{ padding: 22, borderTop: '1px solid var(--line)', background: 'var(--ink-850)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <span style={labelCss}>New on-hand</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 15, color: 'var(--text-faint)' }}>{cur}</span>
              <Ic n="arrow-right" s={15} color="var(--text-faint)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 24, fontWeight: 700, color: STATUS[nextStatus].color }}>{next}</span>
              {delta !== 0 && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, color: delta > 0 ? 'var(--in-stock)' : 'var(--ember-300)' }}>({delta > 0 ? '+' : ''}{delta})</span>}
            </span>
          </div>
          <Button variant={mode === 'remove' ? 'ember' : 'primary'} fullWidth disabled={delta === 0}
            iconLeft={<Ic n={mode === 'receive' ? 'package-plus' : mode === 'remove' ? 'package-minus' : 'check'} s={17} />}
            onClick={apply}>
            {mode === 'receive' ? 'Receive ' + qty + ' packs' : mode === 'remove' ? 'Remove ' + qty + ' packs' : 'Set count to ' + qty}
          </Button>
        </div>
      </aside>
    </div>
  );
}
window.AdjustPanel = AdjustPanel;
