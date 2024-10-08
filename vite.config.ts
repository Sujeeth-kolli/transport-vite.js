import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'src': path.resolve(__dirname, 'src') // Ensure 'src' alias is also set
    },
  },
  server: {
    proxy: {
      '/v2/api/transport': {
        target: 'https://dev.myossem.com', 
        changeOrigin: true,
    },
  },
  },
});
