module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF6464',
        secondary: '#00A8CC',
        dark: '#21243D',
        light: '#8695A4',
        blueLight: '#EDF7FA',
        greenCool: '#5BC1AC'
      },
      spacing: {
        57: '31rem',
        56.5: '15rem'
      },
      lineHeight: {
        '11': '60px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
