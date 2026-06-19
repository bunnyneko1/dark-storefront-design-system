/* useIsMobile — reactive viewport breakpoint hook. window.useIsMobile(bp=760). */
window.useIsMobile = function (bp) {
  bp = bp || 760;
  const get = () => typeof window !== 'undefined' && window.innerWidth <= bp;
  const [m, setM] = React.useState(get());
  React.useEffect(() => {
    const on = () => setM(get());
    on();
    // The preview iframe can settle to its final width AFTER mount without
    // firing resize/ResizeObserver — poll until the width is stable.
    let last = window.innerWidth, stable = 0;
    const poll = setInterval(() => {
      on();
      if (window.innerWidth === last) { if (++stable >= 4) clearInterval(poll); }
      else { last = window.innerWidth; stable = 0; }
    }, 200);
    const stop = setTimeout(() => clearInterval(poll), 4000);
    const mq = window.matchMedia ? window.matchMedia('(max-width:' + bp + 'px)') : null;
    if (mq && mq.addEventListener) mq.addEventListener('change', on);
    window.addEventListener('resize', on);
    window.addEventListener('load', on);
    return () => {
      clearInterval(poll); clearTimeout(stop);
      window.removeEventListener('resize', on);
      window.removeEventListener('load', on);
      if (mq && mq.removeEventListener) mq.removeEventListener('change', on);
    };
  }, []);
  return m;
};
