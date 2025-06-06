import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    base: './',
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080', // 백엔드 주소
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''), // /api 제거하고 백엔드로
            },
        },
    },
})
