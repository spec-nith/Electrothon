module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "30r": "30rem",
        "28r": "28rem",
      },
      width: {
        "18r": "4.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  // important: true,
};
