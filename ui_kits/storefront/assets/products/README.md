# Product images — Manchester range

Drop the official product photos here using these exact filenames; the storefront
will pick them up once `image` is wired in `../data.js`.

| Product | Filename |
|---|---|
| Manchester Sapphire 16mc | `man-sapphire.png` |
| Manchester Royal 16mc | `man-royal.png` |
| Manchester Special 10mc | `man-special.png` |
| Manchester Green Crush 6mc | `man-green.png` |
| Manchester Blue Crush 6mc | `man-blue.png` |
| Manchester Light 10mc | `man-light.png` |

**Specs:** square (1:1), ~1000×1000px, PNG or JPG. Pack centred on a dark or
transparent background to match the dark theme.

The filename stem matches each product's `id` in `data.js`, so wiring is:
`image: 'assets/products/<id>.png'`.

You can also just drag an image straight onto the image slot on a product's
detail page — no file naming needed.
