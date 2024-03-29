/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      colors: {
        green: '#1ED760',
        textHeader: '#1E1E1E',
        bgFooter: '#171A20',
        bgMain: '#111112',
      },
      fontFamily: {
        poppins: ['Poppins'],
        gotham: ['gotham'],
      },
      backgroundImage: {
        home: "url('/backgroundHome.jpg')",
        homeMobile: "url('/backgroundHomeMobile.png')",
        play: "url('/play-circle-bold.svg')",
        pause: "url('/pause-circle-bold.svg')",
        gradientHome:
          'linear-gradient(180deg, rgba(17, 17, 18, 0) 23.85%, #111112 83.73%);',
        gradientGrid: 'linear-gradient(180deg, #48313D 0%, #171A20 68.44%);',
        gradientTrending:
          'linear-gradient(180deg, #EB9623 -59.61%, #171A20 100%);',
      },
      screens: {
        xxl: '1410px',
        smm: '400px',
      },
    },
  },
  plugins: [],
}
