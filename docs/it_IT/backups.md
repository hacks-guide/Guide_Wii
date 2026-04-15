---
outline: false
---

# Gestire i backup Wii e GameCube

Questa guida fornirà istruzioni su come gestire i backup Wii e GameCube con TinyWiiBackupManager, insieme a unire i file PART quando effettui il dump dei giochi Wii su un'unità in FAT32. Note importanti sulla gestione dei giochi wii sono elencati sotto.

::: tip

Per memorizzare più giochi, si consiglia di utilizzare un disco rigido esterno. La maggior che trovi sul mercato dovrebbero funzionare.

:::

::: warning

Usare una chiavetta USB NON è consigliato. Il motivo è spiegato nelle [domande frequenti sull'archiviazione](faq#storage-device-faq).

Come alternativa, puoi usare una scheda SD, anche se i limiti applicati allo slot SD di Wii risulteranno in velocità di lettura/scrittura lente. È generalmente consigliato di usare un disco rigido USB o una SSD.

:::

::: danger

Assicurati che il tuo dispositivo sia stato formattato in FAT32. Non formattarlo in qualsiasi altro formato come exFAT, extFS o WBFS.

Potresti formattarlo come NTFS, ma NON funzionerà con la maggior parte delle app (es. l'Homebrew Channel o Nintendont).

:::

## Unire file PART da un disco Wii su un'unità FAT32

Se hai fatto il dump di un disco Wii su un dispositivo formattato in FAT32, dovresti aver ricevuto almeno due file che finiscono in `.partX.iso`, a causa delle limitazioni del filesystem. Devono essere uniti (su un filesystem che li supporta, come NTFS) così che il file possa venir letto correttamente.

:::details Istruzioni

### Windows

1. Copia i file che condividono lo stesso come che finisce in `.partX.iso` in una cartella vuota sul tuo computer.

   ![](/images/desktop-apps/WBM/dumpedpartfiles.png)

2. In questa cartella, clicca sulla barra degli indirizzi in Windows Explorer e scrivi `cmd`, questo aprirà una finestra del terminale in quel percorso.

   ![](/images/desktop-apps/WBM/opencmd.png)

3. Scrivi `copy /b *.part?.iso game.iso` e premi invio. Aspetta che il comando finisca, quello che riceverai dal terminale dovrebbe essere simile a quello mostrato sotto.

   ![](/images/desktop-apps/WBM/joinpartfiles.png)

4. Se la copia è avvenuta con successo, il checksum del dump del gioco (localizzato dove hai fatto il dump del disco) dovrebbe corrispondere a quello del file unito.

   ![](/images/desktop-apps/WBM/filemd5.png)

### macOS/Linux

1. Copia i file che condividono lo stesso come che finisce in `.partX.iso` in una cartella vuota sul tuo computer.

   ![](/images/desktop-apps/WBM/dumpedpartfileslinux.png)

2. Apri un terminale nella cartella dove sono situati i tuoi file, o navigaci con `cd [PERCORSO]`.

   ![](/images/desktop-apps/WBM/openterminallinux.png)

3. Usa il seguente comando: ``cat `ls *.part?.iso | sort` > game.iso``. Poi aspetta che finisca. Come su Windows, il checksum dovrebbe combaciare al dump.

   ![](/images/desktop-apps/WBM/mergesuccesslinux.png)

:::

## Usando TinyWiiBackupManager

TinyWiiBackupManager è un nuovo e leggero gestore dei backup dei giochi programmato in Rust che sostituisce i programmi consigliati precedentemente da questa guida: WiiBackupManager e WiiBackupFusion. Istruzioni su come usare l'app sono elencate per sezioni per qualsiasi piattaforma dove TWBM può essere installato.

::::: tabs

:::: tab Windows

### Usare TWBM su Windows

#### Requisiti

- Un PC con Windows 7 o superiori
- Un'unità USB o una scheda SD
- Un gioco Wii/GameCube dumpato (in qualsiasi formato)
- [TinyWiiBackupManagerInstaller](https://github.com/mq1/TinyWiiBackupManagerInstaller/releases/latest/)

#### Istruzioni

##### Sezione I - Installazione

1. Scarica `TinyWiiBackupManagerInstaller.exe` e avvia l'installer. Se ti appare un messaggio da Windows SmartScreen, seleziona di eseguire comunque dato che è un falso positivo.

   ![](/images/desktop-apps/TWBM/twbmi-download.png)

2. Attendi che l'installer finisca, poi esegui TinyWiiBackupManager.

   ![](/images/desktop-apps/TWBM/twbmi-install.png)

##### Sezione II - Copiare i giochi

::: tip

Se hai già giochi sul tuo disco e TinyWiiBackupManager ti chiede di normalizzare i percorsi, vai negli strumenti e effettua questa azione per assicurarti che le cartelle della tua unità siano elencati correttamente.

:::

1. Inserisci la tua unità USB o scheda SD nel tuo computer.

2. Clicca l'icona del disco rigido in basso a sinistra dell'app e seleziona la tua unità. Seleziona la root (es. `E:\`), non la cartella "wbfs" o "games".

   ![](/images/desktop-apps/TWBM/twbm-win-empty.png)

3. Clicca il pulsante :heavy_plus_sign: nella parte in alto a destra dell'app per aggiungere uno o più giochi.

   - Clicca il pulsante :file_folder: per aggiungere giochi da una cartella specifica.
   - Puoi anche trascinarli direttamente sulla finestra.
   - Se è già in corso un trasferimento, saranno aggiunti in coda.

   ![](/images/desktop-apps/TWBM/twbm-win-games.png)

4. Ricordati di espellere il disco in modo sicuro prima di scollegarlo!

::::

:::: tab macOS

### Usare TWBM su macOS

#### Requisiti

- Un PC con macOS 10.13 o successive
- Un'unità USB o una scheda SD
- Un gioco Wii/GameCube dumpato (in qualsiasi formato)
- [TinyWiiBackupManager](https://github.com/mq1/TinyWiiBackupManager/releases/latest)

#### Istruzioni

##### Sezione I - Installazione

1. Scarica i binari universali .DMG per macOS.

   ![](/images/desktop-apps/TWBM/twbm-mac-download.png)

2. Trascina TinyWiiBackupManager nella cartella applicazioni.

   ![](/images/desktop-apps/TWBM/twbm-mac-install.png)

3. Esegui il seguente comando nel Terminale dopo l'installazione: `xattr -rd com.apple.quarantine /Applications/TinyWiiBackupManager.app`. Questo permetterà all'app di essere eseguita, altrimenti verrà bloccata dalle impostazioni di sicurezza di macOS.

   ![](/images/desktop-apps/TWBM/twbm-mac-security.png)

4. Esegui TinyWiiBackupManager.

##### Sezione II - Copiare i giochi

::: tip

Se hai già giochi sul tuo disco e TinyWiiBackupManager ti chiede di normalizzare i percorsi, vai negli strumenti e effettua questa azione per assicurarti che le cartelle della tua unità siano elencati correttamente.

:::

1. Inserisci la tua unità USB o scheda SD nel tuo computer.

2. Clicca l'icona del disco rigido in basso a sinistra dell'app e seleziona la tua unità. Seleziona la root (es. `E:\`), non la cartella "wbfs" o "games".

   ![](/images/desktop-apps/TWBM/twbm-mac-empty.png)

3. Clicca il pulsante :heavy_plus_sign: nella parte in alto a destra dell'app per aggiungere uno o più giochi.

   - Clicca il pulsante :file_folder: per aggiungere giochi da una cartella specifica.
   - Puoi anche trascinarli direttamente sulla finestra.
   - Se è già in corso un trasferimento, saranno aggiunti in coda.

   ![](/images/desktop-apps/TWBM/twbm-mac-games.png)

4. Ricordati di espellere il disco in modo sicuro prima di scollegarlo!

::::

:::: tab Linux

### Usare TWBM su Linux

#### Requisiti

- Un PC con Linux che supporta file AppImage o Flatpak
- Un'unità USB o una scheda SD
- Un gioco Wii/GameCube dumpato (in qualsiasi formato)
- [TinyWiiBackupManager](https://github.com/mq1/TinyWiiBackupManager/releases/latest)

#### Istruzioni

##### Sezione I - Installazione

TinyWiiBackupManager può essere installato dalla repository di Flathub come un Flatpak, o può essere eseguito direttamente dal file AppImage. Le istruzioni per entrambi sono elencati sotto.

###### Flatpak

1. Assicurati che FlatPak sia [installato sul tuo sistema](https://flathub.org/it/setup).

2. Naviga alla [repository Flathub di TWBM](https://flathub.org/it/apps/it.mq1.TinyWiiBackupManager) e premi il pulsante Installa. Se non accade nulla, scarica il file `.flatpakref` e aprilo per trovare il programma sull'app store della tua distro. Se non accade nulla di nuovo, esegui `flatpak install flathub it.mq1.TinyWiiBackupManager` nel tuo terminale.

   ![](/images/desktop-apps/TWBM/twbm-linux-flatpak-dl.png)

3. Assicurati che TinyWiiBackupManager sia installato sul tuo sistema, poi esegui l'app.

###### AppImage

1. Scarica i binari AppImage per l'architettura del tuo sistema. Per la maggior parte degli utenti è `TinyWiiBackupManager-vX.X.X-linux-x86_64.AppImage`.

   ![](/images/desktop-apps/TWBM/twbm-linux-appimage-dl.png)

2. Assicurati che l'AppImage sia eseguibile eseguendo `chmod +x [percorso dell'AppImage]`.

   ![](/images/desktop-apps/TWBM/twbm-linux-appimage-exec.png)

3. Esegui TinyWiiBackupManager.

##### Sezione II - Copiare i giochi

::: tip

Se hai già giochi sul tuo disco e TinyWiiBackupManager ti chiede di normalizzare i percorsi, vai negli strumenti e effettua questa azione per assicurarti che le cartelle della tua unità siano elencati correttamente.

:::

1. Inserisci la tua unità USB o scheda SD nel tuo computer.

2. Clicca l'icona del disco rigido in basso a sinistra dell'app e seleziona la tua unità. Seleziona la root (es. `E:\`), non la cartella "wbfs" o "games".

   ![](/images/desktop-apps/TWBM/twbm-linux-empty.png)

3. Clicca il pulsante :heavy_plus_sign: nella parte in alto a destra dell'app per aggiungere uno o più giochi.

   - Clicca il pulsante :file_folder: per aggiungere giochi da una cartella specifica.
   - Puoi anche trascinarli direttamente sulla finestra. Nota che questa funzione non è ancora disponibile su Wayland.
   - Se è già in corso un trasferimento, saranno aggiunti in coda.

   ![](/images/desktop-apps/TWBM/twbm-linux-games.png)

4. Ricordati di espellere il disco in modo sicuro prima di scollegarlo!

::::

:::::

---

::: tip

[Continua coi cIOS](cios)

Per giocare ai giochi Wii dumpati sulla tua unità esterna, devi avere configurato i cIOS. Una volta configurati, puoi usare [USB Loader GX oo WiiFlow](wii-loaders) per giocare ai giochi Wii direttamente dalla tua unità USB o scheda SD.

Puoi anche usare [Nintendont](nintendont) per giocare ai giochi GameCube direttamente dalla tua unità USB o scheda SD.

:::

---

::: tip

[Clicca qui per tornare all'indice.](site-navigation)

:::
