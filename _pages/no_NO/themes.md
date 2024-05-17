---
title: "Installing Wii Menu Themes"
---

{% include toc title="Table of Contents" %}

This guide is intended to be the last you will ever need when it comes to theming on the Wii, not only providing instructions for the Wii Menu through csm-installer, but also with themes on WiiFlow Lite, USB Loader GX, and The Homebrew Channel. Additionally, forwarders are covered.

### Wii Menu Theming

DO NOT CONTINUE WITH THIS GUIDE UNLESS YOU HAVE ADEQUATE BRICK PROTECTION, SPECIFICALLY [BOOTMII](bootmii) (Wii only) AND [PRIILOADER](priiloader)!
{: .notice--danger}

This tutorial does not work on the Wii mini. Do not attempt this tutorial on the Wii mini or it will cause a [brick](bricks#theme-brick).
{: .notice--warning}

csm-installer has built in safety features to prevent from installing bad or corrupt Wii Menu themes, so please opt to use it instead of other theme installation homebrew.
{: .notice--warning}

Do not use any other version of ThemeMii than the one linked here, as ThemeMii Mod allows you to make a theme for Wii Menu version 4.3, other versions may not.
{: .notice--warning}

Only install themes on your Wii that have been formatted specifically for its version and current region. Installing themes from the wrong version or region on your Wii will cause a [brick](bricks#theme-brick). This tutorial will tell you how to create a .csm file that is safe to install.
{: .notice--danger}

Before proceeding, it helps to know the difference between .MYM and .CSM as file formats when used in Wii Menu theming. While the MYM is made by the theme creator which can then be shared around, the CSM is the result from building a MYM into a system menu. In other words, MYM mainly just holds assets - the actual system menu itself that needs to be installed comes seperate.
{: .notice--info}

#### What you need

+ A Wii
+ An SD card or USB drive
+ A computer with Windows on it (or using Mono or Wine on Mac/Linux)
+ [Wii Themer](http://www.wiithemer.org/) (Wii only, online theme builder for specific versions and regions, ready to install .csm themes)

#### Theme Links

##### Wii

* A modded Wii
* An SD card or USB device
* A Windows/macOS/Linux PC with an Internet connection
* [csm-installer](https://oscwii.org/library/app/csm-installer)
* [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)

##### vWii

* A modded vWii
* An SD card or USB device
* A Windows/macOS/Linux PC with an Internet connection
* [csm-installer](https://oscwii.org/library/app/csm-installer)
* [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)
* [NUS Downloader (vWii)](/assets/files/NUSDownloader-vwii.zip)

#### Building a Theme

##### Wii

If you don't want to go through the hassle of using an external program to build a theme, you can also download a prebuilt theme from Wii Themer and skip to [Theme Installation](themes#theme-installation).
{: .notice--info}

1. Once you download the theme you want and double-check that you have the right one for your system menu version and region, extract the .zip file for ThemeMii Mod and open the application.
2. Go to `Tools` > `Download Base App` > Version of your Wii Menu > Region of your Wii Menu
3. A dialog box will pop-up asking you to enter in a value to create a key. Enter what it says, and it will create a key that will be used to decrypt the Wii Menu contents from Nintendo's servers.
4. A file selection box will ask you where to save the .app file (that is the Wii Menu content file that it downloaded). Save it to the directory where ThemeMii is in.
5. Go to `File` > `Open`, then browse for where your .mym file is.
6. Press `Create csm`, then browse for a directory you want to save the theme in. Give it a moment to build the theme.
7. A dialog box will pop up asking you if you want to save the .mym. Press `No`.

##### vWii

Themes from [Wii Themer](http://www.wiithemer.org/) cannot be built automatically for you on the vWii, since it does not use the correct base app. However, you may still download the .mym files from their [theme database](http://wiithemer.org/mym/) to build manually.

Some themes are compatible with the Wii system menu, but aren't compatible with the vWii System Menu, and may result in graphical glitches or even a full [theme brick](bricks#theme-brick).
{: .notice--warning}

1. Extract the .zip file for NUS Downloader vWii and open the application
2. Click on `Database...`
3. Go to `System` > `System Menu` and select the version corresponding to your region as shown in the table below.

| Region | vWii Menu version |
| ------ | ----------------- |
| Japan  | v608              |
| USA    | v609              |
| Europe | v610              |

4. After selecting the correct version to download, check the box for `Create Decrypted Contents (*.app)`. Then, press the `Start NUS Download` Button on the top of the window.

![The database menu in NUS Downloader.](/images/themes/NUSD-vWii_preview-database.png)

![The main menu of NUS downloader without the database menu open.](/images/themes/NUSD-vWii_sysmenu-versions.png)

5. When the download has finished, search for the .app file corresponding to your region in the folder where NUS Downloader is.

| Region | .app file for your region |
| ------ | ------------------------- |
| Japan  | 0000001c.app              |
| USA    | 0000001f.app              |
| Europe | 00000022.app              |

6. Once you have found the .app file, copy it to the main directory of the folder containing ThemeMii. Then, copy a version of it to the theme folder in your SD card.

If you can't find the .app file, it's possible you have downloaded the wrong version of the Wii Menu and you'll need to try again.
{: .notice--info}

#### Theme Installation

1. Extract the csm-installer `.zip` file to the root of your SD card or USB device.
2. Create a new directory on your SD card or USB device called `themes` if it does not already exist.
3. Copy your `.csm` file to the `themes` directory.
4. Insert your SD card or USB drive into your Wii/Wii U, and launch the Homebrew Channel.
5. Launch csm-installer, and wait for it to load.
6. Select the theme you would like to install with `A`. Be absolutely sure at this point that you have downloaded the correct theme for your system menu version and region.
7. Press `+` to install the theme.
8. Reboot into the Wii Menu, and see if the theme successfully installed. If all goes well, you will have a result similar to the below!

    ![](/images/themes/themed-wii-menu.png)

### WiiFlow Lite Theming

Unfortunately, because of the codebase difference between the original WiiFlow and the newer WiiFlow Lite, themes are sparse - in fact, only one theme could be found that confidently works on the newer version. The instructions for installing that theme are below.

#### Requirements

* A modded Wii
* An SD card or USB device
* [WiiFlow Lite](wii-loaders#wiiflow-lite)
* Some themes have different links for different regions, so pick the one corresponding to your Wii's region.
* [Rhapsodii Shima](https://gbatemp.net/threads/rhapsodii-shima-5-4.555062/)

#### Instructions

1. Have the storage device that holds WiiFlow Lite connected to your PC.
2. Download the Rhapsodii Shima archive, either version of the theme works and can be installed side-by-side with no issues.
3. Extract and copy the `wiiflow` folder to the root of your storage device, merge all folders and overwrite all files when requested.
4. Follow the theme setup and theme configuration instructions in `installation.txt`. Enjoy the theme!

### USB Loader GX Theming

#### Requirements

* A modded Wii
* An SD card or USB device
* [USB Loader GX](wii-loaders#usb-loader-gx)
* Some themes have different links for different regions, so pick the one corresponding to your Wii's region.
* A [theme](https://gbatemp.net/threads/dark-wii-usb-loader-gx-themes.584493/), this link contains an assortment of dark themes

#### Instructions

1. Download a theme `.zip` file from the website linked above, or anywhere else you can get a proper theme.
2. Unpack the `.zip` file's contents into the `apps\usbloader_gx` directory on the storage device where you installed USB Loader GX.
3. Launch MyMenuify Mod from the Homebrew Channel.
4. Start USB Loader GX, go to the `Settings` menu, and then go to `Theme Menu`.
5. Open the theme and install it.

### Homebrew Channel Theming

#### Requirements

* A modded Wii
* An SD card or USB device
* A Linux/macOS/Windows PC with an internet connection
* A [theme](https://wiibrew.org/wiki/Homebrew_Channel/Themes) from WiiBrew

#### Instructions

1. Download a theme `.zip` file from the website linked above.

    ![](/images/themes/homebrew-channel-example-theme.png)

2. Paste the `.zip` into the `apps` folder on your storage device where you load homebrew.

    ![](/images/themes/homebrew-channel-paste-zip.png)

3. Extract the contents of the `.zip` into the `apps` folder, and delete the archive.

    ![](/images/themes/homebrew-channel-extract-theme.png)

4. Reinsert the storage device into your Wii and enter the Homebrew Channel.
5. The theme you just installed can be loaded in the same way that you access a standard app.

    ![](/images/themes/homebrew-channel-load-theme.png)

6. The theme should now be loaded, enjoy!

    ![](/images/themes/homebrew-channel-theme-done.png)

### App Forwarders

App forwarders can add a bit of extra flair to your Wii Menu - but be careful with them as bad forwarders can cause a [banner brick](bricks#banner-brick). Generally, you can find forwarders on places like [GBAtemp](https://gbatemp.net/threads/wii-forwarder-repository.588781/) for popular apps such as emulators. Since forwarders come in a .WAD format, the process of installing them is as simple as normal usage with [YAWM ModMii Edition](yawmme).


[Click here to view all of our tutorials that you can find on this website!](site-navigation)
{: .notice--info}
