module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
  ],
  resolver: 'jest-pnp-resolver',
  coveragePathIgnorePatterns: [
    'src/serviceWorker.ts',
    'src/react-app-env.d.ts',
    'src/index.tsx',
  ],
  coverageDirectory: '<rootDir>/coverage/',
  modulePaths: ['node_modules', 'src'],
  moduleDirectories: ['node_modules', 'src'],
  setupFiles: ['react-app-polyfill/jsdom', './enzyme.setup.js'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}',
  ],
  testURL: 'http://localhost',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)':
      '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  watchPlugins: [
    './node_modules/jest-watch-typeahead/filename.js',
    './node_modules/jest-watch-typeahead/testname.js',
  ],
};
