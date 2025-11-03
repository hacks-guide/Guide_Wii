# Managing Wii Backups

This guide provides instructions on how to manage your Wii backups, from joining .PART files that are output through CleanRip, to shrinking game files that can be copied onto a FAT32 device. Three programs that can be used to manage your Wii backups are Wii Backup Manager (for Windows), Wii Backup Fusion (for Linux and MacOS) and TinyWiiBackupManager (for Windows, Linux and MacOS) and are covered below.

::: info

For storing multiple games, we recommend an external hard drive for your Wii. Most of those found on the market should work fine.

:::

::: info

A flash drive is not recommended, as they are small and may vary in behavior even between the same product.

As an alternative, you may simply use an SD card, however the Wii's SD card slot will be slow.

:::

::: info

Make sure your USB drive is formatted as FAT32. Do not format it as other types such as exFAT or extFS.

You may format it as NTFS, but it won't work with a majority of apps (eg. The Homebrew Channel, Nintendont)

:::

## Joining PART files on a FAT32 device

::: info

If your disc was dumped to a FAT32 device, you should have gotten at least two files that end with `.partX.iso`, due to filesystem limitations. They need to be joined (on a supported filesystem like NTFS) so the file can be read correctly.

:::

### Windows

1. Copy the files that share the same name and end with `.partX.iso` into an empty folder on your computer.

    ![](/images/desktop-apps/WBM/dumpedpartfiles.png)

1. In this folder, click the address bar in Windows Explorer and type in `cmd`, this will open a command prompt window there.

    ![](/images/desktop-apps/WBM/opencmd.png)
1. Type `copy /b *.part?.iso game.iso` and press enter. Wait for the command to finish, your terminal output should be similar to the below.

    ![](/images/desktop-apps/WBM/joinpartfiles.png)

1. If the copy process executed correctly, the checksum from the game dump info file (located where you dumped your disc at) should match the resulting joined file.

    ![](/images/desktop-apps/WBM/filemd5.png)

### macOS/Linux

1. Copy the files that share the same name and end with `.partX.iso` into an empty folder on your computer.

    ![](/images/desktop-apps/WBM/dumpedpartfileslinux.png)

1. Open a terminal in the directory where your files are at, or `cd [PATH]` to it.

    ![](/images/desktop-apps/WBM/openterminallinux.png)

1. Use the following command as is: ```cat `ls *.part?.iso | sort` > game.iso```. Then, wait for the merging process to finish. Like in Windows, the resulting checksum should match the dump.

    ![](/images/desktop-apps/WBM/mergesuccesslinux.png)

## Using Wii Backup Manager

### Requirements

* A PC running Windows
* A USB drive or SD card
* A dumped ISO from a Wii game disc
* [Wii Backup Manager](https://static.wiidatabase.de/Wii-Backup-Manager.zip)

### Instructions

#### Section I - Installation

1. Extract Wii Backup Manager, and launch the program.
1. Insert your USB drive or SD card into your computer.

#### Section II - Copying Games

1. Go to the `Drive 1` tab, then select the drive that will hold your backed up Wii games.

    ![](/images/desktop-apps/WBM/select_drive.png)

1. Go to the `Files` tab, then select `Add`.
    + Select `Files` to add multiple games to the program, or select `Folder` to add a whole folder of games.

    ![](/images/desktop-apps/WBM/select_games.png)

1. Go to `Select`, then click `Games not on drive 1`.

    ![](/images/desktop-apps/WBM/select_games2.png)

1. Select `Transfer`, then select `Drive 1` to transfer the games over. The progress will be displayed on the right side of the window.

    ![](/images/desktop-apps/WBM/transfer_todrive.png)

## Using Wii Backup Fusion

### Requirements

* A PC running MacOS or Linux
* A USB drive or SD card
* A dumped ISO from a Wii game disc
* [Wii Backup Fusion](https://github.com/larsenv/Wii-Backup-Fusion/releases)
* [Wiimm's ISO Tools](https://wit.wiimm.de/download.html)

### Instructions

#### Section I - Installation

1. Download Wiimm's ISO tools for your OS and extract the .tar.gz into a folder that you can access with the terminal. The extracted folder should have these files inside:

    ![](/images/desktop-apps/WBM/witinstallfolder.png)

1. Open a terminal in the folder that you just extracted, and run `sudo ./install.sh`.
1. Download Wii Backup Fusion for your OS and install. If on Linux, you will need to make the appimage executable by running `chmod +x [FILE]`.

#### Section II - Copying Games

1. Open Wii Backup Fusion and press `Load`.

    ![](/images/desktop-apps/WBM/loadwbf.png)

1. Select the directory where your game ISO is at.

    ![](/images/desktop-apps/WBM/opendirectorywbf.png)

1. Right click on the game that you want to transfer to a drive, and press `Transfer to image`. Use the following settings:

    ![](/images/desktop-apps/WBM/settingswbf.png)

1. If there is not already a `wbfs` directory on your game drive, make one.
1. Make another directory inside of the `wbfs` folder for the game backup. Take note of the Game ID in Wii Backup Fusion as you will need this for the game folder.
1. Make a game folder for your game, formatted as `game name [GAMEID]`. For the game dumped as an example in this guide, it would be named `New Super Mario Bros. Wii [SMNE01]`.

    ![](/images/desktop-apps/WBM/wbfsname.png)

1. Copy the game.wbfs file that was made in Step 3 to this new folder. The drive should be ready to use on a Wii.

## Using TinyWiiBackupManager

### Requirements

* A device running Windows, MacOS, or Linux
* A USB drive or SD card
* A dump from a Wii game disc (any format)
* [TinyWiiBackupManager](https://github.com/mq1/TinyWiiBackupManager/releases/latest)

### Instructions

#### Section I - Installation

1. Download TinyWiiBackupManager for your OS
    - on Windows, you'll most likely want to download "Standalone (x64)"
    - on Linux, a [Flatpak](https://flathub.org/apps/it.mq1.TinyWiiBackupManager) package is also available
1. Insert your USB drive or SD card into your computer.

#### Section II - Copying Games

1. Run TinyWiiBackupManager, a text will tell you to select the drive that will hold your backed up Wii games.
1. Click on the `➕` button to add the game(s) you want to transfer to a drive.
1. The `➕` button can be clicked multiple times, it will hold a transfer queue.

    ![](/images/desktop-apps/TWBM/screenshot.png)


::: tip

[Continue to cIOS](cios)

cIOS is needed for your Wii to use a USB Loader. Once this is done, you can use [USB Loader GX or WiiFlow](wii-loaders) to play games from your USB drive or SD card.

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::
