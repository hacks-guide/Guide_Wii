---
title: "cIOS"
---

{% include toc title="Table of Contents" %}

While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. 你现在可以使用一些自制软件，例如 [USB Loader GX](usbloadergx) 和 [WiiFlow](wiiflow)。 You can skip this process if you want, but generally it extends your Wii with little to no downsides.

如果您有 Wii mini，请安装[这个 cIOS](cios-mini)。 尝试在 Wii mini 上安装其它任何 cIOS 都不会工作。
{: .notice--warning}

### Requirements

* 一台 Wii
* 一张 SD 卡或 U 盘
* [d2x cIOS Installer](/assets/files/d2x-cios-installer.zip)

如果您使用的是 SD 卡，确保锁定开关位于解锁，否则您将无法在安装程序中选择正确的选项。
{: .notice--warning}

### Instructions

#### Section I - Downloading

如果您的 Wii 已连接到互联网，您可以跳过此部分。
{: .notice--warning}

如果您不使用 Windows，您可以下载 & 运行[这个脚本](/assets/files/d2x_offline_ios.sh)，它会为您下载 WAD 文件。
{: .notice--info}

1. Power off your console.
1. Insert your SD card or USB drive into your computer.
1. 下载、解压并运行 [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip)。
1. Copy all files from the NUS Downloader `.zip` to a folder on your computer.
1. 选择 `Game Load`。
1. 选择 "Database"，"IOS"，然后选择 "IOS38"，最后选择 "v4123"。
    + 确保勾选了 "Pack WAD" 选项。
    + *不要*勾选 "Patch IOS"。 那是 cIOS Installer 的工作。
1. 点击 `Start NUS Download!`。
1. 为 `IOS56 v5661`、`IOS57 v5918` 和 `IOS58 v6175` 重复步骤 2 & 3。
1. 一旦您下载了所有四个 IOS，将会在与 NUS Downloader 相同的文件夹中出现名为 `titles` 的文件夹。
1. <br/> 打开文件夹并浏览它们，直到找到您下载的四个 WAD 文件。
1. 将每个 WAD 文件放在 SD 卡或 U 盘的根目录。
    + 必须与包含 d2x cIOS Installer 的设备相同。

应该以这种方式将 WAD 文件放在 SD 卡上： ![](/images/cios/d2x_offline_ios.png)
{: .notice--info}

#### 第二部分 - 安装


1. Copy the `apps` folder in the d2x-cios-installer `.zip` to the root of your SD card or USB drive.
1. Reinsert your SD card or USB drive into your console.
1. Power on your console.
1. 启动 Homebrew Channel。
1. 将 SD 卡或 U 盘插入您的 Wii，并从 Homebrew Channel 启动 d2x cIOS Installer
1. Set everything to match the following:

    ```
    Select cIOS: d2x-v11-beta1
Select cIOS base: 38
Select cIOS slot: 248
Select cIOS version: 65535
    ```

    ![](/images/cios/d2x_v11_248.png)

    The warning "`(c)IOS detected in slot ### will be overwriitten`" can be safely ignored.
    {: .notice--info}

    If you are seeing "`Slot ### already used in batch settings`" or "`cIOS already added in batch with revision ##### and slot ###`", press `-` to disable batch mode. <br> (If you are trying to exit the installer, the button is B, not Home.)
    {: .notice--info}

1. Press `A`. This will bring you to the slot map:

    ![](/images/cios/d2x_summary.png)

1. Press `A` again.

    ![](/images/cios/d2x_installation.png)

1. After the installation has finished, you will be brought back to the slot map. Ensure that the slot that was just installed is highlighted green.

    ![](/images/cios/d2x_log.png)

    If the slot is highlighted red, try install the cIOS again. <br> If you are getting an error before/during the downloading stages, press B to exit and continue from [Section I](#section-i---downloading).
    {: .notice--info}

1. Press `A`. This will return you to the configuration screen.
1. Repeat the previous 5 steps with the following configurations:

    + 安装 cIOS 248

        ```
        Select cIOS: d2x-v11-beta1
Select cIOS base: 56
Select cIOS slot: 249
Select cIOS version: 65535
        ```

        ![](/images/cios/d2x_v11_249.png)

    + 安装 cIOS 250

        ```
        Select cIOS: d2x-v11-beta1
Select cIOS base: 57
Select cIOS slot: 250
Select cIOS version: 65535
        ```

        ![](/images/cios/d2x_v11_250.png)

    + 安装 cIOS 251

        ```
        Select cIOS: d2x-v11-beta1
Select cIOS base: 58
Select cIOS slot: 251
Select cIOS version: 65535
        ```

        ![](/images/cios/d2x_v11_251.png)

1. Once you have finished with all 4 cIOSes, press B to return to the Homebrew Channel.

[继续安装 Homebrew Browser](hbb)<br> Homebrew Browser 是获取 Wii 自制软件的好地方。 这是可选的安装步骤。
{: .notice--info}
