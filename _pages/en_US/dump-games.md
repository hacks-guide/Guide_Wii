---
title: "Dumping Wii/GameCube games"
---

Want to dump a GameCube or a Wii disk? There are two ways of doing so, depending on the tools you have available with you.

<button class="tablinks btn btn--large btn--primary" id="defaultOpen" onclick="openTab(event, 'cleanrip')">To the SD card/USB drive</button>
<button class="tablinks btn btn--large btn--info" onclick="openTab(event, 'dump-smb')">To a PC over the network</button>

<div id="cleanrip" class="blanktabcontent" markdown="1">

### CleanRip

#### What you need

- An SD card or USB drive with at least 4.7 GB of free space (8.5 GB if dumping a dual layer disc).
- [CleanRip](https://oscwii.org/library/app/cleanrip)

#### Instructions

##### Section I - Downloading/Installing

1. Extract CleanRip and put it in the `apps` folder on your SD card or USB drive.
1. Insert your SD card into your Wii, and launch CleanRip from the Homebrew Channel.

##### Section II - Ripping

1. Select your device that you will be dumping the game to - your USB drive or SD card.
    ![Device type](/images/CleanRip/2.png)
1. On this screen, it asks you if you want to download a file with game checksums so you can verify the dump created is a 1:1 copy of the disc. It's your choice whether to say `Yes` or `No` to download this file.
    ![DAT](/images/CleanRip/3.png)
1. Now insert the game you want to dump.
    ![DVD](/images/CleanRip/4.png)
    ![Initialising Disc](/images/CleanRip/5.png)
1. Set it as shown on the screen below.

    If you are dumping one of the 13 games on [this list](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games), set `Dual Layer` to `Yes`.
    {: .notice--info}

    ![Settings](/images/CleanRip/6.png)

1. CleanRip will now dump your game. It can take a while, since it will dump the full 4.7 GB disc contents (8.5 GB for dual layer discs).
    ![Copying](/images/CleanRip/7.png)
</div>

<div id="dump-smb" class="blanktabcontent" markdown="1">

### Dumping a game over a local network

#### What you need

- [DVD Dump Tool](/assets/files/DVDDumpTool.zip)

Your Wii and your computer must be connected to one local network.
{: .notice--warning}

#### Instructions

##### Section I - Downloading/Installing

1. Extract DVD Dump Tool and put it in the `apps` folder on your SD card or USB drive.
1. Insert your SD card into your Wii, and launch DVD Dump Tool from the Homebrew Channel.

##### Section II - Ripping

1. Press the right on the D-pad and press A.
    ![2](/images/DumpDiscs_LAN/2.png)
1. Choose the disc that you want to copy (The options are: `GameCube Disc`, `Wii Single-Layer Disc`, `Wii Dual-Layer Disc` and press "A"
    ![3](/images/DumpDiscs_LAN/3.png)
1. Now put your game to your Wii. (If it's already in your Wii, eject it and put it back.)
    ![InsertTheDisc](/images/DumpDiscs_LAN/insertthedisc.jpg)
    ![4](/images/DumpDiscs_LAN/4.png)
1. Remember your Wii URL (IP address)
    ![5](/images/DumpDiscs_LAN/5.png)
1. On your computer's web browser, go to your address bar and enter the Wii URL.
    ![6](/images/DumpDiscs_LAN/6.png)
1. Click on `Click here to download XXXX.iso`.
    ![7](/images/DumpDiscs_LAN/7.jpg)

    The transfer speed is not the fastest, but if you can't use anything else, it's better than nothing.
    {: .notice--info}

    ![8](/images/DumpDiscs_LAN/8.PNG)

</div>

## Joining split files

If you dumped the disc on a FAT32 formatted, device, you should've got at least 2 files that end with `.partX.iso`. They need to be joined up.
{: .notice--info}

## Windows

1. Copy all the files that share the same name and end with `.partX.iso` into an empty folder on your computer.
1. Open the folder in File Explorer.
1. While holding Shift, right click on an empty space within the folder.
1. Select "Open PowerShell window here".
1. In the new window that appears, type `cmd` and press enter.
1. Finally, type `copy /b *.part?.iso game.iso` and press enter.
1. Wait until it finishes. You can confirm this when "1 file(s) copied." appears.

## macOS/Linux

1.  Copy all the files that share the same name and end with `.partX.iso` in a folder on your computer.
1.  Open up a Terminal.
1.  Use the `cd <path>` command and replace `<path>` by the path to your `.partX.iso` files.
1.  Use the following command as is: `cat \*.part?.iso > game.iso`.

To organize the games on your drive properly, you'll need to use [Wii Backup Manager](wiibackupmanager).
{: .notice--info}

<script>
    let tabcontent = document.getElementsByClassName("blanktabcontent");
    let tablinks = document.getElementsByClassName("tablinks");

    for (e of tabcontent) element.style.display = "none";

    function openTab(evt, tabName) {
        let element;

        for (element of tabcontent) {
            element.style.display = "none";
        }

        for (element of tablinks) {
            element.className = element.className.replace("btn--primary", "btn--info");
            if (!element.className.includes('btn--info'))
                element.className += " btn--info";
        }

        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className = evt.currentTarget.className.replace("btn--info", "btn--primary");
    }

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
</script>
