// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // or whatever your paths are
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};
