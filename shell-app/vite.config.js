import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), federation({
    name: 'shellApp',
    filename: 'remoteEntry.js',
    remotes: {
      flights: 'http://localhost:3001/assets/remoteEntry.js',
      trains: 'http://localhost:3002/assets/remoteEntry.js',
    },
        shared: ['react', 'react-dom', 'react-router-dom'],
  })],
  server:{
    port: 3000,
    cors: true,
    strictPort: true,
  },
})
