---
title: "BlueBomb"
---

{% include toc title="Оглавление" %}

{% capture technical_info %}
<summary><em>Технические детали (опционально)</em></summary>
BlueBomb - это эксплоит, который использует уязвимость в библиотеках Bluetooth Wii и Wii mini. Хоть это и единственный эксплоит который работает с Wii mini, BlueBomb может работать и с обычной Wii.

Так же, этот эксплоит может помочь восстановить консоль после бриков, таких, как баннер брики и (некоторые) брики тем.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

**Настоятельно** рекомендуется не использовать **любые** видео руководства для взлома вашей консоли Wii mini, так как имеется огромный шанс её **окирпичить**.
{: .notice--warning}

Если вам нужна помощь, пожалуйста, перейдите на [сервер Wii mini Hacking](https://discord.gg/6ryxnkS) (рекомендуется)
{: .notice--info}

Если вы используете оригинальную ревизию Wii, вам, вероятно, следует использовать [другой эксплоит](get-started), так как имеются более легкие пути для входа в установщик HackMii. Однако, существуют исключения в таких обстоятельствах как восстановление окирпиченной консоли.
{: .notice--info}

Убедитесь, что консоль стоит рядом с компьютером на котором запущен эксплоит, в идеале расстояние должно быть меньше 1 метра.
{: .notice--info}

### Требования

* Компьютер с Linux
    * Виртуальная машина может сработать, но её использование не рекомендуется из-за сложности с пробросом Bluetooth. По возможности, используйте LiveUSB, как описано ниже.
    * Если у вас есть Raspberry Pi, вы можете использовать её вместо вашего устройства, так как на ней, скорее всего уже установлен Linux.
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
