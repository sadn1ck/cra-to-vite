import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginEslint from "vite-plugin-eslint";
import checker from "vite-plugin-checker";

const SPLIT_CHUNK_LIST = ["react", "react-dom"];
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")){
            if (id.includes("react")){
              return "vendor_react";
            }
            return "vendor";
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
