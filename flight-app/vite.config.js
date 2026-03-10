import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), federation({
    name: 'flightsApp',
    filename: 'remoteEntry.js',
    exposes: {
      './App': './src/App.jsx',
    },
    shared: ['react', 'react-dom'],
  })
  
],
server:{
  port: 3001, 
  cors: true,
  strictPort: true,
  },
  preview: {
    port: 3001,
    cors: true,
    strictPort: true,
  },
  build: {    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
})
