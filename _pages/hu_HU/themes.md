---
title: "Wii-témák"
---

{% include toc title="Tartalomjegyzék" %}

Ez az útmutató az utolsó, amire valaha is szükséged lesz, ha a Wii témázásáról van szó, nem csak a csm-installer segítségével a Wii menüjéhez ad útmutatást, hanem a WiiFlow Lite, az USB Loader GX és a Homebrew Channel témáival is. Ezenkívül a forwarderek is le vannak fedve.

### Wii Menu témázás

NE FOLYTASD EZT AZ ÚTMUTATÓt, HA NINCS MEGFELELŐ BRiCKELÉS VÉDELMED, KÜLÖNÖSEN [BOOTMII](bootmii) (csak Wii) ÉS [PRIILOADER](priiloader)!
{: .notice--danger}

A csm-installer tartalmaz beépített biztonsági funkciókat, hogy megakadályozza, hogy hibás vagy sérült Wii Menu témákat telepíts, így javasolt, hogy ezt használd más téma telepítő homebrew helyett.
{: .notice--warning}

Do not use any other version of ThemeMii than the one linked here, as ThemeMii Mod allows you to make a theme for Wii Menu version 4.3, other versions may not.
{: .notice--warning}

Csak olyan témákat telepíts a Wii-re, amelyek kifejezetten a Wii verziójához és az aktuális régióhoz lettek formázva. Ha rossz verziójú vagy régiójú témákat telepítesz a Wii-re, az [brickelődik](bricks#theme-brick). Ez a útmutató leírja, hogyan hozhatsz létre egy .csm fájlt, amelyet aztán biztonságosan telepíthetsz.
{: .notice--danger}

Mielőtt folytatnánk, hasznos tudnod, hogy mi a különbség a .MYM és a .CSM fájlformátumok között, amikor a Wii menü témázása során használják őket. Míg a MYM-et a téma készítője készíti, amelyet aztán körbe lehet osztani, addig a CSM a MYM rendszermenübe építésének eredménye. Más szóval, a MYM elsősorban csak eszközöket tartalmaz - maga a tényleges rendszermenü, amelyet telepíteni kell, különálló.
{: .notice--info}

#### Téma források

+ [Wii Theme Team Creations](https://gbatemp.net/threads/wii-theme-team-creations.260327/) (.mym fájlok terjesztése)
+ [Wii Theme Google Drive](https://drive.google.com/drive/folders/1H8bKkZa5Nwy7tBmDvKEVXhoZStucpUr3) (.mym fájlok terjesztése)
+ [GBAtemp Other Files for Wii](https://gbatemp.net/download/categories/other-files.166/) (.mym fájlok terjesztése)
+ [Wii Themer](http://www.wiithemer.org/) (This site can build a .csm ready to install for Wii and vWii only, but for Wii mini you may dowmnload the .mym files from their [Theme Database](http://wiithemer.org/mym/))

#### Követelmények

* Egy SD kártya vagy USB drive
* Egy internetkapcsolattal rendelkező Windows PC
* [csm-installer](https://oscwii.org/library/app/csm-installer)
* [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)

#### Téma készítése

1. Extract the csm-installer `.zip` file to the root of your SD card or USB device.
1. Create a `themes` folder on the root of your SD card/USB device.
1. Insert your SD card or USB device into your console, and launch the Homebrew Channel.
1. Launch csm-installer, and hold `+` while the app is loading. If done right, the app will begin downloading the base theme for your Wii menu.
1. Once the base theme has finished saving, press HOME to exit the app.
1. Insert your SD card/USB device back into your PC.
1. Extract the ThemeMii MOD `.zip` to a location on your PC.
1. Launch the ThemeMii applciation.
1. Go to `File` -> `Open`, and select the `.mym` file for the theme you want to build.
1. Press `Create csm`.
1. When asked to select an `.app` file, select the newly downloaded base theme on the root of your SD card or USB drive.
1. When asked to save the `.csm` file, save it in the `themes` folder.
1. After the theme finishes building, you will be prompted to save the .mym. Press `No`.

#### Téma telepítése

1. Insert your SD card or USB device into your console, and launch the Homebrew Channel.
1. Launch csm-installer, and wait for it to load.
1. Select the theme you would like to install with `A`. Be absolutely sure at this point that you have downloaded the correct theme for your system menu version and region.
1. Press `+` to install the theme.
1. Reboot into the Wii Menu, and see if the theme successfully installed. If all goes well, you will have a result similar to the below!

    ![](/images/themes/themed-wii-menu.png)

### WiiFlow Lite témázás

Unfortunately, because of the codebase difference between the original WiiFlow and the newer WiiFlow Lite, themes are sparse - in fact, only one theme could be found that confidently works on the newer version. The instructions for installing that theme are below.

#### Követelmények

* Egy moddolt Wii
* Egy SD kártya vagy USB drive
* [WiiFlow Lite](wii-loaders#wiiflow-lite)
* Egy Windows/macOS/Linux számítógép internet kapcsolattal
* [Rhapsodii Shima](https://gbatemp.net/threads/rhapsodii-shima-5-4.555062/)

#### Útmutató

1. Have the storage device that holds WiiFlow Lite connected to your PC.
2. Download the Rhapsodii Shima archive, either version of the theme works and can be installed side-by-side with no issues.
3. Extract and copy the `wiiflow` folder to the root of your storage device, merge all folders and overwrite all files when requested.
4. Follow the theme setup and theme configuration instructions in `installation.txt`. Enjoy the theme!

### USB Loader GX témázás

#### Követelmények

* Egy moddolt Wii
* Egy SD kártya vagy USB drive
* [USB Loader GX](wii-loaders#usb-loader-gx)
* Egy Windows/macOS/Linux számítógép internet kapcsolattal
* Egy [téma](https://gbatemp.net/threads/dark-wii-usb-loader-gx-themes.584493/), ez a link vegyes sötét témákat tartalmaz

#### Útmutató

1. Download a theme `.zip` file from the website linked above, or anywhere else you can get a proper theme.
2. Unpack the `.zip` file's contents into the `apps\usbloader_gx` directory on the storage device where you installed USB Loader GX.
3. Put the storage medium in your Wii and boot it up.
4. Start USB Loader GX, go to the `Settings` menu, and then go to `Theme Menu`.
5. Open the theme and install it.

### Homebrew Channel témázás

#### Követelmények

* Egy moddolt Wii
* Egy SD kártya vagy USB drive
* Egy Windows/macOS/Linux számítógép internet kapcsolattal
* Egy [téma](https://wiibrew.org/wiki/Homebrew_Channel/Themes) a WiiBrew-ról

#### Útmutató

1. Download a theme `.zip` file from the website linked above.

    ![](/images/themes/homebrew-channel-example-theme.png)

2. Paste the `.zip` into the `apps` folder on your storage device where you load homebrew.

    ![](/images/themes/homebrew-channel-paste-zip.png)

3. Extract the contents of the `.zip` into the `apps` folder, and delete the archive.

    ![](/images/themes/homebrew-channel-extract-theme.png)

4. Reinsert the storage device into your Wii and enter the Homebrew Channel.
5. The theme you just installed can be loaded in the same way that you access a standard app.

    ![](/images/themes/homebrew-channel-load-theme.png)

6. The theme should now be loaded, enjoy!

    ![](/images/themes/homebrew-channel-theme-done.png)

### App Forwarder-ek

App forwarders can add a bit of extra flair to your Wii Menu - but be careful with them as bad forwarders can cause a [banner brick](bricks#banner-brick). Generally, you can find forwarders on places like [GBAtemp](https://gbatemp.net/threads/wii-forwarder-repository.588781/) for popular apps such as emulators. Since forwarders come in a .WAD format, the process of installing them is as simple as normal usage with [YAWM ModMii Edition](yawmme).


[Kattints ide a tartalomjegyzékhez való visszatéréshez!](site-navigation)
{: .notice--info}
