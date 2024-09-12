/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFAF00',
        secondary: '#200001',
        mountains: '#311126',
        hover: '#A34300'
      }
    },
  },
  plugins: [],
}

