---
title: "Wiimmfi"
---

{% include toc title="Table of Contents" %}

![Wiimmfi Logo](/images/WiiWiimmfiLogo.jpg)

[Wiimmfi](https://wiimmfi.de) is a replacement service for the now-defunct Nintendo Wi-Fi Connection. It has been developed by Wiimm and Leseratte.

If you get the error 23904 while connecting to Wiimmfi, then you are using an outdated patch.<br>
Follow the steps below for the method you're using to connect to Wiimmfi again.<br>
See [this page](https://wiimmfi.de/update) for more details.<br>
{: .notice--warning}

## Different patchers

There are lots of different methods to connect to Wiimmfi.
Choose the one that fits your needs best.

### Automatic patching from the Disc Channel using Priiloader

#### What you need

* A Wii with Priiloader 0.9 or later installed

If you have an older version of Priiloader or don't have it installed, follow [this guide](priiloader) to update/install it.
{: .notice--info}

#### Instructions

1. Hold the RESET button while turning on your Wii.
    + If you are using a Wii mini, plug in a USB keyboard and hold Escape on it while turning it on.

    ![Turn on](/images/Priiloader/on.jpg)
    ![Hold RESET](/images/Priiloader/reset.jpg)

1. You should see the Priiloader menu.
    ![Menu](/images/Priiloader/mainmenu.jpg)
1. Go to `System Menu Hacks`.

    If you are using a USB drive to install Priiloader, make sure you do not have an SD card inserted at the same time.
    This will cause Priiloader to be unable to find the hacks_hash.ini file.
    {: .notice--info}

1. Make sure the `Wiimmfi patch v4` hack is enabled.
    ![System Menu Hacks](/images/Priiloader/hacks.jpg)
1. Scroll down to `save settings` and press A, then press B to go back to the main menu of Priiloader.
1. Scroll to `System Menu` and press A to launch it.
1. Launch your game through the Disc channel. It should be patched with Wiimmfi.

If you see the hack `Wiimmfi patch v2` or `Wiimmfi patch v3` instead, then you do not have the latest version of the hacks_hash.ini file, and you need to [re-install Priiloader](priiloader).
Then, repeat the previous steps.
{: .notice--warning}

### Homebrew (Disc) Application

MrBean35000vr (creator of CTGP-R, a Mario Kart Wii content pack) created a Wiimmfi Disc Patcher that allows you to insert a disc and patch the game on-the-fly for Wiimmfi use, though this must be run every time you start the disc.

#### What you need

* An SD card or USB drive
* [Auto Wiimmfi Patcher](https://oscwii.org/library/app/wiimmfipatcher)

#### Instructions

1. Extract Auto Wiimmfi Patcher to the root of your SD card or USB drive.
1. Insert your SD Card into your Wii, and launch Auto Wiimmfi Patcher from the Homebrew Channel.
1. Insert your game disc (you can insert it before or after launch, it doesn't matter).
1. Wait for patch to complete, and it'll begin!

### No-Homebrew (Disc)

#### str2hax Method

Thanks to Fullmetal5's str2hax exploit, which Leseratte was able to adapt for the Wiimmfi patcher, you can run the Wiimmfi patch without having any homebrew on your Wii.

##### What you need

* A Wii with an Internet connection

##### Instructions

1. Insert your game disc.
1. Go into your internet connection settings and set the DNS server of your console to 95.217.77.151.
1. Go to the WC24 contract information (third button after clicking on "Internet" in the settings).
1. Confirm that you do want to use WC24 and the shop channel
1. The Wiimmfi patcher page should show up. If it doesn't, and you still see the default license agreement, your router might not be compatible with this method.
1. Wait for about 1 minute and 30 seconds for the patcher to load
1. The game should now start with the Wiimmfi patch included

#### DNS Method

There's an easy method to patch games to use Wiimmfi that can be used whether or not you have homebrew on your Wii. It works on some older games, such as Mario Kart Wii and Super Smash Bros. Brawl, but not every game.

##### Instructions

1. Go to `Wii Options`.
1. Go to `Wii Settings`.
1. Go to `Page 2`, then click on `Internet`.
1. Go to `Connection Settings`.
1. Select your current connection.
1. Go to `Change Settings`.
1. Go to `Auto-Obtain DNS` (Not IP Address), then select `No`, then `Advanced Settings`.
1. Type in `95.217.77.181` as the primary DNS.
1. Type in `1.1.1.1` as the secondary DNS.
1. Select `Confirm`, then select `Save`.
1. Select `OK` to perform a connection test.
1. If the connection test was successful, select `No` to skip the Wii System Update.

If you get error 20100 or 20110, that means the game is too new for this method.
{: .notice--warning}

If you get error 23400, that means your ISP (Internet Service Provider) or network is blocking the use of a custom DNS. <br>
Wiimmfi has a DNS sever you can run on your PC to solve this. [Read more here.](https://wiimmfi.de/patcher/dnspatch#customdns)
{: .notice--warning}

### Automatic patching using a USB Loader

If you are already using USB Loader GX, try updating it to the most recent version. Then, there should be a "private server" setting (both in the global loader options and in the game options) which you can set to "Wiimmfi" to make the USB Loader automatically patch every game you start to work with Wiimmfi.

### ISO Patching

You may not want to run a patcher each time you want to play on Wiimmfi, and maybe you already use a USB Loader. As such, ISO Patchers were created, some for specific games.

#### What you need

* Your copy of your game (WBFS, ISO, cISO, and other forms that a Wii can use are supported).
* [RiiConnect24 Patcher](https://github.com/RiiConnect24/RiiConnect24-Patcher/releases/) (Windows and Unix)  

**or**

* [Wiimmfi Patcher (cross-platform)](https://download.wiimmfi.de/patcher/wiimmfi-patcher-latest.zip)
* A USB Loader, [cIOS](cios), and a USB to store the game on (you should already have these if you're using a USB Loader)

#### Instructions

1. Extract the patcher of your choice to a folder, and place your copy of the game in it.
1. Run the patch script for your OS: usually it will end in `.bat` for Windows and `.sh` for Mac/Linux. If you're using the RiiConnect24 Patcher, select your device (Wii, vWii, or Dolphin) and choose the patcher for your game.
1. Once it's finished, get the version out of the `wiimmfi-images` folder (it may be in the folder outside of the patcher - ../wiimmfi-images) and copy it back to your USB.

### WiiWare Patching

You can patch WiiWare games in order to play them on Wiimmfi.

#### What you need

* An SD card
* Your copy of your game (in WAD format)
* [RiiConnect24 Patcher](https://github.com/RiiConnect24/RiiConnect24-Patcher/releases/) (Windows and Unix)  

**or**

* [WiiWare Patcher](https://github.com/RiiConnect24/WiiWare-Patcher/releases) (cross platform)
* [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

[If you want to see how to use the WiiWare Patcher, click here!](wiiwarepatcher)
{: .notice--info}

Steps:

1. Extract the .zip of the latest version of WiiWare Patcher, and put your WAD in it.
1. Run the patch script for your OS: usually it will end in `.bat` for Windows and `.sh` for Mac/Linux. If you're using the RiiConnect24 Patcher, select your device (Wii, vWii, or Dolphin) and choose the WiiWare patcher.
1. If it completed successfully, install the WAD that was made in `wiiware-wads` with YAWM ModMii Edition.

## Other stuff

### Mario Kart Wii Competitions

Wiimmfi allows you to participate in Mario Kart Wii competitions again.

#### What you need

* An SD card or USB drive
* Mario Kart Wii Competition Patcher
    * [Wii](https://oscwii.org/library/app/competition-tool-wii)
    * [Wii U (vWii)](https://competitions.wiimmfi.de/competition-tool-wiiu.zip)

#### Instructions (for Wii)

1. Extract Mario Kart Wii Competition Patcher and put it in the `apps` folder on your SD Card.
1. Insert your SD card or USB drive into the Wii.
1. Launch the original Mario Kart Wii game (not Wiimmfi patched).
1. Navigate to Settings -> Network Settings (or Nintendo WFC Connection) -> Message Service. If you turned the message service feature on, turn it off and turn it on again.
1. Launch Mario Kart Wii Competition Patcher.
1. The patcher will look for save files for Mario Kart Wii on your storage device in various places, and upload them. This is done in case a missing competition is found in your save file. It will also, of course, patch your Wii for competitions.

If you're using the Wii U, you will have to run the competitions patcher whenever you want to check for a competition, because WiiConnect24 is not enabled on the Wii U.
{: .notice--info}

### DS Games

Wiimmfi doesn't only support Wii games, it supports lots of DS games too. Thanks to an exploit called nds-constraint, you can play DS games online without patching your games.

#### What you need

* A Wi-Fi network with WEP or no security

Getting a Wi-Fi network with WEP or no security is the hardest part, because DS games don't support newer Wi-Fi security types. However, many routers support creating a guest Wi-Fi connection, or you can make a hotspot on your phone or your computer. There are plenty of resources on the Internet that have information on this, so use your favorite search engine to find them.
{: .notice--info}

Some games are DSi enhanced which means you can play games online without having only WEP or no security on your router if you have a DSi or 3DS. Pokémon Black and Pokémon White are DSi enhanced. In order to make use of it, follow the instructions below via the DSi or 3DS Wi-Fi settings. Those are separate from the DS Wi-Fi settings.
{: .notice--info}

#### Instructions

1. Go in the Nintendo DS Wi-Fi settings. This can be accessed inside the game you want to play online with.
1. Set up a connection.
1. Type in `167.86.108.126` as the primary DNS.
1. Type in `1.1.1.1` as the secondary DNS.
1. Save your connection settings and perform a connection test. If it's successful, then you're ready to play.

If you get error 20110, that means your ISP (Internet Service Provider) or network is blocking the use of a DNS. You can use our [DNS-Server](https://github.com/RiiConnect24/DNS-Server/releases/latest) program to bypass this.
{: .notice--warning}

You cannot use Sudomemo, which revives Flipnote Studio on the DSi, if you're using this DNS. If you want to use Sudomemo instead of playing games on Wiimmfi, you will have to set your primary DNS to `104.248.0.110` on Wi-Fi settings on your DSi or 3DS, not the DS Wi-Fi settings. Or you can use their [DNS-Server](https://github.com/Sudomemo/sudomemoDNS) program.
{: .notice--warning}

### Mario Kart Wii Mods

#### CTGP-R

MrBean35000vr and Chadderz have a custom track distribution called CTGP-R that allows you to use a set of custom tracks and has automatic Wiimmfi patching. Go to the [ChadSoft website](http://chadsoft.co.uk) for the download and instructions.

#### MKW Hack Pack

PhillyG has put together a collection of custom tracks and hacks called MKW Hack Pack, and allows connections to Wiimmfi. To learn how to set it up, go to the [wiki page](http://wiki.tockdom.com/wiki/MKW_Hack_Pack).

#### Wiimms Mario Kart Fun

Wiimm and Leseratte make a custom track distribution called "Wiimms MKW Fun", which gets updated about three times a year. It is based on the LE-CODE framework by Leseratte, has Wiimmfi support, and lots of other features. You can find out more about it on its [wiki page](http://wiki.tockdom.com/wiki/Wiimms_Mario_Kart_Fun).

[Continue to RiiConnect24](riiconnect24)<br>
RiiConnect24 allows you to use discontinued services from WiiConnect24, which include the News, Forecast, Everybody Votes, Nintendo and Check Mii Out Channel, along with Wii Mail. This is optional to install.
{: .notice--info}

[Continue to WiiLink](wiilink)<br>
WiiLink lets you use the Japanese-exclusive channels known as Wii no Ma and Digicam Print Channel. This is optional to install.
{: .notice--info}

[Continue to site navigation](site-navigation)<br>
We have many other tutorials that you might like.
{: .notice--info}
