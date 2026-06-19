# Storefront UI Kit — {{COMPANY_NAME}}

A dark, premium e-commerce storefront template. All brand, product, and copy text is `{{TOKEN}}` placeholders — fill them in to make it your own.

## Run
Open `index.html`. It loads the compiled design-system bundle (`_ds_bundle.js`) plus the kit's own screen components.

## Flow
1. **Hero + showcase** (`TopNav.jsx`, `Showcase.jsx`) — sticky nav with category links and search/account/cart actions; split hero with a fillable image slot; trust strip; brand showcase tiles; promo banners. All image areas are `<image-slot>` drop targets for your own photos.
2. **Browse** (`ProductGrid.jsx`) — "best sellers on sale" with category filter tags and a responsive product grid (sale price, discount %, ratings, stock badge).
3. **Product detail** (`ProductDetail.jsx`) — click any product to open a full view: large image slot, pricing, quantity, details table, and a "you may also like" grid.
4. **Add to cart** — pushes a line item and opens the cart.
5. **Cart** (`CartDrawer.jsx`) — slide-over with line items, quantity steppers, remove, live subtotal, checkout CTA.
6. **Checkout** (`Checkout.jsx`) — contact + shipping + payment form with a sticky order summary.
7. **Confirmation** (`Confirmation.jsx`) — order-placed screen with order number and total.

## Composition
Screens compose bundle primitives via `window.EmberTobaccoCoDesignSystem_3a8c24`:
`Button`, `IconButton`, `Badge`, `Tag`, `Input`, `QuantityStepper`, `ProductCard`.

Icons are Lucide (CDN). Product/banner visuals are CSS placeholders or `<image-slot>` drop targets — fill with real photography. `data.js` holds the sample catalogue.

## Files
| File | Role |
|---|---|
| `index.html` | Orchestrator + mount |
| `App.jsx` | State + view routing (home / product / checkout / confirmation) |
| `TopNav.jsx` | Sticky header |
| `Showcase.jsx` | Hero, trust strip, category tiles, promo banners |
| `Sections.jsx` | Announcement bar, brand story, customer reviews |
| `ProductGrid.jsx` | Filters + product grid |
| `ProductDetail.jsx` | Full product view + related |
| `Checkout.jsx` | Checkout form + order summary |
| `Confirmation.jsx` | Order-placed screen |
| `CartDrawer.jsx` | Slide-over cart |
| `Footer.jsx` | Footer |
| `data.js` | Sample catalogue |
| `icons.js` | Safe Lucide icon wrapper |
| `payment.js` | Zap Pay payment interface (reserved; simulated until keys added) |
| `image-slot.js` | Drop-in image placeholder component |

## Payment integration (Zap Pay)
`payment.js` reserves the hook for the **Zap Pay** redirect gateway. It runs in **simulated** mode (the prototype places orders directly) until you go live:
1. Open `payment.js` and fill in `site`, `key`, and `callbackUrl`, then set `enabled: true`.
2. "Place order" then redirects to Zap Pay with `amount` (cents), `orderId`, `returnUrl`, `callbackUrl`.
3. On return, `?success=true&orderId=…` routes to the confirmation screen; `success=false` shows a retry banner on checkout.

**Backend required:** the guide's `callbackUrl` server-to-server confirmation (amount + orderId) must be received and validated by your backend — a static page can't receive it. Point `callbackUrl` at that endpoint and treat its call as the source of truth for "paid".
