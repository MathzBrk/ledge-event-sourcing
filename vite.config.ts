import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/frontend',
  server: {
    port: 5173,
  },
  build: {
    outDir: '../../dist/frontend',
    emptyOutDir: true,
  },
});
