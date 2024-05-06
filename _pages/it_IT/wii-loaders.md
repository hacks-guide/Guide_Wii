---
title: "Loader di backup Wii"
---

{% include toc title="Table of Contents" %}

Questa guida introduce i loader di backup Wii. Il loro utilizzo principale è quello di caricare i backup di giochi da SD o USB che sono stati dumpati da un disco di gioco. A seconda del loader, potrebbero anche esserci estensioni che consente al suo utilizzo come frontend per giochi diversi da Wii. I due loader più comunamente utilizzati sono USB Loader GX e WiiFlow Lite (una mod di WiiFlow aggiornata regolarmente) - un loader potrebbe funzionare meglio dell'altro per te, quindi vale la pena di provarli entrambi.

Per far in modo che il loader Wii funzioni correttamente, è necessario aver installato l'ultimo cIOS. Si prega di dare un'occhiata a [questa](cios) guida per istruzioni se sei su Wii e [questa](cios-mini) guida se sei su Wii mini.
{: .notice--warning}

Per giocare ai giochi, si consiglia di utilizzare una scheda SD di grandi dimensioni o un hard drive esterno, poiché le unità flash non sono consigliate e sono molto sporadiche in funzionalità. Vedi il [FAQ storage](faq).
{: .notice--info}

The official Wii Menu forwarder installer for WiiFlow Lite can be found on the [Open Shop Channel](https://oscwii.org/library/app/wiiflow_channel_installer). Avvia l'app dal canale Homebrew per installare il forwarder. Il forwarder ufficiale di USB Loader GX può essere trovato nella sua pagina [GitHub](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_Wii.wad). Puoi installarlo con [YAWM ModMii Edition](yawmme).
{: .notice--info}

### Differenze tra WiiFlow Lite e USB Loader GX

+ WiiFlow Lite ha un'interfaccia utente più avanzata per quanto riguarda le animazioni e gli effetti e supporta i temi.
    + Le schede SD sono interamente compatibili per il caricamento dei giochi Wii su WiiFlow Lite.
    + WiiFlow Lite ha un sistema di plugin.
    + Mentre il WiiFlow originale è stato aggiornato per l'ultima volta nel 2014, il fork WiiFlow Lite riceve tutt'ora aggiornamenti regolari.

    ![](/images/usb-loaders//wiiflow-ui.png)

+ USB Loader GX è principalmente basato sul Menu Wii e supporta i temi.
    + Anche se in passato le schede SD non erano supportate per i giochi Wii su USB Loader GX, recenti aggiornamenti hanno introdotto il loro supporto per questo loader.
    + USB Loader GX non ha un sistema di plugin.
    + USB Loader GX still receives regular updates.

    ![](/images/usb-loaders/usbloadergx-ui.png)

### Struttura percorsi di gioco

Di seguito è riportato un esempio di WBFS singolo e WBFS diviso. A WBFS needs to be split if your storage device is formatted as FAT32 and is over 4 GB. Software such as [Wii Backup Manager](wii-backups#using-wii-backup-manager) or [Wii Backup Fusion](wii-backups#using-wii-backup-fusion) can do this for you, and will automatically set up the game directory structure correctly.

```
💾Scheda SD o USB:
 ┗ 📂wbfs
    ┣ 📂NomeGioco [GameID]
    ┃  ┗ 📜gameid.wbfs (per titoli non divisi)
    ┗ 📂NomeGioco [GameID]
       ┣ 📜gameid.wbfs
       ┗ 📜gameid.wbf1
```

### WiiFlow Lite

#### Requisiti
+ Una Wii modificata
+ L'ultima versione di [cIOS](cios)
+ [WiiFlow](https://oscwii.org/library/app/wiiflow)

#### Installazione

1. Scarica WiiFlow e installalo nella tua scheda SD o unità USB.

#### Guida rapida

##### Generale

+ Per impostazione predefinita, WiiFlow cerca solo per i giochi su scheda SD. Si può cambiare andando su `Impostazioni > Impostazioni d'avvio` per poi disattivare `Monta solo SD`.
+ You can toggle the current view in WiiFlow between plugins, games, homebrew, and Wii channels by clicking the button to the left of `Home`, on the bottom right.
+ Puoi scaricare le copertine dei giochi andando su `Impostazioni` > `Scarica copertine e banner`.

##### Interfaccia utente

Quando WiiFlow rileva i giochi, verranno visualizzati nella vista flow.<br> Quando fai clic su un gioco, ti verranno date queste opzioni:
+ Stella - Aggiunge il gioco ai preferiti.
+ Libreria - Aggiunge il gioco a una di sei categorie di vostra scelta.
+ Ingranaggi - Apre il menu impostazione per il gioco - queste impostazioni sono uniche per quel gioco e solo quel gioco.
+ X - Elimina il gioco dall'unita USB o scheda SD.

Quando sposti il cursore verso l'area in basso dello schermo mentre sei nella vista flow, ci sono sei icone:
+ Libreria - Visualizza i giochi che sono stati aggiunti nelle categorie che hai scelto.
+ Stella - Visualizza i giochi preferiti.
+ Ingranaggi - Apre le impostazioni di WiiFlow.
+ Tipo di gioco - Cambia tra i diversi tipi di app/giochi. Il logo cambia in base a quale tipo di gioco hai selezionato.
+ Disco - Carica un gioco inserito nello slot disco.
+ Casa - Apre il menu mostrato di seguito. Il menu può anche essere aperto premendo il pulsante HOME.

![](/images/usb-loaders/wiiflow-menu.png)

+ Comandi - Mostra tutti i comandi che puoi usare su WiiFlow.
+ Ricarica Cache - Premi questo pulsante per consentire a WiiFlow di rilevare giochi nell'unità USB o scheda SD.
+ Esplora File - Ti consente di esplorare i percorsi nell'unità USB o scheda SD e selezionare un gioco o eseguibile.
+ Seleziona plugin - Ti consente di selezionare i plugin.
+ Crediti - Mostra un elenco delle persone che hanno lavorato su WiiFlow.
+ Spegni - Ti consente di effettuare uno spegnimento completo o di entrare in modalità standby.
+ Esci a - Ti consente di uscire al Menu Wii, Homebrew Channel, neek2o, Priiloader o BootMii.
+ Impostazioni - Apre il menu delle impostazioni globali di WiiFlow.

### USB Loader GX

#### Requisiti
+ Una Wii modificata
+ L'ultima versione di [cIOS](cios)
+ [USB Loader GX](https://oscwii.org/library/app/usbloader_gx)

#### Installazione

1. Assicurati che il tuo Wii abbia già cIOS 248-251 installati - puoi controllarli con applicazioni tipo [SysChecker](syscheck) o d2x cIOS Installer.
1. Scarica USB Loader GX e installalo nella tua scheda SD o unità USB.

#### Guida rapida

##### Generale

+ Se USB Loader GX dice "Waiting for HDD..." con un conto alla rovescia di 20 secondi, è molto probabile che non riesce a rilevare l'unità USB. Prova a chiudere l'app, assicurati che l'unità USB sia connessa nella porta inferiore se il Wii è posto orizzontalmente o la porta più vicina al bordo se il Wii è posto verticalmente. Può ache essere che l'unità sia formattata incorrettamente. Assicurati che la tua unità USB sia formattata come FAT32 con la tabella di partizione MBR e un'allocazione unità/dimensione cluster di 32kb (32768 byte).
+ Puoi premere il pulsante 1 sul tuo telecomando Wii per aprire una finestra di dialogo che ti permette di scaricare copertine e artwork da [GameTDB](https://gametdb.com/). In base alla quantità di giochi in tuo possesso, potrebbe volerci un po' di tempo purché le copertine e artwork si scarichino.
+ I giochi GameCube o giochi Wii "custom" potrebbero o meno avere banner personalizzati che USB Loader GX utilizzerà. Per attivarli, trova o scrivi `CustomBannersURL = http://banner.rc24.xyz/` nel `config/GXGlobal.cfg` sull'unità in cui l'app è installata. Poi puoi utilizzare il download per `Banner personalizzato` premendo 1 sul tuo telecomando Wii.

##### Interfaccia utente

Al centro della parte inferiore dello schermo, puoi vedere quanto spazio è libero nella tua unità USB e la quantità di giochi installati.

Queste sono le funzioni dei pulsanti che vedi nella barra nella parte alta dello schermo, da sinistra a destra:

+ Stella - Mostra i giochi che hai contrassegnato come "preferiti".
+ Cerca - Ti consente di cercare i giochi per nome.
+ Ordina - Cambia tra i metodi di ordinamento per i giochi.
+ Piattaforma - Ordina i giochi in base alla piattaforma.
+ Categoria - Ordina i giochi per categoria.
+ Elenco - Mostra i giochi in una visuale elenco.
+ Visuale più copertine - Mostra i giochi in una visuale con più copertine.
+ Visuale carosello - Mostra i giochi in una visuale a carosello.
+ Visuale Menu Wii - Mostra i giochi in una visuale tipo Menu Wii.
+ Controllo Genitori - Blocca USB Loader GX.
+ Disco - Carica un gioco inserito nello slot disco.

Ci sono anche altri pulsanti nella parte inferiore dello schermo:

+ Icona (+) "Installa" un gioco, cioè caricarlo dal disco e dumparlo sull'unità di archiviazione predefinita.
+ Ingranaggi - Impostazioni globali di USB Loader GX.
+ Scheda SD - Rimonta la scheda SD.
+ Homebrew - Carica app homebrew.
+ Wii - Apri il Menu HOME.
+ Pulsante Power - Spegni il tuo Wii.

### Risoluzione dei problemi

Alcuni giochi richiedono specifici cIOS per funzionare oppure per utilizzare certe funzioni nel gioco. Alcuni esempio includono:

+ Usare una tastiera in Animal Crossing: Let's Go To The City.
+ Avviare SpongeBob's Boating Bash.
+ Usare un dongle USB in Rock Band.

Un elenco più comprensivo (anche se ancora incompleto) può essere trovato [qui](https://wiki.gbatemp.net/wiki/Wii_cIOS_base_Compatibility_List).

Both USB Loader GX and WiiFlow Lite are programmed to automatically find the best cIOS to use and load the game with it using the default settings.  Tuttavia, se per qualche motivo questi loader scelgonoo il cIOS da usare sbagliato, hai l'opzione per cambiarlo manualmente.

Per cambiare il cIOS utilizzato per un gioco specifico, segui le istruzioni adatte al tuo loader USB:

#### USB Loader GX
1. Seleziona il gioco che non funziona.
1. Clicca su Impostazioni.
1. Seleziona `Impost. Gioco`.
1. Scorri verso il basso fino a `IOS gioco`.
1. Seleziona lo slot IOS da usare.
    + Prova ad usare 248, 249, 250 o 251.
1. Premi OK e prova a caricare il gioco.

#### WiiFlow Lite
1. Seleziona il gioco che non funziona.
1. Clicca sull'icona degli ingranaggi.
1. Vai su cIOS e usa le frecce per cambiare lo slot IOS da usare.
    + Prova ad usare 248, 249, 250 o 251.
1. Premi Salva e prova a caricare il gioco.

[Clicca qui per tornare alla Navigazione del Sito.](site-navigation)
{: .notice--info}
