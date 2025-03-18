# RiiConnect24

Nintendo Wi-Fi Connection was an online multiplayer gaming service for the Wii, allowing free online play. While different games were supported for longer than others, all games are no longer able to play through conventional means as of August 2023. To regain Nintendo WFC functionality, this guide provides instructions on installing Wiimmfi. There are several different methods to connect to Wiimmfi listed in order of least to greatest difficulty - choose the method that suits your situation best.

::: warning

If you get error 23904 while connecting to Wiimmfi, then you are using an outdated patch.

Follow the steps below for the method you're using to connect to Wiimmfi again.

See [this page](https://wiimmfi.de/update) for more details.

:::

## Automatic patching from the Disc Channel using Priiloader

::: warning

If the `Wiimmfi Patch` displays as anything other than v4, you do not have the latest version of the hacks_hash.ini file and the patch will not work. You must reinstall Priiloader, the guide to which can be found in the requirements section.

:::

A method for Wiimmfi patching which runs on retail disc games automatically via the Disc Channel.

### Requirements

- A Wii with an internet connection, on System Menu version 4.3
- [Priiloader](priiloader) 0.9 or later

### Instructions

1. Hold the RESET button while turning on your Wii. If you are using a Wii mini, plug in a USB keyboard and hold Escape while turning it ON.

2. You should see the Priiloader menu.

    ![](/images/priiloader/mainmenu.png)

3. Go to `System Menu Hacks`.

    ::: info

    If you used a USB drive to install Priiloader, make sure you do not have an SD card inserted at the same time.
    This will cause Priiloader to be unable to find the hacks_hash.ini file.

    :::

4. Make sure the `Wiimmfi patch v4` hack is enabled.

    ![](/images/priiloader/hacks.png)

5. Scroll to `Save Settings` and save your changes.

6. Return to the main menu, and press `System Menu` to return to the Wii Menu.

7. Scroll to <code>System Menu</code> and press A to launch it.

## Homebrew (Disc) Application

A method for Wiimmfi patching which automatically patches game backups in the latest versions of USB Loader GX or WiiFlow Lite.

### Requirements

- A Wii with an Internet connection
- [USB Loader GX or WiiFlow Lite](wii-loaders)

### Instructions

1. Open the game or global settings for your specific USB loader and search for the `Private Server` option. By default, it will be set to `Off`.
2. Set the option to `Wiimmfi` and save the settings. By default, games should now be automatically patched for Wiimmfi.

## No-Homebrew (Disc)

A method for Wiimmfi patching which runs on retail game discs automatically through the usage of a custom DNS server. While convinient, it only works with a small selection of games including Mario Kart Wii and SSBB. Due to the nature of this process, it can be run on Wiis without homebrew.

::: warning

If you get error 20100 or 20110, the game you are trying to play is not supported by this method.

:::

::: warning

If you get error 23400, your ISP or network is blocking the use of a custom DNS.

To solve this issue, Wiimmfi has a custom DNS server that can be ran on your PC - you can read about it [here](https://wiimmfi.de/patcher/dnspatch#customdns).

:::

### Requirements

- A Wii with an Internet connection

### Instructions

1. Go to `Wii Settings > Internet > Connection Settings` and select whatever connection you are using. Then, `Change Settings > Auto-Obtain DNS NO > Advanced Settings`. Set your primary DNS to `95.217.77.181`, and your secondary DNS to `1.1.1.1`.
2. Scroll down to <code>save settings</code> and press A, then press B to go back to the main menu of Priiloader.
3. Scroll to <code>System Menu</code> and press A to launch it.

## Automatic patching using a USB Loader

A method for Wiimmfi patching which runs on retail disc games, but must be manually launched via the Homebrew Channel.

### Requirements

- Un card SD sau o unitate USB
- [Auto Wiimmfi Patcher](https://oscwii.org/library/app/wiimmfipatcher)

### Instructions

1. Simply extract the `apps` folder in this archive to the root of your SD card or USB drive.
2. Insert your SD Card into your Wii, and launch Auto Wiimmfi Patcher from the Homebrew Channel.
3. Insert your game disc (you can insert it before or after launch, it doesn't matter).

## ISO Patching

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the EULA User Agreement (derives from [str2hax](str2hax)). Due to the nature of this process, it can be ran on Wiis without homebrew.

### Requirements

- A Wii with an Internet connection

### Instructions

1. Insert your game disc.

2. Go to `Wii Settings > Internet > Connection Settings` and select whatever connection you are using. Then, `Change Settings > Auto-Obtain DNS NO > Advanced Settings`. Set your primary DNS to `95.217.77.151`, and your secondary DNS to `1.1.1.1`.

    ![](/images/wiimmfi/dns-str2hax-wiimmfi.png)

3. Scroll down to <code>save settings</code> and press A, then press B to go back to the main menu of Priiloader.

4. Go back twice to `Internet`, and press `User Agreements`. Then, confirm that you would like to use WC24 and the Wii Shop Channel.

5. The Wiimmfi patcher page should now display. If it doesn't, and you still see the default license agreement, your router might not be compatible with this method.

6. Wait for about 1 minute and 30 seconds for the patcher to load

## WiiWare Patching

::: warning

MrBean35000vr (creator of CTGP-R, a Mario Kart Wii content pack) created a Wiimmfi Disc Patcher that allows you to insert a disc and patch the game on-the-fly for Wiimmfi use, though this must be run every time you start the disc.

:::

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the Internet Channel (derives from [Flashhax](flashhax)). Due to the nature of this process, it can be ran on Wiis without homebrew. [This](nintendowfc#manual-disc-patching-via-eula-user-agreement) method is generally more reliable, and is recommended instead.

### Requirements

- A Wii with an internet connection, running in 60Hz mode
- Internet Channel

### Instructions

1. Open the following webpage in the Internet Channel: `http://chadsoft.co.uk/wiimmfi`
2. Add the page to the browser favorites by clicking the Star icon, then the `Add Favorite` button.
3. Go to <code>Page 2</code>, then click on <code>Internet</code>.
4. Go to <code>Connection Settings</code>.
5. The Wiimmfi patcher should begin. Be patient, as Flashhax can be very unreliable - it may take several tries to get right.

## Mario Kart Wii Competitions

If you get error 20100 or 20110, that means the game is too new for this method.

### Requirements

- Un card SD
- Your copy of your game (in WAD format)
- [WiiWare Patcher](https://github.com/RiiConnect24/WiiWare-Patcher/releases/latest) (cross platform)
- [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

### Instructions

1. Extract the .zip of the latest version of WiiWare Patcher, and put your WAD in it.
2. Run the patch script for your OS: usually it will end in `.bat` for Windows and `.sh` for Mac/Linux. If you're using the RiiConnect24 Patcher, select your device (Wii, vWii, or Dolphin) and choose the WiiWare patcher.
3. If it completed successfully, install the WAD that was made in `wiiware-wads` with [YAWM ModMii Edition](yawmme).

## DS Games

A method for Wiimmfi patching which runs on game disc images, but must be manually run on a PC via a script.

### Requirements

- A Linux/macOS/Windows PC with an internet connection
- A copy of the game you want to patch - supported formats are `ISO`, `WDF`, `WIA`, `CISO (=WBI)`, `WBFS`, `GCZ`, and `FST` - `NKIT` is NOT supported
- [Wiimmfi ISO Patcher](https://download.wiimmfi.de/patcher/wiimmfi-patcher-latest.zip)

### Instructions

1. Download the patcher and extract the `.zip` file.
2. Open the extracted folder and copy your Wii game images into it.
    - If you're on Windows, double-click the `patch-images.bat` file (this may also be displayed as "patch-images" Batch File). If you run into Cygwin-related issues, try the `patch-images-32.bat` file instead.
    - If you're on MacOS, open a command line prompt in the current folder, make the shell script executable through the command `chmod +x *.sh` and then execute `./patch-images.sh`.
    - If you're on Linux, double-click the `patch-images.desktop` file (this may also be displayed as "Patch Images") or execute the `./patch-images.sh` file in a terminal after making it executable through the command `chmod +x *.sh`.
3. If the above was successful, you should see a window pop-up that displays the patching process. Once the process finishes, you will find the patched images in a folder called `wiimmfi-images`.

::: tip

Congrats on making it to the end of the optional section of the main guide! You can go to the site index below if you would like to look for other guides.

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::
