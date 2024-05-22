---
title: "BlueBomb"
---

{% include toc title="Table of Contents" %}

{% capture technical_info %}
<summary><em>Teknik Detaylar (isteğe bağlı)</em></summary>
BlueBomb, Wii ve Wii mini'nin Bluetooth kitaplıklarındaki bir kusurdan yararlanan bir exploit'tir. Her ne kadar Wii mini'de işe yarayan tek exploit olsa da BlueBomb orijinal Wii'de de çalışabilir.

Bu exploit aynı zamanda banner brick'leri ve (bazı) tema brick'leri gibi belirli brick'lerden kurtarmayı da mümkün kılar.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

Wii mini konsolunuzu hack'lemek için **herhangi bir** video rehberini kullanmamanız **şiddetle** tavsiye edilir, çünkü onu **brick moduna sokma** şansı çok yüksektir.
{: .notice--warning}

Bu eğitimle ilgili herhangi bir konuda yardıma ihtiyacınız olursa lütfen [Wii mini Hacking Discord sunucusuna](https://discord.gg/6ryxnkS) katılın (önerilir)
{: .notice--info}

Wii'nin orijinal revizyonunu kullanıyorsanız, HackMii yükleyicisine ulaşmanın çok daha kolay yolları olduğundan muhtemelen [kullanılacak başka bir exploit](get-started) bulmalısınız. Ancak brick recovery gibi durumlarda istisnalar mevcuttur.
{: .notice--info}

Konsolun, exploit'i çalıştıran bilgisayara yakın olduğundan emin olun; ideal olarak 3 metreden kısa olmalıdır.
{: .notice--info}

### Gereksinimler

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
1. Power on your console.
    + Turn on your console and **do not** connect any Wii Remotes.
1. Press the Sync button repeatedly until the terminal shows `got connection handle`.
    + This could take numerous attempts.
1. If the exploit was successful, your device will have loaded the HackMii Installer.
    + You can now shut down your Linux computer if you are not planning to use it later.

If using a Wii, proceed to installing the Homebrew Channel and BootMii<br>
{: .notice--info}

If using a Wii mini, proceed to installing the Homebrew Channel
{: .notice--info}
