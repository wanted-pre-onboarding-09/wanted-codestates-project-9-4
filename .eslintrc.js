module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'comma-dangle': 'off',
    semi: 'off',
    'space-before-function-paren': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'flow',
        endOfLine: 'auto',
      },
    ],
    'multiline-ternary': 'off',
    indent: 'off',
<<<<<<< HEAD
    'linebreak-style': 0,
=======
    'no-param-reassign': 'off',
    'no-shadow': 'off',
>>>>>>> 52d16f828d8cb5e7fc72d0dfba47d965a23f8e25
  },
};
