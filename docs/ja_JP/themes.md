# Installing Wii Menu Themes

This guide is intended to be the last you will ever need when it comes to theming on the Wii, not only providing instructions for the Wii Menu through csm-installer, but also with themes on WiiFlow Lite, USB Loader GX, and The Homebrew Channel. Additionally, forwarders are covered.

## Go to <code>Options</code> &#062; <code>Standard System Menu</code> &#062; Version of your Wii Menu &#062; Region of your Wii Menu

::: danger

DO NOT CONTINUE WITH THIS GUIDE UNLESS YOU HAVE ADEQUATE BRICK PROTECTION, SPECIFICALLY [BOOTMII](bootmii) (Wii only) AND [PRIILOADER](priiloader)!

:::

::: warning

csm-installer has built in safety features to prevent from installing bad or corrupt Wii Menu themes, so please opt to use it instead of other theme installation homebrew.

:::

::: warning

Do not use any other version of ThemeMii than the one linked here, as ThemeMii Mod allows you to make a theme for Wii Menu version 4.3, other versions may not.

:::

::: danger

Only install themes on your Wii that have been formatted specifically for it, and its current region. Installing themes from the wrong version or region on your Wii will cause a [brick](bricks#theme-brick). This tutorial will tell you how to create a .csm file that is safe to install.

:::

::: info

Before proceeding, it helps to know the difference between .MYM and .CSM as file formats when used in Wii Menu theming. While the MYM is made by the theme creator which can then be shared around, the CSM is the result from building a MYM into a system menu. In other words, MYM mainly just holds assets - the actual system menu itself that needs to be installed comes separate.

:::

### Theme Links

- [Wii Theme Team Creations](https://gbatemp.net/threads/wii-theme-team-creations.260327/) (.mym file distribution)
- [Wii Theme Google Drive](https://drive.google.com/drive/folders/1H8bKkZa5Nwy7tBmDvKEVXhoZStucpUr3) (.mym file distribution)
- [GBAtemp Other Files for Wii](https://gbatemp.net/download/categories/other-files.166/) (.mym file distribution)
- [Wii Themer](http://www.wiithemer.org/) (This site can build a .csm ready to install for Wii and vWii only, but for Wii mini you may download the .mym files from their [Theme Database](http://wiithemer.org/mym/))

### Requirements

- Extract MyMenuifyMod.zip to your SD card or USB drive.
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

:::: tab (Wii) Via NUSGet

1. On your computer, download [NUSGet](https://github.com/NinjaCheetah/NUSGet/releases/latest/), choosing the archive corresponding to your operating system. For Windows users, you should choose the `NUSGet-Windows-x86_64-bin.zip` file.
2. Unzip the archive and run the NUSGet executable.
3. Navigate to `System` > `System Menu` > `Your Region` and then select the Wii menu version you are running. Check the `Create decrypted contents (*.app)` option. Check `Use a custom download directory` and select the folder that your NUSGet executable is in, then click `Start Download`.

   ![](/images/desktop-apps/nusget/nusget-wiimenu-dl.png)
4. When you have finished downloading the Wii menu files, navigate to the folder where your NUSGet executable is stored. You should locate and open the `0000000100000002` folder inside it.

   ![](/images/desktop-apps/nusget/nusget-folder-wiimenu.png)
5. Find the **largest .app file** (usually ~6-7MB) inside the folder.

   ![](/images/desktop-apps/nusget/nusget-wiimenu-output.png)
6. Create a `themes` folder on the root of your SD card/USB device.
7. Copy the .app file to the newly created `themes` folder. This is the base theme you will use to build your custom theme.

::::

:::: tab (vWii) Via NUSGet

1. On your computer, download [NUSGet](https://github.com/NinjaCheetah/NUSGet/releases/latest/), choosing the archive corresponding to your operating system. For Windows users, you should choose the `NUSGet-Windows-x86_64-bin.zip` file.

2. Unzip the archive and run the NUSGet executable.

3. Select the `vWii` tab and navigate to `System` > `System Menu` > `Your Region`.

4. Select the version that corresponds to your Wii U's region in the table below:

   | Region |                                        vWii Menu version                                       |
   | :----: | :--------------------------------------------------------------------------------------------: |
   |  Japan | v608 (4.3J - Wii U v5.2.0J) |
   |   USA  | v609 (4.3U - Wii U v5.2.0U) |
   | Europe | v610 (4.3E - Wii U v5.2.0E) |

5. Check the `Create decrypted contents (*.app)` box. Check `Use a custom download directory` and select the folder that your NUSGet executable is in, then click `Start Download`.

   ![](/images/desktop-apps/nusget/nusget-vwiimenu-dl.png)

6. When you have finished downloading the Wii menu files, navigate to the folder where your NUSGet executable is stored. You should locate and open the `0000000700000002` folder inside it.

   ![](/images/desktop-apps/nusget/nusget-folder-vwiimenu.png)

7. Find the .app file that corresponds to your Wii U's region in the table below:

   | Region |   .app file  |
   | :----: | :--------------------------: |
   |  Japan | 0000001C.app |
   |   USA  | 0000001F.app |
   | Europe | 00000022.app |

8. Create a `themes` folder on the root of your SD card/USB device.

9. Copy the .app file to the newly created `themes` folder. This is the base theme you will use to build your custom theme.

::::

:::: tab (Wii) Via ThemeMii

1. Create a `themes` folder on the root of your SD card/USB device.
2. Extract the ThemeMii MOD `.zip` to a location on your PC.
3. Launch the ThemeMii application.
4. Go to `Tools` -> `Download Base App` -> `Version of your Wii Menu` -> `Region of your Wii Menu`.
5. A dialog box will pop up asking you to enter in a value to create a key. Enter in what it says, it will create a key that will be used to decrypt the Wii Menu contents from Nintendo's servers.
6. A file selection box will ask you where to save the .app file. Save it to the `themes` folder on your SD card/USB device.

::::

:::::

### Section II - Building the Theme

1. Extract the ThemeMii MOD `.zip` to a location on your PC.
2. Launch the ThemeMii application.
3. Go to `File` -> `Open`, and select the `.mym` file for the theme you want to build.
4. Press `Create csm`.
5. When asked to select an `.app` file, select the newly downloaded base theme in the `themes` of your SD card or USB device.
6. When asked to save the `.csm` file, save it in the `themes` folder.
7. After the theme finishes building, you will be prompted to save the .mym. Press `No`.

### Section III - Installing the Theme

1. Insert your SD card or USB device into your console, and launch the Homebrew Channel.
2. Launch csm-installer, and wait for it to load.
3. Select the theme you would like to install with `A`. Be absolutely sure at this point that you have downloaded the correct theme for your system menu version and region.
4. Press `+` to install the theme.
5. Give it a moment to install the theme, then press any button to go to the Wii Menu. Hopefully, the theme installed correctly. If all goes well, you will have a result similar to the below!

   ![](/images/themes/themed-wii-menu.png)

## RiiConnect24 Themes Page

Unfortunately, because of the codebase difference between the original WiiFlow and the newer WiiFlow Lite, themes are sparse - in fact, only one theme could be found that confidently works on the newer version. The instructions for installing that theme are below.

### Requirements

- A Wii
- Extract MyMenuifyMod.zip to your SD card or USB drive.
- [WiiFlow Lite](wii-loaders#wiiflow-lite)
- What you need
- [Rhapsodii Shima](https://gbatemp.net/threads/rhapsodii-shima-5-4.555062/)

### Instructions

1. Have the storage device that holds WiiFlow Lite connected to your PC.
2. Download the Rhapsodii Shima archive, either version of the theme works and can be installed side-by-side with no issues.
3. Extract and copy the `wiiflow` folder to the root of your storage device, merge all folders and overwrite all files when requested.
4. Follow the theme setup and theme configuration instructions in `installation.txt`. Enjoy the theme!

## USB Loader GX Theming

### Requirements

- A Wii
- Extract MyMenuifyMod.zip to your SD card or USB drive.
- [USB Loader GX](wii-loaders#usb-loader-gx)
- What you need
- A [theme](https://gbatemp.net/threads/dark-wii-usb-loader-gx-themes.584493/), this link contains an assortment of dark themes

### Instructions

1. Download a theme `.zip` file from the website linked above, or anywhere else you can get a proper theme.
2. Unpack the `.zip` file's contents into the `apps\usbloader_gx` directory on the storage device where you installed USB Loader GX.
3. Insert your SD card or USB drive into your Wii.
4. Start USB Loader GX, go to the `Settings` menu, and then go to `Theme Menu`.
5. Open the theme and install it.

## Homebrew Channel Theming

### Requirements

- A Wii
- Extract MyMenuifyMod.zip to your SD card or USB drive.
- A computer with Windows on it (or using Mono or Wine on Mac/Linux)
- A [theme](https://wiibrew.org/wiki/Homebrew_Channel/Themes) from WiiBrew

### Instructions

1. Download a theme `.zip` file from the website linked above.

   ![](/images/themes/homebrew-channel-example-theme.png)

2. Paste the `.zip` into the `apps` folder on your storage device where you load homebrew.

   ![](/images/themes/homebrew-channel-paste-zip.png)

3. Extract the contents of the `.zip` into the `apps` folder, and delete the archive.

   ![](/images/themes/homebrew-channel-extract-theme.png)

4. Go to <code>Options</code> &#062; <code>Standard System Menu</code> &#062; Version of your Wii Menu &#062; Region of your Wii Menu

5. The theme you just installed can be loaded in the same way that you access a standard app.

   ![](/images/themes/homebrew-channel-load-theme.png)

6. The theme should now be loaded, enjoy!

   ![](/images/themes/homebrew-channel-theme-done.png)

## App Forwarders

App forwarders can add a bit of extra flair to your Wii Menu - but be careful with them as bad forwarders can cause a [banner brick](bricks#banner-brick). Generally, you can find forwarders on places like [GBAtemp](https://gbatemp.net/threads/wii-forwarder-repository.588781/) for popular apps such as emulators. Since forwarders come in a .WAD format, the process of installing them is as simple as normal usage with [YAWM ModMii Edition](yawmme).

::: tip

[Click here to go back to the site index.](site-navigation)

:::
