import { defineConfig } from 'astro/config';

// https://astro.build/config
import mdx from '@astrojs/mdx';

// https://astro.build/config
import image from '@astrojs/image';

// https://www.astroicon.dev/getting-started/
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), image(), icon()],
  // build: {
  //   assets: 'assets',
  // }
  vite: {
    build: {
      rollupOptions: {
        external: ['nanoid', 'clsx', 'marked', 'title-case', 'bootstrap'],
      }
    }
  }
});
