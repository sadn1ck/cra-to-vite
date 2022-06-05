import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginEslint from "vite-plugin-eslint";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginEslint({
      emitError: true,
      failOnWarning: true
    }),
    checker({
      typescript: true,
    }),
  ],
});
