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
  plugins: [
    'no-null'
  ]
  rules: {
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': ['error', 'always'],
    curly: ['error', 'multi-line'],
    'implicit-arrow-linebreak': ['off'],

    // specify the maximum length of a line in your program
    // http://eslint.org/docs/rules/max-len
    'max-len': [2, 150, 2, {
      ignoreUrls: true,
      ignoreComments: false,
    }],
    'newline-per-chained-call': ['error', {ignoreChainWithDepth: 1}],
    'nonblock-statement-body-position': ['off'],
    'no-bitwise': ['error', {allow: ['~', '^', '|', '&', '|=', '&=', '^=']}],
    'no-confusing-arrow': ['error', {allowParens: false}],
    'no-multiple-empty-lines': ['error', {max: 1}],
    'no-null/no-null': ['error'],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-underscore-dangle': ['error', {allowAfterThis: true}],
    'no-unused-vars': ['off', {vars: 'local', args: 'after-used'}],
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    'no-void': ['off'],
    'object-shorthand': ['error', 'never'],
    'object-curly-spacing': ['error', 'never'],
    'padded-blocks': ['error', {classes: 'always'}],
    'prefer-destructuring': ['off'],
    'require-await': ['error'],
    strict: ['error', 'safe'],
  },
};
