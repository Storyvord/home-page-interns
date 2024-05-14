/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        shark:{
          950:"#212529",
        },
        congress:{
          800:"#023e8a"
        }
      },
      fontFamily: {
        'sans-serif': ["Josefin Sans"],
      },

    },
  },
  plugins: [],
}