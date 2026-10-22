import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/iwamad-sis2-blog/',
  build: {
    outDir: 'docs',
  },
})