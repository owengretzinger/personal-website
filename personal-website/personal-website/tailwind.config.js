/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#9DD9F3',
        'orange': '#EF5922',
        'light-orange': '#FBEFEA',
        'black': '#0E2D31',
        'grey': '#5D6C6E',
        'white': '#FFFFFF',
      },
      fontFamily: {
        noto: "noto",
        notothin: "notothin",
        notomd: "notomd",
      },
      typography: {
        default: {
          css: {
            a: {
              target: "new",
              
            }
          }
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
