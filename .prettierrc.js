module.exports = {
  singleQuote: true,
  tabWidth: 2,
  printWidth: 120,
  useTabs: false,
  bracketSameLine: true,
  plugins: [require.resolve('prettier-plugin-astro'), require.resolve('prettier-plugin-tailwindcss')],
  overrides: [
    {
      files: '**/*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
