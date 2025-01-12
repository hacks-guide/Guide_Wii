# Nintendo Wi-Fi Connection

Il Nintendo Wi-Fi Connection era un servizio di giochi multiplayer online per Wii, consentendo il gioco online gratuito. Mentre diversi giochi sono stati supportato più di altri, ad agosto 2023 i giochi non possono più connettersi con mezzi convenzionali. Per ripristinare il funzionamento di Nintendo WFC, questa guida fornisce istruzioni sull'installazione di Wimmfi. Sono elencati diversi metodi per connettersi a Wimmfi, in ordine dal meno complicato al più complicato - scegli il metodo che fa più al tuo caso.

::: warning

If you get error 23904 while connecting to Wiimmfi, then you are using an outdated patch.

Follow the steps below for the method you're using to connect to Wiimmfi again.

See [this page](https://wiimmfi.de/update) for more details.

:::

## Patching automatico del disco tramite Priiloader

::: warning

If the `Wiimmfi Patch` displays as anything other than v4, you do not have the latest version of the hacks_hash.ini file and the patch will not work. Devi reinstallare Priiloader, per il quale puoi trovare la guida nella sezione dei requisiti.

:::

Un metodo per la patch Wiimmfi che viene eseguito automaticamente sui giochi su disco tramite il Canale Disco.

### Requirements

- Un Wii con una connessione Internet e il Menu di sistema versione 4.3
- [Priiloader](priiloader) 0.9 or later

### Instructions

1. Tieni premuto il pulsante RESET mentre accendi il tuo Wii. Se stai usando un Wii mini, connetti una tastiera USB e tieni il tasto Esc mentre lo accendi.

2. Dovresti vedere il menu di Priiloader.

   ![](/images/priiloader/mainmenu.png)

3. Go to `System Menu Hacks`.

   ::: info

   Se hai usato un'unità USB per installare Priiloader, assicurati di non avere una scheda SD inserita allo stesso tempo.
   Altrimenti, Priiloader potrebbe non trovare il file hacks_hash.ini.

   :::

4. Make sure the `Wiimmfi patch v4` hack is enabled.

   ![](/images/priiloader/hacks.png)

5. Scroll to `Save Settings` and save your changes.

6. Return to the main menu, and press `System Menu` to return to the Wii Menu.

7. Avvia il tuo gioco tramite il Canale Disco - ora dovrebbe essere patchato con Wiimmfi.

## Patching automatico del backup tramite loader USB

Un metodo per la patch Wiimmfi che applica la patch automaticamente su backup di giochi nelle ultime versioni di USB Loader GX o WiiFlow Lite.

### Requirements

- Un Wii con connessione a Internet
- [USB Loader GX or WiiFlow Lite](wii-loaders)

### Instructions

1. Open the game or global settings for your specific USB loader and search for the `Private Server` option. By default, it will be set to `Off`.
2. Set the option to `Wiimmfi` and save the settings. Per impostazione predefinita, ora la patch per Wiimmfi si applicherà sui giochi automaticamente.

## Patching automatico del disco tramite DNS personalizzato

Un metodo per la patch Wiimmfi che si esegue su giochi su disco automaticamente tramite l'utilizzo di un server DNS personalizzato. Nonostante sia conveniente, funzionerà solo su una minore selezione di giochi tra cui Mario Kart Wii e SSBB. Per via della natura di questo processo, si può effettuare su Wii senza homebrew.

::: warning

Se ottieni l'errore 20100 o 20110, il gioco a cui stai tentando di giocare non è supportato da questo metodo.

:::

::: warning

If you get error 23400, your ISP or network is blocking the use of a custom DNS.

To solve this issue, Wiimmfi has a custom DNS server that can be ran on your PC - you can read about it [here](https://wiimmfi.de/patcher/dnspatch#customdns).

:::

### Requirements

- Un Wii con connessione a Internet

### Instructions

1. Go to `Wii Settings > Internet > Connection Settings` and select whatever connection you are using. Then, `Change Settings > Auto-Obtain DNS NO > Advanced Settings`. Set your primary DNS to `95.217.77.181`, and your secondary DNS to `1.1.1.1`.
2. Lascia che si completi la prova di connessione e non effettuare un aggiornamento di sistema Wii.
3. Avvia il tuo gioco tramite il Canale Disco - ora dovrebbe essere patchato con Wiimmfi.

## Patching manuale del disco tramite Homebrew Channel

Un metodo per la patch Wiimmfi che viene eseguito sui giochi su disco, ma deve essere eseguito manualmente tramite l'Homebrew Channel.

### Requirements

- Una scheda SD o dispositivo USB
- [Auto Wiimmfi Patcher](https://oscwii.org/library/app/wiimmfipatcher)

### Instructions

1. Simply extract the `apps` folder in this archive to the root of your SD card or USB drive.
2. Inserisci la tua scheda SD o unità USB nella la tua console Wii e avvia Auto Wiimmfi Patcher dall'Homebrew Channel.
3. Inserisci il disco del gioco (se non è già inserito), attendi che la patch si completi e il gioco dovrebbe avviarsi.

## Patching manuale del disco tramite l'Accordo Utente

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the EULA User Agreement (derives from [str2hax](str2hax)). Per via della natura di questo processo, si può effettuare su Wii senza homebrew.

### Requirements

- Un Wii con connessione a Internet

### Instructions

1. Inserisci il tuo disco di gioco.

2. Go to `Wii Settings > Internet > Connection Settings` and select whatever connection you are using. Then, `Change Settings > Auto-Obtain DNS NO > Advanced Settings`. Set your primary DNS to `95.217.77.151`, and your secondary DNS to `1.1.1.1`.

   ![](/images/wiimmfi/dns-str2hax-wiimmfi.png)

3. Lascia che si completi la prova di connessione e non effettuare un aggiornamento di sistema Wii.

4. Go back twice to `Internet`, and press `User Agreements`. Poi conferma che vuoi usare WC24 e il Canale Wii Shop.

5. Ora la pagina del patcher Wiimmfi dovrebbe caricarsi. In caso contrario, e se vedi l'accordo predefinito, il tuo router potrebbe non essere compatibile con questo metodo.

6. Attendere un po' per il caricamento del patcher (tipicamente all'incirca 1,5 minuti) e il gioco inserito dovrebbe avviarsi con una patch di Wiimmfi.

## Patching manuale del disco tramite Canale Internet

::: warning

Se riscontri problemi relativi all'UPnP (tipo il patcher che si blocca su "Init network..." o "add UPnP port forward" per più di 10 secondi), puoi premere il pulsante - sul tuo telecomando Wii o il pulsante Y sul tuo controller GameCube per aggirare il problema appena il patcher si carica.

:::

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the Internet Channel (derives from [Flashhax](flashhax)). Per via della natura di questo processo, si può effettuare su Wii senza homebrew. [This](nintendowfc#manual-disc-patching-via-eula-user-agreement) method is generally more reliable, and is recommended instead.

### Requirements

- Un Wii con una connessione Internet in modalità video a 60Hz
- Il Canale Internet

### Instructions

1. Open the following webpage in the Internet Channel: `http://chadsoft.co.uk/wiimmfi`
2. Add the page to the browser favorites by clicking the Star icon, then the `Add Favorite` button.
3. Ritorna al Menu Wii.
4. Apri nuovamente il Canale Internet e apri il preferito che hai appena aggiunto.
5. Il patcher di Wiimmfi dovrebbe avviarsi. Sii paziente, poiché Flashhax può essere molto instabile - potrebbero volerci diversi tentativi purché funzioni.

## Patching manuale di WiiWare tramite PC

Un metodo per la patch Wiimmfi che viene eseguito sui giochi WiiWare, ma deve essere eseguito manualmente su un PC tramite uno script.

### Requirements

- Una scheda SD
- La copia del tuo gioco (in formato WAD)
- [WiiWare Patcher](https://github.com/RiiConnect24/WiiWare-Patcher/releases/latest) (cross platform)
- [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

### Instructions

1. Estra il .zip dell'ultima versione del WiiWare Patcher e inserisci il WAD al suo interno.
2. Run the patch script for your OS: usually it will end in `.bat` for Windows and `.sh` for Mac/Linux. Se stai usando il RiiConnect24 Patcher, seleziona il tuo dispositivo (Wii, vWii o Dolphin) e seleziona il patcher WiiWare.
3. If it completed successfully, install the WAD that was made in `wiiware-wads` with [YAWM ModMii Edition](yawmme).

## Patching manuale di immagine disco tramite PC

Un metodo per la patch Wiimmfi che viene eseguito su immagini di giochi su disco, ma deve essere eseguito manualmente su un PC tramite uno script.

### Requirements

- Un PC Windows/macOS/Linux con una connessione a internet
- A copy of the game you want to patch - supported formats are `ISO`, `WDF`, `WIA`, `CISO (=WBI)`, `WBFS`, `GCZ`, and `FST` - `NKIT` is NOT supported
- [Wiimmfi ISO Patcher](https://download.wiimmfi.de/patcher/wiimmfi-patcher-latest.zip)

### Instructions

1. Download the patcher and extract the `.zip` file.
2. Apri la cartella appena estratta e copia le tue immagini di gioco Wii al suo interno.
   - If you're on Windows, double-click the `patch-images.bat` file (this may also be displayed as "patch-images" Batch File). If you run into Cygwin-related issues, try the `patch-images-32.bat` file instead.
   - If you're on MacOS, open a command line prompt in the current folder, make the shell script executable through the command `chmod +x *.sh` and then execute `./patch-images.sh`.
   - If you're on Linux, double-click the `patch-images.desktop` file (this may also be displayed as "Patch Images") or execute the `./patch-images.sh` file in a terminal after making it executable through the command `chmod +x *.sh`.
3. Se i passaggi sopra sono stati terminati con successo, dovresti vedere una finestra di pop-up che mostra il processo di patching. Once the process finishes, you will find the patched images in a folder called `wiimmfi-images`.

::: tip

Complimenti per aver raggiunto la fine della sezione facoltativa della guida principale! Puoi andare all'indice del sito qui in basso se vuoi cercare altre guide.

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::
