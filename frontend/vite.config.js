// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000,},
    rollupOptions: {
      // Ensure that CSS files are included correctly
      external: [
        'react-quill/dist/quill.snow.css',
      ],
    },

  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
