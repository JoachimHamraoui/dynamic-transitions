/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#0388fc',
      'white': '#EBEBEB',
      'green': '#29CF52',
      'red': '#ec3137'
    },
    fontFamily: {
      display: ['Coolvetica', 'sans-serif'],
      mont: ['Montserret', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

