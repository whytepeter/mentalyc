/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: {
          body: ["var(--font-montserat)"],
          heading: ["var(--font-poppins)"],
        },
      },
      colors: {
        primary: {
          DEFAULT: "#731054",
          100: "#de0d6f",
        },
        gray: {
          200: "#e5e5e5",
          300: "#b2b2b2",
          400: "#666666",
          500: "#000000",
        },
        success: {
          DEFAULT: "#3bc171",
        },
      },
    },
  },
  plugins: [],
};
