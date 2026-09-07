import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// User site: https://spjrwang.github.io — base must be '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
