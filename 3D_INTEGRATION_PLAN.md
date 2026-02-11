# 3D / Spline Integration Plan for PAK Petroleum

## 1. Executive Summary
This document outlines the strategy for integrating high-fidelity 3D elements using Spline into the PAK Petroleum website. The goal is to enhance **brand authority** through "Energy-Grade Minimalism" — using 3D to represent infrastructure, stability, and global reach without compromising performance or distracting from the core message.

## 2. Design Philosophy & Purpose
*   **Aesthetic:** "Energy-Grade Minimalism". Dark, matte finishes, wireframes, glass, and subtle emissive materials (Teal `#64FFDA`). Avoid "cartoony" or "plastic" looks.
*   **Motion:** Slow, deliberate, and non-distracting.
*   **Purpose:**
    *   **Hero:** Visual hook representing "The Energy Core" or molecular structure of fuel.
    *   **Operations:** Data visualization of the "Global Network" or pipeline infrastructure.

## 3. Technical Architecture

### Core Dependencies
*   **Primary Tool:** Spline (for designer-led assets).
*   **Library:** `@splinetool/react-spline`.
*   **Framework:** Next.js 14 (App Router).

### Integration Strategy: `SplineWrapper`
To ensure safe integration into Next.js, we will create a robust wrapper component: `src/components/3d/SplineWrapper.tsx`.

**Key Features of the Wrapper:**
1.  **Lazy Loading:** Uses `next/dynamic` with `ssr: false` to prevent hydration errors.
2.  **Mobile Fallback:** Detects viewport size and renders a static WebP image for mobile devices (< 768px) to save battery and data.
3.  **Low Power Mode:** Detects `prefers-reduced-motion` or battery status (if API available) to disable animations.
4.  **Loading State:** Displays a blurred radial gradient matching the site's theme while the 3D scene loads.

#### Implementation Blueprint (`src/components/3d/SplineWrapper.tsx`)

```tsx
"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// Lazy load the Spline component - vital for TBT (Total Blocking Time) reduction
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <LoadingPlaceholder />,
});

const LoadingPlaceholder = () => (
  <div className="absolute inset-0 bg-gradient-radial from-teal-500/10 to-transparent blur-3xl animate-pulse" />
);

interface SplineWrapperProps {
  scene: string; // URL to the .splinecode file
  className?: string;
  fallbackImage?: string; // URL for static image fallback
  alt?: string;
}

export default function SplineWrapper({ scene, className, fallbackImage, alt = "3D Visual" }: SplineWrapperProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Delay loading slightly to prioritize LCP content (text/hero image)
    const timer = setTimeout(() => setShouldLoad(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Mobile or Low-End Device Strategy: Render Static Image
  if (isMobile && fallbackImage) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={fallbackImage}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {shouldLoad ? (
        <Suspense fallback={<LoadingPlaceholder />}>
          <Spline scene={scene} />
        </Suspense>
      ) : (
        <LoadingPlaceholder />
      )}
    </div>
  );
}
```

## 4. Target Sections & Implementation

### A. Hero Section (`src/components/sections/Hero.tsx`)
*   **Concept:** "The Energy Core". A slowly rotating, abstract structure (nodes/particles) representing raw energy potential.
*   **Current State:** Uses a placeholder `SplineScene` (R3F implementation).
*   **Action:** Replace the current R3F `SplineScene` with the new `SplineWrapper`.
*   **Constraint:** The 3D element must sit behind the content (`z-0`) and have `pointer-events-none` to prevent hijacking scroll.

### B. Operations Section (`src/components/sections/CoreOperations.tsx`)
*   **Concept:** "Global Network". A stylized globe or pipeline map.
*   **Placement:** In the "Sticky Header" (Left Column), replacing or augmenting the "Operational Status" indicator.
*   **Interaction:** Rotates on scroll or auto-rotates.
*   **Constraint:** Must be small and contained within the column width.

## 5. Performance Constraints & Best Practices

1.  **Polygon Count:** Keep scenes under **50,000 triangles**.
2.  **Textures:** Max 2048x2048 for hero, 1024x1024 for smaller elements. Use compressed formats (WebP/KTX2 if supported by Spline export).
3.  **Materials:** Avoid heavy refraction/transmission. Use "Matte" or "Basic" materials where possible.
4.  **Lighting:** Bake lighting if possible. Real-time shadows are expensive; use "Blob Shadows" or fake shadows.
5.  **Memory:** Unload scenes when not in viewport (using `IntersectionObserver` in the wrapper if needed for long pages).

## 6. Execution Steps

1.  **Install Dependencies:**
    ```bash
    npm install @splinetool/react-spline @splinetool/runtime
    ```
2.  **Create Wrapper:** Implement `src/components/3d/SplineWrapper.tsx` based on the blueprint above.
3.  **Update Hero:** Modify `Hero.tsx` to import and use `SplineWrapper`.
4.  **Create Assets:**
    *   Designers must provide `.splinecode` URLs (hosted on Spline or local public folder).
    *   Designers must provide static fallback images (`.webp`).
5.  **Verify:** Test on mobile device to ensure the fallback triggers.
