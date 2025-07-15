/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'black': "#141414",
        "blue": "#407BFF",
        'gray': "#707D89",
        "light": "#F4F7FF"
      },
      backgroundImage: {
        'intro-bg': "url('../images/intro-bg.webp')",
        "chart-bg": "url('../images/chart-bg.webp')"
      },
      lineHeight: {
        'full': "100%"
      },
      fontFamily: {
        'Montserrat': ["Montserrat, 'sans-serif'"]
      }
    },
  },
  plugins: [],
}
