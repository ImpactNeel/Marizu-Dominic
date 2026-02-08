import { defineConfig } from 'astro/config';

export default defineConfig({
  // Enable strict mode
  vite: {
    ssr: {
      external: ['svgo']
    }
  },
  integrations: [],
  output: 'static',
});