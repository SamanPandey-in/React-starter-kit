export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { 500: 'var(--color-primary-500)', 600: 'var(--color-primary-600)' },
      },
      backgroundColor: { 'page': 'var(--bg-page)', 'surface': 'var(--bg-surface)', 'elevated': 'var(--bg-elevated)' },
      textColor: { 'primary': 'var(--text-primary)', 'secondary': 'var(--text-secondary)', 'tertiary': 'var(--text-tertiary)' },
      borderColor: { 'default': 'var(--border-color)', 'focus': 'var(--border-focus)' },
    },
  },
  plugins: [],
}
