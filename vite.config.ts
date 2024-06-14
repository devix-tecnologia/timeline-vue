import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from 'vite-plugin-dts';
import { configDefaults } from 'vitest/config';

// https://github.com/quasarframework/quasar/issues/8432
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "timeline-vue",
      formats: ["es", "umd", "cjs"],
      fileName: (format: string) => `timeline-vue.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: { vue: "Vue" },
      },
    },
    emptyOutDir: false,
  },
  optimizeDeps: {
    exclude: ['vue']
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    exclude: [...configDefaults.exclude, 'dist/**']
  }
});
