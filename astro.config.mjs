import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://aswath.nl',
  trailingSlash: 'always',
  integrations: [sitemap()],
  adapter: cloudflare(),
});