---
title: "Rieseguire l'HackMii Installer"
---

{% include toc title="Table of Contents" %}

Questa guida è intesa per situazioni in cui devi rieseguire l'HackMii Installer per aggiornare/reinstallare l'Homebrew Channel o BootMii.

Puoi anche rieseguire [qualsiasi exploit](get-started) per ritornare nell'HackMii Installer.
{: .notice--info}

### Rieseguire tramite l'Homebrew Channel

#### Requisiti

* L'Homebrew Channel
* Una scheda SD o un'unità USB formattata come FAT32/MS-DOS
* [HackMii Installer v1.2](https://bootmii.org/download/)

#### Istruzioni

1. Inserisci la tua SD/USB nel tuo PC.
1. Estrai l'HackMii Installer v1.2 nella cartella `apps` sulla tua SD/USB.
    + Se la cartella non esiste, creala.
1. Inserisci l'SD/USB nel tuo Wii e avvia l'app `hackmii_installer_v1.2` dall'Homebrew Channel.
    + L'app non avrà un'icona.

[Continua all'installazione dell'Homebrew Channel e di BootMii](hbc)
{: .notice--info}

### Rieseguire tramite Priiloader

#### Requisiti
* Un Wii con Priiloader (o Preloader) installato
* Una scheda SD o un'unità USB formattata come FAT32/MS-DOS
* [HackMii Installer v1.2](https://bootmii.org/download/)

Per controllare se il tuo Wii ha Priiloader, tieni premuto il pulsante RESET in fase di accensione.
{: .notice--info}

Preloader e versioni più vecchie di Priiloader non sembrano supportare le schede SD (>2GB).
{: .notice--warning}

#### Istruzioni

1. Inserisci la tua SD/USB nel tuo PC.
1. Copia il file `boot.elf` dal `.zip` di HackMii Installer v1.2 al root della tua scheda SD o dispositivo USB.
1. Inserisci la tua SD/USB nel tuo Wii.
1. Accedi a Priiloader tenendo premuto il pulsante RESET mentre accendi il Wii.
1. Vai su `Load/Install File`.
1. Trova `boot.elf` e premi `1` per caricarlo.

Se il `Press (1) to continue` non dovesse apparire dopo circa 30 secondi, scaricare l'[HackMii Installer v1.0](https://bootmii.org/download/) potrebbe aiutarti.
{: .notice--info}

[Installazione dell'Homebrew Channel e di BootMii](hbc)
{: .notice--info}
