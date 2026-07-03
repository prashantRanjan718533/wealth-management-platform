import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: base must match your repo name exactly for GitHub Pages
// project sites (https://<user>.github.io/<repo-name>/)
export default defineConfig({
  plugins: [react()],
  base: '/wealth-management-platform/',
})
