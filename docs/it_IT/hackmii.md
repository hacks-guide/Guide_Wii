# Rieseguire l'HackMii Installer

Questa guida è intesa per situazioni in cui devi rieseguire l'HackMii Installer per aggiornare/reinstallare l'Homebrew Channel o BootMii.

::: info

Puoi anche rieseguire qualsiasi exploit per ritornare nell'HackMii Installer.

:::

## Rieseguire tramite l'Homebrew Channel

### Requisiti

- L'Homebrew Channel
- Una scheda SD o un'unità USB formattata in FAT32/MS-DOS
- [HackMii Installer v1.2](https://bootmii.org/download/)

### Istruzioni

1. Inserisci la tua SD/USB nel tuo PC.
2. Estrai l'HackMii Installer v1.2 nella cartella `apps` sulla tua SD/USB.
   - Se la cartella non esiste, creala.
3. Inserisci l'SD/USB nella console e avvia l'app `hackmii_installer_v1.2` dall'Homebrew Channel.
   - L'app non avrà un'icona.

::: tip

[Continua con l'installazione di Homebrew Channel e di BootMii](hbc)

:::

## Rieseguire tramite Priiloader

### Requirements

- una console Wii con Priiloader (o Preloader) installato
- Una scheda SD o un'unità USB formattata in FAT32/MS-DOS
- [HackMii Installer v1.2](https://bootmii.org/download/)

::: info

Per controllare se la tua console Wii ha Priiloader, tieni premuto il pulsante RESET in fase di accensione.

:::

::: warning

Preloader e versioni più vecchie di Priiloader non sembrano supportare le schede SD più grandi di 2GB.

:::

### Instructions

1. Inserisci la tua SD/USB nel tuo PC.
2. Copia il file `boot.elf` dal `.zip` di HackMii Installer v1.2 nella root della tua scheda SD o unità USB.
3. Inserisci la tua SD/USB nella console Wii.
4. Accedi a Priiloader tenendo premuto il pulsante RESET mentre accendi la console.
5. Vai su `Load/Install File`.
6. Naviga su `boot.elf` e premi `1` per caricarlo.

::: info

Se `Press (1) to continue` non appare dopo circa 30 secondi, prova a scaricare l'[HackMii Installer v1.0](https://bootmii.org/download/).

:::

---

::: tip

[Continua con l'installazione di Homebrew Channel e di BootMii](hbc)

:::
