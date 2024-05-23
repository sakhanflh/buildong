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
        'blue': '#1B9BE3',
        'yellow': '#FFEA29',
      },
      fontFamily: {
        "jost": '"Jost", sans-serif',
      },
    },
  },
  plugins: [],
}

