---
title: "Get Started"
---

{% include toc title="Table of Contents" %}

These steps will help you softmod your Wii, from stock to BootMii. Before starting this guide, please ensure that your console is on the latest version of the Wii firmware (4.3). If your Wii is already softmodded but is on an older version, follow [this](update) guide to update to latest.

First, identify your console revision:

{% include identify-console.html %}

Next, select the exploit in the guide that corresponds to your console:

| Console Revision  | Reccomended Exploit |
| ----------------- | ------------------- |
| Wii/Wii Family Edition  | If you can use an SD card: Proceed to [Letterbomb](letterbomb)<br> If you cannot use an SD card: Proceed to [str2hax](str2hax) |
| Wii Mini | Proceed to [Bluebomb](bluebomb) |
| Wii U (vWii)  | If you have not modded your Wii U yet:<br> Proceed to [Introduction (wiiu.hacks.guide)](https://wiiu.hacks.guide/#/)<br> If your Wii U is already modded:<br> Proceed to [vWii Modding (wiiu.hacks.guide)](https://wiiu.hacks.guide/#/vwii-modding) |

All of the exploits run the HackMii Installer, and have the same end result.
{: .notice--info}

Although you can follow this guide without an SD card, you will not be able to create or restore a NAND backup using BootMii, and you won't be able to use some homebrew.
{: .notice--info}

If your Wii Menu is not on version 4.3, use str2hax, Wilbrand or FlashHax to install the Homebrew Channel, and then follow the [update guide](update) to update to 4.3.
{: .notice--info}

This guide is for the original Wii and Wii mini only (including the Wii Family Edition). Do not use this on a Wii U (vWii)!
If you want to install homebrew on a Wii U, [follow this guide](https://wiiu.hacks.guide).
{: .notice--warning}

### Choose an exploit to use

These exploits are sorted by easiest to hardest difficulty of use.

- [str2hax](str2hax) - Exploit that uses the Wii EULA
    * Requires an Internet connection and changing the DNS server
- [LetterBomb](letterbomb) - Exploit that uses the Wii Message Board
    * Requires an SD card
    * Must be on version 4.3
- [Wilbrand](wilbrand) - Exploit that also uses the Wii Message Board
    * Requires only an SD card with the Web UI, otherwise requires a PC in addition to the SD card
    * Works on versions 3.0 - 4.3
- [FlashHax](flashhax) - Exploit that uses the Internet Channel
    * Requires the Internet Channel installed, and an Internet connection
- [BlueBomb](bluebomb) - Exploit that uses Bluetooth
    * Requires a computer with Bluetooth and GNU/Linux, as well as a USB storage device
    * This is the only exploit that works on the **Wii mini**
