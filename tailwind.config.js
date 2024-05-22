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
        'sans_serif': ["Josefin Sans"],
        'barlow': ["Barlow"],
        'josefin': ["Josefin Sans"],
        'bar_cd':["Barlow Condensed"],
        'barlow-2':["Barlow Condensed"]
      },
    },
    screens: {
      'xxs':'325px',
      'xsm': '400px',
      'sm':'640px',
      'md': '768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',
   },
  },
  plugins: [],
}