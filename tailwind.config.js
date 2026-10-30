/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Wix-inspired white/lavender palette
        cream: {
          DEFAULT: '#ffffff',
          50: '#ffffff',
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#f0f0f0',
          400: '#e8e8e8',
          500: '#d4d4d4',
          border: '#e0e0e0',
        },
        lavender: {
          DEFAULT: '#eef1ff',
          50: '#f8f9ff',
          100: '#eef1ff',
          200: '#dce4ff',
          300: '#c6d1ff',
          border: '#d0d8f8',
        },
        charcoal: {
          DEFAULT: '#1a1a2e',
          darkest: '#111122',
          dark: '#16213e',
          card: '#0f3460',
          surface: '#1e2a4a',
          light: '#2d3d6b',
          border: '#2a3660',
        },
        coral: {
          DEFAULT: '#F34F79',
          hover: '#E03C66',
          light: '#FF6B91',
          bg: '#FFE8EE',
        },
        primary: '#111111',
        secondary: '#6b7280',
        muted: '#9ca3af',
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

