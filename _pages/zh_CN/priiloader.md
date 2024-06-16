---
title: "Priiloader"
---

{% include toc title="Table of Contents" %}

Priiloader 为 Wii 添加了一定程度的变砖保护。 它在 Wii 菜单之前加载（因此得名）。 The tool can also apply hacks that are used to enhance, unlock, and fix many System Menu features.

Additionally, it can be used to quickly launch any Title or Homebrew, or change the way Wii autoboots.

### Requirements

* 一张 SD 卡或 U 盘
* 将 `UNEO Channel Booter for Priiloader.zip` 文件解压到任意位置。
* https://oscwii.org/library/app/loadpriiloader

#### Optional Requirements for vWii (highly recommended)

* 允许您从数据管理中将通常不允许的存档文件复制到 SD 卡中。
* 将 Wii 菜单日志发送到记忆卡槽 B 的调试设备。
    * 您可以使用 [Priiloader Wii U Forwarder](https://github.com/DacoTaco/priiloader/releases/download/0.10.0/PriiloaderWiiUForwarder.zip) 直接从 Wii U 菜单加载 Priiloader。 **这只适用于 Aroma。

### Instructions

{% capture notice-vwii-priiloader %}

Priiloader on vWii does not have any impact on Wii U VC titles.

{% endcapture %}

<div class="notice--danger">{{ notice-vwii-priiloader }}</div>

#### Section I - Prep Work

1. Power off your console.
1. Insert your SD card or USB drive into your computer.
1. 将两个应用解压到 SD 卡或 U 盘的根目录。
1. 将 `uneoboot.dol` 复制到您 SD 卡的根目录。
1. 将 Wii 菜单日志发送到记忆卡槽 B 的调试设备。
1. Reinsert your SD card or USB drive into your console.

#### 第二部分 - 安装 Priiloader

1. Power on your console.
1. 启动 Wii 上的 Homebrew Channel。
1. 启动 Priiloader installer。
1. 按 Wii 遥控器的 + 按钮或 GameCube 手柄的 A 按钮。

    ![](/images/priiloader/installer.png)

    ![](/images/priiloader/installing.png)

1. 按 A 回到 Homebrew Channel。

#### 第三部分 - 进入 Priiloader

1. Press the HOME button, then select Exit to System Menu to exit the Homebrew Channel.
1. Priiloader 菜单

    ![](/images/priiloader/menu.png)

Later on, to enter it you can:

+ 打开 Wii 的同时按住 RESET。
    + Wii Only
+ 打开主机的同时按住 USB 键盘上的 ESC 键。
    + Wii, vWii and Mini
+ Run the "Load Priiloader" tool from the HBC
    + Wii, vWii and Mini
+ 立即将 Wii 菜单加载到数据管理中。
    + vWii Only

#### 配置 Priiloader

1. 滚动到 `System Menu Hacks` 并按 `A`。

    ![](/images/priiloader/menu_hacks.png)

    如果将 Priiloader installer 放在 U 盘上，请确保没有同时插入 SD 卡。 <br> 这将导致 Priiloader 找不到 `hacks_hash.ini` 文件。
    {: .notice--warning}

1. For the following options, enable the options according to your console:
    + Wii:
        + 480p graphics fix in system menu
        + Block Disc Updates
        + Block Online Updates
        + If you are NOT using a CRT display: `Remove Deflicker`
    + vWii:
        + Block Online Updates
        + Wii System Settings via Options Button
        + If you are NOT using a CRT display: `Remove Deflicker`
    + Wii mini:
        + Block Disc Updates
        + If you are NOT using a CRT display: `Remove Deflicker`
1. 向下滚动到 `save settings`，然后按 A。
1. 按 `B` 回到主菜单。

You can see the [Priiloader Usage](priiloader-usage) page for more information about Priiloader's additional options and System Menu Hacks.
{: .notice--info}

[继续浏览 Wii 破解的注意事项](dosanddonts)<br> 这里是一些准则，确保您的 Wii 不会变砖。
{: .notice--info}

### Wii: Next Steps

Continue to [cIOS](cios)<br> This guide provides steps on how to get a basic set of cIOS installed on your Wii, enabling functionality on apps like USB loaders.
{: .notice--info}

### vWii: Next Steps

Continue to [vWii cIOS](cios-vwii)<br> This guide provides steps on how to get a basic set of cIOS installed on the vWii, enabling functionality on apps like USB loaders.
{: .notice--info}

### Wii mini: Next Steps

Continue to [Wii mini cIOS](cios-mini)<br> This guide provides steps on how to get a basic set of cIOS installed on your Wii mini, enabling functionality on apps like USB loaders.
{: .notice--info}
