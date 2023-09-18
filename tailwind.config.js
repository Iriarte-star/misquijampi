/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        borel: ['Borel', 'cursive'],
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}
}
