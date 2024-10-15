# 制作 Wii 游戏的快捷方式

Do you use a Wii backup loader and want to create game shortcuts to launch them on your Wii Menu? 那么可以试试WiiGSC (Wii Game Shortcut Creator)，也被称之为Crap。

::: warning

In the case of a brick, [installing Priiloader is a must](/priiloader). 此外，安装 BootMii（如果是早期 Wii 则安装到 boot2）。 安装变砖保护，同时正确遵守指南，应该能够防止变砖。 在您安装 PRIILOADER 和 BOOTMII 之前，请不要继续进行操作！

:::

::: warning

请不要制作《马里奥派对9》和《男孩与泡泡怪》游戏的快捷方式。 这会导致您的 Wii 变砖。

:::

::: info

The Wii Menu is limited to 48 channels, not including existing system channels.

:::

## 需要

- 一台 Wii
- An SD or USB drive
- [YAWM ModMii Edition](yawmme)
- 一台Windows电脑。
- [WiiGSC](https://wiidatabase.de/downloads/pc-tools/wiigsc-ehemals-crap/)

## 步骤

1. Install WiiGSC, then right click on it and choose **Run as administrator**. 如果您不这样做，打开 WiiGSC 时会报错。

   ![](/images/desktop-apps/wiigsc/wiigsc-home.png)

2. Select the path to the ISO or WBFS file on your SD or USB drive, and select the loader you use. 其它选项应该保持默认即可。

   ![](/images/desktop-apps/wiigsc/wiigsc-selection.png)

   ::: info

   If you are on vWii, use the [Wiiforwarder2vWii](https://gbatemp.net/download/wiiforwarder2vwii-wii-forwarder-to-vwii-wii-u-forwarder-converter-beta-version.37254/) tool to convert the WAD for use on the vWii.

   :::

3. Install the generated WAD with your [WAD manager](yawmme).

::: info

如果出现 "The system files are corrupted" 错误，不要惊慌，只要您安装了 Priiloader 就没有问题。 Turn off your Wii, then [boot into Priiloader](priiloader#section-iii---entering-priiloader) using one of the available methods for your console. Enter the Homebrew Channel and launch your WAD manager to uninstall the WAD. If priiloader was not installed, proceed to [BlueBomb](bluebomb).

:::

::: tip

[点击此处返回站点索引。](site-navigation)

:::
