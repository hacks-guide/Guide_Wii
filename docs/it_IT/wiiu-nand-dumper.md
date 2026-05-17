# Dumpare la NAND di Wii U

Questa pagina ti guiderà attraverso il processo di creazione di un dump della NAND per la tua console Wii U. Questo ti proteggerà nel caso in cui qualcosa vada storto e la tua console rimanga brickata, consentendo di ripristinare un backup della NAND.

::: tip

Se hai già modificato la tua console Wii U e creato un backup della NAND, procedi con [Installare l'Homebrew Channel](vwii-homebrew-channel).

:::

::: warning

La tua scheda SD deve essere formattata in FAT32. Se la tua scheda SD non è formattata in FAT32, segui [questa guida](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) per formattarla.

**NON** rinominare la tua scheda SD `wiiu`, o causerà problemi con gli homebrew.

:::

## Requisiti

- Una console Wii U
- Gli ultimi file da [Aroma for your café](https://aroma.foryour.cafe/).
  - Rivedi le fasi preliminari, poi spunta tutte e 4 le caselle.
  - Assicurati che nanddumper sia selezionato.
  - Clicca su `Download Payloads`.
  - Clicca su `Download Base Aroma`.
- L'ultima versione di [Compat Title Installer](https://github.com/Xpl0itU/vwii-compat-installer/releases/latest) (`compat_installer-Aroma.zip`)

## Istruzioni

### Sezione I - Preparare la scheda SD

1. Inserisci la scheda SD della tua console Wii U nel tuo PC.
2. Copia i contenuti dei file _`.zip`_ di Aroma scaricati nella root della tua scheda SD.
3. Copia il file `compat_installer.wuhb` da `compat_installer-Aroma.zip` in `wiiu` -> `apps` della tua scheda SD.

:::details Se hai seguito i passaggi correttamente, la scheda SD dovrebbe essere così:

```shell
💾 Scheda SD
 ┗ 📁 wiiu
   ┣ 📁 apps
   ┃ ┣ 📄 AromaUpdater.wuhb
   ┃ ┗ 📄 PayloadLoaderInstaller.wuhb
   ┣ 📁 environments
   ┃ ┗ 📁 aroma
   ┃   ┣ 📁 modules
   ┃   ┃ ┗ 📁 setup
   ┃   ┃   ┣ 📄 00_mocha.rpx
   ┃   ┃   ┣ 📄 10_wums_loader.rpx
   ┃   ┃   ┗ 📄 99_autoboot.rpx
   ┃   ┣ 📁 plugins
   ┃   ┃ ┣ 📄 AromaBasePlugin.wps
   ┃   ┃ ┣ 📄 drc_region_free.wps
   ┃   ┃ ┣ 📄 homebrew_on_menu.wps
   ┃   ┃ ┗ 📄 regionfree.wps
   ┃   ┗ 📄 root.rpx
   ┣ 📁 payloads
   ┃ ┣ 📁 default
   ┃ ┃ ┗ 📁 payload.elf
   ┃ ┗ 📁 nanddumper
   ┃   ┗ 📄 payload.elf
   ┣ 📄 payload.rpx
   ┗ 📄 payload.elf
```

:::

### Sezione II - Avviare l'exploit dal browser

::: tip

Per far funzionare l'exploit, assicurati che la tua console Wii U sia connessa a Internet.

:::

1. Rimuovi la scheda SD dal tuo computer e inseriscila nella console Wii U.

2. Apri il Browser Internet e naviga sul sito `wiiuexploit.xyz`.

   ![](/images/vwii/exploit/browser-exploit.png)

3. Clicca su `Run Exploit!` e tieni premuto il pulsante B finché non vedi una finestra che dice `Please choose your payload:`, questo sarà necessario per i passaggi successivi.

   - Se la tua Wii U rimane bloccata su uno schermo bianco o congelato, attendi alcuni secondi. Se non succede nulla, riavvia la console, [ripristina i dati di salvataggio del browser](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history) e riprova.
   - Se la tua console è stata caricata nell'ambiente Aroma, potrebbe mostrare un risultato come quello citato sopra. Puoi rimuovere la tua scheda SD dalla console Wii U prima di accenderla, il che la forzerà ad avviarsi senza Aroma. Poi, reinserisci la scheda SD e riprova.
   - Se vedi l'EnvironmentLoader, non hai tenuto premuto B abbastanza a lungo. Riprova.

   ![](/images/vwii/exploit/payload-loader.png)

   ![](/images/vwii/exploit/payload-loader.png)

### Sezione III - Backup della NAND

1. Usa la pulsantiera + del GamePad di Wii U per i passaggi successivi:

   - MCL è OPZIONALE, se non vuoi dumparlo, lascialo su `no`. Se vuoi dumparlo, assicurati di avere una scheda SD abbastanza capiente per contenerlo (il dump sarà di 8GB o 32GB a seconda della tua console) e metti l'opzione su `yes`.

   ![](/images/vwii/nand-backup/backup-selection.png)

2. Premi il pulsante A per iniziare il processo di dump.

3. Una volta terminato, spegni la console, estrai la scheda SD e inseriscila nel tuo PC.

4. Per assicurarti di non perdere i file, copia `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp.bin` (e, se hai scelto di fare un backup completo, ogni file `mlc.bin.part`) in un posto sicuro (Documenti, Google Drive, OneDrive, ecc...) sul tuo computer.

   - Appariranno nella root della scheda SD.

   ![](/images/vwii/nand-backup/backup-result.png)

5. Elimina i file dalla scheda SD per liberare spazio.

6. Estrai la scheda SD dal computer e inseriscila nella console Wii U.

---

::: tip

[Continua con installare l'Homebrew Channel](vwii-homebrew-channel)

Ora che hai un backup della NAND salvato, puoi iniziare a installare l'Homebrew Channel sul menu della vWii.

:::
