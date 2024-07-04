/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
      },
      backgroundImage:{
        'custom-bg':"url('/src/assets/BgImage.jpg')"
      }
    },
  },
  plugins: [],
}