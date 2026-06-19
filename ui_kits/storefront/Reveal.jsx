/* Reveal — scroll-into-view wrapper. Fades + rises its children once when
   they enter the viewport. Respects prefers-reduced-motion (shows instantly). */
function Reveal({ children, y = 26, delay = 0 }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window) || !el) { setShown(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { setShown(true); io.disconnect(); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : `translateY(${y}px)`,
      transition: `opacity 0.7s cubic-bezier(0.22,0.61,0.36,1) ${delay}ms, transform 0.7s cubic-bezier(0.22,0.61,0.36,1) ${delay}ms`,
      willChange: 'opacity, transform',
    }}>
      {children}
    </div>
  );
}
window.Reveal = Reveal;
