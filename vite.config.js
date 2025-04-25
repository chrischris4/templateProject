import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  css: {
    preprocessorOptions: {
      css: {
        additionalData: '@import "@material-tailwind/html/styles.css";'
      }
    }
  },
  plugins: [
    tailwindcss(),
    vue()
  ],
})