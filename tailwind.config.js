// const defaultTheme = require('tailwindcss/defaultTheme')
const { fontFamily } = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-notosans)', ...fontFamily.sans],
        montserrat: ['var(--font-montserrat)', ...fontFamily.sans],
      },
      colors: {
        grey: "#404040",
        darkgrey: "#191919"
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '3rem',
        '2xl': '5rem',
      },
      center: true,
    },
  },

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#dc043a",
        },
      },
      'dark'
    ],
  },
  plugins: [require("daisyui")],
}
