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
        'white': 'rgb(255 255 255 / <alpha-value>)',
        'blue': 'rgb(157 217 243 / <alpha-value>)',
        'black': 'rgb(14 45 49 / <alpha-value>)',
        'grey': 'rgb(93 108 110 / <alpha-value>)',
        'orange': 'rgb(239 89 34 / <alpha-value>)',
      },
      fontFamily: {
        noto: ['var(--font-inter)'],
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
      typography: ({theme}) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body'          : theme('colors.black/100'),
            '--tw-prose-headings'      : theme('colors.black/100'),
            '--tw-prose-lead'          : theme('colors.pink[300]'),
            // '--tw-prose-links'         : theme('colors.pink[300]'),
            '--tw-prose-bold'          : theme('colors.black/100'),
            '--tw-prose-counters'      : theme('colors.blue/100'),
            '--tw-prose-bullets'       : theme('colors.blue/100'),
            '--tw-prose-hr'            : theme('colors.black/100'),
            '--tw-prose-quotes'        : theme('colors.black/100'),
            '--tw-prose-quote-borders' : theme('colors.blue/100'),
            '--tw-prose-captions'      : theme('colors.pink[300]'),
            '--tw-prose-code'          : theme('colors.black'),
            '--tw-prose-pre-code'      : theme('colors.white/100'),
            '--tw-prose-pre-bg'        : theme('colors.black/100'),
            '--tw-prose-th-borders'    : theme('colors.pink[300]'),
            '--tw-prose-td-borders'    : theme('colors.pink[300]'),
          }
        }
      }),
      // animation: {
      //   fadeIn: "fadeIn 1s ease-in forwards"
      // },
      // keyframes: {
      //   fadeIn: {
      //     "0%": { opacity: 0 },
      //     "100%": { opacity: 1 }
      //   }
      // }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
