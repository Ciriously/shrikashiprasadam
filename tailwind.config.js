/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        inknut: ["Inknut Antiqua"],
        inder: ["Inder", "sans-serif"],
        poppins: ["Poppins", "sans-serif"], // Add the "Poppins" font here
      },
    },
  },
  plugins: [],
};
