import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginEslint from "vite-plugin-eslint";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            const pkgName = (id.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]);
            return pkgName;
          }
          else if (id.includes("components")) {
            const compName = (id.match(/[\\/]components[\\/](.*?)([\\/]|$)/)[1]);
            return compName.split(".")[0];
          }
        }
      }
    }
  },
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
