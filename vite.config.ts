const path = require("path");
const { defineConfig } = require("vite");
import vue from "@vitejs/plugin-vue";
import dts from 'vite-plugin-dts';

// https://github.com/quasarframework/quasar/issues/8432
// https://vitejs.dev/config/
module.exports = defineConfig({
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
    optimizeDeps: {
      exclude: ['vue']
    }
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom'
  }
});
