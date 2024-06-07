/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        playfair: "'playfair Display' serif",
        lato : "'Lato',sans-serif",
      }
    },
  },
  plugins: [],
}