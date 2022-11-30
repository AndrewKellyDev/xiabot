/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#19FB9B",
        secondary: "#E8E9EB",
        grey: "#4B4F58",
        background: "#F3F4F5",
        border: "rgba(0,0,0,0.2)",
      },
      boxShadow: {
        custom: "10px 10px 10px -5px rgba(0, 0, 0, 0.9)",
      },
    },
    fontFamily: {
      Montserrat: "Montserrat, sans-serif",
      Jakarta: "Plus Jakarta Sans, sans-serif",
      Inter: "Inter, sans-serif",
    },
  },
  plugins: [],
};
