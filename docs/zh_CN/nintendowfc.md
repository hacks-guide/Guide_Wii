# 转到 NDS Wi-Fi 设置。

Nintendo Wi-Fi Connection was an online multiplayer gaming service for the Wii, allowing free online play. While different games were supported for longer than others, all games are no longer able to play through conventional means as of August 2023. To regain Nintendo WFC functionality, this guide provides instructions on installing Wiimmfi. 有许多不同的方法可以连接到 Wiimmfi。 While different games were supported for longer than others, all games are no longer able to play through conventional means as of August 2023. To regain Nintendo WFC functionality, this guide provides instructions on installing Wiimmfi. 有许多不同的方法可以连接到 Wiimmfi。 选择最适合您需求的方法。

::: warning

If you get error 23904 while connecting to Wiimmfi, then you are using an outdated patch.

Follow the steps below for the method you're using to connect to Wiimmfi again.

See [this page](https://wiimmfi.de/update) for more details.

:::

## 使用 Priiloader 从光盘频道自动修补

::: warning

If the `Wiimmfi Patch` displays as anything other than v4, you do not have the latest version of the hacks_hash.ini file and the patch will not work. You must reinstall Priiloader, the guide to which can be found in the requirements section.

:::

A method for Wiimmfi patching which runs on retail game discs automatically through the usage of a custom DNS server. While convinient, it only works with a small selection of games including Mario Kart Wii and SSBB. Due to the nature of this process, it can be run on Wiis without homebrew.

### 需要

- A Wii with an internet connection, on System Menu version 4.3
- [Priiloader](priiloader) 0.9 or later

### 步骤

1. Hold the RESET button while turning on your Wii. 如果使用 Wii Mini，插入 USB 键盘并在打开时按住 Esc。 如果使用 Wii Mini，插入 USB 键盘并在打开时按住 Esc。

2. 你应该会看到 Priiloader 菜单。

   ![](/images/priiloader/mainmenu.png)

3. Go to `System Menu Hacks`.

   ::: info

   如果您使用 U 盘安装 Priiloader，请确保没有同时插入 SD 卡。
   这将导致 Priiloader 找不到 hacks_hash.ini 文件。

   :::

4. Make sure the `Wiimmfi patch v4` hack is enabled.

   ![](/images/priiloader/hacks.png)

5. Scroll to `Save Settings` and save your changes.

6. Return to the main menu, and press `System Menu` to return to the Wii Menu.

7. A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the EULA User Agreement (derives from <a href="str2hax">str2hax</a>). Due to the nature of this process, it can be ran on Wiis without homebrew.

## 使用 USB Loader 自动修补

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the Internet Channel (derives from <a href="flashhax">Flashhax</a>). Due to the nature of this process, it can be ran on Wiis without homebrew. <a href="wiimmfi#manual-disc-patching-via-eula-user-agreement">This</a> method is generally more reliable, and is recommended instead.

### 需要

- 步骤（适用于 Wii）
- [USB Loader GX or WiiFlow Lite](wii-loaders)

### 步骤

1. Open the game or global settings for your specific USB loader and search for the `Private Server` option. By default, it will be set to `Off`.
2. Set the option to `Wiimmfi` and save the settings. Set the option to <code>Wiimmfi</code> and save the settings. By default, games should now be automatically patched for Wiimmfi.

## Automatic Disc Patching via Custom DNS

A method for Wiimmfi patching which runs on retail game discs automatically through the usage of a custom DNS server. While convenient, it only works with a small selection of games including Mario Kart Wii and SSBB. Due to the nature of this process, it can be run on Wiis without homebrew.

::: warning

如果出现错误 20100 或 20110，这意味着该游戏对于此方法来说太新了。

:::

::: warning

If you get error 23400, your ISP or network is blocking the use of a custom DNS.

To solve this issue, Wiimmfi has a custom DNS server that can be ran on your PC - you can read about it [here](https://wiimmfi.de/patcher/dnspatch#customdns).

:::

### 需要

- 步骤（适用于 Wii）

### 步骤

1. Go to `Wii Settings > Internet > Connection Settings` and select whatever connection you are using. Then, `Change Settings > Auto-Obtain DNS NO > Advanced Settings`. Set your primary DNS to `95.217.77.181`, and your secondary DNS to `1.1.1.1`.
2. 如果您使用 Wii U，每当您想检查比赛时，您将不得不运行 competitions patcher，因为 Wii U 未启用 WiiConnect24。
3. A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the EULA User Agreement (derives from <a href="str2hax">str2hax</a>). Due to the nature of this process, it can be ran on Wiis without homebrew.

## Manual Disc Patching via Homebrew Channel

A method for Wiimmfi patching which runs on retail disc games, but must be manually launched via the Homebrew Channel.

### 需要

- 一张SD卡或移动硬盘/U 盘
- [Auto Wiimmfi Patcher](https://oscwii.org/library/app/wiimmfipatcher)

### 步骤

1. Simply extract the `apps` folder in this archive to the root of your SD card or USB drive.
2. 将 SD 卡插入 Wii，然后从 Homebrew Channel 启动 Auto Wiimmfi Patcher。
3. 插入游戏光盘（您可以在启动之前或之后插入，没有关系）。

## Manual Disc Patching via EULA User Agreement

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the EULA User Agreement (derives from [str2hax](str2hax)). Due to the nature of this process, it can be ran on Wiis without homebrew.

### 需要

- 步骤（适用于 Wii）

### 步骤

1. 插入您的游戏光盘。

2. Go to `Wii Settings > Internet > Connection Settings` and select whatever connection you are using. Then, `Change Settings > Auto-Obtain DNS NO > Advanced Settings`. Set your primary DNS to `95.217.77.151`, and your secondary DNS to `1.1.1.1`.

   ![](/images/wiimmfi/dns-str2hax-wiimmfi.png)

3. 如果您使用 Wii U，每当您想检查比赛时，您将不得不运行 competitions patcher，因为 Wii U 未启用 WiiConnect24。

4. Go back twice to `Internet`, and press `User Agreements`. 确认您要使用 WC24 和 shop channel

5. 应该显示 Wiimmfi patcher 页面。 如果没有显示出来，而是仍然看到默认的许可协议，那么您的路由器可能不兼容这种方法。

6. The Wiimmfi patcher should begin. Be patient, as Flashhax can be very unreliable - it may take several tries to get right.

## Manual Disc Patching via Internet Channel

::: warning

If you run into UPnP-related issues (such as the patcher getting stuck at "Init network..." or "add UPnP port forward" steps for more than 10 seconds), you can press the - button on your Wii Remote, or the Y button on your GameCube controller as soon as the patcher loads to circumvent this.

:::

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the Internet Channel (derives from [Flashhax](flashhax)). Due to the nature of this process, it can be ran on Wiis without homebrew. [This](nintendowfc#manual-disc-patching-via-eula-user-agreement) method is generally more reliable, and is recommended instead.

### 需要

- A Wii with an internet connection, running in 60Hz mode
- 互联网频道（The Internet Channel）

### 步骤

1. Open the following webpage in the Internet Channel: `http://chadsoft.co.uk/wiimmfi`
2. Add the page to the browser favorites by clicking the Star icon, then the `Add Favorite` button.
3. 打开 Wii 的同时按住 RESET 按钮。
4. Open the Internet Channel again and access the favorite you just made.
5. 它应该已用 Wiimmfi 修补。 Be patient, as Flashhax can be very unreliable - it may take several tries to get right.

## 修补 WiiWare

A method for Wiimmfi patching which runs on WiiWare games, but must be manually run on a PC via a script.

### 需要

- 一张SD卡
- 游戏副本（WAD 格式）
- [WiiWare Patcher](https://github.com/RiiConnect24/WiiWare-Patcher/releases/latest) (cross platform)
- [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

### 步骤

1. 解压最新版本的 WiiWare Patcher .zip 文件，并将您的 WAD 放入其中。
2. Run the patch script for your OS: usually it will end in `.bat` for Windows and `.sh` for Mac/Linux. 如果您正在使用 RiiConnect24 Patcher，选择您的设备（Wii、vWii 或 Dolphin），然后选择 WiiWare patcher。
3. If it completed successfully, install the WAD that was made in `wiiware-wads` with [YAWM ModMii Edition](yawmme).

## Manual Disc Image Patching via PC

A method for Wiimmfi patching which runs on game disc images, but must be manually run on a PC via a script.

### 需要

- A Linux/macOS/Windows PC with an internet connection
- A copy of the game you want to patch - supported formats are `ISO`, `WDF`, `WIA`, `CISO (=WBI)`, `WBFS`, `GCZ`, and `FST` - `NKIT` is NOT supported
- [Wiimmfi ISO Patcher](https://download.wiimmfi.de/patcher/wiimmfi-patcher-latest.zip)

### 步骤

1. Download the patcher and extract the `.zip` file.
2. 您的游戏副本（支持 WBFS、ISO、cISO 等 Wii 支持的其它格式）。
   - If you're on Windows, double-click the `patch-images.bat` file (this may also be displayed as "patch-images" Batch File). If you run into Cygwin-related issues, try the `patch-images-32.bat` file instead.
   - If you're on macOS, open a command line prompt in the current folder, make the shell script executable through the command `chmod +x *.sh` and then execute `./patch-images.sh`.
   - If you're on Linux, double-click the `patch-images.desktop` file (this may also be displayed as "Patch Images") or execute the `./patch-images.sh` file in a terminal after making it executable through the command `chmod +x *.sh`.
3. If the above was successful, you should see a window pop-up that displays the patching process. Once the process finishes, you will find the patched images in a folder called `wiimmfi-images`.

::: tip

Congrats on making it to the end of the optional section of the main guide! You can go to the site index below if you would like to look for other guides.

You can go to the site index below if you would like to look for other guides. Additionally, you can read [the hacks.guide wiki](https://wiki.hacks.guide/wiki/Wii) for additional articles about Wii homebrew not included on this site.

:::

::: tip

[点击此处返回站点索引。](site-navigation)

:::
