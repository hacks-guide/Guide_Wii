# ModMii

::: warning

Questo programma NON viene con alcuna garanzia, quindi sei tu il responsabile per eventuali danni applicati alla tua console.

:::

::: warning

Alcune funzionalità potrebbero essere limitate su Wii mini.

:::

ModMii è uno strumento tutto-in uno di Wii e Wii U per Windows, creato da XFlak, che ha vari strumenti utili per il modding. Può realizzare quanto segue:

- Moddare la console per la prima volta, o rifarla
- Controllare e aggiornare softmod obsolete
- Risolvere la visualizzazione dell'Homebrew Channel sottosopra
- Avviare homebrew senza effettuare alcun cambiamento della NAND
- Scaricare homebrew
- E altro!

## Panoramica di ModMii

Ci sono due modi differenti per usare ModMii. Ci sono due modi per usare ModMii: ModMii Classic, che usa un'interfaccia a riga di comando, ma ha tutte le funzionalità disponibili; e ModMii Skin, che ha un'interfaccia grafica, ma ha meno funzionalità. ModMii Skin ha un'interfaccia utente grafica, d'altra parte, ma ha meno funzionalità disponibili per l'utente. Se stai cercando di modificare la tua console per la prima volta, ModMii Skin dovrebbe bastare. Altrimenti, consigliamo di utilizzare ModMii Classic.

The chart below will help you determine what can be done in either interface.

| Strumenti                                      | ModMii Classic | ModMii Skin |
| ---------------------------------------------- | -------------- | ----------- |
| ModMii Wizard                                  | ✅              | ✅           |
| SysCheck Updater Wizard                        | ✅              | ⛔           |
| USB Loader Setup Wizard                        | ✅              | ✅           |
| HackMii Solutions Wizard                       | ✅              | ✅           |
| Abstinence Wizard                              | ✅              | ✅           |
| Region Change Wizard                           | ✅              | ✅           |
| SNEEK/EmuNAND Installation                     | ✅              | ✅           |
| Open File Function                             | ✅              | ⛔           |
| Load Download Queue                            | ✅              | ✅           |
| Download Page 1/2/3/4/5                        | ✅              | ⛔           |
| Advanced Downloads                             | ✅              | ⛔           |
| Load Download Queue                            | ✅              | ⛔           |
| Build Config Files                             | ✅              | ⛔           |
| File Cleanup & App Updater | ✅              | ⛔           |

:::details Clicca qui per maggiori informazioni su ciascun strumento.

| Strumento                                                                                                      | Descrizione                                                                                                                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| W = ModMii Wizard <-- Start Here to Mod Your Wii, vWii or WiiU!                       | Questa opzione può essere usata per moddare la tua console Wii per la prima volta o rimodificarne una.                                                                                                                                                                  |
| SU = SysCheck Updater Wizard (update only your outdated Wii\vWii softmods)                  | Questa opzione controlla per aggiornamenti di vecchie modifiche installate sulla tua console. Su Wii può sistemare cose come DarkCorp/CIOSSPAGHETTI che potrebbero causare problemi con le ultime versioni degli homebrew.                              |
| U = USB-Loader Setup Wizard (Wii \ vWii \ Wii Mini)                                         | Questa opzione imposterà correttamente il tuo USB loader per poter caricare i backup dalla tua SD o disco rigido. Questa opzione non è necessaria se usi ModMii Wizard.                                                                                 |
| H = HackMii Solutions Wizard (Wii) Upside-Down HBC/No Vulnerable IOS Fix                    | Questa opzione è utile per le persone che stanno avendo problemi a far funzionare l'installer di HackMii o hanno un Homebrew Channel sottosopra.                                                                                                                        |
| AW = Abstinence Wizard (Non-permanent Wii Hacks)                                            | Questa opzione ti permette di eseguire homebrew senza modificare la NAND della console permanentemente.                                                                                                                                                                 |
| RC = Region Change Wizard (Wii)                                                             | Questa opzione può essere usata per cambiare la regione della tua console Wii senza brickarla, essendo il miglior wizard in assoluto per questo scopo.                                                                                                                  |
| S = SNEEK Installation, EmuNAND Builder/Modifier, Game Bulk Extractor                                          | Questa opzione ti aiuterà a impostare una EmuNAND (neek2o) sulla tua SD o USB. I benefici includono avere spazio aggiuntivo per salvataggi o canali ed eseguire homebrew senza modificare permanentemente la NAND della console Wii. |
| F = open a File or Folder with ModMii for many more functions!                                                 | Questa opzione avanzata è utile soprattutto per gli sviluppatori.                                                                                                                                                                                                       |
| # = Download Pages: 1=NUS, 2=Wii Homebrew, 3=Themes, 4=cIOSs, 5=WiiU+PC Apps                   | Questo ti porterà a varie pagine di download disponibili per cose come app homebrew, app per PC, IOS, cIOS, temi del menu Wii, e altro.                                                                                                                                 |
| A = Advanced Downloads and Forwarder Builder                                                                   | Questa opzione ti permette di scaricare qualsiasi IOS e cIOS e costruire forwarded DOL/ISO personalizzati. Destinata a utenti esperti.                                                                                                                  |
| L = Load Download Queue                                                                                        | Questa opzione carica le code di download compatte o salvate in precedenza.                                                                                                                                                                                             |
| C = Customize Config Files for Bootmii, Wad Manager or Multi-Mod Manager                                       | Questa opzione ti permette di creare file di configurazione per BootMii, gestori WAD, e Multi-Mod Manager.                                                                                                                                                              |
| FC = File Cleanup & App Updater: Update Apps and\or remove un-needed files | Questa opzione rimuove i file non necessati dalla tua scheda SD o disco rigido dopo che hai finito di modificare la console.                                                                                                                                            |

:::

Quando usi ModMii, è importante far notare che genererà una guida personalizzata per te dipendentemente dalle impostazioni che selezioni. Per questo motivo, questa guida non si incentrerà su come modificare la tua console, in quanto ci pensa ModMii. Invece, sarà una per mostrarti come usare il programma più efficacemente con le opzioni più comuni.

## Installare ModMii

### Requisiti

- Una console Wii o Wii U
- Una scheda SD o unità USB
- Un PC Windows (anche una VM)
- [ModMii](https://modmii.github.io/)

### Installazione

::: warning

Il tuo browser o antivirus potrebbe segnalare Modmii come malware - questo è un falso positivo. ModMii NON contiene alcun malware.

:::

1. Vai nel [sito di ModMii](https://modmii.github.io) e scendi fino alla sezione Download. Qui, seleziona l'opzione `Installer`. Il tuo browser potrebbe segnalarlo come malware, ma è un **falso positivo**.

   ![](/images/modmii/modmii-download.png)

2. Apri il file `ModMiiInstaller.exe` e prosegui con la configurazione.

   ![](/images/modmii/modmii-install.png)

## Usare ModMii Wizard

ModMii Wizard è uno strumento che può softmoddare la tua console dall'inizio alla fine, scaricando tutti i file necessari e generando una guida per te così che tu possa implementare la modifica. Questo strumento può anche essere usato per sovrascrivere softmod già esistenti.

1. Apri ModMii Skin o ModMii Classic e seleziona l'opzione ModMii Wizard in cima alla lista.

   ![](/images/modmii/modmii-wizard-1.png)

2. Scegli che console stai per modificare. Se hai una console Wii U, è consigliato modificare la stessa e la vWii. Se vuoi modificare entrambe, salta al passaggio 9. Se vuoi modificare solo la vWii, salta al passaggio 5. Se vuoi modificare solo Wii U, salta al passaggio 13.

   ![](/images/modmii/modmii-wizard-2.png)

3. Rispondi `Yes` alla prima domanda, a meno che non hai un'idea specifica di cosa fare o aggiornare la tua console.

   ![](/images/modmii/modmii-wizard-3.png)

4. Seleziona la versione del menu di sistema che hai, seguita dalla regione, seguendo le istruzioni del programma. Se sei ancora confuso, controlla l'opzione sottostante per un video istruttivo.

   ![](/images/modmii/modmii-wizard-4.png)

5. Seleziona l'exploit che vuoi usare per modificare la tua console. Se sei su Wii, consigliamo Wilbrand se hai una scheda SD. Per modificare solo la vWii, consigliamo usare il browser.

   ![](/images/modmii/modmii-wizard-5.png)

6. Se hai selezionato l'opzione Wilbrand nel passaggio precedente, inserisci l'indirizzo MAC della tua console. Se non sai come farlo, scrivi `Help` nella casella di testo per un video istruttivo.

   ![](/images/modmii/modmii-wizard-6.png)

7. Seleziona la versione del menu di sistema che desideri dalla lista.

   ![](/images/modmii/modmii-wizard-7.png)

8. Seleziona quali canali vuoi far installare automaticamente - questo passaggio è facoltativo.

   ![](/images/modmii/modmii-wizard-8.png)

9. Seleziona se vuoi installare un tema del menu Wii personalizzato, scegliendo tra tre effetti. Ogni effetto determina la velocità con cui ruota il contorno quando si passa il cursore su un canale Wii.

   ![](/images/modmii/modmii-wizard-9.png)

10. Seleziona se vuoi impostare un USB Loader.

    ![](/images/modmii/modmii-wizard-10.png)

11. Se hai selezionato `Yes`, seleziona l'USB Loader che vuoi usare. Consigliamo USB Loader GX o WiiFlow in quanto entrambi sono ricoperti in questo sito, altrimenti puoi scaricarle tutte assieme.

    ![](/images/modmii/modmii-wizard-11.png)

12. Se hai selezionato `Yes`, seleziona dove vuoi salvare i file dei USB Loader.

    ![](/images/modmii/modmii-wizard-12.png)

13. Verifica dove vuoi salvare i file sulla tua scheda SD e/o unità USB.

    ![](/images/modmii/modmii-wizard-13.png)

14. Conferma che le impostazioni siano giuste, poi premi `Finish`. Una volta fatto, ModMii scaricherà dei file in sottofondo, generando e aprendo poi una guida per te.

    ![](/images/modmii/modmii-wizard-14.png)

::: warning

Da qui, dovresti seguire la guida generata da ModMii. Non c'è bisogno di seguire le sezioni sottostanti -- sono fornite come informazioni aggiuntive per le persone che usano ModMii per altri motivi.

:::

## SysCheck Updater Wizard

SysCheck Updater Wizard è uno strumento che usa [SysCheck](syscheck) per analizzare le modifiche applicate alla tua console Wii, soprattutto IOS e cIOS. Accetta un file `syscheck.csv` generato dall'app, poi provvede agli aggiornamenti se necessario.

1. Apri ModMii Classic e digita `SU` per aprire SysCheck Updater Wizard.

   ![](/images/modmii/syscheck-wizard-1.png)

2. Segui le istruzioni indicate se non hai già un file SysCheck, poi trascina e rilascia il file `syscheck.csv` sulla finestra. Ciò incollerà il percorso del file, poi premi Invio.

   ![](/images/modmii/syscheck-wizard-2.png)

3. Se Priiloader è stato rilevato syscheck, ti chiederà se vuoi aggiornarlo. Digita `Y` e premi Invio per aggiornarlo all'ultima versione.

   ![](/images/modmii/syscheck-wizard-3.png)

4. Il programma analizzerà il file SysCheck e darà delle opzioni in base a cosa vede. In questo esempio le modifiche sulla console Wii sono aggiornate, ma sono presenti vari IOS non necessari che potrebbero essere dei fantocci. Se vuoi fare questi cambiamenti alla tua console Wii, digita `Y` e premi Invio.

   ![](/images/modmii/syscheck-wizard-4.png)

::: warning

Da qui, dovresti seguire la guida generata da ModMii. Non c'è bisogno di seguire le sezioni sottostanti -- sono fornite come informazioni aggiuntive per le persone che usano ModMii per altri motivi.

:::

## HackMii Solutions Wizard

HackMii Solutions Wizard è uno strumento che sistema dei problemi che potrebbero sorgere da cose come Darkcorp/CIOSSPAGHETTI, installando IOS puliti. Un esempio di problemi che potrebbero sorgere da questo sono elencati sotto:

- L'HackMii Installer non mostra "Press (1) to continue"
- L'HackMii Installer dice "no vulnerable IOS found!"
- L'Homebrew Channel è visualizzato sottosopra

1. Apri ModMii Skin o ModMii Classic e seleziona l'opzione HackMii Solutions.

   ![](/images/modmii/hackmii-wizard-1.png)

2. Seleziona la versione del menu di sistema che hai, seguita dalla regione, seguendo le istruzioni del programma. Se sei ancora confuso, controlla l'opzione sottostante per un video istruttivo.

   ![](/images/modmii/hackmii-wizard-2.png)

3. Seleziona l'exploit che vuoi usare per modificare la tua console Wii. Gli exploit sotto descritti in questo sito, ma nella maggior parte dei casi consigliamo di usare Wilbrand se hai una scheda SD a portata di mano.

   ![](/images/modmii/hackmii-wizard-3.png)

4. Se hai selezionato l'opzione Wilbrand nel passaggio precedente, inserisci l'indirizzo MAC della tua console. Se non sai come farlo, scrivi `Help` nella casella di testo per un video istruttivo.

   ![](/images/modmii/hackmii-wizard-4.png)

5. Verifica dove vuoi salvare i file sulla tua scheda SD e/o unità USB.

   ![](/images/modmii/modmii-wizard-12.png)

6. Conferma che le impostazioni siano giuste, poi premi `Finish`. Una volta fatto, ModMii scaricherà dei file in sottofondo, generando e aprendo poi una guida per te. Dopo averla seguita, consigliamo di usare [SysCheck Updater Wizard](#syscheck-updater-wizard) per annullare eventuali modifiche problematiche apportate alla tua console Wii.

   ![](/images/modmii/hackmii-wizard-5.png)

::: warning

Da qui, dovresti seguire la guida generata da ModMii. Non c'è bisogno di seguire le sezioni sottostanti -- sono fornite come informazioni aggiuntive per le persone che usano ModMii per altri motivi.

:::

---

::: tip

[Clicca qui per tornare all'indice.](site-navigation)

:::
