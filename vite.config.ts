// https://github.com/quasarframework/quasar/issues/8432
// https://vitejs.dev/config/
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from 'vite-plugin-dts';
import { configDefaults } from 'vitest/config';

const isStorybook = !!process.env.STORYBOOK;

export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "timeline-vue",
      formats: ["es", "umd"],
      fileName: (format: string) => `timeline-vue.${format}.js`,
    },
    rollupOptions: {
      // Não marque "vue" como externo no Storybook
      external: isStorybook ? [] : ["vue"],
      output: {
        globals: isStorybook ? {} : { vue: "Vue" },
      },
    },
    emptyOutDir: false,
  },
  optimizeDeps: {
    exclude: isStorybook ? [] : ['vue'], // Não exclua vue no Storybook
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    exclude: [...configDefaults.exclude, 'dist/**']
  }
});
