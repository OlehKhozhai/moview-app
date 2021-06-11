module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './../',
  coverageDirectory: 'test-results',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  reporters: ['jest-standard-reporter'],
  setupFilesAfterEnv: ['<rootDir>/config/jest.setup.ts'],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(test).ts?(x)'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['.*stories.tsx$', '.*d.ts$', 'src/index.tsx$'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleDirectories: ['<rootDir>/node_modules'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!variables/.*)'],
  moduleNameMapper: {
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      './fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  transform: {
    'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest',
    '^.+\\.(ts|tsx|js)$': 'ts-jest',
  },
};
