/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Urbanist', 'Plus Jakarta Sans', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        pen: ['Kalam', 'Caveat', '"Nanum Pen Script"', 'cursive'],
        hindi: ['"Noto Sans Devanagari"', 'sans-serif'],
      },
      colors: {
        ly: {
          yellow: '#FAE100',
          black: '#232323',
          grey: '#B3B3B3',
          ivory: '#F2F2F2',
          gray: '#565656',
          tertiary: '#8A8A8A',
          line: '#D9D7CF',
        },
      },
    },
  },
  plugins: [],
}
