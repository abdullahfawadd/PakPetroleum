# FINAL Frontend Architecture

This document defines the architectural strategy for the frontend of the "Energy-Grade Minimalism" project. It supersedes previous drafts and serves as the single source of truth for implementation patterns, ensuring high performance, SEO optimization, and visual fidelity.

## 1. Directory Structure & Organization

The codebase follows a feature-grouped structure within the Next.js 14 App Router, prioritizing collocation of related logic while maintaining clear boundaries between server and client concerns.

```
src/
├── app/                        # Next.js App Router (Server Components by default)
│   ├── (marketing)/            # Route Group: Marketing pages
│   ├── (legal)/                # Route Group: Legal pages
│   ├── api/                    # API Routes (Edge Runtime where possible)
│   ├── fonts/                  # Local font files & configurations
│   ├── layout.tsx              # Root Layout (<html>, <body>, Providers)
│   ├── not-found.tsx           # 404 Error Page
│   ├── loading.tsx             # Global Loading UI (Suspense fallback)
│   ├── globals.css             # Tailwind imports & global styles
│   ├── sitemap.ts              # XML Sitemap generator
│   └── robots.ts               # Robots.txt generator
├── components/                 # React Components
│   ├── ui/                     # Atomic, reusable UI components (Button, Input, Card)
│   ├── sections/               # Page-specific sections (Hero, About, Contact)
│   ├── layout/                 # Global layout components (Header, Footer, Grid)
│   ├── 3d/                     # Three.js/Spline scenes & canvases
│   ├── effects/                # Visual effects (particles, noise overlays)
│   ├── providers/              # React Context Providers (Theme, GSAP, Lenis)
│   └── icons/                  # SVG Icons as React components
├── hooks/                      # Custom React Hooks (useScroll, useGSAP)
├── lib/                        # Business Logic & Utilities (Pure Functions)
│   ├── utils.ts                # cn() helper, formatters
│   ├── constants.ts            # Configuration constants
│   ├── motion.ts               # Framer Motion variants
│   ├── gsap.ts                 # GSAP configuration & helpers
│   └── types/                  # TypeScript interfaces & types
└── public/                     # Static Assets (images, models)
```

## 2. Server vs. Client Component Strategy

We adhere to a "Server-First" approach. Components are Server Components by default unless they require specific browser APIs or interactivity.

### Server Components (Default)
**Responsibility:**
- Fetching data (CMS, API, Database).
- Rendering static content (Text, Images, Layout structure).
- SEO Metadata generation (`generateMetadata`).
- Initial HTML payload for First Contentful Paint (FCP).

**Pattern:**
- Pass data to Client Components via props.
- Use the "Hole Pattern": Pass Server Components as `children` to Client Components to prevent the entire subtree from becoming client-side rendered.

### Client Components (`'use client'`)
**Responsibility:**
- Event listeners (`onClick`, `onChange`).
- React State (`useState`, `useReducer`) and Effects (`useEffect`).
- Browser-only APIs (`window`, `document`, `localStorage`).
- Animation orchestration (GSAP context, Framer Motion variants).
- 3D Rendering Contexts (Three.js Canvas).

**Directives:**
- Must include `'use client'` at the top of the file.
- Keep the boundary as low in the tree as possible (e.g., wrap a button, not the whole section).

## 3. Dynamic Imports & Code Splitting

To maintain optimal Core Web Vitals (LCP, CLS, INP), heavy assets and non-critical components are lazy-loaded.

### Strategy
1.  **3D Scenes & Spline:**
    - Always import using `next/dynamic` with `ssr: false`.
    - Provide a lightweight fallback (static image or skeleton) while loading.
    ```typescript
    const Scene = dynamic(() => import('@/components/3d/Scene'), {
      ssr: false,
      loading: () => <ScenePlaceholder />,
    });
    ```

2.  **Below-the-Fold Sections:**
    - Complex sections (e.g., interactive maps, carousels) should use `next/dynamic` or React `Suspense` boundaries to prioritize the Hero section's load time.

3.  **Route Transitions:**
    - Leverage `loading.tsx` for instant navigation feedback while route segments fetch data.

## 4. Animation Isolation Strategy

Animations are critical to "Energy-Grade Minimalism" but must not compromise performance or accessibility.

### GSAP (GreenSock)
- **Scope:** Use for complex, timeline-based sequences and scroll-triggered effects.
- **Implementation:** Always use the custom `useGSAP` hook (or `gsap.context`) to scope selectors to the component ref.
- **Cleanup:** Ensure `ctx.revert()` is called on unmount to prevent memory leaks and ghost animations.
- **Markers:** Disable `markers: true` in production.

### Framer Motion
- **Scope:** Use for simple mount/unmount transitions, layout changes, and hover states.
- **Performance:** Use `layoutId` for shared element transitions. Prefer `transform` and `opacity` properties over layout-triggering properties (width/height).

### Accessibility (a11y)
- **Reduced Motion:** All animations must respect `prefers-reduced-motion: reduce`.
  - GSAP: `gsap.matchMedia("(prefers-reduced-motion: no-preference)")`
  - CSS: `@media (prefers-reduced-motion: reduce)`

## 5. SEO & Metadata Handling

SEO is managed entirely on the server to ensure crawlers receive fully hydrated metadata.

### Metadata API
- **Static Pages:** Export a `metadata` constant in `page.tsx`.
- **Dynamic Pages:** Export a `generateMetadata` function to fetch data and return dynamic titles/descriptions.
- **Templates:** Use `title.template` in `layout.tsx` to enforce brand consistency (e.g., "%s | Brand Name").

### Technical SEO
- **Sitemap:** Dynamic `sitemap.ts` to generate XML sitemaps for all routes.
- **Robots:** `robots.ts` to control crawler access.
- **Canonical URLs:** Automatically generated based on the current domain and path.
- **Open Graph:** Use `opengraph-image.tsx` (using `@vercel/og`) to generate dynamic social share images for every page.
- **Structured Data:** Inject JSON-LD scripts via `script` tags in Server Components for rich results (Organization, Article, Product).

## 6. Styling System

- **Tailwind CSS:** Single source of truth for tokens (colors, spacing, typography).
- **CSS Variables:** Use CSS variables for theme-aware values to allow for potential runtime theming without recompilation.
- **Class Merging:** Use `clsx` or `tailwind-merge` (via `cn` utility) to resolve class conflicts in reusable components.
