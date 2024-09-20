/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1ca7f1",
        secondary: "#ffc9c9",
        success: "#01ff01",
        error: "#ff0101",
        warning: "#d1e100",
        light: "#F2F0E6",
      },
      height: {
        screen: "90vh",
      },
    },
  },
  plugins: [],
};
