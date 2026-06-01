---
outline: false
---

# Creating a NAND Backup (Wii)

In order to protect your Wii from permanant bricks, this guide will instruct you on how to create a NAND backup. Most users will want to select **nanddumper@ios**, with **BootMii** as a backup option for users that can use an SD card.

:::details Importing NAND Backup to Dolphin Emulator

Your NAND backup can be utilized in Dolphin Emulator, if you choose to do so.

1. Get the latest release of Dolphin Emulator from the [Dolphin Website](https://dolphin-emu.org/) and install it to your device.
2. Deschide Dolphin Emulator.
3. Click on the `Tools` tab, scroll down to `Manage NAND`, then select `Import BootMii NAND backup...`.
4. Locate the `nand.bin` found on the root of your SD card and select Open.
5. If it asks for a `keys.bin`, locate it on the root of your SD and select Open.

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

## Instrumente necesare

- A USB drive or SD card formatted as FAT32, with a minimum 512MB of free space (1GB or more recommended)
- [nanddumper@ios](https://oscwii.org/library/app/nanddumper_ios)

## Instrucțiuni

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

[Continue to Priiloader Installation](priiloader)

Priiloader adds a secondary level of brick protection, and is highly recommended even if BootMii was installed as boot2. Acesta este deosebit de important pentru utilizatorii de BootMii ca IOS.

If you are on Wii mini, this is your primary means of brick protection.

:::

::::

::::tab BootMii (backup method)

On Wii consoles with an SD card slot, BootMii allows for backing up and restoring your Wii's NAND storage. This section will guide you in backing up your Wii's NAND to an SD Card, which you can then use however you like.

Please read the below information before proceeding further.

::: info

**Important Information**

- After the completion of this guide, two files will have been created on the root of your SD Card: `nand.bin` and `keys.bin`. `nand.bin` is a backup of your console's internal memory, while `keys.bin` are your console's keys.

- Dacă ai BootMii instalat ca boot2, va trebui să repornești consola pentru a rula BootMii. Sari peste pașii 1 și 2 dacă acesta este cazul.

- You must use the buttons on your console or a GameCube controller plugged into port 1 to navigate BootMii. To navigate with a GameCube controller, click left/right on the +Control Pad to move, and press A to select. To navigate with your console buttons, press `POWER` to move right, and press `RESET` to select.

- Please note that **restoring a NAND backup is usually a last resort**. With that said, you can use the [BootMii Recovery guide](bootmiirecover) to restore your NAND backup, where more information is provided about the risks and alternatives.

- Family Edition Wiis CANNOT restore NAND backups without hardware modification. Acest lucru este datorat lipsei de porturi GameCube care sunt necesare pe consolele Wii non-boot2 pentru a introduce codul de confirmare a restaurării.

:::

::: danger

**Important Warnings**

- This is intended to be a backup option, as BootMii is slower than nanddumper@ios. You need an **SD card** to use BootMii. If you do not have an SD card on hand right now, but instead have a usable USB drive, you can use the nanddumper@ios guide instead.

- If the `Launch BootMii` button does not appear in the Homebrew Channel, [re-launch the HackMii Installer](hackmii) and install BootMii.

- Dacă ecranul rămâne negru și lumina albastră a cititorului de discuri clipește după ce ai deschis BootMii, fișierele BootMii lipsesc din cardul tău SD. Download [this zip file](/assets/files/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.

- BootMii cannot be used on the Wii mini without hardware modification. Use **nanddumper@ios** if you are a Wii mini user.

:::

## Instrumente necesare

- Un card SD cu cel puțin 512MB de spațiu liber (1GB sau mau mult este recomandat)
- [BootMii](hbc)

## Instrucțiuni

1. Pornește consola.

2. Launch the Priiloader installer.

3. Apasă pe butonul HOME, apoi alege "Launch BootMii".

   ![](/images/bootmii/BootMii_HBC.png)

4. Ar trebui să vezi o imagine asemănătoare cu cea de mai jos acum pe ecranul tău:

   ![](/images/bootmii/BootMii_Main.png)

5. Alege butonul Opțiuni (iconița cu rotițele).

   ![](/images/bootmii/BootMii_Gears.png)

6. Alege primul buton din stânga.

   ![](/images/bootmii/BootMii_Backup.png)

7. Un backup a memoriei NAND va începe. Poți vedea progresul pe ecran.

   - "Bad Blocks"-urile sunt normale și în mare parte provin din fabrică. Nu te îngrijora dacă vezi unele că apar într-un backup NAND.

   ![](/images/bootmii/BootMii_NAND_Backup.png)

8. Odată ce ultimul pas este completat, BootMii va verifica backup-ul. Ideal, toate blocurile ar trebui să fie verzi după procesul de verificare.

   - Dacă ai bad block-uri cu pagini necorectabile din fabrică, aceste blocuri s-ar putea să eșueze verificarea. As long as all non-bad blocks are successfully verified, this should be fine.

   ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

9. Apasă pe butonul Înapoi (cel cu săgeata) iar apoi apasă ori pe butonul Wii Menu ori pe butonul Homebrew Channel pentru a ieși din BootMii.

   ![](/images/bootmii/BootMii_Return.png)

---

::: tip

[Continue to Priiloader Installation](priiloader)

Priiloader adds a secondary level of brick protection, and is highly recommended even if BootMii was installed as boot2. Acesta este deosebit de important pentru utilizatorii de BootMii ca IOS.

:::

::::

:::::
