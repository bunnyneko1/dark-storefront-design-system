/* Safe Lucide icon for React: React owns only an empty <span>; the <i data-lucide>
   is created imperatively inside it and swapped to <svg> by lucide — so re-renders
   never collide with reconciliation (no removeChild crashes). */
window.Icon = function Icon({ n, s = 18, color }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', n);
    el.appendChild(i);
    if (window.lucide) window.lucide.createIcons({ attrs: { width: s, height: s } });
  }, [n, s]);
  return React.createElement('span', { ref, style: { display: 'inline-flex', width: s, height: s, color: color || 'currentColor' } });
};
