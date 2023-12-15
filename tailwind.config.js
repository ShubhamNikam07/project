/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'md': '576px',
      // => @media (min-width: 576px) { ... }

      // 'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px'},
    extend: {},
  },
  plugins: [],
}

