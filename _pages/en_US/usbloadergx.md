---
title: "USB Loader GX"
---

{% include toc title="Table of Contents" %}

This is a quick start guide on how to use USB Loader GX, a popular USB loader for the Wii that's used to play games from a USB drive.

Despite its name, USB Loader GX is also capable of loading games from an SD Card.
{: .notice--info}

![USB Loader GX](/images/homebrew/USBLoaderGX/usbloadergx.png)

#### Requirements

* A Wii
* A USB drive or SD Card
* [USB Loader GX](https://oscwii.org/library/app/usbloader_gx)

Make sure you have installed [cIOS](/cios) before following this!
{: .notice--info}

We recommend you copy games over with [Wii Backup Manager](/wiibackupmanager) if you use Windows, [Witgui](https://desairem.com/wordpress/category/witgui-download/) if you use macOS, or [Wii Backup Fusion](https://github.com/larsenv/Wii-Backup-Fusion) for Windows, macOS, and Linux.
{: .notice--info}

If you want to play games that are in NKit format, use [this program](https://gbatemp.net/download/nkit.36157/) to convert them to ISO first.
{: .notice--info}

If you are not copying games using Wii Backup Manager, Witgui, or Wii Backup Fusion, make a folder on the root of the USB drive or SD card named "wbfs" and put the games in there.
{: .notice--info}

To play games, we recommend using an external hard drive for your Wii. Flash drives are not recommended, and may vary in behavior even between the same product.
{: .notice--info}

Make sure your USB drive is formatted as FAT32. Do not format it as other types such as exFAT or extFS. <br>
You may format it as NTFS, but it won't work with a majority of apps (eg. The Homebrew Channel, Nintendont)
{: .notice--info}

#### Instructions

##### Downloading

1. Extract USB Loader GX and put it in the `apps` folder on your USB drive or SD card.
1. Insert your USB drive, and SD card if you're using one, into your Wii and launch USB Loader GX from the Homebrew Channel.

##### Getting Started

There is no "guide" to use the USB Loader GX app. This is intended to help you learn how to use it, by giving you a quick start. You should be able to figure out all the great features of USB Loader GX by using it.
{: .notice--info}

+ If USB Loader GX says "Waiting for HDD..." with a 20 seconds countdown, it's likely that it can't find the USB drive. Try to exit out of the app, and then relaunch it after you put the USB drive in the other port of the Wii.
+ You can press the 1 Button on your Wii Remote to open up a dialog to download game covers and artwork from [GameTDB](https://gametdb.com/). It might take a while to download the game covers and artwork, depending on how many games you have.
+ There are WADs that can open up USB Loader GX if you load it from the Wii Menu. This is called a forwarder WAD. An official forwarder WAD can be found [here](https://sourceforge.net/projects/usbloadergx/files/Releases/Forwarders/USB%20Loader%20GX-UNEO_Forwarder_5_1_AHBPROT.wad), and a version for the vWii (Wii U) can be found [here](https://sourceforge.net/projects/usbloadergx/files/Releases/Forwarders/USB%20Loader%20GX-UNEO_Forwarder_5_1_AHBPROT_vWii%20%28Fix%29.wad).
+ GameCube or "custom" Wii games may or may not have a custom banner that USB Loader GX uses. To enable this, find or write `CustomBannersURL = http://banner.rc24.xyz/` in config/GXGlobal.cfg on your USB drive. Then you can use the "Custom Banner" download by pressing the 1 Button on your Wii Remote.

##### User Interface

There are multiple buttons in the USB Loader GX interface.

###### Main Menu

These are the functions the buttons found on the top of the main menu do, from left to right:

+ Star - Shows games that you have marked as "favorites".
+ Search - Lets you search for games by name.
+ Sort - Cycles through sorting methods for games.
+ Platform - Choose to sort games by platform.
+ Category - Sorts games by category.
+ List - Shows games in a list view.
+ Multi-Cover View - Shows games in a multi-cover view.
+ Cover Carousel View - Shows games in a carousel view.
+ Wii Menu View - Shows games in a Wii Menu view.
+ Parental Control - Locks USB Loader GX.
+ Disc - Loads a game via disc.

Pressing any game will allow you to play the game by pressing "Start".

There are also other buttons:

+ (+) Icon - "Install" a game, i.e. loading it from disc and dumping it.
+ Gears - Settings for USB Loader GX.
+ SD card - Remount the SD card.
+ Homebrew - Load homebrew apps.
+ Wii - Open up the HOME Menu, which can also be accessed by pressing the HOME Button on the Wii Remote.
+ Power Button - Turn off your Wii.

On the middle of the bottom of the screen, you can see how much space is free on your USB drive and how many games you have.

[Continue to RiiTag](riitag)<br>
RiiTag is a customizable gamertag for your Wii that USB Loader GX can integrate with. This is optional to set up.
{: .notice--info}

[Continue to site navigation](site-navigation)<br>
We have many other tutorials that you might like.
{: .notice--info}
