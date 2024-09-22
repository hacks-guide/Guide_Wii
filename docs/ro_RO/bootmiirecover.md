---
title: "Restaurare BootMii"
---

{% include toc title="Table of Contents" %}

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

### Restaurarea datelor individuale dintr-un backup a memoriei NAND

În multe cazuri există o metodă mult mai sigură și rapidă de a transfera date individuale înapoi în consola ta Wii cu ajutorul emulatorului Dolphin.

De exemplu, dacă vrei să restaurezi datele din Wii Message Board, folosește Dolphin pentru a importa backup-ul NAND. În Dolphin, mergi la `File -> Open User Folder` și găsește `Wii/title/00000001/00000002/data/cdb.vff`, copiază-l în cardul tău SD și folosește [WiiXplorer](https://oscwii.org/library/app/wiixplorer) pentru a-l restaura în locația corespunzătoare.

Dacă vrei să restaurezi salvările unui joc, folosește Dolphin pentru a importa backup-ul NAND, folosește `Tools > Export All Wii Saves` pentru a extrage toate salvările tale în cardul tău SD și folosește Data Management pentru a le muta în consola ta Wii.

### Mențiuni preliminare importante

+ Dacă nu ai făcut nimic pentru a cauza un brick (sau dacă ți-ai pornit consola Wii pentru prima dată de ceva timp), atunci este probabil că ai un [Wi-Fi Brick](bricks#wi-fi-brick).

+ Dacă ai BootMii ca IOS instalat, RestoreMii te va pune să introduci codul Konami folosind un Controller GameCube.

+ Va trebui să folosești butoanele POWER (dreapta) și RESET (alege) de pe consola ta sau un controller GameCube conectat în portul 1 pentru a naviga. Pentru a naviga cu un controller GameCube, apasă stânga/dreapta pe +Control Pad pe un controller GameCube. Pentru a alege, apasă A.

### Instrucțiuni

1. Rulează Homebrew Channel.
1. Apasă pe butonul HOME, apoi alege "Launch BootMii".
    + Dacă Homebrew Channel nu este accesibil și ai Priiloader instalat, poți de asemenea să-l accesezi la pornire și să alegi `BootMii IOS` pentru a rula BootMii.

    ![](/images/bootmii/BootMii_HBC.png)

1. Alege butonul Opțiuni (iconița cu rotițele).

    ![](/images/bootmii/BootMii_Gears.png)

1. Alege butonul RestoreMii.

    ![](/images/bootmii/BootMii_Restore.png)

1. BootMii te va informă că va rula în modul SIMULATION, poți să apeși A sau Reset pentru a continua.

    ![](/images/bootmii/BootMii_NAND_Simulation.png)

1. Dacă BootMii este instalat ca IOS, introdu codul Konami pe controller-ul tău GameCube: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START

    ![](/images/bootmii/BootMii_NAND_Konami.png)

1. BootMii va simula procesul de restaurare, detaliind ce va fi șters și rescris. Odată ce se finalizează, mai ai o ultimă șansă să anulezi procesul de restaurare. Altfel, apasă START sau butonul EJECT pentru a începe.

    ![](/images/bootmii/BootMii_NAND_Restore.png)

1. Odată ce restaurarea s-a terminat, ar trebui să vezi un text spunând `I HAZ SUCCESS!`, altfel `I HAZ FAIL`. Apasă orice buton de pe consola ta Wii sau controller-ul GameCube.

    ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

1. Apasă pe butonul Înapoi (cel cu săgeata) iar apoi apasă ori pe butonul Wii Menu ori pe butonul Homebrew Channel pentru a ieși din BootMii.

    ![](/images/bootmii/BootMii_Return.png)

Dacă ai restaurat un backup NAND pentru a repara un brick și asta nu ți-a rezolvat problema, te rugăm să consulți [porțiunea legată de brick-uri](bricks) a acestui ghid.
{: .notice--info}

[Apasă aici pentru a vedea toate ghidurile pe care le poți găsi pe acest site!](site-navigation)
{: .notice--info}
