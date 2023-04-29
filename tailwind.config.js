/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scale: 'scaleUp 250ms'
      }
    },
  },
  plugins: [],
}

