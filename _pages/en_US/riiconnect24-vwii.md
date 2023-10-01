---
title: RiiConnect24 vWii Guide
---

{% include toc title="Table of Contents" %}

![RiiConnect24 Logo](/images/riiconnect24/WiiRC24Logo.jpg)

For support (in English) with RiiConnect24, as well as RiiTag, join [RiiConnect24 on Discord](https://discord.gg/rc24).
{: .notice--primary}

Guide to installing [RiiConnect24](https://rc24.xyz) on vWii (Virtual Wii on Wii U).

[RiiConnect24](https://rc24.xyz/) allows you to use discontinued services from WiiConnect24, which include the News, Forecast, Everybody Votes, Nintendo and Check Mii Out Channel, along with Wii Mail.

{% capture notice-1 %}
This guide is for vWii (Wii Mode on Wii U) only.

+ Follow [this tutorial](riiconnect24) if you'd like to install RiiConnect24 on a Wii.
+ Follow [this tutorial](riiconnect24-dolphin) if you'd like to install RiiConnect24 on Dolphin Emulator.
{% endcapture %}

<div class="notice--warning">{{ notice-1 | markdownify }}</div>

It's recommended to set your Wii to the current time before proceeding. Follow [this tutorial](rtc) in order to set it.
{: .notice--warning}

DO NOT INSTALL RIICONNECT24 ON A WII MINI! It will not work and it will brick the system.
{: .notice--danger}

#### Warnings

This guide holds no responsiblity for any problems that may arise on your console upon following it!!!
{: .notice--warning}

#### Requirements

* An SD card or USB drive
* A computer
* A Wii U with [the vWii modded](https://wiiu.hacks.guide/#/vwii-modding). **This guide requires the latest CFW on your Wii U.**
* A Nintendo Network ID (NNID) linked to your Wii U
* [Priiloader](priiloader) installed on your vWii
* [RiiConnect24 Patcher (Windows, Mac and Linux)](https://github.com/riiconnect24/RiiConnect24-Patcher/releases)
* [RiiConnect24 Mail Patcher](https://oscwii.org/library/app/Mail-Patcher)
* [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

{% capture notice-2 %}
After following the vWii modding guide linked above, you should have:
* A vWii NAND backup and keys (keep these stored safely!!)
* The Homebrew Channel installed
* d2x cIOS installed (IOS249, IOS250 and IOS251)
* IOS80 patched
{% endcapture %}

<div class="notice" markdown="1">{{ notice-2 }}</div>

#### Instructions

##### Section I - Running the patcher

1. Click the RiiConnect24 Patcher link above to go to the GitHub page where the patcher is.
1. Download `RiiConnect24Patcher.bat` if you are on Windows, and `RiiConnect24Patcher.sh` if you are on a Unix system
1. On Windows run `RiiConnect24Patcher.bat`. On Unix systems, open Terminal and type `bash`, then drag `RiiConnect24Patcher.sh` into the terminal then press enter. It should look like this: `bash RiiConnect24Patcher.sh`.
1. Press 1 to choose "`Start`" and confirm your selection by pressing `ENTER`. (NOTE: These screenshots are from the Windows version of the patcher.)
    ![RiiConnect24 Patcher Main Screen](/images/riiconnect24/patcher/1.JPG)
1. Select "`2. Wii U (vWii, Wii Mode)`".
    ![Select your device](/images/riiconnect24/patcher/2.JPG)
1. For this guide, choose "`Install RiiConnect24 on your Wii`"
    ![Install RiiConnect24](/images/riiconnect24/patcher/3.JPG)
1. Choose "`Express (Recommended)`". It will give you everything you need.
    ![Express Settings](/images/riiconnect24/patcher/4.JPG)
1. Select your region.
    ![Select your region](/images/riiconnect24/patcher/5.JPG)
1. While you're at it, RiiConnect24 Patcher can additionally download some other optional channels that do not use RiiConnect24. `[X]` represents the options that selected. Just press 5 and `ENTER` if you're not interested.
    ![Additional optional channels](/images/riiconnect24/patcher/6.JPG)
1. Connect your SD Card or USB Drive to your computer and select "`1`".
    ![Enable copying to SD Card](/images/riiconnect24/patcher/7.JPG)
1. If your device was detected successfully, select "`1`". If not, make sure there's a folder called `apps` on your SD Card or USB Drive and try again.
    ![Successfully detected](/images/riiconnect24/patcher/8.JPG)
1. Be patient...
    ![It's patching!](/images/riiconnect24/patcher/9.JPG)
1. After it's done, we would appreciate if you take a minute to send anonymous feedback to us.  If you don't want to, close the patcher. All the files should already be on your SD Card.
    ![It's done!](/images/riiconnect24/patcher/10.JPG)
    ![Files copied](/images/riiconnect24/patcher/11.PNG)
1. If it did not copy everything automatically to your SD Card or USB Device, copy the `WAD` and `apps` folder next to `RiiConnect24Patcher.bat` to your SD Card or USB Device.

##### Section II - Installing WADs

You will now install the patched IOS and Channel WADs that are required to use RiiConnect24.

1. Extract the YAWM ModMii Edition `.zip` file, and copy the `apps` folder to your SD card or USB drive.
1. Put your SD card or USB drive in your Wii U.
1. Launch the Homebrew Channel on your Wii U.
1. Launch YAWM ModMii Edition.
1. Select the device you have put the RiiConnect24 files on.
1. Highlight all the WADs in the `wad` folder by pressing the + Button to select them. When all of the WADs are selected, press A twice to install the WADs.
1. After they are successfully installed, press the HOME Button to exit back to the Homebrew Channel.

##### Section III - Patching nwc24msg.cfg

You will now patch your `nwc24msg.cfg` file which is required in order to use Wii Mail.

1. Launch the RiiConnect24 Mail Patcher from the Homebrew Channel.
1. It should only take a few seconds to patch your nwc24msg.cfg. When it's done, press the HOME Button to exit.

##### Section IV - Using RiiConnect24

1. Visit the [vWii Priiloader WC24 UTC Patch Generator](https://garyodernichts.github.io/priiloader-patch-gen/) page.
1. Enter your Wii U's time offset from UTC time. <br>
This is automatically done based on your PC's time, so you may be able to skip this step.
1. Enter the region of your Wii U and click `Generate`.
1. A System menu hack will be generated in the text box below.
1. Insert your SD card or USB drive into your PC.
1. Open `/apps/priiloader/hacks_hash.ini` in a text editor, and paste the new system menu hack at the bottom of the file.
1. Save the file, eject your SD card/USB drive from your PC, and put it back into your Wii U.
1. Launch the `Load Priiloader` application from the Homebrew Channel.
1. In the Priiloader menu, go to `System Menu Hacks`.
    ![System menu hacks](/images/Priiloader/system_menu_hacks.png)
1. Scroll through the list, and press `A` to enable each of these hacks:
    + `Always Enable WiiConnect24 for vWii`
    + `Create Message via Calendar button`
    + `Fix NWC24iSetUniversalTime (UTC.....`
1. Scroll down to `save settings`, press `A`, then press `B` to go back.
1. Select `System Menu.`
1. Return to the Wii U Menu, then go right back to Wii Mode.

#### What's currently working?
The following RiiConnect24 services are **working** on the vWii:
* Forecast Channel 
* News Channel
* Everybody Votes Channel
* Nintendo Channel
* Check Mii Out Channel / Mii Contest Channel
* Wii Mail (requires Priiloader's `Create message via Calendar button` hack)
{: .notice--success}

Most services that utilize WiiConnect24 will be able to work if you leave vWii running for several hours. There's no standby mode on the console.
{: .notice--warning}
