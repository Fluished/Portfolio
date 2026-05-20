import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        secondary: "var(--secondary)",
        card: "var(--card)",
        accent: "var(--accent)",
        text: "var(--text)",
        muted: "var(--muted)",
      },
    },
  },
  plugins: [],
};

export default config;