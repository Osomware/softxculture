const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['var(--raleway-font)', ...fontFamily.sans],
        staatliches: ['var(--staatliches-font)', ...fontFamily.sans],
      },
      colors: {
        'midnight': '#142632',
        'ghost': '#a2aab0',
        'rain': '#4c586f',
        'coffee': '#3e3e3b',
      },
    },
  },
  plugins: [],
}
