/// <reference types="vitest/config" />

import react from '@vitejs/plugin-react';
import wywInJS from '@wyw-in-js/vite';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    wywInJS({
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react'],
      },
      exclude: ['**/*.bak', '*.bak/**/*.{ts,tsx}'],
      include: ['**/*.{ts,tsx}'],
      // WYW-in-JS configuration (https://wyw-in-js.dev/configuration)
      sourceMap: process.env.NODE_ENV !== 'production',
      displayName: process.env.NODE_ENV !== 'production',
    }),
    react(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setupTests.ts',
  },
});
