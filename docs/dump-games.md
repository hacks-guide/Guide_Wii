# Dumping Wii/GameCube games

This guide covers dumping GameCube or Wii game discs to a local SD card or USB drive on your Wii.

## Dumping a Disc to SD/USB (CleanRip)

### Requirements

* An SD card or USB drive with at least 4.7 GB of free space (8.5 GB if dumping a dual layer disc).
* [CleanRip](https://oscwii.org/library/app/cleanrip)

### Preparation

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

    ::: warning

    You may get an exception error if you do this. If so, restart your Wii and try again - but if you continue to get exception errors, dump the disc and verify the checksum in Dolphin instead if needed.

    :::

    ![](/images/homebrew/CleanRip/redump.png)

1. Insert the game disc you would like to dump, and press A to continue.

    ![](/images/homebrew/CleanRip/insertdisc.png)

## Dumping a Wii Disc

::: warning

If you get an unrecovered read error, ensure that the disc you are attempting to dump is clean and can be properly read by the console. Even though you may be able to play the game disc normally, you may still get this error. If the error persists, try to dump another disc and see if the same error happens.

:::

1. When prompted, select if your disc is an unlicensed Datel disc. If unsure, select `No`.

    ![](/images/homebrew/CleanRip/dateldisc.png)

1. Set the settings as shown on the screen below.

    ![](/images/homebrew/CleanRip/wiisettings.png)

1. Press A to start dumping the disc.
    + This process can take quite some time, since it will dump all 4.7 GB of the DVD (8.5 GB for dual layer discs).

    ![](/images/homebrew/CleanRip/wiiprogress.png)

1. When the dump finishes, you should see a screen with the MD5 checksum of your disc, compared to the Redump DAT if you enabled it.

    ![](/images/homebrew/CleanRip/wiidumpcomplete.png)

::: tip

Proceed to [Managing Wii Backups](wii-backups) to join the PART files that are output, and manage your dumped games.

:::

## Dumping a GameCube Disc

::: info

Wii Family Editions, Wii minis, and the Wii U's vWii are not capable of dumping GameCube games. The Wii Family Edition can dump GameCube games if the disk drive is swapped with one made for an original model Wii.

:::

1. When prompted, select if your disc is an unlicensed Datel disc. If unsure, select `No`.

    ![](/images/homebrew/CleanRip/dateldisc.png)

1. Press A to start dumping the disc.
    + This process can take some time, since it will dump all 1.3 GB of the Mini DVD.

    ![](/images/homebrew/CleanRip/gcprogress.png)

1. When the dump finishes, you should see a screen with the MD5 checksum of your disc, compared to the Redump DAT if you enabled it.

    ![](/images/homebrew/CleanRip/gcdumpcomplete.png)

::: tip

Proceed to [Managing GameCube Backups](gc-backups) to shrink the size of your output file, and manage your dumped games.

:::
