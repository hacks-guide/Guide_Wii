---
outline: false
---

# BlueBomb

BlueBomb is an exploit that takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries. Although it is the only exploit that works for the Wii mini, BlueBomb can run on the original Wii as well.

Cet exploit permet aussi la récupération de certaines briques au cas où il n'y a pas d'autre protection contre les briques, comme les briques de bannière et (certaines) briques de changement de style.

Veuillez lire les informations importantes mentionnées avant de continuer.

::: info

**Important Information**

- If you are utilizing this guide to hack a Wii mini and need assistance, please join [the Wii mini Hacking discord server](https://discord.gg/6ryxnkS).
- Si vous utilisez la version originale de la Wii, il faut considérer [un autre moyen pour la hacker](get-started) car il existe des manières beaucoup plus faciles pour obtenir le programme d'installation HackMii. Toutefois, des exceptions existent dans des circonstances telles que la récupération de bricks.
- Assurez-vous que la console est proche de l'ordinateur qui exécute l'exploit, idéalement à moins de 1 mètre.

:::

::: danger

**Important Warning**

Il est **fortement** conseillé de ne pas utiliser un tutoriel vidéo en général, mais surtout si vous voulez hacker une console Wii Mini. Des instructions incorrectes ont une plus grande chance de **bricker** votre console par rapport à ce guide.

:::

::::: tabs

:::: tab BlueBomb Classic (Linux)

## BlueBomb Classic

BlueBomb Classic utilizes a Linux device or virtual machine to upload an exploit to the Wii via Bluetooth.

### Requirements

- A Linux machine
  - A Virtual Machine may work, but it is not recommended due to its complexity in getting Bluetooth passthrough working. If possible, please use a LiveUSB as described below.

  - If you have a Raspberry Pi, you can use that instead as it most likely has Linux installed already.

    - Des Raspberrry Pi ARM64 nécessitent l'activation de multiarch avec l'architecture armhf (32bit) ajoutée. Sur un système d'exploitation basé sur Debian, les commandes ci-dessous devraient fonctionner :

    ```shell
    sudo sudo dpkg --add-architecture armhf
    sudo apt update && sudo apt install -y screen:armhf
    file /usr/bin/screen # devrait produire "ELF 32-bit
    screen"
    ```

  - Windows Subsystem for Linux or a Chromebook running Linux mode will _not work_ as they don't have direct access to the Bluetooth adapter or USB ports.

  - Si vous ne possédez pas Linux, [Ubuntu](https://ubuntu.com/download/desktop) est l'option la plus conviviale et peut tourner sur un ordinateur Windows ainsi qu'un Mac basé sur Intel.
    - Les Mac basés sur Apple Silicon ne marcheront pas à force de manquer les instructions ARM32 dans le matériel.
    - 32-bit devices will require [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
    - For 64-bit devices it is recommended to use the LTS edition due to its stability, but the latest release works as well.

  - You can [flash a Linux Live environment to a USB flash drive](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) instead of installing it to your computer.
- A Bluetooth adapter.
  - An internal Bluetooth adapter will work.
  - If you do not have one, make sure to get one compatible with Linux.
- Une clef USB [formatée en FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
  - This cannot be the same flash drive used for your Linux Machine.
- [The HackMii Installer](https://bootmii.org/download/)

### Instructions

#### Section I - Initial Preparation

1. Copy `boot.elf` from the `hackmii_installer_v1.2.zip` to the root of your flash drive.

   - (If attempting to fix a brick, you should also copy the homebrew app you wish to use to /apps/)
   - (Même dans le cas d'une Wii mini, le fichier bootmini.elf **ne fonctionnera pas**, son rôle étant différent et sans rapport. Use boot.elf in all cases).

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

#### Section II - Configuring Exploit

1. Start your Linux distro, and ensure you are connected to the internet.

2. Ouvrez le Terminal, et exécutez la commande suivante :

   ```shell
   wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
   chmod +x bluebomb-helper.sh
   ./bluebomb-helper.sh
   ```

   ![](/images/exploits/bluebomb/run-commands.png)

3. The helper will then download the required files, and ask for information about your console.

   ![](/images/exploits/bluebomb/console-type.png)

   - If you have selected a Wii mini you will be asked to provide your region. This can be determined by the last letter of the Wii Menu version (`U` for **USA** and `E` for **PAL** models).

   ![](/images/exploits/bluebomb/wii-mini-options.png)

   - Si vous avez sélectionné une Wii, il vous sera demandé de fournir la version du Menu Wii (ce que vous avez déterminé à l'étape 4).

   ![](/images/exploits/bluebomb/wii-options.png)

#### Section III - Performing the Exploit

1. Power on your console.
   - **Do not** connect any Wii Remotes.

2. Type `yes` in the script to proceed if you have not already done so, and make sure that `Waiting to accept` is displaying.

3. Press the Sync button repeatedly until the terminal shows `got connection handle`. Wait for the exploit to finish uploading.

   - This could take numerous attempts.

   ![](/images/exploits/bluebomb/got-connection-handle.png)

4. If the exploit was successful, you should see a similar screen to the below, after which the HackMii installer should load.

   - If you are not planning to use it later, you can now shut down your Linux distro.

   ![](/images/exploits/bluebomb/thanks-fullmetal5.png)

---

::: tip

[Continuer vers l'installation de Homebrew Channel et de BootMii](hbc)
{: .notice--info}

Now that you are in the HackMii Installer, you will be able to install the Homebrew Channel, as well as BootMii depending on your console.

:::

::::

:::: tab BlueBomb Micro (RPi/ESP32)

## BlueBomb Micro

BlueBomb Micro utilizes a Raspberry Pi Pico or ESP32 to upload an exploit to the Wii via Bluetooth.

::: warning

If you get an error `Exception 0700 occurred!` or similar, try the exploit again. If this continues to happen, join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) for support.

:::

### Requirements

- A Raspberry Pi Pico W 1/2 or an ESP32 with BR/EDR (Classic) support.
- Une clef USB [formatée en FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
- [The HackMii Installer](https://bootmii.org/download/)

::: info

A normal Raspberry Pi Pico will not work. It MUST be the wireless model. Additionally, an ESP32 with a BLE only controller will not work.

:::

### Instructions

#### Section I - Initial Preparation

1. Copy `boot.elf` from the `hackmii_installer_v1.2.zip` to the root of your flash drive.

   - (If attempting to fix a brick, you should also copy the homebrew app you wish to use to /apps/)
   - (Même dans le cas d'une Wii Mini, bootmini.elf **ne marchera pas** ; son rôle est tout à fait différent et sans rapport. Use boot.elf in all cases).

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

#### Section II.a - Raspberry Pi Pico W

:::details Preparation Instructions

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

:::

#### Section II.b - ESP32

:::details Preparation Instructions

1. Set up the latest [ESP IDF](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html).
2. Build the binary [from source](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#building-from-source).
3. [Flash the binary](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#flashing) to your ESP32.
4. Your device is now ready. You may unplug the device from your PC.

:::

#### Section III - Performing the Exploit

1. Plug your flashed device back into your PC.
2. Power on your console.
   - **Do not** connect any Wii Remotes.
3. Press the Sync button repeatedly until the Pico W LED begins to rapidly flash, at which point it will start uploading the exploit.
   - This could take numerous attempts.
4. If the exploit was successful, you should see a similar screen to the below, after which the HackMii installer should load.

   - You may now unplug your microcontroller at this point.

   ![](/images/exploits/bluebomb/thanks-fullmetal5.png)

---

::: tip

[Continuer vers l'installation de Homebrew Channel et de BootMii](hbc)
{: .notice--info}

Now that you are in the HackMii Installer, you will be able to install the Homebrew Channel, as well as BootMii depending on your console.

:::

::::

:::: tab BlueMii (Wii to Wii)

## BlueMii

BlueMii utilizes another Wii to upload an exploit to the Wii via Bluetooth.

### Prérequis

- A secondary Wii, Wii U (vWii), or Wii mini to use to upload an exploit to the target Wii
- A USB flash drive OR SD card to load the HackMii installer onto, [formatted to FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
- A second USB flash drive OR SD card to load BlueMii onto the exploiting Wii
- [BlueMii](https://github.com/Zarithya/BlueMii/releases/tag/v1.1)
- [The HackMii Installer](https://bootmii.org/download/)

### Instructions

#### Section I - Preparing Target Console

1. Copy `boot.elf` from the `hackmii_installer_v1.2.zip` to the root of the USB drive or SD card that will be used on the target console.

   - (Si vous essayez de réparer un brick, vous devrez également copier l'application homebrew que vous souhaitez utiliser dans /apps/)
   - (Même dans le cas d'une Wii mini, le fichier bootmini.elf **ne fonctionnera pas**, son rôle étant différent et sans rapport. Utilisez boot.elf dans tous les cas).

   ![](/images/exploits/bluebomb/usb-exploit.png)

2. Reinsert your USB drive or SD card into the target console.
   - Pour une Wii mini, le port USB est à l'arrière.
   - For a normal Wii, use the bottom port.

3. Power on the target console.

4. On your Wii, go to `Wii Settings` -> `Internet` -> `Console Information` and make note of your MAC address.

5. Prenez note dans le coin supérieur droit de la lettre à côté de la version du système.

   - Cette lettre est la région du menu système, que vous devrez connaître pour les étapes qui en ont besoin.

   ![](/images/wii/SystemMenuVersion.png)

6. Power off the target console.

#### Section II - Configuring Exploit

1. Copy the `apps` folder in the `BlueMii.vX.X.zip` file to the root of your USB drive or SD card that will be used on the exploiting console.

2. Reinsert your USB drive or SD card into the exploiting console.

3. Power on the exploiting console.

4. On the exploiting console, open the Homebrew Channel and load the BlueMii app.

   ![](/images/exploits/bluebomb/load-bluemii.png)

5. On the BlueMii app, select the region that corresponds to your target console.

   ![](/images/exploits/bluebomb/bluemii-region.png)

#### Section III - Performing the Exploit

1. Power on the target console.
   - Turn on your console and **do not** connect any Wii Remotes.

2. On the exploiting console, press the `A` button to prepare to upload the exploit to the target console.

   ![](/images/exploits/bluebomb/bluemii-ready.png)

3. Press the Sync button repeatedly until the exploiting console shows `got connection handle`. Wait for the exploit to finish uploading.

   - Cela peut demander de nombreuses tentatives.

   ![](/images/exploits/bluebomb/bluemii-handle.png)

4. If the exploit was successful, you should see a similar screen to the below, after which the HackMii installer should load.

   ![](/images/exploits/bluebomb/thanks-fullmetal5.png)

5. On the exploiting console, you may now press `A` to either retry the exploit, or `HOME/START` to return to the Homebrew Channel.

   ![](/images/exploits/bluebomb/bluemii-success.png)

---

::: tip

[Continuer vers l'installation de Homebrew Channel et de BootMii](hbc)
{: .notice--info}

Now that you are in the HackMii Installer, you will be able to install the Homebrew Channel, as well as BootMii depending on your console.

:::

:::::
