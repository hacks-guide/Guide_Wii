---
title: "Wilbrand"
---

{% include toc title="Tabla de contenido" %}

Wilbrand, like LetterBomb, is an exploit for the Wii that is triggered using the Wii Message Board.

Unlike LetterBomb, Wilbrand supports Wii menu versions down to 3.0.
{: .notice--info}

There are two methods listed on this page used to create the proper Wilbrand exploit. Wilbrand Web is recommended for its ease of use.
{: .notice--info}

### Wilbrand Web (Recommended)

#### Requisitos

* An SD card formatted to FAT32/MS-DOS
* A Wii on at least version 3.0

SD cards larger than 2GB will not work on Wii menu versions before 4.0.
{: .notice--warning}

#### Instrucciones

1. Enciende la consola.
1. On your Wii, go to `Wii Settings`, and make note of the version at the top right.
1. Take note of the letter next to the system version, in the top-right corner of the screen.
    + Esta letra corresponde a la región del menú de tu consola, que necesitarás saber para los pasos pertinentes.

    ![](/images/wii/SystemMenuVersion.png)

1. Proceed to `Internet` -> `Console Information` and also make note of your MAC address.
1. Take note of your FULL MAC address.

    ![](/images/wii/MacAddress.png)

1. On your computer, open the browser and go to [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org/).
1. Input your Wii MAC, version and region.
1. Visit [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org/), input your Wii MAC, version, region, ensure `Bundle the HackMii Installer for me!` is checked, and cut either wire.
1. Cut either wire.

    ![](/images/exploits/wilbrand/web.png)

1. Click on "Download your .zip".
1. Insert your SD card into your PC.
1. Copy the `private` folder and the `boot.elf` file from the downloaded `.zip` file to the root of your SD card.
1. Expulsa la tarjeta SD e insértala en tu Wii.
    + La tarjeta SD debe insertarse en la ranura para tarjetas SD ubicada en la parte frontal de la consola. No es posible usar un adaptador USB conectado a alguno de los puertos USB de la consola.
1. En tu consola, ingresa al tablón de Wii.
1. running Wilbrand on Linux
1. Load the green letter with the Bob-omb icon.
    + Asegúrate de que la fecha en tu Wii sea correcta, pues de lo contrario podrías ser incapaz de encontrar la carta.
    + In some cases, you may need to check the messages for tomorrow or yesterday for the letter to show up.
    + If you don't see the green letter, check if any errors appear in the SD card sections in `Data Management`. If any do, there may be an issue with the SD card format or the Wii's SD card reader.

    ![](/images/exploits/wilbrand/msgboard.png)

1. Después de unos segundos, la consola debería de iniciar el HackMii Installer.
    + If this didn't work for you, [try another exploit](get-started) or try [Wilbrand CLI](#wilbrand-cli).

[Continuar a la instalación del Canal Homebrew y BootMii](hbc)
{: .notice--info}

### Wilbrand CLI

#### Requisitos

* A PC running Windows, MacOS or Linux
* An SD card formatted to FAT32/MS-DOS
* A Wii on version 3.0 or newer
* [Wilbrand](https://static.wiidatabase.de/Wilbrand.zip)
* [No es recomendable utilizar BlueBomb en la Wii original para instalar el Canal Homebrew y BootMii, pues existen otros exploits más fáciles de ejecutar.](https://bootmii.org/download/)

SD cards larger than 2GB will not work on Wii menu versions before 4.0.
{: .notice--warning}

#### Instrucciones

1. Enciende la consola.
1. On your Wii, go to `Wii Settings`, and make note of the version at the top right.
1. Take note of the letter next to the system version, in the top-right corner of the screen.
    + Esta letra corresponde a la región del menú de tu consola, que necesitarás saber para los pasos pertinentes.

    ![](/images/wii/SystemMenuVersion.png)

1. Proceed to `Internet` -> `Console Information` and also make note of your MAC address.
1. Take note of your FULL MAC address.

    ![](/images/wii/MacAddress.png)

1. Extract the Wilbrand zip to a folder on your PC, preferably on your desktop.
1. Extrae el contenido del archivo ZIP recién descargado a la raíz de la tarjeta SD.
1. Open a terminal inside the folder Wilbrand was extracted to.
1. Using your Wii's version and MAC address, run the following command:

    + Windows: `.\Wilbrand.exe AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION X:`
        + `X:` is the drive letter of your SD card.

        ![](/images/exploits/wilbrand/windows.png)

    + Linux/MacOS: `./Wilbrand AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION /media/mount_dir`
        + If you have not opened your terminal directly in the folder Wilbrand was extracted to, use `cd` to enter it first, eg. `cd ~/Desktop/Wilbrand`
        + `/media/mount_dir` is the folder your SD card is mounted in. This may vary depending on your Linux distro.

        ![](/images/exploits/wilbrand/linux.png)

1. Extract the HackMii Installer v1.2 to a folder on your PC.
1. Locate the `boot.elf` file, and put it on the root of your SD card.
1. Expulsa la tarjeta SD e insértala en tu Wii.
    + La tarjeta SD debe insertarse en la ranura para tarjetas SD ubicada en la parte frontal de la consola. No es posible usar un adaptador USB conectado a alguno de los puertos USB de la consola.
1. En tu consola, ingresa al tablón de Wii.
1. Launch the Wii Message Board.
1. Load the green letter with the Bob-omb icon.
    + Asegúrate de que la fecha en tu Wii sea correcta, pues de lo contrario podrías ser incapaz de encontrar la carta.
    + En algunos casos, es posible que la carta se ubique en el día anterior o posterior al actual.
    + If you don't see the green letter, check if any errors appear in the SD card sections in `Data Management`. If any do, there may be an issue with the SD card format or the Wii's SD card reader.

    ![](/images/exploits/wilbrand/msgboard.png)

1. Después de unos segundos, la consola debería de iniciar el HackMii Installer.

[Continuar a la instalación del Canal Homebrew y BootMii](hbc)
{: .notice--info}
