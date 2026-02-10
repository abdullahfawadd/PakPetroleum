# 3D Integration Strategy

## Overview
We integrate 3D elements to enhance the "National Energy Infrastructure" brand identity. The goal is to provide a modern, high-tech feel ("Energy-Grade Minimalism") without compromising performance or accessibility.

## Where to Use 3D
- **Hero Background:** An abstract "Energy Flow" scene to set the tone immediately.
- **Why:** Creates a strong visual hook and represents the dynamic nature of energy supply.
- **Implementation:** `SplineScene.tsx` using `@react-three/fiber` and `@react-three/drei`.

## Where NOT to Use 3D
- **Content-Heavy Sections:** Avoid 3D behind dense text (About, Operations) to preserve readability.
- **Mobile/Data Views:** Keep 3D minimal or disabled on small screens if performance drops.
- **Interactive Forms:** Do not use 3D where it might distract from critical user inputs (Contact forms).

## Performance-Safe Integration Plan

### 1. Lazy Loading
All 3D components are loaded lazily using `next/dynamic` with `ssr: false`. This ensures the initial HTML payload is small and the main thread is not blocked during hydration.

```tsx
const SplineScene = dynamic(() => import("@/components/3d/SplineScene"), {
  ssr: false,
  loading: () => <LoadingPlaceholder />,
});
```

### 2. Adaptive Resolution (`AdaptiveDpr`)
We use `@react-three/drei`'s `<AdaptiveDpr />` to automatically reduce the rendering resolution when the frame rate drops. This ensures smooth scrolling even on lower-end devices.

### 3. Simplified Geometry & Shaders
- **Geometry:** We use low-poly primitives (e.g., `Icosahedron`) or instanced meshes.
- **Materials:** We use standard materials or performant custom shaders (like `MeshDistortMaterial`) rather than expensive PBR textures or heavy post-processing effects.
- **Lighting:** Minimal light sources (Ambient + Directional) to reduce calculation overhead.

### 4. Pointer Events
The background scene is set to `pointer-events-none` to ensure it never intercepts scroll or click events intended for the UI.

### 5. Fallback Strategy
A lightweight CSS gradient is displayed while the 3D scene loads or if WebGL is unavailable.
