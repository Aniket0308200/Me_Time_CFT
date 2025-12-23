/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Screenshots ke hisab se colors:
        primary: "#FF8E85",      // Dark Peach/Salmon (Buttons ke liye)
        primaryLight: "#FFD8D0", // Light Peach (Cards background ke liye)
        background: "#FFFFFF",   // White Background
        surface: "#F9FAFB",      // Light Grey (Inputs/Sections ke liye)
        dark: "#1A1A1A",         // Main Text
        grey: "#9CA3AF",         // Secondary Text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}