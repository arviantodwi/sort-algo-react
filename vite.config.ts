import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import wywInJS from "@wyw-in-js/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    wywInJS({
      babelOptions: {
        presets: ["@babel/preset-typescript", "@babel/preset-react"],
      },
      exclude: ["**/*.bak", "*.bak/**/*.{ts,tsx}"],
      include: ["**/*.{ts,tsx}"],
      // WYW-in-JS configuration (https://wyw-in-js.dev/configuration)
      sourceMap: process.env.NODE_ENV !== "production",
      displayName: process.env.NODE_ENV !== "production",
    }),
    react(),
  ],
});
