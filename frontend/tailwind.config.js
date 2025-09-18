/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: 'poppins, sans-serif',
        sans: 'poppins, sans-serif',
        main: 'merriweather, serif',
      },
      colors: {
        'primary': '#49BBBD',
        'bgc': '#0F172A',
      },
    },
  },
  plugins: [],
}

