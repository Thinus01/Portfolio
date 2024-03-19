import colors from  "tailwindcss/colors"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: colors.purple[900],
          hover: colors.purple[600],
          ["dark-hover"]: colors.purple[900]
        },
        black: {
          light: colors.black[200],
          medium: colors.black[600],
          dark: colors.black[950],
        }
      }
    },
  },
  plugins: [],
}

