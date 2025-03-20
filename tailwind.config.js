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
        'royalmarine': "url('/public/img/royalmarines.jpg')",
        'barret': "url('/public/img/barret.jpg')",
        'marsof': "url('/public/img/marsof.jpg')",
        'boatgroup': "url('/public/img/Bootgroup_carry.jpg')",
        'marsen': "url('/public/img/marsenopleiding.jpg')",
        'spelioladder': "url('/public/img/spelioladder.jpg')",
        'hlo': "url('/public/img/hlo.jpg')",
        'parajumping': "url('/public/img/parajumping.jpg')",
        'heigendhert': "url('/public/img/heigendhert.jpg')",
        'friscatnight': "url('/public/img/friscatnight.jpg')",
        'takethestep': "url('/public/img/takethestep.jpg')",
      }
    },
  },
  plugins: [],
}

