---
title: "安装 Wii 菜单主题"
---

{% include toc title="Table of Contents" %}

This guide is intended to be the last you will ever need when it comes to theming on the Wii, not only providing instructions for the Wii Menu through csm-installer, but also with themes on WiiFlow Lite, USB Loader GX, and The Homebrew Channel. Additionally, forwarders are covered.

### 转到 `Options` > `Standard System Menu` > Wii 菜单版本 > Wii 菜单区域

DO NOT CONTINUE WITH THIS GUIDE UNLESS YOU HAVE ADEQUATE BRICK PROTECTION, SPECIFICALLY [BOOTMII](bootmii) AND [PRIILOADER](priiloader)!
{: .notice--danger}

csm-installer has built in safety features to prevent from installing bad or corrupt Wii Menu themes, so please opt to use it instead of other theme installation homebrew.
{: .notice--warning}

请仅使用这里提供的 ThemeMii 版本，因为 ThemeMii Mod 允许您制作适用于 Wii 菜单版本 4.3 的主题，其他版本可能不兼容。
{: .notice--warning}

请仅安装针对您的 Wii 和其当前区域专门设计过的主题。 安装错误区域或版本的主题会导致您的 Wii 变砖。 本教程将告诉您如何创建一个安全可安装的 .csm 文件。
{: .notice--danger}

Before proceeding, it helps to know the difference between .MYM and .CSM as file formats when used in Wii Menu theming. While the MYM is made by the theme creator which can then be shared around, the CSM is the result from building a MYM into a system menu. In other words, MYM mainly just holds assets - the actual system menu itself that needs to be installed comes seperate.
{: .notice--info}

#### 主题链接

+ https://gbatemp.net/threads/wii-theme-team-creations-v2.336596/
+ [Wii Theme Google Drive](https://drive.google.com/drive/folders/1H8bKkZa5Nwy7tBmDvKEVXhoZStucpUr3) (.mym file distribution)
+ https://gbatemp.net/download/categories/other-files.166/
+ [Wii Themer](http://www.wiithemer.org/) (online theme builder for specific versions and regions, ready to install .csm themes)

#### Requirements

* 一台 Wii
* 将您保存的 .csm 文件放入 SD 卡或 U 盘上名为 `modthemes` 的文件夹中。
* A Windows/macOS/Linux PC with an Internet connection
* [csm-installer](https://oscwii.org/library/app/csm-installer)
* [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)

#### 第二部分 - 构建主题

If you don't want to go through the hassle of using an external program to build a theme, you can also download a prebuilt theme from Wii Themer and skip to [Theme Installation](themes#theme-installation).

1. 一旦您下载了想所需的主题并确认选择了正确的版本，解压 ThemeMii Mod 的 .zip 文件并打开应用程序。
1. 前往 `Tools` > `Download Base App` > Wii 菜单版本 > Wii 菜单区域
1. 将弹出对话框，要求您输入一个值来创建密钥。 根据提示输入相应的内容，它将创建用于解密从任天堂服务器上下载 Wii 菜单内容的密钥。
1. 一个文件选择框会询问您要将 .app 文件（即下载的 Wii 菜单内容文件）保存到哪里。 将其保存到 ThemeMii 所在的目录中。
1. 转到 `File` > `Open`，选择浏览到您 .mym 文件所在的位置。
1. 点击 `Create csm`，然后浏览选择一个您想要保存主题的目录。 请稍等片刻，等待主题构建完成。
1. 这时会弹出一个对话框，询问您是否要保存 .mym。 按 `No`。

#### 第三部分 - 安装主题

1. Extract the csm-installer `.zip` file to the root of your SD card or USB device.
1. Create a new directory on your SD card or USB device called `themes` if it does not already exist.
1. Copy your `.csm` file to the `themes` directory.
1. Insert your SD card or USB drive into your Wii, and launch the Homebrew Channel.
1. Launch csm-installer, and wait for it to load.
1. Select the theme you would like to install with `A`. Be absolutely sure at this point that you have downloaded the correct theme for your system menu version and region.
1. Press `+` to install the theme.
1. 一旦您找到喜欢的主题，请点击与您的 Wii 菜单版本相对应的下载链接。 If all goes well, you will have a result similar to the below!

    ![](/images/themes/themed-wii-menu.png)

### RiiConnect24 主题页面

选择您想安装的主题，然后按 A，稍等片刻以安装主题，然后按任意按钮回到 Wii 菜单。 希望主题安装成功。

#### Requirements

* Wii Themer
* 一张SD卡或U盘
* [http://www.wiithemer.org/](wii-loaders#wiiflow-lite)
* A Linux/macOS/Windows PC with an Internet connection
* [Rhapsodii Shima](https://gbatemp.net/threads/rhapsodii-shima-5-4.555062/)

#### Instructions

1. Have the storage device that holds WiiFlow Lite connected to your PC.
1. Download the Rhapsodii Shima archive, either version of the theme works and can be installed side-by-side with no issues.
1. Extract and copy the `wiiflow` folder to the root of your storage device, merge all folders and overwrite all files when requested.
1. Follow the theme setup and theme configuration instructions in `installation.txt`. Enjoy the theme!

### USB Loader GX Theming

#### Requirements

* Wii Theme Team Creations v2
* Google Drive 仓库
* [USB Loader GX](wii-loaders#usb-loader-gx)
* A Linux/macOS/Windows PC with an Internet connection
* 以下是一些主题的链接。

#### Instructions

1. Download a theme `.zip` file from the website linked above, or anywhere else you can get a proper theme.
1. Unpack the `.zip` file's contents into the `apps\usbloader_gx` directory on the storage device where you installed USB Loader GX.
1. 将 SD 卡或 U 盘插入 Wii。
1. Start USB Loader GX, go to the `Settings` menu, and then go to `Theme Menu`.
1. Open the theme and install it.

### Homebrew Channel Theming

#### Requirements

* 从 Homebrew Channel 启动 MyMenuify Mod。
* 运行 Windows 的电脑（或在 Mac/Linux 上使用 Mono 或 Wine）
* A Linux/macOS/Windows PC with an internet connection
* 您可能会选择标有 4.X 的下载链接，这意味着该主题适用于 Wii 菜单的 4.1、4.2 和 4.3 版本。

#### Instructions

1. Download a theme `.zip` file from the website linked above.

    ![](/images/themes/homebrew-channel-example-theme.png)

1. Paste the `.zip` into the `apps` folder on your storage device where you load homebrew.

    ![](/images/themes/homebrew-channel-paste-zip.png)

1. Extract the contents of the `.zip` into the `apps` folder, and delete the archive.

    ![](/images/themes/homebrew-channel-extract-theme.png)

1. 关闭Wii，然后按住RESET按钮并打开Wii。
1. The theme you just installed can be loaded in the same way that you access a standard app.

    ![](/images/themes/homebrew-channel-load-theme.png)

1. The theme should now be loaded, enjoy!

    ![](/images/themes/homebrew-channel-theme-done.png)

### App Forwarders

App forwarders can add a bit of extra flair to your Wii Menu - but be careful with them as bad forwarders can cause a [banner brick](bricks#banner-brick). Generally, you can find forwarders on places like [GBAtemp](https://gbatemp.net/threads/wii-forwarder-repository.588781/) for popular apps such as emulators. Since forwarders come in a .WAD format, the process of installing them is as simple as normal usage with [YAWM ModMii Edition](yawmme).


[Click here to go back to the site index.](site-navigation)
{: .notice--info}
