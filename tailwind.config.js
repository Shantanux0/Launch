/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FFF0DF',
          50: '#FFFFFF',
          100: '#FFFDF9',
          200: '#FFF8F0',
          300: '#FFF0DF',
          400: '#F5E2CE',
          500: '#E8D2BD',
          border: '#D8CBBF',
        },
        charcoal: {
          DEFAULT: '#202020',
          darkest: '#141414',
          dark: '#1A1A1A',
          card: '#242424',
          surface: '#2B2B2B',
          light: '#383838',
          border: '#3D3D3D',
        },
        coral: {
          DEFAULT: '#F34F79',
          hover: '#E03C66',
          light: '#FF6B91',
          bg: '#FFE8EE',
        },
        primary: '#111111',
        secondary: '#55504C',
        muted: '#8A847F',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(17, 17, 17, 0.06)',
        'soft': '0 10px 25px -5px rgba(17, 17, 17, 0.08), 0 8px 10px -6px rgba(17, 17, 17, 0.04)',
        'soft-lg': '0 20px 35px -10px rgba(17, 17, 17, 0.12), 0 10px 15px -8px rgba(17, 17, 17, 0.06)',
        'charcoal': '0 20px 40px -15px rgba(0, 0, 0, 0.4)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
  },
  plugins: [],
}

