# Credits

::::: tabs

:::: tab BlueBomb Classic

## BlueBomb Classic

:::details Technical Details (optional)

BlueBomb ist ein Exploit, welcher eine Lücke in der Bluetooth-Programmbibliothek der Wii und Wii mini ausnutzt. {% capture technical_info %}<summary line-breaks-before="1" mark="crwd-mark"><em>Technical Details (optional)</em></summary>
BlueBomb is an exploit that takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries.

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

### Anforderungen

- Ein Linux-System
  - Eine virtuelle Maschine kann funktionieren, wird aber aufgrund ihrer Komplexität beim Durchlaufen von Bluetooth nicht empfohlen. Wenn möglich, verwende bitte einen LiveUSB wie unten beschrieben.
  - Wenn du einen Raspberry Pi hast, kannst du den auch verwenden, da wahrscheinlich Linux dort schon installiert ist.
  - Windows Subsystem for Linux or a Chromebook running Linux mode will _not work_ as they don't have direct access to the Bluetooth adapter or USB ports.
  - If you do not have Linux, [Ubuntu](https://ubuntu.com/download/desktop) is the most user-friendly option and can be ran on computers running Windows or Mac.
    - 32-bit devices will require [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
    - For 64-bit devices it is recommended to use the LTS edition due to its stability, but the latest release works as well.
  - You can [flash a Linux Live environment to a USB flash drive](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) instead of installing it to your computer.
- Ein Bluetooth-Adapter.
  - Ein interner Bluetooth-Adapter wird funktionieren.
  - If you do not have one, make sure to get one compatible with Linux.
- Ein USB-Stick, der mit FAT32 formatiert ist.
  - This cannot be the same flash drive used for your Linux Machine.
- [HackMii Installer v1.2](https://bootmii.org/download/)

### Anleitung

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
   - (If attempting to fix a brick, you should also copy the homebrew app you wish to use to /apps/)
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. Use boot.elf in all cases).

2. Reinsert your flash drive into your console.
   - For a Wii mini, the USB port is on the back.
   - For a normal Wii, use the bottom port. (or the right port if it's upright).

3. Schalte deine Konsole ein.

4. Go to `Wii Settings`.

5. Take note in the top right corner of the letter next to the system version.

   - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

   ![](/images/wii/SystemMenuVersion.png)

6. Power off your Wii.

7. Start your Linux distro, and ensure you are connected to the internet.

8. Open the Terminal

9. Run the following commands:

   ```bash
   wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
   chmod +x bluebomb-helper.sh
   ./bluebomb-helper.sh
   ```

10. The helper will then download the required files, and ask for information about your console.
    - If you have selected a Wii mini you will be asked to provide your region. This can be determined by the last letter of the Wii Menu version (`U` for **USA** and `E` for **PAL** models).
    - If you have selected a Wii you will be asked to provide your Wii Menu Version (What you determined in step 4)

11. Schalte deine Konsole ein.
    - **Do not** connect any Wii Remotes.

12. Press the Sync button repeatedly until the terminal shows `got connection handle`.
    - This could take numerous attempts.

13. It'll then proceed to download and load the HackMii Installer.
    - You can now shut down your Linux computer if you are not planning to use it later.

::: info

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)<br>

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

### Anforderungen

- A Rasperry Pi Pico W or an ESP32 with BR/EDR (Classic) support.
- Ein USB-Stick, der mit FAT32 formatiert ist.
- [The HackMii Installer](https://bootmii.org/download/)

::: info

A normal Rasperry Pi Pico will not work. It MUST to be the wireless model. Additionally, an ESP32 with a BLE only controller will not work.

:::

### Anleitung

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
   - (If attempting to fix a brick, you should also copy the homebrew app you wish to use to /apps/)
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. Use boot.elf in all cases).

2. Reinsert your flash drive into your console.
   - For a Wii mini, the USB port is on the back.
   - For a normal Wii, use the bottom port. (or the right port if it's upright).

3. Schalte deine Konsole ein.

4. Go to `Wii Settings`.

5. Take note in the top right corner of the letter next to the system version.

   - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

   ![](/images/wii/SystemMenuVersion.png)

6. Power off your Wii.

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
2. Schalte deine Konsole ein.
   - **Do not** connect any Wii Remotes.
3. Press the Sync button repeatedly until the bluebomb screen shows up.
   - This could take numerous attempts.
4. It'll then proceed to download and load the HackMii Installer.

::: tip

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)<br>

:::

::: tip

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)

:::

::::

:::::
