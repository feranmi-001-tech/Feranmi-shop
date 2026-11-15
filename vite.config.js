import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Extra hostnames the dev/preview server may answer for (comma separated).
// Kept in an env var so the deployed preview hostname can change without
// editing tracked files. Localhost is always allowed by Vite.
const allowedHosts = (process.env.VITE_ALLOWED_HOSTS || '')
  .split(',')
  .map((host) => host.trim())
  .filter(Boolean)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts,
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts,
  },
})
