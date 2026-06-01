# Nintendo Wi-Fi Connection

Nintendo Wi-Fi Connection era un servizio di giochi multiplayer online per Wii che consentiva di giocare online gratuitamente. Questo servizio è stato interrotto nel 2014, ma esistono dei server alternativi a cui è possibile connettersi per ripristinare tale funzionalità. Questa guida fornisce dettagli su due servizi affidabili: WiiLink WFC e Wiimmfi. Per la maggior parte degli utenti, consigliamo Wiimmfi, che vanta una base di utenti più ampia (soprattutto per Mario Kart Wii).

## WiiLink WFC

WiiLink WFC è un servizio open-source creato dal team di WiiLink che ripristina il gioco online, con meno supporto e meno giocatori rispetto a Wiimmfi (elencato di seguito). Alcuni giochi potrebbero già utilizzare i server WiiLink WFC, come nel caso di Mario Kart Retro Rewind. Le istruzioni su come utilizzare WiiLink WFC sono elencate di seguito, o, in alternativa, possono essere trovate [sulla pagina di configurazione di WiiLink WFC](https://wfc.wiilink.ca/setup).

### Patch automatico del disco tramite Homebrew Channel

::: details

Un metodo per la patch di WiiLink WFC che viene eseguito sui giochi su disco, ma che deve essere eseguito manualmente tramite l'Homebrew Channel.

#### Requisiti

- Una console Wii connessa a Internet
- [WiiLink WFC Patcher](https://oscwii.org/library/app/WiiLink-WFC-Patcher)

#### Istruzioni

1. Estrai la cartella `apps` dall'archivio nella root della scheda SD o dell'unità USB.
2. Inserisci la scheda SD o l'unità USB nella console e avvia WiiLink WFC Patcher dall'Homebrew Channel.
3. Inserisci il disco del gioco (se non era già inserito), attendi che la patch si completi e il gioco dovrebbe avviarsi.

:::

## Wiimmfi

::: warning

Se durante la connessione a Wiimmfi ricevi l'errore `23904`, significa che stai utilizzando una patch obsoleta e che devi aggiornarla per poter continuare a giocare online. Segui i passaggi seguenti per il metodo che stai utilizzando per riconnetterti a Wiimmfi.

Vedi [la pagina di aggiornamento del patcher di Wiimmfi](https://wiimmfi.de/update) per una spiegazione sul perché è necessario aggiornare.

:::

Wiimmfi è un servizio closed-source creato e gestito da Wiimm e Leseratte che ripristina il gioco online su una quantità significativa di giochi che supportano questa funzionalità. Un elenco dei giochi, con i giocatori attualmente online, è disponibile sulla [pagina di stato di Wiimmfi](https://wiimmfi.de/stat?m=8). Alcuni giochi potrebbero già utilizzare Wiimmfi, come nel caso di CTGP-R. Le istruzioni su come utilizzare Wiimmfi sono elencate di seguito, o, in alternativa, possono essere trovate [sulla pagina del patcher di Wiimmfi](https://wiimmfi.de/patcher/).

### Patch automatico del disco tramite Priiloader

::: details

Un metodo per la patch di Wiimmfi che viene eseguito automaticamente sui giochi su disco tramite il Canale Disco.

#### Requisiti

- Una console Wii connessa a Internet e il menu di sistema versione 4.3
- [Priiloader](priiloader) 0.9 o versioni successive

#### Istruzioni

1. Tieni premuto il pulsante RESET durante l'accensione della console. Se sei su Wii mini, connetti una tastiera USB e tieni premuto il tasto Esc durante l'accensione.

2. Dovresti vedere il menu di Priiloader.

   ![](/images/priiloader/mainmenu.png)

3. Vai su `System Menu Hacks`.

   ::: info

   Se hai utilizzato un'unità USB per installare Priiloader, assicurati di non avere una scheda SD inserita.
   Altrimenti, Priiloader non riuscirà a trovare il file `hacks_hash.ini`.

   :::

4. Assicurati che `Wiimmfi patch v4` sia abilitato.

   ![](/images/priiloader/hacks.png)

5. Scendi fino a `Save Settings` e salva le modifiche.

6. Torna al menu principale, poi seleziona `System Menu` per tornare al menu Wii.

7. Avvia il gioco tramite il Canale Disco; ora la patch Wiimmfi dovrebbe funzionare.

::: warning

Se `Wiimmfi Patch` ha un numero diverso da v4, non hai l'ultima versione del file hacks_hash.ini e la patch non funzionerà. Devi reinstallare Priiloader; puoi trovare la guida nella sezione dei requisiti.

:::

### Patch automatico del backup tramite USB loader

::: details

Un metodo per la patch di Wiimmfi che viene eseguito automaticamente sui backup dei giochi tramite le ultime versioni di USB Loader GX o di WiiFlow Lite.

#### Requisiti

- Una console Wii connessa a Internet
- [USB Loader GX o WiiFlow Lite](wii-loaders)

#### Istruzioni

1. Apri le impostazioni del gioco o quelle globali dell'USB loader e cerca l'opzione `Server privato` (o `Private Server`). Sarà disattivata per impostazione predefinita.
2. Imposta l'opzione su `Wiimmfi` e salva le impostazioni. Ora la patch di Wiimmfi si applicherà automaticamente su tutti i giochi supportati.

:::

### Patch automatico del disco tramite un DNS personalizzato

::: details

Un metodo per la patch di Wiimmfi che viene eseguito automaticamente sui giochi su disco tramite l'uso di un server DNS personalizzato. Nonostante sia conveniente, funziona solo con una limitata selezione di giochi, tra cui Mario Kart Wii e Super Smash Bros. Brawl. Data la natura di questo processo, può essere effettuato anche su Wii senza homebrew.

#### Requisiti

- Una console Wii connessa a Internet

#### Istruzioni

1. Vai su `Impostazioni console Wii` -> `Internet` -> `Impostazioni di collegamento` e seleziona la connessione che stai utilizzando. Poi, `Modifica` -> `Ottieni automaticamente DNS NO` -> `Impostazioni avanzate`. Imposta il DNS primario su `95.217.77.181` e quello secondario su `1.1.1.1`.
2. Lascia che si completi la prova di connessione e non effettuare un aggiornamento di sistema.
3. Avvia il gioco tramite il Canale Disco; ora la patch Wiimmfi dovrebbe funzionare.

::: warning

Se ricevi l'errore `20100` o `20110`, il gioco non è supportato da questo metodo.

Se ricevi l'errore `23400`, il tuo ISP o la rete sta bloccando l'uso del DNS personalizzato. Per risolvere questo problema, Wiimmfi consente di eseguire un server DNS personalizzato su un PC. Per saperne di più, consulta [il sito di Wiimmfi](https://wiimmfi.de/patcher/dnspatch#customdns).

:::

### Patch manuale del disco tramite Homebrew Channel

::: details

Un metodo per la patch di Wiimmfi che viene eseguito sui giochi su disco, ma che deve essere eseguito manualmente tramite l'Homebrew Channel.

#### Requisiti

- Una scheda SD o un'unità USB
- [Auto Wiimmfi Patcher](https://oscwii.org/library/app/wiimmfipatcher)

#### Istruzioni

1. Estrai la cartella `apps` dall'archivio nella root della scheda SD o dell'unità USB.
2. Inserisci la scheda SD o l'unità USB nella console e avvia Auto Wiimmfi Patcher dall'Homebrew Channel.
3. Inserisci il disco del gioco (se non era già inserito), attendi che la patch si completi e il gioco dovrebbe avviarsi.

:::

### Patch manuale del disco tramite EULA (Accordo/Contatto)

::: details

Un metodo per la patch di Wiimmfi che viene eseguito sui giochi su disco, ma che deve essere eseguito manualmente tramite l'EULA (Accordo/Contatto) (deriva da [str2hax](str2hax)). Data la natura di questo processo, può essere effettuato anche su Wii senza homebrew.

#### Requisiti

- Una console Wii connessa a Internet

#### Istruzioni

1. Inserisci il disco di gioco.

2. Vai su `Impostazioni console Wii` -> `Internet` -> `Impostazioni di collegamento` e seleziona la connessione che stai utilizzando. Poi, `Modifica` -> `Ottieni automaticamente DNS NO` -> `Impostazioni avanzate`. Imposta il DNS primario su `95.217.77.151` e quello secondario su `1.1.1.1`.

   ![](/images/wiimmfi/dns-str2hax-wiimmfi.png)

3. Lascia che si completi la prova di connessione e non effettuare un aggiornamento di sistema.

4. Torna indietro due volte fino a `Internet`, poi premi `Accordo/Contatto`. Conferma che vuoi usare WC24 e il Canale Wii Shop.

5. Ora dovrebbe caricarsi la pagina del patcher di Wiimmfi. In caso contrario, e se vedi l'accordo predefinito, il tuo router potrebbe non essere compatibile con questo metodo.

6. Attendi che il patcher finisca (ci impiega tipicamente 1 o 2 minuti) e il gioco inserito dovrebbe avviarsi con la patch di Wiimmfi.

:::

### Patch manuale del disco tramite Canale Internet

::: details

Un metodo per la patch di Wiimmfi che viene eseguito sui giochi su disco, ma che deve essere eseguito manualmente tramite il Canale Internet (deriva da [FlashHax](flashhax)). Data la natura di questo processo, può essere effettuato anche su Wii senza homebrew. [Questo](nintendowfc#manual-disc-patching-via-eula-user-agreement) metodo è generalmente più affidabile e consigliato.

#### Requisiti

- Una console Wii connessa a Internet, in modalità video a 60Hz
- Il Canale Internet

#### Istruzioni

1. Apri la seguente pagina web nel Canale Internet: `http://chadsoft.co.uk/wimmfi`
2. Aggiungi la pagina ai preferiti cliccando l'icona della stella, poi clicca il pulsante `Aggiungi pagina attuale`.
3. Torna al menu Wii.
4. Apri nuovamente il Canale Internet e apri il sito che hai appena aggiunto dai preferiti.
5. Dovrebbe avviarsi il patcher di Wiimmfi. Sii paziente, perché FlashHax può essere molto instabile e potrebbero volerci diversi tentativi prima che funzioni.

::: warning

Se riscontri problemi relativi all'UPnP (ad esempio se il patcher si blocca su "Init network..." o "add UPnP port forward" per più di 10 secondi), puoi premere il pulsante `-` sul telecomando Wii o il pulsante `Y` sul controller GameCube per aggirare il problema non appena il patcher si carica.

:::

### Patch manuale di WiiWare tramite PC

::: details

Un metodo per la patch di Wiimmfi che viene eseguito sui giochi WiiWare, ma che deve essere eseguito manualmente tramite un PC e uno script.

#### Requisiti

- Una scheda SD
- La copia del gioco (in formato WAD)
- [WiiWare Patcher](https://github.com/RiiConnect24/WiiWare-Patcher/releases/latest) (multipiattaforma)
- [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

#### Istruzioni

1. Estrai il file `.zip` dell'ultima versione di WiiWare Patcher e sposta il WAD all'interno della sua cartella.
2. Esegui lo script della patch per il tuo sistema operativo: di solito termina in `.bat` per Windows e `.sh` per Mac/Linux. Se stai usando RiiConnect24 Patcher, seleziona il dispositivo finale (Wii, vWii o Dolphin), poi WiiWare Patcher.
3. Se l'operazione ha avuto successo, installa il WAD appena creato in `wiiware-wads` tramite [YAWM ModMii Edition](yawmme).

:::

### Patch manuale dell'immagine del disco tramite PC

::: details

Un metodo per la patch di Wiimmfi che viene eseguito sulle immagini dei giochi su disco, ma che deve essere eseguito manualmente tramite un PC e uno script.

#### Requisiti

- Un PC con Windows/macOS/Linux connesso a Internet
- Una copia del gioco su cui vuoi applicare la patch - i formati supportati sono `ISO`, `WDF`, `WIA`, `CISO (=WBI)`, `WBFS`, `GCZ` e `FST`. `NKIT` NON è supportato
- [Wiimmfi ISO Patcher](https://download.wiimmfi.de/patcher/wiimmfi-patcher-latest.zip)

#### Istruzioni

1. Scarica il patcher ed estrai il file `.zip`.
2. Apri la cartella appena estratta e copia l'immagine del gioco al suo interno.
   - Se sei su Windows, fai doppio clic sul file `patch-images.bat` (può anche essere visualizzato come file batch "patch-images"). Se riscontri problemi relativi a Cygwin, prova invece il file `patch-images-32.bat`.
   - Se sei su macOS, apri un terminale nella cartella attuale e rendi lo script eseguibile tramite il comando `chmod +x *.sh`, poi esegui `./patch-images.sh`.
   - Se sei su Linux, fai doppio click sul file `patch-images.desktop` (può anche essere visualizzato come "Patch Images") oppure esegui `./patch-images.sh` tramite un terminale dopo averlo reso eseguibile con il comando `chmod +x *.sh`.
3. Se i passaggi precedenti hanno avuto successo, dovresti vedere una finestra che mostra l'andamento della patch. A operazione conclusa, troverai l'immagine con la patch in una cartella chiamata `wiimmfi-images`.

:::

---

::: tip

Continua con gli [homebrew consigliati](recommended-homebrew)

Questa guida presenta una selezione di homebrew che mostra alcune delle cose che puoi fare con la tua console. Questi includono emulatori, cheat, hack e altro ancora.

:::
