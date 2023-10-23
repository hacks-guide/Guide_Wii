---
title: "ModMii"
---

{% include toc title="Tabel de Conținut" %}

Dacă ai nevoie de ajutor pentru orice legat de acest ghid, te rugăm să te alături [serverului de Discord ModMii](https://discord.gg/cMnBRACQwQ).
{: .notice--info}

Acest Program NU vine cu garanție, deci ești responsabil pentru orice daună potențială întâmplată consolei tale Wii.
{: .notice--warning}

Acest program NU este intenționat de a fi folosit pentru vWii sau Wii mini. Orice folosire pe vWii sau Wii mini este netestată.
{: .notice--warning}

ModMii este un program de calculator pentru Windows creat de XFlak care conține numeroase unelte folositoare pentru modificarea consolei și inclusiv niște tutoriale care s-ar putea să nu fie disponibile momentan pe acest website.<br> Poți alege să rulezi în ModMii Skin, ce are o interfață mai ușor de înțeles, sau rulează în ModMii Classic, ce folosește o interfață bazată pe linie de comandă (Command Prompt/Terminal).

Unele opțiuni avansate s-ar putea să nu fie accesibile în ModMii Skin. O listă a funcțiilor prezente în ModMii Classic se poate găsi la sfârșitul acestei pagini.
{: .notice--info}

### Instrumente necesare

* Un Wii
* Un stick USB sau un card SD
* Un calculator Windows (va merge și o Mașină Virtuală)
* [ModMii](https://modmii.github.io/)

Acesta este un ghid rapid de început despre folosirea ModMii pe calculatorul tău Windows.

### Programul ModMii

Poți folosi programul ModMii pentru a modifica orice consolă Wii. <br> Chiar dacă sistemul Wii a mai fost modificat în trecut, ModMii poate înlocui modificări existente dacă îi spui că asta este prima dată când instalezi modificări pentru consolă (chiar dacă nu este).

Poți de asemenea să folosești acest program să îți setezi un USB loader în același timp în loc să trebuiască să folosești programul de instalare USB Loader în viitor.

### Programul de Actualizare SysCheck

[SysCheck](syscheck) este o aplicație homebrew care analizează modificările instalate pe un Wii. <br> Poți să pui un raport SysCheck în ModMii pentru a putea identifica și actualiza modificații vechi.

Poți analiza un SysCheck folosind ModMii prin tragerea fișierului `syscheck.csv` în ModMii.exe. Alternativ, poți lansa Programul de Actualizare SysCheck (`SU`) din meniul principal ModMii pentru a căuta manual fișierul.

### Programul de Soluții HackMii

Programul de Soluții HackMii te poate ajuta să repari probleme ca următoarele:

+ Instalatorul HackMii nu afișează "Press (1) to continue"
+ Instalatorul HackMii spune "no vulnerable IOS found!"
+ Homebrew Channel se afișează cu susul în jos

Acesta va instala IOS-uri curate pentru a permite Instalatorului HackMii să funcționeze cum trebuie.

### Programul de Abstinență

Acest program necesită un card SD.
{: .notice--warning}

Acest program îți permite să te bucuri de multe dintre beneficiile unui Wii modificat fără să instalezi nici o modificare permanentă pe consola ta Wii. Îți va permite să rulezi un exploit care va porni un NAND emulat din stocarea externă în loc să folosești NAND-ul intern al consolei tale Wii.

Poți de asemenea să creezi un backup NAND fără să îți modifici consola Wii deloc prin navigarea la dosarul "Support" al ModMii-ului și lansarea fișierului `Casper2BootMii.bat`. <br> Acesta va salva niște fișiere într-un dosar numit `COPY_TO_SD`; copiază fișierele din înăuntrul acesteia în cardul tău SD și [rulează un exploit](get-started).

Când urmărești una dintre ghidurile de exploit-uri de mai sus, evită să înlocuiești fișierul `boot.elf`.
{: .notice--warning}


<details id="Modmii-Tools" class="notice--info" markdown="1">
<summary><a>Apasă aici pentru o listă întreagă a uneltelor disponibile.</a></summary>

| Unealtă                                                                     | Descriere                                                                                                                                                                                                                                                                                        |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| W = ModMii Wizard <-- Start Here to Mod Your Wii!                           | Această opțiune poate fi folosită să îți modifici consola Wii pentru prima dată sau sa re-modifici un Wii care a fost modificat în trecut.                                                                                                                                                       |
| SU = SysCheck Updater Wizard (update only your outdated softmods)           | Această opțiune este folositoare pentru persoanele care au modificări vechi instalate în consola Wii precum DarkCorp/Ciosspaghetti care pot cauza probleme cu cel mai recent homebrew custom firmware.                                                                                           |
| U = USB-Loader Setup Wizard                                                 | Această opțiune te va ajuta să îți setezi USB loader-ul să poată să ruleze backup-urile de disc de pe un card SD sau un hard disk USB.                                                                                                                                                           |
| H = HackMii Solutions Wizard (Upside-Down HBC\No Vulnerable IOS Fix)       | Această opțiune este folositoare pentru persoanele care întâmpină probleme încercând să facă Instalatorul HackMii să meargă, sau dacă au un homebrew channel cu susul în jos, sau dacă DarkCorp/Ciosspaghetti a fost instalat și nu există niciun homebrew channel.                              |
| AW = Abstinence Wizard (Non-permanent Wii Hacks)                            | Această opțiune este folositoare pentru persoanele care nu vor să facă modificări permanente consolei lor Wii dar doresc să aibă unele dintre beneficiile pe care le oferă homebrew.                                                                                                             |
| RC = Region Change Wizard                                                   | Această opțiune poate fi folosită pentru a schimba regiunea consolei tale Wii fără să cauzezi un brick (acesta este cel mai bun ghid de schimbare a regiunii existent pe internet!).                                                                                                             |
| S = SNEEK Installation, EmuNAND Builder\Modifier, Game Bulk Extractor      | Această opțiune te va ajuta să setezi un EmuNAND (numit și neek2o) cum trebuie în cardul tău SD sau într-un stick USB. Beneficiile EmuNAND-ului includ mai mult spațiu de stocare pentru salvări sau canale. și beneficiul de a nu trebui să faci nicio modificare permanentă consolei tale Wii. |
| F = open a File or Folder with ModMii for many more functions!              | Această opțiune este o unealtă avansata folositoare în special dezvoltatorilor.                                                                                                                                                                                                                  |
| 1 = Download Page 1 (System Menus, IOSs, MIOSs, Channels, etc.)             | Această opțiune deschide prima pagină de descărcare care include majoritatea dintre părțile cheie pentru meniul de sistem (descărcate din NUS).                                                                                                                                                  |
| 2 = Download Page 2 (Apps, USB-Loader Files, CheatCodes, etc.)              | Această opțiune deschide a doua pagină de descărcare care include exploit-uri și aplicații folositoare pentru consola ta Wii precum niște programe de calculator.                                                                                                                                |
| 3 = Download Page 3 (System Menu Themes)                                    | Această opțiune deschide a treia pagină de descărcare care include niște teme de fundal pentru meniul de sistem și lucruri necesare pentru a instala teme de fundal pentru meniul de sistem (fișierele .app de bază sunt descărcate din NUS).                                                    |
| 4 = Download Page 4 (cIOSs and cMIOSs)                                      | Această opțiune deschide a patra pagină de descărcare care include cIOS-uri și cMIOS-uri pentru a fi folosite în USB loadere. Este recomandat să instalezi doar cIOS-urile recomandate dacă nu plănuiești să faci niște testare.                                                                 |
| A = Advanced Downloads and Forwarder DOL\ISO Builder                       | Această opțiune este o unealtă avansată folosită pentru a personaliza descărcările mai bine sau pentru a-ți permite să compilezi un executabil dol folositor pentru forwarder-uri (canale din meniul de sistem care accesează aplicații de Wii).                                                 |
| L = Load Download Queue                                                     | Această opțiune va descărca toate titlurile necesare pentru meniul de sistem Wii (titlurile sunt instalate din NUS)                                                                                                                                                                              |
| C = Build Config Files for Bootmii, Wad Manager or Multi-Mod Manager        | Această opțiune te va ajuta să compilezi fișiere de configurare necesare pentru unele aplicații.                                                                                                                                                                                                 |
| FC = File Cleanup & App Updater: Update Apps and\or remove un-needed files | Această opțiune este folositoare pentru persoanele care vor să își curețe cardul SD sau stickul USB de aplicații considerate vechi, nefolositoare sau depreciate.                                                                                                                                |
| M = ModMii Skin Mode: use your mouse instead of your keyboard!              | Această opțiune va deschide ModMii în modul skin. Unele opțiuni avansate s-ar putea să nu fie disponibile în acest mod.                                                                                                                                                                          |

</details>

<details id="Modmii-Options" class="notice--info" markdown="1">
<summary><a>Apasă aici pentru o listă întreagă a opțiunilor disponibile.</a></summary>

| Opțiune                                                          | Descriere                                                                                                     |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| D = Change Drive letter:                                         | Changes where your SD files are saved to.                                                                     |
| DU = Change Drive letter for USB:                                | Changes where your USB files are saved to.                                                                    |
| d2x = change d2x cIOS version built:                             | Changes the cios version ModMii downloads.                                                                    |
| H = Hermes cIOSs (202 & 222-224) will also be recommended        | Enables Hermes IOS to be recommended and downloaded in the syscheck updater (will be stubbed if disabled).    |
| CM = cMIOS included in recommended cIOSs                         | Enables cMIOS to be recommended and downloaded in the syscheck updater (will install stock MIOS if disabled). |
| E = Extra Brick Protection in ModMii Wizard Guides               | Enables ModMiis Extra Brick Protection IOSes to be recommended and used in the syscheck updater tool.         |
| U = Update IOSs. Wizard/SysCheck-Updater to update Active IOSs   | Updates Existing IOSes to the latest version available on NUS.                                                |
| AU = Auto-Updating downloads will skip update check if cached    | Will skip downloading the files if already in the queue.                                                      |
| FWD = Install USB-Loader Forwarder in ModMii Wizard Guides       | Will include the USB loader forwarder wad file in the USB loader wizard guides.                               |
| PC = PC Programs Save Location                                   | Changes the save location for the downloadable PC programs.                                                   |
| RS = Root Save: Save IOSs\MIOSs to Root instead of WAD Folder   | Saves IOSs\MIOSs to Root instead of WAD Folder.                                                              |
| 1 = Do not Keep 00000001 or NUS Folders for IOSs\MIOSs\SMs etc | Deletes the folder used for compiling the wad file and just gives you the wad file.                           |
| n2o = neek2o - build mod of s\uneek instead of original         | Uses a better modified version of neek2o in the EmuNAND builder.                                              |
| SSD = SNEEK and SNEEK+DI SD Access                               | Allows for SNEEK and SNEEK+DI access on the SD card.                                                          |
| F = Font.bin Colour for SNEEK/UNEEK                              | Changes the font color for neek2o.                                                                            |
| SV = SNEEK Verbose Output                                        | Displays extra information regarding EmuNAND.                                                                 |
| V = Verbose for ModMii Skin & nandBinCheck                       | Displays another window with extra information regarding a nand check.                                        |
| SO = Play sound at Finish                                        | Plays a fun jingle after a successful download.                                                               |
| A = Auto-Update ModMii at program start                          | Will automatically check for updates when ModMii is launched.                                                 |
| N = Check for New versions of ModMii right now                   | Will check online for a ModMii update.                                                                        |

</details>

[Click aici pentru a reveni la indexul site-ului.](site-navigation)
{: .notice--info}
