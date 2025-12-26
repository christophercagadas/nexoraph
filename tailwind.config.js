/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#E5EAEC',
          100: '#CCD6D9',
          200: '#B3C2C6',
          300: '#99ADB3',
          400: '#8099A0',
          500: '#67858D',
          600: '#4D707A',
          700: '#345C67',
          800: '#1B4854',
          900: '#023441',
        },
      },
    },
  },
  plugins: [],
}
