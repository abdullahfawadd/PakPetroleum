# Motion & Interaction System

## 1. Philosophy: Energy-Grade Minimalism
Our motion language reflects the core attributes of a national energy infrastructure provider: **Power, Stability, and Precision**.

- **Power:** Movements are substantial and deliberate. Large elements arrive with mass.
- **Stability:** No bouncing, elasticity, or whimsy. The interface feels grounded and reliable.
- **Precision:** Timing is mathematical. Transitions are clean, with no "jank" or uncertainty.

## 2. Core Directives

### 2.1 The "No-Bounce" Rule
Strictly prohibited easing curves:
- ❌ `back.out`, `back.in`, `back.inOut`
- ❌ `elastic.out`, `elastic.in`
- ❌ `bounce.out`

**Approved Easings (GSAP / Framer Motion):**
- ✅ **Power (`power3.out`):** Standard entry for most elements. Strong initial impulse, smooth deceleration.
- ✅ **Expo (`expo.out`):** High-tech reveals, count-ups, and overlays. Very fast start, long settle.
- ✅ **Circ (`circ.out`):** Mechanical precision. Used for technical diagrams and map pins.
- ✅ **Linear (`none`):** Continuous loops, marquees, and parallax.

### 2.2 Performance Safety
- Animate only `transform` (translate, scale, rotate) and `opacity`.
- Avoid animating `width`, `height`, `top`, `left` to prevent layout thrashing.
- Use `will-change: transform` sparingly for complex composites.
- Clean up all GSAP ScrollTriggers in `useGSAP` scope (`ctx.revert()`).

## 3. Technology Stack & Usage

| Library | Use Case |
| :--- | :--- |
| **GSAP** | Complex scroll-linked animations, timelines, sequenced reveals, WebGL integration. |
| **Framer Motion** | UI interactions (hover, tap), page transitions, simple component mounting/unmounting, layout shared elements. |
| **Lenis** | Smooth scrolling normalization. |

## 4. Interaction Logic

### 4.1 Navigation
- **Desktop:**
  - **Hover:** Text color shifts immediately to `teal-400`. Optional: underline draws from left (`scaleX: 0 -> 1`).
  - **Mega Menu:** Slides down with `circ.out` (mechanical feel).
- **Mobile:**
  - **Menu Open:** Backdrop fades in (`opacity: 0 -> 1`). Menu panel slides from right (`x: 100% -> 0%`) using `power3.out`.
  - **Stagger:** Links reveal sequentially with 0.05s delay.

### 4.2 Buttons & Links
- **Primary Button:**
  - **Hover:** Background brightens or shifts hue slightly. No scaling up (maintain stability).
  - **Active/Click:** subtle scale down (`0.98`) is permitted for tactile feedback.
- **Cards:**
  - **Hover:** Border highlights (`border-teal-400`). Subtle lift (`y: -4px`) is allowed but must be slow and smooth.

### 4.3 Page Transitions
- **Exit:** Current page content fades out (`opacity: 0`) and moves slightly up (`y: -20px`). Duration: 0.4s.
- **Enter:** New page content fades in (`opacity: 0 -> 1`) from slightly below (`y: 20px -> 0`). Duration: 0.6s.
- **Ease:** `power3.out`.

## 5. Section Animation Plan

### 5.1 Hero Section
- **Trigger:** On Load.
- **Sequence:**
  1.  Background/3D Scene fades in.
  2.  Headline reveals (Staggered lines or characters). `power3.out`.
  3.  Subheading & CTA fade up.
  4.  Scroll Indicator fades in last.
- **Parallax:** Background moves at 20% speed of scroll.

### 5.2 Metrics & Trust (Trust Ticker)
- **Trigger:** `ScrollTrigger` (start: "top 85%").
- **Sequence:**
  - Stats container fades up.
  - Numbers count up from 0 to value (`expo.out`, 2.5s duration).
  - Trust logos/badges fade in with stagger.

### 5.3 Infrastructure Map (National Footprint)
- **Trigger:** Scroll scrub or pinning.
- **Behavior:**
  - Map pins drop in (`y: -20 -> 0`, `opacity: 0`) sequentially.
  - Connection lines draw (`stroke-dashoffset`) from hub to spokes.

### 5.4 Operations & Services
- **Trigger:** Scroll (Batch reveal).
- **Behavior:** Cards scale in slightly (`scale: 0.95 -> 1`) and fade up (`y: 30 -> 0`). Staggered by 0.1s.

### 5.5 Contact / Footer
- **Trigger:** Scroll.
- **Behavior:** Simple fade up. "Contact" button may have a continuous subtle pulse or shine effect if it's the primary conversion goal.

## 6. Code Reference (src/lib/motion.ts)

Use the defined constants to ensure consistency:

```typescript
import { EASINGS, TRANSITION, VARIANTS } from "@/lib/motion";

// GSAP
gsap.to(target, {
  y: 0,
  opacity: 1,
  ease: EASINGS.POWER,
  duration: 0.8
});

// Framer Motion
<motion.div
  variants={VARIANTS.FADE_UP}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
/>
```
