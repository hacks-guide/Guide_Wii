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

If you are on vWii, you will also need [Priiloader](priiloader) installed with the WC24 hacks.
{: .notice--primary}

+ An SD card or USB drive
+ A Wii with an Internet connection
+ A PC with an Internet connection
+ [RiiConnect24 Patcher (Windows, Mac and Linux)](https://github.com/riiconnect24/RiiConnect24-Patcher/releases)
+ [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

### Instructions

#### Section I - Using RiiConnect24 Patcher

1. Click the link above to go to the GitHub page where the patcher is.
1. Download `RiiConnect24Patcher.bat` if you are on Windows, and `RiiConnect24Patcher.sh` if you are on a macOS/Linux system.
1. Run the RiiConnect24 patcher.
    + On Windows run `RiiConnect24Patcher.bat`.
    + On macOS/Linux systems, open Terminal and type `bash`, then drag `RiiConnect24Patcher.sh` into the terminal then press enter. It should look like this: `bash <directory>/<directory>/RiiConnect24Patcher.sh`.
1. Press 1 to choose "`Start`" and confirm your selection by pressing `ENTER`.

    ![](/images/riiconnect24/patcher/1.JPG)

1. Select the device you're patching for.

    ![](/images/riiconnect24/patcher/2.JPG)

1. For this guide, choose "`Install RiiConnect24 on your Wii`"

    ![](/images/riiconnect24/patcher/3.JPG)

1. Choose "`Express (Recommended)`". It will give you everything you need.

    ![](/images/riiconnect24/patcher/4.JPG)

1. Select your region.

    ![](/images/riiconnect24/patcher/5.JPG)

1. While you're at it, RiiConnect24 Patcher can additionally download some other optional channels that do not use RiiConnect24. `[X]` represents the options that selected. Just press 5 and `ENTER` if you're not interested.

    ![](/images/riiconnect24/patcher/6.JPG)

1. Connect your SD Card or USB Drive to your computer and select "`1`".

    ![](/images/riiconnect24/patcher/7.JPG)

1. If your device was detected successfully, select "`1`". If not, make sure there's a folder called `apps` on your SD Card or USB Drive and try again.

    ![](/images/riiconnect24/patcher/8.JPG)

1. The patcher will download apps now - please be patient.

    ![](/images/riiconnect24/patcher/9.JPG)

1. Once you reach the screen that says `Patching done`, you can exit the patcher. All the files should already be on your SD card.

    ![](/images/riiconnect24/patcher/10.JPG)

    ![](/images/riiconnect24/patcher/11.PNG)

1. If it did not copy everything automatically to your SD Card or USB Device, copy the `WAD` and `apps` folder next to `RiiConnect24Patcher.bat` or `RiiConnect24Patcher.sh` to your SD Card or USB Device.

#### Section II - Installing WADs

If you are using Dolphin, you have finished the guide. Install the WADs by going to `Tools -> Install WAD` within Dolphin.
{: .notice--primary}

You will now install the patched IOS and Channel WADs that are required to use RiiConnect24.

1. Extract the YAWM ModMii Edition `.zip` file, and copy the `apps` folder to your SD card or USB drive.
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

If you get error 107245, you did not install the patched IOS.<br>
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
