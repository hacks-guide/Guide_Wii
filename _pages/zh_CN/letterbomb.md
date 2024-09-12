---
title: "捐赠"
---

{% include toc title="Table of Contents" %}

LetterBomb是Wii的一种漏洞，它是使用Wii留言板触发的。

For instructions on how to format your SD card correctly, please see [this guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). It is highly recommended to check it due to problems with formatting as FAT32. It is highly recommended to check it due to problems with formatting as FAT32.
{: .notice--info}

Do NOT use any of the MAC address examples shown in this guide, as they will simply cause an error on the HackMii website. Use your own! Use your own!
{: .notice--warning}

### Requirements
* An SD card formatted as FAT32 that is 32GB or less
* 一台Wii，系统版本为4.3。
* A Windows/MacOS/Linux computer with an Internet connection

### Instructions

1. Power on your console.
1. 在你的 Wii 上，前往`Wii 设置` -> `Internet` -> `主机信息`，并记下您的 MAC 地址。
1. Take note in the top right corner of the letter next to the system version.
    + This letter corresponds to your system menu region, which you will need to know for the corresponding steps.
    + Also, ensure that you are on System Menu version 4.3.

    ![](/images/wii/SystemMenuVersion.png)

1. Navigate to `Internet` > `Console Information`.
1. Take note of your FULL MAC address.

    ![](/images/wii/MacAddress.png)

1. On your computer, open the browser and go to [the HackMii website](https://please.hackmii.com/).
1. 请访问 [please.hackmii.com](https://please.hackmii.com/)，输入您的 Wii 的 MAC 地址和区域，确保已勾选 `Bundle the HackMii Installer for me!` ，然后剪断其中一根电线。
1. Ensure `Bundle the HackMii Installer for me!` is checked.
1. Cut either wire.

    ![](/images/exploits/letterbomb/LetterBomb-PC.png)

1. Insert your SD card into your computer.
1. Copy the `private` folder and the `boot.elf` file from the LetterBomb `.zip` to the root of your SD card.
1. 取出 SD 卡并将其插入 Wii 中。
    + 必须将 SD 卡插入 Wii 前面的 SD 卡槽中。 使用插入到 Wii USB 接口的 USB 读卡器是无效的。
1. 取出 SD 卡并将其插入 Wii 中。
1. 在 Wii 上，回到 Wii 菜单，然后打开 Wii 留言板。
1. Open the red letter with a bomb.
    + 请确保 Wii 的日期正确，否则您可能找不到信。
    + In some cases, you may need to check the messages for tommorow or yesterday for the letter to show up.
    + 如果您没有看到红色信，请检查 `数据管理` 中的 SD 卡部分是否有任何错误。 如果有任何问题，可能是由于 SD 卡格式或 Wii 的 SD 卡槽出现问题。
    + 如果 Wii 在点击信后卡住，可能是在下载时选择了错误的区域。 重新进行第 2 步，并选择正确的区域。
    + If all is correct and there is freezing, keep on trying until it works.
1. 它会下载并且加载HackMii Installer。

![](/images/exploits/letterbomb/LetterBomb-Wii.png)

[继续到 安装 Homebrew Channel 和 BootMii](hbc)
{: .notice--info}
