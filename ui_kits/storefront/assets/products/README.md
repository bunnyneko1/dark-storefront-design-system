# Product images

Drop product photos here, then wire them up in `../data.js` by adding an
`image` field to a product. Name each file after the product's `id`:

| Product id | Filename |
|---|---|
| `product-1` | `product-1.png` |
| `product-2` | `product-2.png` |
| `product-3` | `product-3.png` |
| `…` | `…` |

**Specs:** square (1:1), ~1000×1000px, PNG or JPG. Subject centred on a dark or
transparent background to match the dark theme.

The filename stem should match each product's `id` in `data.js`, so wiring is:
`image: 'assets/products/<id>.png'`. With no `image`, the ProductCard renders a
built-in text/pack placeholder.

You can also drag an image straight onto the image slot on a product's detail
page — no file naming needed.
