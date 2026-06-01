# Rieseguire l'HackMii Installer

Questa guida è pensata per le situazioni in cui devi rieseguire l'HackMii Installer per aggiornare/reinstallare l'Homebrew Channel o BootMii.

::: info

Puoi anche [rieseguire un exploit](get-started) per tornare su HackMii Installer in totale sicurezza.

:::

## Rieseguire tramite l'Homebrew Channel

### Requisiti

- Homebrew Channel
- Una scheda SD o un'unità USB formattata in FAT32/MS-DOS
- [HackMii Installer v1.2](https://bootmii.org/download/)

### Istruzioni

1. Inserisci la scheda SD o l'unità USB nel PC.
2. Estrai l'HackMii Installer v1.2 nella cartella `apps` della scheda SD o dell'unità USB.
   - Se la cartella non esiste, creala.
3. Inserisci la scheda SD o l'unità USB nella console e avvia l'app `hackmii_installer_v1.2` dall'Homebrew Channel.
   - L'app non avrà un'icona.

::: tip

[Continua con l'installazione di Homebrew Channel e di BootMii](hbc)

:::

## Rieseguire tramite Priiloader

### Requisiti

- Una console Wii con Priiloader (o Preloader) installato
- Una scheda SD o un'unità USB formattata in FAT32/MS-DOS
- [HackMii Installer v1.2](https://bootmii.org/download/)

::: info

Per verificare se la console ha Priiloader, tieni premuto il pulsante RESET durante l'accensione.

:::

::: warning

Preloader e le versioni più datate di Priiloader non sembrano supportare le schede SDHC (>2GB).

:::

### Istruzioni

1. Inserisci la scheda SD o l'unità USB nel PC.
2. Copia il file `boot.elf` dal `.zip` di HackMii Installer v1.2 nella root della scheda SD o dell'unità USB.
3. Inserisci la scheda SD o l'unità USB nella console.
4. Accedi a Priiloader tenendo premuto il pulsante RESET durante l'accensione della console.
5. Vai su `Load/Install File`.
6. Naviga su `boot.elf` e premi `1` per caricarlo.

::: info

Se dopo circa 30 secondi non compare `Press (1) to continue`, prova a scaricare l'[HackMii Installer v1.0](https://bootmii.org/download/).

:::

---

::: tip

[Continua con l'installazione di Homebrew Channel e di BootMii](hbc)

Ora che sei nell'HackMii Installer, potrai installare l'Homebrew Channel e BootMii, a seconda della tua console.

:::
