---
title: "RiiConnect24"
---

{% include toc title="Table of Contents" %}

For support (in English) with RiiConnect24, as well as RiiTag, join [RiiConnect24 on Discord](https://discord.gg/rc24).
{: .notice--primary}

[RiiConnect24](https://rc24.xyz/) allows you to use discontinued services from WiiConnect24, which include the News, Forecast, Everybody Votes, Nintendo and Check Mii Out Channel, along with Wii Mail.

It's recommended to set your Wii to the current time before proceeding. Follow [this tutorial](wiiconnect24#updating-rtc-clock) in order to set it.
{: .notice--warning}

DO NOT INSTALL RIICONNECT24 ON A WII MINI! It will not work and it will brick the system.
{: .notice--danger}

### Requirements

If you are on vWii, you will also need [Priiloader](priiloader) installed with the WiiConnect24 hacks.
{: .notice--primary}

+ An SD card or USB drive
+ A Wii with an Internet connection
+ A PC with an Internet connection
+ [RiiConnect24 + WiiLink Patcher (Windows, Mac and Linux)](https://github.com/WiiLink24/WiiLink24-Patcher/releases/latest)

### Instructions

#### Section I - Using RiiConnect24 Patcher

1. Click the link above to go to the GitHub page where the patcher is.
1. Download & run the patcher for your operating system. (Instructions on the GitHub page.)
1. Press 1 to choose `Start Express Install Setup`.

    ![](/images/riiconnect24/patcher/menu.png)

1. Follow the on-screen instructions.

    ![](/images/riiconnect24/patcher/1a.png)
    
    ![](/images/riiconnect24/patcher/1b.png)
    
    ![](/images/riiconnect24/patcher/2a.png)
    
    ![](/images/riiconnect24/patcher/2b.png)
    
    ![](/images/riiconnect24/patcher/3.png)

    At step 3, if you would like to download the files directly to your SD card, insert it into your computer and press `2`.
    {: .notice--info}
    
    If you are asked to delete your WAD folder, say yes. WADs are generally not needed after installation.
    {: .notice--info}

1. The patcher will download apps now - please be patient.

    ![](/images/riiconnect24/patcher/patching.png)

1. Once you reach the screen that says `Patching Completed!`, you can exit the patcher. All the files should already be on your SD card.

    ![](/images/riiconnect24/patcher/patching_ok.png)

    If the patcher did not detect your SD card, or you did step 3 without using your SD card, copy the `apps` and `WAD` folders to your SD card manually.
    {: .notice--info}

#### Section II - Installing WADs

If you are using Dolphin, you have finished the guide. Install the WADs by going to `Tools -> Install WAD` within Dolphin.
{: .notice--primary}

You will now install the patched IOS and Channel WADs that are required to use RiiConnect24.

1. Put your SD card or USB drive in your Wii.
1. Launch the Homebrew Channel on your Wii.
1. Launch YAWM ModMii Edition.
1. Select the device you have put the RiiConnect24 files on.
1. Highlight all the WADs in the `wad` folder by pressing the + Button to select them. When all of the WADs are selected, press A twice to install the WADs.
1. After they are successfully installed, press the HOME Button to exit back to the Homebrew Channel.

#### Section III - Patching nwc24msg.cfg

You will now patch your `nwc24msg.cfg` file which is required in order to use Wii Mail.

1. Launch RiiConnect24 Mail Patcher.
1. It should only take a few seconds to patch your nwc24msg.cfg. When it's done, press the HOME Button to exit.

#### Section IV - Connecting to RiiConnect24

The old DNS server `164.132.44.106` has been deprecated as of `June 1st, 2023` and is no longer available to use.
{: .notice--warning}

If you're getting errors such as `WiiConnect24 and Wii Shop Channel currently not being offered in your country`, go to Wii Settings -> Last Page -> Country and change it to United Kingdom. You will get this error when using a country that RiiConnect24 does not support.
{: .notice--warning}

If you get error 220602, see [this](faq#for-riiconnect24-users) page.<br>
If you get error 107304, see [this](faq#for-riiconnect24-users-1) page.<br>
{: .notice--warning}

You will now set your DNS to RiiConnect24 servers. This is optional but recommended, because it enhances the use of RiiConnect24 and Wiimmfi by making some other features available.

1. Go to `Wii Options`.
1. Go to `Wii Settings`.
1. Go to `Page 2`, then click on `Internet`.
1. Go to `Connection Settings`.
1. Select your current connection.
1. Go to `Change Settings`.
1. Go to `Auto-Obtain DNS` (Not IP Address), then select `No`, then `Advanced Settings`.
1. Type in `167.86.108.126` as the primary DNS.
1. Type in `1.1.1.1` as the secondary DNS.
1. Select `Confirm`, then select `Save`.
1. Select `OK` to perform a connection test.
1. If the connection test was successful, select `No` to skip the Wii System Update.
1. Go to `WiiConnect24`, then `WiiConnect24` again, and make sure it is enabled.
1. Back on the WiiConnect24 menu, go to `Standby Connection` and make sure it is enabled.
1. At `Slot Illumination`, it is recommend you set the disc light to `Dim` or `Bright`, but this is optional.
1. Finally, go to the `Internet` section, then `User Agreements` or `Agreement/Contact`, then `Yes`. Please read through this.

[Return to WiiConnect24](wiiconnect24)
{: .notice--info}

[Click here to go back to the site index.](site-navigation)
{: .notice--info}
