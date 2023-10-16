---
title: "Wilbrand"
---

{% include toc title="Table of Contents" %}

Wilbrand, like LetterBomb, is an exploit for the Wii that is triggered using the Wii Message Board.

Unlike LetterBomb, Wilbrand supports Wii menu versions down to 3.0.
{: .notice--info}

There are two methods listed on this page used to create the proper Wilbrand exploit. Wilbrand Web is recommended for its ease of use.
{: .notice--info}

### Wilbrand Web (Recommended)

#### Requisiti

* An SD card formatted to FAT32/MS-DOS (FAT)
* A Wii on at least version 3.0

SD cards larger than 2GB will not work on Wii menu versions before 4.0.
{: .notice--warning}

#### Istruzioni

1. Accendi la console.
1. Vai sulle `Impostazioni console Wii`.
1. Take note of the letter next to the system version, in the top-right corner of the screen.
    + Questa lettera corrisponde alla regione del tuo menu di sistema, che dovrai sapere per i passaggi corrispondenti.

    ![](/images/wii/SystemMenuVersion.png)

1. Naviga in `Internet` > `Informazioni console Wii`.
1. Prendi nota del tuo indirizzo MAC COMPLETO.

    ![](/images/wii/MacAddress.png)

1. On your computer, open the browser and go to [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org/).
1. Input your Wii MAC, version and region.
1. Assicurati che `Bundle the HackMii Installer for me!` sia attivato.
1. Taglia entrambi i cavi.

    ![](/images/exploits/wilbrand/web.png)

1. Click on "Download your .zip".
1. Inserisci la scheda SD nel tuo computer.
1. Copy the `private` folder and the `boot.elf` file from the downloaded `.zip` file to the root of your SD card.
1. Reinserisci la scheda SD nella tua console.
    + La scheda SD deve essere inserita nello slot SD posizionato nella parte anteriore del Wii. Usare un adattatore da USB a SD inserito nella porta USB del Wii non funzionerà.
1. Sul tuo Wii, ritorna al Menu Wii.
1. Launch the Wii Message Board on your Wii.
1. Open the green letter with a bomb.
    + Ensure the date on your Wii is correct, or you might be unable to find the letter.
    + In alcuni casi, la lettera potrebbe trovarsi nei messaggi per domani o ieri.
    + If you don't see the green letter, check if any errors appear in the SD card section of `Data Management`. If there are errors, there may be an issue with the SD card format or the Wii’s SD card reader.

    ![](/images/exploits/wilbrand/msgboard.png)

1. Se l'exploit ha avuto successo, il tuo Wii avrà avviato l'HackMii Installer.
    + If this didn't work for you, try [Wilbrand CLI](#wilbrand-cli) or [try another exploit](get-started) (ie. Letterbomb).

[Installazione dell'Homebrew Channel e di BootMii](hbc)
{: .notice--info}

### Wilbrand CLI

#### Requisiti

* A computer running Windows, macOS or Linux
* An SD card formatted to FAT32/MS-DOS (FAT)
* A Wii on version 3.0 or newer
* [Wilbrand](https://static.wiidatabase.de/Wilbrand.zip)
* [HackMii Installer v1.2](https://bootmii.org/download/)

SD cards larger than 2GB will not work on Wii menu versions before 4.0.
{: .notice--warning}

#### Istruzioni

1. Accendi la console.
1. Vai sulle `Impostazioni console Wii`.
1. Take note of the letter next to the system version, in the top-right corner of the screen.
    + Questa lettera corrisponde alla regione del tuo menu di sistema, che dovrai sapere per i passaggi corrispondenti.

    ![](/images/wii/SystemMenuVersion.png)

1. Naviga in `Internet` > `Informazioni console Wii`.
1. Prendi nota del tuo indirizzo MAC COMPLETO.

    ![](/images/wii/MacAddress.png)

1. Copy all files from the Wilbrand `.zip` to a folder on your computer
1. Inserisci la scheda SD nel tuo computer.
1. Open a terminal inside the folder Wilbrand was extracted to.
1. Using your Wii's version and MAC address, run the following command:

    + Windows: `.\Wilbrand.exe AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION X:`
        + `X:` is the drive letter of your SD card.

        ![](/images/exploits/wilbrand/windows.png)

    + Linux/macOS: `./Wilbrand AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION /media/mount_dir`
        + If you have not opened your terminal directly in the folder Wilbrand was extracted to, use `cd` to enter it first, eg. `cd ~/Desktop/Wilbrand`
        + `/media/mount_dir` is the folder your SD card is mounted in. This may vary depending on your Linux distro.

        ![](/images/exploits/wilbrand/linux.png)

1. Copy all files from the hackmii_installer_v1.2 `.zip` to a folder on your computer.
1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your SD card.
1. Reinserisci la scheda SD nella tua console.
    + La scheda SD deve essere inserita nello slot SD posizionato nella parte anteriore del Wii. Usare un adattatore da USB a SD inserito nella porta USB del Wii non funzionerà.
1. Sul tuo Wii, ritorna al Menu Wii.
1. Avvia la Bacheca Wii.
1. Open the green letter with a bomb.
    + Ensure the date on your Wii is correct, or you might be unable to find the letter.
    + In alcuni casi, la lettera potrebbe trovarsi nei messaggi per domani o ieri.
    + If you don't see the green letter, check if any errors appear in the SD card section of `Data Management`. If there are errors, there may be an issue with the SD card format or the Wii’s SD card reader.

    ![](/images/exploits/wilbrand/msgboard.png)

1. Se l'exploit ha avuto successo, il tuo Wii avrà avviato l'HackMii Installer.

[Installazione dell'Homebrew Channel e di BootMii](hbc)
{: .notice--info}
