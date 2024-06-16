---
title: Finalizing Setup
---

{% include toc title="Sumário" %}

## Finalizing Setup

Now that the Homebrew Channel, Priiloader, and cIOS are installed, we are going to finalize the setup.

### Downloading and Installing the Wii Mii Channel

The Mii Channel on the vWii lacks some features, such as connecting to a DS and moving Mii's onto a Wii remote. You have the option of downloading the original Mii Channel WAD from Nintendo and installing it with a [WAD manager](yawmme).

1. Download this script for [Windows](/assets/files/Wii_Mii_Channel_Windows.ps1) or [Mac/Linux](/assets/files/Wii_Mii_Channel_Unix.command)

#### Windows

1. Right click the file and select `Run With PowerShell`
2. Type `R` to run the script
3. When it is done, place the `Mii Channel v6 (Wii).wad` in a folder on your SD card titled `WAD`. You can make one if it does not exist.

#### Mac

1. Double click on the file. It should automatically run.
2. When it is done, place the `Mii Channel v6 (Wii).wad` in a folder on your SD card titled `WAD`. You can make one if it does not exist.

#### Linux

1. Open a terminal in the directory of the file, then type `./Wii_Mii_Channel_Unix.command`
2. When it is done, place the `Mii Channel v6 (Wii).wad` in a folder on your SD card titled `WAD`. You can make one if it does not exist.

#### Installing

1. You can install `Mii Channel v6 (Wii).wad` with [YAWM Modmii Edition](yawmme)

If you get error -1029 while installing, uninstall the wad, then reinstall it. This does not affect your Miis as they are stored in a different place on the NAND.
{: .notice--info}

### Additional Homebrew Apps

All homebrew apps are loaded from the Homebrew Channel.
{: .notice--info}

- Patched IOS 80 Installer for vWii is a homebrew app that will take your current install of IOS 80 and patch it to be able to use fakesigned channels on the SD card menu.
- Photo Upgrader is a homebrew app that allows photo channel 1.1 to be installed on the vWii even though it is normally not possible.
- 43db patcher is a homebrew app that will patch your WiiWare and virtual console titles to force the 16:9 aspect ratio.

### Additional Homebrew Apps - What You Need

- [Patched IOS 80 Installer for vWii](https://oscwii.org/library/app/Patched_IOS80_Installer_for_vWii)
- [Photo Upgrader](https://oscwii.org/library/app/photo_upgrader)
- [WW-43DB-Patcher](https://oscwii.org/library/app/ww-43db-patcher)

### Additional Homebrew Apps - Extracting Files to the SD Card

1. Copy the contents of the Patched IOS 80 Installer for vWii to the root of the SD.
2. Copy the contents of the Photo Upgrader to the root of the SD.
3. Copy the contents of the WW-43DB-Patcher to the root of the SD.

Running Wii virtual console games on the Wii U menu will overwrite the SYSCONF, which may affect some priiloader hacks such as the ones used for enabling WiiConnect24.
{: .notice--info}

Continue to [Open Shop Channel Installation](osc) <br>
Now that your main vWii setup is complete, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii.
{: .notice--info}
