/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'corporate': {
          'navy': '#001a3d',
          'orange': '#ff7a00',
        }
      }
    },
  },
  plugins: [],
}