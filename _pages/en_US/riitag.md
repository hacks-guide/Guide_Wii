---
title: "RiiTag on Wii"
---

{% include toc title="Table of Contents" %}

For support (in English) with RiiConnect24, as well as RiiTag, join [RiiConnect24 on Discord](https://discord.gg/rc24).
{: .notice--primary}

RiiTag is a customizable and dynamic gamertag. By sharing your gamertag (a dynamic image), you can show what you've been playing to your friends! You connect it to a USB Loader, and the tag updates on-the-fly. You need a Discord account in order to start using RiiTag.

Want to install RiiTag on your Wii U? See [this guide](riitag-wiiu) on how to connect it to your Wii U Menu.
{: .notice--info}

#### What you need

* A computer
* A text editor
* A USB Loader

#### Instructions

##### Section I - Getting Started

1. [Go to the RiiTag site.](https://tag.rc24.xyz/)
1. Click `Log In` and log in with your Discord account.
1. A dialog will pop up asking you if you want to authorize `RiiConnect24 Login` with Discord. Click `Authorize`.
1. Click your profile at the top right of the screen, then `Edit RiiTag` and customize it to how you like. You can add a background, overlay, flag, nickname, and Wii Number. Click the green Save icon in the corner to save your changes.
1. Click your profile at the top right of the screen, then `Account`. Click `Copy` under `RiiTag Private Key`. This is not needed if you're using USB Loader GX, as the key will be in a downloadable file.

Do not share your RiiTag key with anyone! If you do, people can abuse your tag.
{: .notice--warning}

##### Section II - Connecting Your USB Loader

The steps to connect RiiTag to your USB Loader depend on what USB Loader you use.

###### USB Loader GX

1. Load USB Loader GX on your Wii.
1. Go to `Settings` > `Features` and turn `Wiinnertag` on. Press `Yes` or `OK` to any dialogues that show up.
1. Ensure that `Initialize Network` is turned on.
1. Exit USB Loader GX.
1. Insert the SD Card or USB device where your USB Loader GX data is into your computer.
1. Click your profile at the top right of the screen, then `Account`. Click `You can also download your Wiinnertag.xml.` which will download the file needed to use RiiTag with USB Loader GX.
1. Save the XML to `/apps/usbloader_gx`  folder on your SD Card or USB device, replacing the existing `Wiinnertag.xml`.
1. You have now set up RiiTag. You can try loading any game now to see if it works correctly.

###### WiiFlow

1. Take the SD Card or USB device where your WiiFlow data is into your computer.
1. Open `/apps/wiiflow/wiiflow.ini` with a text editor.
1. Search for `gamercards` and replace that line with `gamercards=wiinnertag`.
1. Search for `wiinnertag_url` and replace that line with `wiinnertag_url=https://tag.rc24.xyz/wii?game={ID6}&key={KEY}`.
1. Search for `wiinnertag_key` and replace that line with `wiinnertag_key=<key>`, replacing `<key>` with the key you wrote down in Section 1.
1. Search for `gamercards_enable` and replace that line with `gamercards_enable=yes`.
1. Save the modified `wiiflow.ini` file.
1. You have now set up RiiTag. You can try loading any game now to see if it works correctly.

###### Emulators

RiiTag supports Dolphin, Citra, and Cemu.
You need a Discord account for this to work.
{: .notice--info}

1. [Join the RiiConnect24 Discord server](https://discord.gg/rc24) if you aren't already in there.
1. Make sure you turn on Discord rich presence in the emulator preferences.
1. Make sure your Discord client is open (not the web-based client, the standalone application)
1. Play a game and RiiTag will automatically update your tag when you play a game.

A Discord bot is used to read your rich presence and update your RiiTag accordingly. If you want to invite the bot to your server, [use this link](https://discord.com/oauth2/authorize?client_id=596108891071447052&scope=bot).

###### Switch and 3DS

RiiTag supports Switch and 3DS hardware.
You need a Discord account for this to work.
{: .notice--info}

1. [Join the RiiConnect24 Discord server](https://discord.gg/rc24) if you aren't already in there.
1. Follow the instructions on [NSO-RPC](https://github.com/MCMi460/NSO-RPC) for Switch and [3DS-RPC](https://github.com/MCMi460/3DS-RPC) for 3DS.
1. If you're using NSO-RPC, make sure your Discord client is open (not the web-based client, the standalone application)
1. Play a game and RiiTag will automatically update your tag when you play a game.

###### Configurable USB Loader

We do not offer support for Configurable USB Loader, as it's outdated compared to USB Loader GX and WiiFlow Lite.
{: .notice--info}

You can use the `CfgLoaderConfigurator.exe` program (Windows only) instead of editing the `config.txt` file mentioned below if you want to.
{: .notice--info}

1. Take the SD Card or USB device where your Configurable USB Loader data is into your computer.
1. Open `/usb-loader/config.txt` with a text editor.
1. Replace (or add the line) starting with `gamercard_url` with `gamercard_url = http://tag.rc24.xyz/wii?game={ID6}&key={KEY}`.
1. Replace (or add the line) starting with `gamercard_key` with `gamercard_key = <key>`, replacing `<key>` with the key you wrote down in Section 1.
1. Save the modified `config.txt` file.
1. You have now set up RiiTag. You can try loading any game now to see if it works correctly.

#### RiiTag Channel

We have a RiiTag Channel you can install on your Wii. When it is launched, it will open up the Internet Channel and show your RiiTag, making it easy to look at it when using your Wii. You must have the Internet Channel installed to use this.
{: .notice--info}

1. [Go to the RiiTag site.](https://tag.rc24.xyz/)
1. Click `Log In` and log in with your Discord account.
1. A dialog will pop up asking you if you want to authorize `RiiConnect24 Login` with Discord. Click `Authorize`.
1. Click your profile at the top right of the screen, then `Profile`. Click `RiiTag Channel` to download the WAD.
1. Put the WAD on your SD Card or USB device.
1. Install the WAD with your favorite WAD manager ([YAWM ModMii Edition](yawmme) is recommended).
1. Make sure the Internet Channel is installed.
1. The RiiTag Channel should now be available to use on your Wii Menu.

[Check out RiiTag-RPC](https://github.com/RiiConnect24/RiiTag-RPC/releases/latest)<br>
Now that you set up RiiTag, you can set up RiiTag-RPC to show your Discord friends what you're playing on the Wii using Discord's rich presence.
{: .notice--info}

[Continue to site navigation](site-navigation)<br>
We have many other tutorials that you might like.
{: .notice--info}
