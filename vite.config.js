import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Raise warning threshold slightly (Three.js is intentionally large)
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split Three.js into its own chunk for better caching
          'three': ['three'],
          // Split React into its own chunk
          'react-vendor': ['react', 'react-dom'],
          // Split lucide icons
          'lucide': ['lucide-react'],
        },
      },
    },
  },
})
