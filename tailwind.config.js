/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extends: ["eslint:recommended", "plugin:react/recommended"],
    fontFamily: {
      body: ["Playfair Display", "serif"],
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
