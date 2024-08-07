import { vitePlugin as remix } from '@remix-run/dev'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [!process.env.VITEST ? remix({ appDirectory: 'src/app' }) : react()],
})
