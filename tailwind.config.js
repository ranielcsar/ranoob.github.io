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
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        black: 'rgb(var(--background) / <alpha-value>)',
        white: 'rgb(var(--text) / <alpha-value>)',
      },
      fontFamily: {
        jetbrains: ['MPLUSCodeLatin', 'sans-serif'],
        roboto: ['Roboto Mono', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
