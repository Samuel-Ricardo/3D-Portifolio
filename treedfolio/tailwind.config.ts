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
        primary: "#050816",
        secondary: "#AAA6C3",
        tertiary: "#151030",
        "black-100": "#100D25",
        "black-200": "#090325",
        "white-100": "#F3F3F3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211E35",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
export default config;
