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
          red: '#E30613',
          redHover: '#C7000B',
          redDark: '#8F0006',
          dark: '#0B0F19',
          darkCard: '#131927',
          grayText: '#8A95A5',
          lightBg: '#F5F7FA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
