/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme=dark]'],
  theme: {
    extend: {
      maxWidth: {
        'max-xl': '75%',
        'max-lg': '90%',
      },
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        black: 'rgb(var(--black) / <alpha-value>)',
        white: 'rgb(var(--white) / <alpha-value>)',
      },
      fontFamily: {
        jetbrains: ['MPLUSCodeLatin', 'sans-serif'],
        roboto: ['Roboto Mono', 'sans-serif'],
      },
      boxShadow: {
        'neo-sm': '4px 4px 0 rgb(var(--black))',
        'neo-md': '6px 6px 0 rgb(var(--black))',
        'neo-lg': '8px 8px 0 rgb(var(--black))',
      },
    },
  },
  plugins: [],
}
