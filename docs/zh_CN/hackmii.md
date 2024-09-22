---
title: "重新启动 HackMii Installer"
---

{% include toc title="Table of Contents" %}

本指南适用于需要重新启动 HackMii Installer 以更新/重新安装 the Homebrew Channel 或 BootMii 的情况。

[重新利用任何漏洞](get-started)以重新进入 HackMii Installer 也是安全的。
{: .notice--info}

### 通过 Homebrew Channel 重新启动

#### Requirements

* Homebrew Channel
* 格式化为 FAT32/MS-DOS 的 SD 卡或 U 盘
* [对于Wii，如果打算安装Homebrew Channel和BootMii，我们不建议您使用BlueBomb，因为有更便捷的方法可以使用。](https://bootmii.org/download/)

#### Instructions

1. 将 SD/USB 插入你的电脑。
1. 将 HackMii Installer v1.2 解压到 SD/USB 的 `apps` 文件夹。
    + 如果文件夹不存在，请创建它。
1. 将 SD/USB 插入 Wii，并从 Homebrew Channel 中启动 `hackmii_installer_v1.2` 应用程序。
    + 该应用程序将没有图标。

[继续到 安装 Homebrew Channel 和 BootMii](hbc)
{: .notice--info}

### 通过 Priiloader 重新启动

#### Requirements
* 安装了 Priiloader（或 Preloader）的 Wii
* 格式化为 FAT32/MS-DOS 的 SD 卡或 U 盘
* [对于Wii，如果打算安装Homebrew Channel和BootMii，我们不建议您使用BlueBomb，因为有更便捷的方法可以使用。](https://bootmii.org/download/)

要检查您的 Wii 是否安装了 Priiloader，请在开机时按住 RESET 按钮。
{: .notice--info}

Preloader and older versions of Priiloader do not seem to support SDHC (>2GB) cards.
{: .notice--warning}

#### Instructions

1. 将 SD/USB 插入你的电脑。
1. 将 HackMii Installer v1.2 解压到 SD/USB 的 `apps` 文件夹。
1. 将 SD/USB 插入 Wii。
1. 通过在打开 Wii 时按住 RESET 按钮进入 Priiloader。
1. 进入 `Load/Install File`。
1. Navigate to `boot.elf` and press `1` to load it.

If `Press (1) to continue` does not show up after about 30 seconds, downloading [HackMii Installer v1.0](https://bootmii.org/download/) may help.
{: .notice--info}

[继续安装 Homebrew Channel 和 BootMii](hbc)
{: .notice--info}
