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
        primary: ['var(--font-primary)', ...fontFamily.sans],
        secondary: ['var(--secondary-font)', ...fontFamily.sans],
      },
      colors: {
        grey: "#404040",
        darkgrey: "#ffffff",
        offwhite: "#ececec"
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
          primary: "#274a83",
          primaryContent: "#ffffff",
          secondary: "#ffffff",
          accent: "#c19655",
          info: "#e6f0ff",
          success: "#191919",
          warning: "#191919",
          error: "#191919",
        },
      },
      'dark'
    ],
  },
  plugins: [require("daisyui")],
}
