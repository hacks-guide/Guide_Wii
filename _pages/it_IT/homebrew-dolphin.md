---
title: "Installare l'Hombrew Channel sull'Emulatore Dolphin"
---

{% include toc title="Table of Contents" %}

Sulle versioni `5.0-4588` o superiori dell'Emulatore Dolphin, il Menu Wii può essere facilmente installato attraverso Dolphin stesso. Una volta fatto ciò, l'Homebrew Channel può essere installato, anche se non con lo stesso procedimento di un Wii fisico.

### Requisiti

* Un computer Windows/MacOS/Linux con una connessione a internet
* L'[Emulatore Dolphin](https://dolphin-emu.org/download/) versione `5.0-4588` o superiore
* La versione più recente di [Open Homebrew Channel](https://github.com/Wii-Mini-Hacking/hbc/releases)

### Istruzioni

1. Se non lo hai ancora fatto, installa il Menu Wii sull'Emulatore Dolphin andando su `Tools > Perform System Update`.

    ![](/images/homebrew-dolphin/system-update.png)

1. Scarica `Open_HBC_(version)_LULZ.wad` dal link sopracitato.
1. Avvia l'Emulatore Dolphin.
1. Seleziona `Tools > Install WAD` e seleziona il file `Open_HBC_(version)_LULZ.wad` che hai scaricato prima.

    ![](/images/homebrew-dolphin/ohbc-file.png)

1. Seleziona `Tools > Load Wii System Menu`. Adesso il canale dovrebbe apparire.

    ![](/images/homebrew-dolphin/hbc-installed.png)

### Post-Installazione, installare Applicazioni Homebrew con l'Open Shop Channel

1. Scarica [qui](https://oscwii.org/library/app/homebrew_browser) l'Open Shop Channel per l'utilizzo in Dolphin. In alternativa, puoi ottenere OSCDL ed eseguire questo processo manualmente.
1. Ferma l'emulazione (se è in esecuzione) e apri la finestra `Config > Wii` nell'Emulatore Dolphin.
1. Abilita `Automatically Sync with Folder`. Opzionalmente, puoi anche inserire un parametro più alto in `SD Card File Size` - anche se in molti casi `Auto` dovrebbe andare bene.
1. Apri `SD Sync Folder`. Su Windows, questo può essere fatto facilmente incollando il percorso della cartella nel Menu Start, Windows Explorer, o Esegui.
1. Estrai qualsiasi applicazione homebrew tu voglia nella cartella `WiiSDSync`. Il risultato finale dovrebbe assomigliare a questo:

    ![](/images/homebrew-dolphin/apps-folder.png)

1. Avvia il Menu Wii e apri l'Homebrew Channel. Le tue nuove applicazioni installate dovrebbero apparire!

    ![](/images/homebrew-dolphin/hbc-apps.png)
