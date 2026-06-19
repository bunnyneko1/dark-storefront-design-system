Icon-only button for navigation and toolbars. Pass the icon as children; add `badge` for a cart count.

```jsx
<IconButton ariaLabel="Search"><i data-lucide="search"></i></IconButton>
<IconButton variant="solid" badge={3} ariaLabel="Cart"><i data-lucide="shopping-bag"></i></IconButton>
```

Variants `ghost | solid | gold`; sizes `sm | md | lg`; `shape="circle"` for round.
