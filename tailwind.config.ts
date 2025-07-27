import type { Config } from "tailwindcss";

 


const config: Config = {
  content: [
    
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Add this if using Next.js App Router
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1A1A1A',
        'dark-gray': '#4A4A4A',
        'text-light': '#B0B0B0',
        'accent-orange': '#F28C38',
        'accent-blue': '#1DA1F2',
      },
      borderRadius: {
        'full': '9999px',
      },
      spacing: {},
    },
  },
  plugins: [],
};
export default config;