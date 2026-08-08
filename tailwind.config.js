/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#2E0854',
          purple: '#6B21A8',
          deepPurple: '#3B0764',
          pink: '#E91E8C',
          pinkHover: '#D81B7D',
          green: '#16A34A',
          blue: '#1D4ED8',
          purpleCard: '#7E22CE',
          gold: '#B45309',
          lightBg: '#FAFAFD',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
