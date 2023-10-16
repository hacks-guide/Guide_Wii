---
title: "ModMii"
---

{% include toc title="Table of Contents" %}

Se hai bisogno di aiuto riguardo qualsiasi parte di questa guida, per favore entra nel [server Discord di ModMii](https://discord.gg/cMnBRACQwQ).
{: .notice--info}

Questo programma NON viene fornito con una garanzia, sei responsabile per ogni potenziale danno al tuo Wii.
{: .notice--warning}

Questo programma NON è destinato all'uso per il vWii o per il Wii mini. Qualsiasi utilizzo sul vWii o sul Wi mini non è stato testato.
{: .notice--warning}

ModMii è un programma per Windows creato da XFlak che possiede vari strumenti utili per il modding, inclusi dei tutorial che potrebbe non essere attualmente disponibili su questo sito.<br> Puoi scegliere di lanciare ModMii skin, che ha un'interfaccia più user-friendly, oppure lanciare ModMii Classic, che usa un'interfaccia a linea di comando (Prompt dei Comandi/Terminale).

Alcuni opzioni avanzate potrebbero non essere accessibili in ModMii Skin. Una lista di funzionalità disponibili in ModMii Classic può essere trovata in fondo a questa pagina.
{: .notice--info}

### Requisiti

* Un Wii
* Un'unità USB o una scheda SD
* Un PC Windows (una macchina virtuale funzionerà)
* [ModMii](https://modmii.github.io/)

Questa è una veloce guida per usare ModMii sul tuo PC Windows.

### Wizard di ModMii

Puoi usare il wizard di ModMii per modificare qualsiasi Wii. <br> Anche se il Wii è stato modificato in passato, puoi far sovrascrivere a ModMii qualsiasi modifica precedente dicendogli che è la prima modifica che si sta effettuando al Wii (anche se non la è).

Puoi anche usare questo wizard per configurare un USB loader allo stesso tempo, invece di dover usare il wizard per configurare l'USB Loader successivamente.

### Wizard di SysCheck Updater

[SysCheck](syscheck) è un'applicazione homebrew che analizza le modifiche di un Wii. <br> Puoi fornire a ModMii un report di SysCheck per aiutarlo a identificare & aggiornare le mod obsolete.

Puoi far analizzare a ModMii un SysCheck trascinando il file `syscheck.csv` su ModMii.exe. In alternativa, puoi lanciare il wizard di SysCheck Updater (`SU`) dal menu principale di ModMii e cercare il file manualmente.

### Wizard di HackMii Solutions

Il wizard di HackMii Solutions può aiutarti a risolvere sintomi come questi:
    + HackMii Installer non chiede "Press (1) to continue"
    + HackMii Installer dice "no vulnerable IOS found!"
    + L'Homebrew Channel viene mostrato a testa in giù

Installerà gli IOS puliti per permettere all'HackMii Installer di operare correttamente.

### Wizard di Astinenza

Questo wizard richiede una scheda SD.
{: .notice--warning}

Questo wizard ti permette di goderti i molti benefici di un Wii modificato senza dover installare delle modifiche permanenti al tuo Wii. Ti permette di lanciare un exploit per avviare la console da una NAND emulata da una memoria esterna, invece che usare la NAND della memoria interna del Wii.

Puoi anche fare un backup della NAND senza modificare affatto la tua console navigando nella cartella "Support" di ModMii e lanciando `Casper2BootMii.bat`. <br> Salverà alcuni file in una cartella chiamata `COPY_TO_SD`; copia i file nella tua scheda SD e [lancia un exploit](get-started).

Quando segui uno degli exploit elencati sopra, non rimpiazzare il file `boot.elf`.
{: .notice--warning}


<details id="Modmii-Tools" class="notice--info" markdown="1">
<summary><a>Clicca qui per una lista completa di strumenti disponibili.</a></summary>

| Strumento                                                                                    | Descrizione                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| W = Wizard di ModMii <-- Inizia qui per modificare il tuo Wii!                               | Questa opzions può essere usata per modificare il tuo Wii per la prima volta o per modificare un Wii che è già stato modificato in precedenza.                                                                                                                               |
| SU = Wizard di SysCheck Updater (aggiorna solo le modifiche obsolete)                        | Questa optione è utile per coloro che hanno vecchia modifiche installate sul loro Wii come DarkCorp/Ciosspaghetti che può potenzialmente causare problemi per il custom firmware homebrew di ultima versione.                                                                |
| U = Wizard di Configuratione di USB-Loader                                                   | Questa opzione di aiuterà a configurare correttamente il tuo USB loader per essere capace di caricare backup di dischi da una scheda SD o unità USB.                                                                                                                         |
| H = Wizard di HackMii Solutions (HBC a testa in giù\Soluzione No Vulnerable IOS)            | Questa options è utile per coloro che stanno avendo problemi nel far funzionare HackMii Installer, o se hanno semplicemente l'homebrew channel a testa in giù, o se DarkCorp/Ciosspaghetti era installato e non c'era nessun homebrew channel.                               |
| AW = Wizard di Astinenza (Modifiche Wii non permanenti)                                      | Questa opzione è utile per coloro che non vogliono effettuare delle modifiche permanenti al loro Wii ma vogliono comunque avere alcuni dei benefici offerti dal software homebrew.                                                                                           |
| RC = Wizard del Cambio di Regione                                                            | Questa opzione può essere usata per cambiare la regione del tuo Wii senza brickarlo (questa è la miglior guida del cambio di regione internet!).                                                                                                                             |
| S = Installazione di SNEEK, Creatore\Modificatore di EmuNAND, Estrattore di Massa di Giochi | Questa opzione ti aiuterà a configurare correttamente un EmuNAND (cioè neek2o) sulla tua scheda SD o unità USB. i benefici dell'Emunand includono spazio extra per i salvataggi dei giochi o canali. e il beneficio di non effettuare alcuna modifica permanente al tuo Wii. |
| F = apri un File o Cartella con ModMii per molte altre funzioni!                             | This option is an advanced tool especially helpful for developers.                                                                                                                                                                                                           |
| 1 = Download Page 1 (System Menus, IOSs, MIOSs, Channels, etc.)                              | This option opens the first download page that includes most of the key parts for the system menu (downloaded from NUS).                                                                                                                                                     |
| 2 = Download Page 2 (Apps, USB-Loader Files, CheatCodes, etc.)                               | This option opens the second download page that includes exploits and useful apps for your Wii including some PC programs.                                                                                                                                                   |
| 3 = Download Page 3 (System Menu Themes)                                                     | This option opens the third download page that includes some system menu themes and items required to install system menu themes (base apps are downloaded from NUS).                                                                                                        |
| 4 = Download Page 4 (cIOSs and cMIOSs)                                                       | This option opens the fourth download page that includes cIOSes and cMIOSes for use in USB loaders. It is recommended to just install the recommended cioses unless you plan to do some testing.                                                                             |
| A = Advanced Downloads and Forwarder DOL\ISO Builder                                        | This option is an advanced tool used to better customize downloads or allow you to build a dol executable useful for fowarders (channels on the system menu to access Wii applications).                                                                                     |
| L = Load Download Queue                                                                      | This option will download all of the required titles need for the Wii system menu (titles are downloaded from NUS)                                                                                                                                                           |
| C = Build Config Files for Bootmii, Wad Manager or Multi-Mod Manager                         | This option will help you build configuration files required for certain applications.                                                                                                                                                                                       |
| FC = File Cleanup & App Updater: Update Apps and\or remove un-needed files                  | This option is useful for people who want to clean out their SD or USB of apps deemed outdated, useless, or otherwise depreciated.                                                                                                                                           |
| M = ModMii Skin Mode: use your mouse instead of your keyboard!                               | This option will launch ModMii skin mode. Some advanced options may not be available in this view.                                                                                                                                                                           |

</details>

<details id="Modmii-Options" class="notice--info" markdown="1">
<summary><a>Click here for a full list of available options.</a></summary>

| Option                                                           | Descrizione                                                                                                   |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| D = Change Drive letter:                                         | Changes where your SD files are saved to.                                                                     |
| DU = Change Drive letter for USB:                                | Changes where your USB files are saved to.                                                                    |
| d2x = change d2x cIOS version built:                             | Changes the cios version ModMii downloads.                                                                    |
| H = Hermes cIOSs (202 & 222-224) will also be recommended        | Enables Hermes IOS to be recommended and downloaded in the syscheck updater (will be stubbed if disabled).    |
| CM = cMIOS included in recommended cIOSs                         | Enables cMIOS to be recommended and downloaded in the syscheck updater (will install stock MIOS if disabled). |
| E = Extra Brick Protection in ModMii Wizard Guides               | Enables ModMiis Extra Brick Protection IOSes to be recommended and used in the syscheck updater tool.         |
| U = Update IOSs. Wizard/SysCheck-Updater to update Active IOSs   | Updates Existing IOSes to the latest version available on NUS.                                                |
| AU = Auto-Updating downloads will skip update check if cached    | Will skip downloading the files if already in the queue.                                                      |
| FWD = Install USB-Loader Forwarder in ModMii Wizard Guides       | Will include the USB loader forwarder wad file in the USB loader wizard guides.                               |
| PC = PC Programs Save Location                                   | Changes the save location for the downloadable PC programs.                                                   |
| RS = Root Save: Save IOSs\MIOSs to Root instead of WAD Folder   | Saves IOSs\MIOSs to Root instead of WAD Folder.                                                              |
| 1 = Do not Keep 00000001 or NUS Folders for IOSs\MIOSs\SMs etc | Deletes the folder used for compiling the wad file and just gives you the wad file.                           |
| n2o = neek2o - build mod of s\uneek instead of original         | Uses a better modified version of neek2o in the EmuNAND builder.                                              |
| SSD = SNEEK and SNEEK+DI SD Access                               | Allows for SNEEK and SNEEK+DI access on the SD card.                                                          |
| F = Font.bin Colour for SNEEK/UNEEK                              | Changes the font color for neek2o.                                                                            |
| SV = SNEEK Verbose Output                                        | Displays extra information regarding EmuNAND.                                                                 |
| V = Verbose for ModMii Skin & nandBinCheck                       | Displays another window with extra information regarding a nand check.                                        |
| SO = Play sound at Finish                                        | Plays a fun jingle after a successful download.                                                               |
| A = Auto-Update ModMii at program start                          | Will automatically check for updates when ModMii is launched.                                                 |
| N = Check for New versions of ModMii right now                   | Will check online for a ModMii update.                                                                        |

</details>

[Clicca qui per tornare alla Navigazione del Sito.](navigazione-sito)
{: .notice--info}
