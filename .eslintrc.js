var jsExtensions = ['.js', '.jsx'];
var tsExtensions = ['.ts', '.tsx'];
var allExtensions = jsExtensions.concat(tsExtensions);

module.exports = {
  settings: {
    'import/extensions': allExtensions,
    'import/parsers': {
      '@typescript-eslint/parser': tsExtensions,
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: '.',
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:import/typescript',
  ],
  plugins: ['prettier', 'import'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
    },
  ],
  rules: {
    'import/no-default-export': 2,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
    'import/namespace': 0,
    'import/named': 0,
  },
};
