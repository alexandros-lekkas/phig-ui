import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tsconfigPaths(), dts({ insertTypesEntry: true })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "Phig UI",
      formats: ["es", "cjs"],
      fileName: (format) => `my-lib.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
