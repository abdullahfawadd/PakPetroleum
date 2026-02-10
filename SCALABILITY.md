# Scalability & Architecture Guide

This document outlines the architectural decisions, folder structure, and strategies for scaling the PAK Petroleum frontend as the team and codebase grow.

## 1. Recommended Folder Structure (Enterprise)

As the application grows, we recommend migrating from a "Layered" structure (grouping by file type) to a "Feature-First" or "Domain-Driven" structure (grouping by feature).

### Current Structure (Small/Medium Scale)
```
src/
  components/
    sections/
    ui/
  hooks/
  lib/
```

### Recommended Structure (Enterprise Scale)
This structure colocates all files related to a specific domain, making it easier to delete, refactor, or test features in isolation.

```
src/
  app/                 # Next.js App Router (Routing layer only)
    (routes)/
      page.tsx
      layout.tsx
  features/            # Feature-based modules
    auth/
      components/      # Auth-specific components
      hooks/           # Auth-specific hooks
      utils/           # Auth-specific logic
      types.ts
    supply-chain/
      components/
      api/
    landing/           # Homepage specific features
      components/
        Hero.tsx
        Map.tsx
  components/          # Shared/UI Library (Button, Card, Input)
    ui/
    layout/
  lib/                 # Global utilities (axios, cn, formatting)
  hooks/               # Global hooks (useMediaQuery, useScroll)
```

## 2. Rendering Strategy

We follow a **Server Components First** approach to maximize performance and SEO.

### Rules:
1.  **Default to Server Components:** All `page.tsx` and `layout.tsx` files should be Server Components by default.
2.  **Leaf Client Components:** Push `"use client"` down to the lowest possible component (the "leaves" of the tree).
    *   *Bad:* Making `page.tsx` a Client Component just to use a `useEffect`.
    *   *Good:* Extracting the interactive part into a `<FeatureInteractive />` component and importing that into the Server Page.
3.  **Data Fetching:** Fetch data in Server Components (using `fetch` or DB calls) and pass it as props to Client Components.

## 3. Code-Splitting & Performance

To maintain high Core Web Vitals (LCP, CLS, INP), we use aggressive code-splitting.

### Strategies:
1.  **Dynamic Imports (`next/dynamic`):**
    *   Lazy load any component that is **not in the initial viewport** (below the fold).
    *   Lazy load heavy libraries (Three.js, Maps, Charts).
    ```tsx
    const HeavyChart = dynamic(() => import('@/components/charts/HeavyChart'), {
      loading: () => <Skeleton />,
      ssr: false // If purely client-side
    });
    ```
2.  **Route Groups:** Use Next.js Route Groups `(marketing)`, `(app)` to split layouts and reduce bundle size for different parts of the app.
3.  **Image Optimization:** Always use `next/image` with defined dimensions or `fill` to prevent layout shift.

## 4. Design System Integration

1.  **Strict Tokens:** Use Tailwind utility classes mapped to CSS variables (e.g., `bg-navy-900`, `text-teal-400`). Avoid arbitrary values (e.g., `w-[123px]`).
2.  **Typography:** Use the semantic classes `text-hero`, `text-display`, `text-body` defined in `tailwind.config.ts`.
3.  **Spacing:** Adhere to the 8pt grid system.

## 5. SEO & Metadata

1.  **Static Metadata:** Defined in `layout.tsx` for global defaults.
2.  **Dynamic Metadata:** Use `generateMetadata()` in `page.tsx` for dynamic routes.
3.  **Structured Data:** Inject JSON-LD scripts into pages to help search engines understand content (Organization, Breadcrumbs, Article).
