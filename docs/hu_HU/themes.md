# Wii-témák

Ez az útmutató az utolsó, amire valaha is szükséged lesz, ha a Wii témázásáról van szó, nem csak a csm-installer segítségével a Wii menüjéhez ad útmutatást, hanem a WiiFlow Lite, az USB Loader GX és a Homebrew Channel témáival is. Ezenkívül a forwarderek is le vannak fedve.

## Wii Menu témázás

::: danger

DO NOT CONTINUE WITH THIS GUIDE UNLESS YOU HAVE ADEQUATE BRICK PROTECTION, SPECIFICALLY [BOOTMII](bootmii) (Wii only) AND [PRIILOADER](priiloader)!

:::

::: warning

A csm-installer tartalmaz beépített biztonsági funkciókat, hogy megakadályozza, hogy hibás vagy sérült Wii Menu témákat telepíts, így javasolt, hogy ezt használd más téma telepítő homebrew helyett.

:::

::: warning

Ne használj az itt linkeltnél régebbi ThemeMii verziót, mivel a ThemeMii Mod teszi lehetővé hogy témát készíts a Wii Menu 4.3 verziójához, míg a többi verzió lehet, hogy nem.

:::

::: danger

Csak olyan témákat telepíts a Wii-re, amelyek kifejezetten a Wii verziójához és az aktuális régióhoz lettek formázva. Installing themes from the wrong version or region on your Wii will cause a [brick](bricks#theme-brick). Ez a útmutató leírja, hogyan hozhatsz létre egy .csm fájlt, amelyet aztán biztonságosan telepíthetsz.

:::

::: info

Mielőtt folytatnánk, hasznos tudnod, hogy mi a különbség a .MYM és a .CSM fájlformátumok között, amikor a Wii menü témázása során használják őket. Míg a MYM-et a téma készítője készíti, amelyet aztán körbe lehet osztani, addig a CSM a MYM rendszermenübe építésének eredménye. Más szóval, a MYM elsősorban csak eszközöket tartalmaz - maga a tényleges rendszermenü, amelyet telepíteni kell, különálló.

:::

### Téma források

- [Wii Theme Team Creations](https://gbatemp.net/threads/wii-theme-team-creations.260327/) (.mym file distribution)
- [Wii Theme Google Drive](https://drive.google.com/drive/folders/1H8bKkZa5Nwy7tBmDvKEVXhoZStucpUr3) (.mym file distribution)
- [GBAtemp Other Files for Wii](https://gbatemp.net/download/categories/other-files.166/) (.mym file distribution)
- [Wii Themer](http://www.wiithemer.org/) (This site can build a .csm ready to install for Wii and vWii only, but for Wii mini you may download the .mym files from their [Theme Database](http://wiithemer.org/mym/))

### Requirements

- Egy SD kártya vagy USB drive
- Egy internetkapcsolattal rendelkező Windows PC
- [csm-installer](https://oscwii.org/library/app/csm-installer)
- [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)

### Downloading the Base Theme

::::: tabs

:::: tab csm-installer

1. Extract the csm-installer `.zip` file to the root of your SD card or USB device.
2. Csatlakoztasd az SD-kártyát vagy az USB-eszközt a konzolodhoz, és indítsd el a Homebrew Channel csatornát.
3. Launch csm-installer, then select `Download original Wii theme (Base theme)`
4. Miután az alaptéma befejezte a mentést, nyomd meg a HOME gombot az alkalmazásból való kilépéshez.
5. Csatlakoztasd vissza az SD-kártyát/USB-eszközt a számítógépedhez. The base app will be saved to a folder named `themes`.

::::

:::: tab nus-downloader-wii

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

:::: tab nus-downloader-vwii

1. On your computer, download [NUS Downloader (vWii)](/assets/files/NUSDownloader-vwii.zip)
2. Copy all files from the vWii NUS Downloader `.zip` to a folder on your computer.
3. Run `NUS Downloader.exe`.
4. Navigate to `Database` -> `System` -> `System Menu`.
5. Select the version that corresponds to your Wii U's region in the table below:

| Regió  | vWii Menu verzió |
| ------ | ---------------- |
| Japán  | v608             |
| USA    | v609             |
| Európa | v610             |

1. Check the `Create decrypted contents (*.app)` box.
2. Click `Start NUS Download!`.
3. Once the download is finished, there will be a folder named `titles` in the same folder as the NUS Downloader.
4. Open the `titles` folder, then the `0000000700000002` folder inside it.
5. Find the .app file that corresponds to your Wii U's region in the table below:

| Regió  | .app file    |
| ------ | ---------------------------- |
| Japán  | 0000001c.app |
| USA    | 0000001f.app |
| Európa | 00000022.app |

1. Create a `themes` folder on the root of your SD card/USB device.
2. Copy the .app file to the newly created `themes` folder. This is the base theme you will use to build your custom theme.

::::

:::: tab thememii

1. Create a `themes` folder on the root of your SD card/USB device.
2. Extract the ThemeMii MOD `.zip` to a location on your PC.
3. Launch the ThemeMii application.
4. Go to `Tools` -> `Download Base App` -> `Version of your Wii Menu` -> `Region of your Wii Menu`.
5. A dialog box will pop-up asking you to enter in a value to create a key. Enter what it says, and it will create a key that will be used to decrypt the Wii Menu contents from Nintendo's servers.
6. A file selection box will ask you where to save the .app file. Save it to the `themes` folder on your SD card/USB device.

::::

:::::

### Téma készítése

1. Extract the ThemeMii MOD `.zip` to a location on your PC.
2. Launch the ThemeMii application.
3. Go to `File` -> `Open`, and select the `.mym` file for the theme you want to build.
4. Press `Create csm`.
5. When asked to select an `.app` file, select the newly downloaded base theme in the `themes` of your SD card or USB device.
6. When asked to save the `.csm` file, save it in the `themes` folder.
7. Miután a téma felépítése elkészül, a .mym fájl mentésétre vonakozó kérdésre kell válaszolnod. Press `No`.

### Téma telepítése

1. Csatlakoztasd az SD-kártyát vagy az USB-eszközt a konzolodhoz, és indítsd el a Homebrew Channel csatornát.
2. Indítsd el a csm-installert, és várd meg, amíg betöltődik.
3. Select the theme you would like to install with `A`. Ezen a ponton feltétlenül győződj meg arról, hogy a rendszermenü verziódnak és régiódnak megfelelő témát töltöted le.
4. Press `+` to install the theme.
5. Indítsd újra a Wii menüt, és nézd meg, hogy a téma sikeresen települt-e. Ha minden jól ment, akkor az alábbihoz hasonló eredményt fogsz kapni!

   ![](/images/themes/themed-wii-menu.png)

## WiiFlow Lite témázás

Sajnos az eredeti WiiFlow és az újabb WiiFlow Lite közötti kódbázisbeli különbség miatt a témák ritkák - valójában csak egyetlen olyan témát találtunk, amely biztosan működik az újabb verzióval. A téma telepítésének utasításai alább találhatók.

### Requirements

- Egy moddolt Wii
- Egy SD kártya vagy USB drive
- [WiiFlow Lite](wii-loaders#wiiflow-lite)
- Egy Windows/macOS/Linux számítógép internet kapcsolattal
- [Rhapsodii Shima](https://gbatemp.net/threads/rhapsodii-shima-5-4.555062/)

### Instructions

1. A WiiFlow Lite-ot tartalmazó tárolóeszköz legyen csatlakoztatva a számítógépedhez.
2. Töltsd le a Rhapsodii Shima archívumot, a téma mindkét verziója működik, és gond nélkül telepíthető egymás mellé.
3. Extract and copy the `wiiflow` folder to the root of your storage device, merge all folders and overwrite all files when requested.
4. Follow the theme setup and theme configuration instructions in `installation.txt`. Élvezd a témát!

## USB Loader GX témázás

### Requirements

- Egy moddolt Wii
- Egy SD kártya vagy USB drive
- [USB Loader GX](wii-loaders#usb-loader-gx)
- Egy Windows/macOS/Linux számítógép internet kapcsolattal
- A [theme](https://gbatemp.net/threads/dark-wii-usb-loader-gx-themes.584493/), this link contains an assortment of dark themes

### Instructions

1. Download a theme `.zip` file from the website linked above, or anywhere else you can get a proper theme.
2. Unpack the `.zip` file's contents into the `apps\usbloader_gx` directory on the storage device where you installed USB Loader GX.
3. Tedd a tárolóeszközt a Wii-be, és indítsd el.
4. Start USB Loader GX, go to the `Settings` menu, and then go to `Theme Menu`.
5. Nyissd meg a témát, és telepítsd azt.

## Homebrew Channel témázás

### Requirements

- Egy moddolt Wii
- Egy SD kártya vagy USB drive
- Egy Windows/macOS/Linux számítógép internet kapcsolattal
- A [theme](https://wiibrew.org/wiki/Homebrew_Channel/Themes) from WiiBrew

### Instructions

1. Download a theme `.zip` file from the website linked above.

   ![](/images/themes/homebrew-channel-example-theme.png)

2. Paste the `.zip` into the `apps` folder on your storage device where you load homebrew.

   ![](/images/themes/homebrew-channel-paste-zip.png)

3. Extract the contents of the `.zip` into the `apps` folder, and delete the archive.

   ![](/images/themes/homebrew-channel-extract-theme.png)

4. Csatlakoztasd vissza a tárolóeszközt a Wii-be, és lépj be a Homebrew Channel csatornába.

5. A téma amít telepítettél betölthető úgyanolyan módon, mint ahogy egy standard appot érsz el.

   ![](/images/themes/homebrew-channel-load-theme.png)

6. A témának most már be kell töltődnie, jó szórakozást!

   ![](/images/themes/homebrew-channel-theme-done.png)

## App Forwarder-ek

App forwarders can add a bit of extra flair to your Wii Menu - but be careful with them as bad forwarders can cause a [banner brick](bricks#banner-brick). Generally, you can find forwarders on places like [GBAtemp](https://gbatemp.net/threads/wii-forwarder-repository.588781/) for popular apps such as emulators. Since forwarders come in a .WAD format, the process of installing them is as simple as normal usage with [YAWM ModMii Edition](yawmme).

::: tip

[Click here to go back to the site index.](site-navigation)

:::
