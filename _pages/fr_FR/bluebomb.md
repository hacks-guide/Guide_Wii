---
title: "BlueBomb"
---

{% include toc title="Table of Contents" %}

Il est **vivement** déconseillé d'utiliser **n'importe quel** guide vidéo pour hacker votre console Wii mini, puisqu'il y a une très grande chance de la **bricker**.
{: .notice--warning}

Si vous avez besoin d'aide pour tout ce qui concerne ce tutoriel, veuillez rejoindre [le serveur Discord Wii mini Hacking](https://discord.gg/6ryxnkS) (recommandé)
{: .notice--info}

BlueBomb est un exploit qui tire profit d'une faille dans les bibliothèques Bluetooth de la Wii et de la Wii mini. Bien que ce soit le seul exploit qui fonctionne pour la Wii mini, BlueBom peut aussi fonctionner sur la Wii originale. Cet exploit permet également de récupérer certains bricks, tels que le brick coréen Kii/Error 003.

Si vous utilisez une révision originale de la Wii, vous devriez probablement trouver un [autre exploit à utiliser](get-started) vu qu'il existe des moyens beaucoup plus faciles d'accéder à l'installer HackMii. Toutefois, des exceptions existent dans des circonstances telles que la récupération de bricks.
{: .notice--info}

Assurez-vous que la console est proche de l'ordinateur qui exécute l'exploit, idéalement à moins de 1 mètre.
{: .notice--info}

### Prérequis

* Une machine Linux
    * Une machine virtuelle peut fonctionner, mais elle n'est pas recommandée dû à la complexité à faire fonctionner le Bluetooth. Si possiblez, utilisez un LiveUSB comme décrit ci-dessous.
    * Si vous avez un Raspberry Pi, vous pouvez l'utiliser vu qu'il est très probable que Linux soit déjà installé.
    * Le sous-système Linux pour Windows ou un Chromebook en mode Linux ne *marcheront pas* vu qu'ils n'ont pas d'accès direct à l'adaptateur Bluetooth ou aux ports USB.
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
1. Reinsert your flash drive into your console.
    + For a Wii mini, the USB port is on the back.
    + For a normal Wii, use the bottom port (or the right port if it's upright).
1. Power on your console.
1. Go to `Wii Settings`.
1. Take note in the top right corner of the letter next to the system version.
    + This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

    ![Wii Region](/images/wii/SystemMenuVersion.png)

1. Power off your console.
1. Start your Linux distro, and ensure you are connected to the internet.
1. Open the Terminal
1. Run the following commands:

    ```bash
    wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
    chmod +x bluebomb-helper.sh
    ./bluebomb-helper.sh
    ```

1. The helper will then download the required files, and ask for information about your console.
    + If you have selected a Wii mini you will be asked to provide your region. This can be determined by the last letter of the Wii Menu version (`U` for **USA** and `E` for **PAL** models).
    + If you have selected a Wii you will be asked to provide your Wii Menu Version (What you determined in step 4)
1. Power on your console.
    + **Do not** connect any Wii Remotes.
1. Press the Sync button repeatedly until the terminal shows `got connection handle`.
    + This could take numerous attempts.
1. If the exploit was successful, your device will have loaded the HackMii Installer.
    + If you are not planning to use it later, you can now shut down your Linux distro.

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)<br>
{: .notice--info}

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)
{: .notice--info}