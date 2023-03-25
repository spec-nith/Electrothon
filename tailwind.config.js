/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        thirty: "30%",
      },
      screens: {
        "3xl": "1850px",
      },
    },
  },
  plugins: [],
};
