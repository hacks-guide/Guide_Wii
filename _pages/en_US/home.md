---
layout: splash
title: "Wii Hacks Guide"
header:
  overlay_color: "#121212"
  overlay_image: /images/main-pages/home-page-feature.jpg
  overlay_filter: 0.5
  caption:
excerpt: "The complete guide to modding your Nintendo Wii (and Wii mini)."
---

Since this guide has just been published, translations are a work-in-progress. Thanks for your patience!
{: .notice--info}

It is suggested that to get the most out of the guide, you read this page before proceeding.
{: .notice--warning}

### What is homebrew?

**Homebrew** mostly refers to software that was not authorized by the original creator of a piece of hardware - in this case, being Nintendo. In order to gain the ability to run homebrew on the Wii, the console must first be hijacked to run unsigned code.

Here are some common examples of what homebrew can do for your Wii:

+ [Backup](bootmii) and [restore](bootmiirecover) 1:1 copies of the Wii's NAND (or system memory).
+ Enhance the [brick protection](priiloader) of your Wii.
+ Download new homebrew apps with the [Open Shop Channel](osc).
+ [Patch game disc contents](riivolution), allowing you to load game modifications.
+ Turn your Wii into a [media center](wiimc).
+ Install [themes](themes) both on the Wii Menu and on commonly used homebrew apps.
+ Install a [USB loader](usb-loaders) to launch Wii games and more from an external storage device.
+ Back up your [discs](dump-games) and [other installed titles](dump-wads).
+ [Back up and restore](wii-saves) your Wii save files.
+ [Back up and restore](gcsaves) your GameCube save files.
+ Restore online functionality to both [WiiConnect24](wiiconnect24) and [Nintendo Wi-Fi Connection](wiimmfi).

### What does the guide install?

This guide adopts the following steps from start to finish, including optional sections:

+ Hijack your Wii using an exploit that you selected, with the end goal of reaching the HackMii installer.
+ Install BootMii and the Homebrew Channel.
+ Make a backup of critical system files before proceeding.
+ Install Priiloader.
+ Install the Open Shop Channel.
+ List out and recommend homebrew to use on your Wii.
+ Restore functionality to WiiConnect24 and Nintendo Wi-Fi Connection.

### What should I know before starting?

+ Homebrew is 100% free, and the process of hijacking your Wii is also free - anyone trying to convince you otherwise is likely attempting to [scam](https://hbc.hackmii.com/scam) you.
+ This guide works on all system menu versions depending on the exploit, but it is recommended that you update to 4.3 anyway if possible.
+ This guide applies to retail/consumer Wiis ONLY! This means that development units are not covered, nor are vWiis.
+ Depending on what you use the Wii for, you may have to make some modifications to the system memory that could be potentially fatal to system functionality. As long as you follow this guide exactly, you should be fine, but for general brick prevention tips see [this](bricks#brick-prevention) page.
+ The differences between the Wii and Wii mini are quite large. This means that in some cases, something that is normally harmless to the Wii could cause a [severe brick](bricks#wi-fi-brick) to the Wii mini - make sure to pay attention if you are planning to mod one!
+ Exercise extreme caution when modifying a [Korean Wii](bricks#korean-kiierror-003-brick).

### Ready?

The guide has nine sections in total. These are listed below:

1. Choosing and using an exploit (REQUIRED)
1. Installing the Homebrew Channel and BootMii (REQUIRED)
1. Making a NAND backup with BootMii (REQUIRED)
1. Installing Priiloader (REQUIRED)
1. Installing the Open Shop Channel (REQUIRED)
1. Installing cIOS (OPTIONAL)
1. Discovering Recommended Homebrew (OPTIONAL)
1. Regaining WiiConnect24 Functionality (OPTIONAL)
1. Regaining Nintendo Wi-Fi Connection Functionality (OPTIONAL)

Continue to [Get Started](get-started)
{: .notice--info}
