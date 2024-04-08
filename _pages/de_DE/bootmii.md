---
title: "BootMii Backup"
---

{% include toc title="Inhaltsverzeichnis" %}

One of BootMii's most important features is the ability to backup and restore your Wii's NAND storage. We will be going over how to perform a NAND backup. You can then restore from that backup for any reason. This page will guide you in backing up your Wii's NAND to an SD Card, which you can then use however you like.

Du brauchst eine **SD-Karte** um eine NAND-Sicherung mittels BootMii zu erstellen. If you do not have one, you can skip this page, although it is highly recommended to make a NAND backup if you can.
{: .notice--warning}

### Voraussetzungen

* An SD card with at least 512MB of free space

### Anleitung

If you have BootMii installed as boot2 you will need to launch BootMii by restarting the console. Skip steps 1 and 2 if this is the case.
{: .notice--info}

1. Schalte deine Konsole ein.
1. Starte den Homebrew-Kanal.
1. Press the HOME Button, then select "Launch BootMii".

    ![](/images/bootmii/BootMii_HBC.png)

    If the `Launch BootMii` button does not appear, please [re-launch the HackMii Installer](hackmii) and install BootMii.
    {: .notice--warning}

    If the screen stays black and the blue disc drive light is blinking, you are missing the BootMii files on your SD card. Download [this zip file](https://static.hackmii.com/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.
    {: .notice--warning}

1. You should see an image similar to the below now on your screen:

    ![](/images/bootmii/BootMii_Main.png)

    Navigating BootMii is not possible using a Wii Remote. You must use the POWER and RESET buttons on your console, or a GameCube controller plugged into port 1. To navigate between options, press POWER. To select an option, press RESET.
    {: .notice--info}

1. Select the Options button (the icon with the gears).

    ![](/images/bootmii/BootMii_Gears.png)

1. Wähle den ersten Button links.

    ![](/images/bootmii/BootMii_Backup.png)

1. Ein NAND-Backup wird gestartet. Du kannst den Fortschritt am Bildschirm verfolgen.
    + "Bad Blocks" are normal. Keine Sorge, wenn du einige auf einem NAND Backup siehst.

    ![](/images/bootmii/BootMii_NAND_Backup.png)

1. After this step, it will verify the backup. Idealerweise sollten alle Blöcke nach dem Überprüfungsprozess grün sein.
    + If you have factory bad blocks with uncorrectable pages, these blocks may fail to verify. As long all non-bad blocks are successfully verified, this should be fine.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

1. To exit BootMii, press the Back button (the one with the arrow) and then you can press either the Wii Menu button or the Homebrew Channel button to exit where you want to.

    ![](/images/bootmii/BootMii_Return.png)

<div id="restore-notice" class="notice" markdown="1">
Please be reminded that <strong>restoring a NAND backup is usually a last resort,</strong> and that there often better ways to fix your brick. There are often better ways to unbrick your console.
Versuche dein Bestes um [deinen Brick-Zustand](bricks) zu identifizieren und die Aktion umzukehren, die es ursprünglich verursacht hat.
To restore from a NAND backup on your SD card, you can follow the instructions for [RestoreMii](bootmiirecover). **Family edition Wiis (Wiis without GameCube ports) CANNOT restore NAND backups.**
</div>

BootMii as boot2 is recommended, but only available to install on early Wii consoles. Otherwise, it can only be installed as an IOS. If you would like to change this, you can use the app [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor). Or, you can edit `sd:/bootmii/bootmii.ini` manually.
{: .notice--info}

To make sure you don’t lose the files, it's recommended to copy `nand.bin` and `keys.bin` from the root of your SD card to your computer. `nand.bin` is a backup of your console's internal memory, while `keys.bin` are your console's keys.
{: .notice--info}

[Continue to Priiloader Installation](priiloader)<br> Priiloader adds a level of brick protection, and is highly recommended, especially if you were only able to install BootMii as IOS. Es ist besonders wichtig für Benutzer von BootMii auf IOS.
{: .notice--info}
