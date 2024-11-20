# Mise à jour du menu Wii vers la v4.3

This tutorial will explain how to update your Wii Menu to version 4.3, if you have already homebrewed your Wii.

::: warning

It is much safer to use [ModMii](modmii) (Windows only) to update your Wii to 4.3.

:::

## Requirements

- a Wii with The Homebrew Channel 1.0.8 or later
  - If you do not have the Homebrew Channel or it is out of date, please [start here](get-started) to (re)install it first.
- Une carte SD ou une clé USB
- A computer with Windows on it
- [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest)
- [Priiloader](priiloader)
- [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

## Instructions

### Section I - Téléchargement

1. Extract the .zip file for NUS Downloader Wii and open the application.
2. Go to `Database...` > `System` > `0000000100000002 - System Menu` and select the version corresponding to your region as shown in the table below.
3. Make sure `Pack WAD` is checked.
4. Press `Start NUS Download!`.
5. Open the `titles` -> `0000000100000002` -> (Wii Menu version) and copy the .wad file to a folder called `wad` on your SD Card or USB drive.
6. Repeat steps 2-5 with `IOS` -> `000000010000003A` -> `Latest Version` and `IOS` -> `0000000100000050` -> `Latest Version`.
7. After you have copied all 3 `.wad` files, eject your SD card/USB drive from your PC and put it back into your Wii.

| Region | Wii Menu version                               |
| ------ | ---------------------------------------------- |
| Japan  | v512 (4.3J) |
| USA    | v513 (4.3U) |
| Europe | v514 (4.3E) |
| Korea  | v518 (4.3K) |

### Section II - Installation

1. Power off your console. Start holding RESET, then turn it back on.
2. In the Priiloader menu, select `Homebrew Channel`.
   - If the Priiloader menu does not appear, please [install it immediately](priiloader). Priiloader is required for this guide.
3. Launch YAWM ModMii Edition.
4. Select your SD card or USB drive.
5. Press `+` to one the IOS80 and IOS58 WADs to highlight them, then press A twice to install.
6. Navigate to the Wii Menu WAD and press A twice to install it.
7. When prompted to retain Priiloader, press A to confirm.
8. After they are successfully installed, press the HOME Button to exit back to the Homebrew Channel.

::: tip

[Click here to go back to the site index.](site-navigation)
{: .notice--info}

:::
