/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: '#F8B166', // blue-500
          dark: '#1e40af',    // blue-900
          light: '#FCC390',   // blue-400
        },
        text: '#1f2937',       // gray-800
        background: '#F6F0E9',
      },
    },
  },

    plugins: [],
}