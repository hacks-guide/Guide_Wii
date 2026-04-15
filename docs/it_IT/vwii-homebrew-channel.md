# Installare l'Homebrew Channel su vWii

Questa pagina ti guiderà attraverso il processo di installazione dell'Homebrew Channel nel menu vWii.

::: info

È possibile utilizzare la stessa scheda SD utilizzata inizialmente per modificare la console Wii U per questo processo.

:::

::: warning

Se non l'hai già fatto, assicurati di aver creato un [backup della NAND](https://wiiu.hacks.guide/aroma/nand-backup) e avere l'[ambiente di Aroma](https://aroma.foryour.cafe/) installato su Wii U.

Se non hai Aroma installato, procedi con [installare Aroma](https://wiiu.hacks.guide/aroma/getting-started) o [modificare vWii senza modificare Wii U](wiiu-nand-dumper).

:::

## Requisiti

- Una console Wii U
- L'[ambiente Aroma](https://aroma.foryour.cafe/) (dovrebbe essere installato dal passaggio precedente)
- L'ultima versione di [Compat Title Installer](https://github.com/Xpl0itU/vwii-compat-installer/releases/latest) (`compat_installer-Aroma.zip`) (dovrebbe essere installato dal passaggio precedente)
- Il plugin di Aroma [Enhanced vWii](https://github.com/GaryOderNichts/evwii/releases/latest) (`evwii.wps`) (opzionale)

::: danger

Se il plugin evWii non è installato e un'applicazione homebrew crasha o si blocca, l'unico modo per spegnere la console è staccando il cavo di alimentazione. In alcuni casi, staccare il cavo di alimentazione può causare la corruzione della memoria; pertanto, è altamente raccomandato di avere il plugin installato.

:::

## Istruzioni

### Sezione I - File

1. Inserisci la scheda SD della tua console Wii U nel tuo PC.
2. Copia il file `compat_installer.wuhb` da `compat_installer-Aroma.zip` in `wiiu` -> `apps` della tua scheda SD.
3. Copia il file `evwii.wps` in `wiiu` > `environments` > `aroma` > `plugins` della tua scheda SD.
4. Reinserisci la tua scheda SD nella console Wii U.

### Sezione II - Avviare in Aroma

I prossimi passi saranno diversi in base se la console Wii U è configurata in [autoboot di Aroma](https://wiiu.hacks.guide/aroma/autobooting). Se vedi il vWii Compat Installer all'avvio di Wii U, sei nell'ambiente Aroma e dovresti [procedere alla Sezione III](#section-iii---installing-the-homebrew-channel). Altrimenti, usa i due metodi seguenti per avviare in Aroma.

#### Procedura per Wii U con PayloadLoader

Se hai modificato la tua console Wii U in precedenza e hai [PayloadLoader](https://wiiu.hacks.guide/aroma/installing-payloadloader.html) installato, dovresti poter riuscire ad avviare l'app Salute e sicurezza per caricare l'ambiente di Aroma.

#### Procedura per Wii U senza PayloadLoader

::: warning

Se ricevi errori come FSOpenfile failed, FSGetMountSource failed, o SD Mount failer, fai riferimento agli errori del browser in [Problemi comuni e soluzioni](https://wiiu.hacks.guide/common-issues-fixes.html).

:::

Se NON HAI [PayloadLoader](https://wiiu.hacks.guide/aroma/installing-payloadloader.html) installato, dovrai usare l'exploit del browser per avviare l'ambiente di Aroma. Per gli utenti che non vogliono modificare completamente la loro Wii U, seguite questi passaggi.

1. Avvia il Browser Internet e naviga sul sito `wiiuexploit.xyz`.

   ![](/images/vwii/exploit/browser-exploit.png)

2. Clicca su `Run Exploit!` e tieni premuto il pulsante X finché vedi l'EnvironmentLoader. Una volta che sei all'interno dell'EnvironmentLoader, seleziona `aroma` per avviare l'ambiente Aroma.

   - Se la tua Wii U rimane bloccata su uno schermo bianco o congelato, attendi alcuni secondi. Se non succede nulla, riavvia la console, [ripristina i dati di salvataggio del browser](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history) e riprova.
   - Se vedi una schermata `Please choose your payload`, dovresti riprovare e assicurarti di tenere `X` abbastanza a lungo. Non tenere premuto il pulsante `B`.

   ![](/images/vwii/exploit/environment-loader.png)

3. Se ricevi un messaggio di avviso sulla cartella di aggiornamento esistente, premi il pulsante `X` per bloccare gli aggiornamenti e prosegui.

   ![](/images/vwii/exploit/update-warning.png)

4. Nel Boot Selector, premi `A` per avviare il menu Wii U.

   ![](/images/vwii/exploit/boot-selector.png)

### Sezione III - Installare l'Homebrew Channel

::: tip

Nel passaggio 3, se il pulsante HOME non funziona o ti rimane fermo su uno schermo colorati, puoi spegnere in modo sicuro la console tenendo premuto il pulsante di accensione sulla console. Poi, riaccendila procedi normalmente.

:::

1. Avviare l'app vWii Compat Installer dal menu Wii U.

   ![](/images/vwii/exploit/compat-install-launch.png)

2. Premi `A` per installare l'Homebrew Channel.

   ![](/images/vwii/exploit/compat-install-pending.png)

3. Aspetta che finisca finché non vedi `Install succeeded!`. Una volta terminato, premi il pulsante HOME per tornare al menu Wii U.

   ![](/images/vwii/exploit/compat-install-success.png)

4. Avvia la vWii (l'icona del menu Wii).

   ![](/images/vwii/launch-vwii.png)

5. Se l'installazione è avvenuta con successo, ora dovresti vedere l'Homebrew Channel nel tuo menu Wii.

   ![](/images/vwii/exploit/vwii-hbc-installed.png)

## Lettura richiesta per la gestione degli Homebrew

Ora puoi usare l'Homebrew Channel per avviare app homebrew Wii.

Nota: quando installi applicazioni homebrew Wii sulla scheda SD o unità USB, la struttura delle cartelle dovrebbe essere così:

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

Continua con [installare Priiloader](priiloader)

Anche se BootMii non può essere installato su vWii, Priiloader aggiunge un livello cruciale di protezione dai brick e la sua installazione è altamente consigliata.

:::
