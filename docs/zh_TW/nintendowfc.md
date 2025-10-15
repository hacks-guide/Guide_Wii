# Go in the Nintendo DS Wi-Fi settings. This can be accessed inside the game you want to play online with.

<a href="https://wiimmfi.de">Wiimmfi</a> is a replacement service for the now-defunct Nintendo Wi-Fi Connection. It has been developed by Wiimm and Leseratte. While different games were supported for longer than others, all games are no longer able to play through conventional means as of August 2023. To regain Nintendo WFC functionality, this guide provides instructions on installing Wiimmfi. There are lots of different methods to connect to Wiimmfi. Choose the one that fits your needs best.

::: warning

If you get error 23904 while connecting to Wiimmfi, then you are using an outdated patch.

Follow the steps below for the method you're using to connect to Wiimmfi again.

See [this page](https://wiimmfi.de/update) for more details.

:::

## Automatic patching from the Disc Channel using Priiloader

::: warning

If the `Wiimmfi Patch` displays as anything other than v4, you do not have the latest version of the hacks_hash.ini file and the patch will not work. You must reinstall Priiloader, the guide to which can be found in the requirements section.

:::

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the Internet Channel (derives from <a href="flashhax">Flashhax</a>). Due to the nature of this process, it can be ran on Wiis without homebrew. <a href="wiimmfi#manual-disc-patching-via-eula-user-agreement">This</a> method is generally more reliable, and is recommended instead.

### 操作說明

- A Wii with an internet connection, on System Menu version 4.3
- [Priiloader](priiloader) 0.9 or later

### Instructions

1. Hold the RESET button while turning on your Wii. If you are using a Wii mini, plug in a USB keyboard and hold Escape on it while turning it on. If you are using a Wii mini, plug in a USB keyboard and hold Escape on it while turning it on.

2. You should see the Priiloader menu.

   ![](/images/priiloader/mainmenu.png)

3. Go to `System Menu Hacks`.

   ::: info

   If you are using a USB drive to install Priiloader, make sure you do not have an SD card inserted at the same time. This will cause Priiloader to be unable to find the hacks_hash.ini file.
   Go to <code>System Menu Hacks</code>. If you are using a USB drive to install Priiloader, make sure you do not have an SD card inserted at the same time. This will cause Priiloader to be unable to find the hacks_hash.ini file. This will cause Priiloader to be unable to find the hacks_hash.ini file.

   :::

4. Make sure the `Wiimmfi patch v4` hack is enabled.

   ![](/images/priiloader/hacks.png)

5. Scroll to `Save Settings` and save your changes.

6. Return to the main menu, and press `System Menu` to return to the Wii Menu.

7. Launch your game through the Disc channel. It should be patched with Wiimmfi.

## Automatic patching using a USB Loader

If you are already using USB Loader GX, try updating it to the most recent version. Then, there should be a "private server" setting (both in the global loader options and in the game options) which you can set to "Wiimmfi" to make the USB Loader automatically patch every game you start to work with Wiimmfi.

### 操作說明

- Mario Kart Wii Competitions
- [USB Loader GX or WiiFlow Lite](wii-loaders)

### Instructions

1. Open the game or global settings for your specific USB loader and search for the `Private Server` option. By default, it will be set to `Off`.
2. Set the option to `Wiimmfi` and save the settings. Set the option to <code>Wiimmfi</code> and save the settings. By default, games should now be automatically patched for Wiimmfi.

## Automatic Disc Patching via Custom DNS

A method for Wiimmfi patching which runs on retail game discs automatically through the usage of a custom DNS server. While convinient, it only works with a small selection of games including Mario Kart Wii and SSBB. Due to the nature of this process, it can be run on Wiis without homebrew. While convenient, it only works with a small selection of games including Mario Kart Wii and SSBB. Due to the nature of this process, it can be run on Wiis without homebrew.

::: warning

If you get error 20100 or 20110, that means the game is too new for this method.

:::

::: warning

If you get error 23400, your ISP or network is blocking the use of a custom DNS.

To solve this issue, Wiimmfi has a custom DNS server that can be ran on your PC - you can read about it [here](https://wiimmfi.de/patcher/dnspatch#customdns).

:::

### 操作說明

- Mario Kart Wii Competitions

### Instructions

1. Go to `Wii Settings > Internet > Connection Settings` and select whatever connection you are using. Then, `Change Settings > Auto-Obtain DNS NO > Advanced Settings`. Set your primary DNS to `95.217.77.181`, and your secondary DNS to `1.1.1.1`.
2. If you're using the Wii U, you will have to run the competitions patcher whenever you want to check for a competition, because WiiConnect24 is not enabled on the Wii U.
3. Launch your game through the Disc channel. It should be patched with Wiimmfi.

## Manual Disc Patching via Homebrew Channel

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the EULA User Agreement (derives from <a href="str2hax">str2hax</a>). Due to the nature of this process, it can be ran on Wiis without homebrew.

### 操作說明

- 一張 SD 卡或 USB 隨身碟
- [Auto Wiimmfi Patcher](https://oscwii.org/library/app/wiimmfipatcher)

### Instructions

1. Simply extract the `apps` folder in this archive to the root of your SD card or USB drive.
2. Insert your SD Card into your Wii, and launch Auto Wiimmfi Patcher from the Homebrew Channel.
3. Insert your game disc (you can insert it before or after launch, it doesn't matter).

## Manual Disc Patching via EULA User Agreement

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the EULA User Agreement (derives from [str2hax](str2hax)). Due to the nature of this process, it can be ran on Wiis without homebrew.

### 操作說明

- Mario Kart Wii Competitions

### Instructions

1. Insert your game disc.

2. Go to `Wii Settings > Internet > Connection Settings` and select whatever connection you are using. Then, `Change Settings > Auto-Obtain DNS NO > Advanced Settings`. Set your primary DNS to `95.217.77.151`, and your secondary DNS to `1.1.1.1`.

   ![](/images/wiimmfi/dns-str2hax-wiimmfi.png)

3. If you're using the Wii U, you will have to run the competitions patcher whenever you want to check for a competition, because WiiConnect24 is not enabled on the Wii U.

4. Go back twice to `Internet`, and press `User Agreements`. Go to <code>Page 2</code>, then click on <code>Internet</code>. Confirm that you do want to use WC24 and the shop channel

5. The Wiimmfi patcher page should now display. The Wiimmfi patcher page should show up. If it doesn't, and you still see the default license agreement, your router might not be compatible with this method. The Wiimmfi patcher page should show up. If it doesn't, and you still see the default license agreement, your router might not be compatible with this method.

6. You may not want to run a patcher each time you want to play on Wiimmfi, and maybe you already use a USB Loader. As such, ISO Patchers were created, some for specific games.

## Manual Disc Patching via Internet Channel

::: warning

If you run into UPnP-related issues (such as the patcher getting stuck at "Init network..." or "add UPnP port forward" steps for more than 10 seconds), you can press the - button on your Wii Remote, or the Y button on your GameCube controller as soon as the patcher loads to circumvent this.

:::

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the Internet Channel (derives from [Flashhax](flashhax)). Due to the nature of this process, it can be ran on Wiis without homebrew. [This](nintendowfc#manual-disc-patching-via-eula-user-agreement) method is generally more reliable, and is recommended instead.

### 操作說明

- A Wii with an internet connection, running in 60Hz mode
- The Internet Channel

### Instructions

1. Open the following webpage in the Internet Channel: `http://chadsoft.co.uk/wiimmfi`
2. Add the page to the browser favorites by clicking the Star icon, then the `Add Favorite` button.
3. Hold the RESET button while turning on your Wii.
4. Open the Internet Channel again and access the favorite you just made.
5. The Wiimmfi patcher should begin. The Wiimmfi patcher should begin. Be patient, as Flashhax can be very unreliable - it may take several tries to get right.

## WiiWare Patching

There's an easy method to patch games to use Wiimmfi that can be used whether or not you have homebrew on your Wii. It works on some older games, such as Mario Kart Wii and Super Smash Bros. Brawl, but not every game.

### 操作說明

- 一張 SD 卡
- Your copy of your game (in WAD format)
- [WiiWare Patcher](https://github.com/RiiConnect24/WiiWare-Patcher/releases/latest) (cross platform)
- [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

### Instructions

1. Extract the .zip of the latest version of WiiWare Patcher, and put your WAD in it.
2. Run the patch script for your OS: usually it will end in `.bat` for Windows and `.sh` for Mac/Linux. Run the patch script for your OS: usually it will end in <code>.bat</code> for Windows and <code>.sh</code> for Mac/Linux. Run the patch script for your OS: usually it will end in <code>.bat</code> for Windows and <code>.sh</code> for Mac/Linux. If you're using the RiiConnect24 Patcher, select your device (Wii, vWii, or Dolphin) and choose the WiiWare patcher.
3. If it completed successfully, install the WAD that was made in `wiiware-wads` with [YAWM ModMii Edition](yawmme).

## Manual Disc Image Patching via PC

A method for Wiimmfi patching which runs on game disc images, but must be manually run on a PC via a script.

### 操作說明

- A computer with Windows on it (or using Mono or Wine on Mac/Linux)
- A copy of the game you want to patch - supported formats are `ISO`, `WDF`, `WIA`, `CISO (=WBI)`, `WBFS`, `GCZ`, and `FST` - `NKIT` is NOT supported
- [Wiimmfi ISO Patcher](https://download.wiimmfi.de/patcher/wiimmfi-patcher-latest.zip)

### Instructions

1. Download the patcher and extract the `.zip` file.
2. Insert your SD card or USB drive into the Wii.
   - If you're on Windows, double-click the `patch-images.bat` file (this may also be displayed as "patch-images" Batch File). If you run into Cygwin-related issues, try the `patch-images-32.bat` file instead.
   - If you're on MacOS, open a command line prompt in the current folder, make the shell script executable through the command `chmod +x *.sh` and then execute `./patch-images.sh`.
   - If you're on Linux, double-click the `patch-images.desktop` file (this may also be displayed as "Patch Images") or execute the `./patch-images.sh` file in a terminal after making it executable through the command `chmod +x *.sh`.
3. If the above was successful, you should see a window pop-up that displays the patching process. Once the process finishes, you will find the patched images in a folder called `wiimmfi-images`.

::: tip

Congrats on making it to the end of the optional section of the main guide! You can go to the site index below if you would like to look for other guides. You can go to the site index below if you would like to look for other guides.

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::
