# Gestire backup GameCube

Questa guida fornisce istruzioni su come gestire i backup GameCube, utilizzando GameCube Backup Manager. It functions similar to [Wii Backup Manager](wii-backups#using-wii-backup-manager).

## Requirements

- A Windows PC
- Una scheda SD o dispositivo USB
- [GameCube Backup Manager](https://github.com/AxionDrak/GameCube-Backup-Manager/releases)

::: info

Per giocare a più giochi, si consiglia di utilizzare un hard drive esterno per il tuo Wii. Qualsiasi hard drive esterno che trovi nei marketplace moderni dovrebbero funzionare con il tuo Wii.

:::

::: info

Assicurati che l'unità USB sia formattata come FAT32. Non formattarlo come altri tipi come NTFS, exFAT, extFS o WBFS, quest'ultimo è un filesystem obsoleto per la memorizazzione di giochi Wii.

:::

## Instructions

### Sezione I - Download

1. Estrai GameCube Backup Manager e avvia il programma.
2. Inserisci il tuo dispositivo USB nel tuo computer.

### Sezione II - Copiare i giochi

1. Apri l'applicazione e trova l'icona della cartella nell'angolo in basso a destra. Cliccala per aprire una finestra di Esplora file.

   ![](/images/desktop-apps/GCBM/folderbutton.png)

2. Naviga verso il percorso della cartella che contiene il file del gioco che vuoi trasferire. Può essere nell'hard drive del tuo computer o un dispositivo di archiviazione esterno. Una volta trovata la cartella, selezionala.

   ![](/images/desktop-apps/GCBM/selectfolder.png)

3. Click on the `Files (Destination)` tab, then select the `Inactive` option from the dropdown menu. Questo ti consentirà di scegliere l'unità nella quale vuoi trasferire in gioco. Seleziona la lettera di unità corretta dall'elenco.

   ![](/images/desktop-apps/GCBM/selectdrive.png)

4. Next, go back to the `Files (Source)` tab, select the game you want to transfer, and then click either `Install Game (1:1)` or `Install Game (Scrub)`.

   ![](/images/desktop-apps/GCBM/installgame.png)

::: info

Selecting `Install Game (Scrub)` will remove unnecessary data from the game, reducing the game's file size. Per alcuni giochi quest può essere una riduzione maggiore, per esempio con Animal Crossing - andando da 1.3GB a circa 26MB.

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::
