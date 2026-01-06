import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField, fontProviders } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import { loadEnv } from "vite";

const { CDN_URL } = loadEnv('production', process.cwd(), "");

export default defineConfig({
  site: 'https://travl.guru',
  env: {
    schema: {
      CMS_URL: envField.string({ context: 'server', optional: false, access: 'public' }),
      CDN_URL: envField.string({ context: 'server', optional: false, access: 'public' }),
    }
  },
  vite: {
      plugins: [tailwindcss()]
  },
  integrations: [
    sitemap(),
    icon(),
  ],
  prefetch: {
    defaultStrategy: 'viewport'
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        cssVariable: '--font-roboto',
        name: 'Roboto'
      }
    ]
  },
  image: {
    domains: [CDN_URL]
  }
});
