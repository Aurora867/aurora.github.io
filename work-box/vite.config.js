import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'), // 将 '@' 别名指向项目根目录的 'src' 目录
            // 你可以根据需要添加更多的别名
            // 例如：'@components': '/src/components'
        },
    },
})

