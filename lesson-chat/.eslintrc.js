module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'react-app',
    'react-app/jest',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
};
