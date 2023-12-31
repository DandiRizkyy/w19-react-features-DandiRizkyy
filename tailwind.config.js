/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.svg",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [import("tw-elements/dist/plugin.cjs")],
};
