---
outline: false
---

# BlueBomb

::::: tabs

:::: tab BlueBomb Classic

## BlueBomb Classic

:::details Detalhes técnicos (opcional)

BlueBomb is an exploit that takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries. Although it is the only exploit that works for the Wii mini, BlueBomb can run on the original Wii as well.

This exploit also enables recovery from certain bricks, such as banner bricks and (some) theme bricks.

:::

::: warning

É **fortemente** aconselhado a não usar **qualquer** guia de vídeo para hackear seu console Wii mini, pois há uma chance extremamente grande de **brickar o console**.

:::

::: info

Se você precisar de ajuda com qualquer coisa sobre este tutorial, junte-se [ao servidor de Discord do Wii mini Hacking ](https://discord.gg/6ryxnkS) (recomendado)

:::

::: info

Se você está usando o Wii original, você provavelmente deveria encontrar outro exploit para usar pois existem maneiras mais fáceis de chegar ao Instalador do HackMii. Exceptions however, exist in circumstances like brick recovery.

:::

::: info

Make sure that the console is close to the computer running the exploit, ideally it should be less than 3 feet.

:::

### Requirements

- A Linux machine
  - A Virtual Machine may work, but it is not recommended due to its complexity in getting Bluetooth passthrough working. If possible, please use a LiveUSB as described below.
  - If you have a Raspberry Pi, you can use that instead as it most likely has Linux installed already.
    - ARM64 Raspberry Pi's need multiarch enabled with the armhf (32bit) architecture added. The following should work on any debian based OS:
    ```bash
    sudo sudo dpkg --add-architecture armhf
    sudo apt update && sudo apt install -y screen:armhf
    file /usr/bin/screen # should say ELF 32-bit
    screen
    ```
  - Windows Subsystem for Linux or a Chromebook running Linux mode will _not work_ as they don't have direct access to the Bluetooth adapter or USB ports.
  - If you do not have Linux, [Ubuntu](https://ubuntu.com/download/desktop) is the most user-friendly option and can be ran on computers running Windows or intel based Macs.
    - Apple Silicon Macs will not work due to them missing the ARM32 instructions in the hardware.
    - 32-bit devices will require [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
    - For 64-bit devices it is recommended to use the LTS edition due to its stability, but the latest release works as well.
  - You can [flash a Linux Live environment to a USB flash drive](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) instead of installing it to your computer.
- A Bluetooth adapter.
  - An internal Bluetooth adapter will work.
  - If you do not have one, make sure to get one compatible with Linux.
- A USB flash drive [formatted to FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
  - This cannot be the same flash drive used for your Linux Machine.
- [HackMii Installer v1.2](https://bootmii.org/download/)

### Instructions

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.

   - (If attempting to fix a brick, you should also copy the homebrew app you wish to use to /apps/)
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. Use boot.elf in all cases).

   ![](/images/exploits/bluebomb/usb-exploit.png)

2. Reinsert your flash drive into your console.
   - For a Wii mini, the USB port is on the back.
   - For a normal Wii, use the bottom port (or the right port if it's upright).

3. Power on your console.

4. Go to `Wii Settings`.

5. Take note in the top right corner of the letter next to the system version.

   - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

   ![](/images/wii/SystemMenuVersion.png)

6. Power off your console.

7. Start your Linux distro, and ensure you are connected to the internet.

8. Open the Terminal, and run the following commands:

   ```bash
   wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
   chmod +x bluebomb-helper.sh
   ./bluebomb-helper.sh
   ```

   ![](/images/exploits/bluebomb/run-commands.png)

9. The helper will then download the required files, and ask for information about your console.

   ![](/images/exploits/bluebomb/console-type.png)

   - If you have selected a Wii mini you will be asked to provide your region. This can be determined by the last letter of the Wii Menu version (`U` for **USA** and `E` for **PAL** models).

   ![](/images/exploits/bluebomb/wii-mini-options.png)

   - If you have selected a Wii you will be asked to provide your Wii Menu version (what you determined in step 4).

   ![](/images/exploits/bluebomb/wii-options.png)

10. Power on your console.
    - **Do not** connect any Wii Remotes.

11. Type `yes` in the script to proceed if you have not already done so, and make sure that `Waiting to accept` is displaying.

12. Press the Sync button repeatedly until the terminal shows `got connection handle`.

    - This could take numerous attempts.

    ![](/images/exploits/bluebomb/got-connection-handle.png)

13. If the exploit was successful, you should see a similar screen to the below, after which the HackMii installer should load.

    - If you are not planning to use it later, you can now shut down your Linux distro.

    ![](/images/exploits/bluebomb/thanks-fullmetal5.png)

::: tip

[Continue to the Hackmii Installer](hbc)

:::

::::

:::: tab BlueBomb Micro

## BlueBomb Micro

:::details Detalhes técnicos (opcional)

This exploit also enables recovery from certain bricks, such as banner bricks and (some) theme bricks.

:::

::: warning

É **fortemente** aconselhado a não usar **qualquer** guia de vídeo para hackear seu console Wii mini, pois há uma chance extremamente grande de **brickar o console**.

:::

::: info

Se você precisar de ajuda com qualquer coisa sobre este tutorial, junte-se [ao servidor de Discord do Wii mini Hacking](https://discord.gg/6ryxnkS) (recomendado)

:::

::: info

Se você está usando o Wii original, você provavelmente deveria encontrar [outro exploit para usar](get-started) pois existem maneiras mais fáceis de chegar ao Instalador do HackMii. Exceptions however, exist in circumstances like brick recovery.

:::

::: info

Make sure that the microcontroller is close to the computer running the exploit, ideally it should be less than 3 feet.

:::

### Requirements

- A Raspberry Pi Pico W 1/2 or an ESP32 with BR/EDR (Classic) support.
- A USB flash drive [formatted to FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
- [The HackMii Installer](https://bootmii.org/download/)

::: info

A normal Raspberry Pi Pico will not work. It MUST be the wireless model. Additionally, an ESP32 with a BLE only controller will not work.

:::

### Instructions

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.

   - (If attempting to fix a brick, you should also copy the homebrew app you wish to use to /apps/)
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. Use boot.elf in all cases).

   ![](/images/exploits/bluebomb/usb-exploit.png)

2. Reinsert your flash drive into your console.
   - For a Wii mini, the USB port is on the back.
   - For a normal Wii, use the bottom port (or the right port if it's upright).

3. Power on your console.

4. Go to `Wii Settings`.

5. Take note in the top right corner of the letter next to the system version.

   - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

   ![](/images/wii/SystemMenuVersion.png)

6. Power off your console.

#### Raspberry Pi Pico W

1. Download the latest [Pre-Compiled Binaries](https://github.com/GaryOderNichts/bluebomb_micro/releases) from the releases page, and extract it to your PC.

   - Select the appropriate binaries for your device. `bluebomb_micro_pico2_w_version` is for the Pico 2 W, while `bluebomb_micro_pico_w_version` is for the Pico 1 W.

   ![](/images/exploits/bluebomb/pico-download.png)

2. Plug in your Pico W to your PC while holding down the `BOOTSEL` button. Your Pico should now show up as a drive on your PC.

   ![](/images/exploits/bluebomb/pico-button.jpg)
   ![](/images/exploits/bluebomb/pico-drive.png)

3. Unzip the downloaded archive and copy the file which matches your Wii or Wii mini to the drive.

   - If you have a European Wii running version 4.3, you would copy bluebomb_WII_SM4_3E.uf2, or if you have a European Wii Mini, you would copy bluebomb_MINI_SM_PAL.uf2, etc...

   ![](/images/exploits/bluebomb/pico-files.png)

4. The drive should disconnect and begin to flash a green LED. This means your Pico W is ready - you may unplug the device from your PC.

   ![](/images/exploits/bluebomb/pico-ready.jpg)

#### ESP32

1. Set up the latest [ESP IDF](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html).
2. Build the binary [from source](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#building-from-source).
3. [Flash the binary](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#flashing) to your ESP32.
4. Your device is now ready. You may unplug the device from your PC.

### Performing the Exploit

1. Plug your flashed device back into your PC.
2. Power on your console.
   - **Do not** connect any Wii Remotes.
3. Press the Sync button repeatedly until the Pico W LED begins to rapidly flash, at which point it will start uploading the exploit.
   - This could take numerous attempts.
4. If the exploit was successful, you should see a similar screen to the below, after which the HackMii installer should load.

   ![](/images/exploits/bluebomb/thanks-fullmetal5.png)

::: tip

If you get an error `Exception 0700 occurred!` or similar, try the exploit again. If this continues to happen, join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) for support.

:::

::: tip

[Continue to the Hackmii Installer](hbc)

:::

::::

:::::
