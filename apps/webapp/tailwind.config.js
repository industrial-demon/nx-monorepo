const { createGlobPatternsForDependencies } = require('@nx/react/tailwind')
const { join } = require('path')
const sharedTailwindConfig = require('../../libs/webapp/tailwind-preset/tailwind.config')

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedTailwindConfig],
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        dancingScript: ['Dancing-Script', 'sans'],
      },
      boxShadow: {
        headerBottom: "0px 12px 23px 0px rgba(0, 0, 0, 0.05)",
        userDropdown: "0px 4px 124px rgba(44, 39, 40, 0.25)",
      }
    },
    
  },
  plugins: [require('@tailwindcss/container-queries')],
}
