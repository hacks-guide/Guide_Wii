---
title: "Nintendo Wi-Fi Connection"
---

{% include toc title="Table of Contents" %}

Il Nintendo Wi-Fi Connection era un servizio di giochi multiplayer online per Wii, consentendo il gioco online gratuito. Mentre diversi giochi sono stati supportato più di altri, ad agosto 2023 i giochi non possono più connettersi con mezzi convenzionali. Per ripristinare il funzionamento di Nintendo WFC, questa guida fornisce istruzioni sull'installazione di Wimmfi. Sono elencati diversi metodi per connettersi a Wimmfi, in ordine dal meno complicato al più complicato - scegli il metodo che fa più al tuo caso.

Se ottieni l'errore 23904 mentre ti connetti a Wiimfi, starai utilizzato una patch obsoleta.<br> Segui i passaggi riportati di seguito per il metodo che utilizzi in modo da connetterti nuovamente a Wiimmfi.<br> Vai su [questa pagina](https://wiimmfi.de/update) per maggiori dettagli.<br>
{: .notice--warning}

### Patching automatico del disco tramite Priiloader

Se il `Wiimmfi Patch` è elencato come qualcosa di diverso da v4, non hai l'ultima versione del file hacks_hash.ini e quindi la patch non funzionerà. Devi reinstallare Priiloader, per il quale puoi trovare la guida nella sezione dei requisiti.
{: .notice--warning}

Un metodo per la patch Wiimmfi che viene eseguito automaticamente sui giochi su disco tramite il Canale Disco.

#### Requisiti
+ Un Wii con una connessione Internet e il Menu di sistema versione 4.3
+ [Priiloader](priiloader) 0.9 o più recente

#### Istruzioni

1. Tieni premuto il pulsante RESET mentre accendi il tuo Wii. Se stai usando un Wii mini, connetti una tastiera USB e tieni il tasto Esc mentre lo accendi.
1. Dovresti vedere il menu di Priiloader.

    ![](/images/priiloader/mainmenu.jpg)

1. Vai su `System Menu Hacks`. Se hai usato un'unità USB per installare Priiloader, assicurati di non avere una scheda SD inserita allo stesso tempo. Altrimenti, Priiloader potrebbe non trovare il file hacks_hash.ini.
    {: .notice--info}
1. Assicurati che l'hack `Wimmfi patch v4` sia attivato.

    ![](/images/priiloader/hacks.jpg)

1. Scorri verso `Save Settings` e salva le modifiche.
1. Torna al menu principale e seleziona `System Menu` per tornare al Menu Wii.
1. Avvia il tuo gioco tramite il Canale Disco - ora dovrebbe essere patchato con Wiimmfi.

### Patching automatico del backup tramite loader USB

Un metodo per la patch Wiimmfi che applica la patch automaticamente su backup di giochi nelle ultime versioni di USB Loader GX o WiiFlow Lite.

#### Requisiti

+ Un Wii con connessione a Internet
+ [USB Loader GX o WiiFlow Lite](wii-loaders)

#### Istruzioni

1. Apri le impostazioni di gioco o globali per il tuo loader USB e cerca l'opzione `server privato`. Per impostazione predefinita, sarà impostato su `Off`.
1. Imposta l'opzione su `Wiimmfi` e salva le impostazioni. Per impostazione predefinita, ora la patch per Wiimmfi si applicherà sui giochi automaticamente.

### Patching automatico del disco tramite DNS personalizzato

Un metodo per la patch Wiimmfi che si esegue su giochi su disco automaticamente tramite l'utilizzo di un server DNS personalizzato. Nonostante sia conveniente, funzionerà solo su una minore selezione di giochi tra cui Mario Kart Wii e SSBB. Per via della natura di questo processo, si può effettuare su Wii senza homebrew.

Se ottieni l'errore 20100 o 20110, il gioco a cui stai tentando di giocare non è supportato da questo metodo.
{: .notice--warning}

Se ottieni l'errore 23400, il tuo ISP o rete sta bloccando l'utilizzo di un DNS personalizzato.<br> Per risolvere questo problema, Wiimmfi ha un server DNS personalizzato che può essere eseguito sul tuo PC - puoi saperne di più [qui](https://wiimmfi.de/patcher/dnspatch#customdns).
{: .notice--warning}

#### Requisiti

+ Un Wii con connessione a Internet

#### Istruzioni

1. Vai su `Impostazioni console Wii > Internet > Impostazioni di collegamento` e seleziona la connessione che stai utilizzando. Poi, `Modifica > Ottieni automaticamente DNS NO > Impostazioni avanzate`. Imposta il tuo DNS primario su `95.217.77.181` e il tuo DNS secondario su `1.1.1.1`.
1. Lascia che si completi la prova di connessione e non effettuare un aggiornamento di sistema Wii.
1. Avvia il tuo gioco tramite il Canale Disco - ora dovrebbe essere patchato con Wiimmfi.

### Patching manuale del disco tramite Homebrew Channel

Un metodo per la patch Wiimmfi che viene eseguito sui giochi su disco, ma deve essere eseguito manualmente tramite l'Homebrew Channel.

#### Requisiti

+ Una scheda SD o dispositivo USB
+ [Auto Wiimmfi Patcher](https://oscwii.org/library/app/wiimmfipatcher)

#### Istruzioni

1. Semplicemente estrai la cartella `apps` da questo archivio al root della tua scheda SD o unità USB.
1. Inserisci la tua scheda SD o unità USB nella la tua console Wii e avvia Auto Wiimmfi Patcher dall'Homebrew Channel.
1. Inserisci il disco del gioco (se non è già inserito), attendi che la patch si completi e il gioco dovrebbe avviarsi.

### Patching manuale del disco tramite l'Accordo Utente

Un metodo per la patch Wiimmfi che viene eseguito sui giochi su disco, ma deve essere eseguito manualmente tramite l'Accordo Utente (derivato da [str2hax](str2hax)). Per via della natura di questo processo, si può effettuare su Wii senza homebrew.

#### Requisiti

+ Un Wii con connessione a Internet

#### Istruzioni

1. Inserisci il tuo disco di gioco.
1. Vai su `Impostazioni console Wii > Internet > Impostazioni di collegamento` e seleziona la connessione che stai utilizzando. Poi, `Modifica > Ottieni automaticamente DNS NO > Impostazioni avanzate`. Imposta il tuo DNS primario su `95.217.77.151` e il tuo DNS secondario su `1.1.1.1`.

    ![](/images/wiimmfi/dns-str2hax-wiimmfi.png)

1. Lascia che si completi la prova di connessione e non effettuare un aggiornamento di sistema Wii.
1. Torna due volte indietro fino a `Internet` e premi `Accordo/Contatto`. Poi conferma che vuoi usare WC24 e il Canale Wii Shop.
1. Ora la pagina del patcher Wiimmfi dovrebbe caricarsi. In caso contrario, e se vedi l'accordo predefinito, il tuo router potrebbe non essere compatibile con questo metodo.
1. Attendere un po' per il caricamento del patcher (tipicamente all'incirca 1,5 minuti) e il gioco inserito dovrebbe avviarsi con una patch di Wiimmfi.

### Patching manuale del disco tramite Canale Internet

Se riscontri problemi relativi all'UPnP (tipo il patcher che si blocca su "Init network..." o "add UPnP port forward" per più di 10 secondi), puoi premere il pulsante - sul tuo telecomando Wii o il pulsante Y sul tuo controller GameCube per aggirare il problema appena il patcher si carica.
{: .notice--warning}

Un metodo per la patch Wiimmfi che viene eseguito sui giochi su disco, ma deve essere eseguito manualmente tramite il Canale Internet (derivato da [Flashhax](flashhax)). Per via della natura di questo processo, si può effettuare su Wii senza homebrew. [Questo metodo](wiimmfi#manual-disc-patching-via-eula-user-agreement) è generalmente più affidabile e consigliamo quello.

#### Requisiti

+ Un Wii con una connessione Internet in modalità video a 60Hz
+ Il Canale Internet

#### Istruzioni

1. Apri la seguente pagina web nel Canale Internet: `http://chadsoft.co.uk/wimmfi`
1. Aggiungi la pagina tra i preferiti nel browser cliccando l'icona della stella e poi il pulsante `Aggiungi pagina attuale`.
1. Ritorna al Menu Wii.
1. Apri nuovamente il Canale Internet e apri il preferito che hai appena aggiunto.
1. Il patcher di Wiimmfi dovrebbe avviarsi. Sii paziente, poiché Flashhax può essere molto instabile - potrebbero volerci diversi tentativi purché funzioni.

### Patching manuale di WiiWare tramite PC

Un metodo per la patch Wiimmfi che viene eseguito sui giochi WiiWare, ma deve essere eseguito manualmente su un PC tramite uno script.

#### Requisiti

* Una scheda SD
* La copia del tuo gioco (in formato WAD)
* [WiiWare Patcher](https://github.com/RiiConnect24/WiiWare-Patcher/releases/latest) (cross platform)
* [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

#### Istruzioni

1. Estra il .zip dell'ultima versione del WiiWare Patcher e inserisci il WAD al suo interno.
1. Esegui lo script della patch per il tuo sistema operativo: di solito termina con `.bat` per Windows e `.sh` per Mac/Linux. Se stai usando il RiiConnect24 Patcher, seleziona il tuo dispositivo (Wii, vWii o Dolphin) e seleziona il patcher WiiWare.
1. If it completed successfully, install the WAD that was made in `wiiware-wads` with [YAWM ModMii Edition](yawmme).

### Patching manuale di immagine disco tramite PC

Un metodo per la patch Wiimmfi che viene eseguito su immagini di giochi su disco, ma deve essere eseguito manualmente su un PC tramite uno script.

#### Requisiti

+ Un PC Windows/macOS/Linux con una connessione a internet
+ Una copia del gioco su cui effetuare la patch - i formati supportati sono `ISO`, `WDF`, `WIA`, `CISO (=WBI)`, `WBFS`, `GCZ` e `FST` - `NKIT` NON è supportato
+ [Wiimmfi ISO Patcher](https://download.wiimmfi.de/patcher/wiimmfi-patcher-latest.zip)

#### Istruzioni

1. Scarica il patcher ed estrai il file `.zip`.
1. Apri la cartella appena estratta e copia le tue immagini di gioco Wii al suo interno.
    + Se sei su Windows, fai doppio clic sul file `patch-images.bat` (può anche essere visualizzato come file batch "patch-images"). Se riscontri problemi relativi a Cygwin, prova invece il file `patch-images-32.bat`.
    + Se sei su macOS, apri un prompt di riga di comando nella cartella attuale e rendi lo script di shell eseguibile tramite il comando `chmod +x *.sh` e poi esegui `./patch-images.sh`.
    + Se sei su Linux, fai doppio click sul file `patch-images.desktop` (può anche essere visualizzato come "Patch Images") oppure esegui il file `./patch-images.sh` tramite un terminal dopo averlo reso eseguibile con il comando `chmod +x *.sh`.
1. Se i passaggi sopra sono stati terminati con successo, dovresti vedere una finestra di pop-up che mostra il processo di patching. Una volta terminato il processo, troverai le immagini patchate in una cartellca chiamata `wiimmfi-images`.

Complimenti per aver raggiunto la fine della sezione facoltativa della guida principale! Puoi andare all'indice del sito qui in basso se vuoi cercare altre guide.
{: .notice--success}

[Clicca qui per tornare alla Navigazione del Sito.](site-navigation)
{: .notice--info}
