# Open Shop Channel

::: tip

**Fine della sezione richiesta**

Questo segna la fine della sezione richiesta della guida principale. Non è necessario seguire la guida da questo punto in poi se si desidera una configurazione homebrew base e funzionante.

Di seguito, il resto della guida illustrerà i seguenti punti per sfruttare al meglio la tua console Wii:

- Utilizzare l'Open Shop Channel per installare applicazioni homebrew
- Ripristinare la funzionalità di WiiConnect24 tramite WiiLink
- Ripristinare la capacità di giocare online tramite Wiimmfi
- Fornire una lista di homebrew consigliati da provare

:::

::: info

Per ricevere supporto per Open Shop Channel, entra nel [server Discord di Open Shop Channel](https://discord.gg/osc) (in inglese).

:::

[Open Shop Channel](https://oscwii.org/) è una repository di applicazioni homebrew creata da dhtdht020 ed è attualmente il modo preferibile per scaricare homebrew.

Ci sono due modi per utilizzarlo:

- Sulla console stessa, usando uno dei seguenti homebrew:
  - LibreShop (preferibile)
  - Homebrew Browser (alternativa)
- Sul computer, usando una delle seguenti applicazioni:
  - TinyWiiBackupManager (preferibile)
  - OSCDL (alternativa)

## Metodo I - Open Shop Channel su Wii

### LibreShop

LibreShop è una repository creata dal team LibreShop che offre un metodo moderno e più affidabile per scaricare homebrew su Wii.

#### Requisiti

- Una console Wii connessa a Internet
- Una scheda SD o un'unità USB
- [LibreShop](https://oscwii.org/library/app/libreshop)

#### Istruzioni d'uso

1. Scarica il file `.zip` consigliato dal sito Open Shop Channel.

   ![](/images/osc/zip-download-LS.png)

2. Estrai la cartella `apps` dall'archivio nella root della scheda SD o dell'unità USB.

3. Inserisci la scheda SD o l'unità USB nella console e avvia LibreShop. Ora l'app dovrebbe aprirsi.

   ![](/images/osc/libreshop.png)

### Homebrew Browser

Homebrew Browser è una repository originariamente rilasciata nel giugno 2008, ma ora con una patch dal team di Open Shop Channel per supportare i loro server. Può risultare instabile, ma rappresenta un'alternativa a LibreShop nel caso in cui non fosse utilizzabile.

#### Requisiti

- Una console Wii connessa a Internet
- Una scheda SD o un'unità USB
- [Homebrew Browser](https://oscwii.org/library/app/homebrew_browser)

#### Istruzioni d'uso

1. Scarica il file `.zip` consigliato dal sito Open Shop Channel.

   ![](/images/osc/zip-download-HBB.png)

2. Estrai la cartella `apps` dall'archivio nella root della scheda SD o dell'unità USB. Facoltativamente, l'archivio fornisce una guida su come utilizzare l'Homebrew Browser.

3. Inserisci la scheda SD o l'unità USB nella console e avvia l'Homebrew Channel. Ora l'app dovrebbe aprirsi.

   ![](/images/osc/homebrew-browser.png)

## Metodo II - Open Shop Channel su PC

### TinyWiiBackupManager

TinyWiiBackupManager è dotato di un browser integrato per le applicazioni homebrew ed è il metodo preferibile per scaricare le app da Open Shop Channel su PC grazie alla sua semplicità.

#### Requisiti

- Un PC con Windows/macOS/Linux connesso a Internet
- Una scheda SD o un'unità USB
- L'ultima versione di [TinyWiiBackupManager](https://github.com/mq1/TinyWiiBackupManager/releases/latest)

#### Sezione I - Installazione

Le istruzioni dettagliate dettagliate per l'installazione di TinyWiiBackupManager, specifiche per il tuo sistema operativo, possono sono disponibili nella pagina [Gestire i backup](backups#using-tinywiibackupmanager). Una volta terminato, segui le istruzioni su come utilizzare l'applicazione per l'Open Shop Channel.

#### Sezione II - Utilizzo

1. Inserisci l'unità USB o la scheda SD nel computer.

2. Clicca l'icona del disco rigido in basso a sinistra dell'app e seleziona l'unità. Seleziona la root dell'unità (es. `E:\`), non la cartella "wbfs" o "games". Se non l'hai ancora fatto, clicca sull'icona del negozio per aprire l'Open Shop Channel.

   ![](/images/desktop-apps/TWBM/twbm-osc-home.png)

3. Trova l'applicazione che desideri e premi il pulsante `Install app`. In alternativa, puoi inviare l'app direttamente alla console (per farlo, sia il computer che la console devono essere connessi alla stessa rete).

   ![](/images/desktop-apps/TWBM/twbm-osc-search.png)

4. Una finestra ti chiederà se vuoi installare l'applicazione. Premi `Yes`. Al termine dell'installazione, apparirà un messaggio di conferma in basso a destra.

   ![](/images/desktop-apps/TWBM/twbm-osc-dialog.png)

5. Inserisci la scheda SD o l'unità USB nella console e avvia l'Homebrew Channel. Ora dovresti vedere l'homebrew appena scaricato.

### OSCDL

OSCDL è l'applicazione ufficiale sviluppata dal team di Open Shop Channel per PC, che presenta anche delle caratteristiche aggiuntive. Può essere utilizzata come alternativa a TinyWiiBackupManager nel caso in cui non fosse utilizzabile.

#### Requisiti

- Un PC con Windows/macOS/Linux connesso a Internet
- Una scheda SD o un'unità USB
- L'ultima versione di [OSCDL](https://github.com/dhtdht020/osc-dl/releases/latest)

#### Windows

<br>

##### Sezione I - Installazione

::: info

Se appare un messaggio di Windows SmartScreen, clicca `Esegui comunque` dato che si tratta di un falso positivo.

:::

::: info

Se ti viene chiesto se vuoi che il programma apporti delle modifiche al PC, seleziona Sì. L'Open Shop Channel è un'applicazione sicura.

:::

1. Scarica `oscdl-installer.exe` ed esegui l'installazione. Facoltativamente, puoi scaricare "oscdl-standalone.exe" invece, che non deve essere installato ma viene eseguito come eseguibile portatile.

   ![](/images/osc/exe-download-OSCDL.png)

2. Lascia che l'installazione prosegua, poi avvia OSCDL al termine.

   ![](/images/osc/install-finished-OSCDL.png)

##### Sezione II - Utilizzo

1. Trova l'applicazione che desideri e premi il pulsante Download. In alternativa, puoi inviare l'app direttamente alla console (per farlo, sia il computer che la console devono essere connessi alla stessa rete).

   ![](/images/osc/app-download-OSCDL.png)

2. Se scaricato direttamente, verrà visualizzata una finestra di dialogo che ti chiederà dove salvare il file. OSCDL ti avviserà se rileva un dispositivo di archiviazione con la cartella `apps` all'interno e, se il file viene scaricato lì, l'homebrew verrà automaticamente estratto per essere pronto all'uso. In caso contrario, puoi specificare una posizione ed estrarlo da solo.

   ![](/images/osc/download-prompt-OSCDL.png)

3. Inserisci la scheda SD o l'unità USB nella console e avvia l'Homebrew Channel. Ora dovresti vedere l'homebrew appena scaricato.

#### macOS e Linux

<br>

##### Sezione I - Installazione

::: warning

Per utilizzare OSCDL su queste piattaforme, devi avere Python 3 installato. In alcune distribuzioni, Python 3 può avere `python` o `python3` come alias; tienilo a mente per il passaggio 6. Creerai anche un ambiente virtuale per isolare OSCDL e le sue dipendenze dall'installazione di base di Python.

:::

1. Scarica il codice sorgente di OSCDL, il file `.zip` o il file `.tar.gz`. Facoltativamente, puoi usare `git clone https://github.com/dhtdht020/osc-dl.git` nella cartella in cui desideri utilizzare OSCDL.

   ![](/images/osc/source-code-download-OSCDL.png)

2. Se scegli di scaricare il codice sorgente, estrai l'archivio in una posizione sul computer in cui desideri utilizzare OSCDL.

3. Apri la cartella in cui sono stati estratti i file in un terminale, poi esegui il comando `python3 -m venv venv` per creare un ambiente virtuale. Se ricevi un messaggio di errore che `ensurepip` non è disponibile, devi installare il pacchetto `python3-venv` per la tua distribuzione. Python potrebbe fornire il comando diretto per farlo.

   ![](/images/osc/create-virtual-environment.png)

4. Esegui il comando `source venv/bin/activate` per attivare l'ambiente virtuale.

   ![](/images/osc/activate-virtual-environment.png)

5. Esegui il comando `pip install -r requirements.txt`. Questo scaricherà i pacchetti necessari per eseguire OSCDL.

   ![](/images/osc/satisfy-requirements-OSCDL.png)

6. Esegui il comando `python3 oscdl.py`. Questo aprirà il programma. Se scegli di mantenere il terminale aperto, usa `deactivate` per uscire dall'ambiente virtuale. Nota inoltre che è necessario eseguire `source venv/bin/activate` nella cartella in cui è stato estratto OSCDL ogni volta che apri un nuovo terminale. Questo serve a caricare le dipendenze necessarie per l'esecuzione di OSCDL.

   ![](/images/osc/run-OSCDL-terminal.png)

##### Sezione II - Utilizzo

1. A OSCDL aperto, trova l'applicazione che desideri e premi il pulsante Download. In alternativa, puoi inviare l'app direttamente alla console (per farlo, sia il computer che la console devono essere connessi alla stessa rete).

   ![](/images/osc/app-download-OSCDL-linux.png)

2. Se scaricato direttamente, verrà visualizzata una finestra di dialogo che ti chiederà dove salvare il file. OSCDL ti avviserà se rileva un dispositivo di archiviazione con la cartella `apps` all'interno e, se il file viene scaricato lì, l'homebrew verrà automaticamente estratto per essere pronto all'uso. In caso contrario, puoi specificare una posizione ed estrarlo da solo.

   ![](/images/osc/download-prompt-OSCDL-linux.png)

3. Inserisci la scheda SD o l'unità USB nella console e avvia l'Homebrew Channel. Ora dovresti vedere l'homebrew appena scaricato.

---

::: tip

[Continua con WiiConnect24](wiiconnect24)

WiiConnect24 era un servizio online gestito da Nintendo che forniva funzionalità a varie applicazioni, come il Canale Meteo e il Canale Notizie. Questa guida illustra WiiLink, un servizio che ripristina questa funzionalità e fornisce altre informazioni utili per l'utilizzo.

:::
