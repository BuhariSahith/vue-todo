/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      widest: '.80em',
    },
    fontWeight: {
      'extra-bold': 800
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
    },
    extend: {
      spacing: {
        '70px': '70px',
        '485px': '485px',
        '50rem':  '50rem',
        '38rem': '38rem'
      },
      colors: {
        'regal-blue': '#243c5a',
      },
      width: {
        '50rem': '50rem',
      }
    },
  },
  plugins: [],
}
