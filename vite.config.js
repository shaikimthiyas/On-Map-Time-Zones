import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  server: {
    port: 5173,
    host: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        map: resolve(__dirname, 'src/pages/map.html'),
        country: resolve(__dirname, 'src/pages/country.html'),
        auth: resolve(__dirname, 'src/pages/auth.html'),
        contact: resolve(__dirname, 'src/pages/contact.html')
      }
    }
  }
});
