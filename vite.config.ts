import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import compression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: 'terser', // Minifies JS
  },
  plugins: [
    react(),
    tailwindcss(),

    compression({ algorithm: 'brotliCompress', ext: '.br' }),
    compression({ algorithm: 'gzip', ext: '.gz' }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
});
