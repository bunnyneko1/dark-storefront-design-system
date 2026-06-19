/* Zap Pay — reserved payment interface (redirect gateway).
 * Prototype runs in SIMULATED mode until you go live:
 *   1) fill in `site`, `key`, and `callbackUrl`
 *   2) set `enabled: true`
 * Then "Place order" redirects to Zap Pay and the return is handled automatically.
 *
 * NOTE: step 6–7 of the guide (the server-to-server callbackUrl GET that confirms
 * amount + orderId) MUST be received and validated by a BACKEND — a static page
 * cannot receive it. Point `callbackUrl` at that backend endpoint. */
window.ZapPay = (function () {
  const config = {
    enabled: false,                          // ← set true once site + key are provided
    endpoint: 'https://zap-payments.web.app',
    site: 'YOUR_SITE_ID',                    // ← from Zap Pay
    key: 'YOUR_API_KEY',                     // ← from Zap Pay
    callbackUrl: '',                         // ← your backend confirmation endpoint
  };

  // Build the redirect URL per the integration guide.
  function buildUrl({ amountCents, orderId, returnUrl }) {
    const p = new URLSearchParams({
      site: config.site,
      key: config.key,
      amount: String(amountCents),           // amount in cents, e.g. 2000 = $20.00
      orderId,
      returnUrl,
      callbackUrl: config.callbackUrl,
    });
    return config.endpoint + '/?' + p.toString();
  }

  // Redirect the browser to Zap Pay to begin a payment.
  function startPayment({ amountAud, orderId, returnUrl }) {
    const url = buildUrl({
      amountCents: Math.round(amountAud * 100),
      orderId,
      returnUrl: returnUrl || (location.origin + location.pathname),
    });
    window.location.href = url;
  }

  // Read the success/orderId params Zap Pay appends on return. null if not a return.
  function readReturn() {
    const q = new URLSearchParams(location.search);
    if (!q.has('success')) return null;
    return { success: q.get('success') === 'true', orderId: q.get('orderId') };
  }

  // Is the live integration configured + enabled?
  function isLive() {
    return config.enabled && config.site !== 'YOUR_SITE_ID' && !!config.key;
  }

  return { config, buildUrl, startPayment, readReturn, isLive };
})();
