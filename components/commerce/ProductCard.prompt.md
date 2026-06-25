Storefront product tile. Composes `Badge` (stock) and `Button` (add to cart). Shows a CSS pack placeholder unless `image` is given.

```jsx
<ProductCard brand="Dunhill" name="Fine Cut · 20s" price="$54.95" stock="instock" flag="New" onAdd={add} />
<ProductCard brand="Cohiba" name="Robusto Tubo" price="$78.00" unit="per cigar" stock="low" />
<ProductCard brand="Winfield" name="Blue · 25s" price="$49.95" stock="out" />
```

`stock`: `instock | low | out` (out renders a "Sold out" overlay and "Notify me"). Real product photography should replace the placeholder when supplied.
