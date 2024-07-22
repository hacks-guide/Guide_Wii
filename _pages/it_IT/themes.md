---
title: "Temi Wii"
---

{% include toc title="Table of Contents" %}

Questa guida è destinata ad essere l'ultima di cui avrete bisogno per installare temi su Wii, contenendo non solo istruzioni per il menu Wii con csm-installer, ma anche per l'installazione di temi su WiiFlow Lite, USB Loader GX, e il Canale Homebrew. Inoltre, tratteremo anche di forwarder.

### Personalizzazione del Menu Wii

NON SEGUIRE QUESTA GUIDA SE NON HAI DELLA PROTEZIONE ADEGUATA AL BRICK, SPECIFICATAMENTE [BOOTMII](bootmii) (Solo per Wii) E [PRIILOADER](priiloader)!
{: .notice--danger}

Questo tutorial non funziona su Wii mini. Non eseguire le azioni nelle istruzioni di questo tutorial su Wii mini o causerà un [brick](bricks#theme-brick).
{: .notice--warning}

csm-installer ha delle funzioni di sicurezza incorporate per evitare l'installazione di temi per il menu Wii corrotti, quindi si prega di utilizzare quello invece di altre applicazioni homebrew per installare i temi sul menu Wii.
{: .notice--warning}

Non usare nessun'altra versione di ThemeMii oltre a quella fornita da qui, poiché ThemeMii Mod ti permette di creare un tema per il Menu Wii versione 4.3, le altre versioni non possono.
{: .notice--warning}

Sul tuo Wii, installa solo i temi che sono creati appositamente per la sua versione e regione attuali. L'installazione di temi della versione o regione sbagliata sul tuo Wii causerà un [brick](bricks#theme-brick). Questo tutorial ti dirà come creare un file .csm che è sicuro da installare.
{: .notice--danger}

Prima di procedere, è fondamentale conoscere la differenza tra .MYM e .CSM come formati di file utilizzati nella personalizzazione del Menu Wii. Mentre il MYM è creato dal tuo creatore di temi che puoi condividere in giro, il CSM è il risultato della compilazione di un MYM in un Menu di sistema. In altre parole, il MYM principalmente contiene solo gli elementi - il vero e proprio Menu di sistema da installare viene a parte.
{: .notice--info}

#### Sorgenti di Temi

+ [Wii Theme Team Creations](https://gbatemp.net/threads/wii-theme-team-creations.260327/) (distribuzione file .mym)
+ [Wii Theme Google Drive](https://drive.google.com/drive/folders/1H8bKkZa5Nwy7tBmDvKEVXhoZStucpUr3) (distribuzione file .mym)
+ [GBAtemp Other Files for Wii](https://gbatemp.net/download/categories/other-files.166/) (distribuzione file .mym)
+ [Wii Themer](http://www.wiithemer.org/) (Solo su Wii, costruttore di temi online per versioni e regioni specifiche, pronto per installare temi .csm)

#### Requisiti

* Una scheda SD o dispositivo USB
* Un computer Windows con una connessione ad internet
* [csm-installer](https://oscwii.org/library/app/csm-installer)
* [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)

#### Creazione di un tema

1. Estrai il file csm-installer `.zip` nella radice della tua scheda SD o del tuo dispositivo USB.
1. Crea una cartella chiamata `themes` nella radice della tua scheda SD o dispositivo USB.
1. Inserisci la tua scheda SD o il tuo dispositivo USB nella console, e avvia il Canale Homebrew.
1. Avvia csm-installer, e tieni premuto `+` mentre l'app sta caricando. Se eseguito correttamente, l'app comincerà a scaricare il tema base per il menu Wii.
1. Quando il tema base finisce di scaricarsi, premi HOME per uscire dall'applicazione.
1. Inserisci di nuovo la scheda SD/dispositivo USB nel tuo PC.
1. Estrai il file ThemeMii MOD `.zip` in qualunque luogo sul tuo PC.
1. Avvia l'app di ThemeMii.
1. Clicca su `File` -> `Open`, e seleziona il file `.mym` del tema che vuoi applicare.
1. Clicca `Create csm`.
1. Quando viene chiesto di selezionare un file `.app`, selezionare il tema base già scaricato nella radice della tua scheda SD o dispositivo USB.
1. Quando viene chiesto di salvare il file `.csm`, salvalo nella cartella `themes`.
1. Dopo che il tema finisce di crearsi, sarà chiesto di salvare il file .mym. Clicca `No`.

#### Installazione del tema

1. Inserisci la scheda SD o dispositivo USB nella tua console, e avvia il Canale Homebrew.
1. Avvia csm-installer, e attendi che si carichi.
1. Seleziona il tema che vuoi installare con `A`. A questo punto, devi essere assolutamente sicuro che hai scaricato il tema corretto per la tua versione del Menu di sistema e regione.
1. Premi `+` per installare il tema.
1. Ritorna al Menu Wii e verifica che il tema sia installato correttamente. Se tutto va bene, dovresti avere un risultato simile a quello in basso!

    ![](/images/themes/themed-wii-menu.png)

### Personalizzazione di WiiFlow Lite

Purtroppo, a causa delle differenze di codice tra il WiiFlow originale e il più recente WiiFlow Lite, i temi sono sparsi - infatti, potresti trovare solo un tema che funzionerà a dovere con la versione più recente. Le istruzioni per installare quel tema sono qui in basso.

#### Requisiti

* Una Wii modificata
* Una scheda SD o dispositivo USB
* [WiiFlow Lite](wii-loaders#wiiflow-lite)
* Un PC Windows/macOS/Linux con una connessione a internet
* [Rhapsodii Shima](https://gbatemp.net/threads/rhapsodii-shima-5-4.555062/)

#### Istruzioni

1. Inserisci il dispositivo di archiviazione che contiene WiiFlow Lite nel tuo PC.
2. Scarica l'archivio Rhapsodii Shima, una delle due versioni del tema funziona e possono essere installate affiancate senza problemi.
3. Estrai e copia la cartella `wiiflow` nel root del tuo dispositivo di archiviazione, unisci tutte le cartelle e sovrascrivi tutti i file quando ti viene chiesto.
4. Segui le istruzioni per la configurazione del tema su `installation.txt`. Goditi il tema!

### Personalizzazione di USB Loader GX

#### Requisiti

* Una Wii modificata
* Una scheda SD o dispositivo USB
* [USB Loader GX](wii-loaders#usb-loader-gx)
* Un PC Windows/macOS/Linux con una connessione a internet
* Un [tema](https://gbatemp.net/threads/dark-wii-usb-loader-gx-themes.584493/), questo link contiene un assortimento di temi scuri

#### Istruzioni

1. Scarica un file `.zip` di un tema dal link fornito in alto oppure ovunque tu possa ottenere un tema adatto.
2. Estrai i contenuti del file `.zip` nel percorso `apps\usbloader_gx` nel tuo dispositivo di archiviazione dove hai installato USB Loader GX.
3. Inserisci il supporto di archiviazione nel tuo Wii e avvialo.
4. Avvia USB Loader GX, vai al menu `Impostazioni` e vai al `Menu temi`.
5. Apri il tema e installalo.

### Personalizzazione dell'Homebrew Channel

#### Requisiti

* Una Wii modificata
* Una scheda SD o dispositivo USB
* Un PC Windows/macOS/Linux con una connessione a internet
* Un [tema](https://wiibrew.org/wiki/Homebrew_Channel/Themes) da WiiBrew

#### Istruzioni

1. Scarica un file `.zip` di un tema dal link fornito in alto.

    ![](/images/themes/homebrew-channel-example-theme.png)

2. Incolla il `.zip` nella cartella `apps` nel tuo dispositivo di archiviazione che usi per caricare gli homebew.

    ![](/images/themes/homebrew-channel-paste-zip.png)

3. Estrai i contenuti del `.zip` nella cartella `apps`, poi elimina l'archivio.

    ![](/images/themes/homebrew-channel-extract-theme.png)

4. Reinserisci il dispositivo di archiviazione nel tuo Wii e avvia l'Homebrew Channel.
5. Il tema che hai appena installato può essere caricato nello stesso modo in cui si caricano le app standard.

    ![](/images/themes/homebrew-channel-load-theme.png)

6. Ora il tema dovrebbe essere caricato, divertiti!

    ![](/images/themes/homebrew-channel-theme-done.png)

### Forwarder delle app

I forwader delle app danno un po' di tocchi in più al tuo Menu Wii - ma fai attenzione con loro, poiché forwarder incorretti posso causare un [banner brick](bricks#banner-brick). In generale, puoi trovare forwarder in posti tipo [GBAtemp](https://gbatemp.net/threads/wii-forwarder-repository.588781/) per le app più note tipo gli emulatori. Siccome i forwarder vengono in formato .WAD, il processo di installazione è tanto semplice quanto il normale utilizzo di [YAWM ModMii Edition](yawmme).


[Clicca qui per tornare alla Navigazione del Sito.](site-navigation)
{: .notice--info}
