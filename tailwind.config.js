/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      maxWidth: {
        'max-allowed': '90rem',
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        black: 'var(--background)',
        white: 'var(--text)',
      },
      fontFamily: {
        jetbrains: ['MPLUSCodeLatin', 'sans-serif'],
        roboto: ['Roboto Mono', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
