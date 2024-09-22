---
title: "ModMii"
---

{% include toc title="Tabel de Conținut" %}

Acest Program NU vine cu garanție, deci ești responsabil pentru orice daună potențială întâmplată consolei tale Wii.
{: .notice--warning}

Acest program NU este intenționat de a fi folosit pentru vWii sau Wii mini. Orice folosire pe vWii sau Wii mini este netestată.
{: .notice--warning}

ModMii este un instrument de Wii hacking complet pentru Windows creat de XFlak care are diferite unelte utile pentru modare. Aceasta poate îndeplini următoarele obiective:

+ Hacking consola pentru prima dată sau re-hack-urează
+ Verifică și actualizează softmod-urile ne-actualizate
+ Repară problema "cu sus în jos" pentru Homebrew Channel
+ Rulează homebrew fără a face modificări la NAND-ul Wii-ului
+ Descarcă homebrew
+ Și mai multe!

### Prezentare ModMii

Există două moduri diferite de a folosi ModMii. Există ModMii Classic, care folosește o interfață a liniei de comandă, dar are toate caracteristicile disponibile pentru program. Skin ModMii are o interfață grafică de utilizator (GUI), pe de altă parte, dar are mai puține opțiuni disponibile utilizatorului. Dacă dorești să modezi pur și simplu Wii pentru prima dată, ModMii Skin ar trebui să fie suficient. Altfel, recomandăm folosind ModMii Classic acolo unde este posibil. <br> Graficul de mai jos vă va ajuta să determinați ce se poate face în fiecare interfață.

| Unelte                                                       | ModMii Classic | ModMii Skin |
| ------------------------------------------------------------ | -------------- | ----------- |
| Programul ModMii                                             | ✅              | ✅           |
| Programul de Actualizare SysCheck                            | ✅              | ⛔           |
| USB Loader Setup Wizard (Asistent de configurare USB Loader) | ✅              | ✅           |
| Programul de Soluții HackMii                                 | ✅              | ✅           |
| Programul de Abstinență                                      | ✅              | ✅           |
| Region Change Wizard (Asistent Schimbării Regiunii)          | ✅              | ✅           |
| SNEEK/EmuNAND Installation (Instalare SNEEK/EmuNAND)         | ✅              | ✅           |
| Open File Function (Deschide Funcția Fișierului)             | ✅              | ⛔           |
| Load Download Queue (Încarcă Lista cu Descărcări)            | ✅              | ✅           |
| Download Page (Pagina Descărcare) 1/2/3/4                    | ✅              | ⛔           |
| Advanced Downloads (Descărcări Avansate)                     | ✅              | ⛔           |
| Load Download Queue (Încarcă Lista cu Descărcări)            | ✅              | ⛔           |
| Construiește fișiere de configurare                          | ✅              | ⛔           |
| Curățare fișier & Actualizator Aplicații                     | ✅              | ⛔           |

<details id="Modmii-Tools" class="notice--info" markdown="1">
<summary><a>Faceți clic aici pentru o explicație detaliată a fiecărui tool.</a></summary>

| Unealtă                                                                     | Descriere                                                                                                                                                                                                                                                                                                |
| --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| W = ModMii Wizard <-- Start Here to Mod Your Wii!                           | Această opțiune poate fi folosită să îți modezi consola Wii pentru prima dată sau sa re-modezi un Wii care a fost modificat în trecut.                                                                                                                                                                   |
| SU = SysCheck Updater Wizard (update only your outdated softmods)           | Această opțiune este folositoare pentru persoanele care au modificări vechi instalate în consola Wii precum DarkCorp/CIOSSPAGHETTI care pot cauza probleme cu cel mai recent firmware custom homebrew.                                                                                                   |
| U = USB-Loader Setup Wizard                                                 | Această opțiune îți va seta USB loader-ul să poată rula backup-urile de disc de pe un card SD sau un hard disk USB. Această opțiune nu este necesară dacă se utilizează asistentul ModMii.                                                                                                               |
| H = HackMii Solutions Wizard (Upside-Down HBC\No Vulnerable IOS Fix)       | Această opțiune este utilă pentru persoanele care întâmpină dificultăți în a face HackMii Installer să funcționeze sau să aibă homebrew channel afișat cu sus în jos.                                                                                                                                    |
| AW = Abstinence Wizard (Non-permanent Wii Hacks)                            | Această opțiune îți permite să deschizi homebrew pe Wii fără a face modificări permanente la NAND-ul de sistem.                                                                                                                                                                                          |
| RC = Region Change Wizard                                                   | Această opțiune poate fi folosită pentru a schimba regiunea consolei tale Wii fără să cauzezi un brick, iar acesta este cel mai bun ghid de schimbare a regiunii existent pe internet.                                                                                                                   |
| S = SNEEK Installation, EmuNAND Builder\Modifier, Game Bulk Extractor      | Această opțiune te va ajuta să setezi un EmuNAND (numit și neek2o) cum trebuie în cardul tău SD sau într-un stick USB. Beneficiile pentru EmuNAND includ spațiu de stocare suplimentar pentru salvarea jocurilor sau canalelor, și pornind homebrew fără a face modificări permanente la NAND de sistem. |
| F = open a File or Folder with ModMii for many more functions!              | Această opțiune este o unealtă avansata folositoare în special dezvoltatorilor.                                                                                                                                                                                                                          |
| 1 = Download Page 1 (System Menus, IOSs, MIOSs, Channels, etc.)             | Această opțiune deschide prima pagină de descărcare care include majoritatea dintre părțile cheie pentru Wii System Menu (descărcate din NUS).                                                                                                                                                           |
| 2 = Download Page 2 (Apps, USB-Loader Files, CheatCodes, etc.)              | Această opțiune deschide a doua pagină de descărcare care include exploit-uri și aplicații folositoare pentru consola ta Wii precum niște programe de calculator.                                                                                                                                        |
| 3 = Download Page 3 (System Menu Themes)                                    | Această opțiune deschide a treia pagină de descărcare care include niște teme de fundal pentru meniul de sistem și lucruri necesare pentru a instala teme de fundal pentru meniul de sistem (fișierele .app de bază sunt descărcate din NUS).                                                            |
| 4 = Download Page 4 (cIOSs and cMIOSs)                                      | Această opțiune deschide a patra pagină de descărcare care include cIOS-uri și cMIOS-uri pentru a fi folosite în USB loadere.                                                                                                                                                                            |
| A = Advanced Downloads and Forwarder DOL\ISO Builder                       | Această opțiune îți permite să descarci orice IOS și cIOS și să construiești forwarderi (redirectori) DOL/ISO customizate. Destinat doar utilizatorilor avansați.                                                                                                                                        |
| L = Load Download Queue                                                     | Această opțiune încarcă lista de descărcare incluse sau salvate anterior.                                                                                                                                                                                                                                |
| C = Build Config Files for Bootmii, Wad Manager or Multi-Mod Manager        | Această opțiune îți permite să creezi fișiere de configurare pentru BootMii, Wad Manager și Multi-Mod Manager.                                                                                                                                                                                           |
| FC = File Cleanup & App Updater: Update Apps and\or remove un-needed files | Această opţiune elimină fişierele ce nu sunt necesare pe cardul SD sau Hard Drive după ce ai terminat softmodării consolei Wii.                                                                                                                                                                          |

</details><br>

Atunci când se utilizează ModMii, este important să reții că va genera un ghid personalizat pentru tine, în funcție de opțiunile pe care le selectezi. Din acest motiv, acest ghid nu se va concentra pe cum să vă modați consola Wii, așa cum ModMii se ocupă de această funcție. În schimb, va fi un ghid de pornire rapid care vă va arăta cum să îl utilizezi eficient cu cele mai comune opţiuni.

### Instalare ModMii

#### Instrumente necesare

* Un Wii
* Un stick USB sau un card SD
* Un calculator Windows (va merge și o Mașină Virtuală)
* [ModMii](https://modmii.github.io/)

#### Instalare

1. Mergi la site-ul [ModMii](https://modmii.github.io) și scrolează în jos la secțiunea Descărcări. Aici, selectează opțiunea `Installer`. Browserul tău poate identifica installer-ul ca malware, dar este doar un **fals pozitiv**.

    ![](/images/modmii/modmii-download.png)

2. Deschide fișierul `ModMiiInstaller.exe` și treci prin procesul de instalare.

    ![](/images/modmii/modmii-install.png)

### Folosind asistentul ModMii

Asistentul ModMii este un instrument care poate să îți softmodeze consola Wii de la A la Z, descărcarea tuturor fişierelor necesare şi apoi generarea unui ghid pe care îl poți folosi pentru a implementa softmod-ul. Acest tool poate fi folosit și pentru a suprascrie softmod-urile existente pe un Wii modat anterior.

1. Deschide ModMii Skin sau ModMii Classic și selectează opțiunea ModMii Wizard din partea de sus a listei.

    ![](/images/modmii/modmii-wizard-1.png)

1. Răspundeți `Yes` la prima întrebare, dacă nu ai o idee foarte specifică despre ceea ce vrei să faci sau să actualizezi la Wii-ul tău.

    ![](/images/modmii/modmii-wizard-2.png)

1. Selectează versiunea curentă al System Menu, urmat de Regiunea sistemului, urmând instrucțiunile din program. Dacă încă ești confuz, verifică opțiunea de mai jos la fiecare ecran pentru video-tutoriale.

    ![](/images/modmii/modmii-wizard-3.png)

1. Alege exploit-ul pe care dorești să-l folosești pentru a-ți modifica sistemul Wii. Exploit-urile de mai jos sunt evidențiate de-a cursul acestui site, dar în cele mai multe cazuri recomandăm să folosești Wilbrand dacă ai un card SD la îndemână.

    ![](/images/modmii/modmii-wizard-4.png)

1. Dacă ai ales opțiunea Wilbrand în pasul anterior, introdu adresa MAC a consolei tale Wii. Dacă nu știi cum să verifici adresa MAC a consolei Wii, introdu `Help` în caseta de text pentru un videoclip instrucțional.

    ![](/images/modmii/modmii-wizard-5.png)

1. Alege versiunea de System Menu dorită din listă.

    ![](/images/modmii/modmii-wizard-6.png)

1. Alege dacă dorești sau nu să instalezi oricare dintre canalele afișate - acest pas este opțional.

    ![](/images/modmii/modmii-wizard-7.png)

1. Alege dacă dorești sau nu să instalezi o temă de fundal Wii personalizată, cu alegerea a trei efecte de temă. Toate efectele se ocupă cu cât de mult se învârte conturul când ai cursorul peste un Canal Wii.

    ![](/images/modmii/modmii-wizard-8.png)

1. Alege dacă dorești sau nu să configurezi un USB Loader pentru consola ta Wii.

    ![](/images/modmii/modmii-wizard-9.png)

1. Dacă ai ales `Yes` în meniul USB Loader, alege care USB Loader dorești să-l folosești. Dacă ai ales unul individual, noi recomandăm fie USB Loader GX sau WiiFlow deoarece ambele sunt acoperite de acest site, sau poți descărca opțional fiecare opțiune.

    ![](/images/modmii/modmii-wizard-10.png)

1. Dacă ai ales `Yes` în meniul USB Loader, alege unde dorești să ți se salveze fișierele USB Loader.

    ![](/images/modmii/modmii-wizard-11.png)

1. Verifică unde dorești sa salvezi fișiere pentru Cardul tău SD sau/și unitatea ta USB.

    ![](/images/modmii/modmii-wizard-12.png)

1. Verifică dacă setările sunt corecte iar apoi apasă `Finish`. Odată ce apeși butonul, ModMii va începe să proceseze și să descarce fișiere în fundal și va genera și deschide automat un ghid pentru tine. De aici, ar trebui să urmezi ghidul generat de ModMii.

    ![](/images/modmii/modmii-wizard-13.png)

### Programul de Actualizare SysCheck

Programul de Actualizare SysCheck este o unealtă care folosește aplicația homebrew [SysCheck](syscheck) pentru a analiza orice modificare pe consola ta Wii, în special IOS și cIOS. Acesta acceptă un fișier `syscheck.csv` generat de aplicație și apoi oferă orice actualizare necesară conform nevoilor.

1. Deschide ModMii Classic și intră în `SU` pentru a deschide SysCheck Updater Wizard.

    ![](/images/modmii/syscheck-wizard-1.png)

1. Urmează instrucțiunile din fereastră dacă nu ai deja un log SysCheck, iar apoi trage fișierul `syscheck.csv` din Windows Explorer în fereastră. Asta va insera locația fișierul, de unde poți apăsa Enter.

    ![](/images/modmii/syscheck-wizard-2.png)

1. Programul va analiza fișierul SysCheck și va oferi opțiuni pentru tine în funcție de ce vede. În acest exemplu, modificările de pe consola Wii erau actualizate, însă existau câteva IOS-uri inutile care pot fi făcute un "stub". Dacă dorești să faci aceste modificări consolei tale Wii, introdu `Y` și apasă Enter. De aici, ar trebui să urmezi ghidul generat de ModMii.

    ![](/images/modmii/syscheck-wizard-3.png)

### Programul de Soluții HackMii

Programul de Soluții HackMii este o unealtă care repară probleme ce pot apărea din chestii precum Darkcorp/CIOSSPAGHETTI prin instalarea unor IOS-uri curate. Exemple de probleme ce pot apărea datorită acestora sunt afișate mai jos:

+ Instalatorul HackMii nu afișează "Press (1) to continue"
+ Instalatorul HackMii spune "no vulnerable IOS found!"
+ Homebrew Channel este afișat cu susul în jos

1. Deschide ModMii Skin sau ModMii Classic și alege opțiunea HackMii Solutions.

    ![](/images/modmii/hackmii-wizard-1.png)

1. Selectează versiunea curentă al System Menu, urmat de Regiunea sistemului, urmând instrucțiunile din program. Dacă încă ești confuz, verifică opțiunea de mai jos la fiecare ecran pentru video-tutoriale.

    ![](/images/modmii/hackmii-wizard-2.png)

1. Alege exploit-ul pe care dorești să-l folosești pentru a-ți modifica sistemul Wii. Exploit-urile de mai jos sunt evidențiate de-a cursul acestui site, dar în cele mai multe cazuri recomandăm să folosești Wilbrand dacă ai un card SD la îndemână.

    ![](/images/modmii/hackmii-wizard-3.png)

1. Dacă ai ales opțiunea Wilbrand în pasul anterior, introdu adresa MAC a consolei tale Wii. Dacă nu știi cum să verifici adresa MAC a consolei Wii, introdu `Help` în caseta de text pentru un videoclip instrucțional.

    ![](/images/modmii/hackmii-wizard-4.png)

1. Verifică unde dorești sa salvezi fișiere pentru Cardul tău SD sau/și unitatea ta USB.

    ![](/images/modmii/modmii-wizard-12.png)

1. Verifică dacă setările sunt corecte iar apoi apasă `Finish`. Odată ce apeși butonul, ModMii va începe să proceseze și să descarce fișiere în fundal și va genera și deschide automat un ghid pentru tine. De aici, ar trebui să urmezi ghidul generat de ModMii. Odată ce termini acest ghid, este recomandat să folosești [Programul de Actualizare SysCheck](#syscheck-updater-wizard) pentru a repara alte modificări problematice aflate în consola ta Wii.

    ![](/images/modmii/hackmii-wizard-5.png)

[Click here to view all of our tutorials that you can find on this website!](site-navigation)
{: .notice--info}
