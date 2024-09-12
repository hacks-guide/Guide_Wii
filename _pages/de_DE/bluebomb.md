---
title: "Credits"
---

{% include toc title="Inhaltsverzeichnis" %}

{% capture bluebomb-classic %}

## BlueBomb Classic

Obwohl er als einziger Exploit auf der Wii mini funktioniert, kann BlueBomb auch auf der originalen Wii ausgeführt werden. {% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
BlueBomb is an exploit that takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries.

This exploit also enables recovery from certain bricks, such as banner bricks and (some) theme bricks.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

Es wird **dringend** empfohlen, **keine** Video-Anleitung zum Hacken deiner Wii mini-Konsole zu verwenden, da hierbei ein extrem großes Risiko besteht deine Konsole zu **Bricken**.
{: .notice--warning}

Solltest du hinsichtlich dieses Tutorials Hilfe benötigen, trete bitte dem [Wii mini Hacking-Discordserver](https://discord.gg/6ryxnkS) bei (empfohlen)
{: .notice--info}

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. Exceptions however, exist in circumstances like brick recovery.
{: .notice--info}

Make sure that the console is close to the computer running the exploit, ideally it should be less than 3 feet.
{: .notice--info}

### Anforderungen

* Ein Linux-System
    * Eine virtuelle Maschine kann funktionieren, wird aber aufgrund ihrer Komplexität beim Durchlaufen von Bluetooth nicht empfohlen. Wenn möglich, verwende bitte einen LiveUSB wie unten beschrieben.
    * Wenn du einen Raspberry Pi hast, kannst du den auch verwenden, da wahrscheinlich Linux dort schon installiert ist.
    * Windows Subsystem für Linux oder ein Chromebook im Linux mode wird *nicht funktionieren*, da sie keinen direkten Zugriff auf den Bluetooth Adapter oder USB Schnittstellen haben.
    * If you do not have Linux, [Ubuntu](https://ubuntu.com/download/desktop) is the most user-friendly option and can be ran on computers running Windows or Mac.
        * 32-Bit-Geräte erfordern [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
        * For 64-bit devices it is recommended to use the LTS edition due to its stability, but the latest release works as well.
    * You can [flash a Linux Live environment to a USB flash drive](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) instead of installing it to your computer.
* Ein Bluetooth-Adapter.
    * Ein interner Bluetooth-Adapter wird funktionieren.
    * If you do not have one, make sure to get one compatible with Linux.
* Ein USB-Stick, der mit FAT32 formatiert ist.
    * This cannot be the same flash drive used for your Linux Machine.
* [For the original Wii, we do not recommend using BlueBomb if you intend to install the Homebrew Channel and BootMii, as there are more convenient exploits available.](https://bootmii.org/download/)

### Anleitung

1. Extract it and place the `boot.elf` file in your flash drive.
    + (If attempting to fix a brick, you should also copy the homebrew app you wish to use to /apps/)
    + - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. Use boot.elf in all cases).
1. Reinsert your flash drive into your console.
    + For a Wii mini, the USB port is on the back.
    + For a normal Wii, use the bottom port. (or the right port if it's upright).
1. Power on your console.
1. Go to `Wii Settings`.
1. Take note in the top right corner of the letter next to the system version.
    + This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

    ![](/images/wii/SystemMenuVersion.png)

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
1. Schalte deine Konsole ein.
    + Schalte deine Konsole ein und verbinde **keine** Wii-Fernbedienungen mit ihr.
1. Drücke wiederholt den SYNCHRO-Knopf (SYNC.), bis das Terminal `got connection handle` anzeigt.
    + This could take numerous attempts.
1. It'll then proceed to download and load the HackMii Installer.
    + You can now shut down your Linux computer if you are not planning to use it later.

Falls du eine Wii verwendest, fahre damit fort den Homebrew-Kanal und BootMii zu installieren<br>
{: .notice--info}

Falls du eine Wii mini verwendest, fahre damit fort den Homebrew-Kanal zu installieren
{: .notice--info}

{% endcapture %}

{% capture bluebomb-micro %}

## BlueBomb Micro

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
BlueBomb Micro is a port of Fullmetal5's BlueBomb exploit for the Rasperry Pi Pico W or ESP32, thus bypassing the need for a Linux system. It takes advantage of a flaw in the Wii and Wii mini's Bluetooth libraries. This port was made possible by [GaryOderNichts](https://github.com/GaryOderNichts)

This exploit also enables recovery from certain bricks, such as banner bricks and (some) theme bricks.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

Es wird **dringend** empfohlen, **keine** Video-Anleitung zum Hacken deiner Wii mini-Konsole zu verwenden, da hierbei ein extrem großes Risiko besteht deine Konsole zu **Bricken**.
{: .notice--warning}

Solltest du hinsichtlich dieses Tutorials Hilfe benötigen, trete bitte dem [Wii mini Hacking-Discordserver](https://discord.gg/6ryxnkS) bei (empfohlen)
{: .notice--info}

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. Exceptions however, exist in circumstances like brick recovery.
{: .notice--info}

Make sure that the console is close to the computer running the exploit, ideally it should be less than 3 feet.
{: .notice--info}

### Anforderungen
* A Rasperry Pi Pico W or an ESP32 with BR/EDR (Classic) support.
* Ein USB-Stick, der mit FAT32 formatiert ist.
* [The HackMii Installer](https://bootmii.org/download/)

A normal Rasperry Pi Pico will not work. It MUST to be the wireless model. Additionally, an ESP32 with a BLE only controller will not work.
{: .notice--info}

### Anleitung

1. Extract it and place the `boot.elf` file in your flash drive.
    + (If attempting to fix a brick, you should also copy the homebrew app you wish to use to /apps/)
    + - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. Use boot.elf in all cases).
1. Reinsert your flash drive into your console.
    + For a Wii mini, the USB port is on the back.
    + For a normal Wii, use the bottom port. (or the right port if it's upright).
1. Schalte deine Konsole ein.
1. On your Wii, go to `Wii Settings`, and make note of the version at the top right.
1. Take note in the top right corner of the letter next to the system version.
    + This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

    ![](/images/wii/SystemMenuVersion.png)

1. Power off your Wii.

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
1. Schalte deine Konsole ein.
    + Schalte deine Konsole ein und verbinde **keine** Wii-Fernbedienungen mit ihr.
1. Press the Sync button repeatedly until the bluebomb screen shows up.
    + This could take numerous attempts.
1. It'll then proceed to download and load the HackMii Installer.

Falls du eine Wii verwendest, fahre damit fort den Homebrew-Kanal und BootMii zu installieren<br>
{: .notice--info}

Falls du eine Wii mini verwendest, fahre damit fort den Homebrew-Kanal zu installieren
{: .notice--info}

{% endcapture %}

<button class="btn btn--large btn--primary tabLink" onClick="select_tab(event, 'bluebomb-classic')"> BlueBomb Classic </button>
<button class="btn btn--large btn--info tabLink" onClick="select_tab(event, 'bluebomb-micro')"> BlueBomb Micro </button>

<div class="tabContent tabDefualt" id="bluebomb-classic" markdown="1">

{{ bluebomb-classic }}
</div>
<div class="tabContent" id="bluebomb-micro" markdown="1">
{{ bluebomb-micro }}
</div>

<script>
    const tabContents = document.getElementsByClassName('tabContent');
    const tabLinks    = document.getElementsByClassName('tabLink');

    for (tab of tabContents) { tab.style.display = 'none'; }
    document.getElementsByClassName('tabDefault')[0].style.display = 'block';

    function select_tab(event, tab_id)
    {
        for (tab of tabContents) { tab.style.display = 'none'; }
        for (btn of tabLinks) { btn.className = btn.className.replace('btn--primary', 'btn--info'); }

        document.getElementById(tab_id).style.display = 'block';
        event.currentTarget.className = event.currentTarget.className.replace('btn--info', 'btn--primary');
    }
</script>
