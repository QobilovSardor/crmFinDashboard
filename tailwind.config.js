/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'black': "#141414",
        "blue": "#407BFF"
      },
      backgroundImage: {
        'intro-bg': "url('../images/intro-bg.png')"
      },
      fontFamily: {
        'Montserrat': ["Montserrat, 'sans-serif'"]
      }
    },
  },
  plugins: [],
}
