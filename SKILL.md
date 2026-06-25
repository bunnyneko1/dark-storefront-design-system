---
name: ember-tobacco-design
description: Use this skill to generate well-branded interfaces and assets for Ember Tobacco Co. (a dark, premium Australian tobacco shop e-commerce brand), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Tokens / global CSS:** `styles.css` (links every token file). Link this one file.
- **Namespace:** `window.EmberTobaccoCoDesignSystem_3a8c24.*` after loading `_ds_bundle.js`.
- **Components:** `Button`, `IconButton`, `Badge`, `Tag`, `Input`, `QuantityStepper`, `ProductCard`.
- **UI kit:** `ui_kits/storefront/` — full storefront (hero → browse → cart).
- **Foundations:** `guidelines/*.html` specimen cards; full guidance in `README.md`.
- **Icons:** Lucide (CDN). **Fonts:** Bodoni Moda / Hanken Grotesk / JetBrains Mono (Google Fonts).
- **Images:** drop onto `<image-slot>` areas, or pass `ProductCard image` / `data.js` image fields.

## Non-negotiables
- Dark, warm-charcoal surfaces; cream text (never pure white); brass + ember accents only.
- Adult, factual voice. No hype, slang, or emoji.
