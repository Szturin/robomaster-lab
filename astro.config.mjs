// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://szturin.github.io',
  base: '/robomaster-lab',
  integrations: [sitemap()],
});
