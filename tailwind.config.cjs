/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greenAppColor: "#134e4a",
        darkGreenAppColor: "#34d399",
      },
    },
  },
  plugins: [],
};
