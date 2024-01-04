---
title: "GameCube 存档"
---

{% include toc title="Table of Contents" %}

这是如何管理 GameCube 存档的完整指南。

在 Family Edition Wii 或 Wii Mini 上使用任何 GameCube 外设都需要焊接 GameCube 端口和/或记忆卡插槽。
{: .notice--info}

## 上传单个存档（.gci 文件）到物理记忆卡

### Requirements

* 拥有 GameCube 端口的 Wii
* SD 卡或 USB
* [GCMM](https://oscwii.org/library/app/gcmm)

如果您正在寻找 100% 完成度的在线存档，您可以在[这里](https://gamefaqs.gamespot.com/)找到它们。
{: .notice--info}

如果您正在寻找用于启动 [Swiss](https://github.com/emukidid/swiss-gc/releases) 的存档漏洞，您可以在[这里](https://www.gc-forever.com/wiki/index.php?title=Booting_homebrew#Game_Save_Exploits)找到它们的列表。
{: .notice--info}

### 步骤

#### 下载

1. 解压 GCMM 并将其放在 SD 卡或 U 盘的 `apps` 文件夹。
1. 将 `.gci` 文件放置在 SD 卡或 U 盘根目录下名为 `MCBACKUP` 的文件夹中。
1. 将 SD 卡或 U 盘插入 Wii，然后从 Homebrew Channel 启动 GCMM。

#### 恢复

1. 将物理记忆卡插入插槽 A 或插槽 B。
1. 选择您希望从中恢复的设备。

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. 在 GCMM 中，按 GameCube 手柄的 X 或 Wii 遥控器的 +。

    ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

1. 选择记忆卡所在的插槽。

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. 选择您想要恢复的存档。 如果您有多个要恢复的存档，可以按 GameCube 手柄的 R 或 Wii 遥控器的 1 以恢复所有存档。

    ![](/images/homebrew/gcsaves/gcmm-select-save.jpg)

1. 当恢复完成后，按任意按钮继续。

## 将物理记忆卡的存档（.gci 文件）备份到 SD 或 USB

### Requirements

* 拥有 GameCube 端口的 Wii
* SD 卡或 USB
* [GCMM](https://oscwii.org/library/app/gcmm)

### 说明

#### 下载

1. 解压 GCMM 并将其放在 SD 卡或 U 盘的 `apps` 文件夹。
1. 将 `.gci` 文件放置在 SD 卡或 U 盘根目录下名为 `MCBACKUP` 的文件夹中。
1. 将 SD 卡或 U 盘插入 Wii，然后从 Homebrew Channel 启动 GCMM。

#### 备份

1. 将物理记忆卡插入插槽 A 或插槽 B。
1. 选择要备份到的设备。

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. 在 GCMM 中，按 GameCube 手柄的 Y 或 Wii 遥控器的 -。

    ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

1. 选择记忆卡所在的插槽。

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. 选择您想要备份的存档。 如果您有多个要备份的存档，可以按 GameCube 手柄的 R 或 Wii 遥控器的 1 以备份所有存档。

    ![](/images/homebrew/gcsaves/gcmm-select-save.jpg)

1. 当备份完成后，按任意按钮继续。

## 将物理记忆卡备份到模拟记忆卡（.raw 文件）中

### Requirements

* 拥有 GameCube 端口的 Wii
* SD 卡或 USB
* [GCMM](https://oscwii.org/library/app/gcmm)

### 步骤

#### 下载

1. 解压 GCMM 并将其放在 SD 卡或 U 盘的 `apps` 文件夹。
1. 将 SD 卡或 U 盘插入 Wii，然后从 Homebrew Channel 启动 GCMM。

#### Dumping the .raw

1. 将记忆卡插入插槽 A 或插槽 B。
1. 选择要转储到的设备。

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. 同时按下 GameCube 手柄的 L 和 Y 或 Wii 遥控器的 B 和 - 以备份到 .raw 文件，并选择您记忆卡所在的插槽。

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. 当转储完成后，按任意按钮继续。 它应该保存到您 SD 或 USB 根目录下名为 `MCBACKUP` 的文件夹。

## 将模拟存档恢复到物理记忆卡

### Requirements

* 拥有 GameCube 端口的 Wii
* SD 卡或 USB
* [GCMM](https://oscwii.org/library/app/gcmm)

### 步骤

1. 如果您正在尝试从 Dolphin 恢复存档，请在 Dolphin 中选择 `文件` 选项卡，然后选择打开用户目录，打开 GC 文件夹，并找到 `.raw` 文件。
1. 如果您正在恢复 Nintendont 模拟记忆卡的存档，浏览 SD 卡或 USB 根目录的 `saves` 文件夹。
1. 将记忆卡插入插槽 A 或插槽 B。
1. 选择您希望从中恢复的设备。

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. 同时按 GameCube 手柄的 L 和 X 或 Wii 遥控器的 B 和 +。
1. 选择记忆卡所在的插槽。

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. 它应该将 .raw 文件恢复到您的记忆卡中。 当恢复完成后，按任意按钮继续。

## 在 2 张物理记忆卡中传输存档

### Requirements

* 拥有 GameCube 端口的 Wii
* 至少 2 张物理记忆卡

### 步骤

1. 将 2 张记忆卡插入 Wii。
1. 从系统菜单中进入 `Wii 选项`，`数据管理`，`保存数据`，`Nintendo GameCube`。

    ![](/images/homebrew/gcsaves/sysmenu.jpg) <br>

    ![](/images/homebrew/gcsaves/settings.jpg) <br>

    ![](/images/homebrew/gcsaves/data-management.jpg) <br>

    ![](/images/homebrew/gcsaves/save-data.jpg)

1. 找到您想要的存档，选择它，然后选择 `Move or Copy`。

[Click here to go back to the site index.](site-navigation)
{: .notice--info}
