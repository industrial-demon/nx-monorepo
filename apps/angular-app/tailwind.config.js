const { join } = require('path')
const sharedTailwindConfig = require('../../libs/webapp/tailwind-preset/tailwind.config')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
  ],
  // presets: [sharedTailwindConfig],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        dancingScript: ['Dancing-Script', 'sans'],
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
}
