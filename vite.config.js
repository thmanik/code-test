// 

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // ESLint error browser-e ba terminal-e asha bondho korar jonno
  server: {
    hmr: {
      overlay: false, // Eta browser overlay error bondho korbe
    }
  },
  logLevel: 'info', // 'warn' ba 'error' dileo console clean thakbe
})