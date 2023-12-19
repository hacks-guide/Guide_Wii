---
title: "BootMii Backup"
---

{% include toc title="Inhalt" %}

BootMii allows for backing up and restoring your Wii's NAND storage. This page will guide you in backing up your Wii's NAND to an SD Card, which you can then use however you like.

Family edition Wiis (Wiis without GameCube ports) CANNOT restore NAND backups. This is because of the lack of GameCube ports which are required on non-boot2 Wiis to enter the restoration confirmation code. Regardless, it is still recommended to make one on these consoles.
{: .notice--danger}

You need an **SD card** to use BootMii at all, but especially to create a NAND backup. If you do not have an SD card on hand right now, you can skip this page, but it is HIGHLY RECOMMENDED to return to this page later to back up your NAND.
{: .notice--warning}

Navigating BootMii is not possible using a Wii Remote. You must use the POWER and RESET buttons on your console, or a GameCube controller plugged into port 1. To navigate between options, press POWER on your Wii (or left/right on the +Control Pad on a GameCube controller). To select an option, press RESET on your Wii or A on your GameCube controller. You will NEED to use a GameCube controller to restore a NAND backup in the future if BootMii is installed as IOS.
{: .notice--info}

If the `Launch BootMii` button does not appear in the Homebrew Channel, [re-launch the HackMii Installer](hackmii) and install BootMii.
{: .notice--warning}

If the screen stays black and the blue disc drive light is blinking upon launching BootMii, you are missing the BootMii files on your SD card. Download [this zip file](/assets/files/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.
{: .notice--warning}

### Anforderungen

* An SD card with a minimum 512MB of free space (1GB or more recommended)

### Anleitung

If you have BootMii installed as boot2, you will need to launch BootMii by restarting the console. Skip steps 1 and 2 if this is the case.
{: .notice--info}

1. Schalte deine Konsole ein.
1. Starte den Homebrewkanal.
1. Drücke den HOME Knopf, wähle dann "Launch BootMii".

    ![](/images/bootmii/BootMii_HBC.png)

1. You should see an image similar to the below now on your screen:

    ![](/images/bootmii/BootMii_Main.png)

1. Wähle den Optionen-Button (das Icon mit dem Zahnrad).

    ![](/images/bootmii/BootMii_Gears.png)

1. Wähle den ersten Button links.

    ![](/images/bootmii/BootMii_Backup.png)

1. Ein NAND-Backup wird gestartet. Du kannst den Fortschritt am Bildschirm verfolgen.
    + "Bad Blocks" sind normal und stammen hauptsächlich aus der Fabrik aufgrund von NAND-Binning. Keine Sorge, wenn du einige auf einem NAND Backup siehst.

    ![](/images/bootmii/BootMii_NAND_Backup.png)

1. After the previous step completes, BootMii will verify the backup. Idealerweise sollten alle Blöcke nach dem Überprüfungsprozess grün sein.
    + If you have factory bad blocks with uncorrectable pages, these blocks may fail to verify. As long all non-bad blocks are successfully verified, this should be fine.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

1. Drücke die Zurück-Taste (die mit einem Pfeil), dann drücke entweder die Wii-Menü-Taste oder die Homebrewkanal-Taste, um BootMii zu verlassen.

    ![](/images/bootmii/BootMii_Return.png)

<div id="restore-notice" class="notice" markdown="1">
Hinweis: **Wiederherstellen eines NAND-Backups ist in der Regel ein letzter Ausweg**. Es gibt oft bessere Möglichkeiten, deine Konsole zu entbricken.
Versuche dein Bestes um [deinen Brick-Zustand](bricks) zu identifizieren und die Aktion umzukehren, die es ursprünglich verursacht hat.
Um von einem NAND-Backup auf deiner SD-Karte wiederherzustellen, folge den Anweisungen für [RestoreMii](bootmiirecover) (nur Originale Wii).
</div>

As stated earlier, if you have BootMii installed as boot2, it will launch every time you start your console. If you would like to change this, you can use the app [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor). Or, you can edit `sd:/bootmii/bootmii.ini` manually.
{: .notice--info}

Zwei Dateien wurden im Hauptverzeichnis deiner SD-Karte erstellt: `nand.bin` und `keys.bin`. `nand.bin` ist der interne Speicher deiner Wii, während `keys.bin` die Schlüssel deiner Konsole sind.
{: .notice--info}

[Weiter zur Priiloader Installation](priiloader)<br> Priiloader fügt eine sekundäre Schutzstufe gegen Bricks hinzu und wird sehr empfohlen, auch wenn BootMii als boot2 installiert wurde. Es ist besonders wichtig für Benutzer von BootMii auf IOS.
{: .notice--info}
