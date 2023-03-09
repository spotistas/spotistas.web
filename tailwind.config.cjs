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
      backgroundImage: {
        home: "url('/backgroundHome.jpg')",
        homeMobile: "url('/backgroundHomeMobile.png')",
        gradientHome: "linear-gradient(180deg, rgba(17, 17, 18, 0) 23.85%, #111112 83.73%);"

      }
    },
  },
  plugins: [],
}
