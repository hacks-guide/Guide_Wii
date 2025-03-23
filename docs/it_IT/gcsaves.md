# Salvataggi GameCube

Questa è una guida completa su come gestire i tuoi salvataggi di GameCube.

::: info

L'utilizzo di periferiche GameGube su un modello di Wii Family Edition o Wii mini richiederà la saldatura delle porte GameCube e/o i slot per le memory card.

:::

## Caricare un salvataggio individuale (file .gci) su una Memory Card fisica

### Requirements

- Un Wii con porte GameCube
- Una scheda SD o unità USB
- [GCMM](https://oscwii.org/library/app/gcmm)

::: info

If you are looking for 100% completion saves online, you can find them [here](https://gamefaqs.gamespot.com/).

:::

::: info

If you are looking for save game exploits for booting into [Swiss](https://github.com/emukidid/swiss-gc/releases), you can find a list of them [here](https://www.gc-forever.com/wiki/index.php?title=Booting_homebrew#Game_Save_Exploits).

:::

### Instructions

#### Download

1. Extract GCMM and put it in the `apps` folder on your SD card or USB drive.
2. Place the `.gci` file in a folder called `MCBACKUP` on the root of the SD card or USB drive.
3. Inserisci la tua scheda SD o dispositivo USB nel tuo Wii e avvia GCMM dall'Homebrew Channel.

#### Effettuare il ripristino

1. Inserisci la memory card fisica nello Slot A o Slot B.

2. Seleziona il dispositivo da cui vuoi ripristinare.

   ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

3. Su GCMM, premi X su un controller GameCube o + su un telecomando Wii.

   ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

4. Seleziona lo slot in cui la memory card è inserita.

   ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

5. Seleziona il salvataggio che vuoi ripristinare. Se hai più salvataggi da ripristinare, puoi premere R sul controller GameCube o 1 sul telecomando Wii per ripristinare tutti i tuoi salvataggi.

   ![](/images/homebrew/gcsaves/gcmm-select-save.jpg)

6. Appena completato il ripristino, premi un pulsante qualsiasi per continuare.

## Backup di un salvataggio (file .gci) su una SD o USB da una Memory Card fisica

### Requirements

- Un Wii con porte GameCube
- Una scheda SD o unità USB
- [GCMM](https://oscwii.org/library/app/gcmm)

### Instructions

#### Download

1. Extract GCMM and put it in the `apps` folder on your SD card or USB drive.
2. Place the `.gci` file in a folder called `MCBACKUP` on the root of the SD card or USB drive.
3. Inserisci la tua scheda SD o dispositivo USB nel tuo Wii e avvia GCMM dall'Homebrew Channel.

#### Effettuare il backup

1. Inserisci la memory card fisica nello Slot A o Slot B.

2. Seleziona il dispositivo su cui vuoi fare il backup.

   ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

3. Su GCMM, premi Y su un controller GameCube o - su un telecomando Wii.

   ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

4. Seleziona lo slot in cui la memory card è inserita.

   ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

5. Seleziona il salvataggio di cui vuoi farne il backup. Se hai più salvataggi da cui farne il backup, puoi premere R sul controller GameCube o 1 sul telecomando Wii per fare il backup di tutti i tuoi salvataggi.

   ![](/images/homebrew/gcsaves/gcmm-select-save.jpg)

6. Appena completato il backup, premi un pulsante qualsiasi per continuare.

## Backup della Memory Card fisica in una Memory Card emulata (file .raw)

### Requirements

- Un Wii con porte GameCube
- Una scheda SD o unità USB
- [GCMM](https://oscwii.org/library/app/gcmm)

### Instructions

#### Download

1. Extract GCMM and put it in the `apps` folder on your SD card or USB drive.
2. Inserisci la tua scheda SD o dispositivo USB nel tuo Wii e avvia GCMM dall'Homebrew Channel.

#### Dump del .raw

1. Inserisci la memory card nello Slot A o Slot B.

2. Seleziona il dispositivo su cui vuoi fare il dump.

   ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

3. Premi L e Y simultaneamente sul controller GameCube oppure B e - simultaneamente sul telecomando Wii per fare il backup su file .raw e seleziona lo slot in cui la memory card è inserita.

   ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

4. Appena completato il dump, premi un pulsante qualsiasi per continuare. It should be saved in a folder on the root of your SD or USB called `MCBACKUP`.

## Ripristino di un salvataggio da Memory Card virtuale a Memory Card fisica

### Requirements

- Un Wii con porte GameCube
- Una scheda SD o unità USB
- [GCMM](https://oscwii.org/library/app/gcmm)

### Instructions

1. If you are trying to restore a save from Dolphin, go to the `File` tab in Dolphin, select open user folder, open the GC folder, and find the `.raw` file.

2. If you are restoring a Nintendont emulated memory card save, navigate to the `saves` folder on the root of your SD card or USB.

3. Inserisci la memory card nello Slot A o Slot B.

4. Seleziona il dispositivo da cui vuoi ripristinare.

   ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

5. Premi L e X simultaneamente sul controller GameCube oppure B e + simultaneamente sul telecomando Wii.

6. Seleziona lo slot in cui la memory card è inserita.

   ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

7. Dovrebbe aver ripristinato il file .raw sulla tua memory card. Appena completato il ripristino, premi un pulsante qualsiasi per continuare. Appena completato il ripristino, premi un pulsante qualsiasi per continuare.

## Trasferire salvataggi tra due Memory Card fisiche

### Requirements

- Un Wii con porte GameCube
- Almeno due memory card fisiche

### Instructions

1. Inserisci entrambe le memory card nel Wii.

2. From the System menu, navigate into `Wii Options`, `Data Management`, `Save Data`, `Nintendo GameCube`.

   ![](/images/homebrew/gcsaves/sysmenu.jpg)

   ![](/images/homebrew/gcsaves/settings.jpg)

   ![](/images/homebrew/gcsaves/data-management.jpg)

   ![](/images/homebrew/gcsaves/save-data.jpg)

3. Find the save you want, select it and select `Move or Copy`.

::: tip

[Click here to go back to the site index.](site-navigation)

:::
