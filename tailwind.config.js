/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bordo: {
          50: "#fdf4f5",
          100: "#fbeaec",
          200: "#f5c9cc",
          300: "#ed9fa6",
          400: "#e0677a",
          500: "#c73d56",
          600: "#a92f45",
          700: "#8d2439",
          800: "#741d30",
          900: "#621a2a",
          950: "#3b0a15",
        },
      },
    },
  },
  plugins: [],
};
