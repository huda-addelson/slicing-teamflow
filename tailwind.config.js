/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        main: '#FFCA1D',
        primary: '#686DF1',
        secondary: '#FAFAFF',
      },
    },
  },
  plugins: [],
};
