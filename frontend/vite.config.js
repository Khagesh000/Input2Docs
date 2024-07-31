// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({mode}) => {
  return {
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: mode === 'production' ? 2000 : 600,},
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
}
});
