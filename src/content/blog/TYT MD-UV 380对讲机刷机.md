---
title: TYT MD-UV 380对讲机刷机
pubDate: 2026-03-05
description: OpenGD77
tags:
  - Radio
  - Tech
  - OpenGD77
---

## 信号报告

> **RIG:** TYT MD-UV380  
> **ANT:**   
> **LOC:** OM21VQ

---

经过春节期间反反复复的折腾，终于完成了 MD-UV 380刷OpenGD77固件的工作。
期间查阅了很多帖子和教程，也尝试在一台老旧的 ThinkPad x220 上操作，最终的问题还是写频线要选择正确。
淘宝上的K头写频线鱼龙混杂，我买了3根都无法正确连接对讲机。
其余需要注意的：
	
	1.固件文件必须使用 OpenGD77 CPS 中的 “Extras/Firmware Loader”（“附加/固件加载程序”）菜单安装。原厂提供的固件更新工具不能用于刷入 OpenGD77 固件。### [OpenGD77 CPS 2025 03 23](https://www.opengd77.com/archive/viewtopicf032.html?f=12&t=4991&#p36368) 最新版。
	
	2.官方提供的固件版本，不包括中文字库与系统。https://www.opengd77.com/downloads/releases/MDUV380_DM1701/R20260131/firmware/
	
	3. Win 11系统是可以正常刷机的，需要用到 STM DFUSe 驱动程序。这个在官方的介绍里面都有下载。
	
	4. **搜星问题：** UV380 的 GPS 模块冷启动比较慢。如果你在室内玩 MMDVM，机器很难定位。**建议先把机器拿到窗边或阳台，等 GPS 图标变绿（或定位成功）后，再回屋连接热点。**

下一步的任务，我还在研究这台对讲机与MMDVM盒子如何配合工作，将 aprs 在 BM 460999 上成功弹出信标。

以上，作为一个整理和记录，相关的驱动和刷机固件，感兴趣的可以发邮件给我。

73