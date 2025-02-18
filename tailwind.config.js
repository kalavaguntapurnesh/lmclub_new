/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {},
      colors: {
        mainColor: "#22c55e",
        // mainColor: "#187e4c",
        headingColor: "#19191B",
        sideHeading: "#474749",
      },
    },
  },
  plugins: [],
};
