/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F2F6F9',
          100: '#F7D1A8',
          200: '#BF7B7B',
          300: '#BC884F',
          400: '#806039',
          500: '#806039',
        },
      },
      fontFamily: {
        display: ['Salinas', 'serif'],
        sans: ['Glacial Indifference', 'sans-serif'],
      },
    },
  },
  plugins: [],
};