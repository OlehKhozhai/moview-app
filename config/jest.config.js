module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  clearMocks: true,
  verbose: true,
  rootDir: '../',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(test).ts?(x)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  reporters: ['jest-standard-reporter'],
  coverageReporters: ['json', 'html'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['.*stories.tsx$', '.*d.ts$', 'src/index.tsx$'],
  watchPathIgnorePatterns: ['node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleDirectories: ['node_modules', 'src'],
  transformIgnorePatterns: ['node_modules[/\\\\](?!@amcharts[/\\\\]amcharts4)'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'test-file-stub',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
};
