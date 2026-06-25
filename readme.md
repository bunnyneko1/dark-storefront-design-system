# Ember Tobacco Co. — Design System

A dark, premium design system for **Ember Tobacco Co.**, a fictional Australian tobacco shop e-commerce storefront. Warm near-black charcoal lit by brass/gold and oxblood ember, didone display type, restrained near-sharp geometry. Built for a clean, professional shopping experience.

> **Provenance:** No codebase, Figma, or brand assets were supplied — this system was designed from scratch against the brief: *"a modern e-commerce website for a tobacco shop in Australia; clean and professional; navigation bar, product listing with cigarette brands, and a cart; dark premium colour scheme."* Brand name, palette, type, logo, and copy are all original. Brand names used in the sample catalogue (Dunhill, Winfield, etc.) are placeholders for layout only.

---

## Index — what's in this project

| Path | Purpose |
|---|---|
| `styles.css` | Root entry — `@import`s every token + font file. Consumers link this one file. |
| `tokens/colors.css` | Charcoal/cream/brass/ember ramps + semantic aliases |
| `tokens/typography.css` | Font families, scale, weights, tracking |
| `tokens/spacing.css` | 4px grid, layout vars |
| `tokens/effects.css` | Radii, borders, shadows, glow, motion |
| `tokens/fonts.css` | Webfont `@import` (Google Fonts — see Substitutions) |
| `assets/` | Logo wordmark + ember monogram (SVG) |
| `guidelines/*.html` | Foundation specimen cards (Design System tab) |
| `components/core/` | `Button`, `IconButton`, `Badge`, `Tag` |
| `components/forms/` | `Input`, `QuantityStepper` |
| `components/commerce/` | `ProductCard` |
| `ui_kits/storefront/` | Full storefront recreation (hero → browse → cart) |
| `SKILL.md` | Agent Skills manifest |

**Namespace:** components are exposed at `window.EmberTobaccoCoDesignSystem_3a8c24.*`.

---

## CONTENT FUNDAMENTALS

**Vibe.** Composed, adult, understated luxury — a discreet specialist shop, not a discount outlet. The tone is that of a fine spirits or cigar merchant: confident, factual, quiet.

**Person.** Address the customer as **you**. The shop refers to itself as **Ember** or **we**. Never first-person singular.

**Casing.** Sentence case for headings and body. Product *names* may use the display serif. Eyebrows, button labels, and micro-labels are UPPERCASE with wide tracking (0.14–0.26em). Never shout in body copy with all-caps.

**Tone rules.**
- Plain, factual product copy — brand, variant, pack size, price. No adjectives like "amazing".
- No hype, slang, or emoji.
- Prices shown with GST; "$54.95", "per pack", "per cigar", "per pouch". Sale prices show a struck-through original and a discount badge.

**Examples.**
- Hero: *"Premium tobacco, delivered discreetly across Australia."*
- Sub: *"A curated range of cigarettes, cigars and rolling tobacco from trusted brands — fast, discreet shipping nationwide."*
- Trust: *"Discreet, secure checkout."* / *"Fast nationwide shipping."* / *"7-day satisfaction guarantee."*

---

## VISUAL FOUNDATIONS

**Colour.** A warm near-black world. Page is `--ink-900 #0E0C0B`; cards `--ink-800`; raised surfaces `--ink-700`. Text is a **cream/parchment** ramp (`#F6F1E7` strong → `#948A77` muted) — never pure white. The single accent is **brass/gold** (`--gold-400 #CDA85B`), used sparingly for primary actions, prices, eyebrows, focus, and hairline emphasis. The secondary heat is **oxblood ember** (`--ember-500 #8C2F22`) for the monogram's lit tip, the secondary button, and discount badges. Status: muted sage in-stock, amber low-stock, soft red out-of-stock. The palette is deliberately *restrained* — two accents, lots of charcoal.

**Imagery.** Product and banner visuals are CSS placeholders or `<image-slot>` drop targets — real photography drops in via the slot or `ProductCard image`. Photography direction when supplied: low-key, warm, moody; product on dark; shallow depth; no people, no lifestyle. Backgrounds use subtle **radial gradients** from `--ink-700` to `--ink-900` — never bright or multi-hue gradients. Image-slot overlays use a bottom-up dark gradient for label legibility.

**Type.** Display = **Bodoni Moda** (high-contrast didone) set tight (-0.02em) for headings and product names; the contrast reads as quiet luxury. Body/UI = **Hanken Grotesk**, relaxed line-height. Mono = **JetBrains Mono**, tabular, for prices, SKUs, counts. Labels = Hanken uppercase, tracked 0.14–0.26em.

**Spacing & layout.** 4px base grid; `--container-max 1280px`; `--nav-height 76px`. Generous section padding (40–64px). Sticky translucent nav (blur 14px). Product grid is `auto-fill minmax(240px, 1fr)`; showcase tiles and banners use fixed column counts.

**Corners.** Near-sharp — `--radius-sm 3px` for buttons/cards/inputs, up to `--radius-lg 8px` for modals/hero/banners. Pills only for tags and badges. The restraint signals premium.

**Borders.** Hairlines in low-opacity cream (`--line` 9%, `--line-strong` 16%) or brass (`--line-gold` 38%). Cards use a 1px `--line` that warms to `--line-gold` on hover. No heavy outlines.

**Shadows & depth.** Deep, warm-black, low-spread shadows (`--shadow-xs`→`--shadow-overlay`). Inputs are *inset* (`--inset-press`). Primary emphasis adds a faint **brass glow** (`--glow-gold`). No colourful or blurry neon shadows.

**Transparency & blur.** Overlays are `rgba(10,9,8,0.72)` + backdrop-blur (cart scrim, sticky nav). Used only for layering — never decoratively.

**Motion.** Restrained. `--ease-out cubic-bezier(0.22,0.61,0.36,1)`, durations 120/200/360ms. Fades and short slides (cart drawer slides in 360ms). No bounces, no infinite loops, no parallax.

**Hover states.** Lighten/warm: ghost buttons gain `--accent-soft`; outlines shift border to gold and text to `--gold-300`; cards lift 3px and warm their border + gain `--shadow-md`; nav links brighten to strong cream with a gold underline.

**Press states.** Primary button nudges down 1px (`translateY(1px)`). No scale-shrink. Inputs deepen the focus ring (`--ring`, 3px brass at 55%).

**Cards.** `--surface-card` fill, 1px `--line` border, `--radius-md`, `--shadow-xs` at rest → gold border + `--shadow-md` + 3px lift on hover. Product cards: 4:3 visual well over a radial gradient, optional flag (top-left) and discount badge (top-right), brand eyebrow, serif name, star rating, stock badge, struck-through old price + mono sale price, full-width add-to-cart.

---

## ICONOGRAPHY

**Set:** [Lucide](https://lucide.dev) via CDN (`unpkg.com/lucide`). Chosen for its thin, even 1.5px stroke and rounded line terminals, which sit well against the cream-on-charcoal palette without feeling heavy. **Substitution flag:** no brand icon set was supplied; Lucide is the closest neutral line set. Swap for a licensed brand set if one exists.

**Usage.** Line icons only, ~16–20px, inherit `currentColor` (typically `--text-body` / `--text-muted`, brightening on hover). Common glyphs: `search`, `user`, `shopping-bag` (cart, with count badge), `x` (close), `trash-2` (remove), `heart`, `shield-check`, `truck`, `badge-check`, `refresh-cw`, `arrow-right`. Render with `lucide.createIcons()` after mount.

**Logo / brand mark.** `assets/logo-wordmark.svg` and `assets/logo-mark.svg` — an **ember monogram**: a brass lozenge (lit-cigarette/ember abstraction) with an oxblood + gold lit centre. Geometric, not illustrative. The same mark is inlined in the nav and footer.

**Emoji / unicode:** never used. The only non-icon glyphs are the mathematical minus (`−`) and plus in the quantity stepper, the star (`★`) for ratings, and `·` / `&` as typographic separators.

---

## Substitutions (please review)

1. **Fonts.** No brand font files were provided. Display **Bodoni Moda**, body **Hanken Grotesk**, mono **JetBrains Mono** are loaded from **Google Fonts** via `@import` in `tokens/fonts.css` (so the manifest reports 0 local `@font-face` files). If you have licensed brand fonts, drop the files in and replace the `@import` with `@font-face` rules.
2. **Icons.** Lucide via CDN — substitute for a brand set if one exists.
3. **Brand identity.** Name "Ember Tobacco Co.", palette, and logo are invented to fit the brief. Tell me if you have a real name/identity to align to.
4. **Catalogue & imagery.** Sample products and placeholder visuals stand in for a real catalogue and photography. Drop real images onto the `<image-slot>` areas or pass `ProductCard image` / `data.js` image fields.
