/*eslint-disable*/
'use strict';
process.env.BABEL_ENV = 'test';
const babelOptions = require('./package.json').babel.env.test;
module.exports = function(wallaby) {
  return {
    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest',

    files: [
      'package.json',
      'src/**/*.js',
      'src/**/*.ts',
      'jest-setup.js',
      'invitesStrings/**/*.*',
      '!src/**/*.test.js',
      '!src/**/*.test.ts',
      '!src/**/*.e2e.js',
      '!src/**/*.e2e.ts'
    ],

    tests: [
      'src/**/*.test.js',
      'src/**/*.test.ts',
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel(babelOptions)
    },

    setup: function(w) {
      require('babel-polyfill');
      w.testFramework.configure(require('./package.json').jest);
    }
  };
};
