/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          light: '#a01c1c',
          DEFAULT: '#8b1a1a',
          dark: '#6b2c1a',
          deep: '#3d1208',
        },
        gold: {
          light: '#e6ca85',
          DEFAULT: '#c9a45a',
          dark: '#8b6b3e',
        },
        parchment: {
          light: '#fff8f0',
          DEFAULT: '#f8f0e0',
          dark: '#ebdcc5',
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        eb: ['"EB Garamond"', 'serif'],
        calligraphy: ['"Pinyon Script"', 'cursive'],
        brush: ['"Alex Brush"', 'cursive'],
        amiri: ['Amiri', 'Traditional Arabic', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-gentle': 'pulseGentle 4s ease-in-out infinite',
        'fade-up': 'fadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-down': 'fadeDown 1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'rotate-music': 'rotateMusic 6s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.04)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        rotateMusic: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}

