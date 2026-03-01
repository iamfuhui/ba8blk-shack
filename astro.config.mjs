import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // 确保有这一行

export default defineConfig({
  integrations: [
    tailwind({
      // 如果你没有 tailwind.config.mjs，可以在这里手动指定配置
      applyBaseStyles: true,
    })
  ],
});