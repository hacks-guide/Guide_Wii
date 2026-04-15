# Ripristinare la NAND di Wii all'originale (stock)

Questa guida spiega come creare una NAND stock per il tuo sistema Wii utilizzando un programma chiamato Ohneschwanzenegger. Contrariamente all'opzione `Formattazione console Wii` nelle Impostazioni console Wii, questo cancellerà qualsiasi cambiamento applicato alla NAND scaricando un menu di sistema Wii originale dai server NUS. Se seguito correttamente e una volta finito il processo, la tua console Wii verrà lasciata con nessun homebrew, ISO originali, e verrà avviata la schermata di configurazione iniziale.

Nota che il programma **necessita** di una NAND (anche brickata!) per funzionare, in quanto ha bisogno di una copia dei suoi primi 8 blocchi, una lista dei blocchi non buoni, e le chiavi AES/HMAC.

::: info

Non eseguire le istruzioni di questo tutorial su vWii della Wii U.

:::

::: danger

Le istruzioni dettagliate in questa guida CANCELLERANNO LA MEMORIA DI SISTEMA DELLA TUA CONSOLE WII e dovrebbe essere vista come ULTIMA RISORSA o se stai cercando di fare i seguenti:

- Ripristinare la Wii in uno stato paragonabile a quando ha lasciato la fabbrica.
- Sistemare un brick dove non hai un backup della NAND funzionante o l'accesso a Homebrew Channel, ma ne puoi ancora creare uno usando BootMii.
- Non puoi annullare alcune modifiche applicate alla memoria di sistema di Wii, come i cIOS DARKCORP.

:::

::: warning

Se stai cercando di [aggiornare la tua console Wii alla 4.3E](update) con homebrew o aggiornare homebrew/IOS datati, molto probabilmente non avrai bisogno di seguire questa guida. Invece, puoi usare uno strumento come SysCheck Updater Wizard, integrato in [ModMii](modmii#syscheck-updater-wizard). Se sei confuso su questo processo, considera entrare nel server Discord di Nintendo Homebrew (in inglese) per ricevere assistenza.

:::

## Requisiti

- Una scheda SD con un spazio disponibile minimo di 512MB (1GB o più sono consigliati)
- Un [backup della NAND](bootmii) proveniente dalla tua console
- Un computer Windows con una connessione a Internet
- [Ohneschwanzenegger](https://raw.githubusercontent.com/modmii/modmii.github.io/master/temp/ohneschwanzenegger.zip)
- [Nand BIN Checker](/assets/files/nandBinCheck.zip)

## Istruzioni

### Sezione I - Preparazione

1. Avvia Ohneschwanzenegger. Potresti ricevere un avviso di Windows Smartscreen, è un falso positivo e puoi eseguire il programma comunque premendo `Maggiori informazioni` e `Esegui comunque`.

2. Premi il pulsante `Local Cache`, crea una nuova cartella per la cache di NUS. poi premi OK. Una cartella di esempio è riportata sotto.

   ![](/images/factory-reset/nuscache.png)

3. Premi `Nand Dump` sulla barra degli strumenti, poi premi `New nand`. Questo dovrebbe aprire una nuova finestra dove puoi regolare dei parametri per un nuovo dump della NAND. Premi il pulsante `Existing Nand...` grande e trova il backup della NAND della tua console Wii.

   ![](/images/factory-reset/newnand.png)

4. Questo riempirà automaticamente le informazioni come le chiavi, Boot 1/2, e i blocchi non buoni. Cambia SOLO la casella `Destination` con `./blankNand.bin`, che creerà un nuovo file NAND col nome indicato. Poi, premi OK.

   ![](/images/factory-reset/renamenand.png)

### Sezione II - Creare una NAND vuota

1. Ora che la NAND è caricata nel programma, seleziona `Content` nella barra degli strumenti, poi premi `Format`. Questo inizializzerà la tua NAND VUOTA, non la tua attuale.

   ![](/images/factory-reset/formatnand.png)

2. Seleziona la casella in alto a sinistra e digita la versione di sistema di Wii che la tua NAND necessiterà. Nota che questo dovrebbe essere ottimalmente 4.3 (esempi: `4.3E`, `4.3U`, `4.3J`, `4.3K`).

   ![](/images/factory-reset/sysmenu.png)

3. Una volta confermata la versione che desideri, premi Invio sulla tastiera o `Get It!`. Questo inizierà a scaricare il menu dai server NUS, con l'avanzamento mostrato sul programma.

   ![](/images/factory-reset/menudownload.png)

4. Una volta che ha finito di scaricare, apparirà un messaggio con le impostazioni aggiunte alla NAND. Sarà riempito automaticamente in base a cosa era nella tua NAND, anche se il numero seriale potrebbe essere errato. Puoi modificarlo se vuoi, altrimenti lascialo vuoto e premi OK.

   ![](/images/factory-reset/settings.png)

5. Successivamente, premi `Content` sulla barra degli strumenti e premi `Write meta entries`. Poi, torna indietro e premi `Flush`. Ora puoi chiudere la finestra.

   ![](/images/factory-reset/finalsteps.png)

### Sezione III - Verifica della NAND

1. Se NAND Bin Checker non è già nella stessa cartella di Ohneschwanzenegger, copialo ora. Poi, apri un terminale in quella cartella. Esegui il seguente comando: `.\nandBinCheck.exe .\blankNand.bin`. Se hai nominato la NAND qualcos'altro, aggiusta il comando di conseguenza. Il programma quindi verificherà la validità della NAND.

   ![](/images/factory-reset/nandcheck.png)

2. Se va tutto bene. il risultato dovrebbe essere simile a quello mostrato sotto. Se c'è anche SOLO un errore, NON USARE questa NAND e riprova; perché potrebbe danneggiare o brickare permanentemente la tua console. Se continui a ricevere errori dopo vari tentativi, vai nel server Discord di Nintendo Homebrew (in inglese) per ricevere assistenza.

   ![](/images/factory-reset/nandcheckresult.png)

3. Sposta il file `blankNand.bin` sulla tua scheda SD e rinominala `nand.bin`, così che possa essere ripristinata da BootMii. Ricordati di non sovrascrivere la tua NAND esistente!

   ![](/images/factory-reset/nandname.png)

---

::: tip

[Continua con ripristinare da BootMii](bootmiirecover)

Ora che hai una NAND vuota, puoi ripristinarla sulla tua console Wii usando BootMii.

:::
