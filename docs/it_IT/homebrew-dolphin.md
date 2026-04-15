# Installare l'Hombrew Channel sull'emulatore Dolphin

Sull'emulatore Dolphin versione `5.0-4588` o successive, il menu Wii può essere facilmente installato da Dolphin stesso. Una volta fatto ciò, l'Homebrew Channel può essere installato, anche se non con lo stesso procedimento di una console Wii fisica.

## Requisiti

- Un computer Windows/macOS/Linux con connessione a Internet
- [Emulatore Dolphin](https://dolphin-emu.org/download/) versione `5.0-4588` o successive
- L'ultima versione di [Open Homebrew Channel](https://github.com/Wii-Mini-Hacking/hbc/releases)

## Istruzioni

1. Se non l'hai già fatto, installa il menu Wii sull'emulatore Dolphin andando su `Strumenti > Avviare aggiornamento di sistema online`.

   ![](/images/homebrew-dolphin/system-update.png)

2. Scarica il file `Open_HBC_(version)_LULZ.wad` dalla pagina elencata sopra.

3. Avvia l'emulatore Dolphin.

4. Seleziona `Strumenti` > `Installa WAD...` e seleziona il file `Open_HBC_(version)_LULZ.wad` scaricato.

   ![](/images/homebrew-dolphin/ohbc-file.png)

5. Seleziona `Strumenti` > `Carica menu di sistema Wii`. Adesso il canale dovrebbe apparire.

   ![](/images/homebrew-dolphin/hbc-installed.png)

## Post-installazione, installare applicazioni homebrew attraverso l'Open Shop Channel

1. Scarica l'Open Shop Channel [sul loro sito](https://oscwii.org/library/app/homebrew_browser) per usarlo su Dolphin. In alternativa, puoi ottenere OSCDL ed eseguire questo processo manualmente.

2. Ferma l'emulazione (se in esecuzione), e apri la scheda `Opzioni` > `Configurazione` > `Wii` sull'emulatore Dolphin.

3. Abilita `Sincronizza automaticamente con la cartella`. Opzionalmente, puoi anche aumentare la `Dimensione file scheda SD` - anche se per la maggior parte dei casi dovrebbe andare bene lasciarla su `Auto`.

4. Apri la `Cartella sincronizzazione SD`. Su Windows, questo può essere fatto facilmente incollando il percorso della cartella nel Menu Start, Windows Explorer, o Esegui.

5. Estrai le applicazioni homebrew che vuoi nella cartella `WiiSDSync`. Il risultato finale dovrebbe assomigliare a questo:

   ![](/images/homebrew-dolphin/apps-folder.png)

6. Avvia il Menu Wii e apri l'Homebrew Channel. Le nuove applicazioni installate dovrebbero apparire!

   ![](/images/homebrew-dolphin/hbc-apps.png)

---

::: tip

[Clicca qui per tornare all'indice.](site-navigation)

:::
