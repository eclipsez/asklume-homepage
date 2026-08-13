import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        about: 'about.html',
        methodology: 'geo-aip.html',
        main: 'index.html',
        solutions: 'solutions.html',
        globalGeo: 'global-geo.html',
        services: 'services.html',
        resources: 'resources.html',
        resourceDetail: 'resource-detail.html',
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.test.{ts,tsx}', 'tests/unit/**/*.test.ts'],
    setupFiles: './src/test/setup.ts',
  },
})
