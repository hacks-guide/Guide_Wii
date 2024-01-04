---
title: "Relaunching the HackMii Installer"
---

{% include toc title="Table of Contents" %}

This guide is intended for situations where you need to relaunch the HackMii Installer to update/reinstall the Homebrew Channel or BootMii.

It is also safe to [redo any exploit](get-started) to get back into the HackMii Installer.
{: .notice--info}

### Relaunching via the Homebrew Channel

#### 必要なもの

* The Homebrew Channel
* An SD card or USB drive formatted to FAT32/MS-DOS
* [HackMii Installer v1.2](https://bootmii.org/download/)

#### 実行方法

1. Insert your SD/USB into your PC.
1. Extract the HackMii Installer v1.2 to the `apps` folder on your SD/USB.
    + If this folder does not exist, create it.
1. Insert the SD/USB into your Wii, and launch the `hackmii_installer_v1.2` app from the Homebrew Channel.
    + The app will not have an icon.

[Continue to Homebrew Channel and BootMii installation](hbc)
{: .notice--info}

### Relaunching via Priiloader

#### 必要なもの
* a Wii with Priiloader (or Preloader) installed
* An SD card or USB drive formatted to FAT32/MS-DOS
* [HackMii Installer v1.2](https://bootmii.org/download/)

To check if your Wii has Priiloader, hold the RESET button while turning it on.
{: .notice--info}

Preloader and older versions of Priiloader do not seem to support SDHC (>2GB) cards.
{: .notice--warning}

#### 実行方法

1. Insert your SD/USB into your PC.
1. Copy the `boot.elf` file inside the HackMii Installer v1.2 `.zip` to the root of your SD card or USB drive.
1. Insert your SD/USB into your Wii.
1. Enter Priiloader by holding the RESET button while turning on your Wii.
1. Go to `Load/Install File`.
1. Navigate to `hackmii_installer_v1.2` and press `1` to load it.

If `Press (1) to continue` does not show up after about 30 seconds, downloading [HackMii Installer v1.0](https://bootmii.org/download/) may help.
{: .notice--info}

[Continue to Homebrew Channel and BootMii Installation](hbc)
{: .notice--info}
