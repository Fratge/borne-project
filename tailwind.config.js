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
      fontSize:{
        titre1:['128px','auto'],
        titre2:['40px','auto'],
        titre3:['24px','auto'],
        titre4:['20px','auto'],
        paragraphe:['16px','auto'],
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
    },
    },
  },
  plugins: [],
}