# Relaunching the HackMii Installer

This guide is intended for situations where you need to relaunch the HackMii Installer to update/reinstall the Homebrew Channel or BootMii.

::: info

It is also safe to [redo any exploit](get-started) to get back into the HackMii Installer.

:::

## Relaunching via the Homebrew Channel

### Requirements

* The Homebrew Channel
* An SD card or USB drive formatted to FAT32/MS-DOS
* [HackMii Installer v1.2](https://bootmii.org/download/)

### Instructions

1. Insert your SD/USB into your PC.
1. Extract the HackMii Installer v1.2 to the `apps` folder on your SD/USB.
    + If this folder does not exist, create it.
1. Insert the SD/USB into your Wii, and launch the `hackmii_installer_v1.2` app from the Homebrew Channel.
    + The app will not have an icon.

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::

## Relaunching via Priiloader

### Requirements
* a Wii with Priiloader (or Preloader) installed
* An SD card or USB drive formatted to FAT32/MS-DOS
* [HackMii Installer v1.2](https://bootmii.org/download/)

::: info

To check if your Wii has Priiloader, hold the RESET button while turning it on.

:::

::: warning

Preloader and older versions of Priiloader do not seem to support SDHC (>2GB) cards.

:::

### Instructions

1. Insert your SD/USB into your PC.
1. Copy the `boot.elf` file inside the HackMii Installer v1.2 `.zip` to the root of your SD card or USB drive.
1. Insert your SD/USB into your Wii.
1. Enter Priiloader by holding the RESET button while turning on your Wii.
1. Go to `Load/Install File`.
1. Navigate to `boot.elf` and press `1` to load it.

::: info

If `Press (1) to continue` does not show up after about 30 seconds, downloading [HackMii Installer v1.0](https://bootmii.org/download/) may help.

:::

---

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::
