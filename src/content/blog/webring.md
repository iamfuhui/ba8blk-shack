---
title: "The Loop: 记一次 Fediverse Radio Webring 的入环实验"
description: "记录 BA8BLK 加入全球业余无线电网页环的技术实现过程与思考。"
pubDate: 2026-04-06
tags: ["Amateur Radio", "Astro", "Webring", "Geek"]
---


在算法推荐和信息茧房统治互联网的 2026 年，我决定在我的个人站 **ba8blk.com** 底部，拉一根指向全球 HAM 社区的“虚拟馈线”。

## 0x01 起源：何为 Webring？

Webring（网页环）是 90 年代去中心化互联网的遗迹。它不依赖搜索权重，而是通过参与者之间互换导航链接，形成一个物理意义上的逻辑环路。

我加入的这个环名为 **Fediverse Radio Webring**。它的成员是一群既活跃在分布式社交网络（Mastodon/Fediverse），又痴迷于业余无线电（Amateur Radio）的技术硬核玩家。



## 0x02 部署：Astro 架构下的样式“入侵”

作为一个基于 Astro 构建的静态站点，加入过程比想象中更有趣。由于我追求一种类似 **IC-7300 频谱图** 或 **老式终端** 的视觉质感，我放弃了通用的布局组件，选择在 `index.astro` 底部进行直接注入。

### 核心逻辑
网页环后端由 PHP 驱动。跳转请求携带 `site` 参数（即我的域名），由服务器根据 `sites.json` 数据库计算邻居节点并重定向。

### 视觉重构
为了干掉浏览器默认的、极不协调的蓝色链接样式，我使用了高优先级的 CSS 覆盖。我希望它看起来像是一个电台的操作面板，而非一段普通的文本。

```css
/* 强制覆盖全局样式，确保极客黑底风格 */
.ham-nav a {
    color: #00ced1 !important; /* 暗青色，模拟荧光屏 */
    text-decoration: none !important;
    font-family: 'Courier New', monospace;
    border: 1px solid transparent;
    transition: 0.2s ease;
}
.ham-nav a:hover {
    color: #00ff00 !important; /* 悬停触发：经典电台绿 */
    border: 1px solid #333;
    background: #111;
}
```

## 0x03 链接：跨越 Easter 的信号

私信管理员 @M0YNG 申请入环后，信号经历了一段短暂的“衰减”。

恰逢 Easter（复活节）假期，Christopher 正在陪伴家人。这种延迟反而让人觉得真实——在快节奏的数字时代，这种基于志愿者精神的、带有生活温度的社区审核，本身就是一种极客礼仪。

最终，收到回复："Done. Your site looks great, welcome to the ring." 

## 0x04 意义：在 2026 年扫频

现在的 ba8blk.com 底部已经上线。点击 [Random] 按钮，就像是在短波电台上手动转动转台（VFO）。你可能瞬间降落在伦敦某个 HAM 的树莓派博客，也可能出现在北美某个老哥的天线架设笔记里。

这种不确定性，是现代互联网最稀缺的乐趣。

73 de BA8BLK.
Location: Deyang, Sichuan (OM21EC)