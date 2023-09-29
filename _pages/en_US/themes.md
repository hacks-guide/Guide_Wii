---
title: "Installing Wii Menu Themes"
---

{% include toc title="Table of Contents" %}

Are you tired of the boring, plain white theme on your Wii Menu, and want a cool theme instead? This tutorial will help you get a new theme for your Wii Menu!

To protect against bricks, [make sure you install Priiloader](priiloader). Also, install [BootMii](bootmii) (as Boot2 if you have an early Wii, otherwise IOS). Installing brick protection along with following the guide correctly should keep you safe from bricks. DO NOT CONTINUE UNTIL YOU HAVE INSTALLED PRIILOADER AND BOOTMII!
{: .notice--danger}

Only install themes on your Wii that have been formatted specifically for it, and its current region.
Installing themes from the wrong region or version on your Wii will cause a brick. This tutorial will tell you how to create a .csm file that is safe to install.
{: .notice--danger}

This guide is intended for regular Wiis only.
For installing themes on vWii (Wii U), follow [this page](themes-vwii).
{: .notice--warning}

For safety purposes, please do not use any other version of MyMenuify than the one linked here, as MyMenuify Mod is the safest way to install a theme.
{: .notice--warning}

Do not use any other version of ThemeMii than the one linked here, as ThemeMii Mod allows you to make a theme for Wii Menu version 4.3, other versions may not.
{: .notice--warning}

We recommend you [install cIOS](cios) before continuing.
{: .notice--info}

#### What you need

* A Wii
* An SD card or USB drive
* A computer with Windows on it (or using Mono or Wine on Mac/Linux)
* [MyMenuify Mod](https://oscwii.org/library/app/MyMenuifyMod)
* [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)

#### Theme Links

Below are some links to themes.

* [RiiConnect24 Themes Page](https://rc24.xyz/goodies/themes/)
* [GBAtemp Download](https://gbatemp.net/download/categories/other-files.166/)
* [Google Drive Repository](https://drive.google.com/drive/folders/1K1WQe36bGibsF4ZlAxZKU6ngNpjUnh5i)
* [Wii Themer](http://www.wiithemer.org/)
* [Wii Theme Team Creations v2](https://gbatemp.net/threads/wii-theme-team-creations-v2.336596/)

MAKE SURE YOU READ THE WARNINGS ABOVE BEFORE CONTINUING!
{: .notice--danger}

#### Instructions

##### Section I - Finding a Theme

* Find a theme you want to install. Some themes have YouTube videos to show what the theme looks like, but unfortunately some of the videos are no longer available.
* Once you found one you like, click the download link corresponding to your Wii Menu version. **It's very important to pick the correct version to avoid bricks.**
* You probably will pick the download link that says 4.X, that means the theme will work on version 4.1, 4.2 and 4.3 of the Wii Menu.
* Some themes have different links for different regions, so pick the one corresponding to your Wii's region.
* There are other resources for Wii Menu themes, but they might be in csm form (ready to install on the Wii). If the csm doesn't match the version and region of your Wii Menu, try to convert it to mym with ThemeMii Mod, and then convert it back to csm with the instructions here using the version and region of your Wii Menu.
* Once you downloaded the theme you want and double-checked you got the right one, extract the .zip file for ThemeMii Mod and open the application.

##### Section II - Building the Theme

1. A dialog box will pop up telling you to only install themes if you have brick protection. If you installed Priiloader and/or BootMii (see the warning at the start of this guide), press OK.
1. Go to `Tools` > `Download Base App` > Version of your Wii Menu > Region of your Wii Menu
1. A dialog box will pop up asking you to enter in a value to create a key. Enter in what it says, it will create a key that will be used to decrypt the Wii Menu contents from Nintendo's servers.
1. A file selection box will ask you where to save the .app file (that is the Wii Menu content file it downloaded). Save it to the directory where ThemeMii is in.
1. Go to `Options` > `Standard System Menu` > Version of your Wii Menu > Region of your Wii Menu
1. Go to `File` > `Open`, then browse for where your .mym file is.
1. Press `Create csm`, then browse for a directory you want to save the theme in. Give it a moment to build the theme.
1. A dialog box will pop up asking you if you want to save the .mym. Press `No`.

##### Section III - Installing the Theme

1. Extract MyMenuifyMod.zip to your SD card or USB drive.
1. Put the .csm file you saved in a folder called `modthemes` on your SD card or USB drive.
1. Insert your SD card or USB drive into your Wii.
1. Launch MyMenuify Mod from the Homebrew Channel.
1. After an introduction message, it will ask you what IOS you want to use in the app. If you have [installed cIOS](cios), use `IOS249`, or else use `IOS58`. If the former gives an `Exception DSI occurred!` error, press Reset on the Wii console, launch it again, then try `IOS250`. It might take a couple attempts to reload the IOS.
1. Highlight the theme you want to install, then press A. Give it a moment to install the theme, then press any button to go to the Wii Menu. Hopefully, the theme installed correctly.

If you get an error saying "The system files are corrupted" or a black screen, don't panic as long as you installed Priiloader. Turn off your Wii, then hold down the RESET button down and turn on your Wii. You should be able to boot into the Priiloader menu, where you have some options to fix your Wii Menu. One of the options is to launch the Homebrew Channel, where you can launch MyMenuify Mod and press a button to download and install the original Wii Menu theme.
{: .notice--info}
