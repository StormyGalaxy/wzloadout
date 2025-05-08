import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@silocitypages/utils$': '<rootDir>/packages/utils/src/index.ts', // Or your actual source entry
    '^@silocitypages/ui-core$': '<rootDir>/packages/ui-core/src/index.ts', // Or your actual source entry
  },
  transform: { '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }] },
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  // Add this to ignore dist folders globally when searching for tests
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  // Optional: If you want to specifically not collect coverage from dist
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
};

export default config;
