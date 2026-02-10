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
        body: "#13101C",
        surface: "#1A1726",
        elevated: "#211D30",
        purple: {
          DEFAULT: "#C86FFF",
          deep: "#AC24FF",
          light: "#E59DFA",
          50: "#FAF0FF",
          100: "#F3DEFF",
          200: "#E8BDFF",
          300: "#D99AFF",
          400: "#C86FFF",
          500: "#AC24FF",
          600: "#9B1FE6",
          700: "#7A18B5",
          800: "#5C1287",
          900: "#3D0C5A",
        },
        blue: {
          DEFAULT: "#1B4DFE",
          400: "#5B7FFF",
          500: "#1B4DFE",
          600: "#1540D4",
          700: "#1033AA",
        },
        gold: {
          DEFAULT: "#FFD600",
          400: "#FFE033",
          500: "#FFD600",
        },
        orange: {
          DEFAULT: "#FE881B",
          400: "#FFA04D",
          500: "#FE881B",
        },
        pink: {
          DEFAULT: "#E59DFA",
          400: "#EDBDFC",
          500: "#E59DFA",
        },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        heading: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      fontSize: {
        "hero": ["clamp(2.75rem, 10vw, 8.5rem)", { lineHeight: "0.98", letterSpacing: "-0.035em", fontWeight: "700" }],
        "display": ["clamp(2.5rem, 7vw, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-lg": ["clamp(2.75rem, 7.5vw, 6.5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-md": ["clamp(2.25rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "700" }],
        "display-sm": ["clamp(1.85rem, 4.5vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "heading": ["clamp(2rem, 5vw, 3.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "subheading": ["clamp(1.4rem, 3.2vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "600" }],
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
        "gradient-brand": "linear-gradient(135deg, #AC24FF, #C86FFF, #E59DFA)",
        "gradient-full": "linear-gradient(135deg, #1B4DFE, #AC24FF, #E59DFA, #FFD600, #FE881B)",
        "gradient-glow": "radial-gradient(ellipse at center, rgba(200,111,255,0.15), transparent 70%)",
        "gradient-orb": "radial-gradient(circle, rgba(200,111,255,0.3) 0%, rgba(172,36,255,0.15) 40%, transparent 70%)",
      },
      boxShadow: {
        "glow-purple": "0 0 80px rgba(200, 111, 255, 0.25)",
        "glow-blue": "0 0 80px rgba(27, 77, 254, 0.2)",
        "glow-sm": "0 0 30px rgba(200, 111, 255, 0.25)",
        "soft": "0 20px 60px rgba(0, 0, 0, 0.3)",
        "card": "0 8px 40px rgba(200, 111, 255, 0.1)",
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
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
