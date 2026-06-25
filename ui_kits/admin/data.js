/* Ember Tobacco Co. — Back-office inventory data (mock).
 * Stock is in PACKS. status derived: out (0) / low (<= reorder) / ok.
 * Photos reuse the storefront assets at ../storefront/assets/products/<id>.png */

window.EMBER_STAFF = { name: 'Dana Whitlock', role: 'Floor Lead', initials: 'DW', store: 'Camden High St.' };

window.EMBER_SUPPLIERS = {
  'man': { id: 'man', name: 'Manchester Distribution', lead: '2–3 days' },
  'ssi': { id: 'ssi', name: 'Seven Stars Import (JP)', lead: '10–14 days' },
};

window.EMBER_INVENTORY = [
  { id: 'man-sapphire', sku: 'MAN-SAP-16', brand: 'Manchester', name: 'Sapphire 16mc', cat: 'Regular',  price: 38.95, stock: 240, reorder: 80,  supplier: 'man', accent: 'var(--blue-400)',  image: '../storefront/assets/products/man-sapphire.png' },
  { id: 'man-royal',    sku: 'MAN-ROY-16', brand: 'Manchester', name: 'Royal 16mc',    cat: 'Regular',  price: 38.95, stock: 64,  reorder: 80,  supplier: 'man', accent: 'var(--ember-500)', image: '../storefront/assets/products/man-royal.png' },
  { id: 'man-special',  sku: 'MAN-SPC-10', brand: 'Manchester', name: 'Special 10mc',  cat: 'Regular',  price: 36.95, stock: 18,  reorder: 40,  supplier: 'man', accent: 'var(--gold-500)',  image: '../storefront/assets/products/man-special.png' },
  { id: 'man-green',    sku: 'MAN-GRN-06', brand: 'Manchester', name: 'Green Crush 6mc', cat: 'Menthol', price: 39.95, stock: 12,  reorder: 60,  supplier: 'man', accent: 'var(--green-500)', image: '../storefront/assets/products/man-green.png' },
  { id: 'man-blue',     sku: 'MAN-BLU-06', brand: 'Manchester', name: 'Blue Crush 6mc', cat: 'Menthol', price: 39.95, stock: 310, reorder: 80,  supplier: 'man', accent: 'var(--blue-400)',  image: '../storefront/assets/products/man-blue.png' },
  { id: 'man-light',    sku: 'MAN-LGT-10', brand: 'Manchester', name: 'Light 10mc',    cat: 'Regular',  price: 37.95, stock: 0,   reorder: 40,  supplier: 'man', accent: 'var(--cream-400)', image: '../storefront/assets/products/man-light.png' },
  { id: 'man-double',   sku: 'MAN-DBL-00', brand: 'Manchester', name: 'Double Drive',  cat: 'Menthol', price: 41.95, stock: 150, reorder: 60,  supplier: 'man', accent: 'var(--blue-400)',  image: '../storefront/assets/products/man-double-drive.png' },
  { id: 'sevenstars',   sku: 'SSI-CHR-10', brand: 'Seven Stars', name: 'Charcoal Filter 10', cat: 'Regular', price: 46.95, stock: 26, reorder: 30, supplier: 'ssi', accent: 'var(--gold-400)', image: '../storefront/assets/products/sevenstars.png' },
];

/* Expected/incoming purchase orders for the Receive screen. */
window.EMBER_SHIPMENTS = [
  { id: 'PO-1042', supplier: 'man', status: 'arrived',    eta: 'Today',     lines: [
    { id: 'man-royal', qty: 200 }, { id: 'man-special', qty: 120 }, { id: 'man-light', qty: 240 } ] },
  { id: 'PO-1043', supplier: 'ssi', status: 'in-transit', eta: 'Jun 24',    lines: [
    { id: 'sevenstars', qty: 144 } ] },
  { id: 'PO-1041', supplier: 'man', status: 'in-transit', eta: 'Jun 22',    lines: [
    { id: 'man-green', qty: 180 }, { id: 'man-double', qty: 60 } ] },
];

/* Seed activity log — newest first. mins = minutes ago. */
window.EMBER_ACTIVITY = [
  { id: 'a1', mins: 24,   who: 'Dana Whitlock',  type: 'adjust',  product: 'man-blue',    delta: -6,   note: 'Damaged in transit' },
  { id: 'a2', mins: 96,   who: 'Marcus Reed',    type: 'sale',    product: 'man-royal',   delta: -12,  note: 'POS register 2' },
  { id: 'a3', mins: 140,  who: 'Dana Whitlock',  type: 'receive', product: 'man-blue',    delta: 96,   note: 'PO-1039' },
  { id: 'a4', mins: 280,  who: 'Priya Anand',    type: 'count',   product: 'man-special', delta: -3,   note: 'Cycle count correction' },
  { id: 'a5', mins: 1320, who: 'Marcus Reed',    type: 'receive', product: 'man-double',  delta: 120,  note: 'PO-1038' },
  { id: 'a6', mins: 1490, who: 'Dana Whitlock',  type: 'adjust',  product: 'man-light',   delta: -8,   note: 'Wrote off expired' },
];

/* helpers */
window.stockStatus = function (p) {
  if (p.stock <= 0) return 'out';
  if (p.stock <= p.reorder) return 'low';
  return 'ok';
};
