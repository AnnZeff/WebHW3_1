/** @type {import('jest').Config} */
const config = {
    collectCoverageFrom: [
      '**/*.{js,jsx}',
      '!**/node_modules/**',
      '!**/coverage/**',
    ],
    coverageThreshold: {
        "branches": 100,
        "functions": 100,
        "lines": 100,
    },

    coverageReporters: ['clover', 'json', 'lcov', ['text', {skipFull: true}]],
  };
  
  module.exports = config;