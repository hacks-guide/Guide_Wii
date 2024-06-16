---
layout: splash
title: "Wii 指南"
header:
  overlay_color: "#121212"
  overlay_image: /images/main-pages/home-page-feature.jpg
  overlay_filter: 0.5
  caption:
excerpt: "The complete guide to modding your Wii, vWii, and Wii mini."
---

Since this guide has just been published, translations are a work-in-progress. Thank you for your patience! Thank you for your patience!
{: .notice--info}

To get the most out of this guide, you should read this page before proceeding.
{: .notice--warning}

### 什么是“自制（homebrew）”？

[**自制**](https://en.wikipedia.org/wiki/Homebrew_(video_games))指未经任天堂授权的软件。 In order to gain the ability to run homebrew on the Wii, the console must first be modified to run unsigned code.

Here are some common examples of what homebrew can do for your Wii:

+ 使用 [BootMii](hbc) [备份](bootmii)和[恢复](bootmiirecover) Wii 系统内存（NAND）的副本。
+ 使用 [Priiloader](priiloader) 保护 Wii 以防止变砖，然后在 Wii 菜单中添加一些修改。
+ 使用 [Open Shop Channel](hbb) 下载新的自制应用。
+ 使用 [Riivolution](riivolution) 对游戏光盘内容进行修改（允许您加载游戏修改）。
+ 使用 [MyMenuify](themes) 安装 Wii 菜单主题。
+ 使用 [CleanRip](/dump-games) 备份光盘，使用 [Yet Another BlueDump MOD](dump-wads) 备份已安装的游戏和标题。
+ Watch [DVDs](recommended-homebrew#entertainment) and play external media files on your Wii
+ 安装 [WiiFlow](wiiflow) 或 [USB Loader GX](usbloadergx) 从 U 盘启动所有您喜爱的游戏。
+ 使用 [RiiConnect24](riiconnect24)、[Wiimmfi](wiimmfi) 和 [WiiLink](wiilink) 恢复已停止的在线服务。
+ 使用 [RiiConnect24](riiconnect24)、[Wiimmfi](wiimmfi) 和 [WiiLink](wiilink) 恢复已停止的在线服务。

### What does the guide install?

This guide aims to do the following, including optional sections:

+ 通过利用 Wii 的漏洞，可以免费在任天堂 Wii 中运行自制软件。 通过本指南进行破解，将使您能够轻松而持久地访问 Wii 自制软件。
+ Install BootMii and the Homebrew Channel
+ Make a backup of critical system files
+ Install Priiloader
+ Install the Open Shop Channel
+ Recommended homebrew to use on your Wii
+ Restore functionality to WiiConnect24 and Nintendo Wi-Fi Connection

### What should I know before starting?

+ Homebrew is 100% free, and the process of modifying your Wii is also free. Anyone trying to convince you otherwise is likely attempting to [scam you](https://hbc.hackmii.com/scam). Anyone trying to convince you otherwise is likely attempting to [scam you](https://hbc.hackmii.com/scam).
+ This guide works on all system menu versions depending on the exploit, but **it is recommended that you update to 4.3 (the latest firmware)** if possible.
+ **This guide applies to retail/consumer Wiis ONLY!** This means that development units are not covered.
+ Depending on what you intend to do with your modded Wii, you may have to make some modifications to the system memory that have a risk of bricking (rendering the console inoperable). As long as you follow this guide exactly, you should be fine, but for general brick prevention tips see [this](bricks#brick-prevention) page. As long as you follow this guide exactly, you should be fine, but for general brick prevention tips see [this](bricks#brick-prevention) page.
+ The differences between the Wii and Wii mini are quite significant. The differences between the Wii and Wii mini are quite significant. This means that in some cases, something that is normally harmless to the Wii could cause a [severe brick](bricks#wi-fi-brick) to the Wii mini. Tread carefully if you are planning to mod one! Tread carefully if you are planning to mod one!
+ Be extremely careful when modifying a [Korean Wii](bricks#korean-kiierror-003-brick).

### 准备好了吗？

The guide has nine sections in total. These are listed below: These are listed below:

1. Choosing and using an exploit (REQUIRED)
1. Installing the Homebrew Channel and BootMii (REQUIRED)
1. Making a NAND backup with BootMii (REQUIRED)
1. Installing Priiloader (REQUIRED)
1. Installing the Open Shop Channel (RECOMMENDED)
1. Installing cIOS (RECOMMENDED)
1. Discovering Recommended Homebrew (RECOMMENDED)
1. Regaining WiiConnect24 Functionality (OPTIONAL)
1. Regaining Nintendo Wi-Fi Connection Functionality (OPTIONAL)

从[选择漏洞](get-started)开始！
{: .notice--info}
