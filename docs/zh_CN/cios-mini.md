# 供Wii mini安装的d2xl cIOS （实验性功能）

::: info

如果您需要有关本教程的任何帮助，请加入 [Wii mini 破解 Discord 服务器](https://discord.gg/6ryxnkS) (推荐)

:::

:::details 技术细节 (可选)

这个d2x cIOS installer原先是为WiiU的vWii系统而开发的，由DaveBaol制作，自定义cIOS是由Laseratte为Wii mini设计的。 The original download page can be found [here](https://wii.leseratte10.de/d2xl-cIOS/). Leseratte's GitHub page can be found [here](https://github.com/Leseratte10/d2xl-cios). 请注意，这个cIOS依然是实验性的，即使没有关于功能的错误反馈。

:::

::: warning

This guide is only intended for Wii Mini users.

If you have a Wii, follow [this guide](cios) instead.

If you have a Wii U (vWii), follow [this guide](cios-vwii) instead.

:::

::: warning

Do not attempt to install a Wii/vWii IOS or System Menu on the Wii mini. Doing so will likely [brick](bricks#ios-brick) your console.

:::

## 需要

- 一台Wii mini，带有HBC。
- 一个U盘
- Leseratte's [d2xl cIOS Installer](/assets/files/d2xl_wii_mini_cIOS_installer_v1_beta2.zip)

## 步骤

### 第一部分 - 下载

1. 关闭 Wii。
2. 将移动硬盘/U 盘插入电脑。
3. Create a folder named `apps` on the root of your USB drive if it does not already exist.
4. Copy the `d2x-cios-installer` folder from the d2xl cIOS Installer `.zip` to the `apps` folder on your USB drive.
5. Reinsert your USB drive into your console.
6. Power on your console.
7. 启动 Wii 上的 Homebrew Channel。
8. d2x cIOS 安装程序

### 第二部分 - 安装

1. Select `Continue`.
2. Set the options to the following:
   ```
   Select cIOS <d2xl-v1-beta2>
   Select cIOS base <57>
   Select cIOS slot <249>
   ```
   - Take a note of the version number under notes (`IOS57-64-` ending in either `v31776` or `v31775`)
3. 当设定完毕，按下A来安装。
   - If the install fails with a `TMD version mismatch` error, press left or right on the +Control Pad over the `Select cIOS base` option until the version number is different than the one you tried before. 不要改变数字57。
4. 当安装完成后，退出安装程序。

::: tip

[Continue to making a NAND Backup using RealWnd](wnd-mini)

:::

### 启用以太网

If you wish to use Wiimmfi with Ethernet on a Wii mini, you have to run the [Ethernet Enabler Homebrew](/assets/files/Wii_Mini_Ethernet_Enable.zip) app made by Fullmetal5. To run it, just unzip it in the `apps` folder of your USB drive and run it from the Homebrew Channel.

::: info

Wii 和 Wii mini 主机仅与AX88772芯片的网络适配器工作。 请在购买之前检查该产品是否兼容。 This one from UGREEN is known to be compatible: [Amazon Europe](https://www.amazon.de/dp/B00MYT481C), [Amazon US](https://a.co/d/3OcSJDS)

:::

::: tip

[点击此处返回站点索引。](site-navigation)

:::
