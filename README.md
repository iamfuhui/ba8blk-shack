# BA8BLK Shack

BA8BLK 的业余无线电个人网站 —— [ba8blk.com](https://ba8blk.com)

记录电台日志、技术笔记、通联数据与获奖证书。基于 [Astro](https://astro.build) 5 + Tailwind CSS 4 构建，部署在 Cloudflare Pages。

## 站点内容

| 路径 | 说明 |
| :-- | :-- |
| `/` | 首页，栏目入口与 Webring 导航 |
| `/blog` | 博客，文章位于 `src/content/blog/` |
| `/about` | 关于 |
| `/qsl`、`/qso` | 跳转到独立的 QSL 查询系统 [qsl.ba8blk.com](https://qsl.ba8blk.com) |

## 目录

```text
src/pages/          页面路由
src/content/blog/   博客文章（Markdown，同时是 Obsidian 库）
src/data/qso.json   通联记录（Wavelog 同步）
public/images/      博客配图
awards/             获奖证书
templates/          Obsidian 文章模板
```

## 开发

```sh
npm install
npm run dev      # localhost:4321
npm run build    # 输出到 dist/
```

## 写作

用 Obsidian 写，模板见 `templates/post-template.md.md`，文章放进 `src/content/blog/`。frontmatter 必填 `title`、`description`、`pubDate`。图片放 `public/images/`，构建时会自动把 Obsidian 路径改写为 `/images/...`。

写完通过 Obsidian Git 推送到 `main`，Cloudflare Pages 自动构建发布。
