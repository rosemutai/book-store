/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'turquoise': '#419bf9',
        'cornflower-blue': '#419bf9',
      }
    },
  },
  plugins: [],
}