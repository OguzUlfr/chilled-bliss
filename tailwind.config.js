/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main-red': '#F82B44',
        'main-cream': '#FFF5E0'
      }
    },
  },
  plugins: [],
}

