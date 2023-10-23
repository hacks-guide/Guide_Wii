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
| F = apri un File o Cartella con ModMii per molte altre funzioni!                             | Questa opzione è uno strumento avanzato specialmente utile per gli sviluppatori.                                                                                                                                                                                             |
| 1 = Scarica Pagina 1 (Menu di Sistema, IOS, MIOS, Canali etc.)                               | Questa opzione apre la prima pagina di download che include le parti fondamentali del menu di sistema (scaricate dal NUS).                                                                                                                                                   |
| 2 = Scarica Pagina 2 (Applicazioni, File USB-Loader, CheatCodes etc.)                        | Questa opzione apre la seconda pagina di download che include exploit utili e applicazioni per il tuo Wii che includono anche applicazioni per il PC.                                                                                                                        |
| 3 = Scarica Pagina 3 (Temi del Menu di Sistema)                                              | Questa opzione apre la terza pagina di download che include alcuni temi del menu di sistema ed elementi richiesti per installare un tema del menu sistema (le applicazioni di base sono scaricate dal NUS).                                                                  |
| 4 = Scarica Pagina 4 (cIOS e cMIOS)                                                          | Questa opzione apre la quarta pagina di download che include cIOS e cMIOS per l'uso di USB loaders. È consigliato installare solamente i cIOS a meno che non voglia fare del testing.                                                                                        |
| A = Download Avanazati e Creatore di Forwarder DOL\ISO                                      | Questa opzione è uno strumento avanzato usato per personalizzare ulteriormente i download o per permetterti di creare il tuo file eseguibile dol utile per i forwarder (canali sul menu di sistema per accedere applicazioni del Wii).                                       |
| L = Carica Coda di Download                                                                  | Questa opzione scaricherò tutti i titoli richiesti per il menu di sistema del Wii (titoli scaricato dal NUS)                                                                                                                                                                 |
| C = Crea File di Configurazione per BootMii, Wad Manager o Multi-Mod Manager                 | Questa opzione ti aiuterà a creare i file di configurazione richiesti per certe applicazioni.                                                                                                                                                                                |
| FC = File Cleanup & App Updater: aggiorna applcazioni e/o rimuovi file non necessari         | Questa opzione è utile per coloro che vogliono ripulire la loro scheda SD o unità USB da applicazioni obsolete, inutili, o comunque deprecate.                                                                                                                               |
| M = Modalità ModMii Skiin: usa il tuo mouse invece della tastiera!                           | Questa opzione lancerà la versione skin di ModMii. Alcuni opzioni avanzate potrebbero non essere accessibili in ModMii Skin.                                                                                                                                                 |

</details>

<details id="Modmii-Options" class="notice--info" markdown="1">
<summary><a>Clicca qui per una lista completa di opzioni.</a></summary>

| Opzione                                                                           | Descrizione                                                                                                                  |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| D = Cambia lettera dell'unità:                                                    | Cambia dove i file della tua scheda SD sono salvati.                                                                         |
| DU = Cambia lettera dell'unità per USB:                                           | Cambia dove i file della tua unità USB sono salvati.                                                                         |
| d2x = cambia la versione del cIOS d2x generato:                                   | Cambia la versione del cios che ModMii scarica.                                                                              |
| H = Hermes cIOS (202 & 222-224) sarà anche consigliato                            | Permette agli IOS di essere consigliati e scaricare nel syscheck updater (starà stubbed se disattivato).                     |
| CM = cMIOS inclusi nei cIOS consigliati                                           | Permette ai cMIOS di essere consigliati e scaricati nel syscheck updater (installerà i MIOS stock se disabilitato).          |
| E = Protezione Brick Extra nelle Guide dei Wizard ModMii                          | Permette agli IOS della protezione extra dai brick di ModMii essere consigliati e usati nello strumento di syscheck updater. |
| U = Aggiorna IOS. Wizard/SysCheck-Updater aggiorna gli IOS attivi                 | Aggiorna gli IOS esistenti alla versione più recente disponibile sul NUS.                                                    |
| AU = Gli aggiornamenti automatici salteranno il controllo se presenti nella cache | Salterà il download dei file se già nella code.                                                                              |
| FWD = Installa Forwarder dell'USB-Loader nelle Guide dei Wizard di ModMii         | Includerà il file wad del forwarder dell'USB loader nelle guide dei wizard degli USB loader.                                 |
| PC = Posizione di Salvataggio Programmi PC                                        | Cambia la posizione di salvataggio per i programmi PC scaricabili.                                                           |
| RS = Root Save: Salva IOS/MIOS sul root invece che nella cartella dei WAD         | Salva gli IOS\MIOS nel root invece che nella cartella WAD.                                                                  |
| 1 = Non mantenere cartelle 00000001 o NUS per IOS\MIOS\SM etc                   | Elimina le cartelle usate per compilare il file wad e ti dà solamente il file wad.                                           |
| n2o = neek2o - crea mod di s\uneek invece dell'originale                         | Usa una migliore versione modificata di neek2o nel creatore di EmuNAND.                                                      |
| SSD = Accesso SD a SNEEK e SNEEK+DI                                               | Permette a SNEEK e SNEEK+DI di accedere alla scheda SD.                                                                      |
| F = Colore di Font.bin per SNEEK/UNEEK                                            | Cambia il colore del font per neek2o.                                                                                        |
| SV = Output Verboso di SNEEK                                                      | Mostra informazioni extra riguardo l'EmuNAND.                                                                                |
| V = Modalità verbosa per ModMii Skin & nandBinCheck                               | Mostra un'altra finestra con informazioni extra riguardanti il controllo della nand.                                         |
| SO = Riproduci suoni alla Fine                                                    | Riproduce un jingle divertente dopo un download andato a buon fine.                                                          |
| A = Auto-Update di ModMii all'avvio                                               | Controllerà la presenza di aggiornamenti in automatico all'avvio di ModMii.                                                  |
| N = Controlla per nuove versioni di ModMii adesso                                 | Verificherè online la presenza di un aggiornamento di ModMii.                                                                |

</details>

[Clicca qui per tornare alla Navigazione del Sito.](navigazione-sito)
{: .notice--info}
