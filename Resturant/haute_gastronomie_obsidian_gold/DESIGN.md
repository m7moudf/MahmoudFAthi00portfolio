---
name: Haute Gastronomie Obsidian & Gold
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5b4'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#998f80'
  outline-variant: '#4d4639'
  surface-tint: '#e6c277'
  primary: '#f4ce83'
  on-primary: '#402d00'
  primary-container: '#d6b36a'
  on-primary-container: '#5d4403'
  inverse-primary: '#755a1a'
  secondary: '#eac078'
  on-secondary: '#422d00'
  secondary-container: '#604405'
  on-secondary-container: '#dbb26c'
  tertiary: '#ffc8a2'
  on-tertiary: '#4a280a'
  tertiary-container: '#e4ac84'
  on-tertiary-container: '#673f20'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdf9f'
  primary-fixed-dim: '#e6c277'
  on-primary-fixed: '#261a00'
  on-primary-fixed-variant: '#5b4302'
  secondary-fixed: '#ffdea8'
  secondary-fixed-dim: '#eac078'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5e4203'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#f4bb92'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#653d1e'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 68px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 38px
    fontWeight: '400'
    lineHeight: 46px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 46px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 26px
    fontWeight: '500'
    lineHeight: 34px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.14em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.12em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 12px
    letterSpacing: 0.16em
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style
This design system embodies the intimacy, discretion, and theatrical elegance of Michelin three-star hospitality. Conceived as a digital salon for ultra-luxury dining, the aesthetic pairs the moody drama of obsidian-tinted architecture with the warmth of brushed champagne metal. 

The visual grammar balances high-fashion editorial restraint with tactile, modern minimalism. Whitespace is treated as silence—expansive, intentional, and quiet. Layouts prioritize grand focal compositions, generous vertical breathing room, and precise micro-details that mirror bespoke physical menus, custom cutlery, and ambient candlelight. The emotional objective is reverence, exclusivity, and effortless sophistication.

## Colors
The palette is rooted in absolute shadow and luminous metallic luster:
- **Obsidian Canvas (`#0B0B0B`)**: The foundation. A deep, abyssal black that eliminates screen glare and anchors gold accents.
- **Surface & Containers (`#181818`)**: Elevated layers, tasting menu modules, and cards. Provides soft depth without relying on stark borders.
- **Champagne Gold (`#D6B36A`)**: The primary luminescent accent. Applied strictly to focal moments, primary actions, and tier badges.
- **Antique Gold (`#A98543`)**: Secondary metallic tone used for structural lines, dividers, selected states, and delicate iconography.
- **Copper Umber (`#8B5E3C`)**: Used sparingly for vintage indicators, terroir callouts, and bespoke cellar tags.
- **Warm Ivory (`#F5F0E8`) & Soft Linen (`#D8CCB8`)**: High-fidelity typography tiers that reject cold clinical whites in favor of soft, candlelit legibility.

## Typography
Typographic rhythm sets the cadence of an editorial monograph. Headlines feature the high-contrast classicism of **Playfair Display**, rendering dishes, vintages, and salon notes with sculptural grandeur. 

For technical details, tasting courses, seatings, and interactive navigation, **Plus Jakarta Sans** introduces contemporary clarity, ensuring high readability even against profound black surfaces. Label tiers must consistently be styled in uppercase with tracked letter spacing (`letterSpacing: 0.12em` to `0.16em`) to preserve the feeling of luxury house stationery.

## Layout & Spacing
The layout model employs a 12-column asymmetric fluid grid on desktop (max width 1440px) with generous 4rem canvas margins, collapsing to 6 columns on tablet and 4 columns on mobile. 

Layout rhythm is intentionally leisurely. Ample vertical margins between sections simulate the pacing between dining courses. Dense clusters of information are prohibited; interactive blocks and descriptive pairings must always breathe with a minimum of `space-lg` separation. Structural dividers should be hairline elements (0.5px to 1px) styled in muted antique gold tints with low opacity.

## Elevation & Depth
Depth in this system avoids loud or dramatic drop shadows, favoring atmospheric lighting and subtle luminescence:
- **Tonal Layering**: Base canvas (`#0B0B0B`) gives way to elevated surfaces (`#181818`) for cards, dialogs, and drawer menus.
- **Chiaroscuro Glow**: Elevated active modules (such as table selections or featured reserve cellars) cast a diffuse, warm champagne glow: `0 8px 32px -8px rgba(214, 179, 106, 0.08)`.
- **Low-Contrast Filament Outlines**: Borders function as delicate metal inlays rather than bounding boxes, rendered in Antique Gold with 20% to 35% opacity (`rgba(169, 133, 67, 0.25)`).
- **Glassmorphic Overlays**: Modals, sticky headers, and tasting overlays use a frosted backdrop (`rgba(11, 11, 11, 0.75)` with `backdrop-filter: blur(16px)`).

## Shapes
To preserve the sharp, tailored precision of fine bespoke tailoring and architectural stonework, this system embraces sharp geometries (`roundedness: 0`). 

Rectilinear discipline governs all interaction components: buttons, card containers, dialogs, dropdowns, and input boxes feature crisp 90-degree corners. Rounded avatars or rounded pills are replaced by clean quadrilaterals, fine borders, and generous internal padding to emphasize modern discipline over casual softness.

## Components

### Buttons
- **Primary**: Solid Champagne Gold (`#D6B36A`) background with Obsidian Black (`#0B0B0B`) uppercase text. Zero border radius, tracking at `0.14em`. Hover state deepens slightly to Antique Gold (`#A98543`) with subtle outward ambient warmth.
- **Secondary / Outline**: Obsidian background with a 1px border in Antique Gold (`#A98543`) and Warm Ivory (`#F5F0E8`) text. Transitions to an Antique Gold flood on hover.
- **Text Action**: Unadorned text in Champagne Gold with a delicate underline positioned 4px below the baseline, sliding in from left to right on interaction.

### Cards & Tasting Modules
- Built on Charcoal Surface (`#181818`) with a hairline outline of `rgba(169, 133, 67, 0.2)`. Padding follows `space-lg`. Imagery inside cards is presented without radius, styled with an imperceptible golden tonal wash on hover.

### Inputs & Select Fields
- Framed in minimalist underline or full-box format: background `#111111`, border `rgba(169, 133, 67, 0.3)`, text in Warm Ivory (`#F5F0E8`), and placeholder in Soft Linen (`#D8CCB8`). Focus shifts the border to pure Champagne Gold (`#D6B36A`) with zero glow distortion.

### Chips & Badges
- Strict rectangular contours. Neutral state features `#181818` background with an antique gold keyline. Dietary tags, reserve vintages, and Michelin status chips utilize small uppercase label typography (`label-sm`).

### Checkboxes & Radios
- Sharp, square selection boxes. Selected state displays a centered solid Champagne Gold square pip. Unchecked state is bordered with subtle metallic gold.

### Specialized Component: Cellar & Course Ledger
- An accordion-style course ledger detailing dish composition, provenance, and sommelier wine pairings. Utilizes hairline antique gold split-dividers and Playfair Display numerals for dish sequence indicators (`01`, `02`, `03`).