import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
import { pageSchemas } from './src/seo/staticSchemas'

function structuredDataPlugin() {
  return {
    name: 'asklume-structured-data',
    transformIndexHtml(html: string, ctx: { filename: string }) {
      const filename = ctx.filename.split(/[\\/]/).pop() ?? ctx.filename
      const schema = pageSchemas[filename]
      if (!schema) return html
      return {
        html,
        tags: [{
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          children: JSON.stringify(schema),
          injectTo: 'head-prepend' as const,
        }],
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), structuredDataPlugin()],
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
        diagnostic: 'diagnostic.html',
        deliverables: 'deliverables.html',
        cases: 'cases.html',
        faq: 'faq.html',
        contact: 'contact.html',
        partners: 'partners.html',
        media: 'media.html',
        publicSector: 'public-sector.html',
        privacy: 'privacy.html',
        terms: 'terms.html',
        notFound: '404.html',
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
