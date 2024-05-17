---
title: "Temi Wii"
---

{% include toc title="Table of Contents" %}

This guide is intended to be the last you will ever need when it comes to theming on the Wii, not only providing instructions for the Wii Menu through csm-installer, but also with themes on WiiFlow Lite, USB Loader GX, and The Homebrew Channel. Inoltre, tratteremo anche di forwarder.

### Personalizzazione del Menu Wii

DO NOT CONTINUE WITH THIS GUIDE UNLESS YOU HAVE ADEQUATE BRICK PROTECTION, SPECIFICALLY [BOOTMII](bootmii) (Wii only) AND [PRIILOADER](priiloader)!
{: .notice--danger}

Questo tutorial non funziona su Wii mini. Do not attempt this tutorial on the Wii mini or it will cause a [brick](bricks#theme-brick).
{: .notice--warning}

csm-installer has built in safety features to prevent from installing bad or corrupt Wii Menu themes, so please opt to use it instead of other theme installation homebrew.
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
+ [Wii Themer](http://www.wiithemer.org/) (Wii only, online theme builder for specific versions and regions, ready to install .csm themes)

#### Requisiti

##### Wii

* Una Wii modificata
* Una scheda SD o dispositivo USB
* Un PC Windows/macOS/Linux con una connessione a internet
* [csm-installer](https://oscwii.org/library/app/csm-installer)
* [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)

##### vWii

* A modded vWii
* Una scheda SD o dispositivo USB
* Un PC Windows/macOS/Linux con una connessione a Internet
* [csm-installer](https://oscwii.org/library/app/csm-installer)
* [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)
* [NUS Downloader (vWii)](/assets/files/NUSDownloader-vwii.zip)

#### Creazione di un tema

##### Wii

Se non ti va di usare un programma esterno per la creazione di un tema, puoi anche creare un tema preimpostato da Wii Themer e saltare all'[Installazione del tema](themes#theme-installation).
{: .notice--info}

1. Una volta scaricato il tema che volevi e controllato bene che hai quello giusto per la tua versione del menu di sistema e regione, estrai il file .zip di ThemeMii Mod e avvia l'applicazione.
2. Vai su `Tools` > `Download Base App` > `Version of your Wii Menu` > `Region of your Wii Menu`.
3. Una finestra di dialogo si aprirà chiedendoti di inserire un valore per creare una chiave. Inserisci quello che ti dice e creerà una chiave che sarà utilizzare per decifrare i contenuti del Menu Wii dai server di Nintendo.
4. Una finestra di selezione file ti chiederà dove vuoi salvare il file .app (questo è il file dei contenuti del Menu Wii che ha scaricato). Salvalo nel percorso in cui si trova ThemeMii.
5. Vai su `File` > `Open`, poi cerca il percorso del tuo file .mym.
6. Premi `Create csm`, quindi cerca un percorso in cui vuoi salvare il tema. Dagli un momento per la creazione del tema.
7. Una finestra di dialogo si aprirà chiedendoti se vuoi salvare il .mym. Premi `No`.

##### vWii

Themes from [Wii Themer](http://www.wiithemer.org/) cannot be built automatically for you on the vWii, since it does not use the correct base app. However, you may still download the .mym files from their [theme database](http://wiithemer.org/mym/) to build manually.

Some themes are compatible with the Wii system menu, but aren't compatible with the vWii System Menu, and may result in graphical glitches or even a full [theme brick](bricks#theme-brick).
{: .notice--warning}

1. Extract the .zip file for NUS Downloader vWii and open the application
2. Click on `Database...`
3. Go to `System` > `System Menu` and select the version corresponding to your region as shown in the table below.

| Regione  | vWii Menu version |
| -------- | ----------------- |
| Giappone | v608              |
| USA      | v609              |
| Europa   | v610              |

4. After selecting the correct version to download, check the box for `Create Decrypted Contents (*.app)`. Then, press the `Start NUS Download` Button on the top of the window.

![The database menu in NUS Downloader.](/images/themes/NUSD-vWii_preview-database.png)

![The main menu of NUS downloader without the database menu open.](/images/themes/NUSD-vWii_sysmenu-versions.png)

5. When the download has finished, search for the .app file corresponding to your region in the folder where NUS Downloader is.

| Regione  | .app file for your region |
| -------- | ------------------------- |
| Giappone | 0000001c.app              |
| USA      | 0000001f.app              |
| Europa   | 00000022.app              |

6. Once you have found the .app file, copy it to the main directory of the folder containing ThemeMii. Then, copy a version of it to the theme folder in your SD card.

If you can't find the .app file, it's possible you have downloaded the wrong version of the Wii Menu and you'll need to try again.
{: .notice--info}

#### Installazione del tema

1. Extract the csm-installer `.zip` file to the root of your SD card or USB device.
2. Create a new directory on your SD card or USB device called `themes` if it does not already exist.
3. Copy your `.csm` file to the `themes` directory.
4. Insert your SD card or USB drive into your Wii/Wii U, and launch the Homebrew Channel.
5. Launch csm-installer, and wait for it to load.
6. Select the theme you would like to install with `A`. A questo punto, devi essere assolutamente sicuro che hai scaricato il tema corretto per la tua versione del Menu di sistema e regione.
7. Press `+` to install the theme.
8. Ritorna al Menu Wii e verifica che il tema sia installato correttamente. Se tutto va bene, dovresti avere un risultato simile a quello in basso!

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
