// @ts-check
import { defineConfig } from 'astro/config';

// Deployed as a GitHub Pages *user site*, so it is served from the domain
// root and needs no `base` path. Tailwind is wired in via postcss.config.mjs.
export default defineConfig({
  site: 'https://mcgillcurescancer.github.io',
});
