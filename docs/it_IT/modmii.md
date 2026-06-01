# ModMii

::: warning

Questo programma NON è coperto da garanzia, quindi sei tu il responsabile per eventuali danni applicati alla console.

:::

::: warning

Alcune funzionalità potrebbero essere limitate su Wii mini.

:::

ModMii è uno strumento tutto-in-uno per Wii e Wii U su Windows, creato da XFlak, che include vari strumenti utili per la modifica. Può realizzare quanto segue:

- Modificare la console per la prima volta, o rimodificarla
- Individuare e aggiornare le modifiche obsolete
- Risolvere la visualizzazione dell'Homebrew Channel sottosopra
- Avviare gli homebrew senza apportare alcuna modifica alla NAND
- Scaricare homebrew
- E altro!

## Panoramica di ModMii

Ci sono due modi diversi per usare ModMii: ModMii Classic, che usa un'interfaccia a riga di comando, ma ha tutte le funzionalità disponibili;  e ModMii Skin, che ha un'interfaccia grafica, ma ha meno funzionalità. Se vuoi solo modificare la console per la prima volta, ModMii Skin dovrebbe essere sufficiente. Altrimenti, consigliamo l'utilizzo di ModMii Classic.

Il grafico qui sotto ti aiuterà a determinare cosa può essere fatto in entrambe le interfacce.

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

| Strumento                                                                                                      | Descrizione                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| W = ModMii Wizard <-- Start Here to Mod Your Wii, vWii or WiiU!                       | Questa opzione può essere usata per modificare la console Wii per la prima volta o rimodificarla.                                                                                                                                                                                                    |
| SU = SysCheck Updater Wizard (update only your outdated Wii\vWii softmods)                  | Questa opzione controlla la presenza di aggiornamenti per le vecchie modifiche installate sulla console. Su Wii, può risolvere problemi come DARKCORP/CIOSSPAGHETTI che potrebbero causare problemi con gli homebrew aggiornati.                                                     |
| U = USB-Loader Setup Wizard (Wii \ vWii \ Wii Mini)                                         | Questa opzione imposta correttamente l'USB loader per poter caricare i backup dalla scheda SD o dall'unità USB. Non necessaria se usi ModMii Wizard.                                                                                                                                 |
| H = HackMii Solutions Wizard (Wii) Upside-Down HBC/No Vulnerable IOS Fix                    | Questa opzione è utile per chi sta riscontrando problemi a far funzionare l'HackMii Installer o ha un Homebrew Channel sottosopra.                                                                                                                                                                   |
| AW = Abstinence Wizard (Non-permanent Wii Hacks)                                            | Questa opzione permette di eseguire homebrew senza modificare permanentemente la NAND della console.                                                                                                                                                                                                 |
| RC = Region Change Wizard (Wii)                                                             | Questa opzione può essere usata per cambiare la regione della console senza brickarla, essendo il miglior wizard in assoluto per questo scopo.                                                                                                                                                       |
| S = SNEEK Installation, EmuNAND Builder/Modifier, Game Bulk Extractor                                          | Questa opzione aiuta a impostare una EmuNAND (neek2o) sulla scheda SD o sull'unità USB. I benefici includono la possibilità di avere spazio aggiuntivo per i salvataggi o i canali e di eseguire homebrew senza modificare permanentemente la NAND della console. |
| F = open a File or Folder with ModMii for many more functions!                                                 | Questa opzione avanzata è utile soprattutto per gli sviluppatori.                                                                                                                                                                                                                                    |
| # = Download Pages: 1=NUS, 2=Wii Homebrew, 3=Themes, 4=cIOSs, 5=WiiU+PC Apps                   | Questa ti porterà a varie pagine di download disponibili per cose come app homebrew, app per PC, IOS, cIOS, temi del menu Wii e altro.                                                                                                                                                               |
| A = Advanced Downloads and Forwarder Builder                                                                   | Questa opzione permette di scaricare qualsiasi IOS e cIOS e di creare forwarder DOL/ISO personalizzati. Destinata esclusivamente a utenti esperti.                                                                                                                                   |
| L = Load Download Queue                                                                                        | Questa opzione carica le code di download compatte o salvate in precedenza.                                                                                                                                                                                                                          |
| C = Customize Config Files for Bootmii, Wad Manager or Multi-Mod Manager                                       | Questa opzione permette di creare file di configurazione per BootMii, gestori WAD e Multi-Mod Manager.                                                                                                                                                                                               |
| FC = File Cleanup & App Updater: Update Apps and\or remove un-needed files | Questa opzione rimuove i file non necessari dalla scheda SD o dall'unità USB una volta terminata la modifica della console.                                                                                                                                                                          |

:::

Quando usi ModMii, è importante far notare che genererà una guida personalizzata per te in base alle impostazioni selezionate. Per questo motivo, questa guida non tratterà la modifica della console, che sarà effettuata da ModMii. Mostrerà invece come usare il programma in modo più efficace con le opzioni più comuni.

## Installazione di ModMii

### Requisiti

- Una console Wii o Wii U
- Una scheda SD o un'unità USB
- Un PC Windows (o una macchina virtuale)
- [ModMii](https://modmii.github.io/)

### Installazione

::: warning

Il tuo browser o antivirus potrebbe segnalare ModMii come malware, ma è un falso positivo. ModMii NON contiene malware.

:::

1. Vai sul [sito di ModMii](https://modmii.github.io) e scendi fino alla sezione Download. Qui, seleziona l'opzione `Installer`. Il tuo browser potrebbe segnalarlo come malware, ma è un **falso positivo**.

   ![](/images/modmii/modmii-download.png)

2. Apri il file `ModMiiInstaller.exe` e prosegui con la configurazione.

   ![](/images/modmii/modmii-install.png)

## Come usare ModMii Wizard

ModMii Wizard è uno strumento che può aiutarti a modificare la console dall'inizio alla fine, scaricando tutti i file necessari e generando una guida personalizzata per te. Questo strumento può anche essere usato per sovrascrivere le modifiche già esistenti.

1. Apri ModMii Skin o ModMii Classic e seleziona l'opzione ModMii Wizard in cima alla lista.

   ![](/images/modmii/modmii-wizard-1.png)

2. Scegli la console che vuoi modificare. Se hai Wii U, si consiglia di modificarla insieme a vWii. Se vuoi modificare entrambe, salta al passaggio 9. Se vuoi modificare solo vWii, salta al passaggio 5. Se vuoi modificare solo Wii U, salta al passaggio 13.

   ![](/images/modmii/modmii-wizard-2.png)

3. Rispondi `Yes` alla prima domanda, a meno che tu non abbia un'idea specifica su cosa fare o aggiornare la console.

   ![](/images/modmii/modmii-wizard-3.png)

4. Seleziona la versione del menu Wii in uso, seguita dalla regione, seguendo le istruzioni del programma. Se hai dei dubbi, controlla l'opzione in fondo a ogni schermata per guardare un video esplicativo.

   ![](/images/modmii/modmii-wizard-4.png)

5. Seleziona l'exploit che vuoi usare per modificare la console. Se sei su Wii e hai una scheda SD, consigliamo Wilbrand. Per modificare solo vWii, consigliamo di usare il browser.

   ![](/images/modmii/modmii-wizard-5.png)

6. Se hai selezionato l'opzione Wilbrand nel passaggio precedente, inserisci l'indirizzo MAC della console. Se non sai come fare, digita `Help` nella casella di testo per guardare un video esplicativo.

   ![](/images/modmii/modmii-wizard-6.png)

7. Seleziona la versione del menu Wii dalla lista.

   ![](/images/modmii/modmii-wizard-7.png)

8. Seleziona quali canali vuoi far installare automaticamente; questo passaggio è facoltativo.

   ![](/images/modmii/modmii-wizard-8.png)

9. Seleziona se vuoi installare un tema del menu Wii personalizzato, potendo scegliere tra tre effetti. Ogni effetto determina la velocità con cui il contorno ruota quando si passa il cursore su un canale.

   ![](/images/modmii/modmii-wizard-9.png)

10. Seleziona se vuoi impostare un USB loader.

    ![](/images/modmii/modmii-wizard-10.png)

11. Se hai selezionato `Yes`, seleziona l'USB loader che vuoi usare. Consigliamo USB Loader GX o WiiFlow, in quanto entrambi sono ricoperti in questo sito. Altrimenti, puoi scaricarle tutte insieme.

    ![](/images/modmii/modmii-wizard-11.png)

12. Se hai selezionato `Yes`, seleziona dove vuoi salvare i file dei USB Loader.

    ![](/images/modmii/modmii-wizard-12.png)

13. Controlla dove vuoi salvare i file sulla scheda SD e/o sull'unità USB.

    ![](/images/modmii/modmii-wizard-13.png)

14. Conferma che le impostazioni siano corrette, poi premi `Finish`. Una volta premuto, ModMii scaricherà dei file in sottofondo e, al termine, genererà e aprirà una guida per te.

    ![](/images/modmii/modmii-wizard-14.png)

::: warning

A questo punto, dovresti seguire la guida generata da ModMii. Non è necessario seguire le sezioni sottostanti; sono fornite come informazioni aggiuntive per le persone che usano ModMii per altri motivi.

:::

## SysCheck Updater Wizard

SysCheck Updater Wizard è uno strumento che usa [SysCheck](syscheck) per analizzare le modifiche applicate alla console, soprattutto gli IOS e i cIOS. Accetta un file `syscheck.csv` generato dall'app e provvede agli aggiornamenti, se necessario.

1. Apri ModMii Classic e digita `SU` per aprire SysCheck Updater Wizard.

   ![](/images/modmii/syscheck-wizard-1.png)

2. Se non hai già un file SysCheck, segui le istruzioni indicate, poi trascina e rilascia il file `syscheck.csv` sulla finestra. Ciò incollerà il percorso del file, poi premi Invio.

   ![](/images/modmii/syscheck-wizard-2.png)

3. Se il syscheck ha rilevato la presenza di Priiloader, ti chiederà se desideri aggiornarlo. Digita `Y` e premi Invio per aggiornarlo all'ultima versione.

   ![](/images/modmii/syscheck-wizard-3.png)

4. Il programma analizzerà il file SysCheck e fornirà delle opzioni in base a quanto rilevato. In questo esempio, le modifiche sulla console sono aggiornate, ma sono presenti vari IOS non necessari che potrebbero essere degli abbozzi. Se vuoi apportare queste modifiche alla console, digita `Y` e premi Invio.

   ![](/images/modmii/syscheck-wizard-4.png)

::: warning

A questo punto, dovresti seguire la guida generata da ModMii. Non è necessario seguire le altre sezioni; sono fornite come informazioni aggiuntive per le persone che usano ModMii per altri motivi.

:::

## HackMii Solutions Wizard

HackMii Solutions Wizard è uno strumento che risolve i problemi causati da cose come DARKCORP/CIOSSPAGHETTI, installando IOS puliti. Esempi di problemi che potrebbero sorgere da loro sono i seguenti:

- L'HackMii Installer non mostra "Press (1) to continue"
- L'HackMii Installer riporta "no vulnerable IOS found!"
- L'Homebrew Channel è visualizzato sottosopra

1. Apri ModMii Skin o ModMii Classic e seleziona l'opzione HackMii Solutions.

   ![](/images/modmii/hackmii-wizard-1.png)

2. Seleziona la versione del menu Wii in uso, seguita dalla regione, seguendo le istruzioni del programma. Se hai dei dubbi, controlla l'opzione in fondo a ogni schermata per guardare un video esplicativo.

   ![](/images/modmii/hackmii-wizard-2.png)

3. Seleziona l'exploit che vuoi usare per modificare la console. Gli exploit elencati sono descritti in questo sito, ma nella maggior parte dei casi, se hai una scheda SD a portata di mano, consigliamo di usare Wilbrand.

   ![](/images/modmii/hackmii-wizard-3.png)

4. Se hai selezionato l'opzione Wilbrand nel passaggio precedente, inserisci l'indirizzo MAC della console. Se non sai come fare, digita `Help` nella casella di testo per guardare un video esplicativo.

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
