---
name: WhatsACP Design System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#464555'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#7e3000'
  on-tertiary: '#ffffff'
  tertiary-container: '#a44100'
  on-tertiary-container: '#ffd2be'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb695'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7b2f00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  title-lg:
    fontFamily: Outfit
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.5'
  body-lg:
    fontFamily: Roboto Flex
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Roboto Flex
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Roboto Flex
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  container-max: 1440px
  gutter: 24px
---

## Brand & Style
The design system is built for a high-end photography production environment, balancing the raw creativity of image-making with the rigorous efficiency of a CRM. The brand personality is **Elegant, Modern, and Precise**. 

The aesthetic follows a **Corporate / Modern** style with subtle **Glassmorphism** influences in the navigation elements. The target audience—producers and photographers—requires a UI that stays out of the way of the visual assets while providing a sense of premium reliability. The emotional response should be one of "effortless control."

## Colors
The color palette is split into two distinct environments to delineate brand identity from active workspace.

- **Outer Brand / Marketing:** Uses deep dark-slate gradients (`#0F172A` to `#1E293B`) to evoke a cinematic, "darkroom" premium feel.
- **Internal Workspace:** Primarily a polished **Slate-50** (`#F8FAFC`) light mode. This provides a high-key, clean canvas that allows photographic thumbnails and data to pop.
- **Primary Accents:** **Indigo-blue** (`#4F46E5`) is used for primary actions, CTA buttons, and active states.
- **Success/Online Accents:** **Emerald-green** (`#10B981`) is utilized for status indicators, "online" markers, and successful transaction states.

## Typography
The typography strategy pairs the geometric, modern flair of **Outfit** for headings with the systematic legibility of **Roboto Flex** for data-heavy body content.

- **Headings (Outfit):** Set with tighter letter-spacing for a premium, editorial look. Use Medium (500) or Semi-Bold (600) weights to establish hierarchy.
- **Body & Data (Roboto Flex):** Designed for maximum readability in high-density CRM views. It remains neutral and functional.
- **Labels:** Small caps and increased letter-spacing are applied to labels and table headers to ensure they are distinct from interactive content.

## Layout & Spacing
The design system utilizes a **Fixed Grid** approach for the main content area to maintain a premium, centered composition on large displays, while the sidebar remains fixed to the viewport.

- **Grid:** A 12-column grid with a 24px gutter.
- **Sidebar:** A narrow, 80px - 240px (collapsible) sidebar provides navigation. Icons should have ample breathing room.
- **Breakpoints:**
  - **Desktop:** 1200px+ (Full 12 columns)
  - **Tablet:** 768px - 1199px (8 columns, margins reduce to 16px)
  - **Mobile:** <768px (4 columns, fluid, navigation moves to a bottom bar or hamburger menu).

## Elevation & Depth
Depth is conveyed through **Ambient Shadows** and **Tonal Layers**. Instead of harsh borders, surfaces are separated by their elevation.

- **Level 0 (Canvas):** The Slate-50 background.
- **Level 1 (Cards/Sidebar):** Pure white background with a very soft, diffused shadow (Offset: 0 4px, Blur: 20px, Opacity: 4% Black).
- **Level 2 (Modals/Dropdowns):** Pure white with a more pronounced shadow (Offset: 0 12px, Blur: 30px, Opacity: 8% Black).
- **Interactive Depth:** Buttons use a slight inner-glow (1px stroke at 10% white) on top of the primary color to give a subtle tactile feel without becoming skeuomorphic.

## Shapes
The shape language is consistently **Rounded**, reflecting a modern and approachable tool. 

- **Cards and Inputs:** Use the standard 0.5rem (8px) radius.
- **Pill Badges:** Used for status indicators and chips to provide a distinct visual contrast against rectangular cards.
- **Buttons:** Use a 0.5rem radius to match inputs, unless they are "Action Icons" which are circular.

## Components

- **Buttons:** Primary buttons are Indigo-blue with white text. Ghost buttons use a subtle Slate-200 border. Transitions should be a smooth 200ms ease-in-out.
- **Sleek Cards:** Container backgrounds are white with 16px padding. Titles use Outfit (Title-lg).
- **Refined Data Tables:** Table rows use a subtle hover state (`Slate-100`). Headers are sticky, using the `label-md` typography style. Border-bottom only, no vertical lines.
- **Pill Badges:** Used for "Project Status" (e.g., "In Production," "Editing"). Use low-saturation background colors with high-saturation text for a premium look (e.g., light emerald background with dark emerald text).
- **Minimal Sidebar Icons:** Use linear, 2px stroke weight icons. Only the active state receives the Indigo-blue color; others remain a medium-slate gray.
- **Input Fields:** Minimalist design with a 1px border. On focus, the border transitions to Indigo-blue with a 2px outer glow.