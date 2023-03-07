/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        greenButton: '#1ED760',
        textHeader: '#1E1E1E',
        bgFooter: '#171A20'

      },
      fontFamily: {
        poppins: ['Poppins'],
        gotham: ['gotham']
      },
    },
  },
  plugins: [],
}
