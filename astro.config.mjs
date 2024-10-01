import { defineConfig } from 'astro/config';
import htmx from 'astro-htmx';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [db(), htmx()]
});