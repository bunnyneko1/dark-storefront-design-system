/* Topbar — page title, global search, staff identity. */
function Topbar({ title, subtitle, query, onQuery }) {
  const Ic = window.Icon;
  const s = window.EMBER_STAFF;
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 20, display: 'flex', alignItems: 'center', gap: 20, padding: '18px 32px', background: 'rgba(14,12,11,0.86)', backdropFilter: 'blur(14px)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--text-strong)' }}>{title}</h1>
        {subtitle && <p style={{ margin: '3px 0 0', fontSize: 13, color: 'var(--text-muted)' }}>{subtitle}</p>}
      </div>

      {onQuery && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, width: 280, padding: '0 14px', height: 42, background: 'var(--surface-inset)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
          <Ic n="search" s={16} color="var(--text-faint)" />
          <input value={query} onChange={e => onQuery(e.target.value)} placeholder="Search SKU or name…" style={{ flex: 1, minWidth: 0, background: 'none', border: 'none', outline: 'none', color: 'var(--text-strong)', fontFamily: 'var(--font-body)', fontSize: 14 }} />
          {query && <button onClick={() => onQuery('')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-faint)', display: 'inline-flex', padding: 0 }}><Ic n="x" s={15} /></button>}
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingLeft: 8, borderLeft: '1px solid var(--line)' }}>
        <div style={{ textAlign: 'right', lineHeight: 1.3 }}>
          <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--text-strong)' }}>{s.name}</div>
          <div style={{ fontFamily: 'var(--font-label)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-400)' }}>{s.role} · {s.store}</div>
        </div>
        <div style={{ width: 40, height: 40, flex: 'none', borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(150deg, var(--gold-500), var(--ember-500))', color: 'var(--ink-950)', fontWeight: 700, fontSize: 14, letterSpacing: '0.02em' }}>{s.initials}</div>
      </div>
    </header>
  );
}
window.Topbar = Topbar;
