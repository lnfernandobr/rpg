module.exports = {
  parser: '@babel/eslint-parser',

  extends: ['react-app', 'eslint:recommended'],
  env: {
    commonjs: true,
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: false,
    },
    sourceType: 'module',
    requireConfigFile: false,
  },
  globals: {
    strapi: true,
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'import/no-anonymous-default-export': 'off',
    'no-unused-vars': 'error',
    'no-console': 'error',
  },
};