import type { Linter } from 'eslint';

const config = {
  // Inherit base configurations
  extends: ['next/core-web-vitals', 'next/typescript', 'plugin:@typescript-eslint/recommended'],

  // Shared settings
  settings: {
    react: {
      version: 'detect', // Ensure React version detection works correctly
    },
  },

  // Shared overrides - these will apply to files matching the patterns within the monorepo context
  overrides: [
    {
      files: ['packages/**/__tests__/**/*.{js,jsx,ts,tsx}', 'packages/**/*.test.{js,jsx,ts,tsx}'],
      rules: { 'jest/valid-expect': 'off' },
    },
  ],

  // Shared ignore patterns - these will apply relative to the monorepo root
  ignorePatterns: ['node_modules/', '.next/', 'dist/', 'out/', 'build/', '.pnpm/', '.pnpm-store/'],
} as Linter.Config;

// Export the configuration
export default config;
