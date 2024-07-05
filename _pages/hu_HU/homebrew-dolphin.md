---
title: "A Homebrew Channel telepítése Dolphin Emulátorra"
---

{% include toc title="Tartalomjegyzék" %}

On Dolphin Emulator version `5.0-4588` or later, the Wii Menu can be easily installed through Dolphin itself. Once this is done, the Homebrew Channel can be installed, although not in the same manner as a physical Wii.

### Követelmények

* Egy Windowst/macOS-t/Linuxot futtató számítógép internet-hozzáféréssel
* [Dolphin Emulator](https://dolphin-emu.org/download/) v `5.0-4588` vagy későbbi verzió
* Az [Open Homebrew Channel](https://github.com/Wii-Mini-Hacking/hbc/releases) legutolsó verziója

### Útmutató

1. If you have not already done so, install the Wii Menu on Dolphin Emulator by going to `Tools > Perform System Update`.

    ![](/images/homebrew-dolphin/system-update.png)

1. Töltsd le az `Open_HBC_(version)_LULZ.wad` -ot a fenti linkről.
1. Indítsd el a Dolphin Emulátort.
1. Válaszd a `Tools > Install WAD` opciót és válaszd ki az `Open_HBC_(version)_LULZ.wad` fájl, amit letöltöttél.

    ![](/images/homebrew-dolphin/ohbc-file.png)

1. Válaszd a `Tools > Load Wii System Menu` opciót. A csatornának most meg kell jelennie.

    ![](/images/homebrew-dolphin/hbc-installed.png)

### Post-Installation, installing Homebrew Apps through Open Shop Channel

1. Download the Open Shop Channel [here](https://oscwii.org/library/app/homebrew_browser) for usage in Dolphin. Alternatively, you can get OSCDL and do this process manually.
1. Stop the emulation (if running), and open the `Config > Wii` window in Dolphin Emulator.
1. Enable `Automatically Sync with Folder`. Optionally, you may also want to adjust the `SD Card File Size` to a larger parameter - however in most cases `Auto` should be fine.
1. Open the `SD Sync Folder`. On Windows, this can easily be done by pasting the folder path into the Start Menu, Windows Explorer, or Run.
1. Extract any homebrew apps to the `WiiSDSync` folder. The end result should look something like this:

    ![](/images/homebrew-dolphin/apps-folder.png)

1. Load the Wii Menu and open the Homebrew Channel. Your newly installed apps should appear!

    ![](/images/homebrew-dolphin/hbc-apps.png)
