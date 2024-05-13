/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extends: ["eslint:recommended", "plugin:react/recommended"],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
