/** @type {import('tailwindcss').Config} */
const customSpacing = {
  13: '52px',
  20.5: '82px',
  34: '136px',
  190: '760px'
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

