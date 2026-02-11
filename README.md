<div align="center">

# ⛽ PAK Petroleum

### Powering Pakistan's Future

A premium, high-performance web platform for **PAK Petroleum** — Pakistan's trusted energy network for petroleum trading, distribution, and logistics across 25+ cities.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.14-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Three.js](https://img.shields.io/badge/Three.js-R182-000000?style=for-the-badge&logo=three.js)](https://threejs.org/)

</div>

---

## 📖 Overview

**PAK Petroleum** is designed to be more than just a corporate website; it is a digital manifestation of the company's scale, reliability, and operational depth. The platform serves as a central hub for stakeholders, partners, and customers, offering a seamless experience that reflects the company's commitment to excellence.

Built with a **"Dark-Mode-First"** philosophy, the interface prioritizes low-light efficiency and reduces eye strain, aligning with modern energy-saving principles. The design language, **"Energy-Grade Minimalism,"** ensures that essential information stands out instantly, free from clutter and distraction.

### Core Objectives
- **Scale:** Demonstrate national reach and infrastructure volume through interactive maps and data visualizations.
- **Trust:** Highlight safety records, compliance certifications, and years of operation.
- **Operational Depth:** Showcase the complexity of logistics, trading, and technology integration.

---

## 📊 Key Metrics

| Metric | Value |
|---|---|
| **Fuel Stations** | 150+ |
| **Litres Distributed** | 12M+ |
| **Cities Covered** | 25+ |
| **Uptime Reliability** | 99.9% |

---

## ✨ Key Features

| Feature | Description |
|---|---|
| **Cinematic Experience** | Custom animated preloader with brand reveal sequence and smooth transitions. |
| **Interactive Cursor** | Custom cursor that reacts to hoverable elements, enhancing user engagement. |
| **Smooth Scrolling** | `Lenis`-powered buttery smooth scroll experience for fluid navigation. |
| **GSAP Animations** | Scroll-triggered animations using GSAP & ScrollTrigger for dynamic storytelling. |
| **3D Visualization** | `Three.js` and `React Three Fiber` powered 3D visuals representing energy infrastructure. |
| **Responsive Design** | Fully responsive layout optimized for all device sizes, from mobile to desktop. |
| **Server-First Architecture** | Optimized for performance and SEO using Next.js Server Components. |
| **SEO Ready** | Full Open Graph and Twitter Card meta configuration for better social sharing. |

---

## 🏗️ Tech Stack

The project leverages a modern, robust technology stack to deliver a high-performance experience.

### Core
- **Framework:** [Next.js 14.2 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Runtime:** Node.js / Bun
- **State Management:** React Context & Hooks

### Styling & Design
- **CSS Framework:** [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Space Grotesk (Body), Fraunces (Display), Geist Mono (Data)

### Animation & 3D
- **Animation Engine:** [GSAP 3.14](https://gsap.com/)
- **Micro-interactions:** [Framer Motion 12](https://www.framer.com/motion/)
- **3D Graphics:** [Three.js R182](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [Drei](https://github.com/pmndrs/drei)
- **Smooth Scroll:** [Lenis](https://lenis.studiofreight.com/)

---

## 📐 Architecture & Design System

The project strictly adheres to the **PAK Petroleum Design System**, which emphasizes authority, innovation, and industrial strength.

### Server-First Approach
We utilize Next.js Server Components by default for optimal performance and SEO. Client components are used sparingly for interactivity, animations, and state management.

### Color Palette
- **Deep Navy (`#020c1b`)**: The foundation of the interface, representing the depth of the ocean and the night sky.
- **Teal (`#64FFDA`)**: The primary accent, symbolizing clean energy, nature, and technological precision.
- **Slate (`#8892b0`)**: Used for body text and secondary information, providing excellent readability against dark backgrounds.
- **Amber (`#f59e0b`)**: Used sparingly for warnings and energy indicators.

### Typography
- **Fraunces**: A variable serif font used for headlines to convey heritage and authority.
- **Space Grotesk**: A geometric sans-serif for UI text, reflecting innovation and industrial strength.
- **Geist Mono**: A monospaced font for data tables and technical specifications, ensuring precision.

### Spacing & Grid
- **8pt Grid System**: All spacing is a multiple of 8px (0.5rem) to ensure visual rhythm and consistency.
- **12-Column Grid**: Layouts are structured on a flexible 12-column grid.

---

## 🎥 Motion Guidelines

Our motion philosophy is defined by **Power, Stability, and Precision**.

- **Power:** Animations feel substantial and deliberate. Elements arrive with weight.
- **Stability:** Avoid erratic or bouncy movements. The interface feels grounded.
- **Precision:** Timing is mathematical and exact. Transitions are clean and intentional.

**Key Rules:**
- No bouncing or playful easing.
- Use `power3.out` or `expo.out` for impactful reveals.
- Use `linear` easing for continuous loops and parallax effects.
- Motion is functional, not decorative. "If it moves, it has a purpose."

---

## 📁 Project Structure

```
pak-fuel/
├── src/
│   ├── app/                 # Next.js App Router pages & layouts
│   │   ├── careers/         # Careers page
│   │   ├── company/         # Company profile
│   │   ├── design-system/   # Design system showcase
│   │   ├── operations/      # Operations overview
│   │   ├── globals.css      # Global styles & Tailwind directives
│   │   ├── layout.tsx       # Root layout with fonts & metadata
│   │   └── page.tsx         # Homepage orchestrating all sections
│   ├── components/          # Reusable React components
│   │   ├── 3d/              # Three.js/Spline scenes
│   │   ├── effects/         # Visual effects (Cursor, Preloader)
│   │   ├── layout/          # Layout components (Nav, Footer)
│   │   ├── providers/       # Context providers (Theme, Lenis)
│   │   ├── sections/        # Page-specific sections (Hero, About, Operations)
│   │   └── ui/              # Atomic UI components
│   ├── hooks/               # Custom React hooks (useGSAP, useLenis, useMediaQuery)
│   ├── lib/                 # Utility functions & configurations
│   └── ...
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── next.config.mjs          # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm**, **yarn**, **pnpm**, or **bun** (recommended)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/abdullahfawadd/PakPetroleum.git
    cd PakPetroleum/pak-fuel
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    # or
    npm install
    ```

3.  **Start the development server:**
    ```bash
    bun dev
    # or
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

To create an optimized production build:

```bash
bun run build
bun start
# or
npm run build
npm start
```

---

## 🤝 Contributing

We welcome contributions to improve the platform! Please follow these steps:

1.  Fork the repository.
2.  Create a feature branch: `git checkout -b feature/amazing-feature`
3.  Commit your changes: `git commit -m 'Add amazing feature'`
4.  Push to the branch: `git push origin feature/amazing-feature`
5.  Open a Pull Request.

Please ensure your code follows the project's coding standards and design guidelines.

---

## 📄 License

This project is proprietary software owned by **PAK Petroleum**. All rights reserved.

---

<div align="center">

**Built with ❤️ for Pakistan's energy future**

[Report Bug](https://github.com/abdullahfawadd/PakPetroleum/issues) · [Request Feature](https://github.com/abdullahfawadd/PakPetroleum/issues)

</div>
