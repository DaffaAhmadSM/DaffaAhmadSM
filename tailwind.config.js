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
        'poppins': ['Poppins', 'sans-serif'],
        'Redwing': ['"Redwing Regular"'],
      },
      colors: {
        "redHoverActive" : "#B41923",
        "redHoverDeactive" : "#592D2D"
      },
      backgroundImage:{
        'noice': "url('./src/assets/img/Noice.png')",
        'noiceInvert': "url('./src/assets/img/NoiceInvert.png')",
      },
      backgroundColor: {
        '2D2D2D': '#2D2D2D',
        "B41923" : "#B41923",
        "592D2D" : "#592D2D"
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'cubic-menu': 'cubic-bezier(0.87, 0.23, 0.13, 0.77)'

      }
      
    },
  },
  plugins: [],
}
