/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    // 记得要在终端运行过 npm install -D @tailwindcss/typography
    require('@tailwindcss/typography'),
  ],
};