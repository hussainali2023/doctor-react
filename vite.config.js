import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/service":"http://localhost:5000"
    }
  },
  plugins: [react()],
  
})
