import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F3E5D8", 
        secondary: "#DCB182",
        accent: "#B6A99C",
        textcss:"#8A7B6D",
        seBg:"#EEDECD",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        neon: '0px 0px 2px 2px rgba(160, 124, 254, 0.8), 0px 0px 2px 2px rgba(254, 143, 181, 0.6), 0px 0px 2px 2px rgba(255, 190, 123, 0.6)',
      },
    },
  },
  plugins: [],
};
export default config;
