import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // matches your workflow
    emptyOutDir: true,
    rollupOptions: {
      input: '/index.html', // ensure correct entry
    },
  },
  base: './',
  //base: '/Steam-Game-Recommendations/',
})
