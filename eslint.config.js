import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default {
  root: true,
  ignorePatterns: ['dist'],
  // Use the TypeScript parser
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    // If you have a tsconfig file, you can point to it:
    // project: './tsconfig.json',
  },
  env: {
    browser: true,
    es2020: true,
  },
  plugins: [
    'react-hooks',
    'react-refresh',
    '@typescript-eslint',
    'simple-import-sort',
  ],
  extends: [
    // ESLint recommended rules from @eslint/js
    js.configs.recommended,
    // TypeScript ESLint recommended rules
    'plugin:@typescript-eslint/recommended',
    // Disable ESLint rules that might conflict with Prettier
    'prettier',
  ],
  rules: {
    // React hooks recommendations
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Enable simple-import-sort for sorting imports and exports
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
  },
};
