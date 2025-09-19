import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      // Main path alias for cleaner imports
      "@": path.resolve(__dirname, "./src"),

      // Keep only the Figma asset alias if needed
      "figma:asset/96c0b48589a5d5909a2db76beff2c32979c4c8c1.png": path.resolve(
        __dirname,
        "./src/assets/96c0b48589a5d5909a2db76beff2c32979c4c8c1.png"
      ),
    },
  },
  build: {
    target: "esnext",
    outDir: "build",
  },
  server: {
    port: 3000,
    open: true,
  },
});
