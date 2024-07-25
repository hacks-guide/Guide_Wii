---
title: "Go in the Nintendo DS Wi-Fi settings."
---

{% include toc title="İçerikler" %}

[Wiimmfi](https://wiimmfi.de) is a replacement service for the now-defunct Nintendo Wi-Fi Connection. While different games were supported for longer than others, all games are no longer able to play through conventional means as of August 2023. To regain Nintendo WFC functionality, this guide provides instructions on installing Wiimmfi. There are lots of different methods to connect to Wiimmfi. Choose the one that fits your needs best.

If you get the error 23904 while connecting to Wiimmfi, then you are using an outdated patch.<br> Follow the steps below for the method you're using to connect to Wiimmfi again.<br> See [this page](https://wiimmfi.de/update) for more details.<br>
{: .notice--warning}

### Automatic patching from the Disc Channel using Priiloader

If you see the hack `Wiimmfi patch v2` or `Wiimmfi patch v3` instead, then you do not have the latest version of the hacks_hash.ini file, and you need to [re-install Priiloader](priiloader). You must reinstall Priiloader, the guide to which can be found in the requirements section.
{: .notice--warning}

A method for Wiimmfi patching which runs on retail disc games automatically via the Disc Channel.

#### Gereksinimler
+ A Wii with an internet connection, on System Menu version 4.3
+ [Priiloader](priiloader) 0.9 or later

#### Talimatlar

1. Hold the RESET button while turning on your Wii. If you are using a Wii mini, plug in a USB keyboard and hold Escape on it while turning it on.
1. You should see the Priiloader menu.

    ![](/images/priiloader/mainmenu.jpg)

1. Go to `System Menu Hacks`. If you are using a USB drive to install Priiloader, make sure you do not have an SD card inserted at the same time. This will cause Priiloader to be unable to find the hacks_hash.ini file.
    {: .notice--info}
1. Make sure the `Wiimmfi patch v4` hack is enabled.

    ![](/images/priiloader/hacks.jpg)

1. Go to `Change Settings`.
1. Return to the main menu, and press `System Menu` to return to the Wii Menu.
1. MrBean35000vr (creator of CTGP-R, a Mario Kart Wii content pack) created a Wiimmfi Disc Patcher that allows you to insert a disc and patch the game on-the-fly for Wiimmfi use, though this must be run every time you start the disc.

### Automatic patching using a USB Loader

There's an easy method to patch games to use Wiimmfi that can be used whether or not you have homebrew on your Wii.

#### Gereksinimler

+ Mario Kart Wii Competitions
+ [A Wii with Priiloader 0.9 or later installed](wii-loaders)

#### Talimatlar

1. Open the game or global settings for your specific USB loader and search for the `Private Server` option. By default, it will be set to `Off`.
1. Set the option to `Wiimmfi` and save the settings. By default, games should now be automatically patched for Wiimmfi.

### Automatic Disc Patching via Custom DNS

A method for Wiimmfi patching which runs on retail game discs automatically through the usage of a custom DNS server. It works on some older games, such as Mario Kart Wii and Super Smash Bros. Brawl, but not every game. Due to the nature of this process, it can be run on Wiis without homebrew.

If you get error 20100 or 20110, that means the game is too new for this method.
{: .notice--warning}

Wiimmfi allows you to participate in Mario Kart Wii competitions again.
{: .notice--warning}

#### Gereksinimler

+ A Wii with an Internet connection

#### Talimatlar

1. Go to `Wii Settings > Internet > Connection Settings` and select whatever connection you are using. Then, `Change Settings > Auto-Obtain DNS NO > Advanced Settings`. Type in `95.217.77.181` as the primary DNS.
1. If you're using the Wii U, you will have to run the competitions patcher whenever you want to check for a competition, because WiiConnect24 is not enabled on the Wii U.
1. The game should now start with the Wiimmfi patch included

### Manual Disc Patching via Homebrew Channel

A method for Wiimmfi patching which runs on retail disc games, but must be manually launched via the Homebrew Channel.

#### Gereksinimler

+ An SD card or USB drive
+ [Auto Wiimmfi Patcher](https://oscwii.org/library/app/wiimmfipatcher)

#### Talimatlar

1. Extract Auto Wiimmfi Patcher to the root of your SD card or USB drive.
1. Insert your SD Card into your Wii, and launch Auto Wiimmfi Patcher from the Homebrew Channel.
1. Insert your game disc (you can insert it before or after launch, it doesn't matter).

### Manual Disc Patching via EULA User Agreement

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the EULA User Agreement (derives from [str2hax](str2hax)). Due to the nature of this process, it can be ran on Wiis without homebrew.

#### Gereksinimler

+ Wii U (vWii)

#### Talimatlar

1. Insert your game disc.
1. Go to `Wii Settings`. Go to `Auto-Obtain DNS` (Not IP Address), then select `No`, then `Advanced Settings`. Set your primary DNS to `95.217.77.151`, and your secondary DNS to `1.1.1.1`.

    ![](/images/wiimmfi/dns-str2hax-wiimmfi.png)

1. If the connection test was successful, select `No` to skip the Wii System Update.
1. Go to `Page 2`, then click on `Internet`. Confirm that you do want to use WC24 and the shop channel
1. The Wiimmfi patcher page should show up. If it doesn't, and you still see the default license agreement, your router might not be compatible with this method.
1. You can patch WiiWare games in order to play them on Wiimmfi.

### Manual Disc Patching via Internet Channel

If you run into UPnP-related issues (such as the patcher getting stuch at "Init network..." or "add UPnP port forward" steps for more than 10 seconds), you can press the - button on your Wii Remote, or the Y button on your GameCube controller as soon as the patcher loads to circumvent this.
{: .notice--warning}

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the Internet Channel (derives from [Flashhax](flashhax)). Due to the nature of this process, it can be ran on Wiis without homebrew. [This](wiimmfi#manual-disc-patching-via-eula-user-agreement) method is generally more reliable, and is recommended instead.

#### Gereksinimler

+ A Wii with an internet connection, running in 60Hz mode
+ The Internet Channel

#### Talimatlar

1. Open the following webpage in the Internet Channel: `http://chadsoft.co.uk/wiimmfi`
1. Add the page to the browser favorites by clicking the Star icon, then the `Add Favorite` button.
1. Hold the RESET button while turning on your Wii.
1. Open the Internet Channel again and access the favorite you just made.
1. It should be patched with Wiimmfi. Be patient, as Flashhax can be very unreliable - it may take several tries to get right.

### WiiWare Patching

A method for Wiimmfi patching which runs on WiiWare games, but must be manually run on a PC via a script.

#### Gereksinimler

* An SD card
* Your copy of your game (in WAD format)
* [WiiWare Patcher](https://github.com/RiiConnect24/WiiWare-Patcher/releases) (cross platform)
* [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

[If you want to see how to use the WiiWare Patcher, click here!](wiiwarepatcher)
{: .notice--info}

#### Talimatlar

1. Extract the .zip of the latest version of WiiWare Patcher, and put your WAD in it.
1. Run the patch script for your OS: usually it will end in `.bat` for Windows and `.sh` for Mac/Linux. If you're using the RiiConnect24 Patcher, select your device (Wii, vWii, or Dolphin) and choose the WiiWare patcher.
1. If it completed successfully, install the WAD that was made in `wiiware-wads` with YAWM ModMii Edition.

### Manual Disc Image Patching via PC

A method for Wiimmfi patching which runs on game disc images, but must be manually run on a PC via a script.

#### Gereksinimler

+ A computer with Windows on it (or using Mono or Wine on Mac/Linux)
+ A copy of the game you want to patch - supported formats are `ISO`, `WDF`, `WIA`, `CISO (=WBI)`, `WBFS`, `GCZ`, and `FST` - `NKIT` is NOT supported
+ [ISO Patching](https://download.wiimmfi.de/patcher/wiimmfi-patcher-latest.zip)

#### Talimatlar

1. Download the patcher and extract the `.zip` file.
1. Insert your SD card or USB drive into the Wii.
    + If you're on Windows, double-click the `patch-images.bat` file (this may also be displayed as "patch-images" Batch File). If you run into Cygwin-related issues, try the `patch-images-32.bat` file instead.
    + If you're on MacOS, open a command line prompt in the current folder, make the shell script executable through the command `chmod +x *.sh` and then execute `./patch-images.sh`.
    + If you're on Linux, double-click the `patch-images.desktop` file (this may also be displayed as "Patch Images") or execute the `./patch-images.sh` file in a terminal after making it executable through the command `chmod +x *.sh`.
1. If the above was successful, you should see a window pop-up that displays the patching process. Once it's finished, get the version out of the `wiimmfi-images` folder (it may be in the folder outside of the patcher - ../wiimmfi-images) and copy it back to your USB.

Congrats on making it to the end of the optional section of the main guide! You can go to the site index below if you would like to look for other guides.
{: .notice--success}

[Site dizinine geri dönmek için burayı tıklayın.](site-navigation)
{: .notice--info}
