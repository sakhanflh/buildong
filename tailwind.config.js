/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-color': '#F8F8F8',
        'font-black': '#0A0A0A',
        'font-gray': '#737373',
        'primary': '#1B9BE3',
        'secondary': '#FFEA29',
      },
      fontFamily: {
        "jost": '"Jost", sans-serif',
      },
      boxShadow: {
        'soft': '0px 5px 50px rgba(0, 67, 101, 8%)',
        'multiple': '0 5px 50px rgba(0, 67, 101, 10%), 0 2px 6px rgba(0, 67, 101, 10%)'
      },
    },
  },
  plugins: [],
}

