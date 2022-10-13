import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
const { resolve } = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    unocss(),
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),

  ],
  resolve: {
    alias: [//配置别名
      { find: '@', replacement: resolve(__dirname, 'src') }
    ],
  }
})
