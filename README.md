<div align="center">

# ⛽ PAK Petroleum

### Powering Pakistan's Future

A premium, high-performance web platform for **PAK Petroleum** — Pakistan's trusted energy network for petroleum trading, distribution, and logistics across 25+ cities.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.14-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Three.js](https://img.shields.io/badge/Three.js-R182-000000?style=for-the-badge&logo=three.js)](https://threejs.org/)

</div>

---

## 🎬 Demo

https://github.com/user-attachments/assets/demo.mp4

> *A walkthrough of the PAK Petroleum website showcasing animations, smooth scrolling, and responsive design.*

https://github.com/abdullahfawadd/PakPetroleum/raw/main/pak-fuel/assets/demo.mp4

---

## ✨ Features

| Feature | Description |
|---|---|
| **Cinematic Preloader** | Custom animated preloader with brand reveal sequence |
| **Custom Cursor** | Interactive cursor that reacts to hoverable elements |
| **Smooth Scrolling** | Lenis-powered buttery smooth scroll experience |
| **Scroll Progress** | Visual indicator showing page scroll position |
| **GSAP Animations** | Scroll-triggered animations using GSAP & ScrollTrigger |
| **Framer Motion** | Fluid component transitions and micro-interactions |
| **3D Elements** | Three.js / React Three Fiber powered 3D visuals |
| **Responsive Design** | Fully responsive across all device sizes |
| **Dark Theme** | Elegant dark UI with purple/gold accent palette |
| **SEO Optimized** | Full Open Graph and Twitter Card meta configuration |

---

## 🏗️ Tech Stack

```
Frontend Framework  →  Next.js 14 (App Router)
Language            →  TypeScript 5
Styling             →  Tailwind CSS 3.4 + Custom Design System
Animation           →  GSAP 3.14 + Framer Motion 12
3D Graphics         →  Three.js + React Three Fiber + Drei
Smooth Scroll       →  Lenis
Icons               →  Lucide React
Fonts               →  Space Grotesk · Fraunces · Geist Mono
```

---

## 📁 Project Structure

```
pak-fuel/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles & Tailwind directives
│   │   ├── layout.tsx           # Root layout with fonts & metadata
│   │   ├── page.tsx             # Homepage orchestrating all sections
│   │   ├── fonts/               # Local font files
│   │   └── insights/
│   │       └── page.tsx         # Insights page
│   ├── components/
│   │   ├── effects/
│   │   │   ├── CustomCursor.tsx # Interactive custom cursor
│   │   │   └── Preloader.tsx    # Brand preloader animation
│   │   ├── layout/
│   │   │   ├── Footer.tsx       # Site footer
│   │   │   ├── Navigation.tsx   # Main navigation bar
│   │   │   └── ScrollProgress.tsx # Scroll progress indicator
│   │   └── sections/
│   │       ├── Hero.tsx         # Hero section with parallax
│   │       ├── TrustMarquee.tsx # Partner/trust logo marquee
│   │       ├── About.tsx        # About the company
│   │       ├── Operations.tsx   # Operations overview
│   │       ├── Approach.tsx     # Business approach
│   │       ├── Commitment.tsx   # Commitment & values
│   │       ├── FAQ.tsx          # Frequently asked questions
│   │       ├── Contact.tsx      # Contact form/info
│   │       └── ...              # Additional sections
│   ├── hooks/
│   │   ├── useGSAP.ts          # GSAP integration hook
│   │   └── useLenis.ts         # Lenis smooth scroll hook
│   └── lib/
│       ├── constants.ts         # Site config, stats & data
│       ├── gsap.ts              # GSAP setup & registration
│       └── utils.ts             # Utility functions
├── tailwind.config.ts           # Tailwind + custom design tokens
├── next.config.mjs              # Next.js configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# Clone the repository
git clone https://github.com/abdullahfawadd/PakPetroleum.git
cd PakPetroleum/pak-fuel

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

---

## 🎨 Design System

The project uses a custom dark-themed design system built on Tailwind CSS:

| Token | Value | Usage |
|---|---|---|
| `body` | `#13101C` | Page background |
| `surface` | `#1A1726` | Card backgrounds |
| `elevated` | `#211D30` | Elevated surfaces |
| `purple` | `#C86FFF` | Primary accent |
| `purple-deep` | `#AC24FF` | CTA & highlights |
| `blue` | `#1B4DFE` | Secondary accent |
| `gold` | `#FFD600` | Tertiary accent |
| `orange` | `#FE881B` | Warning / emphasis |

---

## 📊 Key Metrics

| Metric | Value |
|---|---|
| Fuel Stations | 150+ |
| Litres Distributed | 12M+ |
| Cities Covered | 25+ |
| Uptime Reliability | 99.9% |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is proprietary software owned by **PAK Petroleum**. All rights reserved.

---

<div align="center">

**Built with ❤️ for Pakistan's energy future**

[Report Bug](https://github.com/abdullahfawadd/PakPetroleum/issues) · [Request Feature](https://github.com/abdullahfawadd/PakPetroleum/issues)

</div>

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
