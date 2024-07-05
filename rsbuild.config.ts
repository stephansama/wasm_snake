import { defineConfig } from "@rsbuild/core";

export default defineConfig({
  source: { entry: { index: "./client/index.ts" } },
  html: {
    title: "WASM-snake",
    mountId: "root",
    favicon: "./assets/favicon/android-chrome-512x512.png",
    template: "./client/index.html",
  },
  tools: {
    postcss: (opts) => {
      opts.postcssOptions?.plugins?.push(require("tailwindcss"));
    },
  },
});
