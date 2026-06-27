import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@shared': path.resolve(__dirname, '../shared'),
      '@store': path.resolve(__dirname, '../../shared'),
      '@styles': path.resolve(__dirname, './src/styles'),
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
        additionalData: `
          @use "@/styles/abstracts/variables" as *; 
          @use "@/styles/abstracts/mixins" as *;
          @use "sass:color" as color;
        `,
      },
    },
  },
  build: {
    outDir: 'deploy',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            if (/node_modules\/(react|react-dom|react-router|react-router-dom|@remix-run|react-redux|@reduxjs|@hookform)/.test(id)) {
              return 'framework';
            }
            if (/node_modules\/(gsap|@gsap)/.test(id)) {
              return 'gsap';
            }
            if (/node_modules\/(axios)/.test(id)) {
              return 'axios';
            }
            if (/node_modules\/(zod)/.test(id)) {
              return 'zod';
            }
            return 'vendor';
          }
          if (id.includes('/src/pages/')) {
            const group = id.split('/src/pages/')[1].split('/')[0];
            return `pages-${group}`;
          }
          if (id.includes('/src/features/')) {
            const group = id.split('/src/features/')[1].split('/')[0];
            return `features-${group}`;
          }
          if (id.includes('/src/components/')) {
            const group = id.split('/src/components/')[1].split('/')[0];
            return `components-${group}`;
          }
          if (id.includes('/src/layouts/')) {
            const group = id.split('/src/layouts/')[1].split('/')[0];
            return `layouts-${group}`;
          }
        },
      },
    },
  },
});