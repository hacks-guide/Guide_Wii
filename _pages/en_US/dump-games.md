---
title: "Dumping Wii/GameCube games"
---

{% include toc title="Table of Contents" %}

This guide covers dumping GameCube or Wii game discs to a local SD card or USB drive on your Wii.

### Dumping a Disc to SD/USB (CleanRip)

#### Requirements

+ An SD card or USB drive with at least 4.7 GB of free space (8.5 GB if dumping a dual layer disc).
+ [CleanRip](https://oscwii.org/library/app/cleanrip)

#### Preparation

1. Power off your console.
1. Insert your SD card or USB drive into your computer.
1. Copy the `apps` folder from the CleanRip `.zip` to the root of your SD card or USB drive.
1. Reinsert your SD card or USB drive into your console.
1. Power on your console.
1. Launch the Homebrew Channel.
1. Launch CleanRip from the list of homebrew.
1. When prompted, select `Yes` to calculate disc checksums.

    ![](/images/homebrew/CleanRip/checksum.png)

1. Select your device that you will be dumping the game to - a USB device or SD card.

    ![](/images/homebrew/CleanRip/device.png)

1. Select the filesystem type of the device - in most cases it will be FAT (FAT32).

    ![](/images/homebrew/CleanRip/filesystem.png)

1. Ensure that your device is connected to the system and press A to proceed.

    ![](/images/homebrew/CleanRip/insertdevice.png)

1. When prompted, select `Yes` to download the redump.org DAT files.
    + This is required to ensure that the resulting dumps are clean/accurate.

    You may get an exception error if you do this. If so, restart your Wii and try again - but if you continue to get exception errors, dump the disc and verify the checksum in Dolphin instead if needed.
    {: .notice--warning}

    ![](/images/homebrew/CleanRip/redump.png)

1. Insert the game disc you would like to dump, and press A to continue.

    ![](/images/homebrew/CleanRip/insertdisc.png)

### Dumping a Wii Disc

If you are dumping one of the 13 games on [this list](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games), set `Dual Layer` in Step 1 to `Yes`.
{: .notice--info}

If you get an unrecovered read error, ensure that the disc you are attempting to dump is clean and can be properly read by the console. Even though you may be able to play the game disc normally, you may still get this error. If the error persists, try to dump another disc and see if the same error happens.
{: .notice--warning}

1. Set the settings as shown on the screen below, while verifying if your game disc is dual layer or not.

    ![](/images/homebrew/CleanRip/wiisettings.png)

1. Press A to start dumping the disc.
    + This process can take quite some time, since it will dump all 4.7 GB of the DVD (8.5 GB for dual layer discs).

    ![](/images/homebrew/CleanRip/wiiprogress.png)

1. When the dump finishes, you should see a screen with the MD5 checksum of your disc, compared to the Redump DAT if you enabled it.

    ![](/images/homebrew/CleanRip/wiidumpcomplete.png)

Proceed to [Managing Wii Backups](wii-backups) to join the PART files that are output, and manage your dumped games.
{: .notice--info}

### Dumping a GameCube Disc

1. When prompted, select if your disc is an unlicensed Datel disc. If unsure, select `No`.

    ![](/images/homebrew/CleanRip/dateldisc.png)

1. Press A to start dumping the disc.
    + This process can take some time, since it will dump all 1.3 GB of the Mini DVD.

    ![](/images/homebrew/CleanRip/gcprogress.png)

1. When the dump finishes, you should see a screen with the MD5 checksum of your disc, compared to the Redump DAT if you enabled it.

    ![](/images/homebrew/CleanRip/gcdumpcomplete.png)

Proceed to [Managing GameCube Backups](gc-backups) to shrink the size of your output file, and manage your dumped games.
