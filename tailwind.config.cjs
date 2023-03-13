/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    fontFamily: {
      //Montserrat
      'montserrat': ["Montserrat", "sans-serif"],
    },

    screens: {
      'xs': {'max': '320px'},
      'xs-360': {'max': "370px"},
      'sm-412': {"max": "420px"},

      'sm-414': {"max": "418px"},
      'sm-428': {"max": "435px"},

      'sm': {"max": '640px'},
      'md': {"max": '768px'},
      'lg': {"max": '1024px'},
    
    },

  },

  plugins: [],
}

