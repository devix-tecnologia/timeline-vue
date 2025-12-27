// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import { defineConfig } from 'eslint/config';
import vuePlugin from 'eslint-plugin-vue';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import parser from 'vue-eslint-parser';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
  // Ignorar arquivos de build / dependências para evitar warnings e lentidão
  {
    ignores: [
      '**/storybook-static/**',
      '**/dist/**',
      '**/node_modules/**',
      '**/.vite/**',
      '**/*.min.js',
    ],
  },
  {
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: parser, // Usando o parser Vue
      parserOptions: {
        parser: tsParser, // Define o TypeScript parser para <script lang="ts">
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      vue: vuePlugin,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      // Removed 'vue/component-tags-order' (not available in current eslint-plugin-vue)
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],
      'vue/no-v-html': 'off',
      'vue/padding-line-between-blocks': ['error', 'always'],
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
]);
