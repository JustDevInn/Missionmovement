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
        primary: '#22201F',
        yellow: '#FFCC00',
        brown: '#8E774F',
        dark: '#121212',
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        surfaceDark: '#1E1E1E',
        accentCyan: '#00FFFF', // Cyan
        highlight: '#00BFFF', // DeepSkyBlue
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
