/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans:[
            'Dosis, sans-serif',
        ]
    },
    },
  },
  plugins: [],
}