import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://giulio-source.github.io/ns-hinto/',
  plugins: [react()],
})
