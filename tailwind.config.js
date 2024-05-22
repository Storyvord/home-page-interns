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
          
          'sans_serif': ["Josefin Sans"],
          'barlow':["Barlow"],

          'josefin': ["Josefin Sans"],
          'barlow-2':["Barlow Condensed"],

          'Josefin-Sans': ["Josefin Sans"],
          'jacquard':["Jacquard 12"],
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
