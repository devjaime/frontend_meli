module.exports = {
    // location.href will have this value
    testURL: 'http://localhost:3000/',
    // Add here folders to ignore
    testPathIgnorePatterns: ['/node_modules/'],
    setupTestFrameworkScriptFile: require.resolve(
      './test/setup.js'
    ),
    // path to components/modules to test
    modulePaths: ['<rootDir>/src'],
    moduleNameMapper: {
      // mock files that jest doesn't support like CSS and SVG files
      '\\.css$': '<rootDir>/test/module-mock.js',
      '\\.svg$': '<rootDir>/test/module-mock.js',
    },
    // collect coverage report from only the js files inside src
    collectCoverageFrom: ['**/src/**/*.js'],
    coverageThreshold: {
      global: {
        // 20 is just an example
        // you can change it to any value you want (below 100)
        statements: 20,
        branches: 20,
        functions: 20,
        lines: 20,
      },
    },
  }