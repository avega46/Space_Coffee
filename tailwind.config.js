/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index,html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bruno Ace', 'Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: '#fef3c7',
        textforeground : '#172554',
        comment: '#676e95',
        accent: '#c3e77d',
        redish: '#ff5370',
        orangish:'#f78c6c',
        yellowish: '#ffcb6b',
        greenish: '#c3e77d',
        bluish: '#82aaff',
        purplish: '#c792ea',
      },
    },
  },
  plugins: [],
}

