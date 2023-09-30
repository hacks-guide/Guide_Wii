---
title: "Installing Wii Menu Themes on vWii"
---

{% include toc title="Table of Contents" %}

Are you tired of the boring, plain white theme on your Wii Menu, and want a cool theme instead? This tutorial will help you get a new theme for your Wii Menu!

Installing a theme after installing Priiloader WILL BRICK YOUR VWII.
{: .notice--danger}

We are **NOT** responsible if you brick, or damage your console in any way whatsoever. If you follow this guide exactly, you shouldn't have any problems.
{: .notice--danger}

Do **NOT** install the themes made in this guide on an actual Wii. They are only compatible with the vWii System Menu and will brick an actual Wii.
{: .notice--danger}

There are some themes that aren't compatible with the vWii System Menu, they may result in anything from graphical glitches to a full theme brick. We recommend only using themes from [rc24.xyz/goodies/themes](https://rc24.xyz/goodies/themes/) since these are compatible with modern versions of the System Menu.
{: .notice--warning}

If you somehow happen to brick your vWii, [follow this guide](https://gbatemp.net/threads/guide-vwii-unbrick-guide-by-garyodernichts.528329). ([Archive](https://web.archive.org/web/20200213194233/https://gbatemp.net/threads/guide-vwii-unbrick-guide-by-garyodernichts.528329/))
{: .notice--info}

#### What You Need

* A Wii U with the Homebrew Channel installed.
* An SD card or USB drive
* A computer with Windows on it (or using Mono or Wine on Mac/Linux)
* [MyMenuifyMod](https://oscwii.org/library/app/MyMenuifyMod)
* [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)
* [NUS Downloader (vWii)](/assets/files/NUSDownloader-vwii.zip)

#### Theme Links

Below are some links to themes.

* [RiiConnect24 Themes Page](https://rc24.xyz/goodies/themes/)
* [GBAtemp Download](https://gbatemp.net/download/categories/other-files.166/)
* [Google Drive Repository](https://drive.google.com/drive/folders/1K1WQe36bGibsF4ZlAxZKU6ngNpjUnh5i)
* [Wii Themer](http://www.wiithemer.org/)
* [Wii Theme Team Creations v2](https://gbatemp.net/threads/wii-theme-team-creations-v2.336596/)

Only themes from the RiiConnect24 Themes page have been tested on vWii.
Themes from other sources may not be entirely compatible with vWii, use these at your own risk.
{: .notice--warning}

MAKE SURE YOU READ THE WARNINGS ABOVE BEFORE CONTINUING!
{: .notice--danger}

#### Instructions

##### Section I - Finding a Theme

* When choosing a theme, it is important to make sure that your theme is compatible with the vWii System Menu. 

* Older themes for 3.X or 2.X are **NOT** compatible with vWii and may cause a brick if used.

* Most of the themes on RiiConnect24's theme page have been tested on vWii and they are known to work.

##### Section II - Downloading .app files

This assumes your vWii is on the latest Wii Menu version.
{: .notice--warning}

There are a couple of ways to get the .app files for your vWii System Menu, in this guide we'll be using the vWii version of NUS Downloader.

1. Extract the .zip file for NUS Downloader vWii and open the application
2. Click on `Database...`
3. Go to `System` > `System Menu` and select the version corresponding to your region as shown in the table below.

| Region	| vWii Menu version		|
| ---------	| --------------------	|
| Japan 	| v608 					|
| USA   	| v609					|
| Europe	| v610 					|

After selecting the correct version to download, check the box for `Create Decrypted Contents (*.app)`. Then, press the `Start NUS Download` Button on the top of the window.

![The database menu in NUS Downloader.](/images/themes-vwii/NUSD-vWii_preview-database.png)

![The main menu of NUS downloader without the database menu open.](/images/themes-vwii/NUSD-vWii_sysmenu-versions.png)

After the download has finished, search for the .app file corresponding to your region in the folder where NUS Downloader is.

| Region 	| .app file for your region	|
| ---------	| -------------------------	|
| Japan		| 0000001c.app				|
| USA		| 0000001f.app				|
| Europe	| 00000022.app				|

If you can't find the .app file, it's possible you have downloaded the wrong version of the Wii Menu and you'll need to try again.

After you find the .app file, copy it to the main directory of the folder containing ThemeMii. Then, copy a version of it to the theme folder in your SD card.

##### Section III - Building the Theme

1. Launch ThemeMii Mod.
2. Do not click `Download Base App`, ThemeMii does not have base .app files for vWii. If you download a base app, you must delete it in order to use the vWii .app file.
3. In ThemeMii select `File` -> `Open` and navigate to the .mym theme you downloaded earlier.
4. Click on `Create CSM` and select the .app file that you copied to the ThemeMii folder.
5. Now navigate to the `theme` folder on your SD card and save your theme with the .csm extension.

![ThemeMii Menu](/images/themes-vwii/ThemeMii-Mod-Preview_vWii.png)

##### Section IV - Installing the Theme

1. Eject your SD card from your PC and put it into your Wii U.
2. Start the Homebrew Channel and launch MyMenuifyMod.
3. Select the .csm file you just created.
4. When it prompts you to install the theme say `Yes`, and wait for it to finish.
5. When it finishes installing, MyMenuifyMod will prompt you to either `Continue` or `Exit`, choose `Exit`.

If you did everything correctly, you should now have your custom theme installed on your Wii Menu.

##### Reverting to Original Theme

1. Launch the Homebrew Channel.
2. Launch MyMenuify and navigate to your theme folder.
3. Select the .app file you copied to the SD card at the end of section 2 as if you were installing a theme.
4. Select Install and wait until it finishes.
5. When it's done, you can exit MyMenuify.
