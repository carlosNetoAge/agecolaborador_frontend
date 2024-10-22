import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools({launchEditor: 'phpstorm'}),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@api/AXIOS': fileURLToPath(new URL('./services/api.ts', import.meta.url)),
      '@config/echo': fileURLToPath(new URL('./services/config/echo.ts', import.meta.url)),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/global.scss";`
      }
    }
  },
    // server: {
    //   host: '192.168.69.37',
    //   port: '8080',
    // }
})
