import type { Config } from "tailwindcss";

// Every value below is pulled directly from the GearForgeLabs design system
// doc (Sections 1–3). If that doc changes, change it here first.

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: {
          950: "#0A0B0D",
          900: "#131417",
          800: "#1C1E22",
          700: "#262931",
          600: "#33363F",
        },
        steel: {
          400: "#8B8F98",
          200: "#C4C7CC",
        },
        fog: {
          100: "#EDEEF0",
        },
        ember: {
          900: "#2A1B12",
          500: "#C97A4A",
          400: "#DB9468",
        },
        // Product accents — one flat token each, exactly as named in the
        // design system doc. Never combine two of these in one view.
        "aurora-violet": "#8C7FFF",
        "signal-amber": "#E0A23D",
        "cloud-cyan": "#4FC3D9",
        "altitude-blue": "#4C7EFF",
        status: {
          success: "#4FAE7A",
          warning: "#E0A23D",
          error: "#D9564A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        // mobile-base sizes — pair with the `-lg` token at `md:` for the
        // desktop scale called out in the design doc.
        "display-hero": ["44px", { lineHeight: "48px", letterSpacing: "-0.02em" }],
        "display-hero-lg": ["72px", { lineHeight: "76px", letterSpacing: "-0.02em" }],
        "display-h1": ["36px", { lineHeight: "40px", letterSpacing: "-0.02em" }],
        "display-h1-lg": ["56px", { lineHeight: "60px", letterSpacing: "-0.02em" }],
        "display-h2": ["28px", { lineHeight: "34px", letterSpacing: "-0.01em" }],
        "display-h2-lg": ["40px", { lineHeight: "46px", letterSpacing: "-0.01em" }],
        "display-h3": ["28px", { lineHeight: "34px" }],
        "heading-h4": ["20px", { lineHeight: "28px" }],
        "body-l": ["18px", { lineHeight: "28px" }],
        "body-m": ["16px", { lineHeight: "24px" }],
        "body-s": ["14px", { lineHeight: "20px" }],
        caption: ["13px", { lineHeight: "18px", letterSpacing: "0.01em" }],
        overline: ["12px", { lineHeight: "16px", letterSpacing: "0.18em" }],
        "data-readout": ["14px", { lineHeight: "20px" }],
      },
      letterSpacing: {
        widest2: "0.18em",
      },
      transitionTimingFunction: {
        mechanical: "cubic-bezier(0.65, 0, 0.35, 1)",
        settle: "cubic-bezier(0.16, 1, 0.3, 1)",
        shutter: "cubic-bezier(0.83, 0, 0.17, 1)",
      },
      transitionDuration: {
        instant: "100ms",
        fast: "200ms",
        base: "350ms",
        slow: "600ms",
      },
      backgroundImage: {
        "spotlight-fade":
          "radial-gradient(circle at 50% 40%, var(--tw-spotlight-color, transparent) 0%, transparent 65%)",
      },
    },
  },
  plugins: [],
};
export default config;
