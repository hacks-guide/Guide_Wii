---
title: "Installing Wii Menu Themes"
---

{% include toc title="Table of Contents" %}

This guide is intended for regular Wiis only. For installing themes on vWii (Wii U), follow [this page](themes-vwii). Additionally, forwarders are covered.

DO NOT CONTINUE WITH THIS GUIDE UNLESS YOU HAVE ADEQUATE BRICK PROTECTION, SPECIFICALLY [BOOTMII](bootmii) AND [PRIILOADER](priiloader)!
{: .notice--danger}

For safety purposes, please do not use any other version of MyMenuify than the one linked here, as MyMenuify Mod is the safest way to install a theme.
{: .notice--warning}

Do not use any other version of ThemeMii than the one linked here, as ThemeMii Mod allows you to make a theme for Wii Menu version 4.3, other versions may not.
{: .notice--warning}

### Section I - Finding a Theme

Only install themes on your Wii that have been formatted specifically for it, and its current region. Installing themes from the wrong region or version on your Wii will cause a brick. This tutorial will tell you how to create a .csm file that is safe to install.
{: .notice--danger}

Before proceeding, it helps to know the difference between .MYM and .CSM as file formats when used in Wii Menu theming. While the MYM is made by the theme creator which can then be shared around, the CSM is the result from building a MYM into a system menu. In other words, MYM mainly just holds assets - the actual system menu itself that needs to be installed comes seperate.
{: .notice--info}

#### Theme Links

+ https://gbatemp.net/threads/wii-theme-team-creations-v2.336596/
+ [Wii Theme Google Drive](https://drive.google.com/drive/folders/1H8bKkZa5Nwy7tBmDvKEVXhoZStucpUr3) (.mym file distribution)
+ https://gbatemp.net/download/categories/other-files.166/
+ [Wii Themer](http://www.wiithemer.org/) (online theme builder for specific versions and regions, ready to install .csm themes)

#### Requirements

* Some themes have different links for different regions, so pick the one corresponding to your Wii's region.
* An SD card or USB drive
* Below are some links to themes.
* [MyMenuify Mod](https://oscwii.org/library/app/mymenuifymod)
* [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)

#### Section II - Building the Theme

If you don't want to go through the hassle of using an external program to build a theme, you can also download a prebuilt theme from Wii Themer and skip to [Theme Installation](themes#theme-installation).

1. Once you downloaded the theme you want and double-checked you got the right one, extract the .zip file for ThemeMii Mod and open the application.
1. Go to `Tools` > `Download Base App` > Version of your Wii Menu > Region of your Wii Menu
1. A dialog box will pop up asking you to enter in a value to create a key. Enter in what it says, it will create a key that will be used to decrypt the Wii Menu contents from Nintendo's servers.
1. A file selection box will ask you where to save the .app file (that is the Wii Menu content file it downloaded). Save it to the directory where ThemeMii is in.
1. Go to `File` > `Open`, then browse for where your .mym file is.
1. Press `Create csm`, then browse for a directory you want to save the theme in. Give it a moment to build the theme.
1. A dialog box will pop up asking you if you want to save the .mym. Press `No`.

#### Section III - Installing the Theme

1. Launch MyMenuify Mod from the Homebrew Channel.
1. Put the .csm file you saved in a folder called `modthemes` on your SD card or USB drive.
1. Press `Create csm`, then browse for a directory you want to save the theme in. Give it a moment to build the theme.
1. You probably will pick the download link that says 4.X, that means the theme will work on version 4.1, 4.2 and 4.3 of the Wii Menu.
1. Go into MyMenuifyMod, and acknowledge the disclaimer. After an introduction message, it will ask you what IOS you want to use in the app. Select `IOS58`.

    If the former gives an `Exception DSI occurred!` error, press Reset on the Wii console, launch it again, then try `IOS250`.
    {: .notice--info}

1. Select your storage medium, and you should now see a selection of your themes.

    ![](/images/themes/mym-theme-selection.png)

1. Find a theme you want to install. If it is signed, MyMenuifyMod will indicate it to you, otherwise it will warn you. Be absolutely sure at this point that you have downloaded the correct theme for your system menu version and region.
1. Install the theme.
1. Highlight the theme you want to install, then press A. Give it a moment to install the theme, then press any button to go to the Wii Menu. Hopefully, the theme installed correctly. If all goes well, you will have a result similar to the below!

    ![](/images/themes/themed-wii-menu.png)

### RiiConnect24 Themes Page

Unfortunately, because of the codebase difference between the original WiiFlow and the newer WiiFlow Lite, themes are sparse - in fact, only one theme could be found that confidently works on the newer version. The instructions for installing that theme are below.

#### Requirements

* Wii Theme Team Creations v2
* https://drive.google.com/drive/folders/1K1WQe36bGibsF4ZlAxZKU6ngNpjUnh5i
* [http://www.wiithemer.org/](wii-loaders#wiiflow-lite)
* What you need
* [Rhapsodii Shima](https://gbatemp.net/threads/rhapsodii-shima-5-4.555062/)

#### Instructions

1. Have the storage device that holds WiiFlow Lite connected to your PC.
1. Download the Rhapsodii Shima archive, either version of the theme works and can be installed side-by-side with no issues.
1. Extract and copy the `wiiflow` folder to the root of your storage device, merge all folders and overwrite all files when requested.
1. Follow the theme setup and theme configuration instructions in `installation.txt`. Enjoy the theme!

### USB Loader GX Theming

#### Requirements

* Wii Themer
* Extract MyMenuifyMod.zip to your SD card or USB drive.
* [USB Loader GX](wii-loaders#usb-loader-gx)
* If you need help for anything regarding this tutorial, please join [the RiiConnect24 Discord server](https://discord.gg/rc24) (recommended) or [e-mail us at support@riiconnect24.net](mailto:support@riiconnect24.net).
* A [theme](https://gbatemp.net/threads/dark-wii-usb-loader-gx-themes.584493/), this link contains an assortment of dark themes

#### Instructions

1. Download a theme `.zip` file from the website linked above, or anywhere else you can get a proper theme.
1. Unpack the `.zip` file's contents into the `apps\usbloader_gx` directory on the storage device where you installed USB Loader GX.
1. Insert your SD card or USB drive into your Wii.
1. Start USB Loader GX, go to the `Settings` menu, and then go to `Theme Menu`.
1. Open the theme and install it.

### Homebrew Channel Theming

#### Requirements

* A Wii
* Google Drive Repository
* A computer with Windows on it (or using Mono or Wine on Mac/Linux)
* https://rc24.xyz/goodies/themes/

#### Instructions

1. Download a theme `.zip` file from the website linked above.

    ![](/images/themes/homebrew-channel-example-theme.png)

1. Paste the `.zip` into the `apps` folder on your storage device where you load homebrew.

    ![](/images/themes/homebrew-channel-paste-zip.png)

1. Extract the contents of the `.zip` into the `apps` folder, and delete the archive.

    ![](/images/themes/homebrew-channel-extract-theme.png)

1. Go to `Options` > `Standard System Menu` > Version of your Wii Menu > Region of your Wii Menu
1. The theme you just installed can be loaded in the same way that you access a standard app.

    ![](/images/themes/homebrew-channel-load-theme.png)

1. The theme should now be loaded, enjoy!

    ![](/images/themes/homebrew-channel-theme-done.png)

### App Forwarders

App forwarders can add a bit of extra flair to your Wii Menu - but be careful with them as bad forwarders can cause a [banner brick](bricks#banner-brick). Generally, you can find forwarders on places like [GBAtemp](https://gbatemp.net/threads/wii-forwarder-repository.588781/) for popular apps such as emulators. Since forwarders come in a .WAD format, the process of installing them is as simple as normal usage with [YAWM ModMii Edition](yawmme).


[Click here to go back to the site index.](site-navigation)
{: .notice--info}
