---
name: Obsidian Flow
colors:
  surface: '#0f131d'
  surface-dim: '#0f131d'
  surface-bright: '#353944'
  surface-container-lowest: '#0a0e18'
  surface-container-low: '#171b26'
  surface-container: '#1c1f2a'
  surface-container-high: '#262a35'
  surface-container-highest: '#313540'
  on-surface: '#dfe2f1'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dfe2f1'
  inverse-on-surface: '#2c303b'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#00885d'
  on-tertiary-container: '#000703'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0f131d'
  on-background: '#dfe2f1'
  surface-variant: '#313540'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.03em
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

This design system is engineered for elite software engineering teams, product operators, and technical leads who demand zero-latency task orchestration. The visual language merges the surgical precision of developer-first tooling with the calm, focused hierarchy of modern knowledge architectures. 

The aesthetic is precision dark-mode utilitarianism: low-reflection matte surfaces, razor-sharp hairline delineation, contextual micro-glows, and hyper-dense information architecture that prioritizes keyboard-driven speed over decorative canvas filler. The interface should feel immediate, authoritative, and frictionless—evoking the focus of a finely calibrated terminal combined with executive-grade spatial clarity.

## Colors

The palette relies on stacked deep-spectrum blue-slates rather than uncalibrated neutral blacks, preserving contrast without inducing eye fatigue during prolonged sprints.

### Surface Architecture
- **Base Canvas (`#0B0F19`):** The foundational substrate behind the application shell.
- **Sidebar Surface (`#101624`):** Fixed navigation and meta-hierarchy container.
- **Card / Surface Default (`#151D2D`):** Primary interactive cards, rows, and structured work-item containers.
- **Elevated / Modal Surface (`#1C263A`):** Popovers, dropdown menus, context trays, and command palettes.
- **Surface Outline / Divider:** `rgba(255, 255, 255, 0.08)` for structural boundaries; `rgba(255, 255, 255, 0.14)` on hover.

### Accents & Semantic Signals
- **Primary Indigo (`#6366F1`, hover `#818CF8`):** Main interactive callouts, active filters, selection states, and primary actions.
- **Secondary Cyan (`#06B6D4`):** Real-time streaming status, telemetry, automated CI/CD cues, and branching data.
- **Success Emerald (`#10B981`):** Merged branches, completed deliverables, passing pipelines.
- **Priority Warning / High (`#F59E0B`):** Blocking items, elevated priority tracks, near-deadline status.
- **Urgent / Critical (`#F43F5E`):** P0 showstoppers, pipeline failures, breaking regressions.

### Text Contrast Tiers
- **Text Primary (`#F8FAFC`):** Task headlines, title nodes, and active input entries.
- **Text Secondary (`#94A3B8`):** Subheaders, metadata labels, active filter labels, and descriptions.
- **Text Muted (`#64748B`):** Keyboard glyphs, empty-state cues, timestamps, and column counts.

## Typography

The type system prioritizes optical clarity in high-density data matrices. `Geist` drives the structural hierarchy, balancing neutral letterforms with tight tracking for optimal horizontal layout efficiency.

`JetBrains Mono` handles all programmatic elements: issue keys (e.g., `TSK-104`), commit hashes, branch slugs, execution runtimes, and keyboard shortcut indicators. 

For dense list displays and board cards, rely strictly on `body-md` and `body-sm` to maintain compact visual density. Apply negative letter-spacing dynamically on headlines to retain cohesive typographic impact at scale.

## Layout & Spacing

This design system uses a flexible 12-column board and canvas grid framed by fixed-width structural toolbars and sidebars.

### Layout Philosophy & Shell
- **Navigation Dock / Sidebar:** Persistent 240px desktop shell (collapsible to 56px icon-rail), set against `#101624`.
- **Canvas / Content Space:** Fluid grid conforming to max-widths only within document views (960px); board and list views stretch seamlessly across viewport width with a constant `gutter-desktop` of 1.5rem (24px).
- **Kanban Pillars:** Fixed column widths at 320px with horizontal auto-scroll containers on lower viewport widths.

### Responsive Breakpoints
- **Desktop (>= 1280px):** Full dual-pane interface (sidebar + active board/detail drawer split). Margins set to `margin-desktop`.
- **Tablet (768px - 1279px):** Sidebar converts to floating backdrop drawer; detail views open as contextual slide-overs. Gutters clamp to `gutter`.
- **Mobile (< 768px):** Board pillars pivot to swipeable tab views or single-column stacked lists. Header compresses into a streamlined app bar with active search modal triggers.

## Elevation & Depth

Visual hierarchy is maintained through subtle luminance steps and translucent borders, avoiding heavy drop shadows that clutter dense interfaces.

- **Level 0 (Base):** `#0B0F19` flat background. No shadow.
- **Level 1 (Substrate & Cards):** `#151D2D` with a persistent hairline boundary of `border: 1px solid rgba(255, 255, 255, 0.08)`.
- **Level 2 (Active Cards & Hover Elements):** Background `#1C263A`, subtle ambient glow: `box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.45)`.
- **Level 3 (Command Palette & Floating Panels):** Semi-transparent surface `background: rgba(28, 38, 58, 0.85)` augmented by `backdrop-filter: blur(16px)` and perimeter focus `box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.35), 0 16px 40px rgba(0, 0, 0, 0.6)`.
- **Focus Rings:** Non-offset, radiant Indigo stroke: `box-shadow: 0 0 0 2px #6366F1, 0 0 12px rgba(99, 102, 241, 0.4)`.

## Shapes

The interface balances sleek modern curves with compact structural density using an 8px (`0.5rem`) base corner radius.

- **Base Radius (`0.5rem`):** Applied uniformly to task cards, text inputs, buttons, segmented controls, dropdown menus, and popovers.
- **Small Radius (`0.25rem`):** Reserved for nested inline components, key tags (`KBD`), status indicator badges, and priority tags.
- **Large Radius (`1rem`):** Used strictly for modal window wrappers and the floating command prompt (`Raycast` style overlay).
- **Circular (`9999px`):** Assignee avatar components and live pulse status dots.

## Components

### Buttons & Action Bars
- **Primary:** Solid `#6366F1`, text `#F8FAFC`, transition speed 120ms. Hover `#818CF8` with a micro-glow `0 0 12px rgba(99, 102, 241, 0.4)`.
- **Secondary / Ghost:** Transparent base, hairline border `rgba(255, 255, 255, 0.08)`, text `#94A3B8`. Hover states introduce `#1C263A` background and `#F8FAFC` foreground.
- **Sizing:** Compact (28px height, `space-xs` `space-md` padding) for toolbars; Standard (36px height) for modals.

### Task Cards & Rows
- **Card Container:** `#151D2D` background, 8px radius, padding `space-md`. Border `rgba(255, 255, 255, 0.08)`.
- **Card Hover:** Subtle upward transition (-1px), border `rgba(255, 255, 255, 0.16)`.
- **Task Identifier Badge:** Rendered in `label-sm` (`JetBrains Mono`), foreground `#64748B`, transitioning to `#94A3B8` on container hover.

### Keyboard Shortcut Indicators (`KBD`)
- Inline elements utilizing `JetBrains Mono` font (`10px` size).
- Background `rgba(255, 255, 255, 0.06)`, border `rgba(255, 255, 255, 0.12)`, corner radius 4px, padding `2px 5px`. Text color `#94A3B8`.

### Status Pillars & Kanban Containers
- Header features active item counter wrapped in a muted pill badge.
- Column drop target highlights with a dashed border `rgba(99, 102, 241, 0.4)` and a transient `#6366F108` background wash.

### Floating Command Palette (Raycast Style)
- Centered overlay (640px width), elevated floating position at 15% viewport from top.
- Surface `#1C263A` with 85% opacity, `backdrop-filter: blur(20px)`, outer glow `0 0 0 1px rgba(99, 102, 241, 0.25)`.
- Integrated input field with zero border, 18px `Geist` text, and quick-filter chips on the right margin.

### Priority Badges
- Pill-shaped tags (`roundedness: 1`), padding `2px 6px`.
- **Urgent:** `rgba(244, 63, 94, 0.12)` background, `#F43F5E` text.
- **High:** `rgba(245, 158, 11, 0.12)` background, `#F59E0B` text.
- **Normal / Low:** `rgba(148, 163, 184, 0.1)` background, `#94A3B8` text.

### Segmented Controls
- Container background `#101624`, 8px radius, 3px inner padding.
- Selected segment sits on `#1C263A` with a hairline border `rgba(255, 255, 255, 0.08)` and crisp `#F8FAFC` typography.