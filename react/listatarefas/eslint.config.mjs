import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  {
    env: {
      browser: true,
      es2021: true,
      jest: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['react', 'prettier', 'react-hooks'],
    settings: {
      react: {
        version: 'detect', // Detecta automaticamente a versão do React
      },
    },
    rules: {
      'react/prop-types': 'off', // Exemplo de regra específica
      'no-console': 'warn', // Exemplo de regra específica
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': 0,
      'react/state-in-constructor': 0,
      'react/forbid-prop-types': 0
    },
  },
];
