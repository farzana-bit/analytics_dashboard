import type { Config } from "tailwindcss";

const config: Config = {
  // 1. This tells Tailwind which files to scan for class names
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  // 2. Enable class-based dark mode
  darkMode: "class", 

  theme: {
    extend: {
      // You can add custom brand colors here if needed
      colors: {
        // Example: Primary brand color
        brand: {
          50: "#f0fdf4",
          500: "#10b981",
          600: "#059669",
        },
      },
    },
  },
  plugins: [],
};

export default config;