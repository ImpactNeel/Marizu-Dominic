import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Enable strict mode
  vite: {
    ssr: {
      external: ['svgo']
    }
  },
  integrations: [tailwind()],
  output: 'static',
});