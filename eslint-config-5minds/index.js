'use strict';

module.exports = {
  extends: [
    './rules/airbnb/best-practices',
    './rules/airbnb/errors',
    './rules/airbnb/node',
    './rules/airbnb/style',
    './rules/airbnb/variables',
    './rules/airbnb/es2017',
    './rules/airbnb/imports',
    './rules/5minds_rules',
  ].map(require.resolve),
  rules: {},
};
