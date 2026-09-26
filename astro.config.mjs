import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://huiotca22.github.io',
  base: '/canger-site',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  devToolbar: {
    enabled: false,
  },
});
