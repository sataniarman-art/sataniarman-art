import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  ],
  base: '/sataniarman-art/',
  
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three-bundle': ['three', '@react-three/fiber', '@react-three/drei'],
          'animation': ['framer-motion'],
          'ui': ['lucide-react'],
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    target: 'ES2020',
  },
  
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'three',
      '@react-three/fiber',
      '@react-three/drei',
      'framer-motion'
    ]
  }
})