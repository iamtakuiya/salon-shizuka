import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, '../../shared'),
    },
  },
  server: {
    port: 5173,
    proxy: {
      // Proxy API calls in dev — no CORS issues
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Auto-import abstracts into every SCSS file
        additionalData: `@use "@/styles/abstracts/variables" as *; @use "@/styles/abstracts/mixins" as *;`,
      },
    },
  },
});