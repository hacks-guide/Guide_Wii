---
title: "Transferring Save games"
---

This guide will explain how to transfer save games between:

+ a Wii/Wii U(vWii),
+ Dolphin Emulator,
+ GameCube memory cards,
+ and (Nintendont) emulated memory cards.

<button class="btn btn--large btn--info tablinks" onClick="openTab_from(event, 'wii')">From a Wii/vWii</button>
<button class="btn btn--large btn--info tablinks" onClick="openTab_from(event, 'dol')">From Dolphin Emulator</button>
<button class="btn btn--large btn--info tablinks" onClick="openTab_from(event, 'gcmc')">From a GameCube memory card</button>
<button class="btn btn--large btn--info tablinks" onClick="openTab_from(event, 'emumc')">From Nintendont</button>

<div id="wii" class="tabcontent" markdown="1">

<button class="btn btn--info btn--large tablinks to" onClick="openTab_to(event, 'wii-vwii')">To another Wii/vWii</button>
<button class="btn btn--info btn--large tablinks to" onClick="openTab_to(event, 'wii-dol')">To Dolphin Emulator</button>

<div id="wii-vwii" class="tabcontent to" markdown="1">

<button class="btn btn--info btn--large tablinks via" onClick="openTab_via(event, 'wii-vwii-data')">via Data Management</button>
<button class="btn btn--info btn--large tablinks via" onClick="openTab_via(event, 'wii-vwii-svgm')">via SaveGame Manager GX</button>

<div id="wii-vwii-data" class="tabcontent via" markdown="1">

##### What you need

+ an SD card formatted to FAT32/MS-DOS

##### Istruzioni

1. Insert your SD card into your Wii/Wii U.
1. In the Wii Menu, select the `Wii Options` at the bottom left.
1. Select `Data Management` (if on Wii), `Save Data`, then `Wii`.
1. Select a save you would like to transfer, then select `Copy`.
    + If the `Copy` button is greyed out, you will need to [install Priiloader](priiloader) to disable the copy protection.
1. Repeat the previous step for each save you would like to transfer.
1. Once you are finished, put the SD card into your other Wii/Wii U.
1. In the Wii Menu, select the `Wii Options` at the bottom left.
1. Select `Data Management` (if on Wii), `Save Data`, then `Wii`.
1. Select the `SD Card` tab at the top right.
1. Select one of the saves you have copied to your SD card, then select `Copy`.
1. Repeat the previous step for each save you have copied to your SD card.
</div>

<div id="wii-vwii-svgm" class="tabcontent via" markdown="1">
Make sure you have installed [cIOS](cios) before following this!
{: .notice--warning}

##### What you need

* The Homebrew Channel on both systems
* Una scheda SD o dispositivo USB
* [SaveGame Manager GX](https://oscwii.org/library/app/SaveGame_Manager_GX)

##### Istruzioni

1. Extract SaveGame Manager GX to the root of your SD card or USB drive, and put it into your source Wii/Wii U.
1. Launch the Homebrew Channel, then launch SaveGame Manager GX.
1. Ensure that the source is set to Wii.
1. Find and select your save, then `Extract`, then `Default`.
    + Repeat this for the rest of the saves you would like to copy.
1. Press the HOME button and exit SaveGame Manager GX.
1. Put the SD card into the target Wii/Wii U.
1. Create a new save file for each game. This is needed so that SaveGame Manager GX can overwrite it.
1. Launch the Homebrew Channel, and launch SaveGame Manager GX.
1. Ensure that the source is set to your SD or USB.
1. Select each save you copied and click `Install`.
</div>
</div>

<div id="wii-dol" class="tabcontent to" markdown="1">

<button class="btn btn--info btn--large tablinks via" onClick="openTab_via(event, 'wii-dol-nand')">with a NAND backup (Wii)</button>
<button class="btn btn--info btn--large tablinks via" onClick="openTab_via(event, 'wii-dol-svgm')">via SaveGame Manager GX</button>

<div id="wii-dol-nand" class="tabcontent via" markdown="1">
By importing your NAND backup into Dolphin, you effectively copy everything on your Wii (at the time of the backup). This also has the benefit of allowing access to [Wiimmfi](https://wiimmfi.de/), as well as carrying over RiiConnect24 patched channels.
If you have already done this, consider the SaveGame Manager GX method to save time.
{: .notice--info}

##### What you need

* [a NAND backup](bootmii)
* Latest beta version of Dolphin Emulator

##### Istruzioni

1. After [making your NAND backup](bootmii), put your SD card into your PC and open Dolphin Emulator.
1. Select `Tools > Manage NAND... > Import BootMii NAND Backup`.
1. In the file dialog that opens, go to your SD card and select `nand.bin`.
</div>

<div id="wii-dol-svgm" class="tabcontent via" markdown="1">
Make sure you have installed [cIOS](cios) before following this!
{: .notice--warning}

##### What you need

* The Homebrew Channel on your Wii/vWii
* [SaveGame Manager GX](https://oscwii.org/library/app/SaveGame_Manager_GX)
* Una scheda SD o dispositivo USB
* Latest beta version of Dolphin Emulator

##### Istruzioni

1. On your Wii/Wii U, launch the Homebrew Channel, then launch SaveGame Manager GX.
1. Find and select the save you would like to transfer, select `Extract`, then select `Default`.
    + Repeat this for all the saves you would like to transferred.
1. Once you have extracted all your save files, press HOME and exit SaveGame Manager GX.
1. Insert your SD card or USB drive into your PC.
1. Avvia l'Emulatore Dolphin.
1. Select `Tools > Import Wii Save...`.
1. In the file dialog that opens, go to the `savegames` folder on your SD or USB, and select each `.bin` file inside it.
Unfortunately, you can only select one at a time, so you must repeat the last step for each .bin file.
{: .notice--info}
</div>
</div>
</div>

<div id="dol" class="tabcontent" markdown="1">
{% capture dolphin-user-folder %}
`<User Folder>` refers to the folder opened by the `File -> Open User Folder` menu option. ![](/images/dolphin/dolphin-user-folder.png)
{: .notice--info}
{% endcapture %}
{% capture dolphin-emu-memcard-manager %}
If Dolphin is set to use a `.raw` memory card, use `Tools > Memory Card Manager` to export your desired saves to `.gci`. ![](/images/homebrew/gcsaves/dolphin-emu-memcard-manager.png)
{: .notice--info}
{% endcapture %}
All methods here assume you have the [latest Beta or Development version of Dolphin Emulator](https://dolphin-emu.org/download).
{: .notice--info}

<button class="btn btn--info btn--large tablinks to" onClick="openTab_to(event, 'dol-wii')">To a Wii/vWii</button>
<button class="btn btn--info btn--large tablinks to" onClick="openTab_to(event, 'dol-gcmc')">To a GameCube Memory card</button>
<button class="btn btn--info btn--large tablinks to" onClick="openTab_to(event, 'dol-emumc')">To Nintendont</button>

<div id="dol-wii" class="tabcontent to" markdown="1">

<button class="btn btn--info btn--large tablinks via" onClick="openTab_via(event, 'dol-wii-data')">via Data Management</button>
<button class="btn btn--info btn--large tablinks via" onClick="openTab_via(event, 'dol-wii-svgm')">via SaveGame Manager GX</button>

<div id="dol-wii-data" class="tabcontent via" markdown="1">

##### What you need

* an SD card

##### Istruzioni

1. Avvia l'Emulatore Dolphin.
1. If you exporting a select game's save, right click the game inside the Dolphin window and select `Export Wii Save`.
    + If you are exporting all your Wii saves from Dolphin, select `Tools > Export All Wii Saves`.
![](/images/dolphin/export-wiisave.png)

1. In the folder dialog that pops up, select your SD card. (Don't go inside any other folder!)
1. Safely eject your SD card, then put it into your Wii/Wii U.
    + If on a Wii U, be sure to launch Wii Mode.
1. Select the `Wii Options` button at the bottom left.
1. Select `Data Management` (if on Wii), `Save Data`, then `Wii`.
1. Go to the `SD Card` tab at the top right.
1. Select each save that you would like to copy to your Wii/Wii U and select `Copy`.
</div>

<div id="dol-wii-svgm" class="tabcontent via" markdown="1">
Make sure you have installed [cIOS](cios) before following this!
{: .notice--warning}

##### What you need

* The Homebrew Channel on your Wii/vWii
* Una scheda SD o dispositivo USB
* [SaveGame Manager GX](https://oscwii.org/library/app/SaveGame_Manager_GX)

##### Istruzioni

1. Avvia l'Emulatore Dolphin.
1. If you exporting a select game's save, right click the game inside the Dolphin window and select `Export Wii Save`.
    + If you are exporting all your Wii saves from Dolphin, select `Tools > Export All Wii Saves`.
1. In the folder dialog that pops up, select your SD card/USB drive. (don't go inside any other folder!)
1. Safely eject your SD card/USB drive, then put it into your Wii/Wii U.
    + If on a Wii U, be sure to launch Wii Mode.
1. Launch the Homebrew Channel, then launch SaveGame Manager GX.
1. Ensure that the source is set to your SD or USB.
1. Select each save and click `Install`.
</div>
</div>

<div id="dol-gcmc" class="tabcontent to" markdown="1">

##### What you need

* a Wii with GameCube ports and the Homebrew Channel installed
* Una scheda SD o dispositivo USB
* [GCMM](https://oscwii.org/library/app/gcmm)

##### Istruzioni

1. Avvia l'Emulatore Dolphin.
1. In the main menu, select `File > Open User Folder`.
![](/images/dolphin/open-user-folder.png)

1. In the folder that opens, navigate to `GC > [Save region] > Card A`.
1. Copy the `.gci` files you would like to put on your Memory Card.
1. Create a folder named `MCBACKUP` on your SD card or USB drive, and place the `.gci` files you copied into it.
{{ dolphin-emu-memcard-manager }}

1. Download and extract GCMM to the root of your SD card or USB drive.
1. Safely eject the SD/USB from your PC, then insert it into your Wii.
1. Launch the Homebrew Channel, then launch GCMM.
1. Select the device you have copied the `.gci` files to.
![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. Press `+`/`X` to enter Restore mode.
![](/images/homebrew/gcsaves/gcmm-menu.jpg)

1. Select the slot that has your Memory card.
![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Select the save you would like to restore.
    + If you would like to restore all the saves in `MCBACKUP`, press `1`/`R`.
![](/images/homebrew/gcsaves/gcmm-restore-save.jpg)

1. When restoration is complete, press any button to continue.
</div>

<div id="dol-emumc" class="tabcontent to" markdown="1">

##### Istruzioni

1. Open Dolphin Emulator and select `Tools > Memory Card Manager` from the main menu.
1. Click the `Open` button next to Slot B.
1. Go to the `saves` folder on your SD card or USB drive, and select the `.raw` file named after the game's ID.
    + If you do not already have a save on Nintendont, select `Create` and set the Card size to 251 blocks.
    + If you are using one memory card for all games, open the `ninmem.raw`/`ninmemj.raw` file on the root of your SD/USB.
1. If Dolphin is storing your saves in a GCI folder (default):
    + Click `Switch to B`.
    + Click `Import`, and navigate to `<REGION>/Card A/`.
    + Select the `.gci` file(s) you would like to import. Otherwise, if Dolphin is storing your saves in a `.raw` file. simply select your saves on the left side and select `Copy to B`.
</div>
</div>

<div id="gcmc" class="tabcontent" markdown="1">
All methods here require a Wii with GameCube ports.
{: .notice--warning}

<button class="btn btn--large btn--info tablinks to" onClick="openTab_to(event, 'gcmc-dol')">To Dolphin Emulator</button>
<button class="btn btn--large btn--info tablinks to" onClick="openTab_to(event, 'gcmc-emumc')">To Nintendont</button>
<button class="btn btn--large btn--info tablinks to" onClick="openTab_to(event, 'gcmc-gcmc')">To another memory card</button>

<div id="gcmc-emumc" class="tabcontent to" markdown="1">

##### What you need

* [GCMM](https://oscwii.org/library/app/gcmm)

##### Istruzioni

1. Download and extract GCMM to the root of your SD card or USB drive.
1. Safely eject the SD/USB from your PC, then put it into your Wii.
1. Launch the Homebrew Channel, then launch GCMM.
1. Select the device you would like to copy the save file to.
![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. Press `B` and `-`/`L` and `Y` to enter Raw backup mode.
![](/images/homebrew/gcsaves/gcmm-menu.jpg)

1. Select the slot that has your memory card.
![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. When the dump is complete, press any key to continue.
1. Press HOME/START to exit GCMM.
1. Insert your SD card/USB drive into your PC.
1. Copy the `.raw` file inside `MCBACKUP` to the root of the device used for Nintendont and name it `ninmem.raw`.
    + If your games are Japanese, Nintendont will use `ninmemj.raw`, because Japanese games do not play very nicely when there are other region saves present.
1. Launch Nintendont and set Memcard emulation to multi [ ? ]
</div>

<div id="gcmc-dol" class="tabcontent to" markdown="1">

##### What you need

* [GCMM](https://oscwii.org/library/app/gcmm)

##### Istruzioni

1. Download and extract GCMM to the root of your SD card or USB drive.
1. Safely eject the SD/USB from your PC, then put it into your Wii.
1. Launch the Homebrew Channel, then launch GCMM.
1. Select the device you would like to copy the save file to.
![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. Press `B` and `-`/`L` and `Y` to enter Raw backup mode.
![](/images/homebrew/gcsaves/gcmm-menu.jpg)

1. Select the slot that has your memory card.
![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. When the dump is complete, press any key to continue.
1. Press HOME/START to exit GCMM.
1. Insert your SD card/USB drive into your PC.
1. Open Dolphin Emulator, and select `Tools > Memory Card Manager` from the main menu.
1. Click `Open` next to slot B.
1. Go into the `MCBACKUP` folder on your SD/USB, and open the newly created `.raw` file.
1. Click `Switch to B`.
1. If Dolphin is set to store saves in a GCI folder (default):
    + Select the saves you would like to copy.
    + Click `Export as .gci`.
    + Export the `.gci` files to `<REGION>/Card A/`.
1. Otherwise, if Dolphin is set to store saves in a `.raw` file,
    + Select the saves you would like to copy.
    + Click `Copy to A`.
</div>

<div id="gcmc-gcmc" class="tabcontent to" markdown="1">

##### What you need

* a Wii

##### Istruzioni

1. Insert both memory cards into your Wii.
1. Launch the Wii menu and select the Wii Options button at the bottom left.
![](/images/Wii/wii-options.png)

1. Select `Data Management > Save Data > Nintendo GameCube`.
1. Select the save you would like to copy and select `Copy`.
![](/images/homebrew/gcsaves/gc-data-management.png)
</div>
</div>
<
div id="emumc" class="tabcontent" markdown="1">

<button class="btn btn--large btn--info tablinks to" onClick="openTab_to(event, 'emumc-dol')">To Dolphin Emulator</button>
<button class="btn btn--large btn--info tablinks to" onClick="openTab_to(event, 'emumc-gcmc')">To a memory card</button>

<div id="emumc-dol" class="tabcontent to" markdown="1">

##### What you need

* Latest beta or Development version of Dolphin Emulator

##### Istruzioni

1. Insert your SD card or USB drive into your PC.
1. Open Dolphin Emulator, and select `Tools > Memory Card Manager` from the main menu.
1. Click `Open` next to slot B.
1. Navigate to the `saves` folder on your SD/USB, and open the `.raw` file named after the game ID of your game.
1. Click `Switch to B`.
1. If Dolphin is set to store saves in a GCI folder (default):
    + Select the saves you would like to copy.
    + Click `Export as .gci`.
    + Export the `.gci` files to `<REGION>/Card A/`.
1. Otherwise, if Dolphin is set to store saves in a `.raw` file:
    + Select the saves you would like to copy.
    + Click `Copy to A`.
</div>
<

div id="emumc-gcmc" class="tabcontent to" markdown="1">

##### What you need

* The Homebrew Channel installed on your Wii
* Una scheda SD o dispositivo USB
* [GCMM](https://oscwii.org/library/app/gcmm)

##### Individual memcards (.gci files)

1. Insert your SD card or USB drive into your PC.
1. Create a folder named `MCBACKUP`.
1. Copy the `.gci` files inside the `saves` folder to the `MCBACKUP` folder.
1. Download and extract GCMM to the root of your SD card or USB drive.
1. Safely eject the SD/USB from your PC, then insert it into your Wii.
1. Launch the Homebrew Channel, then launch GCMM.
1. Select the device you have copied the `.gci` files to.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

1. Press `+`/`X` to enter Restore mode.

    ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

1. Select the slot that has your Memory card.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

1. Select the save you would like to restore.
    + If you would like to restore all the saves in `MCBACKUP`, press `1`/`R`.

    ![](/images/homebrew/gcsaves/gcmm-restore-save.jpg)

1. When restoration is complete, press any button to continue.

<div>

</div>

<script>
    const tablinks     = document.getElementsByClassName('tablinks');
    const tablinks_to  = document.getElementsByClassName('tablinks to');
    const tablinks_via = document.getElementsByClassName('tablinks via');

    const tabcontent     = document.getElementsByClassName('tabcontent');
    const tabcontent_to  = document.getElementsByClassName('tabcontent to');
    const tabcontent_via = document.getElementsByClassName('tabcontent via');

    for (e of tabcontent) {
        e.style.display = 'none';
    }

    function openTab_from(evt, tabName) {
        for (t of tabcontent) t.style.display = 'none';
        for (b of tablinks) b.className = b.className.replace('btn--primary', 'btn--info');
        
        document.getElementById(tabName).style.display = 'block';
        evt.currentTarget.className = evt.currentTarget.className.replace('btn--info', 'btn--primary');
    }

    function openTab_to(evt, tabName) {
        for (t of tabcontent_to) t.style.display = 'none';
        for (t of tabcontent_via) t.style.display = 'none';
        for (b of tablinks_to) b.className = b.className.replace('btn--primary', 'btn--info');
        for (b of tablinks_via) b.className = b.className.replace('btn--primary', 'btn--info');

        document.getElementById(tabName).style.display = 'block';
        evt.currentTarget.className = evt.currentTarget.className.replace('btn--info', 'btn--primary');
    }

    function openTab_via(evt, tabName) {
        for (t of tabcontent_via) t.style.display = 'none';
        for (b of tablinks_via) b.className = b.className.replace('btn--primary', 'btn--info');

        document.getElementById(tabName).style.display = 'block';
        evt.currentTarget.className = evt.currentTarget.className.replace('btn--info', 'btn--primary');
    }
</script>
