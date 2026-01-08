/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          emerald: "#2B4139",
          wasabi: "#809076",
          khaki: "#F0D794",
          earth: "#B86B30",
          noir: "#111419",
        },
      },
    },
  },
  plugins: [],
};
