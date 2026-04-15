# Open Shop Channel

::: tip

**Fine della sezione richiesta**

Questo segna la fine della sezione richiesta della guida principale. Non è necessario seguire la guida da questo punto in poi se desideri una configurazione homebrew base e funzionante.

Andando avanti, il resto della guida mostrerà quanto segue per ottenere il massimo dalla tua console Wii:

- Utilizzare l'Open Shop Channel per ottenere applicazioni homebrew
- Ripristinare la funzionalità di WiiConnect24 con WiiLink
- Ripristinare la capacità di giocare online con Wiimmfi
- Fornire una lista di homebrew consigliati da provare

:::

::: info

Per ricevere supporto (in inglese) con Open Shop Channel, entra nel [server Discord di Open Shop Channel](https://discord.gg/osc).

:::

L'[Open Shop Channel](https://oscwii.org/) è un repository di applicazioni homebrew creato da dhtdht020 ed è attualmente il modo preferito per scaricare homebrew.

Ci sono due metodi per utilizzarlo:

- Sulla console Wii stessa, usando una delle seguenti applicazioni homebrew:
  - LibreShop (preferito)
  - Homebrew Browser (alternativa)
- Sul tuo computer, usando una delle seguenti applicazioni:
  - TinyWiiBackupManager (preferito)
  - OSCDL (alternativa)

## Metodo I - Open Shop Channel su Wii

### LibreShop

LibreShop è un repository creata dal team LibreShop, servendo come un metodo moderno e più affidabile per scaricare homebrew su Wii.

#### Requisiti

- Una console Wii con connessione a Internet
- Una scheda SD o unità USB
- [LibreShop](https://oscwii.org/library/app/libreshop)

#### Istruzioni d'uso

1. Scarica il file `.zip` consigliato dal sito di Open Shop Channel.

   ![](/images/osc/zip-download-LS.png)

2. Estrai la cartella `apps` dall'archivio nella root della tua scheda SD o unità USB.

3. Inserisci la scheda SD o unità USB nella console Wii e avvia LibreShop. Ora dovresti vedere LibreShop.

   ![](/images/osc/libreshop.png)

### Homebrew Browser

Homebrew Browser è un repository originariamente rilasciata nel giugno 2008, ma patchata dal team di Open Shop Channel per supportare i loro suoi server. Può essere instabile, ma serve come alternativa a LibreShop se non è utilizzabile.

#### Requisiti

- Una console Wii con connessione a Internet
- Una scheda SD o unità USB
- [Homebrew Browser](https://oscwii.org/library/app/homebrew_browser)

#### Istruzioni d'uso

1. Scarica il file `.zip` consigliato dal sito di Open Shop Channel.

   ![](/images/osc/zip-download-HBB.png)

2. Estrai la cartella `apps` dall'archivio nella root della tua scheda SD o unità USB. Facoltativamente, l'archivio fornisce una guida su come utilizzare l'Homebrew Browser.

3. Inserisci la scheda SD o unità USB nella console Wii e avvia l'Homebrew Channel. Ora dovresti vedere l'Homebrew Browser.

   ![](/images/osc/homebrew-browser.png)

## Metodo II - Open Shop Channel su PC

### TinyWiiBackupManager

TinyWiiBackupManager è dotato di un installatore di app integrato per applicazioni homebrew da Open Shop Channel. È il metodo preferito per scaricare le app da OSC su PC per la maggior parte degli utenti grazie alla sua semplicità.

#### Requisiti

- Un computer Windows/macOS/Linux con connessione a Internet
- Una scheda SD o unità USB
- L'ultima versione di [TinyWiiBackupManager](https://github.com/mq1/TinyWiiBackupManager/releases/latest)

#### Sezione I - Installazione

Istruzioni di installazione dettagliate per TinyWiiBackupManager specifiche per il tuo sistema operativo possono essere trovate nella pagina [Gestire i backup](backups#using-tinywiibackupmanager). Una volta terminato, procedi per le istruzioni su come usare l'applicazione per l'Open Shop Channel.

#### Sezione II - Utilizzo

1. Inserisci la tua unità USB o scheda SD nel tuo computer.

2. Clicca l'icona del disco rigido in basso a sinistra dell'app e seleziona la tua unità. Seleziona la root (es. `E:\`), non la cartella "wbfs" o "games". Se non l'hai ancora fatto, clicca sull'icona del negozio per aprire il frontend di Open Shop Channel.

   ![](/images/desktop-apps/TWBM/twbm-osc-home.png)

3. Trova un'applicazione che desideri ottenere e premi il pulsante `Install app`. In alternativa, è possibile inviare l'app direttamente a Wii (questo richiede che sia il computer che la console siano sulla stessa rete).

   ![](/images/desktop-apps/TWBM/twbm-osc-search.png)

4. Una finestra ti chiederà se vuoi installare l'applicazione. Premi `Yes`. A installazione terminata, apparirà un messaggio in basso a destra con la conferma.

   ![](/images/desktop-apps/TWBM/twbm-osc-dialog.png)

5. Inserisci la scheda SD o unità USB nella console Wii e avvia l'Homebrew Channel. Ora dovresti vedere il tuo homebrew appena scaricato.

### OSCDL

OSCDL è l'applicazione ufficialmente sviluppata dal team di Open Shop Channel per l'utilizzo su PC, avendo anche caratteristiche aggiuntive. Può essere utilizzato come alternativa a TinyWiiBackupManager nei casi in cui non funziona.

#### Requisiti

- Un computer Windows/macOS/Linux con connessione a Internet
- Una scheda SD o unità USB
- L'ultima versione di [OSCDL](https://github.com/dhtdht020/osc-dl/releases/latest)

#### Windows

<br>

##### Sezione I - Installazione

::: info

Potresti ricevere una finestra di Microsoft Smartscreen. Questo è un falso positivo, ignora ed esegui comunque.

:::

::: info

Se vedi una che ti chiede se vuoi che il programma faccia dei cambiamenti al tuo PC, seleziona Sì. L'Open Shop Channel è un'applicazione sicura.

:::

1. Scarica `oscdl-installer.exe` ed esegui il programma di installazione. Facoltativamente, è possibile invece scaricare `oscdl-standalone.exe` che non deve essere installato e viene invece eseguito come eseguibile portatile.

   ![](/images/osc/exe-download-OSCDL.png)

2. Lascia che l'installazione prosegua e poi avvia OSCDL una volta che il processo è terminato.

   ![](/images/osc/install-finished-OSCDL.png)

##### Sezione II - Utilizzo

1. Trova un'applicazione che desideri avere e premi il pulsante Download. In alternativa, è possibile inviare l'app direttamente a Wii (questo richiede che sia il computer che la console siano sulla stessa rete).

   ![](/images/osc/app-download-OSCDL.png)

2. Se scaricato direttamente, verrà visualizzata una finestra di dialogo che ti chiederà una posizione per il download. OSCDL rileverà un dispositivo di archiviazione con una cartella app e, se scaricato lì, verrà automaticamente decompresso l'homebrew per essere pronto per l'uso. In caso contrario, puoi specificare una posizione e estrarlo da solo.

   ![](/images/osc/download-prompt-OSCDL.png)

3. Inserisci la scheda SD o unità USB nella console Wii e avvia l'Homebrew Channel. Ora dovresti vedere il tuo homebrew appena scaricato.

#### macOS e Linux

<br>

##### Sezione I - Installazione

::: warning

Dovrai avere Python 3 installato per utilizzare OSCDL su queste piattaforme. Notare che, in alcune distribuzioni, Python 3 può avere `python` o `python3` come alias, prendi nota di ciò per il passaggio 6. Creerai anche un ambiente virtuale per isolare OSCDL e le sue dipendenze dall'installazione Python di base.

:::

1. Scarica il codice sorgente di OSCDL, il file `.zip` o il file `.tar.gz`. Facoltativamente, puoi usare `git clone https://github.com/dhtdht020/osc-dl.git` nella cartella in cui desideri utilizzare OSCDL.

   ![](/images/osc/source-code-download-OSCDL.png)

2. Se scegli di scaricare il codice sorgente, estrai l'archivio in una posizione sul computer in cui desideri utilizzare OSCDL.

3. Aprire la posizione dei file estratti in un terminale ed esegui il comando `python3 -m venv venv` per creare un ambiente virtuale. Nota che, se ricevi un messaggio che `ensurepip` non è disponibile, devi installare il pacchetto `python3-venv` per la tua distribuzione. Python può fornire un comando da usare per farlo.

   ![](/images/osc/create-virtual-environment.png)

4. Esegui il comando `source venv/bin/activate` per attivare l'ambiente virtuale.

   ![](/images/osc/activate-virtual-environment.png)

5. Esegui il comando `pip install -r requirements.txt`. Questo scaricherà i pacchetti Python necessari per eseguire OSCDL.

   ![](/images/osc/satisfy-requirements-OSCDL.png)

6. Esegui il comando `python3 oscdl.py`. Questo aprirà il programma. Se scegli di mantenere aperto il terminale, puoi usare `deactivate` per uscire dall'ambiente virtuale. Nota inoltre che è necessario eseguire `source venv/bin/activate` nella cartella dove OSCDL è stato estratto ogni volta che apri un nuovo terminale. Questo è al fine di caricare le dipendenze necessarie per eseguire OSCDL.

   ![](/images/osc/run-OSCDL-terminal.png)

##### Sezione II - Utilizzo

1. A OSCDL aperto, trova un'applicazione che desideri ottenere, poi premeri il pulsante Download. In alternativa, è possibile inviare l'app direttamente a Wii (questo richiede che sia il computer che la console siano sulla stessa rete).

   ![](/images/osc/app-download-OSCDL-linux.png)

2. Se scaricato direttamente, verrà visualizzata una finestra di dialogo che ti chiederà una posizione per il download. OSCDL rileverà un dispositivo di archiviazione con una cartella app e, se scaricato lì, verrà automaticamente decompresso l'homebrew per essere pronto per l'uso. In caso contrario, puoi specificare una posizione e estrarlo da solo.

   ![](/images/osc/download-prompt-OSCDL-linux.png)

3. Inserisci la scheda SD o unità USB nella console Wii e avvia l'Homebrew Channel. Ora dovresti vedere il tuo homebrew appena scaricato.

---

::: tip

[Continua con WiiConnect24](wiiconnect24)

WiiConnect24 è stato un servizio online gestito da Nintendo, che forniva funzionalità ad applicazioni come il Canale Meteo e il Canale Notizie. Questa guida delinea WiiLink, un servizio che ripristina questa funzionalità, così come altre informazioni di cui essere a conoscenza durante l'utilizzo.

:::
