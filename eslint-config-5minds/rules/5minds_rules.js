'use strict';

module.exports = {
  env: {
    node: true,
    mocha: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'script',
  },
  rules: {
    'object-shorthand': ['error', 'never'],
    'no-unused-vars': ['off', {vars: 'local', args: 'after-used'}],
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': ['error', 'always'],
    'no-confusing-arrow': ['error', {allowParens: false}],
    'newline-per-chained-call': ['error', {ignoreChainWithDepth: 1}],
    'object-curly-spacing': ['error', 'never'],
    'no-underscore-dangle': ['error', {allowAfterThis: true}],
    'no-void': 'off',
    'no-bitwise': ['error', {allow: ['~', '^', '|', '&', '|=', '&=', '^=']}],
    'padded-blocks': ['error', {classes: 'always'}],
    'no-multiple-empty-lines': ['error', {max: 1}],
    strict: ['error', 'safe'],

    // specify the maximum length of a line in your program
    // http://eslint.org/docs/rules/max-len
    'max-len': [2, 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
    }],
    'import/no-extraneous-dependencies': ['error', {devDependencies: ['**/tests/**/*.js']}],
  },
};
