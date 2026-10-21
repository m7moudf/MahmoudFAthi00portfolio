---
name: Wildora
colors:
  surface: '#fcf9f2'
  surface-dim: '#dcdad3'
  surface-bright: '#fcf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ec'
  surface-container: '#f0eee7'
  surface-container-high: '#ebe8e1'
  surface-container-highest: '#e5e2db'
  on-surface: '#1c1c18'
  on-surface-variant: '#424845'
  inverse-surface: '#31312c'
  inverse-on-surface: '#f3f0ea'
  outline: '#727975'
  outline-variant: '#c2c8c3'
  surface-tint: '#496459'
  primary: '#001911'
  on-primary: '#ffffff'
  primary-container: '#142e25'
  on-primary-container: '#7b978a'
  inverse-primary: '#b0cdc0'
  secondary: '#41673f'
  on-secondary: '#ffffff'
  secondary-container: '#bfebb8'
  on-secondary-container: '#456c43'
  tertiary: '#2a0b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#4b1a00'
  on-tertiary-container: '#d87644'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce9db'
  primary-fixed-dim: '#b0cdc0'
  on-primary-fixed: '#052018'
  on-primary-fixed-variant: '#324c42'
  secondary-fixed: '#c2eebb'
  secondary-fixed-dim: '#a7d2a1'
  on-secondary-fixed: '#002204'
  on-secondary-fixed-variant: '#2a4f29'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb694'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7a3000'
  background: '#fcf9f2'
  on-background: '#1c1c18'
  surface-variant: '#e5e2db'
typography:
  display-hero:
    fontFamily: Newsreader
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Newsreader
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 44px
    fontWeight: '400'
    lineHeight: 52px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-sm:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.08em
  label-md:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.25rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 3rem
---

## Brand & Style

This design system expresses a luxury, editorial expedition ethos—merging the archival gravitas of prestigious natural history publications with a modern, high-precision digital field guide. The aesthetic is tailored for discerning naturalists, conservationists, luxury eco-travelers, and curious minds who demand visual depth and storytelling pedigree.

The interface evokes reverence for the wild: quiet, authoritative, and cinematic. The primary design style balances **Editorial Minimalism** with **Organic Tactility**, characterized by generous breathing room, gallery-grade focal points, deliberate typographic hierarchy, and warm earth-pigmented accents that evoke archival paper, dense canopies, and weathered stone.

## Colors

The palette draws directly from primal terrestrial landscapes:

- **Primary (`#142E25` Deep Forest Green):** Anchors primary brand touchpoints, dominant display typography, headers, and primary interactive states.
- **Secondary (`#537A50` Moss Green):** Acts as a verdant tonal midtone for secondary actions, interactive highlights, and conservation status badges.
- **Tertiary (`#D97745` Terracotta):** Reserved for energetic editorial interventions, urgent field alerts, red-list status badges, and accent CTAs.
- **Neutral (`#FAF7F0` Cream White):** Forms the foundational paper-like canvas, eliminating clinical starkness in favor of sun-bleached warmth.

Complementary supporting neutrals:
- **Sage (`#A8B89A`):** Used for subtle borders, contextual chip backgrounds, and divider rules.
- **Warm Sand (`#E8DCC5`):** Serves as a tertiary container fill and card surface background.
- **Charcoal (`#252A26`):** Provides high-contrast, fatigue-free body text rendering across editorial passages.

## Typography

Typography establishes an intentional dialogue between classic naturalist folio literature and scientific clarity. 

- **Headlines (Newsreader):** Brings editorial prestige, optical sizing variations, and literature-level warmth. Display headings should use italicized variants selectively for taxonomic terms and narrative pull quotes.
- **Body Text (Manrope):** Provides clean geometric construction with humanist balance, preserving effortless legibility across dense species monographs, habitat profiles, and long-form conservation narratives.
- **Data & Field Labels (Space Grotesk):** Injected in small, structured doses for coordinates, binomial nomenclature metadata, taxonomy meters, and tracking indices to inject technical field-journal rigor.

## Layout & Spacing

The layout is grounded in a 12-column asymmetric fluid grid designed to simulate the varied, structured compositions of luxury print magazines. 

- **Breakpoints:**
  - **Mobile (< 768px):** 4 columns, `margin: 1.25rem`, `gutter: 1.5rem`. Editorial side-by-side elements collapse into vertically stacked narrative sequences.
  - **Tablet (768px – 1024px):** 8 columns, `margin: 2rem`, `gutter: 2rem`. Balanced two-up taxonomic listings and split image-text features.
  - **Desktop (> 1024px):** 12 columns, max container width of 1440px, `margin: 4rem`, `gutter: 2.5rem`. Enables offset columns (e.g., 4-column metadata index paired with an 8-column high-resolution visual narrative).

White space is intentionally uncompressed: article headers, full-bleed field photography, and taxonomy breakdowns are separated by `space-xl` intervals to afford visual reverence to the natural subjects.

## Elevation & Depth

Visual hierarchy rejects artificial synthetic drop shadows in favor of **Tonal Layering** and **Archival Outlines**:

- **Layering:** Depth is communicated by nesting Warm Sand (`#E8DCC5` at 40% opacity) surfaces upon the Cream White foundation, creating low-noise structural grouping.
- **Borders & Rules:** Subtle 1px borders using Sage (`#A8B89A` at 30%–50% opacity) provide structural definition without clutter.
- **Ambient Focus:** When modal elevation or floating map overlays are required, apply a soft, wide-spread diffused shadow tinted with Deep Forest Green (`box-shadow: 0 16px 32px -8px rgba(20, 46, 37, 0.12)`).
- **Hero Image Overlays:** Scrim gradients should transition smoothly from `#142E25` (at 85% opacity) to pure transparent, allowing serif titles to legibly overlap raw wildlife imagery.

## Shapes

The shape system embraces tailored restraint (`Soft`, 0.25rem base radius). Corner curvature remains minimal to preserve the clean, crisp cuts of editorial layouts and archival documentation.

- **Base Components (Cards, Inputs, Panels):** 0.25rem (`rounded`) to maintain razor-sharp alignment alongside typographic grid lines.
- **Interactive Badges & Meta Chips:** Exceptionally, status tags and taxonomy labels may utilize full pill geometry (`9999px`) to create an immediate visual contrast against geometric media containers.
- **Media Framing:** Imagery remains strictly rectangular or bounded within rounded-sm frames to feel like full-bleed photography plates.

## Components

- **Buttons:**
  - *Primary:* Solid Deep Forest Green background, Cream White text, Space Grotesk label font (uppercase with slight letter-spacing), 0.25rem radius. Hover shifts to Moss Green with quiet translation.
  - *Secondary (Editorial):* Transparent background, 1px Deep Forest Green border, Deep Forest Green text.
  - *Accent:* Terracotta background, Cream White text, reserved strictly for field donations or urgent conservation actions.

- **Badges & Taxonomy Chips:**
  - High-precision botanical/scientific pill tags.
  - *IUCN Red List Status:* Terracotta or Warm Sand base with uppercase Space Grotesk typography and miniature classification dots (e.g., `CR`, `EN`, `VU`).
  - *Biome/Habitat:* Translucent Sage backgrounds with Deep Forest Green text.

- **Cards (Species & Habitat Folios):**
  - Crisp Cream White or tinted Warm Sand surface, framed by a delicate 1px Sage border.
  - Features high-ratio photography (3:2 or 4:5), Newsreader title, italicized Latin family name in Manrope body-sm, and bottom-anchored geolocation metadata.

- **Lists & Data Tables:**
  - Border-bottom ruled layouts (1px Sage at 40%), generous row height, Space Grotesk keys paired with Newsreader and Manrope values for specimen statistics (gestation, population, distribution).

- **Form Inputs:**
  - Unfilled surfaces with a distinct bottom rule or a crisp 1px Sage contour. Deep Forest Green text with Warm Sand placeholder tone; focus states shift border color to Deep Forest Green with zero fuzzy focus rings.

- **Field Journal Quote / Audio Player:**
  - Bespoke components featuring ambient soundscape waveforms (birdsong, rainforest rain) rendered in Moss Green with Newsreader pull-quotes and field researcher credits.