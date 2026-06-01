# Installare l'Homebrew Channel sull'emulatore Dolphin

Sull'emulatore Dolphin versione `5.0-4588` o successive, il menu Wii può essere installato facilmente da Dolphin stesso. Una volta fatto ciò, anche l'Homebrew Channel può essere installato, ma non allo stesso modo di una console fisica.

## Requisiti

- Un PC con Windows/macOS/Linux connesso a Internet
- [Emulatore Dolphin](https://dolphin-emu.org/download/) versione `5.0-4588` o successive
- L'ultima versione di [Open Homebrew Channel](https://github.com/Wii-Mini-Hacking/hbc/releases)

## Istruzioni

1. Se non l'hai già fatto, installa il menu Wii sull'emulatore andando su `Strumenti` -> `Avviare aggiornamento di sistema online`.

   ![](/images/homebrew-dolphin/system-update.png)

2. Scarica il file `Open_HBC_(versione)_LULZ.wad` dalla pagina elencata sopra.

3. Avvia l'emulatore Dolphin.

4. Seleziona `Strumenti` -> `Installa WAD...` e seleziona il file scaricato prima.

   ![](/images/homebrew-dolphin/ohbc-file.png)

5. Seleziona `Strumenti` -> `Carica menu di sistema Wii`. Adesso il canale dovrebbe apparire.

   ![](/images/homebrew-dolphin/hbc-installed.png)

## Post-installazione, installare applicazioni homebrew attraverso l'Open Shop Channel

1. Scarica l'Open Shop Channel [sul loro sito](https://oscwii.org/library/app/homebrew_browser) per usarlo su Dolphin. Alternativamente, puoi usare OSCDL per eseguire questo processo manualmente.

2. Ferma l'emulazione (se in esecuzione) e apri la scheda `Opzioni` -> `Configurazione` > `Wii` sull'emulatore.

3. Abilita `Sincronizza automaticamente con la cartella`. Facoltativamente, puoi anche aumentare la `Dimensione file scheda SD`; anche se per la maggior parte dei casi dovrebbe andare bene lasciarla su `Auto`.

4. Apri la `Cartella sincronizzazione SD`. Su Windows, questo può essere fatto facilmente incollando il percorso della cartella nel menu Start, Windows Explorer, o Esegui.

5. Estrai le applicazioni homebrew che vuoi nella cartella `WiiSDSync`. Il risultato finale dovrebbe assomigliare a questo:

   ![](/images/homebrew-dolphin/apps-folder.png)

6. Avvia il menu Wii e apri l'Homebrew Channel. Le nuove applicazioni installate dovrebbero apparire!

   ![](/images/homebrew-dolphin/hbc-apps.png)

---

::: tip

[Clicca qui per tornare all'indice.](site-navigation)

:::
