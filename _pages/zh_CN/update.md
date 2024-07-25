---
title: "更新 Wii 菜单至 v4.3"
---

{% include toc title="Table of Contents" %}

如果您已经破解了 Wii，本教程将解释如何将 Wii 菜单更新至 4.3 版本。

使用 [ModMii](modmii)（仅限 Windows）将 Wii 更新至 4.3 要安全得多。
{: .notice--warning}

### Requirements

* a Wii with The Homebrew Channel 1.0.8 or later
    + If you do not have the Homebrew Channel or it is out of date, please [start here](get-started) to (re)install it first.
* 一张 SD 卡或 U 盘
* 一台装有 Windows 的电脑
* [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest)
* [Priiloader](priiloader)
* [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

### Instructions

#### 第一部分 - 下载

1. 解压 NUS Downloader Wii 的 .zip 文件，并打开应用程序。
1. 前往 `Database...` > `System` > `0000000100000002 - System Menu`，根据下表选择与您区域对应的版本。
1. 确保已勾选 `Pack WAD`。
1. 按 `Start NUS Download!`。
1. 打开 `titles` -> `0000000100000002` ->（Wii 菜单版本），将 .wad 文件复制到 SD 卡或 U 盘上名为 `wad` 的文件夹中。
1. 使用 `IOS` -> `000000010000003A` -> `Latest Version` 和 `IOS` -> `0000000100000050` -> `Latest Version` 重复步骤 2-5。
1. 复制完所有 3 个 `.wad` 文件后，从 PC 上弹出 SD 卡/U 盘并将其放回 Wii。

| 区域 | Wii 菜单版本    |
| -- | ----------- |
| 日本 | v512 (4.3J) |
| 美国 | v513 (4.3U) |
| 欧洲 | v514 (4.3E) |
| 韩国 | v518 (4.3K) |

#### 第二部分 - 安装

1. 关闭 Wii。 按住 RESET，然后再打开。
1. 在 Priiloader 菜单中选择 `Homebrew Channel`。
    * 如果没出现 Priiloader 菜单，请[立即安装](priiloader)。 本指南需要 Priiloader。
1. 启动 YAWM ModMii Edition。
1. 选择 SD 卡或 U 盘。
1. 按 `+` 选择 IOS80 和 IOS58 WAD，然后按两次 A 进行安装。
1. 移动至 Wii 菜单 WAD，然后按两次 A 进行安装。
1. 提示保留 Priiloader 时，按 A 确认。
1. 安装成功后，按 HOME 按钮回到 Homebrew Channel。

[Click here to go back to the site index.](site-navigation)
{: .notice--info}
