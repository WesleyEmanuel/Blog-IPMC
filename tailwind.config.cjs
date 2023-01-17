/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greenAppColor: "#10b981",
        darkGreenAppColor: "#34d399",
      },
    },
  },
  plugins: [],
};
