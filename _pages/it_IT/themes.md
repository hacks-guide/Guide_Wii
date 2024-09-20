---
title: "Temi Wii"
---

{% include toc title="Table of Contents" %}

Questa guida è destinata ad essere l'ultima di cui avrete bisogno per installare temi su Wii, contenendo non solo istruzioni per il menu Wii con csm-installer, ma anche per l'installazione di temi su WiiFlow Lite, USB Loader GX, e il Canale Homebrew. Inoltre, tratteremo anche di forwarder.

### Applicare temi sul Menu Wii

NON SEGUIRE QUESTA GUIDA SE NON HAI DELLA PROTEZIONE ADEGUATA AL BRICK, SPECIFICATAMENTE [BOOTMII](bootmii) (Solo per Wii) e [PRIILOADER](priiloader)!
{: .notice--danger}

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
+ [Wii Themer](http://www.wiithemer.org/) (This site can build a .csm ready to install for Wii and vWii only, but for Wii mini you may download the .mym files from their [Theme Database](http://wiithemer.org/mym/))

#### Requisiti

* Una scheda SD o dispositivo USB
* Un computer Windows con una connessione ad internet
* [csm-installer](https://oscwii.org/library/app/csm-installer)
* [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)

#### Downloading the Base Theme

<button class="btn btn--large btn--info tabLink" onclick='select_tab(event, "csm-installer")' >(All) Via csm-installer</button>
<button class="btn btn--large btn--info tabLink" onclick='select_tab(event, "nus-downloader-wii")' >(Wii) Via NUS Downloader</button>
<button class="btn btn--large btn--info tabLink" onclick='select_tab(event, "nus-downloader-vwii")' >(vWii) Via NUS Downloader</button>
<button class="btn btn--large btn--info tabLink" onclick='select_tab(event, "thememii")' >(Wii) Via ThemeMii</button>

<div id="csm-installer" class="tabContent tabDefault" markdown="1">

1. Estrai il file csm-installer `.zip` nella radice della tua scheda SD o del tuo dispositivo USB.
1. Inserisci la tua scheda SD o il tuo dispositivo USB nella console, e avvia il Canale Homebrew.
1. Launch csm-installer, then select `Download original Wii theme (Base theme)`
1. Quando il tema base finisce di scaricarsi, premi HOME per uscire dall'applicazione.
1. Inserisci di nuovo la scheda SD/dispositivo USB nel tuo PC. The base app will be saved to a folder named `themes`.
</div>

<div id="nus-downloader-wii" class="tabContent" markdown="1">

1. Sul tuo computer, scarica [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip).
1. Copia tutti i file dal `.zip` di NUS Downloader a una cartella sul tuo computer.
1. Esegui `NUS Downloader.exe`.
1. Navigate to `Database` -> `System` -> `System Menu`.
1. Select the version that corresponds to your Wii menu version.
1. Check the `Create decrypted contents (*.app)` box.
1. Clicca `Start NUS Download!`.
1. Once the download is finished, there will be a folder named `titles` in the same folder as the NUS Downloader.
1. Open the `titles` folder, then the `0000000100000002` folder inside it.
1. Find the **largest .app file** (usually 6~7MB) inside the folder.
1. Crea una cartella chiamata `themes` nella radice della tua scheda SD o dispositivo USB.
1. Copy the .app file to the newly created `themes` folder. This is the base theme you will use to build your custom theme.
</div>

<div id="nus-downloader-vwii" class="tabContent" markdown="1">

1. On your computer, download [NUS Downloader (vWii)](/assets/files/NUSDownloader-vwii.zip)
1. Copy all files from the vWii NUS Downloader `.zip` to a folder on your computer.
1. Esegui `NUS Downloader.exe`.
1. Navigate to `Database` -> `System` -> `System Menu`.
1. Select the version that corresponds to your Wii U's region in the table below:

| Regione  | vWii Menu version |
| -------- | ----------------- |
| Giappone | v608              |
| USA      | v609              |
| Europa   | v610              |

1. Check the `Create decrypted contents (*.app)` box.
1. Clicca `Start NUS Download!`.
1. Once the download is finished, there will be a folder named `titles` in the same folder as the NUS Downloader.
1. Open the `titles` folder, then the `0000000700000002` folder inside it.
1. Find the .app file that corresponds to your Wii U's region in the table below:

| Regione  | .app file    |
| -------- | ------------ |
| Giappone | 0000001c.app |
| USA      | 0000001f.app |
| Europa   | 00000022.app |

1. Crea una cartella chiamata `themes` nella radice della tua scheda SD o dispositivo USB.
1. Copy the .app file to the newly created `themes` folder. This is the base theme you will use to build your custom theme.
</div>

<div id="thememii" class="tabContent" markdown="1">

1. Crea una cartella chiamata `themes` nella radice della tua scheda SD o dispositivo USB.
1. Estrai il file ThemeMii MOD `.zip` in qualunque luogo sul tuo PC.
1. Launch the ThemeMii application.
1. Go to `Tools` -> `Download Base App` -> `Version of your Wii Menu` -> `Region of your Wii Menu`.
1. Una finestra di dialogo si aprirà chiedendoti di inserire un valore per creare una chiave. Inserisci quello che ti dice e creerà una chiave che sarà utilizzare per decifrare i contenuti del Menu Wii dai server di Nintendo.
1. A file selection box will ask you where to save the .app file. Save it to the `themes` folder on your SD card/USB device.
</div>

#### Creazione di un tema

1. Estrai il file ThemeMii MOD `.zip` in qualunque luogo sul tuo PC.
1. Launch the ThemeMii application.
1. Clicca su `File` -> `Open`, e seleziona il file `.mym` del tema che vuoi applicare.
1. Clicca `Create csm`.
1. When asked to select an `.app` file, select the newly downloaded base theme in the `themes` of your SD card or USB device.
1. Quando viene chiesto di salvare il file `.csm`, salvalo nella cartella `themes`.
1. Dopo che il tema finisce di crearsi, sarà chiesto di salvare il file .mym. Premi `No`.

#### Installazione del tema

1. Inserisci la tua scheda SD o il tuo dispositivo USB nella console, e avvia il Canale Homebrew.
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

<script>
    const tabContents = document.getElementsByClassName('tabContent');
    const tabLinks    = document.getElementsByClassName('tabLink');

    for (tab of tabContents) { tab.style.display = 'none'; }
    document.getElementsByClassName('tabDefault')[0].style.display = 'block';

    function select_tab(event, tab_id)
    {
        for (tab of tabContents) { tab.style.display = 'none'; }
        for (btn of tabLinks) { btn.className = btn.className.replace('btn--primary', 'btn--info'); }

        document.getElementById(tab_id).style.display = 'block';
        event.currentTarget.className = event.currentTarget.className.replace('btn--info', 'btn--primary');
    }
</script>
