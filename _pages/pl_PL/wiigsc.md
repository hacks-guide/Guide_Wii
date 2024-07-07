---
title: "Creating Wii Game Shortcuts"
---

{% include toc title="Table of Contents" %}

Do you use a USB Loader and want to create game shortcuts to launch them on your Wii Menu? Then try WiiGSC (Wii Game Shortcut Creator), previously known as Crap.

In the case of a brick, [installing Priiloader is a must](/priiloader). Also, install BootMii (as Boot2 if you have an early Wii). Installing brick protection along with following the guide correctly should keep you safe from bricks. DO NOT CONTINUE UNTIL YOU HAVE INSTALLED PRIILOADER AND BOOTMII!
{: .notice--warning}

Do NOT make a shortcut for the games "Mario Party 9" or "A Boy and His Blob". It will brick your Wii.
{: .notice--warning}

The Wii Menu is hard limited to a maximum of 48 channels and 6 of them are taken by channels you cannot remove, like the Wii shop. If you need more channels, the standard solution is to use one of the [Wii Loaders](wii-loaders).
{: .notice--warning}

### Requirements

* A Wii
* A USB drive.
* [YAWM ModMii Edition](yawmme)
* A Windows computer.
* [WiiGSC](https://wiidatabase.de/downloads/pc-tools/wiigsc-ehemals-crap/)

### Instructions

1. Install WiiGSC, then right click on it and choose **Run as administrator**. If you do not do this, WiiGSC will throw an error when you open it.

    ![](/images/desktop-apps/wiigsc/wiigsc-home.png)

2. Select the path to the ISO or WBFS file on your USB drive, and select the USB Loader you use. The other options should be fine the way they are.

    ![](/images/desktop-apps/wiigsc/wiigsc-selection.png)

If you are on vWii, use the [Wiiforwarder2vWii](https://gbatemp.net/download/wiiforwarder2vwii-wii-forwarder-to-vwii-wii-u-forwarder-converter-beta-version.37254/) tool to convert the WAD for use on the vWii.
{: .notice--info}

3. Install the generated WAD with your WAD manager.

<div class="notice--info">
If you get an error saying "The system files are corrupted", don't panic as long as you installed Priiloader.

Turn off your Wii, then hold down the RESET button down and turn on your Wii. You should be able to boot into the Priiloader menu. <br>
Simply enter the Homebrew Channel, and use your WAD manager to uninstall the WAD.
</div>

[Click here to go back to the site index.](site-navigation)
{: .notice--info}
