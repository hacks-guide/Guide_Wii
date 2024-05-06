---
title: "转到 NDS Wi-Fi 设置。"
---

{% include toc title="Table of Contents" %}

Nintendo Wi-Fi Connection was an online multiplayer gaming service for the Wii, allowing free online play. While different games were supported for longer than others, all games are no longer able to play through conventional means as of August 2023. To regain Nintendo WFC functionality, this guide provides instructions on installing Wiimmfi. 有许多不同的方法可以连接到 Wiimmfi。 While different games were supported for longer than others, all games are no longer able to play through conventional means as of August 2023. To regain Nintendo WFC functionality, this guide provides instructions on installing Wiimmfi. 有许多不同的方法可以连接到 Wiimmfi。 选择最适合您需求的方法。

完成后，从 `wiimmfi-images` 文件夹中获取版本（它可能位于 patcher 外部的文件夹中 - ../wiimmfi-images），然后将其复制回您的 USB。<br>
{: .notice--warning}

### 使用 Priiloader 从光盘频道自动修补

如果您看到 hack `Wiimmfi patch v2` 或 `Wiimmfi patch v3` ，那么您的 hacks_hash.ini 文件版本不是最新的，您需要[重新安装 Priiloader](priiloader)。 You must reinstall Priiloader, the guide to which can be found in the requirements section.
{: .notice--warning}

A method for Wiimmfi patching which runs on retail game discs automatically through the usage of a custom DNS server. While convinient, it only works with a small selection of games including Mario Kart Wii and SSBB. Due to the nature of this process, it can be run on Wiis without homebrew.

#### Requirements
+ A Wii with an internet connection, on System Menu version 4.3
+ 如果您使用的是旧版本的 Priiloader 或尚未安装，请参考[此指南](priiloader)进行更新/安装。

#### Instructions

1. Hold the RESET button while turning on your Wii. 如果使用 Wii Mini，插入 USB 键盘并在打开时按住 Esc。 如果使用 Wii Mini，插入 USB 键盘并在打开时按住 Esc。
1. 你应该会看到 Priiloader 菜单。

    ![](/images/priiloader/mainmenu.jpg)

1. 前往 `System Menu Hacks`。 如果您使用 U 盘安装 Priiloader，请确保没有同时插入 SD 卡。 这将导致 Priiloader 找不到 hacks_hash.ini 文件。
    {: .notice--info}
1. 请确保启用了 `Wiimmfi patch v4` 修改。

    ![](/images/priiloader/hacks.jpg)

1. 转到 `Change Settings（更改设置）`。
1. Return to the main menu, and press `System Menu` to return to the Wii Menu.
1. A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the EULA User Agreement (derives from [str2hax](str2hax)). Due to the nature of this process, it can be ran on Wiis without homebrew.

### 使用 USB Loader 自动修补

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the Internet Channel (derives from [Flashhax](flashhax)). Due to the nature of this process, it can be ran on Wiis without homebrew. [This](wiimmfi#manual-disc-patching-via-eula-user-agreement) method is generally more reliable, and is recommended instead.

#### Requirements

+ 步骤（适用于 Wii）
+ [安装了 Priiloader 0.9 或更高版本的 Wii](wii-loaders)

#### Instructions

1. Open the game or global settings for your specific USB loader and search for the `Private Server` option. By default, it will be set to `Off`. By default, it will be set to `Off`.
1. Set the option to `Wiimmfi` and save the settings. Set the option to `Wiimmfi` and save the settings. By default, games should now be automatically patched for Wiimmfi.

### Automatic Disc Patching via Custom DNS

A method for Wiimmfi patching which runs on retail game discs automatically through the usage of a custom DNS server. While convinient, it only works with a small selection of games including Mario Kart Wii and SSBB. Due to the nature of this process, it can be run on Wiis without homebrew.

如果出现错误 20100 或 20110，这意味着该游戏对于此方法来说太新了。
{: .notice--warning}

如果出现错误 23400，这意味着您的 ISP（互联网服务提供商）或网络正在阻止使用自定义 DNS。 <br> Wiimmfi 有一个可以在电脑上运行的 DNS 服务器来解决此问题。 请点击[这里](https://wiimmfi.de/patcher/dnspatch#customdns)了解更多信息。
{: .notice--warning}

#### Requirements

+ 一台连接互联网的Wii

#### Instructions

1. 转到 `Wii Settings（Wii 设置）`。 转到 `Auto-Obtain DNS（自动获取 DNS）`（不是 IP 地址），然后选择 `否`，然后选择 `Advanced Settings（高级设置）`。 Set your primary DNS to `95.217.77.151`, and your secondary DNS to `1.1.1.1`.
1. 如果您使用 Wii U，每当您想检查比赛时，您将不得不运行 competitions patcher，因为 Wii U 未启用 WiiConnect24。
1. 现在，游戏应该在包含 Wiimmfi 补丁的情况下启动。

### Manual Disc Patching via Homebrew Channel

A method for Wiimmfi patching which runs on retail disc games, but must be manually launched via the Homebrew Channel.

#### Requirements

+ 一张SD卡或U盘
+ [Auto Wiimmfi Patcher](https://oscwii.org/library/app/wiimmfipatcher)

#### Instructions

1. Simply extract the `apps` folder in this archive to the root of your SD card or USB drive.
1. 将 SD 卡插入 Wii，然后从 Homebrew Channel 启动 Auto Wiimmfi Patcher。
1. 插入游戏光盘（您可以在启动之前或之后插入，没有关系）。

### Manual Disc Patching via EULA User Agreement

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the EULA User Agreement (derives from [str2hax](str2hax)). Due to the nature of this process, it can be ran on Wiis without homebrew.

#### Requirements

+ Wii U (vWii)

#### Instructions

1. 插入您的游戏光盘。
1. Go to `Wii Settings > Internet > Connection Settings` and select whatever connection you are using. Then, `Change Settings > Auto-Obtain DNS NO > Advanced Settings`. 将主要 DNS 设置为 `95.217.77.181`。 转到 `Auto-Obtain DNS（自动获取 DNS）`（不是 IP 地址），然后选择 `否`，然后选择 `Advanced Settings（高级设置）`。 Set your primary DNS to `95.217.77.151`, and your secondary DNS to `1.1.1.1`.

    ![](/images/wiimmfi/dns-str2hax-wiimmfi.png)

1. 如果连接测试成功，请选择 `否` 以跳过 Wii 系统更新。
1. Go back twice to `Internet`, and press `User Agreements`. 确认您要使用 WC24 和 shop channel 确认您要使用 WC24 和 shop channel
1. 应该显示 Wiimmfi patcher 页面。 如果没有显示出来，而是仍然看到默认的许可协议，那么您的路由器可能不兼容这种方法。
1. The Wiimmfi patcher should begin. Be patient, as Flashhax can be very unreliable - it may take several tries to get right.

### Manual Disc Patching via Internet Channel

If you run into UPnP-related issues (such as the patcher getting stuch at "Init network..." or "add UPnP port forward" steps for more than 10 seconds), you can press the - button on your Wii Remote, or the Y button on your GameCube controller as soon as the patcher loads to circumvent this.
{: .notice--warning}

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the Internet Channel (derives from [Flashhax](flashhax)). Due to the nature of this process, it can be ran on Wiis without homebrew. [This](wiimmfi#manual-disc-patching-via-eula-user-agreement) method is generally more reliable, and is recommended instead.

#### Requirements

+ A Wii with an internet connection, running in 60Hz mode
+ 互联网频道（The Internet Channel）

#### Instructions

1. Open the following webpage in the Internet Channel: `http://chadsoft.co.uk/wiimmfi`
1. Add the page to the browser favorites by clicking the Star icon, then the `Add Favorite` button.
1. 打开 Wii 的同时按住 RESET 按钮。
1. Open the Internet Channel again and access the favorite you just made.
1. 它应该已用 Wiimmfi 修补。 Be patient, as Flashhax can be very unreliable - it may take several tries to get right.

### 修补 WiiWare

A method for Wiimmfi patching which runs on WiiWare games, but must be manually run on a PC via a script.

#### Requirements

* 一张SD卡
* 游戏副本（WAD 格式）
* [WiiWare Patcher](https://github.com/RiiConnect24/WiiWare-Patcher/releases)（跨平台）
* [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

[如果您想了解如何使用 WiiWare Patcher，请点击这里！](wiiwarepatcher)
{: .notice--info}

#### Instructions

1. 解压最新版本的 WiiWare Patcher .zip 文件，并将您的 WAD 放入其中。
1. 运行适用于您的操作系统的补丁脚本：通常在 Windows 上以 `.bat` 结尾，在 Mac/Linux 上以 `.sh` 结尾。 如果您正在使用 RiiConnect24 Patcher，选择您的设备（Wii、vWii 或 Dolphin），然后选择 WiiWare patcher。
1. 如果操作成功完成，请使用 YAWM ModMii Edition 安装位于 `wiiware-wads` 文件夹的 WAD。

### Manual Disc Image Patching via PC

A method for Wiimmfi patching which runs on game disc images, but must be manually run on a PC via a script.

#### Requirements

+ A Linux/macOS/Windows PC with an internet connection
+ A copy of the game you want to patch - supported formats are `ISO`, `WDF`, `WIA`, `CISO (=WBI)`, `WBFS`, `GCZ`, and `FST` - `NKIT` is NOT supported
+ [修补 ISO](https://download.wiimmfi.de/patcher/wiimmfi-patcher-latest.zip)

#### Instructions

1. Download the patcher and extract the `.zip` file.
1. 您的游戏副本（支持 WBFS、ISO、cISO 等 Wii 支持的其它格式）。
    + If you're on Windows, double-click the `patch-images.bat` file (this may also be displayed as "patch-images" Batch File). If you're on Windows, double-click the `patch-images.bat` file (this may also be displayed as "patch-images" Batch File). If you run into Cygwin-related issues, try the `patch-images-32.bat` file instead.
    + If you're on MacOS, open a command line prompt in the current folder, make the shell script executable through the command `chmod +x *.sh` and then execute `./patch-images.sh`.
    + If you're on Linux, double-click the `patch-images.desktop` file (this may also be displayed as "Patch Images") or execute the `./patch-images.sh` file in a terminal after making it executable through the command `chmod +x *.sh`.
1. If the above was successful, you should see a window pop-up that displays the patching process. If the above was successful, you should see a window pop-up that displays the patching process. Once the process finishes, you will find the patched images in a folder called `wiimmfi-images`.

Congrats on making it to the end of the optional section of the main guide! You can go to the site index below if you would like to look for other guides. You can go to the site index below if you would like to look for other guides.
{: .notice--success}

[Click here to go back to the site index.](site-navigation)
{: .notice--info}
