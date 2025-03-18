# Installing Homebrew Channel on Dolphin Emulator

On Dolphin Emulator version `5.0-4588` or later, the Wii Menu can be easily installed through Dolphin itself. Once this is done, the Homebrew Channel can be installed, although not in the same manner as a physical Wii.

## 操作說明

- A Windows/MacOS/Linux computer with an Internet connection
- [Dolphin Emulator](https://dolphin-emu.org/download/) version `5.0-4588` or later
- The latest version of [Open Homebrew Channel](https://github.com/Wii-Mini-Hacking/hbc/releases)

## Instructions

1. If you have not already done so, install the Wii Menu on Dolphin Emulator by going to `Tools > Perform System Update`.

    ![](/images/homebrew-dolphin/system-update.png)

2. Download `Open_HBC_(version)_LULZ.wad` from the page linked above.

3. Open Dolphin Emulator.

4. Select `Tools > Install WAD` and select the `Open_HBC_(version)_LULZ.wad` file that was downloaded.

    ![](/images/homebrew-dolphin/ohbc-file.png)

5. Select `Tools > Load Wii System Menu`. The channel should now appear.

    ![](/images/homebrew-dolphin/hbc-installed.png)

## Post-Installation, installing Homebrew Apps through Open Shop Channel

1. Download the Open Shop Channel [here](https://oscwii.org/library/app/homebrew_browser) for usage in Dolphin. Alternatively, you can get OSCDL and do this process manually.

2. Stop the emulation (if running), and open the `Config > Wii` window in Dolphin Emulator.

3. Enable `Automatically Sync with Folder`. Optionally, you may also want to adjust the `SD Card File Size` to a larger parameter - however in most cases `Auto` should be fine.

4. Open the `SD Sync Folder`. Open the <code>SD Sync Folder</code>. On Windows, this can easily be done by pasting the folder path into the Start Menu, Windows Explorer, or Run.

5. Extract any homebrew apps to the `WiiSDSync` folder. The end result should look something like this:

    ![](/images/homebrew-dolphin/apps-folder.png)

6. Load the Wii Menu and open the Homebrew Channel. Your newly installed apps should appear! Your newly installed apps should appear!

    ![](/images/homebrew-dolphin/hbc-apps.png)
