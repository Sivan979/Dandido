import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ base must be exact repository name with slashes
export default defineConfig({
  base: '/Dandido/',
  plugins: [react()],
})
