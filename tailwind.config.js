/** @type {import('tailwindcss').Config} */
const customSpacing = {
  0.02: '0.080rem',
  1.2: '0.316rem',
  13: '52px',
  20.5: '82px',
  27: '108px',
  30: '180px',
  34: '136px',
  37: '148px',
  56: '224px',
  76: '304px',
  92.7: '371px',
  129.7: '519px',
  153: '612px',
  161.2: '645px',
  171: '684px',
  175: '700px',
  182.7: '731px',
  190: '760px',
  216: '800px'
};

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      spacing: customSpacing,
      borderWidth: customSpacing,
      height: customSpacing,
      width: customSpacing,
      maxWidth: customSpacing,
      minWidth: customSpacing,
      maxHeight: customSpacing,
      minHeight: customSpacing,
      fontFamily: {
        grandHotel: ['Grand Hotel', 'cursive'],
        plusJakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        alabaster: '#F5F1E6',
        maastrichtBlue: '#0E1F34',
        princetonOrange: '#F97B22',
        spanishOrange: '#EA6100',
        feldsparOrange: '#FFD3B4',
      },
      fontSize: {
        '4.5xl': '2.50rem',
      },
    },
  },
  plugins: [],
};

