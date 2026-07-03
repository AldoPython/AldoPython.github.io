import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// NOTE: update `site` to your real deployed URL.
// GitHub Pages user site => https://aldopython.github.io
// (for a project repo, also add: base: '/repo-name')
export default defineConfig({
  site: 'https://aldopython.github.io',
  integrations: [sitemap()],
});
