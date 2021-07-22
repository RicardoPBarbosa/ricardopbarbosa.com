module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      'display': ['Manrope', 'sans-serif'],
      'body': ['Quicksand', 'serif'],
    },
    extend: {
      colors: {
        primary: '#CDD2D2',
        secondary: '#EBE8EB'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
