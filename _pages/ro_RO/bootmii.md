---
title: "Backup BootMii"
---

{% include toc title="Tabel de Conținut" %}

BootMii îți permite să creezi un backup și să restaurezi memoria NAND a consolei tale Wii. Această pagină îți va arăta cum să salvezi un backup a memoriei NAND a consolei Wii într-un Card SD pe care îl vei putea folosi pentru orice dorești.

Ai nevoie de un **card SD** pentru a folosi BootMii în general dar în special pentru a crea un backup al memoriei NAND. Dacă nu ai un card SD la îndemână poți sări această pagină, însă este FOARTE RECOMANDAT să te întorci la această pagină mai încolo pentru a crea un backup a memoriei NAND.
{: .notice--warning}

### Instrumente necesare

* Un card SD cu cel puțin 512MB de spațiu liber (1GB sau mau mult este recomandat)

### Instrucțiuni

Dacă ai BootMii instalat ca boot2, va trebui să repornești consola pentru a rula BootMii. Sari peste pașii 1 și 2 dacă acesta este cazul.
{: .notice--info}

1. Pornește consola.
1. Rulează Homebrew Channel.
1. Apasă pe butonul HOME, apoi alege "Launch BootMii".

    ![](/images/bootmii/BootMii_HBC.png)

    Dacă butonul `Launch BootMii` nu apare în Homebrew Channel, [rulează HackMii Installer din nou](hackmii) și instalează BootMii.
    {: .notice--warning}

    Dacă ecranul rămâne negru și lumina albastră a cititorului de discuri clipește după ce ai deschis BootMii, fișierele BootMii lipsesc din cardul tău SD. Descarcă [acest fișier zip](/assets/files/bootmii_sd_files.zip) și extrage-l în rădăcina cardului tău SD și apoi mai încearcă o dată.
    {: .notice--warning}

1. Ar trebui să vezi o imagine asemănătoare cu cea de mai jos acum pe ecranul tău:

    ![](/images/bootmii/BootMii_Main.png)

    Navigarea prin BootMii nu este posibilă folosind un Wii Remote. Va trebui să folosești butoanele POWER și RESET de pe consola ta sau un controller GameCube conectat în portul 1. Pentru a naviga printre opțiuni, apasă POWER. Pentru a alege o opțiune, apasă RESET.
    {: .notice--info}

1. Alege butonul Opțiuni (iconița cu rotițele).

    ![](/images/bootmii/BootMii_Gears.png)

1. Alege primul buton din stânga.

    ![](/images/bootmii/BootMii_Backup.png)

1. Un backup a memoriei NAND va începe. Poți vedea progresul pe ecran.
    + "Bad Blocks"-urile sunt normale și în mare parte provin din fabrică. Nu te îngrijora dacă vezi unele că apar într-un backup NAND.

    ![](/images/bootmii/BootMii_NAND_Backup.png)

1. Odată ce ultimul pas este completat, BootMii va verifica backup-ul. Ideal, toate blocurile ar trebui să fie verzi după procesul de verificare.
    + Dacă ai bad block-uri cu pagini necorectabile din fabrică, aceste blocuri s-ar putea să eșueze verificarea. Cât timp toate blocurile verzi sunt verificate cu succes, totul ar trebui să fie în regulă.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

1. Apasă pe butonul Înapoi (cel cu săgeata) iar apoi apasă ori pe butonul Wii Menu ori pe butonul Homebrew Channel pentru a ieși din BootMii.

    ![](/images/bootmii/BootMii_Return.png)

<div id="restore-notice" class="notice" markdown="1">
Mențiune: **restaurarea unui backup a memoriei NAND este de obicei o ultimă soluție**. De multe ori există opțiuni mai bune pentru a-ți repara consola.
Încearcă să [identifici condiția brick-ului](bricks) și să inversezi acțiunea care a cauzat inițial brick-ul.
Pentru a restaura un backup a memoriei NAND de pe cardul tău SD, poți urma instrucțiunile pentru [RestoreMii](bootmiirecover). **Family edition Wiis (Wiis without GameCube ports) CANNOT restore NAND backups without hardware modification.**
</div>

Două fișiere vor fi create în rădăcina Cardului tău SD: `nand.bin` și `keys.bin`. `nand.bin` este un backup a memoriei interne a consolei, în timp ce `keys.bin` sunt cheile consolei tale.
{: .notice--info}

### Autobooting

If you were able to install BootMii as boot2, but dont want to load the BootMii screen every time you turn on the Wii, you have the option of setting it to autoboot to the system menu. This should make it so you don't even notice you have BootMii installed as boot2.

1. Open `SD:/bootmii/bootmii.ini` with a text editor, such as notepad.
1. Change `#AUTOBOOT=SYSMENU` to `AUTOBOOT=SYSMENU` by deleting the `#`.
1. Then change `#BOOTDELAY=5` to `BOOTDELAY=1` by deleting the `#` and turning the `5` into a `1`.
1. Save the file and exit.

You can also use the [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) app on the Wii to change these settings.
{: .notice--info}

[Continuă la Instalarea Priiloader](priiloader)<br> Priiloader adaugă un nivel secundar de protecție anti-brick și este foarte recomandat chiar dacă BootMii a fost instalat ca boot2. Acesta este deosebit de important pentru utilizatorii de BootMii ca IOS.
{: .notice--info}
