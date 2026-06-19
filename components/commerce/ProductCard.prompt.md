Storefront product tile. Composes `Badge` (stock) and `Button` (add to cart). Shows a CSS pack placeholder unless `image` is given.

```jsx
<ProductCard brand="{{BRAND_NAME}}" name="{{PRODUCT_NAME}}" price="$0.00" stock="instock" flag="{{FLAG}}" onAdd={add} />
<ProductCard brand="{{BRAND_NAME}}" name="{{PRODUCT_NAME}}" price="$0.00" unit="{{UNIT}}" stock="low" />
<ProductCard brand="{{BRAND_NAME}}" name="{{PRODUCT_NAME}}" price="$0.00" stock="out" />
```

`stock`: `instock | low | out` (out renders a "Sold out" overlay and "Notify me"). Real product photography should replace the placeholder when supplied.
