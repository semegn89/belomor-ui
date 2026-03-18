import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: { DEFAULT: "#0F3D91", dark: "#0A2B66", light: "#1E5BB5" },
        accent: "#F59E0B",
        "text-main": "#0C1222",
        "text-secondary": "#334155",
        muted: "#64748B",
        border: "#E2E8F0",
        "border-strong": "#CBD5E1",
        "soft-bg": "#F1F5F9",
        "surface": "#FFFFFF",
        "surface-muted": "#F8FAFC",
        success: "#16A34A",
        warning: "#D97706",
        error: "#DC2626",
      },
      maxWidth: {
        content: "1280px",
        layout: "1440px",
      },
      borderRadius: {
        card: "16px",
        "card-lg": "20px",
        input: "12px",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(12 18 34 / 0.04), 0 1px 2px -1px rgb(12 18 34 / 0.04)",
        "card-hover": "0 4px 12px -2px rgb(12 18 34 / 0.08), 0 2px 6px -2px rgb(12 18 34 / 0.04)",
        elevated: "0 8px 24px -4px rgb(12 18 34 / 0.08), 0 4px 12px -2px rgb(12 18 34 / 0.04)",
        "elevated-lg": "0 16px 48px -8px rgb(12 18 34 / 0.12), 0 8px 24px -4px rgb(12 18 34 / 0.06)",
        header: "0 1px 0 0 rgb(226 232 240 / 0.8)",
        "sticky-bar": "0 -4px 24px -4px rgb(15 61 145 / 0.1)",
      },
      letterSpacing: {
        "tight": "-0.02em",
        "tightest": "-0.03em",
      },
    },
  },
  plugins: [],
};

export default config;
