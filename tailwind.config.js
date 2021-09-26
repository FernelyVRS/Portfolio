module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        navy: '#1E2326',
        navy2: '#252a2e',
        red: '#FC3C3C'
      },
      fontFamily: {
        body: ['Poppins'],
        title: ['Righteous']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
