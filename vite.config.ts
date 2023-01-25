/// <reference types="vitest" />

import { defineConfig } from "vite";
import { resolve } from "path";
import esLint from "vite-plugin-eslint";
import dts from "vite-plugin-dts";

export default defineConfig({
  test: {
    globals: true,
    include: ["./src/**/*.spec.ts"],
    environment: "happy-dom",
    coverage: {
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    },
    dedupe: ["vue"]
  },
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "VueTypedProps",
      formats: ["es"],
      fileName: (format) => `vue-typed-props.${format}.js`
    },
    rollupOptions: {
      external: ["vue"]
    }
  },
  plugins: [
    esLint(),
    dts(),
  ]
});
