---
title: "Restaurare BootMii (RestoreMii)"
---

Dacă reușești să intri în BootMii, intră în schimb în Homebrew Channel și încearcă să [identifici ce a cauzat brick-ul](bricks) și să îl inversezi.

Acest ghid îți va oferi instrucțiuni despre cum să restaurezi un backup a memoriei NAND folosind BootMii. Te rugăm să reții că aceasta este de obicei o <strong>ultimă metodă</strong> de a repara un brick dacă ai unul, iar dacă nu îți rezolvă problema, va trebui să soliciți ajutor. Dacă încă poți să intri în BootMii, încearcă să intri în schimb în Homebrew Channel pentru a încerca să [identifici și să repari brick-ul](bricks) folosind alte metode.

Dacă ai BootMii instalat ca boot2, va trebui să repornești consola pentru a rula BootMii. Sari peste pașii 1 și 2 dacă acesta este cazul.
{: .notice--info}

Dacă ecranul rămâne negru și lumina albastră a cititorului de discuri clipește după ce ai deschis BootMii, fișierele BootMii lipsesc din cardul tău SD. Descarcă [acest fișier zip](https://static.hackmii.com/bootmii_sd_files.zip) și extrage-l în rădăcina cardului tău SD și apoi mai încearcă o dată.
{: .notice--warning}

Consolele Wii Family Edition (Consolele Wii fără porturi GameCube) NU POT restaura backup-uri ale memoriei NAND. Acest lucru este datorat lipsei de porturi GameCube care sunt necesare pe consolele Wii non-boot2 pentru a introduce codul de confirmare a restaurării. Pentru ajutor suplimentar, te rugăm să soliciți ajutor.
{: .notice--danger}

NU restaura un backup de memorie NAND neverificat sau unul care nu provine din consola ta Wii, acesta s-ar putea să provoace un BRICK MAI GRAV. Același lucru este valabil și pentru cardurile SD defecte.
{: .notice--danger}

### Instrumente necesare

* Un backup al memoriei NAND creat mai înainte de [BootMii](bootmii)

### Restaurarea informațiilor individuale dintr-un backup a memoriei NAND

There is likely a much safer and faster way to bring individual data back to your Wii, likely involving the use of Dolphin Emulator.

For example, if you want to restore your Wii Message Board data, use Dolphin to import your NAND backup. In Dolphin, go to `File -> Open User Folder`, and find `Wii/title/00000001/00000002/data/cdb.vff`, copy it to your SD card, and use [WiiXplorer](https://oscwii.org/library/app/wiixplorer) to restore it in the corresponding location.

If you want to restore a game's save data, use Dolphin to import your NAND backup, use `Tools > Export All Wii Saves` to export all your saves to your SD card, and use Data Management to move it to your Wii.

### Important preliminary notes

+ If you have not done anything to cause a brick (or you're starting up your Wii after a long time), then it is probably a [Wi-Fi Brick](bricks#wi-fi-brick).

+ If you have BootMii as IOS installed, RestoreMii will prompt you for the Konami code via a GameCube Controller.

+ You must use the POWER (right) and RESET (select) buttons on your console, or a GameCube controller plugged into port 1 to navigate BootMii. To navigate with a GameCube controller, click left/right on the +Control Pad on a GameCube controller. To select, press A.

### Instrucțiuni

1. Rulează Homebrew Channel.
1. Apasă pe butonul HOME, apoi alege "Launch BootMii".
    + If the Homebrew Channel is inaccessible and you have Priiloader installed, you may also access it on boot and select `BootMii IOS` to load BootMii.

    ![](/images/bootmii/BootMii_HBC.png)

1. Alege butonul Opțiuni (iconița cu rotițele).

    ![](/images/bootmii/BootMii_Gears.png)

1. Select the RestoreMii button.

    ![](/images/bootmii/BootMii_Restore.png)

1. BootMii will inform you that it will run in SIMULATION mode, you can press A or Reset to continue.

    ![](/images/bootmii/BootMii_NAND_Simulation.png)

1. If BootMii is installed as IOS, input the Konami code on your GameCube controller: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START

    ![](/images/bootmii/BootMii_NAND_Konami.png)

1. BootMii will run through the restore process as a simulation, detailing what will be erased and rewritten. Once this is done, you have one final chance to back out of the restoration process. Otherwise, press START or the Eject button to begin.

    ![](/images/bootmii/BootMii_NAND_Restore.png)

1. After the recovery ended, you should see a text say `I HAZ SUCCESS!`, otherwise `I HAZ FAIL`. Hit any button on your Wii console or GCN controller.

    ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

1. Apasă pe butonul Înapoi (cel cu săgeata) iar apoi apasă ori pe butonul Wii Menu ori pe butonul Homebrew Channel pentru a ieși din BootMii.

    ![](/images/bootmii/BootMii_Return.png)

If you were restoring a NAND backup in order to repair a brick and this did not fix your issue, please consult [the bricks portion](bricks) of this guide.
{: .notice--info}

[Apasă aici pentru a vedea toate ghidurile pe care le poți găsi pe acest site!](site-navigation)
{: .notice--info}
