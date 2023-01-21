// prettier.config.js or .prettierrc.js
module.exports = {
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  singleQuote: true,
  astroAllowShorthand: true,
  trailingComma: 'all',
};
