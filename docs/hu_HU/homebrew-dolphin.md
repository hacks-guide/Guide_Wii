# A Homebrew Channel telepítése Dolphin Emulátorra

On Dolphin Emulator version `5.0-4588` or later, the Wii Menu can be easily installed through Dolphin itself. Ha ez megtörtént, a Homebrew Channel is telepíthető, bár nem ugyanúgy, mint a fizikai Wii esetében.

## Requirements

- Egy Windowst/macOS-t/Linuxot futtató számítógép internet-hozzáféréssel
- [Dolphin Emulator](https://dolphin-emu.org/download/) version `5.0-4588` or later
- The latest version of [Open Homebrew Channel](https://github.com/Wii-Mini-Hacking/hbc/releases)

## Instructions

1. If you have not already done so, install the Wii Menu on Dolphin Emulator by going to `Tools > Perform System Update`.

   ![](/images/homebrew-dolphin/system-update.png)

2. Download `Open_HBC_(version)_LULZ.wad` from the page linked above.

3. Indítsd el a Dolphin Emulátort.

4. Select `Tools > Install WAD` and select the `Open_HBC_(version)_LULZ.wad` file that was downloaded.

   ![](/images/homebrew-dolphin/ohbc-file.png)

5. Select `Tools > Load Wii System Menu`. A csatornának most meg kell jelennie.

   ![](/images/homebrew-dolphin/hbc-installed.png)

## Telepítés utáni, Homebrew alkalmazások telepítése az Open Shop Channel-en keresztül

1. Download the Open Shop Channel [here](https://oscwii.org/library/app/homebrew_browser) for usage in Dolphin. Alternatívaként beszerezheted az OSCDL-t, és elvégezheted ezt a folyamatot manuálisan.

2. Stop the emulation (if running), and open the `Config > Wii` window in Dolphin Emulator.

3. Enable `Automatically Sync with Folder`. Optionally, you may also want to adjust the `SD Card File Size` to a larger parameter - however in most cases `Auto` should be fine.

4. Open the `SD Sync Folder`. Windowson ez könnyen megtehető a mappa elérési útvonalának beillesztésével a Start menübe, a Windows Intézőbe vagy a Futtatásba.

5. Extract any homebrew apps to the `WiiSDSync` folder. A végeredménynek valahogy így kell kinéznie:

   ![](/images/homebrew-dolphin/apps-folder.png)

6. Töltsd be a Wii menüt, és nyissd meg a Homebrew csatornát. Az újonnan telepített alkalmazásoknak meg kell jelenniük!

   ![](/images/homebrew-dolphin/hbc-apps.png)
