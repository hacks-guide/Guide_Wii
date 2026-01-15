# Restaurare BootMii

Acest ghid îți va oferi instrucțiuni despre cum să restaurezi un backup a memoriei NAND folosind BootMii. Please bear in mind that this is usually the <strong>last resort</strong> method of repairing a brick if you have one, and if it does not fix your issue, you may have to seek support. If you are still able to enter BootMii, make an attempt to enter the Homebrew Channel instead so that you may attempt to [identify and repair the brick](bricks) using other methods.

::: info

Dacă ai BootMii instalat ca boot2, va trebui să repornești consola pentru a rula BootMii. Sari peste pașii 1 și 2 dacă acesta este cazul.

:::

::: warning

Dacă ecranul rămâne negru și lumina albastră a cititorului de discuri clipește după ce ai deschis BootMii, fișierele BootMii lipsesc din cardul tău SD. Download [this zip file](https://static.hackmii.com/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.

:::

::: danger

Consolele Wii Family Edition (Consolele Wii fără porturi GameCube) NU POT restaura backup-uri ale memoriei NAND. Acest lucru este datorat lipsei de porturi GameCube care sunt necesare pe consolele Wii non-boot2 pentru a introduce codul de confirmare a restaurării. Pentru ajutor suplimentar, te rugăm să soliciți ajutor.

:::

::: danger

NU restaura un backup de memorie NAND neverificat sau unul care nu provine din consola ta Wii, acesta s-ar putea să provoace un BRICK MAI GRAV. Același lucru este valabil și pentru cardurile SD defecte.

:::

## Requirements

- An earlier NAND Backup made by [BootMii](bootmii)

## Restaurarea datelor individuale dintr-un backup a memoriei NAND

În multe cazuri există o metodă mult mai sigură și rapidă de a transfera date individuale înapoi în consola ta Wii cu ajutorul emulatorului Dolphin.

De exemplu, dacă vrei să restaurezi datele din Wii Message Board, folosește Dolphin pentru a importa backup-ul NAND. In Dolphin, go to `File -> Open User Folder`, and find `Wii/title/00000001/00000002/data/cdb.vff`, copy it to your SD card, and use [WiiXplorer](https://oscwii.org/library/app/wiixplorer) to restore it in the corresponding location.

If you want to restore a game's save data, use Dolphin to import your NAND backup, use `Tools > Export All Wii Saves` to export all your saves to your SD card, and use Data Management to move it to your Wii.

## Mențiuni preliminare importante

- If you have not done anything to cause a brick (or you're starting up your Wii after a long time), then it is probably a [Wi-Fi Brick](bricks#wi-fi-brick).

- Dacă ai BootMii ca IOS instalat, RestoreMii te va pune să introduci codul Konami folosind un Controller GameCube.

- Va trebui să folosești butoanele POWER (dreapta) și RESET (alege) de pe consola ta sau un controller GameCube conectat în portul 1 pentru a naviga. Pentru a naviga cu un controller GameCube, apasă stânga/dreapta pe +Control Pad pe un controller GameCube. Pentru a alege, apasă A.

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

::: info

If you were restoring a NAND backup in order to repair a brick and this did not fix your issue, please consult [the bricks portion](bricks) of this guide.

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::
