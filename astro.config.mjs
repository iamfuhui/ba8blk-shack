import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { visit } from 'unist-util-visit'; // 需要安装: npm install unist-util-visit

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [
      // 自定义插件：将 Obsidian 的图片路径转换为 Astro 友好的 public 路径
      () => (tree) => {
        visit(tree, 'image', (node) => {
          // 逻辑 1：如果路径里包含 /public/images/，去掉 /public 部分
          // 适配 Obsidian 插入的绝对或相对路径
          if (node.url.includes('/public/images/')) {
            node.url = node.url.replace('/public/images/', '/images/');
          }
          
          // 逻辑 2：如果你在 Obsidian 里图片直接显示为 images/xxx.png (无前缀)
          // 且该路径不以 http 或 / 开头，则补全 /
          else if (!node.url.startsWith('http') && !node.url.startsWith('/')) {
            node.url = `/${node.url}`;
          }
        });
      },
    ],
  },
});