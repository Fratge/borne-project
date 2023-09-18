/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,css}", 
            "./*.{html,js,css}",
            "./src/css/*.css"],
  theme: {
    extend: {
      fontFamily: {
        sans:[
            'Dosis, sans-serif',
        ]
      },
      fontSize:{
        titre1:['80px','auto'],
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
      colors:{
        'blanc':'#EBE4B7',
        'noir':'#082431',
        'rose':'#E7364F',
        'rose_fonce':'#280207',
        'vert':'#81B26B',
        'vert_fonce':'#0E2802',
        'jaune':'#FDC835',
        'jaune_fonce':'#372F16',
      }
    },
  },
  plugins: [],
}