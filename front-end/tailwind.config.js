/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        "background-color": "#E2E8F0",
        "primary-color": "#28B571",
        "secondary-color": "#2BC77C",
      },
    },
  },
  plugins: [],
};
