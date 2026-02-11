# PAK Petroleum Design System (LOCKED)

**Version:** 1.0.0
**Status:** LOCKED

This document serves as the authoritative source of truth for the PAK Petroleum design system. Any deviations must be approved by the design lead.

---

## 1. Design Philosophy: "Energy-Grade Minimalism"

Our visual identity is built on four core pillars that reflect our mission as a national energy leader.

### **Authority**
*We are the backbone.*
Our design language must convey stability, reliability, and the weight of our responsibility. We use bold typography, deep colors, and structured layouts to command respect and trust.

### **Innovation**
*We are the future.*
While rooted in tradition, we are forward-thinking. We use modern sans-serif typefaces, subtle gradients, and clean lines to signal technological advancement and efficiency.

### **Industrial Strength**
*We are built to last.*
Our aesthetic borrows from the physical world of energy infrastructure: pipelines, refineries, and grids. This translates to robust borders, mechanical precision, and a lack of frivolous decoration.

### **Environmental Responsibility**
*We are conscious.*
We balance our industrial nature with a commitment to sustainability. This is reflected in our use of Teal (representing clean energy and nature) as a primary accent against the dark, industrial Navy background.

---

## 2. Color System

We operate on a **Dark-Mode-First** philosophy. Our interfaces are designed to be low-light efficient, reducing eye strain and saving energy on OLED displays.

### **Primary Palette**

| Token Name | Tailwind Class | Hex Value | Usage Rule |
| :--- | :--- | :--- | :--- |
| **Deep Navy** | `bg-body` / `navy-950` | `#020c1b` | **Main Background**. The deepest layer (page body). |
| **Navy** | `bg-surface` / `navy-900` | `#0a192f` | **Surface Background**. Cards, sections, elevated areas. |
| **Light Navy** | `bg-elevated` / `navy-800` | `#112240` | **Elevated Elements**. Modals, dropdowns, hover states. |
| **Teal** | `text-teal` / `teal-400` | `#64FFDA` | **Primary Accent**. Links, active states, key data points. |
| **Teal Dark** | `teal-500` | `#14b8a6` | **Secondary Accent**. Backgrounds for teal elements. |
| **Slate** | `text-slate` / `slate-400` | `#8892b0` | **Secondary Text**. Body copy, descriptions. |
| **White/Light** | `text-primary` / `slate-light` | `#ccd6f6` | **Primary Text**. Headings, critical information. |
| **Amber** | `text-amber` / `amber-500` | `#f59e0b` | **Warning/Status**. Energy, fuel indicators. |

### **Usage Rules**
1.  **Backgrounds:** MUST use the Navy scale (`#020c1b` -> `#0a192f` -> `#112240`). Pure black (`#000000`) is forbidden.
2.  **Text:** MUST use the Slate scale (`#ccd6f6` -> `#8892b0` -> `#495670`). Pure white (`#ffffff`) is discouraged except for specific high-contrast needs.
3.  **Accents:** MUST use Teal (`#64FFDA`) for interactive elements and primary highlights.
4.  **Semantic Colors:** Use Amber for warnings or energy metrics. Red is reserved for critical errors only.

---

## 3. Typography Hierarchy

We use a tri-font system to balance elegance, modernity, and data precision.

### **Font Families**

1.  **Display: Fraunces** (`font-display`)
    -   **Role:** Headings, Hero Statements.
    -   **Characteristics:** Serif, variable weight, editorial feel.
    -   **Usage:** H1, H2, major callouts.
    -   **Why:** Adds "Authority" and "Heritage".

2.  **Body: Space Grotesk** (`font-sans`)
    -   **Role:** UI Text, Navigation, Paragraphs.
    -   **Characteristics:** Sans-serif, geometric, technical.
    -   **Usage:** Default interface typeface.
    -   **Why:** Reflects "Innovation" and "Industrial Strength".

3.  **Data: Geist Mono** (`font-mono`)
    -   **Role:** Tables, Metrics, Code, Technical Specifications.
    -   **Characteristics:** Monospace, legible, precise.
    -   **Usage:** Numbers, financial data, technical labels.
    -   **Why:** Ensures readability and precision for "Industrial Data".

### **Typography Scale**

| Token | Size (Clamp) | Line Height | Tracking | Weight | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero** | `clamp(3rem, 8vw, 6rem)` | `1.1` | `-0.02em` | `700` | Homepage Hero |
| **Display** | `clamp(2.5rem, 6vw, 5rem)` | `1.1` | `-0.02em` | `700` | Section Headers |
| **Heading** | `clamp(2rem, 4vw, 3.5rem)` | `1.2` | `-0.01em` | `600` | Article Titles |
| **Subheading** | `clamp(1.25rem, 2.5vw, 1.75rem)` | `1.4` | `0` | `500` | Section Subtitles |
| **Body LG** | `1.125rem` | `1.6` | `0` | `400` | Lead Paragraphs |
| **Body** | `1rem` | `1.6` | `0` | `400` | Standard Text |
| **Body SM** | `0.875rem` | `1.5` | `0` | `400` | UI Labels, Footer |
| **Caption** | `0.75rem` | `1.5` | `0` | `400` | Metadata, Hints |
| **Overline** | `0.75rem` | `1.5` | `0.15em` | `600` | Uppercase Tags |

---

## 4. Spacing System (8pt Grid)

All spacing (padding, margin, gap) must align with the **8pt grid** (multiples of 8px).

| Token | Rem | Px | Usage |
| :--- | :--- | :--- | :--- |
| `0.5` | 0.125rem | 2px | Micro adjustments |
| `1` | 0.25rem | 4px | Tight grouping |
| `2` | 0.5rem | 8px | **Base Unit** |
| `3` | 0.75rem | 12px | Component internal spacing |
| `4` | 1rem | 16px | Component padding |
| `6` | 1.5rem | 24px | Small section separation |
| `8` | 2rem | 32px | Medium section separation |
| `12` | 3rem | 48px | Layout blocking |
| `16` | 4rem | 64px | Large section gaps |
| `24` | 6rem | 96px | Section vertical padding (Desktop) |
| `32` | 8rem | 128px | Hero vertical padding |

**Rule:** Avoid arbitrary values (e.g., `13px`). Always snap to the nearest token.

---

## 5. Grid System

We use a standard **12-column grid**.

-   **Columns:** 12
-   **Gutter:** 24px (1.5rem) on Desktop, 16px (1rem) on Mobile.
-   **Max Width:** 1400px (Centered).

### **Common Layouts**
-   **Full Width:** `col-span-12`
-   **Half Width:** `col-span-6` (2 columns)
-   **Thirds:** `col-span-4` (3 columns)
-   **Asymmetric:** `col-span-4` + `col-span-8` (Sidebar + Content)

---

## 6. Component Styling Rules

### **Buttons**
-   **Primary:** Solid Teal background (`bg-teal-400`), Dark Text (`text-navy-950`). Sharp corners or minimal rounding (`rounded-sm` or `rounded`).
-   **Secondary:** Outline Teal (`border-teal-400`), Transparent background.
-   **Hover:** Subtle lift (`-translate-y-0.5`), slight shadow (`shadow-glow-teal`).

### **Cards**
-   **Background:** Navy (`bg-navy-900`) or Glass (`bg-navy-800/80`).
-   **Border:** Subtle, 1px solid (`border-white/10`).
-   **Shadow:** Deep, soft shadow (`shadow-xl`).
-   **Hover:** Border highlights to Teal (`border-teal-400/50`).

### **Inputs**
-   **Background:** Light Navy (`bg-navy-800`).
-   **Border:** `border-white/10`.
-   **Focus:** `border-teal-400`, `ring-1 ring-teal-400`.
-   **Text:** `text-slate-light`.

### **Dividers**
-   **Style:** `h-px`, Gradient or solid subtle color.
-   **Color:** `bg-white/10` or `from-transparent via-teal-500/20 to-transparent`.

---

## 7. Motion Guidelines (Summary)

Based on `MOTION.md`.

-   **Philosophy:** Power, Stability, Precision.
-   **Easing:** `power3.out`, `power4.out` (Standard), `expo.out` (Snappy).
-   **Forbidden:** Bouncing, Elastic easing.
-   **Duration:** Typically `0.3s` - `0.5s` for UI interactions.

---

## 8. Implementation Guide

### **Tailwind Config**
Ensure `tailwind.config.ts` reflects these exact values. Use CSS variables for colors to support potential theming, but lock values to the Navy/Teal palette.

### **Global CSS**
Define CSS variables in `:root` corresponding to the color tokens.
