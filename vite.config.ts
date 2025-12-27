/// <reference types="vitest/config" />
// https://github.com/quasarframework/quasar/issues/8432
// https://vitejs.dev/config/
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer';
import { configDefaults } from 'vitest/config';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
const isStorybook = !!process.env.STORYBOOK;
const isCI = !!process.env.CI;
export default defineConfig({
  plugins: [
    vue(),
    dts(),
    !isCI &&
      visualizer({
        open: true,
      }),
  ].filter(Boolean),
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'timeline-vue',
      formats: ['es', 'umd'],
      fileName: (format: string) => `timeline-vue.${format}.js`,
    },
    rollupOptions: {
      // Marcar 'vue' e 'material-symbols' como externas, exceto quando estiver buildando o Storybook
      external: isStorybook ? [] : ['vue', 'material-symbols/outlined.css'],
      output: {
        exports: 'named',
        globals: isStorybook
          ? {}
          : {
              vue: 'Vue',
              'material-symbols/outlined.css': 'MaterialSymbols',
            },
      },
    },
    cssCodeSplit: true,
    // Dividir o CSS
    emptyOutDir: false,
  },
  optimizeDeps: {
    exclude: isStorybook ? [] : ['vue', 'material-symbols/outlined.css'], // Não exclua no Storybook
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    exclude: [...configDefaults.exclude, 'dist/**'],
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});
