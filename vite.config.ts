import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}
  },
  build: {
    outDir: 'dist',
    commonjsOptions: {
      ignoreTryAll: true
    },
    rollupOptions: {
      external: [
        'i18n',
        'node:i18n',
        'express',
        'fsevents'
      ]
    }
  }
});
