---
outline: false
---

# 使用 BlueBomb 漏洞

::::: tabs

:::: tab BlueBomb Classic

## BlueBomb Classic

:::details Technical Details (optional)

BlueBomb 是一種利用 Wii 和 Wii mini 藍牙函式庫中缺陷的漏洞。 雖然 Wii Mini 只能夠使用 BlueBomb 漏洞，本漏洞也能夠適用於一般 Wii 型號。

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

Make sure that the console is close to the computer running the exploit, ideally it should be less than 3 feet.

:::

### 操作說明

- 一台搭載 Linux 的電腦
  - 您也可以試試看使用虛擬機，但由於藍芽直通相關問題可能較於複雜，較不推薦。 如果可以，請使用下述的 LiveUSB 方式。
  - 如果您有樹梅派 (Raspberry Pi) 的話，您也可以直接用它，因為大部分情況下它早已搭載了 Linux。
  - Windows Subsystem for Linux or a Chromebook running Linux mode will _not work_ as they don't have direct access to the Bluetooth adapter or USB ports.
  - If you do not have Linux, [Ubuntu](https://ubuntu.com/download/desktop) is the most user-friendly option and can be ran on computers running Windows or Mac.
    - 32-bit devices will require [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
    - 64 位元的裝置因穩定性的關係，建議使用 LTS 版本，但若您想要使用最新版本也是可以的。
  - You can [flash a Linux Live environment to a USB flash drive](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) instead of installing it to your computer.
- 藍牙轉接器
  - 也可以使用內建的藍芽轉接器。
  - If you do not have one, make sure to get one compatible with Linux.
- 一個格式化為 FAT32 的隨身碟。
  - 這不能與您的 Linux 機器使用的隨身碟相同。
- [HackMii Installer v1.2](https://bootmii.org/download/)

### Instructions

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
   - （如果您正試圖修復變磚，您還應該將您希望使用的自製軟體複製到 /apps/ 中）
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. 請一律使用 boot.elf）。

2. Reinsert your flash drive into your console.
   - Wii mini 的 USB 端口在主機背面。
   - 一般的 Wii 請使用下方的 USB 端口。 (豎置時使用右邊的接口)。

3. Power on your console.

4. Go to `Wii Settings`.

5. Take note in the top right corner of the letter next to the system version.

   - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

   ![](/images/wii/SystemMenuVersion.png)

6. Power off your console.

7. Start your Linux distro, and ensure you are connected to the internet.

8. Open the Terminal

9. Run the following commands:

   ```bash
   wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
   chmod +x bluebomb-helper.sh
   ./bluebomb-helper.sh
   ```

10. The helper will then download the required files, and ask for information about your console.
    - 如果您選擇了 Wii mini，您將被要求提供您主機所屬的區碼。 This can be determined by the last letter of the Wii Menu version (`U` for **USA** and `E` for **PAL** models).
    - 如果您選擇了 Wii，您將被要求提供您的 Wii 選單版本（您在第 4 步中確定的版本）

11. Power on your console.
    - **Do not** connect any Wii Remotes.

12. Press the Sync button repeatedly until the terminal shows `got connection handle`.
    - This could take numerous attempts.

13. 您的主機現在應該啟動到 HackMii 安裝程序中。
    - 如果您不打算繼續使用，您現在可以將您的 Linux 電腦關機。

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

Make sure that the console is close to the computer running the exploit, ideally it should be less than 3 feet.

:::

### 操作說明

- A Rasperry Pi Pico W or an ESP32 with BR/EDR (Classic) support.
- 一個格式化為 FAT32 的隨身碟。
- [The HackMii Installer](https://bootmii.org/download/)

::: info

A normal Rasperry Pi Pico will not work. It MUST to be the wireless model. Additionally, an ESP32 with a BLE only controller will not work.

:::

### Instructions

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
   - （如果您正試圖修復變磚，您還應該將您希望使用的自製軟體複製到 /apps/ 中）
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. 請一律使用 boot.elf）。

2. Reinsert your flash drive into your console.
   - Wii mini 的 USB 端口在主機背面。
   - 一般的 Wii 請使用下方的 USB 端口。 (豎置時使用右邊的接口)。

3. Power on your console.

4. Go to `Wii Settings`.

5. Take note in the top right corner of the letter next to the system version.

   - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

   ![](/images/wii/SystemMenuVersion.png)

6. Power off your console.

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
4. 您的主機現在應該啟動到 HackMii 安裝程序中。

::: tip

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)

:::

::: tip

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)

:::

::::

:::::
