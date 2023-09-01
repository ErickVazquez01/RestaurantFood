/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './public/**/*.{html,js}', './src/**/*.{html,js}', ],
  theme: {
    
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'serif'],
    },
    extend: {
      colors: {
        'primary': '#f3c614',
        'secondary': '#353535',
      },
      height: {
        '80': '20rem',
        '100': '25rem',
        '120': '30rem',
      },
    },
  },
  variants: {
    scale:['hover'],
    rotate:['responsive'],
    //opacity:['responsive','hover','focus','disabled'],
    extend: {},
  },
  plugins: [],
}

