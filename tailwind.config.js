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
        'royalmarine': "url('../assets/img/royalmarines.jpg')",
        'barret': "url('../assets/img/barret.jpg')",
        'marsof': "url('../assets/img/marsof.jpg')",
        'boatgroup': "url('../assets/img/Bootgroup_carry.jpg')",
        'marsen': "url('../assets/img/marsenopleiding.jpg')",
        'spelioladder': "url('../assets/img/spelioladder.jpg')",
        'hlo': "url('../assets/img/hlo.jpg')",
        'parajumping': "url('../assets/img/parajumping.jpg')",
        'heigendhert': "url('../assets/img/heigendhert.jpg')",
        'friscatnight': "url('../assets/img/friscatnight.jpg')",
        'takethestep': "url('../assets/img/takethestep.jpg')",
      }
    },
  },
  plugins: [],
}

