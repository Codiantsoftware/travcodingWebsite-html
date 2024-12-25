import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/travcoding-main-web-html/www',  // Set this to your subfolder name
  build: {
    minify: true,
    sourcemap: false,
    target: 'modules',
  },

})
