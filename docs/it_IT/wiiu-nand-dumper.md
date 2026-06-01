# Creare un backup della NAND (Wii U)

Per proteggere la console Wii U da brick permanenti, questa guida ti istruirà su come creare un backup della NAND.

::: tip

Se hai già modificato la console e creato un backup della NAND, procedi con l'[installazione dell'Homebrew Channel](vwii-homebrew-channel).

:::

::: warning

La scheda SD deve essere formattata in FAT32. Se non lo fosse, segui [questa guida](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) per formattarla.

**NON** rinominare la scheda SD in `wiiu`, altrimenti causerà problemi con gli homebrew.

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

### Sezione I - Preparazione della scheda SD

1. Inserisci la scheda SD della console nel PC.
2. Copia i contenuti dei file _`.zip`_ di Aroma nella root della scheda SD.
3. Copia il file `compat_installer.wuhb` da `compat_installer-Aroma.zip` in `wiiu` -> `apps` della scheda SD.

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
   ┃ ┃ ┗ 📄 payload.elf
   ┃ ┗ 📁 nanddumper
   ┃   ┗ 📄 payload.elf
   ┣ 📄 payload.rpx
   ┗ 📄 payload.elf
```

:::

### Sezione II - Avviare l'exploit dal browser

::: tip

Per far funzionare l'exploit, assicurati che la console sia connessa a Internet.

:::

1. Rimuovi la scheda SD dal PC e inseriscila nella console.

2. Apri il Browser Internet e naviga sul sito `wiiuexploit.xyz`.

   ![](/images/vwii/exploit/browser-exploit.png)

3. Clicca su `Run Exploit!` e tieni premuto il pulsante B finché non compare la scritta `Please choose your payload:`. Questo sarà necessario per i passaggi successivi.

   - Se la console rimane bloccata su uno schermo bianco o non si muove, attendi alcuni secondi. Se non succede nulla, riavvia la console, riapri il browser, vai su `Impostazioni` -> `Reimposta i dati di salvataggio`, clicca `OK` per confermare e poi riprova.
   - Se la console si è avvia nell'ambiente Aroma, potrebbe mostrare un risultato simile a quello sopra. Puoi rimuovere la scheda SD dalla console prima di accenderla, in modo da costringerla ad avviarsi senza Aroma. Poi, reinseriscila e riprova.
   - Se vedi l'EnvironmentLoader, non hai tenuto premuto `B` abbastanza a lungo. Riprova.

   ![](/images/vwii/exploit/payload-loader.png)

   ![](/images/vwii/exploit/payload-loader.png)

### Sezione III - Backup della NAND

1. Usa la pulsantiera + del GamePad di Wii U per i passaggi successivi:

   - L'MCL è FACOLTATIVO, se non vuoi dumparlo, lascialo su `no`. Se invece vuoi, assicurati di avere una scheda SD abbastanza capiente per contenerlo (il dump sarà di 8GB o 32GB a seconda della console) e imposta l'opzione su `yes`.

   ![](/images/vwii/nand-backup/backup-selection.png)

2. Premi il pulsante `A` per iniziare il processo di dump.

3. A processo terminato, spegni la console, estrai la scheda SD e inseriscila nel PC.

4. Per evitare di perdere i file, copia `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp.bin` (e, se hai scelto di effettuare un backup completo, ogni file `mlc.bin.part`) in un luogo sicuro (Documenti, Google Drive, OneDrive, ecc.) sul tuo computer.

   - Questi file appariranno nella root della scheda SD.

   ![](/images/vwii/nand-backup/backup-result.png)

5. Ora puoi eliminare quei file dalla scheda SD per liberare spazio.

6. Estrai la scheda SD dal PC e inseriscila nella console.

---

::: tip

[Continua con installare l'Homebrew Channel](vwii-homebrew-channel)

Ora che hai un backup della NAND salvato, puoi iniziare a installare l'Homebrew Channel sul menu di vWii.

:::
