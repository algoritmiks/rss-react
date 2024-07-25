import { defineConfig, mergeConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config.ts'

export default mergeConfig(
  viteConfig,
  defineConfig({
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
  }),
)
