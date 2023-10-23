---
title: "WiiConnect24"
---

{% include toc title="Table of Contents" %}

This guide provides different means of regaining WiiConnect24 functionality on your console. Although not at all nessecary, it is a "nice to have" feature that was originally used for online connectivity in certain applications on the console. These apps include the Forecast/News Channel, Nintendo Channel, Check Mii Out Channel, some Japan-exclusive channels, and more. Please bear in mind, the functionality you gain depends entirely on what service(s) you use.

### Service Overview

#### Note sulla compatibilità del servizio:
Both services listed below are compatible with one another and can be loaded on the same console. With this said, it should be noted that when installing one channel over the other (WiiLink's Forecast Channel over RiiConnect24's Forecast Channel for example), the channel you are installing will overwrite the old one.


#### Service Support Status
✅ - In support<br> ⚠️ - In development<br> ⛔ - No support

| Service Name            | WiiLink | RiiConnect24 |
| ----------------------- | ------- | ------------ |
| Forecast Channel        | ✅       | ✅            |
| News Channel            | ⚠️      | ✅            |
| Wii Mail                | ⚠️      | ✅            |
| Everybody Votes Channel | ✅       | ✅            |
| Nintendo Channel        | ✅       | ✅            |
| Check Mii Out Channel   | ⚠️      | ✅            |
| Wii Room                | ✅       | ⛔            |
| Food Channel            | ✅       | ⛔            |
| Photo Prints Channel    | ✅       | ⛔            |
| Kirby TV Channel        | ✅       | ⛔            |

#### WiiLink
A newer WC24/Japanese channel revival service that started in 2020, but is rapidly regaining functionality in many different channels.

Service support status can be found [here](https://www.wiilink24.com/status).<br> Their guide can be found [here](https://www.wiilink24.com/guide/2installation/).

#### RiiConnect24
The longest lasting WC24 revival service, currently only with support for the worldwide WC24 channels as well as mail services.

Service support status can be found [here](https://rc24.xyz/stats/).<br> RiiConnect24 currently does not have a self-hosted guide, however you can find ours [here](riiconnect24).

### Updating RTC Clock
If you choose to install either of these services on your Wii, it is advised to synchronize its external clock in order to prevent various issues (such as inability to use said services) that may arise otherwise. The steps to do so can be found below:

#### What you need
+ A working Internet connection on your Wii
+ The Homebrew Channel
+ Una scheda SD o dispositivo USB
+ [sntp](https://oscwii.org/library/app/sntp)

#### Istruzioni
1. Download and extract the sntp zip to the root of your SD card or USB drive.
1. Insert your SD card or USB drive into your Wii.
1. Launch the Homebrew Channel on your Wii.
1. Launch sntp.
1. Use the +Control Pad to select the current time.
1. Press the HOME Button to exit.

[Proceed to Nintendo Wi-Fi Connection](wiimmfi)<br> This guide takes the process of regaining online functionality to your Wii a step further - by allowing the Nintendo Wi-Fi Connection services to function yet again on certain games like Mario Kart Wii. While there are different private servers and services that allow this, the one covered here will be Wiimmfi.
{: .notice--info}
