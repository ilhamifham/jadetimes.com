import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-poppins)"],
    },
    extend: {
      colors: {
        heading: "#111111",
        accent: "#DA331B",
      },
    },
    screens: {
      ...defaultTheme.screens,
      sm: "600px",
      lg: "1200px",
      xl: "1400px",
    },
  },
  plugins: [],
} satisfies Config;
