---
outline: false
---

# Creating a NAND Backup (Wii)

In order to protect your Wii from permanant bricks, this guide will instruct you on how to create a NAND backup. Most users will want to select **nanddumper@ios**, with **BootMii** as a backup option for users that can use an SD card.

:::details Importing NAND Backup to Dolphin Emulator

Your NAND backup can be utilized in Dolphin Emulator, if you choose to do so.

1. Get the latest release of Dolphin Emulator from the [Dolphin Website](https://dolphin-emu.org/) and install it to your device.
2. Öffne Dolphin Emulator.
3. Klicke den `Extras` Tab, scrolle nach unten zu `NAND verwalten`, dann wähle `BootMii-NAND-Sicherung importieren...`.
4. Finde `nand.bin` im Stammverzeichnis deiner SD-Karte und wähle "Öffnen".
5. Wenn es nach einer `keys.bin` fragt, suche sie im Stammverzeichnis deiner SD und wähle "Öffnen".

Note that you will need to rename your NAND dump to the files above if you used **nanddumper@ios**, as described in the below section.

:::

::::: tabs

::::tab nanddumper@ios (dump to USB drive or SD card)

On Wii consoles with a usable USB port or SD card slot, nanddumper@ios allows for backing up your Wii's NAND storage. nanddumper@ios is recommended over BootMii due to its quicker speed in creating a NAND backup. This section will guide you through the process to back up your Wii's NAND, which you can then use however you like.

Please read the below information before proceeding further.

::: info

**Important Information**

- After the completion of this guide, four files will have been created in the directory `/wii/backups` on your USB drive. `DATE_SERIAL_nand_XX.bin` is your NAND backup, and `SERIAL_keys.bin` is the file containing your console keys. `DATE_SERIAL_nand_XX.bin.sha1` and `sha1sums.txt` respectively are files containing checksums to verify the integrity of your backups, and will not be used in an actual NAND restoration.

- Please note that **restoring a NAND backup is usually a last resort**. With that said, you can use the [BootMii Recovery guide](bootmiirecover) to restore your NAND backup, where more information is provided about the risks and alternatives. You can ONLY use BootMii to restore a NAND backup if you have a usable SD card slot, as described below.

- If you are a Wii mini user or DO NOT have a usable SD card slot, you will be UNABLE to restore your NAND backup without hardware modification. This is because [BootMii Restore](bootmiirecover) requires an SD card slot to read the NAND from.

- If you DO NOT have a usable GameCube controller port, you will also be UNABLE to restore your NAND backup without hardware modification. This is because [BootMii Restore](bootmiirecover) requires a GameCube controller port to enter the Konami code with for consoles that do not have BootMii as boot2.

:::

## Anforderungen

- A USB drive or SD card formatted as FAT32, with a minimum 512MB of free space (1GB or more recommended)
- [nanddumper@ios](https://oscwii.org/library/app/nanddumper_ios)

## Steps:

1. Download the recommended `.zip` file from the Open Shop Channel website.

2. Extract the `apps` folder in the archive to the root of your SD card or USB drive.

3. Insert the SD card or USB drive into your Wii, and start the Homebrew Channel. Press `1` and ensure that the device you are using is selected, and then open nanddumper@ios.

   - If you get an **Exception IOS occurred!** error, simply restart your Wii and try again.

   ![](/images/nanddumper@ios/select-hbc.png)

4. nanddumper@ios will start and dump your console keys upon opening, if they are not already on your drive. Press any button that is NOT the `HOME`, `START`, or `EJECT` buttons to begin dumping your console's NAND storage.
   - If you get a **No storage devices are attached** error, ensure that your SD card or USB drive is directly connected to your Wii. If using a USB drive, it should NOT be connected to a USB hub.
   ![](/images/nanddumper@ios/dump-startup.png)

5. Your console's NAND will now begin dumping. Please wait for the NAND dump to finish before proceeding.

   ![](/images/nanddumper@ios/dump-in-progress.png)

6. Once the NAND backup has concluded, press any button to exit nanddumper@ios. Your NAND backup and console keys will be output to your USB drive in directory `/wii/backups/`.

   ![](/images/nanddumper@ios/dump-complete.png)

7. On your computer, ensure that you rename `DATE_SERIAL_nand_XX.bin` to `nand.bin`, and `SERIAL_keys.bin` to `keys.bin`. This ensures that BootMii can properly parse your NAND backup in the event that it needs to be restored.

   ![](/images/nanddumper@ios/rename-files.png)

---

::: tip

[Weiter zur Priiloader Installation](priiloader)

Priiloader fügt eine zweite Ebene des Brick-Schutzes hinzu und wird höchstens empfohlen, auch wenn BootMii als boot2 installiert wurde. Es ist besonders wichtig für Benutzer von BootMii auf IOS.

If you are on Wii mini, this is your primary means of brick protection.

:::

::::

::::tab BootMii (backup method)

On Wii consoles with an SD card slot, BootMii allows for backing up and restoring your Wii's NAND storage. This section will guide you in backing up your Wii's NAND to an SD Card, which you can then use however you like.

Please read the below information before proceeding further.

::: info

**Important Information**

- After the completion of this guide, two files will have been created on the root of your SD Card: `nand.bin` and `keys.bin`. `nand.bin` ist der interne Speicher deiner Wii, während `keys.bin` die Schlüssel deiner Konsole sind.

- Wenn du BootMii als boot2 installiert hast, musst du die Konsole neu starten, um BootMii zu starten. Überspringe Schritt 1 und 2 in diesem Fall.

- You must use the buttons on your console or a GameCube controller plugged into port 1 to navigate BootMii. To navigate with a GameCube controller, click left/right on the +Control Pad to move, and press A to select. To navigate with your console buttons, press `POWER` to move right, and press `RESET` to select.

- Please note that **restoring a NAND backup is usually a last resort**. With that said, you can use the [BootMii Recovery guide](bootmiirecover) to restore your NAND backup, where more information is provided about the risks and alternatives.

- Family Edition Wiis CANNOT restore NAND backups without hardware modification. This is because of the lack of GameCube ports which are required on non-boot2 Wiis to enter the restoration confirmation code.

:::

::: danger

**Important Warnings**

- This is intended to be a backup option, as BootMii is slower than nanddumper@ios. You need an **SD card** to use BootMii. If you do not have an SD card on hand right now, but instead have a usable USB drive, you can use the nanddumper@ios guide instead.

- Wenn die `Launch BootMii`-Schaltfläche nicht im Homebrewkanal erscheint, [starte den HackMii-Installer nochmal](hackmii) und installiere BootMii.

- If the screen stays black and the blue disc drive light is blinking, you are missing the BootMii files on your SD card. Lade [diese Zip-Datei](/assets/files/bootmii_sd_files.zip) herunter und extrahiere sie in das Stammverzeichnis deiner SD-Karte, dann versuche es erneut.

- BootMii cannot be used on the Wii mini without hardware modification. Use **nanddumper@ios** if you are a Wii mini user.

:::

## Anforderungen

- Eine SD-Karte mit mindestens 512MB freiem Speicherplatz (1GB oder mehr empfohlen)
- [BootMii](hbc)

## Steps:

1. Schalte deine Konsole ein.

2. Launch the Homebrew Channel, and launch the Load Priiloader app.

3. Press the HOME Button, then select "Launch BootMii".

   ![](/images/bootmii/BootMii_HBC.png)

4. Du solltest ein ähnliches Bild wie unten auf deinem Bildschirm sehen:

   ![](/images/bootmii/BootMii_Main.png)

5. Select the Options button (the icon with the gears).

   ![](/images/bootmii/BootMii_Gears.png)

6. Wähle den ersten Button links.

   ![](/images/bootmii/BootMii_Backup.png)

7. Ein NAND-Backup wird gestartet. Du kannst den Fortschritt am Bildschirm verfolgen.

   - "Bad Blocks" are normal. Keine Sorge, wenn du einige auf einem NAND Backup siehst.

   ![](/images/bootmii/BootMii_NAND_Backup.png)

8. After this step, it will verify the backup. Idealerweise sollten alle Blöcke nach dem Überprüfungsprozess grün sein.

   - Wenn du 'Factory bad blocks' (schlechte Werkblöcke) mit 'Uncorrectable pages' (nicht korrigierbare Seiten) hast, können diese Blöcke möglicherweise nicht verifiziert werden. Solange alle nicht-schlechte Blöcke erfolgreich verifiziert wurden, sollte alles gut sein.

   ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

9. To exit BootMii, press the Back button (the one with the arrow) and then you can press either the Wii Menu button or the Homebrew Channel button to exit where you want to.

   ![](/images/bootmii/BootMii_Return.png)

---

::: tip

[Weiter zur Priiloader Installation](priiloader)

Priiloader fügt eine zweite Ebene des Brick-Schutzes hinzu und wird höchstens empfohlen, auch wenn BootMii als boot2 installiert wurde. Es ist besonders wichtig für Benutzer von BootMii auf IOS.

:::

::::

:::::
