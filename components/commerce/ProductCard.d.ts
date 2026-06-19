import React from 'react';

export interface ProductCardProps {
  name: string;
  brand: string;
  /** Pre-formatted price string, e.g. "$54.95". */
  price: string;
  /** Optional struck-through original price, e.g. "$74.95". */
  oldPrice?: string;
  /** Optional discount flag, e.g. "26% OFF". */
  discount?: string;
  /** Optional rating 0–5. */
  rating?: number;
  /** Optional review count. */
  ratingCount?: number;
  /** @default "per pack" */
  unit?: string;
  /** @default "instock" */
  stock?: 'instock' | 'low' | 'out';
  /** Optional corner flag, e.g. "New" / "Limited". */
  flag?: string;
  /** Optional product image URL; falls back to a CSS pack placeholder. */
  image?: string;
  /** Accent stripe color on the placeholder pack. */
  accent?: string;
  onAdd?: () => void;
  /** Open the product detail view (fires on visual + title click). */
  onOpen?: () => void;
  style?: React.CSSProperties;
}

/**
 * Storefront product tile — placeholder pack visual,
 * brand/name, stock badge, mono price, add-to-cart.
 * @startingPoint section="Commerce" subtitle="Product tile with stock + price + add to cart" viewport="320x420"
 */
export function ProductCard(props: ProductCardProps): JSX.Element;
