// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed to GitHub Pages at https://madhan120-prog.github.io/Madhan-Portfolio/
// If you later add a custom domain, set `site` to it and remove `base`.
export default defineConfig({
  site: 'https://madhan120-prog.github.io',
  base: '/Madhan-Portfolio',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
