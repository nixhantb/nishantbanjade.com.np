module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/__tests__/**/*.test.(ts|tsx)', '**/?(*.)+(test).(ts|tsx)'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'identity-obj-proxy',
    '^@fontsource/montserrat': 'jest-transform-stub',
    '^@fontsource/courier-prime': 'jest-transform-stub',
    '^@fontsource/your-font-package': 'jest-transform-stub', // Add other font packages as needed
  },
};
