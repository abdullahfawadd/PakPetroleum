import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#020c1b", // Deepest Navy
        surface: "#0a192f", // Navy
        elevated: "#112240", // Light Navy
        navy: {
          DEFAULT: "#0a192f",
          950: "#020c1b",
          900: "#0a192f",
          800: "#112240",
          700: "#233554",
          600: "#303C55",
        },
        teal: {
          DEFAULT: "#64FFDA",
          400: "#64FFDA",
          500: "#14b8a6", // Darker teal for backgrounds
          900: "#0f2e2b", // Very dark teal for badges
        },
        slate: {
          DEFAULT: "#8892b0",
          light: "#ccd6f6", // Primary text
          muted: "#8892b0", // Secondary text
          dark: "#495670", // Borders/lines
        },
        amber: {
          DEFAULT: "#fbbf24", // Fuel/Warning
          500: "#f59e0b",
        },
        primary: "#ccd6f6", // Text Primary
        secondary: "#8892b0", // Text Secondary
        muted: "#495670", // Text Muted
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
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
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
        38: "9.5rem",
      },
      borderRadius: {
        "2xl": "0.75rem",
        "3xl": "1rem",
        "4xl": "1.5rem",
      },
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
