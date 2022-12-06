/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto'],
    },
    extend: {
      colors: {
        darkcyan: '#10a383',
      },
      borderRadius: {
        5: '5px',

      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
      }
    },
  },
  plugins: [],
}
