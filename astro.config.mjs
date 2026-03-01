import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // 1. 引入 Vite 插件

export default defineConfig({
  vite: {
    plugins: [tailwindcss()], // 2. 在这里启用它
  },
});