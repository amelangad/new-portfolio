/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'pink': '#ff0066',
      'black': '#000000',
    },
    screens: {
      'md': '700px',
      'lg': '1300px',
      'xl': '1600px',
    },
    extend: {},
  },
  plugins: [],
}

