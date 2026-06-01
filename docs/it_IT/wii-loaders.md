# Loader di backup Wii

Questa guida introdurrà sui loader di backup per Wii. Il loro uso principale è quello di caricare i backup dei giochi di cui erano stati effettuati il dump sulla scheda SD o sull'unità USB da un disco di gioco. In base al loader, potrebbero esserci delle estensioni che gli permettono di funzionare anche con giochi diversi da quelli per Wii. I due loader più comunemente usati sono USB Loader GX e WiiFlow Lite (una versione modificata di WiiFlow, aggiornata regolarmente). Un loader potrebbe funzionare meglio dell'altro per te, quindi vale la pena provarli entrambi.

::: warning

Per far funzionare correttamente i loader, è necessario installare gli ultimi cIOS. Controlla [questa](cios) guida per le istruzioni se sei su Wii, e [questa](cios-mini) se sei su Wii mini.

:::

::: info

Si consiglia di utilizzare una scheda SD di grandi dimensioni o un disco rigido esterno, in quanto le chiavette USB non sono consigliate e sono molto sporadiche in funzionalità. Vedi le [domande frequenti sull'archiviazione](faq).

:::

::: info

L'installer ufficiale del forwarder di WiiFlow Lite può essere trovato su [Open Shop Channel](https://oscwii.org/library/app/wiiflow_channel_installer). Per installarlo, avvia l'app dal'Homebrew Channel. Il forwarder ufficiale di USB Loader GX può essere trovato su [GitHub](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_Wii.wad). Usa [YAWM ModMii Edition](yawmme) per installarlo.

:::

## Differenze tra WiiFlow Lite e USB Loader GX

- WiiFlow Lite ha un'interfaccia più avanzata dal punto di vista delle animazioni e degli effetti, e supporta anche i temi.

  - Le schede SD sono supportate per il caricamento dei giochi.
  - Dispone di un sistema di plugin.
  - Mentre il WiiFlow originale non viene aggiornato dal 2014, il fork WiiFlow Lite riceve tuttora aggiornamenti regolari.

  ![](/images/usb-loaders/wiiflow-ui.png)

- USB Loader GX ha un'interfaccia più simile al menu Wii, e supporta anche i temi.

  - Anche se in passato le schede SD non erano supportate, gli aggiornamenti recenti hanno introdotto il loro supporto.
  - Non dispone di un sistema di plugin.
  - Riceve tuttora aggiornamenti regolari.

  ![](/images/usb-loaders/usbloadergx-ui.png)

## Struttura della cartella dei giochi

Di seguito, un esempio di un WBFS singolo e di un WBFS diviso. Un WBFS deve essere diviso se supera i 4GB e il dispositivo di archiviazione è formattato in FAT32. Software come [TinyWiiBackupManager](backups#using-tinywiibackupmanager) possono farlo al posto tuo, impostando automaticamente la struttura delle cartelle corretta.

```shell
💾 Scheda SD o Unità USB
 ┗ 📂wbfs
    ┣ 📂NomeGioco [IdGioco]
    ┃  ┗ 📜idgioco.wbfs (per titoli non divisi)
    ┗ 📂NomeGioco [IdGioco]
       ┣ 📜idgioco.wbfs
       ┗ 📜idgioco.wbf1
```

## WiiFlow Lite

### Requisiti

- Una console Wii modificata
- L'ultima versione dei [cIOS](cios)
- [WiiFlow](https://oscwii.org/library/app/wiiflow)

### Installazione

1. Scarica WiiFlow e installalo nella scheda SD o nell'unità USB.

### Guida rapida

#### Generale

- Per impostazione predefinita, WiiFlow cerca i giochi solo sulla scheda SD. Per modificarla, vai  su `Impostazioni` -> `Impostazioni d'avvio` e disattiva `Monta solo SD`.
- Per cambiare la visualizzazione attuale tra plugin, giochi, homebrew e canali Wii, clicca sul pulsante alla destra di `Home`, in basso a destra.
- Puoi scaricare le copertine dei giochi andando su `Impostazioni` -> `Scarica copertine e banner`.

#### Interfaccia utente

Quando WiiFlow rileva i giochi, questi vengono visualizzati in una vista a flusso.

Quando clicchi su un gioco, ti vengono date le seguenti opzioni:

- Stella: aggiunge il gioco ai preferiti.
- Archivio: aggiunge il gioco a una delle sei categorie a tua scelta.
- Ingranaggio: apre il menu delle impostazioni del loader per il gioco specifico.
- X: elimina il gioco dalla scheda SD o dall'unita USB.

Quando sposti il cursore verso l'area in basso senza aver cliccato su un gioco, vedrai sei icone:

- Archivio: mostra i giochi ordinati in base alle categorie che hai scelto.
- Stella: mostra i giochi che hai aggiunto ai preferiti.
- Ingranaggi: apre le impostazioni di WiiFlow.
- Piattaforma: mostra i giochi della piattaforma indicata dal logo. Il logo cambia in base alla piattaforma selezionata.
- Disco: carica il gioco inserito nel lettore disco.
- Casa: apre il menu mostrato di seguito. Può anche essere avviato premendo il pulsante HOME.

![](/images/usb-loaders/wiiflow-menu.png)

- Guida: mostra tutti i comandi disponibili su WiiFlow.
- Ricarica: aggiorna la lista dei giochi dall'unità USB o dalla scheda SD.
- Esplora: apre un menu dal quale è possibile selezionare il gioco o l'eseguibile direttamente dall'unità USB o dalla scheda SD.
- Plugin: apre il menu dei plugin, potendoli selezionare.
- Crediti: mostra un elenco di tutte le persone che hanno lavorato a WiiFlow.
- Pulsante di spegnimento: apre un menu dal quale è possibile spegnere la console o metterla in standby.
- Esci: apre un menu dal quale è possibile tornare al menu Wii, all'Homebrew Channel, a neek2o, a Priiloader o a BootMii.
- Ingranaggi: apre le impostazioni globali di WiiFlow.

## USB Loader GX

### Requisiti

- Una console Wii modificata
- L'ultima versione dei [cIOS](cios)
- [USB Loader GX](https://github.com/wiidev/usbloadergx/releases)

### Installazione

1. Assicurati che la console abbia già installati i cIOS da 248 a 251; puoi verificarlo con applicazioni come [SysChecker](syscheck) o d2x cIOS installer.
2. Scarica USB Loader GX e installalo nella scheda SD o nell'unità USB.

### Guida rapida

#### Generale

- Se USB Loader GX riporta "Waiting for HDD..." con un conto alla rovescia di 20 secondi, è probabile che non riesca a rilevare l'unità USB. Prova a chiudere l'app e assicurati che l'unità USB sia connessa alla porta inferiore (se la console è posta orizzontalmente) o alla porta più vicina al bordo (se è posta verticalmente). Potrebbe anche essere che l'unità sia formattata in modo errato. Assicurati che l'unità USB sia formattata in FAT32 con la tabella di partizione MBR e un'unità di allocazione o dimensione del cluster di 32kb (32768 byte).
- Puoi premere il pulsante `1` sul telecomando Wii per aprire una finestra di dialogo dalla quale è possibile scaricare le copertine e gli artwork da [GameTDB](https://gametdb.com/). Potrebbe volerci molto tempo, in base al numero di giochi che hai.
- I giochi GameCube o quelli "non ufficiali" per Wii potrebbero avere o meno dei banner personalizzati che USB Loader GX utilizzerà. Per attivarli, cerca o scrivi `CustomBannersURL = http://banner.rc24.xyz/` nel file `config/GXGlobal.cfg` sull'unità in cui è installata l'app. Poi, puoi scaricare i `Banner personalizzati` premendo `1` sul telecomando Wii.

#### Interfaccia utente

Al centro della parte inferiore dello schermo, puoi vedere lo spazio libero sull'unità USB e il numero di giochi installati.

Queste sono le funzioni dei pulsanti che vedi nella barra nella parte alta dello schermo, da sinistra verso destra:

- Stella: mostra i giochi che hai aggiunto ai preferiti.
- Lente: consente di cercare i giochi in base al nome.
- Ordina: cambia l'ordine dei giochi.
- Piattaforma: ordina i giochi in base alla piattaforma.
- Archivio: ordina i giochi in base alla categoria.
- Elenco: visualizza i giochi in un elenco.
- Copertine: visualizza i giochi in più copertine.
- Carosello: visualizza i giochi in un carosello.
- Canali: visualizza i giochi come nel menu Wii.
- Lucchetto: blocca USB Loader GX.
- Disco: carica il gioco inserito nel lettore disco.

Ci sono anche altri pulsanti presenti nella parte inferiore dello schermo:

- +: "installa" un gioco, ovvero lo carica dal disco e ne effettua il dump sull'archiviazione predefinita.
- Ingranaggi: apre le impostazioni globali di USB Loader GX.
- Scheda SD: rimonta la scheda SD.
- Homebrew: carica le app homebrew.
- Wii: apre il menu HOME.
- Pulsante di spegnimento: spegne la console

## Risoluzione dei problemi

Alcuni giochi richiedono specifici cIOS per funzionare o per utilizzare determinate funzioni.
Alcuni esempi includono:

- Usare una tastiera in Animal Crossing: Let's Go to the City.
- Avviare SpongeBob's Boating Bash.
- Usare un dongle USB in Rock Band.

Una lista più comprensiva (anche se ancora incompleta) può essere trovata [su GBAtemp](https://wiki.gbatemp.net/wiki/Wii_cIOS_base_Compatibility_List).

Sia USB Loader GX che WiiFlow Lite sono programmati per individuare automaticamente il miglior cIOS da utilizzare e caricare il gioco con le impostazioni predefinite.  Tuttavia, se per qualche motivo questi loader scegliessero il cIOS sbagliato, hai l'opzione di cambiarlo manualmente.

Per cambiarlo per un gioco specifico, segui le istruzioni relative all'USB loader che usi:

### USB Loader GX

1. Seleziona il gioco che non funziona.
2. Clicca su Impostazioni.
3. Seleziona `Caricamento gioco`.
4. Scendi fino a `IOS gioco`.
5. Seleziona lo slot IOS da usare.
   - Prova con 248, 249, 250 o 251.
6. Premi `OK` e prova a caricare il gioco.

### WiiFlow Lite

1. Seleziona il gioco che non funziona.
2. Clicca sull'icona dell'ingranaggio.
3. Vai su `cIOS` e usa le frecce per cambiare lo slot da usare.
   - Prova con 248, 249, 250 o 251.
4. Premi `Salva` e prova a caricare il gioco.

---

::: tip

[Clicca qui per tornare all'indice.](site-navigation)

:::
