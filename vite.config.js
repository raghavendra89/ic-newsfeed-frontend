import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    },
  },
  server: {
    host: true, // This allows Vite to accept connections from outside the container
    port: 3000, // The port Vite will run on
    strictPort: true, // If the port is already used, Vite will fail instead of picking another port
    watch: {
      usePolling: true, // This is needed to work well inside Docker
    },
  }
})
