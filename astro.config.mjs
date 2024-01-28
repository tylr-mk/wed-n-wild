import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  // Enable Svelte to support Svelte components.
  integrations: [svelte(), tailwind(), mdx(), markdoc()],
  output: "server",
  adapter: vercel()
});