# Installare l'Homebrew Channel su vWii

Questa pagina ti guiderà attraverso il processo di installazione dell'Homebrew Channel sul menu vWii.

::: info

Per questo processo, è possibile utilizzare la stessa scheda SD usata inizialmente per modificare Wii U.

:::

::: warning

Se non l'hai già fatto, assicurati di aver creato un [backup della NAND](https://wiiu.hacks.guide/aroma/nand-backup) e avere installato l'[ambiente di Aroma](https://aroma.foryour.cafe/) su Wii U.

Se non l'hai installato, procedi con l'[installare Aroma](https://wiiu.hacks.guide/aroma/getting-started) o [modificare vWii senza modificare Wii U](wiiu-nand-dumper).

:::

## Requisiti

- Una console Wii U
- L'[ambiente Aroma](https://aroma.foryour.cafe/) (dovrebbe essere installato dal passaggio precedente)
- L'ultima versione di [Compat Title Installer](https://github.com/Xpl0itU/vwii-compat-installer/releases/latest) (`compat_installer-Aroma.zip`) (dovrebbe essere installato dal passaggio precedente)
- Il plugin [Enhanced vWii](https://github.com/GaryOderNichts/evwii/releases/latest) (`evwii.wps`) per Aroma (opzionale)

::: danger

Se il plugin evWii non è installato e un'app homebrew si blocca, l'unico modo per spegnere la console è staccare il cavo di alimentazione. In alcuni casi, farlo potrebbe danneggiare la memoria di sistema; pertanto, si consiglia altamente di avere il plugin installato.

:::

## Istruzioni

### Sezione I - File

1. Inserisci la scheda SD della console nel PC.
2. Copia il file `compat_installer.wuhb` da `compat_installer-Aroma.zip` in `wiiu` -> `apps` della scheda SD.
3. Copia il file `evwii.wps` in `wiiu` -> `environments` -> `aroma` -> `plugins` della scheda SD.
4. Reinserisci la scheda SD nella console.

### Sezione II - Avviare in Aroma

I passaggi successivi variano a seconda che la console sia configurata per l'[autoboot di Aroma](https://wiiu.hacks.guide/aroma/autobooting) o meno. Se all'avvio della console vedi vWii Compat Installer, sei nell'ambiente Aroma e dovresti [procedere alla Sezione III](#section-iii---installing-the-homebrew-channel). Altrimenti, usa uno dei due metodi successivi per avviare in Aroma.

#### Procedura per Wii U con PayloadLoader

Se hai modificato la console in precedenza e hai [PayloadLoader](https://wiiu.hacks.guide/aroma/installing-payloadloader.html) installato, dovresti poter riuscire ad avviare l'app Informazioni per la salute
e la sicurezza per caricare l'ambiente di Aroma.

#### Procedura per Wii U senza PayloadLoader

::: warning

Se ricevi errori come "FSOpenfile failed", "FSGetMountSource failed", o "SD Mount failed", fai riferimento agli errori del browser in [Problemi comuni e soluzioni](https://wiiu.hacks.guide/common-issues-fixes.html).

:::

Se NON hai [PayloadLoader](https://wiiu.hacks.guide/aroma/installing-payloadloader.html) installato, dovrai usare l'exploit del browser per avviare l'ambiente di Aroma. Per chi non vuole modificare completamente la propria console Wii U, seguite i seguenti passaggi.

1. Apri il Browser Internet e naviga sul sito `wiiuexploit.xyz`.

   ![](/images/vwii/exploit/browser-exploit.png)

2. Clicca su `Run Exploit!` e tieni premuto il pulsante X finché non vedi l'EnvironmentLoader. Una volta che sei all'interno dell'EnvironmentLoader, seleziona `aroma` per avviare l'ambiente Aroma.

   - Se la console rimane bloccata su uno schermo bianco o non si muove, attendi alcuni secondi. Se non succede nulla, riavvia la console, riapri il browser, vai su `Impostazioni` -> `Reimposta i dati di salvataggio`, clicca `OK` per confermare e poi riprova.
   - Se vedi una schermata `Please choose your payload`, riprova e assicurati di tenere premuto `X` abbastanza a lungo. Non tenere premuto il pulsante `B`.

   ![](/images/vwii/exploit/environment-loader.png)

3. Se ricevi un messaggio di avviso sulla cartella di aggiornamento esistente, premi il pulsante `X` per bloccare gli aggiornamenti e prosegui.

   ![](/images/vwii/exploit/update-warning.png)

4. Nel Boot Selector, premi `A` per avviare il menu Wii U.

   ![](/images/vwii/exploit/boot-selector.png)

### Sezione III - Installazione dell'Homebrew Channel

::: tip

Nel passaggio 3, se il pulsante HOME non funziona o se la console rimane bloccata su un colore fisso, puoi spegnerla in modo sicuro tenendo premuto il pulsante di accensione. Poi, riaccendila e procedi normalmente.

:::

1. Avvia l'app vWii Compat Installer dal menu Wii U.

   ![](/images/vwii/exploit/compat-install-launch.png)

2. Premi `A` per installare l'Homebrew Channel.

   ![](/images/vwii/exploit/compat-install-pending.png)

3. Aspetta che appaia `Install succeeded!`. Poi, premi il pulsante HOME per tornare al menu Wii U.

   ![](/images/vwii/exploit/compat-install-success.png)

4. Avvia la modalità Wii (l'icona del menu Wii).

   ![](/images/vwii/launch-vwii.png)

5. Se l'installazione ha avuto successo, ora dovresti vedere l'Homebrew Channel nel menu Wii.

   ![](/images/vwii/exploit/vwii-hbc-installed.png)

## Lettura necessaria per la gestione degli Homebrew

Ora puoi usare l'Homebrew Channel per avviare le app homebrew di Wii.

Nota: quando installi applicazioni homebrew Wii sulla scheda SD o sull'unità USB, la struttura delle cartelle dovrebbe essere così:

```shell
💾 Scheda SD
 ┗ 📁 apps
   ┣ 📁 NomeApp1
   ┃ ┣ 📄 boot.dol
   ┃ ┣ 📄 meta.xml
   ┃ ┗ 📄 icon.png
   ┗ 📁 NomeApp2
     ┣ 📄 boot.dol
     ┣ 📄 meta.xml
     ┗ 📄 icon.png
```

`NomeApp1` e `NomeApp2` sono nomi provvisori. Non inserire più cartelle `apps` dentro la cartella `apps` stessa.

Nota che la cartella `apps` all'interno della cartella `wiiu` (per le app homebrew Wii U) e la cartella `apps` nella root della scheda SD (per le app homebrew Wii) sono diverse.

---

::: tip

Continua con l'[installazione di Priiloader](priiloader)

Anche se BootMii non può essere installato su vWii, Priiloader aggiunge un livello cruciale di protezione dai brick e la sua installazione è altamente consigliata.

:::
