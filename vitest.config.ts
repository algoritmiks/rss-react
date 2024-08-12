import react from '@vitejs/plugin-react'
import { defineConfig, configDefaults } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/__tests__/setup.ts',
    coverage: {
      exclude: [
        ...configDefaults.exclude,
        '.eslintrc.cjs',
        'next.config.mjs',
        'next-env.d.ts',
      ],
    },
  },
})
