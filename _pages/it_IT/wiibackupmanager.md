---
title: "Wii Backup Manager"
---

{% include toc title="Table of Contents" %}

Wii Backup Manager è un programma che copia i giochi Wii dal tuo computer a un'unità USB così da poter giocarci sul tuo Wii. Può anche scaricare le copertine dei giochi da [GameTDB](https://gametdb.com/) e possono essere usate per elencare i giochi che hai. Questo tutorial ti dirà come copiare i giochi dal tuo computer all'unità USB. Le altre funzioni si possono utilizzare in un'interfaccia facile da usare.

### Requisiti

* Un PC che esegue Windows
* Un'unità USB o una scheda SD
* [Wii Backup Manager](https://static.wiidatabase.de/Wii-Backup-Manager.zip)


Si consiglia di copiare i giochi con [Witgui](https://desairem.com/wordpress/category/witgui-download/) se usi macOS, oppure [Wii Backup Fusion](https://github.com/larsenv/Wii-Backup-Fusion) per Windows, macOS e Linux. Wii Backup Manager è compatibile solo con Windows.
{: .notice--info}

Per memorizzare più giochi, si consiglia di utilizzare un hard drive esterno per il tuo Wii. Verrà riferito come una "unità USB" in questa guida. La maggior parte di essi che si possono trovare in mercato dovrebbero funzionare.
{: .notice--info}

Un'unità flash non è consigliata, poiché sono piccole e la loro funzionalità può variare anche tra unità identiche. <br> Come alternativa, puoi semplicemente utilizzare una scheda SD, ma il lettore della scheda SD del Wii è lento.
{: .notice--info}

Assicurati che l'unità USB sia formattata come FAT32. Do not format it as other types such as exFAT, extFS. <br> You may format it as NTFS, but it won't work with a majority of apps (eg. The Homebrew Channel, Nintendont)
{: .notice--info}

### Istruzioni

#### Sezione I - Download

1. Extract Wii Backup Manager, and launch the program.
1. Insert your USB drive or SD card into your computer.

#### Sezione II - Copiare i giochi

1. Go to the `Drive 1` tab, then select the drive that you're putting the Wii games on.

    ![](/images/desktop-apps/WBM/select_drive.png)

1. Go to the `Files` tab, then select `Add`.
    + Select `Files` to add multiple games to the program, or select `Folder` to add a whole folder of games.

    ![](/images/desktop-apps/WBM/select_games.png)

1. Go to `Select`, then click `Games not on drive 1`.

    ![](/images/desktop-apps/WBM/select_games2.png)

1. Select `Transfer`, then select `Drive 1` to transfer the games over. It might take a while for the games to copy over.

    ![](/images/desktop-apps/WBM/transfer_todrive.png)

### Options once complete

[Continue to cIOS](cios)<br> cIOS is needed for your Wii to use a USB Loader.
{: .notice--info}

You can now use [USB Loader GX](usbloadergx) or [WiiFlow](wiiflow) to play games from your USB drive or SD card.
{: .notice--info}

[Clicca qui per tornare alla Navigazione del Sito.](navigazione-sito)
{: .notice--info}
