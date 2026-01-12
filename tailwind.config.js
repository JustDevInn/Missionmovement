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
      body: ['Inter', 'system-ui', 'sans-serif'],
      display: ['Teko', 'system-ui', 'sans-serif'],
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
        mmPage: 'var(--mm-page)',
        mmSurface: 'var(--mm-surface)',
        mmText: 'var(--mm-text)',
        mmTextMuted: 'var(--mm-text-muted)',
        mmBody: 'var(--mm-body)',
        mmBorder: 'var(--mm-border)',
        mmBorderStrong: 'var(--mm-border-strong)',
        mmAccent: 'var(--mm-accent)',
        mmAccentHover: 'var(--mm-accent-hover)',
        mmOverlayDark: 'var(--mm-overlay-dark)',
        mmGlassBg: 'var(--mm-glass-bg)',
        mmGlassBorder: 'var(--mm-glass-border)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
