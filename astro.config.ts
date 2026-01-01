import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField, fontProviders } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://prague.travl.guru',
  env: {
    schema: {
      CMS_URL: envField.string({ context: 'server', optional: false, access: 'public' }),
    }
  },
  vite: {
      plugins: [tailwindcss()]
  },
  integrations: [sitemap()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        cssVariable: '--font-roboto',
        name: 'Roboto'
      }
    ]
  }
});
