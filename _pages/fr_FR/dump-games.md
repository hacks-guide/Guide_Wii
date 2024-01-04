---
title: "Dumping Wii/GameCube games"
---

{% include toc title="Table of Contents" %}

Ce guide couvre la copie de disques de jeux GameCube ou Wii. Vous pouvez soit copier directement sur une carte SD ou un disque USB, soit sur le réseau local.

### Copier un disque vers une SD/USB (CleanRip)

#### Prérequis

+ Une carte SD ou disque USB avec au moins 4,7 go d'espace libre (8,5 go en cas de copie d'un disque double couche).
+ [CleanRip](https://oscwii.org/library/app/cleanrip)

#### Instructions

If you are dumping one of the 13 games on [this list](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games), set `Dual Layer` to `Yes`.
{: .notice--info}

1. Éteignez votre console.
1. Insérez votre carte SD ou votre clé USB dans votre ordinateur.
1. Extract CleanRip and put it in the `apps` folder on your SD card or USB drive.
1. Open the folder in File Explorer.
1. Allumez votre console.
1. Lancez la Chaîne Homebrew.
1. Launch CleanRip from the list of homebrew.
1. Select your device that you will be dumping the game to - your USB drive or SD card.

    ![](/images/homebrew/CleanRip/2.png)

1. When prompted, select `Yes` to download the redump.org DAT files.
    + This is required to ensure that the resulting dumps are clean/accurate.

    You may get an exception error if you do this. If so, simply skip and verify your dump on Dolphin Emulator if needed.
    {: .notice--warning}

    ![](/images/homebrew/CleanRip/3.png)

1. Now insert the game you want to dump.

    ![](/images/homebrew/CleanRip/4.png)

1. Set the settings as shown on the screen below, while verifying if your game disc is dual layer or not.

    ![](/images/homebrew/CleanRip/6.png)

1. Press A to start dumping the disc.
    + It can take a while, since it will dump the full 4.7 GB disc contents (8.5 GB for dual layer discs).

    ![](/images/homebrew/CleanRip/7.png)

1. Proceed to [joining PART files](dump-games#joining-part-files-on-a-fat32-device).

### Dumping a Disc over LAN (Wii DVD Dumper)

#### Prérequis

+ A Windows/macOS/Linux PC with an internet connection
+ [DVD](/assets/files/DVDDumpTool.zip)

#### Instructions

Download speeds will be slow due to limitations in the network hardware of the Wii, but it remains a valid solution if you are willing to be patient.
{: .notice--info}

Dumping a game over a local network
{: .notice--warning}

1. Extract DVD Dump Tool and put it in the `apps` folder on your SD card or USB drive.
1. Insert your SD card into your Wii, and launch CleanRip from the Homebrew Channel.
1. Allumez votre console.
1. Lancez la Chaîne Homebrew.
1. Launch DVD Dump Tool from the list of homebrew.
1. Press the right on the D-pad and press A.
1. Choose the disc that you want to copy (The options are: `GameCube Disc`, `Wii Single-Layer Disc`, `Wii Dual-Layer Disc` and press "A"

    ![](/images/homebrew/DumpDiscs_LAN/2.png)
1. Insert your SD card into your Wii, and launch DVD Dump Tool from the Homebrew Channel.
    + If it is already inserted, eject and reinsert the disc.

    ![](/images/homebrew/DumpDiscs_LAN/insertthedisc.jpg)
1. Select the proper disc type.

    ![](/images/homebrew/DumpDiscs_LAN/3.png)
1. Press any button to begin the dumping process.

    ![](/images/homebrew/DumpDiscs_LAN/4.png)
1. Remember your Wii URL (IP address)
1. On your computer's web browser, go to your address bar and enter the Wii URL.

    ![](/images/homebrew/DumpDiscs_LAN/5.png)
1. Click on `Click here to download XXXX.iso`.
1. Proceed to [joining PART files](dump-games#joining-part-files-on-a-fat32-device).

### Joining PART files on a FAT32 device

If you dumped the disc on a FAT32 formatted, device, you should've got at least 2 files that end with `.partX.iso`. They need to be joined up.
{: .notice--info}

#### Windows

1. Copy all the files that share the same name and end with `.partX.iso` into an empty folder on your computer.
1. In this folder, click the address bar in Windows Explorer and copy its PATH.
1. Select "Open PowerShell window here".
1. Run `cd [PATH]`.
1. Finally, type `copy /b *.part?.iso game.iso` and press enter.
1. Wait until the merging process finishes.
    + It should end with the terminal outputting `1 file(s) copied`.

#### macOS/Linux

1. Copy all the files that share the same name and end with `.partX.iso` in a folder on your computer.
1. Open up a Terminal.
1. Use the `cd <path>` command and replace `<path>` by the path to your `.partX.iso` files.
1. Use the following command as is: `cat \*.part?.iso > game.iso`.
1. Wait until it finishes.

To organize the games on your drive properly, you'll need to use [Wii Backup Manager](wiibackupmanager).
{: .notice--info}
