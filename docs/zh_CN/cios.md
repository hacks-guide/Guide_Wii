---
outline: false
---

# cIOS

::::: tabs

:::: tab cIOS for Wii/Family Edition

:::details 技术细节 (可选)

cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. 你现在可以使用一些自制软件，例如 <a href="usbloadergx">USB Loader GX</a> 和 <a href="wiiflow">WiiFlow</a>。 You can skip this process if you want, but generally it extends your Wii with little to no downsides.

:::

::: warning

Do not attempt to install a vWii/Wii mini IOS or System Menu on the Wii. Doing so will likely [brick](bricks#ios-brick) your console.

:::

## 需要

- A Wii with the Homebrew Channel installed
- 一张SD卡或移动硬盘/U 盘
- The [d2x cIOS Installer](/assets/files/d2x-cios-installer.zip)

::: warning

如果您使用的是 SD 卡，确保锁定开关位于解锁，否则您将无法在安装程序中选择正确的选项。

:::

## 步骤

### 第一部分 - 下载

::: info

If you are on macOS or Linux, you may download & run [this script](/assets/files/d2x_offline_ios.zip), and it will download the WAD files for you.

:::

::: info

If you are able to connect your Wii to the internet, you may skip to [Section II](cios#section-ii---installing)

:::

1. 关闭 Wii。
2. Insert your SD card or USB drive into your computer.
3. On your computer, download [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip).
4. Copy all files from the NUS Downloader `.zip` to a folder on your computer.
5. Run `NUS Downloader.exe`.
6. Navigate to `Database` > `IOS` > `IOS38`, then select `v4123`.
    - 确保勾选了 "Pack WAD" 选项。
    - _Don't_ check "Patch IOS". 那是 cIOS Installer 的工作。
7. Click `Start NUS Download!`.
8. Repeat the above steps for `IOS56 v5661`, `IOS57 v5918` and `IOS58 v6175`.
9. When the process is complete, there will be a folder named `titles` in the same folder as the NUS Downloader.
10. Open the `titles` folder and navigate through them until you locate the four WAD files you downloaded.
11. 将每个 WAD 文件放在 SD 卡或 U 盘的根目录。
    - 必须与包含 d2x cIOS Installer 的设备相同。

::: info

The WAD files should be on your SD card like this:

![](/images/cios/d2x_offline_ios.png)

:::

### 第二部分 - 安装

1. Copy the `apps` folder in the d2x-cios-installer `.zip` to the root of your SD card or USB drive.

2. 将 SD 卡插入 Wii，然后从 Homebrew Channel 启动 CleanRip。

3. Power on your console.

4. 启动 Wii 上的 Homebrew Channel。

5. 将 SD 卡或 U 盘插入您的 Wii，并从 Homebrew Channel 启动 d2x cIOS Installer

6. Set everything to match the following:

    ```
    Select cIOS <d2x-v11-beta2>
    Select cIOS base <38>
    Select cIOS slot <248>
    Select cIOS revision <65535>
    ```

    ![](/images/cios/d2x_v11_248.png)

    ::: info

    If you do not see `d2x-v11-beta2`, exit the installer with B, and make sure your SD card is unlocked.

    :::

    ::: info

    The warning "`(c)IOS detected in slot ### will be overwritten`" can be safely ignored.

    :::

    ::: info

    If you are seeing "`Slot ### already used in batch settings`" or "`cIOS already added in batch with revision ##### and slot ###`", press `-` to disable batch mode.

    (If you are trying to exit the installer, the button is B, not Home.)

    :::

7. Press `A`. Press <code>A</code>. This will bring you to the slot map:

    ![](/images/cios/d2x_summary.png)

8. Press `A` again.

    ![](/images/cios/d2x_installation.png)

9. After the installation has finished, you will be brought back to the slot map. After the installation has finished, you will be brought back to the slot map. Ensure that the slot that was just installed is highlighted green.

    ![](/images/cios/d2x_log.png)

    ::: info

    If the slot is highlighted red, try to install the cIOS again.

    If you are getting an error before/during the downloading stages (eg. `tcp_connect timeout`, `net_gethostbyname failed: ...`), press B to exit and continue from [Section I](#section-i---downloading).

    :::

10. Press `A`. Press <code>A</code>. This will return you to the configuration screen.

11. Repeat the previous 5 steps with the following configurations:

    - 安装 cIOS 248

        ```
        Select cIOS <d2x-v11-beta2>
        Select cIOS base <56>
        Select cIOS slot <249>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_249.png)

    - 安装 cIOS 250

        ```
        Select cIOS <d2x-v11-beta2>
        Select cIOS base <57>
        Select cIOS slot <250>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_250.png)

    - 安装 cIOS 251

        ```
        Select cIOS <d2x-v11-beta2>
        Select cIOS base <58>
        Select cIOS slot <251>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_251.png)

12. Once you have finished with all 4 cIOSes, press B to return to the Homebrew Channel.

::: info

If you downloaded the 4 WAD files in Section I, you may now delete them from your SD card/USB drive.

:::

::: tip

[Continue to Open Shop Channel installation](osc)

Now that your Wii has adequate brick protection, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii.

:::

::::

:::: tab cIOS for vWii (Wii U)

:::details 技术细节 (可选)

cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. 你现在可以使用一些自制软件，例如 <a href="usbloadergx">USB Loader GX</a> 和 <a href="wiiflow">WiiFlow</a>。 You can skip this process if you want, but generally it extends your Wii with little to no downsides.

:::

::: warning

Do not attempt to install a Wii/Wii mini IOS or System Menu on the vWii. Doing so will likely [brick](bricks#ios-brick) your console.

:::

## 需要

- A Wii U with the Homebrew Channel installed on the vWii
- 一张SD卡或移动硬盘/U 盘
- The [d2x cIOS Installer for vWii](/assets/files/d2x_cIOS_Installer-vWii.zip)

::: warning

如果您使用的是 SD 卡，确保锁定开关位于解锁，否则您将无法在安装程序中选择正确的选项。

:::

## 步骤

### Section I - Installing

1. Copy the `apps` folder in the d2x-cios-installer-vwii `.zip` to the root of your SD card or USB drive.

2. 将 SD 卡插入 Wii，然后从 Homebrew Channel 启动 CleanRip。

3. Power on your console.

4. 启动 Wii 上的 Homebrew Channel。

5. 将 SD 卡或 U 盘插入您的 Wii，并从 Homebrew Channel 启动 d2x cIOS Installer

6. Set everything to match the following:

    ```
    Select cIOS <d2x-v11-beta2-vWii>
    Select cIOS base <38>
    Select cIOS slot <248>
    ```

    ![](/images/cios/d2x_v11_248_vwii.png)

    ::: info

    If you do not see `d2x-v11-beta2-vWii`, exit the installer with B, and make sure your SD card is unlocked.

    :::

7. Press `A` to install.

    ![](/images/cios/d2x_installation.png)

8. Repeat the previous 2 steps with the following configurations:

    - 安装 cIOS 248

        ```
        Select cIOS <d2x-v11-beta2-vWii>
        Select cIOS base <56>
        Select cIOS slot <249>
        ```

    ![](/images/cios/d2x_v11_249_vwii.png)

    - 安装 cIOS 250

        ```
        Select cIOS <d2x-v11-beta2-vWii>
        Select cIOS base <57>
        Select cIOS slot <250>
        ```

        ![](/images/cios/d2x_v11_250_vwii.png)

    - 安装 cIOS 251

        ```
        Select cIOS <d2x-v11-beta2-vWii>
        Select cIOS base <58>
        Select cIOS slot <251>
        ```

        ![](/images/cios/d2x_v11_251_vwii.png)

9. Once you have finished with all 4 cIOSes, press B to return to the Homebrew Channel.

::: tip

[Continue to finalizing setup](vwii-finalizing-setup)

:::

::::

:::: tab cIOS for Wii mini

::: info

如果您需要有关本教程的任何帮助，请加入 [Wii mini 破解 Discord 服务器](https://discord.gg/6ryxnkS) (推荐)

:::

:::details 技术细节 (可选)

cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. 你现在可以使用一些自制软件，例如 <a href="usbloadergx">USB Loader GX</a> 和 <a href="wiiflow">WiiFlow</a>。 You can skip this process if you want, but generally it extends your Wii with little to no downsides.

这个d2x cIOS installer原先是为WiiU的vWii系统而开发的，由DaveBaol制作，自定义cIOS是由Laseratte为Wii mini设计的。 The original download page can be found [here](https://wii.leseratte10.de/d2xl-cIOS/). Leseratte's GitHub page can be found [here](https://github.com/Leseratte10/d2xl-cios). 请注意，这个cIOS依然是实验性的，即使没有关于功能的错误反馈。

:::

::: warning

Do not attempt to install a Wii/vWii IOS or System Menu on the Wii mini. Doing so will likely [brick](bricks#ios-brick) your console.

:::

## 需要

- 一台Wii mini，带有HBC。
- 一个U盘
- The [d2xl cIOS Installer](/assets/files/d2xl-cios-installer-mini.zip)

## 步骤

### 第一部分 - 下载

1. 关闭 Wii。
2. 将移动硬盘/U 盘插入电脑。
3. Copy the `apps` folder from the d2xl-cios-installer-mini `.zip` to the root of your USB drive.
4. Reinsert your USB drive into your console.
5. Power on your console.
6. 启动 Wii 上的 Homebrew Channel。
7. d2x cIOS 安装程序

### 第二部分 - 安装

1. Select `Continue`.
2. Set the options to the following:

    ```
    Select cIOS <d2xl-v1-beta2>
    Select cIOS base <57>
    Select cIOS slot <249>
    ```

    ![](/images/cios/d2x_v1_249_mini_NTSC.png)
    ![](/images/cios/d2x_v1_249_mini_PAL.png)

    - Under notes, you will see an IOS version number ending in either `v31775` or `v31776`. `IOS57-64-v31775` is for NTSC (North American) consoles, while `IOS57-64-v31776` is for PAL (European) consoles. Make sure you are selecting the correct version number for your console.
3. 当设定完毕，按下A来安装。
    - If the install fails with a `TMD version mismatch` error, press left or right on the +Control Pad over the `Select cIOS base` option until the version number is different than the one you tried before. 不要改变数字57。
4. 当安装完成后，退出安装程序。

::: tip

[Continue to finalizing setup](mini-finalizing-setup)

:::

::: tip

[点击此处返回站点索引。](site-navigation)

:::

::::

:::::
