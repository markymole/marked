import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      colors: {
        asphalt: "#111",
      },
      fontFamily: {
        oswald: ["var(--font-oswald)"],
        karla: ["var(--font-karla)"],
        outfit: ["var(--font-outfit)"],
        montserrat: ["var(--font-montserrat)"],
        noto: ["var(--font-noto-sans)"],
        crimson: ["var(--font-crimson-pro)"],
      },
    },
  },
  plugins: [],
};
export default config;
