/* Sidebar — back-office primary nav. */
function Sidebar({ view, onNav, lowCount, arrivedCount }) {
  const Ic = window.Icon;
  const items = [
    { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
    { id: 'inventory', label: 'Inventory', icon: 'package', badge: lowCount },
    { id: 'receive',   label: 'Receive',   icon: 'truck',   badge: arrivedCount, badgeTone: 'gold' },
    { id: 'activity',  label: 'Activity',  icon: 'history' },
  ];
  return (
    <aside style={{ width: 248, flex: 'none', height: '100vh', position: 'sticky', top: 0, background: 'var(--ink-900)', borderRight: '1px solid var(--line)', display: 'flex', flexDirection: 'column' }}>
      {/* Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '22px 22px 20px', borderBottom: '1px solid var(--line)' }}>
        <svg viewBox="0 0 64 64" width="32" height="32"><path d="M32 8 L52 32 L32 56 L12 32 Z" fill="none" stroke="#CDA85B" strokeWidth="1.8"/><path d="M32 18 L44 32 L32 46 L20 32 Z" fill="#0E0C0B"/><circle cx="32" cy="32" r="5" fill="#A63B2B"/><circle cx="32" cy="32" r="2.2" fill="#E3C77E"/></svg>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 600, letterSpacing: '0.05em', color: 'var(--text-strong)' }}>EMBER</span>
          <span style={{ fontFamily: 'var(--font-label)', fontSize: 7.5, fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-400)', marginTop: 3 }}>Back Office</span>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontFamily: 'var(--font-label)', fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-faint)', padding: '6px 12px 8px' }}>Operations</span>
        {items.map(it => {
          const on = view === it.id;
          return (
            <button key={it.id} onClick={() => onNav(it.id)} style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', padding: '10px 12px', borderRadius: 'var(--radius-md)', border: 'none', cursor: 'pointer', textAlign: 'left',
              background: on ? 'var(--accent-soft)' : 'transparent',
              color: on ? 'var(--gold-200)' : 'var(--text-muted)',
              boxShadow: on ? 'inset 2px 0 0 var(--gold-400)' : 'none', transition: 'background 0.14s, color 0.14s' }}
              onMouseEnter={e => { if (!on) e.currentTarget.style.background = 'var(--surface-raised)'; }}
              onMouseLeave={e => { if (!on) e.currentTarget.style.background = 'transparent'; }}>
              <Ic n={it.icon} s={18} />
              <span style={{ flex: 1, fontSize: 14.5, fontWeight: on ? 600 : 500 }}>{it.label}</span>
              {it.badge > 0 && (
                <span style={{ minWidth: 20, height: 20, padding: '0 6px', borderRadius: 999, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600,
                  background: it.badgeTone === 'gold' ? 'var(--gold-400)' : 'rgba(201,162,39,0.18)',
                  color: it.badgeTone === 'gold' ? 'var(--ink-950)' : 'var(--amber-500)' }}>{it.badge}</span>
              )}
            </button>
          );
        })}
      </nav>

      <div style={{ marginTop: 'auto', padding: 16, borderTop: '1px solid var(--line)' }}>
        <a href="../storefront/index.html" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 'var(--radius-md)', color: 'var(--text-faint)', textDecoration: 'none', fontSize: 13 }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--text-body)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-faint)'}>
          <Ic n="external-link" s={15} /><span>View storefront</span>
        </a>
      </div>
    </aside>
  );
}
window.Sidebar = Sidebar;
