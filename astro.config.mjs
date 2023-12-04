import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/static';
import pagefind from 'astro-pagefind';



// https://astro.build/config
export default defineConfig({
  build: {
    format: "file",
  },
  integrations: [tailwind(), pagefind(), ],
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});