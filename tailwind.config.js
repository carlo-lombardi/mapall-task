/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueNetwork: "#12A7B5",
      },
      fontFamily: {
        exo2: ['"Exo 2"'],
      },
    },
  },
  plugins: [],
};
