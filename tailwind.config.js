module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: '#000000',
      grey: '#DFDFDF',
      white: '#FFFFFF',
      orange: '#FFC593',
      pink: '#BC7198',
      blue: '#5A77FF',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
