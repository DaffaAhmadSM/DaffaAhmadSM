/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Hansief': ['"Hansief Rough Regular"'],
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        "redHoverActive" : "#B41923",
        "redHoverDeactive" : "#592D2D"
      },
      backgroundImage:{
        'noice': "url('./src/assets/img/Noice Invert.png')",
      },
      backgroundColor: {
        '2D2D2D': '#2D2D2D',
        "B41923" : "#B41923",
        "592D2D" : "#592D2D"
      }
      
    },
  },
  plugins: [],
}
