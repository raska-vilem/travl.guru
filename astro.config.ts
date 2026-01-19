import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField, fontProviders } from 'astro/config';
// @ts-expect-error
import getRemoteAssets from 'astro-get-remote-img';
import icon from 'astro-icon';
import { loadEnv } from 'vite';

const { CDN_URL } = loadEnv('production', process.cwd(), '');

export default defineConfig({
    site: 'https://travl.guru',
    env: {
        schema: {
            CMS_URL: envField.string({ context: 'server', optional: false, access: 'public' }),
            CDN_URL: envField.string({ context: 'server', optional: false, access: 'public' }),
        },
    },
    vite: {
        // @ts-expect-error
        plugins: [tailwindcss()],
    },
    integrations: [
        sitemap(),
        icon(),
        getRemoteAssets({
            url: CDN_URL,
            imageDir: './images',
        }),
    ],
    prefetch: {
        defaultStrategy: 'viewport',
    },
    experimental: {
        fonts: [
            {
                provider: fontProviders.google(),
                cssVariable: '--font-roboto',
                name: 'Roboto',
            },
        ],
    },
    image: {
        domains: [CDN_URL],
    },
});
