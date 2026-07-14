/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './.storybook/**/*.{js,jsx}'],
  presets: [require('./tailwind-preset.js')],
  plugins: [],
}
