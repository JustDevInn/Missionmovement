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
      primary: 'Helvetica Neue',
      secondary: 'teko',
    },
    extend: {
      colors: {
        primary: '#1D1916',
        yellow: '#FFCC00',
        brown: '#8E774F',
      },
      backgroundImage: {
        'royalmarine': "url('./img/royalmarines.jpg')",
        'barret': "url('./img/barret.jpg')",
      }
    },
  },
  plugins: [],
}

