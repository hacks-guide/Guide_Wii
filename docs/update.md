# Updating Wii Menu to v4.3

This tutorial will explain how to update your Wii Menu to version 4.3, if you have already homebrewed your Wii.

::: warning

It is much safer to use [ModMii](modmii) (Windows only) to update your Wii to 4.3.

:::

## Requirements

* a Wii with The Homebrew Channel 1.0.8 or later
    * If you do not have the Homebrew Channel or it is out of date, please [start here](get-started) to (re)install it first.
* An SD card or USB drive
* A Windows/MacOS/Linux computer
* [NUSGet](https://github.com/NinjaCheetah/NUSGet/releases/latest/)
* [Priiloader](priiloader)
* [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

## Instructions

### Section I - Downloading

1. Download the archive corresponding to your operating system. For Windows users, you should get `NUSGet-Windows-x86_64-onefile-bin.zip`.
1. Unzip the archive and run NUSGet.
1. Go to `System` > `0000000100000002 - System Menu` > `Your Region` and then select the latest 4.3 version of the menu (e.x. `v513 4.3U` for USA). Uncheck `Keep encrypted contents` and press `Start Download`.

    ![](/images/desktop-apps/nusget/nusget-wiimenu-dl-alt.png)
1. Go to `System` > `000000010000003A - IOS 58` > `Latest Version`. Uncheck `Keep encrypted contents` and press `Start Download`.

    ![](/images/desktop-apps/nusget/nusget-ios58-dl.png)
1. Go to `System` > `0000000100000050 - IOS 80` > `Latest Version`. Uncheck `Keep encrypted contents` and press `Start Download`.

    ![](/images/desktop-apps/nusget/nusget-ios80-dl.png)
1. When you have finished downloading the above IOS, locate a folder named `NUSGet Downloads` in the same directory as your NUSGet executable. This contains your WAD files.

    ![](/images/desktop-apps/nusget/nusget-folder.png)
1. Go into the folders corresponding to the title numbers for the above, and locate the singular WAD file in each. You will need to copy these to a folder called `wad` on your SD card or USB drive.
1. After you have copied all 3 `.wad` files, eject your SD card/USB drive from your PC and put it back into your Wii.



### Section II - Installing

1. Power off your console. Start holding RESET, then turn it back on.
1. In the Priiloader menu, select `Homebrew Channel`.
    * If the Priiloader menu does not appear, please [install it immediately](priiloader). Priiloader is required for this guide.
1. Launch YAWM ModMii Edition.
1. Select your SD card or USB drive.
1. Press + on the IOS80 and IOS58 WADs to highlight them, then press A twice to install.
1. Navigate to the Wii Menu WAD and press A twice to install it.
1. When prompted to retain Priiloader, press A to confirm.
1. After they are successfully installed, press the HOME Button to exit back to the Homebrew Channel.

::: tip

[Click here to go back to the site index.](site-navigation)

:::
