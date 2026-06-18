import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://opc.weavefox.ai',
  base: '/',
  integrations: [tailwind()],
  output: 'static',
  build: {
    format: 'file'
  }
});