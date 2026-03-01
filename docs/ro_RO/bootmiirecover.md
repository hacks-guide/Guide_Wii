# Restaurare BootMii

Acest ghid îți va oferi instrucțiuni despre cum să restaurezi un backup a memoriei NAND folosind BootMii.

Please read the information below before proceeding further.

:::details Important Information

- Family Edition Wiis and Wii minis **CANNOT** restore NAND backups. Acest lucru este datorat lipsei de porturi GameCube care sunt necesare pe consolele Wii non-boot2 pentru a introduce codul de confirmare a restaurării. For additional help, please seek support on the [Nintendo Homebrew discord server](https://discord.gg/C29hYvh).

- Dacă ai BootMii instalat ca boot2, va trebui să repornești consola pentru a rula BootMii. Sari peste pașii 1 și 2 dacă acesta este cazul.

- If you have not done anything to cause a brick (or you're starting up your Wii after a long time), then it is likely a [Wi-Fi Brick](bricks#wi-fi-brick).

- If you were restoring a NAND backup in order to repair a brick and this did not fix your issue, please consult [the bricks portion](bricks) of this guide to locate your issue.

- You must use the buttons on your console or a GameCube controller plugged into port 1 to navigate BootMii. To navigate with a GameCube controller, click left/right on the +Control Pad to move, and press A to select. To navigate with your console buttons, press `POWER` to move right, and press `RESET` to select.

- Dacă ai BootMii ca IOS instalat, RestoreMii te va pune să introduci codul Konami folosind un Controller GameCube. This is explained in Step 6.

:::

::: danger

**Important Warnings**

- This is intended to be a **last resort** method of repairing an issue on your Wii. Please verify that you can enter the Homebrew Channel before restoring a backup, as most issues can be resolved from here. Please additionally join [Nintendo Homebrew discord server](https://discord.gg/C29hYvh) for help with diagnosing and resolving your issue in conjunction with the [bricks guide](bricks).

- Dacă ecranul rămâne negru și lumina albastră a cititorului de discuri clipește după ce ai deschis BootMii, fișierele BootMii lipsesc din cardul tău SD. Download [this zip file](https://static.hackmii.com/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.

- DO NOT restore an unverified NAND backup, or a NAND backup that is not from your Wii. This may lead to a WORSE BRICK. The same goes for restoring backups off of faulty SD cards.

:::

## Restaurarea datelor individuale dintr-un backup a memoriei NAND

If you would like to restore individual data from your NAND backup, a much safer and faster way to do this using Dolphin Emulator.

De exemplu, dacă vrei să restaurezi datele din Wii Message Board, folosește Dolphin pentru a importa backup-ul NAND. In Dolphin, go to `File` > `Open User Folder`, and find `Wii/title/00000001/00000002/data/cdb.vff`, copy it to your SD card, and use [WiiXplorer](https://oscwii.org/library/app/wiixplorer) to restore it in the corresponding location.

If you want to restore a game's save data, use Dolphin to import your NAND backup, use `Tools` > `Export All Wii Saves` to export all your saves to your SD card, and use Data Management to move it to your Wii.

## Requirements

- A Wii with BootMii as IOS or BootMii as boot2 installed
- An earlier NAND Backup for your specific Wii made by [BootMii](bootmii)

## Instructions

1. Launch the Priiloader installer.

2. Apasă pe butonul HOME, apoi alege "Launch BootMii".

   - If the Homebrew Channel is inaccessible and you have Priiloader installed, you may also access it on boot and select `BootMii IOS` to load BootMii.

   ![](/images/bootmii/BootMii_HBC.png)

3. Alege butonul Opțiuni (iconița cu rotițele).

   ![](/images/bootmii/BootMii_Gears.png)

4. Alege butonul RestoreMii.

   ![](/images/bootmii/BootMii_Restore.png)

5. BootMii te va informă că va rula în modul SIMULATION, poți să apeși A sau Reset pentru a continua.

   ![](/images/bootmii/BootMii_NAND_Simulation.png)

6. Dacă BootMii este instalat ca IOS, introdu codul Konami pe controller-ul tău GameCube: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START

   ![](/images/bootmii/BootMii_NAND_Konami.png)

7. BootMii va simula procesul de restaurare, detaliind ce va fi șters și rescris. Odată ce se finalizează, mai ai o ultimă șansă să anulezi procesul de restaurare. Altfel, apasă START sau butonul EJECT pentru a începe.

   ![](/images/bootmii/BootMii_NAND_Restore.png)

8. After the recovery ended, you should see a text say `I HAZ SUCCESS!`, otherwise `I HAZ FAIL`. Apasă orice buton de pe consola ta Wii sau controller-ul GameCube.

   ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

9. Apasă pe butonul Înapoi (cel cu săgeata) iar apoi apasă ori pe butonul Wii Menu ori pe butonul Homebrew Channel pentru a ieși din BootMii.

   ![](/images/bootmii/BootMii_Return.png)

---

::: tip

[Click here to go back to the site index.](site-navigation)

:::
