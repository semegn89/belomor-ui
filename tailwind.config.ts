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
        primary: { DEFAULT: "#0F3D91", dark: "#0A2B66" },
        accent: "#F59E0B",
        "text-main": "#0F172A",
        "text-secondary": "#334155",
        muted: "#64748B",
        border: "#CBD5E1",
        "soft-bg": "#F8FAFC",
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
        input: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
