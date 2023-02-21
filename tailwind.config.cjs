/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".src/pages/admin/**.{js}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'fancy' : '37% 63% 70% 30% / 39% 30% 70% 61% '
      }
    },
  },
  plugins: [],
}