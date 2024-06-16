---
title: "供Wii mini安装的d2xl cIOS （实验性功能）"
---

{% include toc title="Table of Contents" %}

如果你在本教程中需要任何帮助，请加入[Wii mini破解 Discord服务器](https://discord.gg/6ryxnkS)（推荐）
{: .notice--info}

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. 你现在可以使用一些自制软件，例如 [USB Loader GX](usbloadergx) 和 [WiiFlow](wiiflow)。 You can skip this process if you want, but generally it extends your Wii with little to no downsides.

这个d2x cIOS installer原先是为WiiU的vWii系统而开发的，由DaveBaol制作，自定义cIOS是由Laseratte为Wii mini设计的。 原下载地址可在[这里](https://wii.leseratte10.de/d2xl-cIOS/)找到。 Leseratte的Github主页可在[这里](https://github.com/Leseratte10/d2xl-cios)找到。 请注意，这个cIOS依然是实验性的，即使没有关于功能的错误反馈。

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

此教程仅适用于Wii mini. 如果你使用的是Wii，请前往[这个教程](cios)。 If you have a Wii, follow [this guide](cios) instead. If you have a Wii U (vWii), follow [this guide](cios-vwii) instead.
{: .notice--warning}

Do not attempt to install a Wii/vWii IOS or System Menu on the Wii mini. 这样做会使你的Wii mini砖机。
{: .notice--warning}

### Requirements

* 一台Wii mini，带有HBC。
* 一个U盘
* Leseratte的 [d2xl cIOS Installer](/assets/files/d2xl_wii_mini_cIOS_installer_v1_beta2.zip)

### Instructions

#### Section I - Downloading

1. Power off your console.
1. Insert your USB drive into your computer.
1. Create a folder named `apps` on the root of your USB drive if it does not already exist.
1. 解压d2xl cIOS Installer到U盘里的`apps`文件夹。
1. Reinsert your USB drive into your console.
1. Power on your console.
1. 启动 Homebrew Channel。
1. d2x cIOS 安装程序

#### 第二章 - 安装

1. Select `Continue`.
1. Set the options to the following:
    ```
    Select cIOS <d2xl-v1-beta2>
    Select cIOS base <57>
    Select cIOS slot <249>
    ```
    + 在注释下记下版本号(`IOS57-64-`的结尾一般是 `v31776`或`v31775`)
1. 当设定完毕，按下A来安装。
    + 如果安装失败提醒 `TMD version mismatch` ，在`Select cIOS base` 选项按下十字键的左键或右键，直到版本号和你刚刚尝试安装的版本号不同。 不要改变数字57。
1. 当安装完成后，退出安装程序。

[Continue to making a NAND Backup using RealWnd](wnd-mini)
{: .notice--info}

#### 启用以太网

如果你希望通过以太网（光纤）在Wii mini上使用Wiimmfi，你需要运行[Ethernet Enabler Homebrew](/assets/files/Wii_Mini_Ethernet_Enable.zip)，由Fullmetal5制作。 要运行它，只需要解压它到U盘中的`apps`文件夹里，在Homebrew Channel里启动它。

Wii 和 Wii mini 主机仅与AX88772芯片的网络适配器工作。 请在购买之前检查该产品是否兼容。 据了解，这款绿联产品兼容：[亚马逊欧洲](https://www.amazon.de/dp/B00MYT481C)、[亚马逊美国](https://a.co/d/3OcSJDS)
{: .notice--info}

[Click here to go back to the site index.](site-navigation)
{: .notice--info}
