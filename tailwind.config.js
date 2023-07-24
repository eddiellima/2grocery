const nativewind = require("nativewind/tailwind")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {}
  },
  plugins: [],
  presets: [nativewind]
}
