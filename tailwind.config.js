/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/heroBg.jpeg')"
      },
      fontFamily: {
        "poppins": "Poppins",
        "monst": "Montserrat",
        "pacifico": 'Pacifico',
        "roboto": 'Roboto'
      },
      boxShadow: {
        "mobile": "50px 30px 150px 0px rgba(46, 4, 4, 0.21)"
      }
    },
  },
  plugins: [],
}

