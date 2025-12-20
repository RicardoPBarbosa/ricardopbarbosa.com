const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './sections/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      'display': ['Manrope', 'sans-serif'],
      'body': ['Quicksand', 'serif'],
    },
    screens: {
      'sm': defaultTheme.screens.sm,
      'md': defaultTheme.screens.md,
      'md-lg': '880px',
      'lg': defaultTheme.screens.lg,
      'lg-xl': '1100px',
      'xl': defaultTheme.screens.xl,
      '2xl': defaultTheme.screens['2xl'],
    },
    extend: {
      colors: {
        primary: '#CDD2D2',
        secondary: '#EBE8EB'
      },
      margin: {
        '-2.5': '-0.65rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
