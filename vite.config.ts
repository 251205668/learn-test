/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/": `${resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    react(),

    AutoImport({
      imports: ["react"],
      dts: true,
    }),
  ],

  test: {
    globals: true,
    environment: "jsdom",
  },
});
