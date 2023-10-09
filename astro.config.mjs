import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercelStatic from '@astrojs/vercel/static';


import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), prefetch()],
  output: 'static',
  adapter: vercelStatic()
});