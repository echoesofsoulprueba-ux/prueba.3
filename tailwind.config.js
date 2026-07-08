const colors = require('./src/tokens/colors.json')
const typography = require('./src/tokens/typography.json')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './.storybook/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'card': colors['card'],
        'error': colors['error'],
        'muted': colors['muted'],
        'border': colors['border'],
        'primary': colors['primary'],
        'sidebar': colors['sidebar'],
        'success': colors['success'],
        'warning': colors['warning'],
        'secondary': colors['secondary'],
        'background': colors['background'],
        'foreground': colors['foreground'],
        'sidebar-active': colors['sidebarActive'],
        'card-foreground': colors['cardForeground'],
        'error-foreground': colors['errorForeground'],
        'muted-foreground': colors['mutedForeground'],
        'primary-foreground': colors['primaryForeground'],
        'sidebar-foreground': colors['sidebarForeground'],
        'success-foreground': colors['successForeground'],
        'warning-foreground': colors['warningForeground'],
        'secondary-foreground': colors['secondaryForeground'],
        'sidebar-active-foreground': colors['sidebarActiveForeground'],
      },
      fontFamily: {
        sans: typography.fontFamily
          ? typography.fontFamily.split(',').map(f => f.trim())
          : ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
