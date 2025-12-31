// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://prague.travl.guru',

  vite: {
      plugins: [tailwindcss()]
  },

  // integrations: [icon()]
});
