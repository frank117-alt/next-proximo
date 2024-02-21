/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
     letterSpacing: {
      '1': '0em',
      '2': '0.025em',
      '3': '0.05em',
      '4': '0.1em',
    },

    extend: {
      boxShadow:{
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',

      },

    },
  },
  plugins: [],
}

