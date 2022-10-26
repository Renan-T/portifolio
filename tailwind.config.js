/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'righteous': ['Righteous'],
      'josefin': ['Josefin Sans']
    },
    screens: {
      'xs': '445px',
      ...defaultTheme.screens,
      'lg': '992px'
    }
  },
  plugins: [],
}
