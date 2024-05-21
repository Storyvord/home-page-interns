/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
     
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #012284 0%, #08477E 23%, #1AA36E 73%, #25D865 100%)',
        
      },

      colors:{
        shark:{
          950:"#212529",
        },
        congress:{
          800:"#023e8a"
        }
      },
      fontFamily: {
        'Josefin-Sans': ["Josefin Sans"],
        'barlow':["Barlow"],
        'barlow-2':["Barlow Condensed"],
        'jacquard':["Jacquard 12"],

        'sans_serif': ["Josefin Sans"],
        'barlow': ["Barlow"],

        'josefin': ["Josefin Sans"],
        'barlow':["Barlow"],

        'barlow-2':["Barlow Condensed"],
        'jacquard':["Jacquard 12"],

        'barlow-2':["Barlow Condensed"]



      },

    },
  },
  plugins: [],
}