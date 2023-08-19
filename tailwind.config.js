/** @type {import('tailwindcss/types').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#459467',
      },
      fontFamily: {
        sans: ['var(--Inter-font)'],
      },
    },
  },
  plugins: [],
};

module.exports = config;
