# Installare l'Hombrew Channel sull'Emulatore Dolphin

On Dolphin Emulator version `5.0-4588` or later, the Wii Menu can be easily installed through Dolphin itself. Una volta fatto ciò, l'Homebrew Channel può essere installato, anche se non con lo stesso procedimento di un Wii fisico.

## Requirements

- Un computer Windows/MacOS/Linux con una connessione a internet
- [Dolphin Emulator](https://dolphin-emu.org/download/) version `5.0-4588` or later
- The latest version of [Open Homebrew Channel](https://github.com/Wii-Mini-Hacking/hbc/releases)

## Instructions

1. If you have not already done so, install the Wii Menu on Dolphin Emulator by going to `Tools > Perform System Update`.

   ![](/images/homebrew-dolphin/system-update.png)

2. Download `Open_HBC_(version)_LULZ.wad` from the page linked above.

3. Avvia l'Emulatore Dolphin.

4. Select `Tools > Install WAD` and select the `Open_HBC_(version)_LULZ.wad` file that was downloaded.

   ![](/images/homebrew-dolphin/ohbc-file.png)

5. Select `Tools > Load Wii System Menu`. Adesso il canale dovrebbe apparire.

   ![](/images/homebrew-dolphin/hbc-installed.png)

## Post-Installazione, installare Applicazioni Homebrew con l'Open Shop Channel

1. Download the Open Shop Channel [here](https://oscwii.org/library/app/homebrew_browser) for usage in Dolphin. In alternativa, puoi ottenere OSCDL ed eseguire questo processo manualmente.

2. Stop the emulation (if running), and open the `Config > Wii` window in Dolphin Emulator.

3. Enable `Automatically Sync with Folder`. Optionally, you may also want to adjust the `SD Card File Size` to a larger parameter - however in most cases `Auto` should be fine.

4. Open the `SD Sync Folder`. Su Windows, questo può essere fatto facilmente incollando il percorso della cartella nel Menu Start, Windows Explorer, o Esegui.

5. Extract any homebrew apps to the `WiiSDSync` folder. Il risultato finale dovrebbe assomigliare a questo:

   ![](/images/homebrew-dolphin/apps-folder.png)

6. Avvia il Menu Wii e apri l'Homebrew Channel. Le tue nuove applicazioni installate dovrebbero apparire!

   ![](/images/homebrew-dolphin/hbc-apps.png)
