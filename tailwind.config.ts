import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /**
       * Color System (Dark Mode First)
       * Reference: DESIGN_SYSTEM.md Section 2
       */
      colors: {
        // Semantic Tokens
        body: "#020c1b", // Deepest Navy (Main Background)
        surface: "#0a192f", // Navy (Card/Section Background)
        elevated: "#112240", // Light Navy (Dropdowns, Hovers)

        // Color Scales
        navy: {
          DEFAULT: "#0a192f",
          950: "#020c1b", // bg-body
          900: "#0a192f", // bg-surface
          800: "#112240", // bg-elevated
          700: "#233554",
          600: "#303C55",
        },
        teal: {
          DEFAULT: "#64FFDA",
          400: "#64FFDA", // Primary Accent
          500: "#14b8a6", // Secondary Accent (Backgrounds)
          900: "#0f2e2b", // Badges
        },
        slate: {
          DEFAULT: "#8892b0",
          light: "#ccd6f6", // Text Primary
          muted: "#8892b0", // Text Secondary
          dark: "#495670", // Borders/Lines
        },
        amber: {
          DEFAULT: "#fbbf24",
          500: "#f59e0b", // Warning/Fuel
        },

        // Legacy/Compat Tokens (mapped to new system)
        primary: "#ccd6f6",
        secondary: "#8892b0",
        muted: "#495670",
      },

      /**
       * Typography System
       * Reference: DESIGN_SYSTEM.md Section 3
       */
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        // Alias
        heading: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      fontSize: {
        "hero": ["clamp(3rem, 8vw, 6rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "heading": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "subheading": ["clamp(1.25rem, 2.5vw, 1.75rem)", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "500" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        "caption": ["0.75rem", { lineHeight: "1.5" }],
        "overline": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.15em", fontWeight: "600" }],
      },

      /**
       * Spacing System (8pt Grid)
       * Reference: DESIGN_SYSTEM.md Section 4
       */
      spacing: {
        18: "4.5rem", // 72px
        22: "5.5rem", // 88px
        26: "6.5rem", // 104px
        30: "7.5rem", // 120px
        34: "8.5rem", // 136px
        38: "9.5rem", // 152px
      },

      /**
       * Border Radius (Industrial Strength = Reduced Rounding)
       * Reference: DESIGN_SYSTEM.md Section 6
       */
      borderRadius: {
        "2xl": "0.75rem", // 12px (Restricted)
        "3xl": "1rem",    // 16px (Restricted)
        "4xl": "1.5rem",  // 24px (Restricted)
      },

      /**
       * Visual Effects
       */
      backgroundImage: {
        "gradient-energy": "linear-gradient(135deg, #0a192f 0%, #112240 100%)",
        "gradient-teal": "linear-gradient(135deg, #64FFDA 0%, #14b8a6 100%)",
        "gradient-glow": "radial-gradient(ellipse at center, rgba(100, 255, 218, 0.15), transparent 70%)",
      },
      boxShadow: {
        "glow-teal": "0 0 40px rgba(100, 255, 218, 0.15)",
        "soft": "0 10px 30px rgba(2, 12, 27, 0.7)",
        "card": "0 10px 30px -10px rgba(2, 12, 27, 0.7)",
      },

      /**
       * Motion
       * Reference: MOTION.md
       */
      animation: {
        "marquee": "marquee 60s linear infinite",
        "marquee-reverse": "marquee-reverse 60s linear infinite",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "float": "float 8s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
