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
        bgFooter: '#171A20',
        bgMain: '#111112'
      },
      fontFamily: {
        poppins: ['Poppins'],
        gotham: ['gotham']
      },
      backgroundImage: {
        home: "url('/backgroundHome.jpg')",
        homeMobile: "url('/backgroundHomeMobile.png')",
        monthArtist: "url('/duaLipabg.png')",
        gradientHome: "linear-gradient(180deg, rgba(17, 17, 18, 0) 23.85%, #111112 83.73%);",
        gradientImage: "linear-gradient(180deg, rgba(0, 0, 0, 0) 12.26%, rgba(0, 0, 0, 0.75) 60.01%);",
        gradientGrid: "linear-gradient(180deg, #48313D 0%, #171A20 68.44%);"
      },
      screens: {
        xxl : '1410px'
      }
    },
  },
  plugins: [],
}
