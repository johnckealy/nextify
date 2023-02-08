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
        grey: "#5d5d5d",
        darkgrey: "#ffffff",

        offwhite: "#ececec",
        primarybg: "#274a83",
        secondarybg: "#404040",
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '7rem',
        '2xl': '10rem',
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
