# Temi Wii

Questa guida è destinata ad essere l'ultima di cui avrete bisogno per installare temi su Wii, contenendo non solo istruzioni per il menu Wii con csm-installer, ma anche per l'installazione di temi su WiiFlow Lite, USB Loader GX e il l'Homebrew Channel. Inoltre, tratteremo anche di forwarder.

## Applicare temi sul menu Wii

:::details Informazioni importanti

- csm-installer ha misure di sicurezza integrate per bloccare l'installazione di temi corrotti o malformati. Usa questo homebrew per prevenire brick.
- Non usare nessun'altra versione di ThemeMii oltre a quella fornita qui, poiché ThemeMii Mod ti permette di creare un tema per il menu Wii versione 4.3, le altre non possono.
- Prima di procedere, è fondamentale conoscere la differenza tra .MYM e .CSM come formati di file utilizzati nella personalizzazione del menu Wii. Mentre MYM è creato dal tuo creatore di temi che puoi condividere in giro, il CSM è il risultato della compilazione di un MYM in un menu di sistema. In altre parole, MYM sono i contenuti - CMS è il risultato da installare.

:::

::: danger

**Avvertenze**

- NON continuare con questa guida affinché non hai una protezione adeguata dai brick con [BootMii](bootmii) (solo Wii) e [Priiloader](priiloader) installati.
- Installa solo i temi che sono stati creati appositamente per la versione e la regione della tua console Wii. Installare temi di versioni o regioni diverse potrebbe comportare a un [brick dal tema](bricks#theme-brick). Questo tutorial ti dirà come creare un file .csm che sia sicuro da installare.

:::

### Fonti dove trovare temi

- [Wii Theme Team Creations](https://gbatemp.net/threads/wii-theme-team-creations.260327/) (distrubuzione di file .mym)
- [Wii Theme Google Drive](https://drive.google.com/drive/folders/1H8bKkZa5Nwy7tBmDvKEVXhoZStucpUr3) (distribuzione di file .mym)
- [GBAtemp Other Files for Wii](https://gbatemp.net/download/categories/other-files.166/) (distribuzione di gile .mym)
- [Wii Themer](http://www.wiithemer.org/) (Questo sito può costruire un file .csm pronto all'installazione per Wii e vWii, ma per Wii mini dovresti scaricare i file .mym dal loro [database](http://wiithemer.org/mym/))

### Requisiti

- Una scheda SD o un'unità USB
- Un computer Windows con una connessione a Internet
- [csm-installer](https://oscwii.org/library/app/csm-installer)
- [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)

### Scaricare il tema base

::::: tabs

:::: tab (Tutti) tramite csm-installer

1. Estrai il file `.zip` di csm-installer nella root della tua scheda SD o unità USB.
2. Inserisci la tua scheda SD o unità USB nella console, poi avvia l'Homebrew Channel.
3. Avvia csm-installer, poi seleziona `Download original Wii theme (Base theme)`
4. Quando il tema base finisce di scaricarsi, premi HOME per uscire dall'applicazione.
5. Inserisci di nuovo la scheda SD o l'unità USB nel tuo PC. Il tema sarà salvato in una cartella chiamata `themes`.

::::

:::: tab (Wii) tramite NUSGet

1. Sul tuo computer, scarica [NUSGet](https://github.com/NinjaCheetah/NUSGet/releases/latest/) scegliendo l'archivio corrispondente al tuo sistema operativo. Per utenti Windows, dovreste scegliere il file `NUSGet-Windows-x86_64-bin.zip`.
2. Estrai l'archivio ed esegui NUSGet.
3. Naviga fino `Sistema` > `Menu di sistema` > `La tua regione` e seleziona la versione del menu Wii che hai. Attiva l'opzione `Crea contenuto decriptato (*.app)`, disattiva `Mantieni contenuti criptati` e poi clicca `Avvia download`.

   ![](/images/desktop-apps/nusget/nusget-wiimenu-dl.png)
4. Quando hai finito di scaricare i file del menu Wii, clicca la cartella vinico `Avvia download`. Questo aprirà il tuo gestore file alla cartella download di NUSGet.

   ![](/images/desktop-apps/nusget/nusget-open-downloads.png)
5. Apri la cartella `0000000100000002`.

   ![](/images/desktop-apps/nusget/nusget-folder-wiimenu.png)
6. Trova il **file .app più pesante** (intorno ai ~6-7MB) dentro la cartella.

   ![](/images/desktop-apps/nusget/nusget-wiimenu-output.png)
7. Crea la cartella `themes` nella root della tua scheda SD o unità USB.
8. Copia il file .app appena creato nella cartella `themes`. Questo tema è la base per iniziare a costruire il tuo.

::::

:::: tab (vWii) tramite NUSGet

1. Sul tuo computer, scarica [NUSGet](https://github.com/NinjaCheetah/NUSGet/releases/latest/) scegliendo l'archivio corrispondente al tuo sistema operativo. Per utenti Windows, dovreste scegliere il file `NUSGet-Windows-x86_64-bin.zip`.

2. Estrai l'archivio ed esegui NUSGet.

3. Seleziona `vWii` e naviga in `Sistema` > `Menu di sistema` > `La tua regione`.

4. Seleziona la versione corrispondente alla regione della tua console Wii U dalla tabella sotto:

   |  Regione |                                       Versione menu vWii                                       |
   | :------: | :--------------------------------------------------------------------------------------------: |
   | Giappone | v608 (4.3J - Wii U v5.2.0J) |
   |    USA   | v609 (4.3U - Wii U v5.2.0U) |
   |  Europa  | v610 (4.3E - Wii U v5.2.0E) |

5. Attiva l'opzione `Crea contenuto decriptato (*.app)`, disattiva `Mantieni contenuti criptati` e poi clicca `Avvia download`.

   ![](/images/desktop-apps/nusget/nusget-vwiimenu-dl.png)

6. Quando hai finito di scaricare i file del menu Wii, clicca la cartella vinico `Avvia download`. Questo aprirà il tuo gestore file alla cartella download di NUSGet.

   ![](/images/desktop-apps/nusget/nusget-open-downloads.png)

7. Apri la cartella `0000000700000002`.

   ![](/images/desktop-apps/nusget/nusget-folder-vwiimenu.png)

8. Trova il file .app corrispondente alla regione della tua console Wii U dalla tabella sotto:

   |  Regione |   file .app  |
   | :------: | :--------------------------: |
   | Giappone | 0000001C.app |
   |    USA   | 0000001F.app |
   |  Europa  | 00000022.app |

9. Crea la cartella `themes` nella root della tua scheda SD o unità USB.

10. Copia il file .app nella cartella `themes`. Questo tema è la base per iniziare a costruire il tuo.

::::

:::: tab (Wii) tramite ThemeMii

1. Crea la cartella `themes` nella root della tua scheda SD o unità USB.
2. Estrai il file `.zip` di ThemeMii MOD sul tuo PC.
3. Apri l'applicazione ThemeMii.
4. Vai su `Tools` > `Download Base App` > `Version of your Wii Menu` > `Region of your Wii Menu`.
5. Una finestra di dialogo si aprirà chiedendoti di inserire un valore per creare una chiave. Inserisci quello che ti dice e creerà una chiave che sarà utilizzata per decifrare i contenuti del menu Wii dai server di Nintendo.
6. Quando ti chiede dove salvare il file .app, seleziona la cartella `themes` nella tua scheda SD o unità USB.

::::

:::::

### Creare un tema

1. Estrai il file `.zip` di ThemeMii MOD sul tuo PC.
2. Apri l'applicazione ThemeMii.
3. Vai su `File` > `Open` e seleziona il file `.mym` del tema che vuoi costruire.
4. Premi `Create csm`.
5. Quando ti chiede il file `.app`, seleziona il tema base dalla cartella `themes` della tua scheda SD o unità USB.
6. Quando ti chiede dove salvare il file `.csm`, salvala nella cartella `themes`.
7. Dopo che il tema è stato creato, sarà chiesto se salvare il file `.mym`. Premi `No`.

### Installazione del tema

1. Inserisci la tua scheda SD o la tua unità USB nella console e avvia l'Homebrew Channel.
2. Avvia csm-installer e attendi che carichi.
3. Seleziona il tema che vuoi installare con `A`. A questo punto, devi essere assolutamente sicuro che hai scaricato il tema corretto per la tua versione del menu di sistema e regione.
4. Premi `+` per installare il tema.
5. Ritorna al menu Wii e verifica che il tema sia stato installato correttamente. Se tutto va bene, dovresti avere un risultato simile a quello in basso!

   ![](/images/themes/themed-wii-menu.png)

## Personalizzazione di WiiFlow Lite

Purtroppo, a causa delle differenze di codice tra il WiiFlow originale e il più recente WiiFlow Lite, i temi sono sparsi - infatti, potresti trovare solo un tema che funzionerà a dovere con la versione più recente. Le istruzioni per installare quel tema sono qui in basso.

### Requisiti

- Una console Wii modificata
- Una scheda SD o un'unità USB
- [WiiFlow Lite](wii-loaders#wiiflow-lite)
- Un PC Windows/macOS/Linux con una connessione a Internet
- [Rhapsodii Shima](https://gbatemp.net/threads/rhapsodii-shima-5-4.555062/)

### Istruzioni

1. Inserisci il dispositivo di archiviazione contenente WiiFlow Lite nel tuo PC.
2. Scarica l'archivio Rhapsodii Shima, una delle due versioni del tema funziona e possono essere installate affiancate senza problemi.
3. Estrai e copia la cartella `wiiflow` nella root del tuo dispositivo di archiviazione, unisci tutte le cartelle e socrascrivi i file se richiesto.
4. Segui le istruzioni sulla configurazione del tema dentro `installation.txt`. Goditi il tema!

## Personalizzazione di USB Loader GX

### Requisiti

- Una console Wii modificata
- Una scheda SD o un'unità USB
- [USB Loader GX](wii-loaders#usb-loader-gx)
- Un PC Windows/macOS/Linux con una connessione a Internet
- Un [tema](https://gbatemp.net/threads/dark-wii-usb-loader-gx-themes.584493/), questo link contiene un paio di temi scuri

### Istruzioni

1. Scarica il file `.zip` di un tema dal sito sopracitato, o in qualsiasi altro posto dove puoi trovarne uno.
2. Estrai i contenuti del file `.zip` dentro la cartella `/apps/usbloader_gx` nel dispositivo di archiviazione dove hai installato USB Loader GX.
3. Inserisci il dispositivo di archiviazione nella tua console Wii e accendila.
4. Avvia USB Loader GX, vai in `Impostazioni`, poi su `Menu Tema`.
5. Apri il tema e installalo.

## Personalizzazione dell'Homebrew Channel

### Requisiti

- Una console Wii modificata
- Una scheda SD o un'unità USB
- Un PC Windows/macOS/Linux con una connessione a Internet
- Un [tema](https://wiibrew.org/wiki/Homebrew_Channel/Themes) da WiiBrew

### Istruzioni

1. Scarica il file `.zip` di un tema dal sito sopracitato.

   ![](/images/themes/homebrew-channel-example-theme.png)

2. Incolla il file `.zip` nella cartella `apps` nel dispositivo di archiviazione dove carichi gli homebrew.

   ![](/images/themes/homebrew-channel-paste-zip.png)

3. Estrai i contenuti del file `.zip` nella cartella `apps`, poi cancella l'archivio.

   ![](/images/themes/homebrew-channel-extract-theme.png)

4. Reinserisci il dispositivo di archiviazione nella tua console Wii e avvia l'Homebrew Channel.

5. Il tema che hai appena installato può essere caricato nello stesso modo in cui si caricano le app standard.

   ![](/images/themes/homebrew-channel-load-theme.png)

6. Ora il tema dovrebbe essere caricato, divertiti!

   ![](/images/themes/homebrew-channel-theme-done.png)

## Forwarder delle app

I forwarder possono aggiungere quel tocco extra al menu Wii - ma fai attenzione in quanto potrebbero causare un [brick dal banner](bricks#banner-brick). Generalmente, puoi trovare i forwarder in posti come [GBAtemp](https://gbatemp.net/threads/wii-forwarder-repository.588781/) per app popolari e emulatori. Dato che vengono nel formato .WAD, il processo d'installazione è semplice tramite [YAWM ModMii Edition](yawmme).

---

::: tip

[Clicca qui per tornare all'indice.](site-navigation)

:::
