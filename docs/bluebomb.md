---
outline: false
---

# BlueBomb

::::: tabs

:::: tab BlueBomb Classic

## BlueBomb Classic

::: details Technical Details (optional)

BlueBomb is an exploit that takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries. Although it is the only exploit that works for the Wii mini, BlueBomb can run on the original Wii as well.

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

### Requirements

* A Linux machine
    * A Virtual Machine may work, but it is not recommended due to its complexity in getting Bluetooth passthrough working. If possible, please use a LiveUSB as described below.
    * If you have a Raspberry Pi, you can use that instead as it most likely has Linux installed already.
    * Windows Subsystem for Linux or a Chromebook running Linux mode will *not work* as they don't have direct access to the Bluetooth adapter or USB ports.
    * If you do not have Linux, [Ubuntu](https://ubuntu.com/download/desktop) is the most user-friendly option and can be ran on computers running Windows or Mac.
        * 32-bit devices will require [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
        * For 64-bit devices it is recommended to use the LTS edition due to its stability, but the latest release works as well.
    * You can [flash a Linux Live environment to a USB flash drive](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) instead of installing it to your computer.
* A Bluetooth adapter.
    * An internal Bluetooth adapter will work.
    * If you do not have one, make sure to get one compatible with Linux.
* A USB flash drive formatted as FAT32.
    * This cannot be the same flash drive used for your Linux Machine.
* [HackMii Installer v1.2](https://bootmii.org/download/)

### Instructions

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive. 
    + (If attempting to fix a brick, you should also copy the homebrew app you wish to use to /apps/)
    + (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. Use boot.elf in all cases).

    ![](/images/exploits/bluebomb/usb-exploit.png)

1. Reinsert your flash drive into your console.
    + For a Wii mini, the USB port is on the back.
    + For a normal Wii, use the bottom port (or the right port if it's upright).
1. Power on your console.
1. Go to `Wii Settings`.
1. Take note in the top right corner of the letter next to the system version.
    + This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

    ![](/images/wii/SystemMenuVersion.png)

1. Power off your console.
1. Start your Linux distro, and ensure you are connected to the internet.
1. Open the Terminal, and run the following commands:

    ```bash
    wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
    chmod +x bluebomb-helper.sh
    ./bluebomb-helper.sh
    ```

    ![](/images/exploits/bluebomb/run-commands.png)

1. The helper will then download the required files, and ask for information about your console.

    ![](/images/exploits/bluebomb/console-type.png)

    + If you have selected a Wii mini you will be asked to provide your region. This can be determined by the last letter of the Wii Menu version (`U` for **USA** and `E` for **PAL** models).

    ![](/images/exploits/bluebomb/wii-mini-options.png)

    + If you have selected a Wii you will be asked to provide your Wii Menu version (what you determined in step 4).

    ![](/images/exploits/bluebomb/wii-options.png)

1. Power on your console.
    + **Do not** connect any Wii Remotes.
1. Type `yes` in the script to proceed if you have not already done so, and make sure that `Waiting to accept` is displaying.
1. Press the Sync button repeatedly until the terminal shows `got connection handle`.
    + This could take numerous attempts.

    ![](/images/exploits/bluebomb/got-connection-handle.png)

1. If the exploit was successful, you should see a similar screen to the below, after which the HackMii installer should load.
    + If you are not planning to use it later, you can now shut down your Linux distro.

    ![](/images/exploits/bluebomb/thanks-fullmetal5.png)

::: info

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)

:::

::: info

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)

:::

::::

:::: tab BlueBomb Micro

## BlueBomb Micro

::: details Technical Details (optional)
BlueBomb Micro is a port of Fullmetal5's BlueBomb exploit for the Raspberry Pi Pico W or ESP32, thus bypassing the need for a Linux system. It takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries. This port was made possible by [GaryOderNichts](https://github.com/GaryOderNichts)

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

Make sure that the microcontroller is close to the computer running the exploit, ideally it should be less than 3 feet.

:::

### Requirements
* A Raspberry Pi Pico W or an ESP32 with BR/EDR (Classic) support.
* A USB flash drive formatted as FAT32.
* [The HackMii Installer](https://bootmii.org/download/)

::: info

A normal Raspberry Pi Pico will not work. It MUST to be the wireless model. Additionally, an ESP32 with a BLE only controller will not work.

:::

### Instructions

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive. 
    + (If attempting to fix a brick, you should also copy the homebrew app you wish to use to /apps/)
    + (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. Use boot.elf in all cases).

    ![](/images/exploits/bluebomb/usb-exploit.png)

1. Reinsert your flash drive into your console.
    + For a Wii mini, the USB port is on the back.
    + For a normal Wii, use the bottom port (or the right port if it's upright).
1. Power on your console.
1. Go to `Wii Settings`.
1. Take note in the top right corner of the letter next to the system version.
    + This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

    ![](/images/wii/SystemMenuVersion.png)

1. Power off your console.

#### Raspberry Pi Pico W

1. Download [The latest Pre-Compiled Binaries](https://github.com/GaryOderNichts/bluebomb_micro/releases) from the releases page, and extract it to your PC.

    ![](/images/exploits/bluebomb/pico-download.png)

1. Plug in your Pico W to your PC while holding down the `BOOTSEL` button. Your Pico should now show up as a drive on your PC.

    ![](/images/exploits/bluebomb/pico-button.jpg)
    ![](/images/exploits/bluebomb/pico-drive.png)

1. Unzip the downloaded file and copy the file which matches your Wii or Wii mini to the drive. For example, if you have a European Wii running version 4.3, you would copy bluebomb_WII_SM4_3E.uf2, or if you have a European Wii Mini, you would copy bluebomb_MINI_SM_PAL.uf2, etc...

    ![](/images/exploits/bluebomb/pico-files.png)

1. The drive should disconnect and begin to flash a green LED. This means your Pico W is ready - you may unplug the device from your PC.

    ![](/images/exploits/bluebomb/pico-ready.jpg)

#### ESP32

1. Set up the latest [ESP IDF](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html).
1. Build the binary [from source](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#building-from-source).
1. [Flash the binary](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#flashing) to your ESP32.
1. Your device is now ready. You may unplug the device from your PC.

### Performing the Exploit

1. Plug your flashed device back into your PC.
1. Power on your console.
	+ **Do not** connect any Wii Remotes.
1. Press the Sync button repeatedly until the Pico W LED begins to rapidly flash, at which point it will start uploading the exploit.
    + This could take numerous attempts.
1. If the exploit was successful, you should see a similar screen to the below, after which the HackMii installer should load.

    ![](/images/exploits/bluebomb/thanks-fullmetal5.png)

::: tip

If you get an error `Exception 0700 occurred!` or similar, try the exploit again. If this continues to happen, join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) for support.

:::

::: tip

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)

:::

::: tip

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)

:::

::::

:::::
