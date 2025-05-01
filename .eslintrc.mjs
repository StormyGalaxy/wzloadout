// .eslintrc.mjs
// This file contains the main ESLint configuration for the monorepo.
// It is an ES Module file.

// Define the main ESLint configuration object
const config = {
  // Extend the configuration from your shared package
  // ESLint will load the default export of the @silocitypages/eslint-config package
  extends: [
    '@silocitypages/eslint-config',
    // Add any other extends here if needed at the root level
  ],

  // --- Added Override to Explicitly Apply TypeScript Parser to Root App Files ---
  // This override ensures the TypeScript parser is used for files
  // that are NOT in node_modules or packages/.
  overrides: [
    {
      // Target TypeScript and JavaScript files anywhere EXCEPT node_modules and packages/
      files: ['**/*.{js,jsx,ts,tsx}'],
      excludedFiles: ['node_modules/**/*', 'packages/**/*'], // Explicitly exclude node_modules and packages/
      // Ensure these files are parsed by the TypeScript parser
      parser: '@typescript-eslint/parser',
      parserOptions: {
        // Configure parser options if needed, e.g., project: './tsconfig.json'
        // project: './tsconfig.json', // Uncomment if you need type-aware linting at the root
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
        ecmaVersion: 'latest', // Use the latest ECMAScript version
        sourceType: 'module', // Use ES Module syntax
      },
      rules: {
        // Add any root-specific rules here if needed
      },
    },
    // Note: Overrides for files *within* packages should ideally be defined
    // within the @silocitypages/eslint-config package itself.
  ],
  // --- End Added Override ---

  // Shared ignore patterns - these will apply relative to the monorepo root
  // This is where you control which files are NOT linted at all.
  // For derived projects, this should include 'packages/'
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'dist/',
    'out/',
    'build/',
    '.pnpm/',
    '.pnpm-store/',
    // Add this line to ignore the packages folder in derived projects
    // 'packages/', // Keep this commented out in the base monorepo if you want to lint packages here
    // Add any other directories/files to ignore at the root level
  ],
};

// Export the configuration as the default export of this file
export default config;
