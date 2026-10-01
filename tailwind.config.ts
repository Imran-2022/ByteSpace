import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "var(--blue)",
          purple: "var(--purple)",
          "purple-dark": "var(--purple-dark)",
          lime: "var(--lime)",
          "lime-bright": "var(--lime-bright)",
          "lime-ring": "var(--lime-ring)",
        },
        ink: "var(--ink)",
        grey: {
          700: "var(--grey-700)",
          500: "var(--grey-500)",
          300: "var(--grey-300)",
          200: "var(--grey-200)",
          100: "var(--grey-100)",
        },
        surface: {
          DEFAULT: "var(--surface)",
          alt: "var(--surface-alt)",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        satoshi: ["var(--font-satoshi)"],
        clash: ["var(--font-clash)"],
      },
    },
  },
  plugins: [],
};

export default config;