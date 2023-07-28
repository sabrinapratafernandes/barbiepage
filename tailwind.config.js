/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gradient: {
          initialGradient : '#ef87be',
          finalGradient:'#ffcee6',
        },
        white: '#FFFFFF',
        buttons: {
          inative: '#fc72a5',
          active: '#f5347f',
        },
        pink: '#f5347f',
        blue: '#50c7fa',
        rosaClaro: '#fdd9e5'
      }
    },
  },
  plugins: [],
}