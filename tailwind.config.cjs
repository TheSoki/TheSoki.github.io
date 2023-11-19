/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // link: https://fonts.google.com/noto/specimen/Noto+Serif
        serif: ['Noto Serif', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
