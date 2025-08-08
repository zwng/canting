import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: './', // 添加相对路径配置
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "@/styles/variables.less";`
      }
    }
  }
})
