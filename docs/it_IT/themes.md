# Temi Wii

Questa guida è destinata ad essere l'ultima di cui avrete bisogno per installare temi su Wii, contenendo non solo istruzioni per il menu Wii con csm-installer, ma anche per l'installazione di temi su WiiFlow Lite, USB Loader GX, e il Canale Homebrew. Inoltre, tratteremo anche di forwarder.

## Applicare temi sul Menu Wii

:::details Important Information

- csm-installer has built in safety features to prevent you from installing bad or corrupt Wii Menu themes. You are advised to use it instead of other theme installation homebrew to help prevent a brick.
- Non usare nessun'altra versione di ThemeMii oltre a quella fornita da qui, poiché ThemeMii Mod ti permette di creare un tema per il Menu Wii versione 4.3, le altre versioni non possono.
- Prima di procedere, è fondamentale conoscere la differenza tra .MYM e .CSM come formati di file utilizzati nella personalizzazione del Menu Wii. Mentre il MYM è creato dal tuo creatore di temi che puoi condividere in giro, il CSM è il risultato della compilazione di un MYM in un Menu di sistema. In other words, MYM mainly just holds assets - the actual system menu itself that needs to be installed comes separate.

:::

::: danger

**Important Warnings**

- DO NOT continue with this guide unless you have adequate brick protection with [BootMii](bootmii) (Wii only) and [Priiloader](priiloader) installed.
- Sul tuo Wii, installa solo i temi che sono creati appositamente per la sua versione e regione attuali. Installing themes from the wrong version or region on your Wii will cause a [theme brick](bricks#theme-brick). Questo tutorial ti dirà come creare un file .csm che è sicuro da installare.

:::

### Sorgenti di Temi

- [Wii Theme Team Creations](https://gbatemp.net/threads/wii-theme-team-creations.260327/) (.mym file distribution)
- [Wii Theme Google Drive](https://drive.google.com/drive/folders/1H8bKkZa5Nwy7tBmDvKEVXhoZStucpUr3) (.mym file distribution)
- [GBAtemp Other Files for Wii](https://gbatemp.net/download/categories/other-files.166/) (.mym file distribution)
- [Wii Themer](http://www.wiithemer.org/) (This site can build a .csm ready to install for Wii and vWii only, but for Wii mini you may download the .mym files from their [Theme Database](http://wiithemer.org/mym/))

### Requirements

- Una scheda SD o dispositivo USB
- Un computer Windows con una connessione ad internet
- [csm-installer](https://oscwii.org/library/app/csm-installer)
- [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)

### Downloading the Base Theme

::::: tabs

:::: tab (All) Via csm-installer

1. Extract the csm-installer `.zip` file to the root of your SD card or USB device.
2. Inserisci la tua scheda SD o il tuo dispositivo USB nella console, e avvia il Canale Homebrew.
3. Launch csm-installer, then select `Download original Wii theme (Base theme)`
4. Quando il tema base finisce di scaricarsi, premi HOME per uscire dall'applicazione.
5. Inserisci di nuovo la scheda SD/dispositivo USB nel tuo PC. The base app will be saved to a folder named `themes`.

::::

:::: tab (Wii) Via NUSGet

1. On your computer, download [NUSGet](https://github.com/NinjaCheetah/NUSGet/releases/latest/), choosing the archive corresponding to your operating system. For Windows users, you should choose the `NUSGet-Windows-x86_64-bin.zip` file.
2. Unzip the archive and run the NUSGet executable.
3. Navigate to `System` > `System Menu` > `Your Region` and then select the Wii menu version you are running. Check the `Create decrypted contents (*.app)` option. Check `Use a custom download directory` and select the folder that your NUSGet executable is in, then click `Start Download`.

   ![](/images/desktop-apps/nusget/nusget-wiimenu-dl.png)
4. When you have finished downloading the Wii menu files, navigate to the folder where your NUSGet executable is stored. You should locate and open the `0000000100000002` folder inside it.

   ![](/images/desktop-apps/nusget/nusget-folder-wiimenu.png)
5. Find the **largest .app file** (usually ~6-7MB) inside the folder.

   ![](/images/desktop-apps/nusget/nusget-wiimenu-output.png)
6. Create a `themes` folder on the root of your SD card/USB device.
7. Copy the .app file to the newly created `themes` folder. This is the base theme you will use to build your custom theme.

::::

:::: tab (vWii) Via NUSGet

1. On your computer, download [NUSGet](https://github.com/NinjaCheetah/NUSGet/releases/latest/), choosing the archive corresponding to your operating system. For Windows users, you should choose the `NUSGet-Windows-x86_64-bin.zip` file.

2. Unzip the archive and run the NUSGet executable.

3. Select the `vWii` tab and navigate to `System` > `System Menu` > `Your Region`.

4. Select the version that corresponds to your Wii U's region in the table below:

   |  Regione |                                        vWii Menu version                                       |
   | :------: | :--------------------------------------------------------------------------------------------: |
   | Giappone | v608 (4.3J - Wii U v5.2.0J) |
   |    USA   | v609 (4.3U - Wii U v5.2.0U) |
   |  Europa  | v610 (4.3E - Wii U v5.2.0E) |

5. Check the `Create decrypted contents (*.app)` box. Check `Use a custom download directory` and select the folder that your NUSGet executable is in, then click `Start Download`.

   ![](/images/desktop-apps/nusget/nusget-vwiimenu-dl.png)

6. When you have finished downloading the Wii menu files, navigate to the folder where your NUSGet executable is stored. You should locate and open the `0000000700000002` folder inside it.

   ![](/images/desktop-apps/nusget/nusget-folder-vwiimenu.png)

7. Find the .app file that corresponds to your Wii U's region in the table below:

   |  Regione |   .app file  |
   | :------: | :--------------------------: |
   | Giappone | 0000001C.app |
   |    USA   | 0000001F.app |
   |  Europa  | 00000022.app |

8. Create a `themes` folder on the root of your SD card/USB device.

9. Copy the .app file to the newly created `themes` folder. This is the base theme you will use to build your custom theme.

::::

:::: tab (Wii) Via ThemeMii

1. Create a `themes` folder on the root of your SD card/USB device.
2. Extract the ThemeMii MOD `.zip` to a location on your PC.
3. Launch the ThemeMii application.
4. Go to `Tools` > `Download Base App` > `Version of your Wii Menu` > `Region of your Wii Menu`.
5. Una finestra di dialogo si aprirà chiedendoti di inserire un valore per creare una chiave. Inserisci quello che ti dice e creerà una chiave che sarà utilizzare per decifrare i contenuti del Menu Wii dai server di Nintendo.
6. A file selection box will ask you where to save the .app file. Save it to the `themes` folder on your SD card/USB device.

::::

:::::

### Creazione di un tema

1. Extract the ThemeMii MOD `.zip` to a location on your PC.
2. Launch the ThemeMii application.
3. Go to `File` > `Open`, and select the `.mym` file for the theme you want to build.
4. Press `Create csm`.
5. When asked to select an `.app` file, select the newly downloaded base theme in the `themes` of your SD card or USB device.
6. When asked to save the `.csm` file, save it in the `themes` folder.
7. Dopo che il tema finisce di crearsi, sarà chiesto di salvare il file .mym. Press `No`.

### Installazione del tema

1. Inserisci la tua scheda SD o il tuo dispositivo USB nella console, e avvia il Canale Homebrew.
2. Avvia csm-installer, e attendi che si carichi.
3. Select the theme you would like to install with `A`. A questo punto, devi essere assolutamente sicuro che hai scaricato il tema corretto per la tua versione del Menu di sistema e regione.
4. Press `+` to install the theme.
5. Ritorna al Menu Wii e verifica che il tema sia installato correttamente. Se tutto va bene, dovresti avere un risultato simile a quello in basso!

   ![](/images/themes/themed-wii-menu.png)

## Personalizzazione di WiiFlow Lite

Purtroppo, a causa delle differenze di codice tra il WiiFlow originale e il più recente WiiFlow Lite, i temi sono sparsi - infatti, potresti trovare solo un tema che funzionerà a dovere con la versione più recente. Le istruzioni per installare quel tema sono qui in basso.

### Requirements

- Una Wii modificata
- Una scheda SD o dispositivo USB
- [WiiFlow Lite](wii-loaders#wiiflow-lite)
- Un PC Windows/macOS/Linux con una connessione a internet
- [Rhapsodii Shima](https://gbatemp.net/threads/rhapsodii-shima-5-4.555062/)

### Instructions

1. Inserisci il dispositivo di archiviazione che contiene WiiFlow Lite nel tuo PC.
2. Scarica l'archivio Rhapsodii Shima, una delle due versioni del tema funziona e possono essere installate affiancate senza problemi.
3. Extract and copy the `wiiflow` folder to the root of your storage device, merge all folders and overwrite all files when requested.
4. Follow the theme setup and theme configuration instructions in `installation.txt`. Goditi il tema!

## Personalizzazione di USB Loader GX

### Requirements

- Una Wii modificata
- Una scheda SD o dispositivo USB
- [USB Loader GX](wii-loaders#usb-loader-gx)
- Un PC Windows/macOS/Linux con una connessione a internet
- A [theme](https://gbatemp.net/threads/dark-wii-usb-loader-gx-themes.584493/), this link contains an assortment of dark themes

### Instructions

1. Download a theme `.zip` file from the website linked above, or anywhere else you can get a proper theme.
2. Unpack the `.zip` file's contents into the `/apps/usbloader_gx` directory on the storage device where you installed USB Loader GX.
3. Inserisci il supporto di archiviazione nel tuo Wii e avvialo.
4. Start USB Loader GX, go to the `Settings` menu, and then go to `Theme Menu`.
5. Apri il tema e installalo.

## Personalizzazione dell'Homebrew Channel

### Requirements

- Una Wii modificata
- Una scheda SD o dispositivo USB
- Un PC Windows/macOS/Linux con una connessione a internet
- A [theme](https://wiibrew.org/wiki/Homebrew_Channel/Themes) from WiiBrew

### Instructions

1. Download a theme `.zip` file from the website linked above.

   ![](/images/themes/homebrew-channel-example-theme.png)

2. Paste the `.zip` into the `apps` folder on your storage device where you load homebrew.

   ![](/images/themes/homebrew-channel-paste-zip.png)

3. Extract the contents of the `.zip` into the `apps` folder, and delete the archive.

   ![](/images/themes/homebrew-channel-extract-theme.png)

4. Reinserisci il dispositivo di archiviazione nel tuo Wii e avvia l'Homebrew Channel.

5. Il tema che hai appena installato può essere caricato nello stesso modo in cui si caricano le app standard.

   ![](/images/themes/homebrew-channel-load-theme.png)

6. Ora il tema dovrebbe essere caricato, divertiti!

   ![](/images/themes/homebrew-channel-theme-done.png)

## Forwarder delle app

App forwarders can add a bit of extra flair to your Wii Menu - but be careful with them as bad forwarders can cause a [banner brick](bricks#banner-brick). Generally, you can find forwarders on places like [GBAtemp](https://gbatemp.net/threads/wii-forwarder-repository.588781/) for popular apps such as emulators. Since forwarders come in a .WAD format, the process of installing them is as simple as normal usage with [YAWM ModMii Edition](yawmme).

---

::: tip

[Click here to go back to the site index.](site-navigation)

:::
