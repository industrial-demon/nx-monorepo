const colors = require('tailwindcss/colors');
const radixPlugin = require('tailwindcss-radix');

module.exports = {
  theme: {
    extend: {
      colors: {
        custom: {
          // blue palette
          'blue-20': '#6E99ED',
          'blue-50': '#3164C9',
          'blue-60': '#304991',
          'blue-70': '#24356B',
          'blue-90': '#162042',

          // aquamarine palette
          'aquamarine-30': '#1BBFCC',
          'aquamarine-60': '#15A8B2',

          // red plette

          'red-20': '#fd7777',
          'red-50': '#E05151',
          'red-80': '#DC143C',

          // green palette
          'green-10': '#D1FAE5',
          'green-20': '#77DD77',
          'green-30': '#52C672',
          'green-40': '#34C125',
          'green-50': '#1BB75A',

          // orange palette
          'orange-10': '#FCF5E5',
          'orange-50': '#FF7F1F',
          'orange-60': '#E7642C',

          // grey palette
          'grey-10': '#F3F7FF',
          'grey-20': '#f0f1f5',
          'grey-30': '#EEEFF4',
          'grey-40': '#E3E3E3',
          'grey-50': '#A7AEC4',
          'grey-60': '#7B7B7B',
          'grey-100': '#1D1D1D',
          // yellow palette
          'yellow-60': '#FFC501',
        },
      },
      screens: {
        xs: '275px',
      },
      keyframes: {
        // Dropdown menu
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'scale-in': {
          '0%': { opacity: 0, transform: 'scale(0)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        'slide-down': {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        // Tooltip
        'slide-up-fade': {
          '0%': { opacity: 0, transform: 'translateY(2px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-right-fade': {
          '0%': { opacity: 0, transform: 'translateX(-2px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'slide-down-fade': {
          '0%': { opacity: 0, transform: 'translateY(-2px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-left-fade': {
          '0%': { opacity: 0, transform: 'translateX(2px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },

        // Navigation menu
        'enter-from-right': {
          '0%': { transform: 'translateX(200px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'enter-from-left': {
          '0%': { transform: 'translateX(-200px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'exit-to-right': {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(200px)', opacity: 0 },
        },
        'exit-to-left': {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(-200px)', opacity: 0 },
        },
        'scale-in-content': {
          '0%': { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
          '100%': { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
        },
        'scale-out-content': {
          '0%': { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
          '100%': { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },

        // Toast
        'toast-hide': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'toast-slide-in-right': {
          '0%': { transform: `translateX(calc(100% + 1rem))` },
          '100%': { transform: 'translateX(0)' },
        },
        'toast-slide-in-bottom': {
          '0%': { transform: `translateY(calc(100% + 1rem))` },
          '100%': { transform: 'translateY(0)' },
        },
        'toast-swipe-out': {
          '0%': { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          '100%': {
            transform: `translateX(calc(100% + 1rem))`,
          },
        },
      },

      boxShadow: {
        'rounded-violet': `0 0 0 2px ${colors.violet['500']}`,
        'rounded-blue': `0 0 0 2px ${colors.blue['500']}`,
        'rounded-green': `0 0 0 2px ${colors.green['500']}`,
        'rounded-red': `0 0 0 2px ${colors.red['500']}`,
        'rounded-gray': `0 0 0 2px ${colors.gray['500']}`,
        'rounded-orange': `0 0 0 2px ${colors.orange['500']}`,
        'rounded-blue-20': `0 0 0 2px #6E99ED`,
        'radio-btn-gray': `0 2px 10px ${colors.gray['500']}`,
        slider: '0 0 0 5px rgba(0, 0, 0, 0.3)',
        black: '0 0 0 2px black',
        '4x': '2px 4px 16px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        // Dropdown menu
        'scale-in': 'scale-in 0.2s ease-in-out',
        'slide-down': 'slide-down 0.1s linear',
        'slide-up': 'slide-up 0.1s linear',

        // Tooltip
        'slide-up-fade': 'slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right-fade': 'slide-right-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-fade': 'slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left-fade': 'slide-left-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',

        // Navigation menu
        'enter-from-right': 'enter-from-right 0.25s ease',
        'enter-from-left': 'enter-from-left 0.25s ease',
        'exit-to-right': 'exit-to-right 0.25s ease',
        'exit-to-left': 'exit-to-left 0.25s ease',
        'scale-in-content': 'scale-in-content 0.2s ease',
        'scale-out-content': 'scale-out-content 0.2s ease',
        'fade-in': 'fade-in 0.2s ease',
        'fade-out': 'fade-out 0.2s ease',
        'fade-in-out': 'fade 350ms cubic-bezier(0.16, 1, 0.3, 1)',

        // Toast
        'toast-hide': 'toast-hide 100ms ease-in forwards',
        'toast-slide-in-right': 'toast-slide-in-right 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'toast-slide-in-bottom': 'toast-slide-in-bottom 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'toast-swipe-out': 'toast-swipe-out 100ms ease-out forwards',
      },
      gridTemplateColumns: {
        '5col': '2fr 1fr 1fr 1fr 1fr',
        '6colPlus': '2fr 1fr 7px 1fr 1fr 1fr',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [radixPlugin],
}
