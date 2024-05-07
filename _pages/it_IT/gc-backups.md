---
title: "Gestire backup GameCube"
---

{% include toc title="Table of Contents" %}

Questa guida fornisce istruzioni su come gestire i backup GameCube, utilizzando GameCube Backup Manager. Funziona simile a [Wii Backup Manager](wii-backups#using-wii-backup-manager).

### Requisiti

* Una scheda SD o dispositivo USB
* [GameCube Backup Manager](https://github.com/AxionDrak/GameCube-Backup-Manager/releases)

Per giocare a più giochi, si consiglia di utilizzare un hard drive esterno per il tuo Wii. Qualsiasi hard drive esterno che trovi nei marketplace moderni dovrebbero funzionare con il tuo Wii.
{: .notice--info}

Assicurati che l'unità USB sia formattata come FAT32. Non formattarlo come altri tipi come NTFS, exFAT, extFS o WBFS, quest'ultimo è un filesystem obsoleto per la memorizazzione di giochi Wii.
{: .notice--info}

### Istruzioni

#### Sezione I - Download

1. Estrai GameCube Backup Manager e avvia il programma.
1. Inserisci il tuo dispositivo USB nel tuo computer.

#### Sezione II - Copiare i giochi

1. Apri l'applicazione e trova l'icona della cartella nell'angolo in basso a destra. Cliccala per aprire una finestra di Esplora file.

    ![](/images/desktop-apps/GCBM/folderbutton.png)

1. Navigate to the location of the folder that contains the game file you want to transfer. Può essere nell'hard drive del tuo computer o un dispositivo di archiviazione esterno. Once you find the folder, select it.

    ![](/images/desktop-apps/GCBM/selectfolder.png)

1. Fai clic sulla scheda `File (destinatione)`, poi seleziona l'opzione `Inattivo` dal menu a discesa. Questo ti consentirà di scegliere l'unità nella quale vuoi trasferire in gioco. Seleziona la lettera di unità corretta dall'elenco.

    ![](/images/desktop-apps/GCBM/selectdrive.png)

1. Successivamente, torna nella scheda `File (Fonte)`, seleziona il gioco che vuoi trasferire e clicca su `Installare il gioco (1:1)` o su `Installare il gioco (scrub)`.

    ![](/images/desktop-apps/GCBM/installgame.png)

L'opzione `Installare il gioco (scrub)` rimuoverà dati non necessari dal gioco, riducendone così le dimensioni del file. For some games this can be a major reduction, for example with Animal Crossing - going from 1.3GB to around 26MB.
{: .notice--info}

[Clicca qui per tornare alla Navigazione del Sito.](site-navigation)
{: .notice--info}
