# Nintendo Wi-Fi Connection

Il Nintendo Wi-Fi Connection era un servizio di giochi multiplayer online per Wii, consentendo il gioco online gratuito. Questo servizio è stato interrotto nel 2013, ma ci sono server alternativi a cui è possibile connettersi e ripristinare questa funzionalità. Questa guida fornisce dettagli su due servizi affidabili, WiiLink WFC e Wiimmfi - per la maggior parte degli utenti, consigliamo Wiimmfi per la loro popolarità (soprattutto con Mario Kart Wii).

## WiiLink WFC

WiiLink WFC è un servizio open-source creato dal team WiiLink che ripristina il gioco online, con meno supporto e meno giocatori di Wiimmfi (elencati di seguito). In alcuni casi, il codice del server WiiLink WFC può essere utilizzato in una mod - come con Mario Kart Retro Rewind. Le istruzioni su come utilizzare WiiLink WFC sono elencate di seguito, o in alternativa possono essere trovate [sulla pagina di configurazione di WiiLink WFC](https://wfc.wiilink.ca/setup).

### Patch automatico del disco tramite Homebrew Channel

::: details

Un metodo per la patch WiiLink WFC che viene eseguito sui giochi su disco, ma deve essere eseguito manualmente tramite l'Homebrew Channel.

#### Requisiti

- Una console Wii con connessione a Internet
- [WiiLink WFC Patcher](https://oscwii.org/library/app/WiiLink-WFC-Patcher)

#### Istruzioni

1. Estrai la cartella `apps` dall'archivio nella root della tua scheda SD o unità USB.
2. Inserisci la tua scheda SD o unità USB nella la tua console Wii e avvia WiiLink WFC Patcher dall'Homebrew Channel.
3. Inserisci il disco del gioco (se non è già inserito), attendi che la patch si completi e il gioco dovrebbe avviarsi.

:::

## Wiimmfi

::: warning

Se ricevi l'errore `23904` durante la connessione a Wiimmfi, stai usando una patch obsoleta e devi aggiornare per continuare a giocare online. Segui i passaggi sottostanti per il metodo che stai usando per connetterti nuovamente a Wiimmfi.

Vedi [la pagina di aggiornamento del patcher Wiimmfi](https://wiimmfi.de/update) per una spiegazione sul perché è necessario aggiornare.

:::

Wiimmfi è un servizio a sorgente chiusa creato e mantenuto da Wiimm e Leseratte, che ripristina il gioco online su una quantità significativa di giochi che supportano questa funzionalità sulla console Wii. Un elenco di giochi con i giocatori attualmente online può essere trovato sulla [pagina di stato di Wiimmfi](https://wiimmfi.de/stat?m=8). In alcuni casi, il supporto Wiimmfi può già essere integrato in una mod del gioco - come con CTGP-R. Le istruzioni su come utilizzare Wiimmfi sono elencate qui sotto, oppure possono essere trovate [sulla pagina del patcher Wiimmfi](https://wiimmfi.de/patcher/).

### Patch automatico del disco tramite Priiloader

::: details

Un metodo per la patch Wiimmfi che viene eseguito automaticamente sui giochi su disco tramite il Canale Disco.

#### Requisiti

- Una console Wii con una connessione Internet e il menu di sistema versione 4.3
- [Priiloader](priiloader) 0.9 o successive

#### Istruzioni

1. Tieni premuto il pulsante RESET mentre accendi il tuo Wii. Se stai usando un Wii mini, connetti una tastiera USB e tieni il tasto Esc mentre lo accendi.

2. Dovresti vedere il menu di Priiloader.

   ![](/images/priiloader/mainmenu.png)

3. Vai su `System Menu Hacks`.

   ::: info

   Se hai usato un'unità USB per installare Priiloader, assicurati di non avere una scheda SD inserita contemporaneamente.
   Altrimenti, Priiloader potrebbe non trovare il file hacks_hash.ini.

   :::

4. Assicurati che `Wiimmfi patch v4` sia abilitato.

   ![](/images/priiloader/hacks.png)

5. Scendi fino `Save Settings` e salva le modifiche.

6. Torna al menu principale e seleziona `System Menu` per tornare al menu Wii.

7. Avvia il tuo gioco tramite il Canale Disco - ora dovrebbe essere patchato con Wiimmfi.

::: warning

Se `Wiimmfi Patch` ha un numero diverso da v4, non hai l'ultima versione del file hacks_hash.ini e la patch non funzionerà. Devi reinstallare Priiloader, per il quale puoi trovare la guida nella sezione dei requisiti.

:::

### Patch automatico del backup tramite USB Loader

::: details

Un metodo per la patch Wiimmfi che applica la patch automaticamente su backup di giochi nelle ultime versioni di USB Loader GX o WiiFlow Lite.

#### Requisiti

- Un Wii con connessione a Internet
- [USB Loader GX o WiiFlow Lite](wii-loaders)

#### Istruzioni

1. Apri le impostazioni di gioco o globali per il tuo USB Loader e cerca l'opzione `Server Privato`/`Private Server`. Per impostazione predefinita, non sarà impostato.
2. Imposta l'opzione su `Wiimmfi` e salva le impostazioni. Per impostazione predefinita, ora la patch per Wiimmfi si applicherà sui giochi automaticamente.

:::

### Patch automatico del disco tramite DNS personalizzato

::: details

Un metodo per la patch Wiimmfi che si esegue su giochi su disco automaticamente tramite l'utilizzo di un server DNS personalizzato. Nonostante sia conveniente, funziona solo su una minore selezione di giochi tra cui Mario Kart Wii e SSBB. Per via della natura di questo processo, si può effettuare su Wii senza homebrew.

#### Requisiti

- Una console Wii con connessione a Internet

#### Istruzioni

1. Vai su `Impostazioni console Wii` > `Internet` > `Impostazioni di collegamento` e seleziona la connessione che stai utilizzando. Poi, `Modifica` > `Ottieni automaticamente DNS NO` > `Impostazioni avanzate`. Imposta il DNS primario su `95.217.77.181` e quello secondario su `1.1.1.1`.
2. Lascia che si completi la prova di connessione e non effettuare un aggiornamento di sistema Wii.
3. Avvia il tuo gioco tramite il Canale Disco - ora dovrebbe essere patchato con Wiimmfi.

::: warning

Se ottieni l'errore `20100` o `20110`, il gioco a cui stai tentando di giocare non è supportato da questo metodo.

Se ottieni l'errore `23400`, il tuo ISP o la rete sta bloccando l'uso di un DNS personalizzato. Per risolvere questo problema, Wiimmfi ha un server DNS che può essere eseguito sul tuo PC - puoi leggere a riguardo [sul sito di Wiimmfi](https://wiimmfi.de/patcher/dnspatch#customdns).

:::

### Patch manuale del disco tramite Homebrew Channel

::: details

Un metodo per la patch Wiimmfi che viene eseguito sui giochi su disco, ma deve essere eseguito manualmente tramite l'Homebrew Channel.

#### Requisiti

- Una scheda SD o unità USB
- [Auto Wiimmfi Patcher](https://oscwii.org/library/app/wiimmfipatcher)

#### Istruzioni

1. Estrai la cartella `apps` dall'archivio nella root della tua scheda SD o unità USB.
2. Inserisci la tua scheda SD o unità USB nella la tua console Wii e avvia Auto Wiimmfi Patcher dall'Homebrew Channel.
3. Inserisci il disco del gioco (se non è già inserito), attendi che la patch si completi e il gioco dovrebbe avviarsi.

:::

### Patch manuale del disco tramite Accordo/Contatto

::: details

Un metodo per la patch Wiimmfi che viene eseguito sui giochi su disco, ma deve essere eseguito manualmente tramite l'Accordo/Contatto (deriva da [str2hax](str2hax)). Per via della natura di questo processo, si può effettuare su Wii senza homebrew.

#### Requisiti

- Un Wii con connessione a Internet

#### Istruzioni

1. Inserisci il tuo disco di gioco.

2. Vai su `Impostazioni console Wii > Internet > Impostazioni di collegamento` e seleziona la connessione che stai utilizzando. Poi, `Modifica > Ottieni automaticamente DNS NO > Impostazioni avanzate`. Imposta il DNS primario su `95.217.77.151` e quello secondario su `1.1.1.1`.

   ![](/images/wiimmfi/dns-str2hax-wiimmfi.png)

3. Lascia che si completi la prova di connessione e non effettuare un aggiornamento di sistema Wii.

4. Torna due volte indietro fino a `Internet` e premi `Accordo/Contatto`. Poi conferma che vuoi usare WC24 e il Canale Wii Shop.

5. Ora la pagina del patcher Wiimmfi dovrebbe caricarsi. In caso contrario, e se vedi l'accordo predefinito, il tuo router potrebbe non essere compatibile con questo metodo.

6. Attendere un po' per il caricamento del patcher (tipicamente all'incirca 1,5 minuti) e il gioco inserito dovrebbe avviarsi con una patch di Wiimmfi.

:::

### Patch manuale del disco tramite Canale Internet

::: details

Un metodo per la patch Wiimmfi che viene eseguito sui giochi su disco, ma deve essere eseguito manualmente tramite il Canale Internet (deriva da [Flashhax](flashhax)). Per via della natura di questo processo, si può effettuare su Wii senza homebrew. [Questo](nintendowfc#manual-disc-patching-via-eula-user-agreement) metodo è generalmente più affidabile ed è invece raccomandato.

#### Requisiti

- Una console Wii connessa a Internet, in modalità video a 60Hz
- Il Canale Internet

#### Istruzioni

1. Apri la seguente pagina web nel Canale Internet: `http://chadsoft.co.uk/wimmfi`
2. Aggiungi la pagina ai preferiti cliccando l'icona della stella, poi clicca il pulsante `Aggiungi pagina attuale`.
3. Ritorna al Menu Wii.
4. Apri nuovamente il Canale Internet e apri il sito che hai appena aggiunto dai preferiti.
5. Il patcher di Wiimmfi dovrebbe avviarsi. Sii paziente, poiché Flashhax può essere molto instabile - potrebbero volerci diversi tentativi purché funzioni.

::: warning

Se riscontri problemi relativi all'UPnP (tipo il patcher che si blocca su "Init network..." o "add UPnP port forward" per più di 10 secondi), puoi premere il pulsante - sul tuo telecomando Wii o il pulsante Y sul tuo controller GameCube per aggirare il problema appena il patcher si carica.

:::

### Patch manuale di WiiWare tramite PC

::: details

Un metodo per la patch Wiimmfi che viene eseguito sui giochi WiiWare, ma deve essere eseguito manualmente su un PC tramite uno script.

#### Requisiti

- Una scheda SD
- La copia del tuo gioco (in formato WAD)
- [WiiWare Patcher](https://github.com/RiiConnect24/WiiWare-Patcher/releases/latest) (multipiattaforma)
- [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

#### Istruzioni

1. Estra il .zip dell'ultima versione del WiiWare Patcher e inserisci il WAD al suo interno.
2. Esegui lo script della patch per il tuo sistema operativo: di solito termina con `.bat` per Windows e `.sh` per Mac/Linux. Se stai usando il RiiConnect24 Patcher, seleziona il tuo dispositivo (Wii, vWii o Dolphin) e seleziona il patcher WiiWare.
3. Se è stato completato con successo, installa il WAD che è stato creato in `wiiware-wads` tramite [YAWM ModMii Edition](yawmme).

:::

### Patch manuale delle immagini del disco tramite PC

::: details

Un metodo per la patch Wiimmfi che viene eseguito su immagini di giochi su disco, ma deve essere eseguito manualmente su un PC tramite uno script.

#### Requisiti

- Un PC Windows/macOS/Linux con una connessione a Internet
- Una copia del gioco che vuoi patchare - i formati supportati sono `ISO`, `WDF`, `WIA`, `CISO (=WBI)`, `WBFS`, `GCZ`, e `FST` - `NKIT` NON è supportato
- [Wiimmfi ISO Patcher](https://download.wiimmfi.de/patcher/wiimmfi-patcher-latest.zip)

#### Istruzioni

1. Scarica il patcher ed estrai il file `.zip`.
2. Apri la cartella appena estratta e copia le tue immagini di gioco Wii al suo interno.
   - Se sei su Windows, fai doppio clic sul file `patch-images.bat` (può anche essere visualizzato come file batch "patch-images"). Se riscontri problemi relativi a Cygwin, prova invece il file `patch-images-32.bat`.
   - Se sei su macOS, apri un terminale nella cartella attuale e rendi lo script eseguibile tramite il comando `chmod +x *.sh`, poi esegui `./patch-images.sh`.
   - Se sei su Linux, fai doppio click sul file `patch-images.desktop` (può anche essere visualizzato come "Patch Images") oppure esegui `./patch-images.sh` tramite un terminale dopo averlo reso eseguibile con il comando `chmod +x *.sh`.
3. Se i passaggi sopra sono stati terminati con successo, dovresti vedere una finestra che mostra il processo. Una volta terminato, troverai l'immagine patchata in una cartella chiamata `wiimmfi-images`.

:::

---

::: tip

Continua con gli [homebrew consigliati](recommended-homebrew)

Questa guida fornisce una selezione di homebrew che evidenzia alcune delle cose che puoi fare con la tua console Wii. Questi includono emulatori, cheat, hack e altro ancora.

:::
