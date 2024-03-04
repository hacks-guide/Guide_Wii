---
title: "WiiConnect24"
---

{% include toc title="Table of Contents" %}
<!--
This guide provides the means of regaining WiiConnect24 functionality on your console via RiiConnect24.
Although not at all necessary, it is a "nice to have" feature that was originally used for online connectivity in certain applications on the console.
These apps include the Forecast/News Channel, Nintendo Channel, Check Mii Out Channel, some Japan-exclusive channels, and more.
-->

[WiiConnect24](https://wikipedia.org/wiki/WiiConnect24) was a service that allowed users with Internet connected Wiis to view the weather and news, send messages to friends, participate in Mii contests, and more. WiiConnect24 was discontinued on June 27th, 2013.

## RiiConnect24 + WiiLink
[RiiConnect24](https://rc24.xyz) is a revival service for WiiConnect24 that started in 2015, which allows you to regain its functionality on your console.
As of late 2023, the service is now owned by WiiLink, a project that started in 2020 that was previously aiming at the Japanese-exclusive channels.

There is a patcher that ships both of these services together as one - meaning you get all of the international and Japanese-only channels in one package.
The guide on how to install these services can be found [on WiiLink's website.](https://www.wiilink24.com/guide/)

<!-- move this back to another page? or no -->
### Updating RTC Clock

### Wii

#### What you need
+ A working Internet connection on your Wii
+ The Homebrew Channel
+ An SD card or USB drive
+ [sntp](https://oscwii.org/library/app/sntp)

#### Instructions
1. Download and extract the sntp zip to the root of your SD card or USB drive.
1. Insert your SD card or USB drive into your Wii. 
1. Launch the Homebrew Channel on your Wii.
1. Launch sntp.
1. Use the +Control Pad to select the current time.
1. Press the HOME Button to exit.

### vWii

#### What you need
+ The Homebrew Channel
+ An SD card
+ [Priiloader](priiloader)

#### Instructions
1. Visit the [UTC Patch Generator](https://garyodernichts.github.io/priiloader-patch-gen/) website and fill out the information.
2. Select generate and copy the information.
3. On your SD Card, navigate to `SD:/apps/priiloader` and open `hacks_hash.ini` with a text editor such as notepad.
4. Paste the patch at the bottom of the `hacks_hash.ini` and save the changes.
5. Insert your SD card into your Wii U.
6. [Boot Priiloader](priiloader#section-iii---entering-priiloader) on the vWii.
7. Select hacks, and scroll down to enable the Fix NWC24iSetUniversalTime hack.
8. Return to the vWii menu.

[Proceed to Nintendo Wi-Fi Connection](wiimmfi)<br>
This guide takes the process of regaining online functionality to your Wii a step further - by allowing the Nintendo Wi-Fi Connection services to function yet again on certain games like Mario Kart Wii. While there are different private servers and services that allow this, the one covered here will be Wiimmfi.
{: .notice--info}
