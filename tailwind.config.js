/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      fontFamily: {
        body: ['Figtree'],
        ubuntu: ['Ubuntu Sans Mono'],
        blackops: ['Black Ops One']
      }

    },
  },
  plugins: [],
}