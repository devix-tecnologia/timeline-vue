const path = require("path");
const { defineConfig } = require("vite");
import vue from "@vitejs/plugin-vue";

// https://github.com/quasarframework/quasar/issues/8432
// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "timeline-vue",
      formats: ["es"],
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
});
