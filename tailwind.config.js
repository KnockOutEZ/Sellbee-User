module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bg-primary': '#493548',
        'bg-secondary': '#6A8D92',
        'header-input-placeholder': '#4D4D4D',
        'footer-input-placeholder': '#00000047',
    },
    fontFamily: {
        lato: 'Lato',
        poppins: 'Poppins',
    },
    spacing: {
        'p-w': '100px',
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@vueform/slider/tailwind'),
  ],
}
