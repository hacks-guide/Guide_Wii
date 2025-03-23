# BootMii Backup

One of BootMii's most important features is the ability to backup and restore your Wii's NAND storage. We will be going over how to perform a NAND backup. You can then restore from that backup for any reason.
This page will guide you in backing up your Wii's NAND to an SD Card, which you can then use however you like.

::: warning

Du benötigst eine **SD-Karte**, um BootMii überhaupt nutzen zu können, aber besonders, wenn du ein NAND-Backup machen möchtest. If you do not have one, you can skip this page, although it is highly recommended to make a NAND backup if you can.

:::

## Anforderungen

- An SD card with at least 512MB of free space

## Anleitung

::: info

If you have BootMii installed as boot2 you will need to launch BootMii by restarting the console. Überspringe Schritt 1 und 2 in diesem Fall.

:::

1. Schalte deine Konsole ein.

2. Launch the Homebrew Channel, and launch the Load Priiloader app.

3. Press the HOME Button, then select "Launch BootMii".

   ![](/images/bootmii/BootMii_HBC.png)

   ::: warning

   Wenn der `Launch BootMii`-Button nicht im Homebrew-Channel erscheint, [starte den HackMii-Installer nochmal](hackmii) und installiere BootMii.

   :::

   ::: warning

   If the screen stays black and the blue disc drive light is blinking, you are missing the BootMii files on your SD card. Download [this zip file](/assets/files/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.

   :::

4. You should see an image similar to the below now on your screen:

   ![](/images/bootmii/BootMii_Main.png)

   ::: info

   Navigating BootMii is not possible using a Wii Remote.
   You must use the POWER and RESET buttons on your console, or a GameCube controller plugged into port 1.
   Um zwischen Optionen zu navigieren, drücke POWER. To select an option, press RESET.

   :::

5. Select the Options button (the icon with the gears).

   ![](/images/bootmii/BootMii_Gears.png)

6. Wähle den ersten Button links.

   ![](/images/bootmii/BootMii_Backup.png)

7. Ein NAND-Backup wird gestartet. Du kannst den Fortschritt am Bildschirm verfolgen.

   - "Bad Blocks" are normal. Keine Sorge, wenn du einige auf einem NAND Backup siehst.

   ![](/images/bootmii/BootMii_NAND_Backup.png)

8. After this step, it will verify the backup. Idealerweise sollten alle Blöcke nach dem Überprüfungsprozess grün sein.

   - If you have factory bad blocks with uncorrectable pages, these blocks may fail to verify. Solange alle nicht-schlechten Blocks erfolgreich verifiziert wurden, sollte alles gut sein.

   ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

9. To exit BootMii, press the Back button (the one with the arrow) and then you can press either the Wii Menu button or the Homebrew Channel button to exit where you want to.

   ![](/images/bootmii/BootMii_Return.png)

::: info

Hinweis: **ein NAND-Backup wiederherzustellen ist meistens die letzte Lösung**. Es gibt oft bessere Wege, deine Konsole zu unbricken.

Try your best to [identify your brick condition](bricks) and reverse the action that caused it in the first place.

To restore from a NAND backup on your SD card, you can follow the instructions for [RestoreMii](bootmiirecover).
**Family edition Wiis (Wiis without GameCube ports) CANNOT restore NAND backups without hardware modification.**

:::

::: info

Two files will have been created on the root of your SD Card: `nand.bin` and `keys.bin`. `nand.bin` is a backup of your console's internal memory, while `keys.bin` are your console's keys.

:::

## Autobooting

If you were able to install BootMii as boot2, but don't want to load the BootMii screen every time you turn on the Wii, you have the option of setting it to autoboot to the system menu. This should make it so you don't even notice you have BootMii installed as boot2.

1. Open `SD:/bootmii/bootmii.ini` with a text editor, such as notepad.
2. Change `#AUTOBOOT=SYSMENU` to `AUTOBOOT=SYSMENU` by deleting the `#`.
3. Then change `#BOOTDELAY=5` to `BOOTDELAY=1` by deleting the `#` and turning the `5` into a `1`.
4. Save the file and exit.

::: info

You can also use the [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) app on the Wii to change these settings.

:::

## Uploading NAND Backup to Dolphin Emulator

Your NAND backup can be utilized in Dolphin Emulator.

1. Get the latest beta or development release of Dolphin Emulator from the [Dolphin Website](https://dolphin-emu.org/) and install it to your device.
2. Open Dolphin Emulator.
3. Click on the `Tools` tab, scroll down to `Manage NAND`, then select `Import BootMii NAND backup...`.
4. Locate the `nand.bin` found on the root of your SD card and select Open.
5. If it asks for a `keys.bin`, locate it on the root of your SD and select Open.

::: tip

[Continue to Priiloader Installation](priiloader)

Priiloader adds a secondary level of brick protection, and is highly recommended even if BootMii was installed as boot2. Es ist besonders wichtig für Benutzer von BootMii auf IOS.

:::
