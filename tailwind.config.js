/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor: {
        'card': '#E6E6E6'
      },
      backgroundColor: {
        'dark': '#212121',
        'white': '#FAFAFA',
        'error': '#D86161',
        'placeholder':'#7A7A7A',
      },
      colors: {
        'primary': '#1597E4',
      },
    },
  },
  plugins: [],
}
