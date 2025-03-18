# 安装 Wii 菜单主题

This guide is intended to be the last you will ever need when it comes to theming on the Wii, not only providing instructions for the Wii Menu through csm-installer, but also with themes on WiiFlow Lite, USB Loader GX, and The Homebrew Channel. Additionally, forwarders are covered. Additionally, forwarders are covered.

## 转到 <code>Options</code> &#062; <code>Standard System Menu</code> &#062; Wii 菜单版本 &#062; Wii 菜单区域

::: danger

DO NOT CONTINUE WITH THIS GUIDE UNLESS YOU HAVE ADEQUATE BRICK PROTECTION, SPECIFICALLY [BOOTMII](bootmii) (Wii only) AND [PRIILOADER](priiloader)!

:::

::: warning

csm-installer has built in safety features to prevent from installing bad or corrupt Wii Menu themes, so please opt to use it instead of other theme installation homebrew.

:::

::: warning

请仅使用这里提供的 ThemeMii 版本，因为 ThemeMii Mod 允许您制作适用于 Wii 菜单版本 4.3 的主题，其他版本可能不兼容。

:::

::: danger

请仅安装针对您的 Wii 和其当前区域专门设计过的主题。 Installing themes from the wrong version or region on your Wii will cause a [brick](bricks#theme-brick). 本教程将告诉您如何创建一个安全可安装的 .csm 文件。

:::

::: info

Before proceeding, it helps to know the difference between .MYM and .CSM as file formats when used in Wii Menu theming. While the MYM is made by the theme creator which can then be shared around, the CSM is the result from building a MYM into a system menu. In other words, MYM mainly just holds assets - the actual system menu itself that needs to be installed comes seperate. While the MYM is made by the theme creator which can then be shared around, the CSM is the result from building a MYM into a system menu. In other words, MYM mainly just holds assets - the actual system menu itself that needs to be installed comes seperate.

:::

### 主题链接

- [Wii Theme Team Creations](https://gbatemp.net/threads/wii-theme-team-creations.260327/) (.mym file distribution)
- [Wii Theme Google Drive](https://drive.google.com/drive/folders/1H8bKkZa5Nwy7tBmDvKEVXhoZStucpUr3) (.mym file distribution)
- [GBAtemp Other Files for Wii](https://gbatemp.net/download/categories/other-files.166/) (.mym file distribution)
- [Wii Themer](http://www.wiithemer.org/) (This site can build a .csm ready to install for Wii and vWii only, but for Wii mini you may download the .mym files from their [Theme Database](http://wiithemer.org/mym/))

### 需要

- 将您保存的 .csm 文件放入 SD 卡或 U 盘上名为 <code>modthemes</code> 的文件夹中。
- A Windows PC with an Internet connection
- [csm-installer](https://oscwii.org/library/app/csm-installer)
- [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)

### Downloading the Base Theme

::::: tabs

:::: tab (All) Via csm-installer

1. Extract the csm-installer `.zip` file to the root of your SD card or USB device.
2. Insert your SD card or USB device into your console, and launch the Homebrew Channel.
3. Launch csm-installer, then select `Download original Wii theme (Base theme)`
4. Once the base theme has finished saving, press HOME to exit the app.
5. Insert your SD card/USB device back into your PC. The base app will be saved to a folder named `themes`.

::::

:::: tab (Wii) Via NUS Downloader

1. On your computer, download [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip).
2. Copy all files from the NUS Downloader `.zip` to a folder on your computer.
3. Run `NUS Downloader.exe`.
4. Navigate to `Database` -> `System` -> `System Menu`.
5. Select the version that corresponds to your Wii menu version.
6. Check the `Create decrypted contents (*.app)` box.
7. Click `Start NUS Download!`.
8. Once the download is finished, there will be a folder named `titles` in the same folder as the NUS Downloader.
9. Open the `titles` folder, then the `0000000100000002` folder inside it.
10. Find the **largest .app file** (usually 6~7MB) inside the folder.
11. Create a `themes` folder on the root of your SD card/USB device.
12. Copy the .app file to the newly created `themes` folder. This is the base theme you will use to build your custom theme.

::::

:::: tab (vWii) Via NUS Downloader

1. On your computer, download [NUS Downloader (vWii)](/assets/files/NUSDownloader-vwii.zip)
2. Copy all files from the vWii NUS Downloader `.zip` to a folder on your computer.
3. Run `NUS Downloader.exe`.
4. Navigate to `Database` -> `System` -> `System Menu`.
5. Select the version that corresponds to your Wii U's region in the table below:

| 区域 | vWii Menu version |
| -- | ----------------- |
| 日本 | v608              |
| 美国 | v609              |
| 欧洲 | v610              |

1. Check the `Create decrypted contents (*.app)` box.
2. Click `Start NUS Download!`.
3. Once the download is finished, there will be a folder named `titles` in the same folder as the NUS Downloader.
4. Open the `titles` folder, then the `0000000700000002` folder inside it.
5. Find the .app file that corresponds to your Wii U's region in the table below:

| 区域 | .app file    |
| -- | ---------------------------- |
| 日本 | 0000001c.app |
| 美国 | 0000001f.app |
| 欧洲 | 00000022.app |

1. Create a `themes` folder on the root of your SD card/USB device.
2. Copy the .app file to the newly created `themes` folder. This is the base theme you will use to build your custom theme.

::::

:::: tab (Wii) Via ThemeMii

1. Create a `themes` folder on the root of your SD card/USB device.
2. Extract the ThemeMii MOD `.zip` to a location on your PC.
3. Launch the ThemeMii application.
4. Go to `Tools` -> `Download Base App` -> `Version of your Wii Menu` -> `Region of your Wii Menu`.
5. 将弹出对话框，要求您输入一个值来创建密钥。 根据提示输入相应的内容，它将创建用于解密从任天堂服务器上下载 Wii 菜单内容的密钥。
6. A file selection box will ask you where to save the .app file. Save it to the `themes` folder on your SD card/USB device.

::::

:::::

### 第二部分 - 构建主题

1. Extract the ThemeMii MOD `.zip` to a location on your PC.
2. Launch the ThemeMii application.
3. Go to `File` -> `Open`, and select the `.mym` file for the theme you want to build.
4. Press `Create csm`.
5. When asked to select an `.app` file, select the newly downloaded base theme in the `themes` of your SD card or USB device.
6. When asked to save the `.csm` file, save it in the `themes` folder.
7. After the theme finishes building, you will be prompted to save the .mym. Press `No`.

### 第三部分 - 安装主题

1. Insert your SD card or USB device into your console, and launch the Homebrew Channel.
2. Launch csm-installer, and wait for it to load.
3. Select the theme you would like to install with `A`. Select the theme you would like to install with <code>A</code>. Be absolutely sure at this point that you have downloaded the correct theme for your system menu version and region.
4. Press `+` to install the theme.
5. 一旦您找到喜欢的主题，请点击与您的 Wii 菜单版本相对应的下载链接。 If all goes well, you will have a result similar to the below!

    ![](/images/themes/themed-wii-menu.png)

## RiiConnect24 主题页面

选择您想安装的主题，然后按 A，稍等片刻以安装主题，然后按任意按钮回到 Wii 菜单。 希望主题安装成功。

### 需要

- 一台 Wii
- 将您保存的 .csm 文件放入 SD 卡或 U 盘上名为 <code>modthemes</code> 的文件夹中。
- [WiiFlow Lite](wii-loaders#wiiflow-lite)
- A Linux/macOS/Windows PC with an Internet connection
- [Rhapsodii Shima](https://gbatemp.net/threads/rhapsodii-shima-5-4.555062/)

### 步骤

1. Have the storage device that holds WiiFlow Lite connected to your PC.
2. Download the Rhapsodii Shima archive, either version of the theme works and can be installed side-by-side with no issues.
3. Extract and copy the `wiiflow` folder to the root of your storage device, merge all folders and overwrite all files when requested.
4. Follow the theme setup and theme configuration instructions in `installation.txt`. Enjoy the theme!

## USB Loader GX Theming

### 需要

- 一台 Wii
- 将您保存的 .csm 文件放入 SD 卡或 U 盘上名为 <code>modthemes</code> 的文件夹中。
- [USB Loader GX](wii-loaders#usb-loader-gx)
- A Linux/macOS/Windows PC with an Internet connection
- A [theme](https://gbatemp.net/threads/dark-wii-usb-loader-gx-themes.584493/), this link contains an assortment of dark themes

### 步骤

1. Download a theme `.zip` file from the website linked above, or anywhere else you can get a proper theme.
2. Unpack the `.zip` file's contents into the `apps\usbloader_gx` directory on the storage device where you installed USB Loader GX.
3. 将 SD 卡或 U 盘插入 Wii。
4. Start USB Loader GX, go to the `Settings` menu, and then go to `Theme Menu`.
5. Open the theme and install it.

## Homebrew Channel Theming

### 需要

- 一台 Wii
- 将您保存的 .csm 文件放入 SD 卡或 U 盘上名为 <code>modthemes</code> 的文件夹中。
- A Linux/macOS/Windows PC with an internet connection
- A [theme](https://wiibrew.org/wiki/Homebrew_Channel/Themes) from WiiBrew

### 步骤

1. Download a theme `.zip` file from the website linked above.

    ![](/images/themes/homebrew-channel-example-theme.png)

2. Paste the `.zip` into the `apps` folder on your storage device where you load homebrew.

    ![](/images/themes/homebrew-channel-paste-zip.png)

3. Extract the contents of the `.zip` into the `apps` folder, and delete the archive.

    ![](/images/themes/homebrew-channel-extract-theme.png)

4. 关闭Wii，然后按住RESET按钮并打开Wii。

5. The theme you just installed can be loaded in the same way that you access a standard app.

    ![](/images/themes/homebrew-channel-load-theme.png)

6. The theme should now be loaded, enjoy!

    ![](/images/themes/homebrew-channel-theme-done.png)

## App Forwarders

App forwarders can add a bit of extra flair to your Wii Menu - but be careful with them as bad forwarders can cause a [banner brick](bricks#banner-brick). Generally, you can find forwarders on places like [GBAtemp](https://gbatemp.net/threads/wii-forwarder-repository.588781/) for popular apps such as emulators. Since forwarders come in a .WAD format, the process of installing them is as simple as normal usage with [YAWM ModMii Edition](yawmme).

::: tip

[点击此处返回站点索引。](site-navigation)

:::
