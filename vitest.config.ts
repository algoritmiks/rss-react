import { defineConfig, configDefaults } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/__tests__/setup.ts',
    coverage: {
      exclude: [
        ...configDefaults.exclude,
        'src/main.tsx',
        '.eslintrc.cjs',
        'src/components/errorPage',
        'src/components/errorBoundary',
      ],
    },
  },
})
