import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField, fontProviders } from 'astro/config';

// @ts-ignore
import getRemoteAssets from 'astro-get-remote-img';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import { loadEnv } from "vite";

const { CMS_URL } = loadEnv('production', process.cwd(), "");

export default defineConfig({
  site: 'https://travl.guru',
  env: {
    schema: {
      CMS_URL: envField.string({ context: 'server', optional: false, access: 'public' }),
    }
  },
  vite: {
      plugins: [tailwindcss()]
  },
  integrations: [
    sitemap(),
    icon(),
    getRemoteAssets({
      url: `${CMS_URL}/assets`,
      imageDir: './static',
    }),
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
  }
});
