# ModMii

::: warning

Questo programma non è coperto da garanzia. Sei tu il responsabile per eventuali danni applicati alla console.

:::

::: warning

Alcune funzionalità potrebbero essere limitate su Wii mini.

:::

ModMii è uno strumento tutto-in-uno per Wii e Wii U, creato da XFlak. Ha molti casi d'uso, tra cui:

- Modificare la console per la prima volta o rimodificarla
- Individuare e aggiornare le modifiche obsolete
- Risolvere la visualizzazione dell'Homebrew Channel sottosopra
- Avviare gli homebrew senza apportare alcuna modifica alla NAND
- Scaricare homebrew

## Panoramica di ModMii

Ci sono due modi per usare ModMii: ModMii Classic, che usa un'interfaccia a riga di comando, e ModMii Skin, che usa un'interfaccia grafica ma ha meno funzioni. Se vuoi solo modificare la console per la prima volta, ModMii Skin dovrebbe essere sufficiente. Altrimenti, ModMii Classic è consigliato.

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

| Strumento                                                                | Descrizione                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| W = ModMii Wizard                                                        | Modifica la console Wii per la prima volta o nuovamente.                                                                                                                                                                    |
| SU = SysCheck Updater Wizard                                             | Controlla la presenza di aggiornamenti per le vecchie modifiche installate sulla console. Su Wii, può risolvere problemi come DARKCORP/CIOSSPAGHETTI che possono causare problemi con gli homebrew moderni. |
| U = Wizard di Configuratione di USB-Loader                               | Imposta un USB loader per caricare i backup dalla scheda SD o unità USB. Non necessario se usi ModMii Wizard.                                                                                               |
| H = HackMii Solutions Wizard                                             | Risolve i problemi con l'HackMii Installer o l'Homebrew Channel sottosopra.                                                                                                                                                 |
| AW = Abstinence Wizard                                                   | Esegui gli homebrew senza modifiche permanenti alla NAND della console.                                                                                                                                                     |
| RC = Region Change Wizard                                                | Cambia la regione della console.                                                                                                                                                                                            |
| S = SNEEK Installation, EmuNAND Builder/Modifier, Game Bulk Extractor    | Imposta una EmuNAND (neek2o) sulla scheda SD o unità USB. Usata per avere spazio agginutivo per i salvataggi/canali ed eseguire homebrew senza modifiche permanenti alla NAND originale. |
| F = Open a File or Folder                                                | Vari strumenti per sviluppatori e utenti esperti.                                                                                                                                                                           |
| # = Download Pages                                                       | Varie pagine di download per applicazioni homebrew, applicazioni per PC, IOS, cIOS, temi del menu Wii e altro ancora.                                                                                                       |
| A = Advanced Downloads and Forwarder Builder                             | Scarica qualsiasi IOS e cIOS e crea forwarder DOL/ISO personalizzati. Destinata esclusivamente a utenti esperti.                                                                                            |
| L = Load Download Queue                                                  | Carica le code di download compatte o salvate in precedenza.                                                                                                                                                                |
| C = Customize Config Files for Bootmii, Wad Manager or Multi-Mod Manager | Crea dei file di configurazione per BootMii, gestori WAD e Multi-Mod Manager.                                                                                                                                               |
| FC = File Cleanup                                                        | Aggiorna e rimuove i file non necessari dalla scheda SD o dall'unità USB una volta terminata la modifica della console.                                                                                                     |

:::

## Installazione di ModMii

### Requisiti

- Una console Wii o Wii U
- Una scheda SD o un'unità USB
  - [Formattala in FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
  - Consulta le [domande frequenti sull'archiviazione](faq#storage-device-faq) per maggiori informazioni
- Un PC Windows (o una macchina virtuale)
- [ModMii](https://modmii.github.io/)

### Installazione

::: warning

Il tuo browser o antivirus potrebbe segnalare ModMii come malware, ma è un falso positivo. ModMii non contiene malware.

:::

1. Vai sul [sito di ModMii](https://modmii.github.io) e scendi fino alla sezione Download. Qui, seleziona l'opzione `Installer`. Il tuo browser potrebbe segnalarlo come malware, ma è un **falso positivo**.

   ![](/images/modmii/modmii-download.png)

2. Apri il file `ModMiiInstaller.exe` e prosegui con la configurazione.

   ![](/images/modmii/modmii-install.png)

## Come usare ModMii Wizard

ModMii Wizard è uno strumento che ti aiuterà nella modifica della console dall'inizio alla fine. Scaricherà tutti i file necessari e genererà una guida adatta da seguire. Può anche essere usato per sovrascrivere o aggiornare modifiche già esistenti.

1. Apri ModMii Skin o ModMii Classic e seleziona l'opzione ModMii Wizard in cima alla lista.

   ![](/images/modmii/modmii-wizard-1.png)

2. Scegli la console che vuoi modificare. Se hai Wii U, si consiglia di modificarla insieme a vWii. Se vuoi modificare entrambe, salta al passaggio 9. Se vuoi modificare solo vWii, salta al passaggio 5. Se vuoi modificare solo Wii U, salta al passaggio 13.

   ![](/images/modmii/modmii-wizard-2.png)

3. Rispondi `Yes` alla prima domanda.

   ![](/images/modmii/modmii-wizard-3.png)

4. Seleziona la versione e la regione del menu Wii in uso, seguendo le istruzioni del programma. (Se non sai come ottenere queste informazioni, seleziona l'opzione sottostante e premi `Next` per una videoguida)

   ![](/images/modmii/modmii-wizard-4.png)

5. Seleziona l'exploit che vuoi usare per modificare la console. Se su Wii, Wilbrand è consigliato se hai una scheda SD. Per vWii, è consigliato usare il browser.

   ![](/images/modmii/modmii-wizard-5.png)

6. Se hai selezionato l'opzione Wilbrand nel passaggio precedente, inserisci l'indirizzo MAC della console. (Se non sai come ottenerla, digita `Help` nella casella di testo per guardare un video esplicativo)

   ![](/images/modmii/modmii-wizard-6.png)

7. Seleziona la versione del menu Wii dalla lista. Di solito sarebbe la 4.3.

   ![](/images/modmii/modmii-wizard-7.png)

8. Seleziona se e quali canali vuoi far installare automaticamente. Ciò è facoltativo.

   ![](/images/modmii/modmii-wizard-8.png)

9. Seleziona se vuoi installare un tema del menu Wii personalizzato, potendo scegliere tra tre effetti. Ogni effetto determina la velocità con cui il contorno ruota quando si passa il cursore su un canale.

   ![](/images/modmii/modmii-wizard-9.png)

10. Seleziona se vuoi impostare un USB laoder.

    ![](/images/modmii/modmii-wizard-10.png)

11. Se hai selezionato `Yes`, seleziona l'USB loader che vuoi usare. Sono consigliati USB Loader GX e/o WiiFlow.

    ![](/images/modmii/modmii-wizard-11.png)

12. Se hai selezionato `Yes`, seleziona dove vuoi salvare i file dei USB loader.

    ![](/images/modmii/modmii-wizard-12.png)

13. Controlla dove vuoi salvare i file sulla scheda SD e/o sull'unità USB.

    ![](/images/modmii/modmii-wizard-13.png)

14. Conferma che le impostazioni siano corrette, poi premi `Finish`. Una volta premuto, ModMii scaricherà dei file in sottofondo e, al termine, genererà e aprirà una guida per te.

    ![](/images/modmii/modmii-wizard-14.png)

::: warning

A questo punto, dovresti seguire la guida generata da ModMii. Non è necessario seguire le sezioni sottostanti; sono fornite come informazioni aggiuntive per le persone che usano ModMii per altri motivi.

:::

## SysCheck Updater Wizard

SysCheck Updater Wizard è uno strumento che usa [SysCheck](syscheck) per analizzare le modifiche applicate alla console, soprattutto gli IOS e i cIOS. Accetta un file `syscheck.csv` generato da SysCheck e provvede agli aggiornamenti, se necessario.

1. Se non l'hai già fatto, segui la guida su [SysCheck](syscheck) per generare il file `syscheck.csv` sulla scheda SD o sull'unità USB.

2. Apri ModMii Classic e digita `SU` per aprire SysCheck Updater Wizard.

   ![](/images/modmii/syscheck-wizard-1.png)

3. Trascina il file `syscheck.csv` sulla finestra. Ciò incollerà il percorso del file, poi premi Invio.

   ![](/images/modmii/syscheck-wizard-2.png)

4. Se ha rilevato la presenza di Priiloader, ti chiederà se desideri aggiornarlo. Digita `Y` e premi invio.

   ![](/images/modmii/syscheck-wizard-3.png)

5. Il programma analizzerà il file SysCheck e fornirà delle opzioni in base a quanto rilevato. In questo esempio, le modifiche sulla console sono aggiornate, ma sono presenti vari IOS non necessari che potrebbero essere degli abbozzi. Digita `Y` e premi invio.

   ![](/images/modmii/syscheck-wizard-4.png)

::: warning

A questo punto, dovresti seguire la guida generata da ModMii. Non è necessario seguire le altre sezioni; sono fornite come informazioni aggiuntive per le persone che usano ModMii per altri motivi.

:::

## HackMii Solutions Wizard

HackMii Solutions Wizard risolve i problemi causati da cose come DARKCORP/CIOSSPAGHETTI installando IOS puliti. Può risolvere problemi come:

- L'HackMii Installer non mostra "Press (1) to continue"
- L'HackMii Installer riporta "no vulnerable IOS found!"
- L'Homebrew Channel è visualizzato sottosopra

1. Apri ModMii Skin o ModMii Classic e seleziona l'opzione HackMii Solutions Wizard.

   ![](/images/modmii/hackmii-wizard-1.png)

2. Seleziona la versione e la regione del menu Wii in uso, seguendo le istruzioni del programma. (Se non sai come ottenere queste informazioni, seleziona l'opzione sottostante e premi `Next` per una videoguida)

   ![](/images/modmii/hackmii-wizard-2.png)

3. Seleziona l'exploit che vuoi usare per modificare la console. Se su Wii, Wilbrand è consigliato se hai una scheda SD. Per vWii, è consigliato usare il browser.

   ![](/images/modmii/hackmii-wizard-3.png)

4. Se hai selezionato l'opzione Wilbrand nel passaggio precedente, inserisci l'indirizzo MAC della console. (Se non sai come ottenerla, digita `Help` nella casella di testo per guardare un video esplicativo)

   ![](/images/modmii/hackmii-wizard-4.png)

5. Controlla dove vuoi salvare i file sulla scheda SD e/o sull'unità USB.

   ![](/images/modmii/modmii-wizard-12.png)

6. Conferma che le impostazioni siano corrette, poi premi `Finish`. Una volta premuto, ModMii scaricherà dei file in sottofondo e, al termine, genererà e aprirà una guida per te. Dopo averla seguita, consigliamo di usare [SysCheck Updater Wizard](#syscheck-updater-wizard) per annullare eventuali modifiche problematiche apportate alla console.

   ![](/images/modmii/hackmii-wizard-5.png)

::: warning

A questo punto, dovresti seguire la guida generata da ModMii. Non è necessario seguire le altre sezioni; sono fornite come informazioni aggiuntive per le persone che usano ModMii per altri motivi.

:::

---

::: tip

[Clicca qui per tornare all'indice.](site-navigation)

:::
