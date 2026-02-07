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
        bg: {
          DEFAULT: "#050505",
          surface: "#0A0A0A",
          card: "#0F0F0F",
          elevated: "#141414",
          muted: "#1A1A1A",
        },
        text: {
          primary: "#F5F5F5",
          secondary: "#999999",
          muted: "#555555",
          dark: "#333333",
        },
        brand: {
          blue: "#0B3D91",
          green: "#00703C",
          gold: "#FFC857",
        },
        accent: {
          blue: "#3B7BF7",
          green: "#22C55E",
          gold: "#FBBF24",
          purple: "#A855F7",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.06)",
          light: "rgba(255,255,255,0.1)",
          active: "rgba(255,255,255,0.15)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        /* Hero / display sizes - massive like eternacloud */
        "hero": ["clamp(3.5rem, 12vw, 10rem)", { lineHeight: "0.95", letterSpacing: "-0.04em", fontWeight: "800" }],
        "display": ["clamp(3rem, 8vw, 6.5rem)", { lineHeight: "1.0", letterSpacing: "-0.035em", fontWeight: "700" }],
        "heading": ["clamp(2rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }],
        "subheading": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        "body-lg": ["1.25rem", { lineHeight: "1.7" }],
        "body": ["1.0625rem", { lineHeight: "1.7" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.6" }],
        "caption": ["0.8125rem", { lineHeight: "1.5" }],
        "overline": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.15em", fontWeight: "500" }],
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
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #0B3D91, #00703C, #FFC857)",
        "gradient-blue": "linear-gradient(135deg, #0B3D91, #3B7BF7)",
        "gradient-glow": "radial-gradient(ellipse at center, rgba(11,61,145,0.15), transparent 70%)",
      },
      boxShadow: {
        "glow-blue": "0 0 80px rgba(11, 61, 145, 0.25)",
        "glow-green": "0 0 80px rgba(0, 112, 60, 0.2)",
        "glow-gold": "0 0 80px rgba(255, 200, 87, 0.15)",
        "glow-sm": "0 0 30px rgba(59, 123, 247, 0.15)",
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "counter": "counter 2.5s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
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
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-expo": "cubic-bezier(0.7, 0, 0.84, 0)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
