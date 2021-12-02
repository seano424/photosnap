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
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'move-up': {
          '0%, 100%': { transform: 'translate-y-0' },
          '50%': { transform: 'translate-y-96' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
        'move-up': 'move-up 1s ease-in-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
