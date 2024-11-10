// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    build: {
      chunkSizeWarningLimit: mode === 'production' ? 2000 : 600,
      rollupOptions: {
        // Ensure that CSS files are included correctly
        external: [
          'node_modules/react-quill/dist/quill.snow.css'
        ],
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0];
            }
          }
        }
      },
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  };
});
