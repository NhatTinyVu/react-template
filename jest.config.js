module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.{js,jsx,ts,tsx}',
  ],
  coveragePathIgnorePatterns: [
    'src/serviceWorkers.ts',
    'src/react-app-env.d.ts',
    'src/index.tsx',
  ],
  coverageDirectory: '<rootDir>/coverage/',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  modulePaths: ['node_modules', 'src'],
  moduleDirectories: ['node_modules', 'src'],
  setupFiles: ['./enzyme.setup.js'],
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
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^react(.*)$': `node_modules/react$1`,
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/scripts/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/scripts/mocks/image.js',
  },
  snapshotSerializers: [],
};
