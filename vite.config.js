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
    watch: {
    usePolling: true,
    },
    host: true, // Here
    strictPort: true,
    port: 8080, 
  }
})
