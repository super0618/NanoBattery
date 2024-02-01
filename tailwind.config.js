/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mainFont: "nanoFont",
      },
      backgroundColor: {
        mainColor: "#141414",
      },
      color: {
        mainColor: "#141414",
      },
    },
    screens: {
      phone: "531px",
      table: "856px",
      display: "1241px",
    },
  },
  plugins: [],
};
