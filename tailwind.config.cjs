/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        greenButton: '#1ED760'
      },
      fontFamily: {
        poppins: ['Poppins'],
        gotham: ['gotham']
      },
    },
  },
  plugins: [],
}
