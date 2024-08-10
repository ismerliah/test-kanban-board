/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'teal-1': '#57CC99', //green
      'maroon': '#A02334', //red
      'pink': '#C75B7A', //pink
      'orange': '#FEBF63', //orange
      'navy': '#03346E', //navy
      'blue': '#3c7aa3', //blue
    },
    fontFamily: {
      poppin : ['Poppins', 'sans-serif'],
      rubik : ['Rubik', 'sans-serif'],
      roboto : ['Roboto', 'sans-serif'],
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["emerald"],
  },
}

