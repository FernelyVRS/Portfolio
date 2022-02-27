module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        navy: '#1E2326',
        navy2: '#252a2e',
        principal: '#0D42B2'
      },
      fontFamily: {
        body: ['Poppins'],
        title: ['Helvetica Neue', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
