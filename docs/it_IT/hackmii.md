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

## Rieseguire tramite BootMii

### Requisiti

- Una console Wii con BootMii installato
- Una scheda SD formattata in FAT32/MS-DOS
- [HackMii Installer v1.2](https://bootmii.org/download/)

::: info

Il telecomando Wii non funzionerà su BootMii. Dovrai usare il pulsante `POWER` per spostare il cursore e `RESET` per selezionare un'icona. In alternativa, usa un controller GameCube inserito nella porta 1.

:::

::: warning

Se riesci già ad avviare BootMii tramite IOS, le sezioni precedenti sono più semplici da seguire.

:::

### Istruzioni

1. Inserisci la scheda SD nel PC.
2. Copia il file `bootmini.elf` dal `.zip` di HackMii Installer v1.2 nella root della scheda SD.
3. Inserisci la scheda SD nella console.
4. Avvia BootMii tramite uno dei seguenti metodi:
   - Se installato come boot2, riavvia la console.
   - Se installato come IOS o BootMii non si apre al riavvio, avvialo tramite Priiloader o l'Homebrew Channel.
5. Naviga sull'icona della scheda SD e premi `RESET` per accedere al menu di navigazione.
6. Naviga su `bootmini.elf` e premi `RESET` per avviare l'HackMii Installer.

::: tip

Se dopo circa 30 secondi non compare `Press (1) to continue`, prova a scaricare l'[HackMii Installer v1.0](https://bootmii.org/download/).

:::

---

::: tip

[Continua con l'installazione di Homebrew Channel e di BootMii](hbc)

Ora che sei nell'HackMii Installer, potrai installare l'Homebrew Channel e BootMii, a seconda della tua console.

:::
