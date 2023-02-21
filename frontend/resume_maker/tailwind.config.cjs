/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm':'350px',
      'md':'768px',
      'lg':'968px',
      'xl':'1280px'
    },    
    
    extend: {

      colors:{
        primary:'#007CE1',
        primary2:'#41B0FC',
        grey:'#a8b0b9',
        blur:'#070F1899',
        red:"#f27575",

        Professional1:'#4A89B0',
        Professional2:'#455AA3',
        Professional3:'#4685C6',
        Professional4:'#492C89',
        Professional5:'#69599C',
        Professional6:'#FF7D8A',

        Fancy1:'black',
        Fancy2:'#34678C',
        Fancy3:'#313C4E',
        Fancy4:'#CE293D',
        Fancy5:'#C9483A',
        Fancy6:'#7C1313',

      },
  
    },
  },
  plugins: [],
})
