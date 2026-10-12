/// <reference types="vitest/config" />
// https://github.com/quasarframework/quasar/issues/8432
// https://vitejs.dev/config/
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer';
import { configDefaults, type TestProjectInlineConfiguration } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = import.meta.dirname;

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
const isStorybook = !!process.env.STORYBOOK;
const isCI = !!process.env.CI;

// Stories no Chromium, com o `prefers-color-scheme` do tema informado
const projetoStorybook = (
  name: string,
  colorScheme: 'light' | 'dark',
  groupOrder: number
): TestProjectInlineConfiguration => ({
  extends: true,
  plugins: [
    // The plugin will run tests for the stories defined in your Storybook config
    // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
    storybookTest({
      configDir: path.join(dirname, '.storybook'),
    }),
  ],
  test: {
    name,
    sequence: { groupOrder },
    browser: {
      enabled: true,
      headless: true,
      provider: playwright({ contextOptions: { colorScheme } }),
      instances: [
        {
          browser: 'chromium',
        },
      ],
    },
  },
});

export default defineConfig({
  plugins: [
    vue(),
    dts({
      outDir: 'dist',
      entryRoot: 'src',
      exclude: ['**/*.stories.ts', '**/*.test.ts', '**/tests/**', '**/*.spec.ts'],
      skipDiagnostics: false,
      cleanVueFileName: true,
      staticImport: true,
      insertTypesEntry: true,
      rollupTypes: true,
      copyDtsFiles: false,
    }),
    !isCI &&
      visualizer({
        open: true,
      }),
  ].filter(Boolean),
  build: {
    lib: {
      entry: path.resolve(dirname, 'src/index.ts'),
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
    // Só vale na raiz: o Vitest ignora o onConsoleLog dentro de um projeto
    onConsoleLog(log) {
      if (log.includes("ariaLabel' prop on 'PopoverProvider'")) return false;
    },
    projects: [
      // Testes unitários (Testing Library / Vue Test Utils) em happy-dom, fora do navegador
      {
        extends: true,
        test: {
          name: 'unit',
          environment: 'happy-dom',
          include: ['src/**/*.{test,spec}.ts'],
        },
      },
      // As stories rodam nos dois temas do src/global.css, para o axe medir o contraste de cada um.
      // O escuro roda depois do claro: dois Chromium ao mesmo tempo disputam a CPU e demoram mais.
      projetoStorybook('storybook', 'light', 0),
      projetoStorybook('storybook-escuro', 'dark', 1),
    ],
  },
});
