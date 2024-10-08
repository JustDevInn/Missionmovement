/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  container: {
    padding: {
      DEFAULT: '20px',
      lg: '0',
    },
  },
  theme: {
    fontFamily: {
      primary: ['Helvetica Neue', 'sans-serif'],
      secondary: ['Teko', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#101010',
        yellow: '#FFCC00',
        brown: '#8E774F',
      },
      backgroundImage: {
        'royalmarine': "url('./img/royalmarines.jpg')",
        'barret': "url('./img/barret.jpg')",
        'marsof': "url('./img/marsof.jpg')",
        'boatgroup': "url('./img/Bootgroup_carry.jpg')",
        'marsen': "url('./img/marsenopleiding.jpg')",
        'spelioladder': "url('./img/spelioladder.jpg')",
        'hlo': "url('./img/hlo.jpg')",
        'parajumping': "url('./img/parajumping.jpg')",
        'heigendhert': "url('./img/heigendhert.jpg')",
        'friscatnight': "url('./img/friscatnight.jpg')",
        'takethestep': "url('./img/takethestep.jpg')",
      }
    },
  },
  plugins: [],
}

