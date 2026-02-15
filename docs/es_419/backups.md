---
outline: false
---

# Managing Wii and GameCube Backups

This guide provides instructions on how to manage your Wii and GameCube backups with TinyWiiBackupManager, in addition to joining PART files when dumping Wii games from a FAT32 device. Important notes about game management on the Wii are listed below.

::: tip

To play multiple games, we recommend a USB-powered external hard drive for your Wii. Most of the ones you can find on the market should work fine if they have USB 2 backwards compatibility.

:::

::: warning

A flash drive is NOT recommended for usage on the Wii. Reasoning behind this is explained in the [storage FAQ](faq#storage-device-faq).

As an alternative, you may use an SD card, however limitations of the Wii's SD card slot will result in slow read/write speeds. It is generally recommended that you use a USB hard drive or SSD instead.

:::

::: danger

Make sure your device is formatted using FAT32. Do not format it using other file systems such as exFAT, extFS, or WBFS.

You may format it as NTFS, but it will NOT work with the majority of apps (e.g. The Homebrew Channel or Nintendont).

:::

## Joining PART files from a Wii disc on a FAT32 device

If you dumped a Wii disc onto a FAT32 formatted device, you should have gotten at least two files that end with `.partX.iso`, due to filesystem limitations. They need to be joined (on a supported filesystem like NTFS) so the file can be read correctly.

:::details Instrucciones

### Windows

1. Copy the files that share the same name and end with `.partX.iso` into an empty folder on your computer.

   ![](/images/desktop-apps/WBM/dumpedpartfiles.png)

2. In this folder, click the address bar in Windows Explorer and type in `cmd`, this will open a command prompt window there.

   ![](/images/desktop-apps/WBM/opencmd.png)

3. Type `copy /b *.part?.iso game.iso` and press enter. Wait for the command to finish, your terminal output should be similar to the below.

   ![](/images/desktop-apps/WBM/joinpartfiles.png)

4. If the copy process executed correctly, the checksum from the game dump info file (located where you dumped your disc at) should match the resulting joined file.

   ![](/images/desktop-apps/WBM/filemd5.png)

### macOS/Linux

1. Copy the files that share the same name and end with `.partX.iso` into an empty folder on your computer.

   ![](/images/desktop-apps/WBM/dumpedpartfileslinux.png)

2. Open a terminal in the folder where your files are located, or `cd [PATH]` to it.

   ![](/images/desktop-apps/WBM/openterminallinux.png)

3. Use the following command as is: ``cat `ls *.part?.iso | sort` > game.iso``. Then, wait for the merging process to finish. Like in Windows, the resulting checksum should match the dump.

   ![](/images/desktop-apps/WBM/mergesuccesslinux.png)

:::

## Using TinyWiiBackupManager

TinyWiiBackupManager is a new, lightweight game backup manager programmed in Rust that replaces the previously recommended apps in this guide, WiiBackupManager and WiiBackupFusion. Instructions to use this app are sorted by tab for each platform that TWBM can be installed on.

::::: tabs

:::: tab Windows

### Using TWBM on Windows

#### Requisitos

- A PC running Windows 7 or later
- Una unidad USB
- A dumped Wii/GameCube game disc (any format)
- [TinyWiiBackupManagerInstaller](https://github.com/mq1/TinyWiiBackupManagerInstaller/releases/latest/)

#### Instrucciones

##### Section I - Installation

1. Download `TinyWiiBackupManagerInstaller.exe` and run the installer. If you get a Windows SmartScreen message, simply run anyway as this is a false positive.

   ![](/images/desktop-apps/TWBM/twbmi-download.png)

2. Let the installer run, and then launch TinyWiiBackupManager once the process is finished.

   ![](/images/desktop-apps/TWBM/twbmi-install.png)

##### Section II - Copying Games

::: tip

If you already have games on your drive and TinyWiiBackupManager prompts you to normalize paths, go to the Toolbox and perform this action to ensure that your drive directories are listed correctly.

:::

1. Insert your USB drive into your computer.

2. Click the hard drive icon on the bottom left of the app to select your drive. Select the root of the drive (e.g. `E:\`), not the "wbfs" or "games" folder.

   ![](/images/desktop-apps/TWBM/twbm-win-empty.png)

3. Click the :heavy_plus_sign: button on the top right of the app to add one or more games.

   - Click the :file_folder: button to add games from a specific directory.
   - You may also drag and drop games from your file manager to add them.
   - If a transfer is already in progress when adding new games, they will be added to a queue.

   ![](/images/desktop-apps/TWBM/twbm-win-games.png)

4. Remember to safely eject your drive before unplugging it!

::::

:::: tab macOS

### Using TWBM on macOS

#### Requisitos

- A PC running macOS 10.13 or later
- Una unidad USB
- A dumped Wii/GameCube game disc (any format)
- [TinyWiiBackupManager](https://github.com/mq1/TinyWiiBackupManager/releases/latest)

#### Instrucciones

##### Section I - Installation

1. Download the universal .DMG binary for macOS.

   ![](/images/desktop-apps/TWBM/twbm-mac-download.png)

2. Drag TinyWiiBackupManager to the applications folder.

   ![](/images/desktop-apps/TWBM/twbm-mac-install.png)

3. Run the following command in the Terminal app after installation: `xattr -rd com.apple.quarantine /Applications/TinyWiiBackupManager.app`. This will allow the app to run, as it will otherwise be blocked by macOS security settings.

   ![](/images/desktop-apps/TWBM/twbm-mac-security.png)

4. Launch TinyWiiBackupManager.

##### Section II - Copying Games

::: tip

If you already have games on your drive and TinyWiiBackupManager prompts you to normalize paths, go to the Toolbox and perform this action to ensure that your drive directories are listed correctly.

:::

1. Insert your USB drive into your computer.

2. Click the hard drive icon on the bottom left of the app to select your drive. Select the root of the drive (e.g. `E:\`), not the "wbfs" or "games" folder.

   ![](/images/desktop-apps/TWBM/twbm-mac-empty.png)

3. Click the :heavy_plus_sign: button on the top right of the app to add one or more games.

   - Click the :file_folder: button to add games from a specific directory.
   - You may also drag and drop games from your file manager to add them.
   - If a transfer is already in progress when adding new games, they will be added to a queue.

   ![](/images/desktop-apps/TWBM/twbm-mac-games.png)

4. Remember to safely eject your drive before unplugging it!

::::

:::: tab Linux

### Using TWBM on Linux

#### Requisitos

- A PC running Linux that supports AppImage or Flatpak
- Una unidad USB
- A dumped Wii/GameCube game disc (any format)
- [TinyWiiBackupManager](https://github.com/mq1/TinyWiiBackupManager/releases/latest)

#### Instrucciones

##### Section I - Installation

TinyWiiBackupManager can be installed from the Flathub repository as a Flatpak, or ran directly from an AppImage file. Instructions for both options are outlined below.

###### Flatpak

1. Ensure that FlatPak is [installed on your system](https://flathub.org/en/setup).

2. Navigate to the [Flathub repository for TWBM](https://flathub.org/en/apps/it.mq1.TinyWiiBackupManager) and press the Install button. If nothing happens, download the `.flatpakref` file and open it to find the program in your distro's app store. If nothing happens again, run `flatpak install flathub it.mq1.TinyWiiBackupManager` in your terminal.

   ![](/images/desktop-apps/TWBM/twbm-linux-flatpak-dl.png)

3. Ensure that TinyWiiBackupManager is installed on your system, and then launch the app.

###### AppImage

1. Download the AppImage binary for your system and architecture. Most users should download `TinyWiiBackupManager-vX.X.X-linux-x86_64.AppImage`.

   ![](/images/desktop-apps/TWBM/twbm-linux-appimage-dl.png)

2. Ensure that the AppImage binary is executable by running `chmod +x [binary location]`.

   ![](/images/desktop-apps/TWBM/twbm-linux-appimage-exec.png)

3. Launch TinyWiiBackupManager.

##### Section II - Copying Games

::: tip

If you already have games on your drive and TinyWiiBackupManager prompts you to normalize paths, go to the Toolbox and perform this action to ensure that your drive directories are listed correctly.

:::

1. Insert your USB drive into your computer.

2. Click on the Drive icon in the bottom left of the app to select your drive. Select the root of the drive (e.g. `E:`), not the "wbfs" or "games" folder.

   ![](/images/desktop-apps/TWBM/twbm-linux-empty.png)

3. Click the :heavy_plus_sign: button on the top right of the app to add one or more games.

   - Click the :file_folder: button to add games from a specific directory.
   - You may also drag and drop games from your file manager to add them. Please note that this feature is not currently available on Wayland.
   - If a transfer is already in progress when adding new games, they will be added to a queue.

   ![](/images/desktop-apps/TWBM/twbm-linux-games.png)

4. Remember to safely eject your drive before unplugging it!

::::

:::::

::: tip

[Continue to cIOS](cios)

In order to play dumped Wii games from your external device, you must have cIOS configured. Once cIOS is configured, you can use [USB Loader GX or WiiFlow](wii-loaders) to play Wii games from your USB drive or SD card.

You can also use [Nintendont](nintendont) to play GameCube games from your USB drive or SD card.

:::

::: tip

[Haz clic aquí para volver al índice del sitio.](site-navigation)

:::
