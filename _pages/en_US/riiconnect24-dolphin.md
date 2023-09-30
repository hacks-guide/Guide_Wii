---
title: "RiiConnect24 for Dolphin"
---

{% include toc title="Table of Contents" %}

![RiiConnect24 Logo](/images/riiconnect24/WiiRC24Logo.jpg)

For support (in English) with RiiConnect24, as well as RiiTag, join [RiiConnect24 on Discord](https://discord.gg/rc24).
{: .notice--primary}

This guide will help you install RiiConnect24 on your Dolphin installation.

{% capture notice-1 %}
This guide is for [Dolphin Emulator](https://dolphin-emu.org) only.

+ Follow [this tutorial](riiconnect24) if you'd like to install RiiConnect24 on a Wii.
+ Follow [this tutorial](riiconnect24-vwii) if you'd like to install RiiConnect24 on vWii (Wii Mode on Wii U).
{% endcapture %}

<div class="notice--warning">{{ notice-1 | markdownify }}</div>

DO NOT INSTALL RIICONNECT24 ON A WII MINI! It will not work and it will brick the system.
{: .notice--danger}

### What you need

* A computer with either Windows 10 or newer or any Unix-based system
* A Beta or Development version of [Dolphin Emulator](https://dolphin-emu.org/download/)
* [RiiConnect24 Patcher](https://github.com/RiiConnect24/RiiConnect24-Patcher/releases)

#### Instructions

##### Section I - Installing Dolphin

If you have Dolphin already installed, skip to [Section II](#section-ii---installing-riiconnect24).
{: .notice--info}

1. Download the latest Dolphin Beta or Development version.
1. Extract the .7z file using a program like 7-Zip or WinRAR.
1. Start Dolphin.
1. In Dolphin, go to `Tools` -> `Perform Online System Update` -> Choose your region.
    ![Perform Online System Update](/images/RiiConnect24/dolphin/1.jpg)

If you have a homebrewed Wii console, you can use a [BootMii NAND dump](bootmii) instead of installing the system files with the System Update option. See [this page](https://wiki.dolphin-emu.org/index.php?title=NAND_Usage_Guide) for more information.
{: .notice--info}

##### Section II - Installing RiiConnect24

If you use a Windows version before Windows 10, you unfortunately cannot use WiiConnect24 inside Dolphin. You can use [this program](https://github.com/RiiConnect24/.VFF-File-Downloader-for-Dolphin) to run it instead.
{: .notice--danger}

1. Click the link above to go to the GitHub page where the patcher is.
1. Download `RiiConnect24Patcher.bat` if you are on Windows, and `RiiConnect24Patcher.sh` if you are on a Unix system
1. On Windows run `RiiConnect24Patcher.bat`. On Unix systems, open Terminal and type `bash`, then drag `RiiConnect24Patcher.sh` into the terminal then press enter. It should look like this: `bash RiiConnect24Patcher.sh`.
1. Press 1 to choose "`Start`" and confirm your selection by pressing `ENTER`. (NOTE: These screenshots are from the Windows version of the patcher.)
    ![Start Patcher](/images/Riiconnect24/dolphin/2.png)
1. For this guide, choose "`Install RiiConnect24 on your Dolphin Emulator`"
    ![Install RiiConnect24](/images/RiiConnect24/dolphin/3.JPG)
1. Choose "`Express (Recommended)`". It will give you everything you need.
    ![Express Settings](/images/RiiConnect24/dolphin/4.JPG)
1. Select your region.
    ![Select your region](/images/RiiConnect24/dolphin/5.JPG)
1. While you're at it, RiiConnect24 Patcher can additionally download some other optional channels that do not use RiiConnect24. `[X]` represents the options that selected. Just press 5 and `ENTER` if you're not interested.
    ![Additional optional channels](/images/RiiConnect24/dolphin/6.JPG)
1. Press `1` then `ENTER` to start patching.
1. Be patient...
    ![It's patching!](/images/RiiConnect24/patcher/9.JPG)
1. After it's done, we would appreciate if you take a minute to send anonymous feedback to us.  If you don't want to, close the patcher. All the files should already be on your SD Card.
    ![It's done!](/images/RiiConnect24/patcher/10.JPG)
    ![Files copied](/images/RiiConnect24/patcher/11.PNG)
1. In Dolphin, go to `Tools` and then `Install WAD`. Install all the WAD files one by one.

##### Section III - Setting your Region

Setting your region is required to use the Everybody Votes Channel.

If you have imported your Wii's NAND backup, the default Region Select will probably work.
{: .notice--info}

1. Download and unzip [AnyGlobe Changer v1.0](https://github.com/fishguy6564/AnyGlobe-Changer/releases/download/1.0/AnyGlobe.Changer.zip).
1. Drag the `boot.dol` file on to the Dolphin window.
1. Wait a few seconds, then press 1 to continue.
    ![AnyGlobe Changer Warning Screen](/images/RiiConnect24/dolphin/anyglobe-warning.png)
1. Select your region and sub-region, then select `Save`, then `Return`.
    ![AnyGlobe Changer Main Menu](/images/RiiConnect24/dolphin/anyglobe-save.png)

When you go back to the Everybody Votes Channel, the country & region names will appear blank. This is normal.
{: .notice--info}

Unfortunately, Wii Mail doesn't work in Dolphin yet.
{: .notice--info}
