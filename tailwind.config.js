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
        primary: 'var(--accent)',
        yellow: '#ffcc01',
        brown: '#8E774F',
        dark: '#0b0b0b',
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        surface2: 'var(--surface-2)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        accent2: 'var(--accent-2)',
        surfaceDark: 'var(--surface)',
        accentCyan: '#ffcc01',
        highlight: '#ffcc01',
        mmPage: 'var(--mm-page)',
        mmSurface: 'var(--mm-surface)',
        mmText: 'var(--mm-text)',
        mmTextMuted: 'var(--mm-text-muted)',
        mmBody: 'var(--mm-body)',
        mmBorder: 'var(--mm-border)',
        mmBorderStrong: 'var(--mm-border-strong)',
        mmAccent: 'var(--mm-accent)',
        mmAccentHover: 'var(--mm-accent-hover)',
        mmFocus: 'var(--mm-focus)',
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
