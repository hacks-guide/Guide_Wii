---
outline: false
---

# Gestire i backup Wii e GameCube

Questa guida fornirà istruzioni su come gestire i backup di Wii e GameCube con TinyWiiBackupManager e su come unire i file PART quando si effettua il dump dei giochi Wii su un'unità in FAT32. Di seguito saranno elencate delle note importanti sulla gestione dei giochi Wii.

::: tip

Per memorizzare più giochi, si consiglia di utilizzare un disco rigido esterno. La maggior parte di quelle che trovi sul mercato dovrebbero andare.

:::

::: warning

Usare una chiavetta USB NON è consigliato. Il motivo è spiegato nelle [domande frequenti sull'archiviazione](faq#storage-device-faq).

In alternativa, puoi usare una scheda SD, anche se i limiti dello slot SD di Wii ridurranno la velocità di lettura/scrittura. È generalmente consigliato l'uso di un disco rigido USB o di una SSD.

:::

::: danger

Assicurati che l'unità di archiviazione sia formattata in FAT32. Non formattarla in qualsiasi altro formato come exFAT, extFS o WBFS.

Potresti formattarla in NTFS, ma NON funzionerà con la maggior parte delle app (es. Homebrew Channel o Nintendont).

:::

## Unire i file PART da un disco su un'unità FAT32

Se hai effettuato il dump di un disco Wii su un'unità formattata in FAT32, dovresti trovarti con due file che terminano in `.partX.iso`, a causa delle limitazioni del filesystem. Devono essere uniti (su un filesystem supportato, come NTFS) affinché il file possa essere letto correttamente.

:::details Istruzioni

### Windows

1. Copia i file che condividono lo stesso nome e che terminano in `.partX.iso` in una cartella vuota sul tuo computer.

   ![](/images/desktop-apps/WBM/dumpedpartfiles.png)

2. In questa cartella, clicca sulla barra degli indirizzi in Windows Explorer e scrivi `cmd`, questo aprirà una finestra del terminale in quella cartella.

   ![](/images/desktop-apps/WBM/opencmd.png)

3. Digita `copy /b *.part?.iso game.iso` e premi invio. Aspetta che l'operazione termini, poi quello che il terminale mostrerà dovrebbe essere simile a questo sotto.

   ![](/images/desktop-apps/WBM/joinpartfiles.png)

4. Se la copia è avvenuta con successo, il checksum situato nel file info del dump del gioco (localizzato dove hai effettuato il dump del disco) dovrebbe corrispondere a quello del file unito.

   ![](/images/desktop-apps/WBM/filemd5.png)

### macOS/Linux

1. Copia i file che condividono lo stesso nome e che terminano in `.partX.iso` in una cartella vuota sul tuo computer.

   ![](/images/desktop-apps/WBM/dumpedpartfileslinux.png)

2. Apri un terminale nella cartella dove sono situati i file, o navigaci con `cd [PERCORSO]`.

   ![](/images/desktop-apps/WBM/openterminallinux.png)

3. Incolla il seguente comando: ``cat `ls *.part?.iso | sort` > game.iso``. Aspetta che l'operazione termini. Come su Windows, il checksum dovrebbe corrispondere al dump.

   ![](/images/desktop-apps/WBM/mergesuccesslinux.png)

:::

## Usando TinyWiiBackupManager

TinyWiiBackupManager è un nuovo e leggero gestore dei backup di giochi programmato in Rust che sostituisce i programmi consigliati in precedenza da questa guida: WiiBackupManager e WiiBackupFusion. Le istruzioni su come usare l'app sono elencate per sezioni su qualsiasi piattaforma dove TWBM può essere installato.

::::: tabs

:::: tab Windows

### Come usare TWBM su Windows

#### Requisiti

- Un PC con Windows 7 o versioni successive
- Una scheda SD o un'unità USB
- Un backup di un gioco Wii/GameCube (in qualsiasi formato)
- [TinyWiiBackupManager](https://github.com/mq1/TinyWiiBackupManager/releases/latest)

#### Istruzioni

##### Sezione I - Installazione

1. Scarica il file per la tua architettura di Windows. Se non sai quale scaricare, prova `TinyWiiBackupManager-vX.X.X-windows-x64.exe`.

2. Esegui il file `.exe` scaricato. Se appare un messaggio di Windows SmartScreen, clicca `Esegui comunque` dato che si tratta di un falso positivo.

##### Sezione II - Copiare i giochi

::: tip

Se hai già dei giochi nella tua unità e TinyWiiBackupManager ti chiede di normalizzare i percorsi, vai su Strumenti ed effettua questa operazione per assicurarti che le cartelle dell'unità siano elencate correttamente.

:::

1. Inserisci l'unità USB o la scheda SD nel computer.

2. Clicca l'icona del disco rigido in basso a sinistra dell'app e seleziona l'unità. Seleziona la root dell'unità (es. `E:\`), non la cartella "wbfs" o "games".

   ![](/images/desktop-apps/TWBM/twbm-win-empty.png)

3. Clicca il pulsante :heavy_plus_sign: in alto a destra dell'app per aggiungere uno o più giochi.

   - Clicca il pulsante :file_folder: per aggiungere più giochi da una cartella specifica.
   - Puoi anche trascinarli direttamente sulla finestra.
   - Se è già in corso un trasferimento, verranno aggiunti in coda.

   ![](/images/desktop-apps/TWBM/twbm-win-games.png)

4. Ricordati di espellere il disco in modo sicuro prima di scollegarlo!

::::

:::: tab macOS

### Come usare TWBM su macOS

#### Requisiti

- Un PC con macOS 10.12 o versioni successive
- Una scheda SD o un'unità USB
- Un backup di un gioco Wii/GameCube (in qualsiasi formato)
- [TinyWiiBackupManager](https://github.com/mq1/TinyWiiBackupManager/releases/latest)

#### Istruzioni

##### Sezione I - Installazione

1. Scarica il file binaro .DMG universale per macOS.

   ![](/images/desktop-apps/TWBM/twbm-mac-download.png)

2. Trascina TinyWiiBackupManager nella cartella applicazioni.

   ![](/images/desktop-apps/TWBM/twbm-mac-install.png)

3. Esegui il seguente comando nel Terminale dopo l'installazione: `xattr -rd com.apple.quarantine /Applicazioni/TinyWiiBackupManager.app`. Questo permetterà all'app di essere eseguita, altrimenti verrà bloccata dalle impostazioni di sicurezza di macOS.

   ![](/images/desktop-apps/TWBM/twbm-mac-security.png)

4. Esegui TinyWiiBackupManager.

##### Sezione II - Copiare i giochi

::: tip

Se hai già dei giochi nella tua unità e TinyWiiBackupManager ti chiede di normalizzare i percorsi, vai su Strumenti ed effettua questa operazione per assicurarti che le cartelle dell'unità siano elencate correttamente.

:::

1. Inserisci l'unità USB o la scheda SD nel computer.

2. Clicca l'icona del disco rigido in basso a sinistra dell'app e seleziona l'unità. Seleziona la root dell'unità (es. `E:\`), non la cartella "wbfs" o "games".

   ![](/images/desktop-apps/TWBM/twbm-mac-empty.png)

3. Clicca il pulsante :heavy_plus_sign: in alto a destra dell'app per aggiungere uno o più giochi.

   - Clicca il pulsante :file_folder: per aggiungere più giochi da una cartella specifica.
   - Puoi anche trascinarli direttamente sulla finestra.
   - Se è già in corso un trasferimento, verranno aggiunti in coda.

   ![](/images/desktop-apps/TWBM/twbm-mac-games.png)

4. Ricordati di espellere il disco in modo sicuro prima di scollegarlo!

::::

:::: tab Linux

### Come usare TWBM su Linux

#### Requisiti

- Un PC con Linux che supporta file AppImage o Flatpak
- Una scheda SD o un'unità USB
- Un backup di un gioco Wii/GameCube (in qualsiasi formato)
- [TinyWiiBackupManager](https://github.com/mq1/TinyWiiBackupManager/releases/latest)

#### Istruzioni

##### Sezione I - Installazione

TinyWiiBackupManager può essere installato dalla repository di Flathub come un Flatpak, o può essere eseguito direttamente dal file AppImage. Le istruzioni per entrambi sono elencati sotto.

###### Flatpak

1. Assicurati che Flatpak sia [installato sul tuo sistema](https://flathub.org/it/setup).

2. Naviga alla [repository Flathub di TWBM](https://flathub.org/it/apps/it.mq1.TinyWiiBackupManager) e premi il pulsante Installa. Se non accade nulla, scarica il file `.flatpakref` e aprilo per trovare il programma sull'app store della tua distro. Se non accade nulla di nuovo, esegui `flatpak install flathub it.mq1.TinyWiiBackupManager` nel terminale.

   ![](/images/desktop-apps/TWBM/twbm-linux-flatpak-dl.png)

3. Assicurati che TinyWiiBackupManager si sia installato, poi esegui l'app.

###### AppImage

1. Scarica il file AppImage per la tua architettura. Se non sai quale scaricare, prova `TinyWiiBackupManager-vX.X.X-linux-x86_64.AppImage`.

   ![](/images/desktop-apps/TWBM/twbm-linux-appimage-dl.png)

2. Assicurati che l'AppImage sia eseguibile, eseguendo nel terminale `chmod +x [percorso dell'AppImage]`.

   ![](/images/desktop-apps/TWBM/twbm-linux-appimage-exec.png)

3. Esegui TinyWiiBackupManager.

##### Sezione II - Copiare i giochi

::: tip

Se hai già dei giochi nella tua unità e TinyWiiBackupManager ti chiede di normalizzare i percorsi, vai su Strumenti ed effettua questa operazione per assicurarti che le cartelle dell'unità siano elencate correttamente.

:::

1. Inserisci l'unità USB o la scheda SD nel computer.

2. Clicca l'icona del disco rigido in basso a sinistra dell'app e seleziona l'unità. Seleziona la root dell'unità (es. `E:\`), non la cartella "wbfs" o "games".

   ![](/images/desktop-apps/TWBM/twbm-linux-empty.png)

3. Clicca il pulsante :heavy_plus_sign: in alto a destra dell'app per aggiungere uno o più giochi.

   - Clicca il pulsante :file_folder: per aggiungere più giochi da una cartella specifica.
   - Puoi anche trascinarli direttamente sulla finestra. Nota che questa funzione non è ancora disponibile su Wayland.
   - Se è già in corso un trasferimento, verranno aggiunti in coda.

   ![](/images/desktop-apps/TWBM/twbm-linux-games.png)

4. Ricordati di espellere il disco in modo sicuro prima di scollegarlo!

::::

:::::

---

::: tip

[Continua coi cIOS](cios)

Per poter giocare con i backup dei giochi Wii dall'unità USB esterna o dalla scheda SD, devi aver configurato i cIOS. Una volta configurati, potrai poi usare [USB Loader GX o WiiFlow](wii-loaders).

Potrai anche usare [Nintendont](nintendont) per giocare ai backup GameCube.

:::

---

::: tip

[Clicca qui per tornare all'indice.](site-navigation)

:::
