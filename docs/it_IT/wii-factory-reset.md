# Ripristinare la NAND di Wii all'originale (stock)

Questa guida spiega come creare una NAND originale per la console Wii utilizzando il programma Ohneschwanzenegger. Contrariamente all'opzione `Formattazione console Wii` nelle impostazioni, questo cancellerà qualsiasi modifica apportata alla NAND scaricando un menu di sistema originale dai server NUS. Se la procedura viene seguita correttamente, la console verrà lasciata senza alcun homebrew, con gli ISO originali, e verrà avviata la schermata di configurazione iniziale.

Nota che il programma **necessita** di una NAND (anche brickata!) per funzionare, in quanto ha bisogno di una copia dei suoi primi 8 blocchi, di una lista dei blocchi difettosi e delle chiavi AES/HMAC.

::: info

Non seguire le istruzioni di questo tutorial su vWii della Wii U.

:::

::: danger

Le istruzioni elencate in questa guida CANCELLERANNO LA MEMORIA DI SISTEMA DELLA CONSOLE e dovrebbero essere considerate come ULTIMA RISORSA, o se si sta cercando di fare quanto segue:

- Vuoi ripristinare la console allo stato in cui si trovava quando ha lasciato la fabbrica.
- Vuoi sistemare un brick quando ma non hai un backup della NAND funzionante o l'accesso all'Homebrew Channel, ma puoi crearne uno tramite BootMii.
- Non puoi annullare alcune modifiche applicate alla memoria di sistema, come i cIOS DARKCORP.

:::

::: warning

Se stai cercando di [aggiornare la console alla 4.3E](update) tramite homebrew o di aggiornare homebrew/IOS datati, molto probabilmente non avrai bisogno di seguire questa guida. Invece, puoi usare uno strumento come SysCheck Updater Wizard, integrato in [ModMii](modmii#syscheck-updater-wizard). Se hai dei dubbi, considera di entrare nel server Discord di Nintendo Homebrew (in inglese) per ricevere assistenza.

:::

## Requisiti

- Una scheda SD con almeno 512MB di spazio libero (si consiglia 1GB o più)
- Un [backup della NAND](nand-backup) proveniente dalla console di cui stai tentando il ripristino
- Un PC Windows con una connessione a Internet
- [Ohneschwanzenegger](https://raw.githubusercontent.com/modmii/modmii.github.io/master/temp/ohneschwanzenegger.zip)
- [Nand BIN Checker](/assets/files/nandBinCheck.zip)

## Istruzioni

### Sezione I - Preparazione

1. Avvia Ohneschwanzenegger. Se appare un messaggio di Windows SmartScreen, clicca `Esegui comunque` dato che si tratta di un falso positivo.

2. Premi il pulsante `Local Cache`, crea una nuova cartella e poi premi OK. Una cartella di esempio è riportata di seguito.

   ![](/images/factory-reset/nuscache.png)

3. Premi `Nand Dump` nella barra degli strumenti, poi `New nand`. Questo aprirà una nuova finestra in cui è possibile regolare i parametri per un nuovo dump della NAND. Premi il pulsante `Existing Nand...` e seleziona il backup della NAND della console.

   ![](/images/factory-reset/newnand.png)

4. Questo compilerà automaticamente i campi delle chiavi, del boot 1/2 e dei blocchi difettosi. Cambia SOLO la casella `Destination` in `./nandVuota.bin`, così da creare la NAND con il nome indicato. Poi, premi OK.

   ![](/images/factory-reset/renamenand.png)

### Sezione II - Creazione di una NAND vuota

1. Ora che la NAND è caricata nel programma, seleziona `Content` nella barra degli strumenti, poi `Format`. Questo inizializzerà la NAND VUOTA, non quella attuale.

   ![](/images/factory-reset/formatnand.png)

2. Seleziona la casella in alto a sinistra e digita la versione del menu di sistema che la NAND userà. Nota che la versione ottimale dovrebbe essere la 4.3 (esempi: `4.3E`, `4.3U`, `4.3J`, `4.3K`).

   ![](/images/factory-reset/sysmenu.png)

3. Una volta confermata la versione desiderata, premi `Get It!` o Invio. Questo inizierà a scaricare il menu dai server NUS, con l'avanzamento mostrato sul programma.

   ![](/images/factory-reset/menudownload.png)

4. Al termine, apparirà un messaggio con le impostazioni aggiunte alla NAND. Verrà riempito automaticamente in base a quanto presente nella NAND, anche se il numero seriale potrebbe essere errato. Puoi modificarlo se vuoi, altrimenti lascialo vuoto e premi OK.

   ![](/images/factory-reset/settings.png)

5. Successivamente, premi `Content` sulla barra degli strumenti e poi `Write meta entries`. Dopo, torna indietro e premi `Flush`. Ora puoi chiudere la finestra.

   ![](/images/factory-reset/finalsteps.png)

### Sezione III - Verifica della NAND

1. Se NAND Bin Checker non si trova già nella stessa cartella di Ohneschwanzenegger, copialo ora. Dopo, apri un terminale in quella cartella. Esegui il seguente comando: `.\nandBinCheck.exe .\nandVuota.bin`. Se hai nominato la NAND in modo diverso, modifica il comando di conseguenza. Il programma quindi verificherà la validità della NAND.

   ![](/images/factory-reset/nandcheck.png)

2. Se tutto va bene, il risultato dovrebbe essere simile a quello mostrato di seguito. Se c'è anche SOLO un errore, NON USARE questa NAND e riprova, perché ripristinarla sulla console potrebbe danneggiarla o brickarla permanentemente. Se continui a ricevere errori dopo vari tentativi, vai nel server Discord di Nintendo Homebrew (in inglese) per ricevere assistenza.

   ![](/images/factory-reset/nandcheckresult.png)

3. Sposta il file `nandVuota.bin` sulla tua scheda SD e rinominala `nand.bin`, così che possa essere ripristinata da BootMii. Ricordati di non sovrascrivere la NAND esistente!

   ![](/images/factory-reset/nandname.png)

---

::: tip

[Continua con il ripristino tramite BootMii](bootmiirecover)

Ora che hai una NAND vuota, puoi ripristinarla sulla console utilizzando BootMii.

:::
