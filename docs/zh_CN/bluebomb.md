---
outline: false
---

# 制作人员

::::: tabs

:::: tab BlueBomb Classic

## BlueBomb Classic

:::details Technical Details (optional)

BlueBomb是一种利用Wii和Wii Mini的蓝牙库中漏洞的破解程序。 尽管BlueBomb是唯一适用于Wii mini的漏洞，但它也可以在原版Wii上运行。

This exploit also enables recovery from certain bricks, such as banner bricks and (some) theme bricks.

:::

::: warning

It is **strongly** advised against using **any** video guide for hacking your Wii mini console, as there is an extremely large chance of **bricking** it.

:::

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

::: info

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. Exceptions however, exist in circumstances like brick recovery.

:::

::: info

请确认主机离利用漏洞的电脑很近，理想情况下应小于 3 英尺（0.9144 米）。

:::

### 需要

- 一台为Linux系统的电脑
  - 虚拟机可能会工作，但由于在使蓝牙直通方面很复杂，不建议使用。 如果可以，请按照以下描述使用 LiveUSB。
  - 如果您有树莓派，您也可以使用它，因为它很可能已经安装了 Linux。
  - Windows Subsystem for Linux or a Chromebook running Linux mode will _not work_ as they don't have direct access to the Bluetooth adapter or USB ports.
  - If you do not have Linux, [Ubuntu](https://ubuntu.com/download/desktop) is the most user-friendly option and can be ran on computers running Windows or Mac.
    - 32-bit devices will require [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
    - 建议为 64 位设备使用LTS，因为它最稳定，但也可以使用最新版本。
  - You can [flash a Linux Live environment to a USB flash drive](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) instead of installing it to your computer.
- 一个蓝牙适配器。
  - 自带的蓝牙适配器也可以工作。
  - 如果没有，请确保购买一个与 Linux 兼容的蓝牙适配器。
- 一个已被格式化为FAT32的U盘。
  - This cannot be the same flash drive used for your Linux Machine.
- [HackMii Installer v1.2](https://bootmii.org/download/)

### 步骤

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
   - （如果尝试修复砖机，还应该将要使用的自制应用程序复制到 /apps 目录下）
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. 在所有情况下使用 boot.elf）。

2. Reinsert your flash drive into your console.
   - Wii mini 的 USB 接口在背面。
   - 普通 Wii 使用底部的接口。 （竖置时使用右边的接口）。

3. Power on your console.

4. Go to `Wii Settings`.

5. Take note in the top right corner of the letter next to the system version.

   - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

   ![](/images/wii/SystemMenuVersion.png)

6. 关闭 Wii。

7. Start your Linux distro, and ensure you are connected to the internet.

8. Open the Terminal

9. Run the following commands:

   ```bash
   wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
   chmod +x bluebomb-helper.sh
   ./bluebomb-helper.sh
   ```

10. The helper will then download the required files, and ask for information about your console.
    - 如果你选择了Wii mini，你将会被要求提供你的Wii mini所属的区域。 This can be determined by the last letter of the Wii Menu version (`U` for **USA** and `E` for **PAL** models).
    - 如果您选择了 Wii，你将被要求提供您的 Wii 菜单版本（即您在第 4 步中确定的版本）

11. Power on your console.
    - **Do not** connect any Wii Remotes.

12. Press the Sync button repeatedly until the terminal shows `got connection handle`.
    - This could take numerous attempts.

13. 它会下载并且加载HackMii Installer。
    - 如果您不打算继续使用 Linux 电脑，现在可以关闭它。

::: info

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)

:::

::: info

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)

:::

::::

:::: tab BlueBomb Micro

## BlueBomb Micro

:::details Technical Details (optional)

This exploit also enables recovery from certain bricks, such as banner bricks and (some) theme bricks.

:::

::: warning

It is **strongly** advised against using **any** video guide for hacking your Wii mini console, as there is an extremely large chance of **bricking** it.

:::

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

::: info

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. Exceptions however, exist in circumstances like brick recovery.

:::

::: info

请确认主机离利用漏洞的电脑很近，理想情况下应小于 3 英尺（0.9144 米）。

:::

### 需要

- A Rasperry Pi Pico W or an ESP32 with BR/EDR (Classic) support.
- 一个已被格式化为FAT32的U盘。
- [The HackMii Installer](https://bootmii.org/download/)

::: info

A normal Rasperry Pi Pico will not work. It MUST to be the wireless model. Additionally, an ESP32 with a BLE only controller will not work.

:::

### 步骤

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
   - （如果尝试修复砖机，还应该将要使用的自制应用程序复制到 /apps 目录下）
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. 在所有情况下使用 boot.elf）。

2. Reinsert your flash drive into your console.
   - Wii mini 的 USB 接口在背面。
   - 普通 Wii 使用底部的接口。 （竖置时使用右边的接口）。

3. Power on your console.

4. Go to `Wii Settings`.

5. Take note in the top right corner of the letter next to the system version.

   - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

   ![](/images/wii/SystemMenuVersion.png)

6. 关闭 Wii。

#### Rasperry Pi Pico W

1. Download [The latest Pre-Compiled Binaries](https://github.com/GaryOderNichts/bluebomb_micro/releases) from the releases page, and extract it to your PC.
2. Plug in your Pico W to your PC while holding down the `BOOTSEL` button. Your Pico should now show up as a drive on your PC.
3. Unzip the downloaded file and copy the file which matches your Wii or Wii mini to the drive. For example, if you have a European Wii running version 4.3, you would copy bluebomb_WII_SM4_3E.uf2, or if you have a European Wii Mini, you would copy bluebomb_MINI_SM_PAL.uf2, etc...
4. The drive should disconnect and your Pico is ready. You may unplug the device from your PC.

#### ESP32

1. Set up the latest [ESP IDF](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html).
2. Build the binary [from source](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#building-from-source).
3. [Flash the binary](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#flashing) to your ESP32.
4. Your device is now ready. You may unplug the device from your PC.

### Performing the Exploit

1. Plug your flashed device back into your PC.
2. Power on your console.
   - **Do not** connect any Wii Remotes.
3. Press the Sync button repeatedly until the bluebomb screen shows up.
   - This could take numerous attempts.
4. 它会下载并且加载HackMii Installer。

::: tip

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)

:::

::: tip

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)

:::

::::

:::::
