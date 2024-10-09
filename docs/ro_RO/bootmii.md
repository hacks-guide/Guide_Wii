# Backup BootMii

BootMii îți permite să creezi un backup și să restaurezi memoria NAND a consolei tale Wii.
Această pagină îți va arăta cum să salvezi un backup a memoriei NAND a consolei Wii într-un Card SD pe care îl vei putea folosi pentru orice dorești.

::: warning

You need an **SD card** to use BootMii at all, but especially to create a NAND backup. Dacă nu ai un card SD la îndemână poți sări această pagină, însă este FOARTE RECOMANDAT să te întorci la această pagină mai încolo pentru a crea un backup a memoriei NAND.

:::

## Requirements

- Un card SD cu cel puțin 512MB de spațiu liber (1GB sau mau mult este recomandat)

## Instructions

::: info

Dacă ai BootMii instalat ca boot2, va trebui să repornești consola pentru a rula BootMii. Sari peste pașii 1 și 2 dacă acesta este cazul.

:::

1. Power on your console.

2. Launch the Priiloader installer.

3. Apasă pe butonul HOME, apoi alege "Launch BootMii".

   ![](/images/bootmii/BootMii_HBC.png)

   ::: warning

   If the `Launch BootMii` button does not appear in the Homebrew Channel, [re-launch the HackMii Installer](hackmii) and install BootMii.

   :::

   ::: warning

   Dacă ecranul rămâne negru și lumina albastră a cititorului de discuri clipește după ce ai deschis BootMii, fișierele BootMii lipsesc din cardul tău SD. Download [this zip file](/assets/files/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.

   :::

4. Ar trebui să vezi o imagine asemănătoare cu cea de mai jos acum pe ecranul tău:

   ![](/images/bootmii/BootMii_Main.png)

   ::: info

   Navigarea prin BootMii nu este posibilă folosind un Wii Remote.
   Va trebui să folosești butoanele POWER și RESET de pe consola ta sau un controller GameCube conectat în portul 1.
   Pentru a naviga printre opțiuni, apasă POWER. Pentru a alege o opțiune, apasă RESET.

   :::

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

::: info

Note: **restoring a NAND backup is usually a last resort**. De multe ori există opțiuni mai bune pentru a-ți repara consola.

Try your best to [identify your brick condition](bricks) and reverse the action that caused it in the first place.

To restore from a NAND backup on your SD card, you can follow the instructions for [RestoreMii](bootmiirecover).
**Family edition Wiis (Wiis without GameCube ports) CANNOT restore NAND backups without hardware modification.**

:::

::: info

Two files will have been created on the root of your SD Card: `nand.bin` and `keys.bin`. `nand.bin` is a backup of your console's internal memory, while `keys.bin` are your console's keys.

:::

## Autobootare

If you were able to install BootMii as boot2, but don't want to load the BootMii screen every time you turn on the Wii, you have the option of setting it to autoboot to the system menu. Acest lucru ar trebui făcut astfel încât să nu observi că BootMii este instalat ca boot2.

1. Open `SD:/bootmii/bootmii.ini` with a text editor, such as notepad.
2. Change `#AUTOBOOT=SYSMENU` to `AUTOBOOT=SYSMENU` by deleting the `#`.
3. Then change `#BOOTDELAY=5` to `BOOTDELAY=1` by deleting the `#` and turning the `5` into a `1`.
4. Salvează fișierul, urmat de ieșire.

::: info

You can also use the [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) app on the Wii to change these settings.

:::

## Încărcarea backup-ului NAND în Dolphin Emulator

Backup-ul tău NAND poate fi utilizat în Dolphin Emulator.

1. Get the latest beta or development release of Dolphin Emulator from the [Dolphin Website](https://dolphin-emu.org/) and install it to your device.
2. Deschide Dolphin Emulator.
3. Click on the `Tools` tab, scroll down to `Manage NAND`, then select `Import BootMii NAND backup...`.
4. Locate the `nand.bin` found on the root of your SD card and select Open.
5. If it asks for a `keys.bin`, locate it on the root of your SD and select Open.

::: tip

[Continue to Priiloader Installation](priiloader)

Priiloader adds a secondary level of brick protection, and is highly recommended even if BootMii was installed as boot2. Acesta este deosebit de important pentru utilizatorii de BootMii ca IOS.

:::
