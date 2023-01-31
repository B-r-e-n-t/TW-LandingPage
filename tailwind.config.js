/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        blue: '#05386B',
        green: '#5CDB95',
        cream: '#EDF5E1',
      }
    },
  },
  plugins: [],
}
