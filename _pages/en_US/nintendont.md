---
title: "Nintendont"
---

{% include toc title="Table of Contents" %}

Nintendont is a Wii-mode homebrew application that can be used to play GameCube games, as well as Triforce arcade dumps. Nintendont is an interesting app in that it is like a hybrid between an emulator and a virtual machine - while still running GameCube games near exactly at native quality and performance. Further info can be read [here](https://gbatemp.net/threads/nintendont.349258/).

To play games, you are advised to use a large SD card or an external hard drive, flash drives are very sporadic in functionality. See [storage FAQ](faq).
{: .notice--info}

Make sure your storage device is formatted as FAT32. Do not format it to other file systems like NTFS, exFAT, or WBFS.
{: .notice--info}

### Requirements

* A modded Wii
* An SD card or USB device
* [Nintendont](https://oscwii.org/library/app/Nintendont)

### Installation
1. Download Nintendont and extract it to the root of your SD card or USB drive.
1. Insert your SD card or USB device into your Wii, and launch Nintendont from the Homebrew Channel.

### Quick Start Guide

#### Key Features

+ You can use various input devices to play GameCube games. These include GameCube controllers (even via a USB adapter), Wiimotes, Classic Controllers, the Konga, HID USB controllers, Bluetooth controllers, and potentially more.
+ Nintendont has support for virtual memory cards that are saved to an external storage device, from sizes of 51 blocks up to 1019 blocks. Despite this, the recommended max size is 251 blocks per virtual card for maximum compatibility.
+ You can use a fan-made patch to enable online play in some games.
+ Nintendont can be leveraged in either [WiiFlow Lite](wii-loaders#wiiflow-lite) or [USB Loader GX](wii-loaders#usb-loader-gx) for the loading of GameCube games.

#### User Interface

![](/images/usb-loaders/nintendont-ui.png)

Nintendont uses a user interface that is mainly controllable and navigable using a gamepad.

#### Properly Launching Games

Games in Nintendont have to be launched from an external device with a specific folder structure, with the usage of a game ID. Game IDs can be found on [GameTDB](https://www.gametdb.com).<br>
The expected structure for single disc games is as follows:<br>
```
💾SD/USB:
 ┗ 📂games
    ┗ 📂GameName [gameID]
       ┗ 📜game.iso or 📜game.ciso
```

The expected structure for multi disc games is as follows:<br>
```
💾SD/USB:
┗ 📂games
   ┗ 📂GameName [gameID]
      ┣ 📜game.iso or 📜game.ciso
      ┗ 📜disc2.iso or 📜disc2.ciso
```

Here is an example using The Legend of Zelda: The Wind Waker on a USB hard drive:<br>
```
💾SD/USB:
 ┗ 📂games
    ┗ 📂The Legend of Zelda: The Wind Waker [GZLE01]
       ┗ 📜game.iso or 📜game.ciso
```

#### BIOS Setup

You can use an original GameCube BIOS in Nintendont if you have legally obtained one.

1. Rename the BIOS file `iplusa.bin`/`ipljap.bin`/`iplpal.bin` based on its region.
1. Copy it to the root of the storage device where your GameCube games are on.
1. Go into Nintendont settings and verify that `Skip IPL` is turned OFF.

#### Using a HID USB controller with Nintendont

By default, Nintendont selects a controller configuration from an internal list of already mapped controllers. If yours does not automatically work, make sure to check the supported controller list in the article at the top of the page. If you still want to check anyway, you can use [HIDTest](https://oscwii.org/library/app/HIDTest) to determine whether or not your controller will be detected and work with Nintendont.

#### Button combinations for Nintendont in-game

Restart: Resets the game and returns to game's title screen.<br>
Shutdown: Exits nintendont and returns to the loader.<br>

Some games may have native button combinations to reset.

**GameCube Controller:**<br>
Restart: R+Z+Start<br>
Shutdown: R+Z+B+Down (D-pad)

**Wiimote + Nunchuck:**<br>
Shutdown: HOME button on the Wiimote

**HID-USB controller or adapter:**<br>
You can define the Shutdown button's combination yourself.<br>
The Power button is defined in the controller.ini or in the correct controllers/PID_VID.ini file used by your gamepad.<br>
Most commonly used combo with default HID settings:<br>
Shutdown: L+R+Z+Start

[Click here to go back to the site index.](site-navigation)
{: .notice--info}
