---
title: "Redeschiderea Instalatorului HackMii"
---

{% include toc title="Tabel de Conținut" %}

Acest ghid este destinat situațiilor unde ai nevoie să rulezi Instalatorul HackMii din nou pentru a actualiza/reinstala Homebrew Channel sau BootMii.

Este de asemenea sigur să [refaci orice exploit](get-started) pentru a te întoarce în Instalatorul HackMii.
{: .notice--info}

### Redeschiderea prin Homebrew Channel

#### De ce ai nevoie

* Homebrew Channel
* Un card SD sau unitate USB formatată ca FAT32/MS-DOS
* [HackMii Installer v1.2](https://bootmii.org/download/)

#### Instrucțiuni

1. Introdu cardul tău SD/unitatea ta USB în calculatorul tău.
1. Extrage HackMii Installer v1.2 în dosarul `apps` din cardul tău SD/unitatea ta USB.
    + Dacă acest dosar nu există, creează-l.
1. Introdu cardul SD/unitatea USB în Wii și rulează aplicația `hackmii_installer_v1.2` din Homebrew Channel.
    + Această aplicație nu va avea o iconiță.

[Continuă la Homebrew Channel și Instalarea BootMii](hbc)
{: .notice--info}

### Redeschiderea prin Priiloader

#### De ce ai nevoie
* Un Wii cu Priiloader (sau Preloader) instalat
* Un card SD sau unitate USB formatată ca FAT32/MS-DOS
* [HackMii Installer v1.2](https://bootmii.org/download/)

Pentru a verifica dacă sistemul tău Wii are Priiloader, ține apăsat butonul RESET în timp ce se pornește.
{: .notice--info}

Preloader și versiuni mai vechi de Priiloader nu par să accepte carduri SDHC (>2GB).
{: .notice--warning}

#### Instrucțiuni

1. Introdu cardul tău SD/unitatea ta USB în calculatorul tău.
1. Copiază fișierul `boot.elf` din fișierul `.zip` HackMii Installer v1.2 în rădăcina cardului tău SD sau unității tale USB.
1. Introdu cardul tău SD/unitatea ta USB în Wii.
1. Rulează Priiloader ținând apăsat butonul RESET în timp ce-ți pornești consola ta Wii.
1. Mergi la `Load/Install File`.
1. Navighează la `boot.elf` și apasă `1` pentru a-l rula.

Dacă mesajul `Press (1) to continue` nu apare după aproximativ 30 de secunde, [HackMii Installer v1.0](https://bootmii.org/download/) te-ar putea ajuta.
{: .notice--info}

[Continuă la Homebrew Channel și Instalarea BootMii](hbc)
{: .notice--info}
