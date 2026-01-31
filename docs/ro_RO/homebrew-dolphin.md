# Instalarea Homebrew Channel pe Dolphin Emulator

On Dolphin Emulator version `5.0-4588` or later, the Wii Menu can be easily installed through Dolphin itself. Odată ce este gata, Homebrew Channel poate fi instalat, deși nu în aceeași manieră ca un Wii fizic.

## Requirements

- A Windows/macOS/Linux computer with an Internet connection
- [Dolphin Emulator](https://dolphin-emu.org/download/) version `5.0-4588` or later
- The latest version of [Open Homebrew Channel](https://github.com/Wii-Mini-Hacking/hbc/releases)

## Instructions

1. If you have not already done so, install the Wii Menu on Dolphin Emulator by going to `Tools > Perform System Update`.

   ![](/images/homebrew-dolphin/system-update.png)

2. Download `Open_HBC_(version)_LULZ.wad` from the page linked above.

3. Deschide Dolphin Emulator.

4. Select `Tools > Install WAD` and select the `Open_HBC_(version)_LULZ.wad` file that was downloaded.

   ![](/images/homebrew-dolphin/ohbc-file.png)

5. Select `Tools > Load Wii System Menu`. Canalul trebuie să apară acum.

   ![](/images/homebrew-dolphin/hbc-installed.png)

## Post-instalare, instalarea aplicațiilor homebrew prin Open Shop Channel

1. Download the Open Shop Channel [here](https://oscwii.org/library/app/homebrew_browser) for usage in Dolphin. Alternativ, poți obține OSCDL și să faci acest proces manual.

2. Stop the emulation (if running), and open the `Config > Wii` window in Dolphin Emulator.

3. Enable `Automatically Sync with Folder`. Optionally, you may also want to adjust the `SD Card File Size` to a larger parameter - however in most cases `Auto` should be fine.

4. Open the `SD Sync Folder`. În Windows, acest lucru poate fi făcut cu ușurință prin inserarea folder-ului path în Start Menu, Windows Explorere, sau Run.

5. Extract any homebrew apps to the `WiiSDSync` folder. Rezultatul final ar trebui să arate cam așa:

   ![](/images/homebrew-dolphin/apps-folder.png)

6. Deschide Wii Menu apoi Homebrew Channel. Noile aplicații instalate ar trebui să apară!

   ![](/images/homebrew-dolphin/hbc-apps.png)
