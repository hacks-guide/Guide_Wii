# Managing Wii and GameCube Backups

This guide provides instructions on how to manage your Wii and GameCube backups. There are various tools that can be used for this purpose (like Wii Backup Manager, Wii Backup Fusion, etc.); this guide covers TinyWiiBackupManager.

::: info

For storing multiple games, we recommend an external hard drive for your Wii. Most of those found on the market should work fine.

:::

::: info

A flash drive is NOT recommended, as they are small and may vary in behavior even between the same product.

As an alternative, you may use an SD card, however limitations of the Wii's SD card slot will result in slow read/write speeds.

:::

::: info

Make sure your USB drive is formatted using FAT32. Do not format it using other file systems such as exFAT, extFS, or WBFS.

You may format it as NTFS, but it will NOT work with the majority of apps (e.g. The Homebrew Channel or Nintendont).

:::

## Using TinyWiiBackupManager

### Requirements

* A PC running Windows, Linux, or macOS
* A USB drive or SD card
* A dumped Wii/GameCube game disc (any format)
* [TinyWiiBackupManager](https://github.com/mq1/TinyWiiBackupManager/releases/latest)

### Instructions

#### Section I - Installation

1. Install TinyWiiBackupManager using your preferred packaging format.
1. If you are using macOS, you must run the following command in the Terminal app after installation: `xattr -rd com.apple.quarantine /Applications/TinyWiiBackupManager.app`
1. Insert your USB drive or SD card into your computer.

#### Section II - Copying Games

1. Click on the Drive icon in the bottom left of the app to select your drive. Select the root of the drive (e.g., `E:`), not the "wbfs" or "games" folder.

    ![](/images/desktop-apps/TWBM/empty.png)

1. Click the `+` button in the top left to add one or more games.
    + Click the `(folder icon) +` button to add games from a specific directory.
    + You can also drag and drop games from your file manager to add them. (Note: This is not currently available on Wayland).
    + If a transfer is already in progress when adding new games, they will be added to the queue.

    ![](/images/desktop-apps/TWBM/games.png)

1. Remember to safely eject your drive before unplugging it!

::: tip

[Continue to cIOS](cios)

cIOS is needed for your Wii to use a USB Loader. Once this is done, you can use [USB Loader GX or WiiFlow](wii-loaders) to play games from your USB drive or SD card.

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::
