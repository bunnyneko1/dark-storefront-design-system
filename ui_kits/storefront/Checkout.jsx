/* Checkout — contact + shipping + payment form with a sticky order summary. */
function Checkout({ items, onBack, onPlace, payError }) {
  const { Button, Input } = window.EmberTobaccoCoDesignSystem_3a8c24;
  const Icon = window.Icon;
  const isMobile = window.useIsMobile();
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = items.length ? 12.95 : 0;
  const total = subtotal + shipping;

  // —— Form state + validation ——
  const [form, setForm] = React.useState({ email: '', phone: '', name: '', street: '', suburb: '', state: '', postcode: '', card: '', expiry: '', cvc: '' });
  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState({});
  const digits = (s) => (s || '').replace(/[^0-9]/g, '');

  const validators = {
    email: (v) => !v.trim() ? 'Email is required' : (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Enter a valid email'),
    phone: (v) => !v.trim() ? 'Phone is required' : (digits(v).length >= 8 && digits(v).length <= 12 ? '' : 'Enter a valid phone number'),
    name: (v) => v.trim().length >= 2 ? '' : 'Full name is required',
    street: (v) => v.trim().length >= 4 ? '' : 'Street address is required',
    suburb: (v) => v.trim() ? '' : 'Required',
    state: (v) => v.trim() ? '' : 'Required',
    postcode: (v) => /^\d{4}$/.test(v.trim()) ? '' : '4 digits',
    card: (v) => digits(v).length >= 15 && digits(v).length <= 16 ? '' : 'Enter a valid card number',
    expiry: (v) => /^(0[1-9]|1[0-2])\s*\/\s*\d{2}$/.test(v.trim()) ? '' : 'MM / YY',
    cvc: (v) => /^\d{3,4}$/.test(v.trim()) ? '' : '3–4 digits',
  };

  const fmt = {
    card: (v) => digits(v).slice(0, 16).replace(/(.{4})/g, '$1 ').trim(),
    expiry: (v) => { const d = digits(v).slice(0, 4); return d.length >= 3 ? d.slice(0, 2) + ' / ' + d.slice(2) : d; },
    cvc: (v) => digits(v).slice(0, 4),
    postcode: (v) => digits(v).slice(0, 4),
  };

  const onField = (key) => (e) => {
    let v = e.target.value;
    if (fmt[key]) v = fmt[key](v);
    setForm(f => ({ ...f, [key]: v }));
    if (touched[key]) setErrors(er => ({ ...er, [key]: validators[key](v) }));
  };
  const onBlurField = (key) => () => {
    setTouched(t => ({ ...t, [key]: true }));
    setErrors(er => ({ ...er, [key]: validators[key](form[key]) }));
  };
  const fieldProps = (key) => ({
    value: form[key], onChange: onField(key), onBlur: onBlurField(key),
    error: touched[key] ? errors[key] : '',
  });

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    Object.keys(validators).forEach(k => { const msg = validators[k](form[k]); if (msg) next[k] = msg; });
    setErrors(next);
    setTouched(Object.keys(validators).reduce((a, k) => (a[k] = true, a), {}));
    if (Object.keys(next).length === 0) { onPlace(total); }
    else {
      const first = document.querySelector('[data-err="1"]');
      first && first.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const Field = ({ children }) => <div style={{ marginBottom: 16 }}>{children}</div>;
  const Section = ({ step, title, children }) => (
    <div style={{ marginBottom: 30 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <span style={{ width: 26, height: 26, borderRadius: '50%', border: '1px solid var(--line-gold)', color: 'var(--gold-300)', fontFamily: 'var(--font-mono)', fontSize: 13, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{step}</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500, color: 'var(--text-strong)', margin: 0 }}>{title}</h2>
      </div>
      {children}
    </div>
  );

  return (
    <main style={{ maxWidth: 1080, margin: '0 auto', padding: '28px var(--gutter) 0' }}>
      <button onClick={onBack} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontSize: 14, padding: '8px 0', marginBottom: 14 }}>
        <Icon n="arrow-left" s={16} /> Continue shopping
      </button>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.4vw, 40px)', fontWeight: 500, color: 'var(--text-strong)', margin: '0 0 28px', letterSpacing: '-0.015em' }}>Checkout</h1>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1.4fr) minmax(0, 1fr)', gap: 40, alignItems: 'start' }}>
        {/* Form */}
        <form onSubmit={submit} noValidate>
          <Section step="1" title="Contact">
            <Field><Input label="Email" type="email" placeholder="you@example.com" {...fieldProps('email')} /></Field>
            <Field><Input label="Phone" type="tel" placeholder="04xx xxx xxx" {...fieldProps('phone')} /></Field>
          </Section>
          <Section step="2" title="Shipping address">
            <Field><Input label="Full name" placeholder="Jordan Bishop" {...fieldProps('name')} /></Field>
            <Field><Input label="Street address" placeholder="12 Flinders Lane" {...fieldProps('street')} /></Field>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 12, marginBottom: 16 }}>
              <Input label="Suburb" placeholder="Melbourne" {...fieldProps('suburb')} />
              <Input label="State" placeholder="VIC" {...fieldProps('state')} />
              <Input label="Postcode" placeholder="3000" inputMode="numeric" {...fieldProps('postcode')} />
            </div>
          </Section>
          <Section step="3" title="Payment">
            {payError && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', marginBottom: 16, border: '1px solid rgba(208,106,90,0.4)', background: 'rgba(166,59,43,0.12)', borderRadius: 'var(--radius-sm)' }}>
                <Icon n="alert-circle" s={16} color="var(--red-300)" />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--red-300)' }}>Payment was cancelled or failed. Please try again.</span>
              </div>
            )}
            <Field><Input label="Card number" placeholder="1234 5678 9012 3456" inputMode="numeric" iconLeft={<Icon n="credit-card" s={16} />} {...fieldProps('card')} /></Field>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <Input label="Expiry" placeholder="MM / YY" inputMode="numeric" {...fieldProps('expiry')} />
              <Input label="CVC" placeholder="123" inputMode="numeric" {...fieldProps('cvc')} />
            </div>
            <p style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-faint)', margin: '12px 0 0' }}>
              <Icon n="lock" s={13} /> Secured by Zap Pay · you&rsquo;ll confirm payment on the next step
            </p>
          </Section>
          <Button type="submit" variant="primary" size="lg" fullWidth disabled={items.length === 0}>Place order</Button>
        </form>

        {/* Summary */}
        <aside style={{ position: isMobile ? 'static' : 'sticky', top: 96, order: isMobile ? -1 : 0, border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', background: 'var(--surface-card)', overflow: 'hidden' }}>
          <div style={{ padding: '18px 22px', borderBottom: '1px solid var(--line)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 500, color: 'var(--text-strong)', margin: 0 }}>Order summary</h3>
          </div>
          <div style={{ padding: '6px 22px', maxHeight: 280, overflowY: 'auto' }}>
            {items.length === 0 ? (
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-faint)', padding: '24px 0' }}>Your cart is empty.</p>
            ) : items.map(i => (
              <div key={i.id} style={{ display: 'flex', gap: 12, padding: '14px 0', borderBottom: '1px solid var(--line)' }}>
                <div style={{ width: 40, height: 50, flex: 'none', borderRadius: 'var(--radius-xs)', overflow: 'hidden', background: 'linear-gradient(160deg, var(--ink-600), var(--ink-850))', border: '1px solid var(--border)', display: 'flex', alignItems: 'flex-end', padding: i.image ? 0 : 5 }}>
                  {i.image ? <img src={i.image} alt={i.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span style={{ width: 14, height: 2.5, background: i.accent, borderRadius: 2 }} />}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-body)', margin: 0 }}>{i.brand} {i.name}</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-faint)', margin: '3px 0 0' }}>Qty {i.qty}</p>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13.5, fontWeight: 600, color: 'var(--gold-300)', flexShrink: 0 }}></span>
              </div>
            ))}
          </div>
          <div style={{ padding: '16px 22px', background: 'var(--surface-inset)' }}>
            {[['Subtotal', subtotal], ['Shipping', shipping]].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-muted)' }}>{k}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13.5, color: 'var(--text-body)' }}></span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingTop: 12, marginTop: 4, borderTop: '1px solid var(--line)' }}>
              <span style={{ fontFamily: 'var(--font-label)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Total</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 24, fontWeight: 600, color: 'var(--text-strong)' }}></span>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-faint)', margin: '12px 0 0' }}>Includes GST.</p>
          </div>
        </aside>
      </div>
      <div style={{ height: 90 }} />
    </main>
  );
}
window.Checkout = Checkout;
