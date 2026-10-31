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
          DEFAULT: '#F9F0E0',
          dark: '#F2E6D0'
        },
        gold: {
          DEFAULT: '#806b43',
          light: '#C5A059',
          accent: '#CFAB66',
          secondary: '#A68547',
          deep: '#5C4A2A',
          dark: '#3D2A0A'
        }
      },
      fontFamily: {
        script: ['Cookie', 'cursive'],
        cinzel: ['Cinzel', 'Georgia', 'serif'],
        arabic: ['Amiri', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif']
      }
    },
  },
  plugins: [],
}

