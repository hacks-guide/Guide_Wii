---
title: "WiiFlow"
---

{% include toc title="Table of Contents" %}

![WiiFlow](/images/homebrew/wiiflow/wiiflowlogo.png)

This is a quick start guide on how to use WiiFlow, a USB loader for the Wii that's used to play games from a USB drive or SD card.

### Requirements

* A Wii
* A USB drive and/or SD card
* [WiiFlow Lite](https://oscwii.org/library/app/wiiflow)

Make sure you have installed [cIOS](/cios) before following this!
{: .notice--info}

To copy game backups over, use [Wii Backup Manager](/wiibackupmanager) if you use Windows, [Witgui](https://desairem.com/wordpress/category/witgui-download/) if you use macOS, or [Wii Backup Fusion](https://github.com/larsenv/Wii-Backup-Fusion) for Windows, macOS, and Linux.
{: .notice--info}

If you want to play games that are in NKit format, use [this program](https://gbatemp.net/download/nkit.36157/) to convert them to ISO first.
{: .notice--info}

If you are not copying games using Wii Backup Manager, Witgui, or Wii Backup Fusion, make a folder on the root of the USB drive or SD card named "wbfs" and put the games in there.
{: .notice--info}

To play games, you are advised to use a large SD card or an external hard drive, flash drives are very sporadic in functionality. See [storage FAQ](faq).
{: .notice--info}

Make sure your USB drive is formatted as FAT32. Do not format it as other types such as exFAT or extFS. <br>
You may format it as NTFS, but it won't work with a majority of apps (eg. The Homebrew Channel, Nintendont)
{: .notice--info}

WiiFlow can load games from an SD card or a USB drive.
{: .notice--info}

### Instructions

#### Downloading

1. Extract WiiFlow and put the `apps` and `WiiFlow` folders on your USB drive or SD card.
1. Insert your USB drive, and SD card if you're using one, into your Wii and launch WiiFlow from the Homebrew Channel.

#### Getting Started

This is not a full comprehensive guide on using WiiFlow. This is intended to help you learn how to use it, by giving you a quick start. You should be able to figure out all the great features of WiiFlow by using it.
{: .notice--info}

+ WiiFlow by default is set to only find games on the SD card. This can be changed by going in to settings, startup settings then turn off "Mount SD Only".
+ You can toggle between viewing Wii games, GameCube games, Wii Channels, Plugins, Homebrew apps by clicking the button second to last button on the right.
+ You can download game covers by going to "Settings" then "Download Covers and Banners"

#### User Interface

When WiiFlow detects games, they are displayed in flow view. When you click on a game you are given these options:

+ Star - Adds game to favorites.
+ Bookshelf - Adds the game to 1 of 6 categories of your choosing.
+ Gears - Opens the settings menu for the specific game. Changing settings here will only effect the game you changed the settings for.
+ X - Deletes the game from the USB drive or SD card

When you bring the cursor to the bottom of the screen while in flow view, there are 6 icons:

+ Bookshelf - View the games that are sorted in the categories you chose.
+ Star - View games you favorited.
+ Gears - Opens WiiFlow Settings.
+ Game Type - Toggles between different types of apps/games. The logo changes depending on what game type you have selected.
+ Disc - Loads game that is in disc drive.
+ House - Will open this menu. This menu can also be launched by pressing the home button.

![WF_menu](images/homebrew/wiiflow/WFmenu.png)

+ Help Guide - Shows all the controls you can use in WiiFlow.
+ Reload Cache - Press this when WiiFlow is not detecting a new game on the USB drive or SD card.
+ File Explorer - Allows you to boot games/apps from anywhere on your USB drive or SD card.
+ Select Plugins - Allows you to select plugins.
+ Credits - Shows the people who worked on WiiFlow.
+ Shutdown - Allows you to either go into full shutdown, or Standby mode.
+ Exit To - Lets you exit to Wii Menu, HBC, neek2o, Priiloader and Bootmii.
+ Settings - Will open the WiiFlow Settings menu

#### Options once complete

[Continue to site navigation](site-navigation)<br>
We have many other tutorials that you might like.
{: .notice--info}
