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

#### Prérequis

* An SD card formatted to FAT32/MS-DOS (FAT)
* A Wii on at least version 3.0

SD cards larger than 2GB will not work on Wii menu versions before 4.0.
{: .notice--warning}

#### Instructions

1. Allumez votre console.
1. Allez sur `Paramètres Wii`.
1. Take note of the letter next to the system version, in the top-right corner of the screen.
    + Cette lettre est la région du menu système, que vous devrez connaître pour les étapes qui en ont besoin.

    ![](/images/wii/SystemMenuVersion.png)

1. Navigate to `Internet` > `Console Information`.
1. Prenez note de votre adresse MAC COMPLET.

    ![](/images/wii/MacAddress.png)

1. On your computer, open the browser and go to [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org/).
1. Input your Wii MAC, version and region.
1. Soyez-sûr que `Bundle the HackMii Installer for me!` est coché.
1. Cliquez sur un des deux boutons.

    ![](/images/exploits/wilbrand/web.png)

1. Click on "Download your .zip".
1. Insérez votre carte SD dans votre ordinateur.
1. Copy the `private` folder and the `boot.elf` file from the downloaded `.zip` file to the root of your SD card.
1. Réinsérez votre carte SD dans votre console.
    + La carte SD doit être insérée dans le port carte SD située devant la Wii. L'utilisation d'un adaptateur SD vers USB branché dans le port USB de la Wii ne marchera pas.
1. Sur votre Wii, revenez au menu Wii.
1. Launch the Wii Message Board on your Wii.
1. Open the green letter with a bomb.
    + Ensure the date on your Wii is correct, or you might be unable to find the letter.
    + Dans certains cas, vous devrez peut-être vérifier les messages du lendemain ou d'hier pour que la lettre apparaisse.
    + If you don't see the green letter, check if any errors appear in the SD card section of `Data Management`. If there are errors, there may be an issue with the SD card format or the Wii’s SD card reader.

    ![](/images/exploits/wilbrand/msgboard.png)

1. Si l'exploit a réussi, votre console aura chargé l'installeur HackMii.
    + If this didn't work for you, try [Wilbrand CLI](#wilbrand-cli) or [try another exploit](get-started) (ie. Letterbomb).

[Continuer vers la chaîne Homebrew et l'installation de BootMii](hbc)
{: .notice--info}

### Wilbrand CLI

#### Prérequis

* A computer running Windows, macOS or Linux
* An SD card formatted to FAT32/MS-DOS (FAT)
* A Wii on version 3.0 or newer
* [Wilbrand](https://static.wiidatabase.de/Wilbrand.zip)
* [HackMii Installer v1.2](https://bootmii.org/download/)

SD cards larger than 2GB will not work on Wii menu versions before 4.0.
{: .notice--warning}

#### Instructions

1. Allumez votre console.
1. Allez sur `Paramètres Wii`.
1. Take note of the letter next to the system version, in the top-right corner of the screen.
    + Cette lettre est la région du menu système, que vous devrez connaître pour les étapes qui en ont besoin.

    ![](/images/wii/SystemMenuVersion.png)

1. Navigate to `Internet` > `Console Information`.
1. Prenez note de votre adresse MAC COMPLET.

    ![](/images/wii/MacAddress.png)

1. Copy all files from the Wilbrand `.zip` to a folder on your computer
1. Insérez votre carte SD dans votre ordinateur.
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
1. Réinsérez votre carte SD dans votre console.
    + La carte SD doit être insérée dans le port carte SD située devant la Wii. L'utilisation d'un adaptateur SD vers USB branché dans le port USB de la Wii ne marchera pas.
1. Sur votre Wii, revenez au menu Wii.
1. Allez sur le bureau Wii (bouton avec l'enveloppe).
1. Open the green letter with a bomb.
    + Ensure the date on your Wii is correct, or you might be unable to find the letter.
    + Dans certains cas, vous devrez peut-être vérifier les messages du lendemain ou d'hier pour que la lettre apparaisse.
    + If you don't see the green letter, check if any errors appear in the SD card section of `Data Management`. If there are errors, there may be an issue with the SD card format or the Wii’s SD card reader.

    ![](/images/exploits/wilbrand/msgboard.png)

1. Si l'exploit a réussi, votre console aura chargé l'installeur HackMii.

[Continuer vers la chaîne Homebrew et l'installation de BootMii](hbc)
{: .notice--info}
