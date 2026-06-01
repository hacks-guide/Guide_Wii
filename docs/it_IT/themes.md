# Temi Wii

Questa guida è pensata per essere l'ultima di cui avrai bisogno per installare i temi su Wii, contenendo istruzioni non solo per il menu Wii tramite csm-installer, ma anche per WiiFlow Lite, USB Loader GX e l'Homebrew Channel. Tratteremo inoltre anche dei forwarder.

## Personalizzazione del menu Wii

::: info

**Informazioni importanti**

- csm-installer dispone di misure di sicurezza integrate che bloccano l'installazione di temi danneggiati o malformati. Usa questo per prevenire al meglio i brick.
- Non utilizzare altre versioni di ThemeMii oltre a quella fornita qui, poiché ThemeMii Mod ti permette di creare un tema per il menu Wii versione 4.3; le altre versioni potrebbero non consentirlo.
- Prima di procedere, è fondamentale conoscere la differenza tra i formati .MYM e .CSM utilizzati per la personalizzazione del menu Wii. MYM è il file che puoi condividere in giro, CSM è il risultato della compilazione del MYM in un menu di sistema. In altre parole, MYM sono i contenuti, CMS è il risultato da installare.

:::

::: danger

**Leggere attentamente**

- NON proseguire con questa guida se non hai una protezione adeguata dai brick con [BootMii](hbc) (solo Wii) e [Priiloader](priiloader) installati.
- Installa solo i temi che sono stati creati appositamente per la versione e la regione della tua console. Fare altrimenti potrebbe portare a un [brick dal tema](bricks#theme-brick). Questo tutorial ti spiegherà come creare un file .csm sicuro da installare.

:::

### Dove trovare dei temi

- [Wii Theme Team Creations](https://gbatemp.net/threads/wii-theme-team-creations.260327/) (.mym)
- [Google Drive](https://drive.google.com/drive/folders/1H8bKkZa5Nwy7tBmDvKEVXhoZStucpUr3) (.mym)
- [La categoria "Other Files" per Wii su GBAtemp](https://gbatemp.net/download/categories/other-files.166/) (.mym)
- [Wii Themer](http://www.wiithemer.org/) (Questo sito può creare un file .csm pronto per l'installazione su Wii e vWii, ma per Wii mini dovrai scaricare i file .mym dal loro [database](http://wiithemer.org/mym/))

### Requisiti

- Una scheda SD o un'unità USB
- Un PC con Windows connesso a Internet
- [csm-installer](https://oscwii.org/library/app/csm-installer)
- [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)

### Scaricare il tema di base

::::: tabs

:::: tab (Tutti) Tramite csm-installer

1. Estrai il file `.zip` di csm-installer nella root della scheda SD o dell'unità USB.
2. Inserisci la scheda SD o l'unità USB nella console e avvia l'Homebrew Channel.
3. Avvia csm-installer, poi seleziona `Download original Wii theme (Base theme)`
4. A download terminato, premi HOME per uscire dall'applicazione.
5. Inserisci di nuovo la scheda SD o l'unità USB nel PC. Il tema sarà salvato in una cartella chiamata `themes`.

::::

:::: tab (Wii) Tramite NUSGet

1. Sul computer, scarica [NUSGet](https://github.com/NinjaCheetah/NUSGet/releases/latest/) scegliendo l'archivio corrispondente al tuo sistema operativo. Per gli utenti Windows, provate `NUSGet-Windows-x86_64-bin.zip`.
2. Estrai l'archivio ed esegui NUSGet.
3. Naviga su `Sistema` -> `Menu di sistema` -> `La tua regione` e seleziona la versione del menu Wii in uso. Spunta l'opzione `Crea contenuto decriptato (*.app)`, disattiva `Mantieni contenuti criptati` e poi clicca `Avvia download`.

   ![](/images/desktop-apps/nusget/nusget-wiimenu-dl.png)
4. A download terminato, clicca la cartella vicino `Avvia download`. Questo aprirà il gestore file alla cartella download di NUSGet.

   ![](/images/desktop-apps/nusget/nusget-open-downloads.png)
5. Apri la cartella `0000000100000002`.

   ![](/images/desktop-apps/nusget/nusget-folder-wiimenu.png)
6. Trova il **file .app più pesante** (intorno ai 6-7MB) all'interno della cartella.

   ![](/images/desktop-apps/nusget/nusget-wiimenu-output.png)
7. Crea la cartella `themes` nella root della scheda SD o dell'unità USB.
8. Copia il file .app appena creato nella cartella `themes`. Questo tema è la base per iniziare a costruire il tuo.

::::

:::: tab (vWii) Tramite NUSGet

1. Sul computer, scarica [NUSGet](https://github.com/NinjaCheetah/NUSGet/releases/latest/) scegliendo l'archivio corrispondente al tuo sistema operativo. Per gli utenti Windows, provate `NUSGet-Windows-x86_64-bin.zip`.

2. Estrai l'archivio ed esegui NUSGet.

3. Seleziona `vWii` e naviga in `Sistema` -> `Menu di sistema` -> `La tua regione`.

4. Seleziona la versione corrispondente alla regione della console dalla tabella seguente:

   |  Regione |                                       Versione menu vWii                                       |
   | :------: | :--------------------------------------------------------------------------------------------: |
   | Giappone | v608 (4.3J - Wii U v5.2.0J) |
   |    USA   | v609 (4.3U - Wii U v5.2.0U) |
   |  Europa  | v610 (4.3E - Wii U v5.2.0E) |

5. Spunta l'opzione `Crea contenuto decriptato (*.app)`, disattiva `Mantieni contenuti criptati` e poi clicca `Avvia download`.

   ![](/images/desktop-apps/nusget/nusget-vwiimenu-dl.png)

6. A download terminato, clicca la cartella vicino `Avvia download`. Questo aprirà il gestore file alla cartella download di NUSGet.

   ![](/images/desktop-apps/nusget/nusget-open-downloads.png)

7. Apri la cartella `0000000700000002`.

   ![](/images/desktop-apps/nusget/nusget-folder-vwiimenu.png)

8. Trova il file .app corrispondente alla regione della console dalla tabella seguente:

   |  Regione |   File .app  |
   | :------: | :--------------------------: |
   | Giappone | 0000001C.app |
   |    USA   | 0000001F.app |
   |  Europa  | 00000022.app |

9. Crea la cartella `themes` nella root della scheda SD o dell'unità USB.

10. Copia il file .app appena creato nella cartella `themes`. Questo tema è la base per iniziare a costruire il tuo.

::::

:::: tab (Wii) Tramite ThemeMii

1. Crea la cartella `themes` nella root della scheda SD o dell'unità USB.
2. Estrai il file `.zip` di ThemeMii MOD sul PC.
3. Apri l'applicazione ThemeMii.
4. Vai su `Tools` -> `Download Base App` -> `Versione del menu Wii` -> `Regione del menu Wii`.
5. Si aprirà una finestra di dialogo che ti chiederà di inserire un valore per creare una chiave. Inserisci ciò che viene richiesto e verrà generata una chiave che servirà a decriptare i contenuti del menu Wii dai server Nintendo.
6. Quando ti chiede dove salvare il file .app, seleziona la cartella `themes` nella scheda SD o nell'unità USB.

::::

:::::

### Compilare un tema

1. Estrai il file `.zip` di ThemeMii MOD sul PC.
2. Apri l'applicazione ThemeMii.
3. Vai su `File` -> `Open` e seleziona il file `.mym` del tema che vuoi compilare.
4. Premi `Create csm`.
5. Quando ti chiede il file `.app`, seleziona il tema base dalla cartella `themes` della scheda SD o dell'unità USB.
6. Quando ti chiede dove salvare il file `.csm`, salvala nella cartella `themes`.
7. A compilazione terminata, ti sarà chiesto se salvare anche il file `.mym`. Premi `No`.

### Installazione del tema

1. Inserisci la scheda SD o l'unità USB nella console e avvia l'Homebrew Channel.
2. Avvia csm-installer e attendi che carichi.
3. Seleziona il tema che vuoi installare con `A`. A questo punto, devi essere assolutamente sicuro che hai scaricato il tema corretto per la versione e la regione del menu di sistema.
4. Premi `+` per installare il tema.
5. Ritorna al menu Wii e verifica che si sia stato installato correttamente. Se tutto va bene, dovresti vedere un risultato simile a quello mostrato qui!

   ![](/images/themes/themed-wii-menu.png)

## Personalizzazione di WiiFlow Lite

Purtroppo, a causa delle differenze di codice tra il WiiFlow originale e il più recente WiiFlow Lite, i temi sono sparsi e potresti trovare solo un tema compatibile con la versione più recente. Le istruzioni per installare quel tema si trovano di seguito.

### Requisiti

- Una console Wii modificata
- Una scheda SD o un'unità USB
- [WiiFlow Lite](wii-loaders#wiiflow-lite)
- Un PC con Windows/macOS/Linux connesso a Internet
- [Rhapsodii Shima](https://gbatemp.net/threads/rhapsodii-shima-5-4.555062/)

### Istruzioni

1. Inserisci l'unità contenente WiiFlow Lite nel PC.
2. Scarica l'archivio Rhapsodii Shima, entrambe le versioni del tema funzionano e possono essere installate contemporaneamente senza alcun problema.
3. Estrai e copia la cartella `wiiflow` nella root dell'unità, unisci tutte le cartelle e sovrascrivi i file se richiesto.
4. Segui le istruzioni per la configurazione del tema contenute in `installation.txt`. Goditi il tema!

## Personalizzazione di USB Loader GX

### Requisiti

- Una console Wii modificata
- Una scheda SD o un'unità USB
- [USB Loader GX](wii-loaders#usb-loader-gx)
- Un PC con Windows/macOS/Linux connesso a Internet
- Un [tema](https://gbatemp.net/threads/dark-wii-usb-loader-gx-themes.584493/), questo link contiene un paio di temi scuri

### Istruzioni

1. Scarica il file `.zip` di un tema dal sito sopracitato o da qualsiasi altro posto in cui puoi trovarne uno.
2. Estrai i contenuti del file `.zip` dentro la cartella `/apps/usbloader_gx` nell'unità contenente USB Loader GX.
3. Inserisci l'unità nella console e accendila.
4. Avvia USB Loader GX, vai in `Impostazioni`, poi su `Menu tema`.
5. Apri il tema e installalo.

## Personalizzazione dell'Homebrew Channel

### Requisiti

- Una console Wii modificata
- Una scheda SD o un'unità USB
- Un PC con Windows/macOS/Linux connesso a Internet
- Un [tema](https://wiibrew.org/wiki/Homebrew_Channel/Themes) da WiiBrew

### Istruzioni

1. Scarica il file `.zip` di un tema dal sito sopracitato.

   ![](/images/themes/homebrew-channel-example-theme.png)

2. Incolla il file `.zip` nella cartella `apps` nell'unità in cui carichi gli homebrew.

   ![](/images/themes/homebrew-channel-paste-zip.png)

3. Estrai i contenuti del file `.zip` nella cartella `apps`, poi elimina l'archivio.

   ![](/images/themes/homebrew-channel-extract-theme.png)

4. Reinserisci il dispositivo di archiviazione nella console e avvia l'Homebrew Channel.

5. Il tema che hai appena installato può essere caricato nello stesso modo in cui avvii le altre app.

   ![](/images/themes/homebrew-channel-load-theme.png)

6. Ora il tema dovrebbe essere caricato, divertiti!

   ![](/images/themes/homebrew-channel-theme-done.png)

## Forwarder delle app

I forwarder possono aggiungere un tocco in più al menu Wii, ma fai attenzione perché potrebbero causare un [brick dal banner](bricks#banner-brick). Generalmente, li puoi trovare su siti come [GBAtemp](https://gbatemp.net/threads/wii-forwarder-repository.588781/) per app popolari ed emulatori. Dato che sono nel formato .WAD, il processo d'installazione è semplice tramite [YAWM ModMii Edition](yawmme).

---

::: tip

[Clicca qui per tornare all'indice.](site-navigation)

:::
