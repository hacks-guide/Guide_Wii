---
title: "制作人员"
---

{% include toc title="Table of Contents" %}

## BlueBomb Micro

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
BlueBomb Micro is a port of Fullmetal5's BlueBomb exploit for the Rasperry Pi Pico W or ESP32, thus bypassing the need for a Linux system. It takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries. This port was made possible by [GaryOderNichts](https://github.com/GaryOderNichts)

This exploit also enables recovery from certain bricks, such as banner bricks and (some) theme bricks.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

这个工具会下载需要的文件，然后会要求你的Wii主机的一些信息。
{: .notice--warning}

如果您需要有关本教程的任何帮助，请加入[Wii mini 破解 Discord 服务器](https://discord.gg/6ryxnkS)（推荐）
{: .notice--info}

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. Exceptions however, exist in circumstances like brick recovery. Exceptions however, exist in circumstances like brick recovery.
{: .notice--info}

请确认主机离利用漏洞的电脑很近，理想情况下应小于 3 英尺（0.9144 米）。
{: .notice--info}

### Requirements
* A Rasperry Pi Pico W or an ESP32 with BR/EDR (Classic) support.
* 一个已被格式化为FAT32的U盘。
* [The HackMii Installer](https://bootmii.org/download/)

A normal Rasperry Pi Pico will not work. It MUST to be the wireless model. Additionally, an ESP32 with a BLE only controller will not work.
{: .notice--info}

### Instructions

1. 解压，然后把 `boot.elf` 放到 U 盘根目录。
    + （如果尝试修复砖机，还应该将要使用的自制应用程序复制到 /apps 目录下）
    + - （即使是 Wii mini，bootmini.elf 也**无法**使用，它的目的完全不同且无关。 在所有情况下使用 boot.elf）。
1. Reinsert your flash drive into your console.
    + Wii mini 的 USB 接口在背面。
    + 普通 Wii 使用底部的接口。 （竖置时使用右边的接口）。
1. Power on your console.
1. Go to `Wii Settings`.
1. Take note in the top right corner of the letter next to the system version.
    + This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

    ![](/images/wii/SystemMenuVersion.png)

1. Power off your console.

#### Rasperry Pi Pico W

1. Download [The latest Pre-Compiled Binaries](https://github.com/GaryOderNichts/bluebomb_micro/releases) from the releases page, and extract it to your PC.
1. Plug in your Pico W to your PC while holding down the `BOOTSEL` button. Your Pico should now show up as a drive on your PC.
1. Unzip the downloaded file and copy the file which matches your Wii or Wii mini to the drive. For example, if you have a European Wii running version 4.3, you would copy bluebomb_WII_SM4_3E.uf2, or if you have a European Wii Mini, you would copy bluebomb_MINI_SM_PAL.uf2, etc...
1. The drive should disconnect and your Pico is ready. You may unplug the device from your PC.

#### ESP32

1. Set up the latest [ESP IDF](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html).
1. Build the binary [from source](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#building-from-source).
1. [Flash the binary](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#flashing) to your ESP32.
1. Your device is now ready. You may unplug the device from your PC.

### Performing the Exploit

1. Plug your flashed device back into your PC.
1. Power on your console.
    + 打开您的主机，并**不要**连接任何 Wii 遥控器。
1. Press the Sync button repeatedly until the bluebomb screen shows up.
    + This could take numerous attempts.
1. If the exploit was successful, your device will have loaded the HackMii Installer.

如果使用 Wii，请继续安装 Homebrew Channel 和 BootMii。<br>
{: .notice--info}

如果使用 Wii mini，请继续安装 Homebrew Channel。
{: .notice--info}

## BlueBomb Classic

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
BlueBomb is an exploit that takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries. 尽管BlueBomb是唯一适用于Wii mini的漏洞，但它也可以在原版Wii上运行。 尽管BlueBomb是唯一适用于Wii mini的漏洞，但它也可以在原版Wii上运行。

This exploit also enables recovery from certain bricks, such as banner bricks and (some) theme bricks.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

这个工具会下载需要的文件，然后会要求你的Wii主机的一些信息。
{: .notice--warning}

如果您需要有关本教程的任何帮助，请加入[Wii mini 破解 Discord 服务器](https://discord.gg/6ryxnkS)（推荐）
{: .notice--info}

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. Exceptions however, exist in circumstances like brick recovery. Exceptions however, exist in circumstances like brick recovery.
{: .notice--info}

请确认主机离利用漏洞的电脑很近，理想情况下应小于 3 英尺（0.9144 米）。
{: .notice--info}

### 需要

* 一台为Linux系统的电脑
    * 虚拟机可能会工作，但由于在使蓝牙直通方面很复杂，不建议使用。 如果可以，请按照以下描述使用 LiveUSB。
    * 如果您有树莓派，您也可以使用它，因为它很可能已经安装了 Linux。
    * 适用于Linux的Windows子系统 或 Chromebook 的 Linux 模式将 *无法正常工作*，因为它们无法直接访问蓝牙适配器或 USB 接口。
    * 如果您还没有安装 Linux，[Ubuntu](https://ubuntu.com/download/desktop) 是最友好的选择，并且可以在运行 Windows 或 Mac 的电脑上运行。
        * 32 位设备将需要 [Ubuntu 16.04](http://releases.ubuntu.com/16.04/)。
        * 建议为 64 位设备使用LTS，因为它最稳定，但也可以使用最新版本。
    * 您可以将 [Linux Live 环境安装到 U 盘](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) 而不是电脑。
* 一个蓝牙适配器。
    * 自带的蓝牙适配器也可以工作。
    * 如果没有，请确保购买一个与 Linux 兼容的蓝牙适配器。
* 一个已被格式化为FAT32的U盘。
    * This cannot be the same flash drive used for your Linux Machine.
* [对于Wii，如果打算安装Homebrew Channel和BootMii，我们不建议您使用BlueBomb，因为有更便捷的方法可以使用。](https://bootmii.org/download/)

### 步骤

1. 解压，然后把 `boot.elf` 放到 U 盘根目录。
    + （如果尝试修复砖机，还应该将要使用的自制应用程序复制到 /apps 目录下）
    + - （即使是 Wii mini，bootmini.elf 也**无法**使用，它的目的完全不同且无关。 在所有情况下使用 boot.elf）。
1. Reinsert your flash drive into your console.
    + Wii mini 的 USB 接口在背面。
    + 普通 Wii 使用底部的接口。 （竖置时使用右边的接口）。
1. Power on your console.
1. 转到您 Wii 上的 `Wii 设置`，并记下右上角的版本。
1. Take note in the top right corner of the letter next to the system version.
    + This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

    ![](/images/wii/SystemMenuVersion.png)

1. 关闭 Wii。
1. Start your Linux distro, and ensure you are connected to the internet.
1. Open the Terminal
1. Run the following commands:

    ```bash
    wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
    chmod +x bluebomb-helper.sh
    ./bluebomb-helper.sh
    ```

1. The helper will then download the required files, and ask for information about your console.
    + 如果你选择了Wii mini，你将会被要求提供你的Wii mini所属的区域。 这决定于Wii Menu版本号的最后一个字母（`U`指**USA 美版**，`E`指**PAL格式，也就是欧版**机型。）
    + 如果您选择了 Wii，你将被要求提供您的 Wii 菜单版本（即您在第 4 步中确定的版本）
1. Power on your console.
    + 打开您的主机，并**不要**连接任何 Wii 遥控器。
1. 重复按下 Sync 按钮，直到终端显示 `got connection handle`。
    + This could take numerous attempts.
1. 它会下载并且加载HackMii Installer。
    + 如果您不打算继续使用 Linux 电脑，现在可以关闭它。

如果使用 Wii，请继续安装 Homebrew Channel 和 BootMii。<br>
{: .notice--info}

如果使用 Wii mini，请继续安装 Homebrew Channel。
{: .notice--info}
