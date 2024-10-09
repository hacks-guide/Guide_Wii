# A Wii Menu frissítése v4.3-ra

Ez a útmutató elmagyarázza, hogyan frissítheted a Wii menüt a 4.3-as verzióra, ha már homebrew-olt a Wii-od.

::: warning

It is much safer to use [ModMii](modmii) (Windows only) to update your Wii to 4.3.

:::

## Requirements

- egy Wii a The Homebrew Channel 1.0.8-cal vagy későbbivel
  - If you do not have the Homebrew Channel or it is out of date, please [start here](get-started) to (re)install it first.
- Egy SD kártya vagy pendrive
- Egy számítógép Windows-szal
- [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest)
- [Priiloader](priiloader)
- [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

## Instructions

### I. rész - Letöltés

1. Csomagold ki a .zip fájlját a NUS Downloader Wii-nak és nyisd meg az alkalmazást.
2. Go to `Database...` > `System` > `0000000100000002 - System Menu` and select the version corresponding to your region as shown in the table below.
3. Make sure `Pack WAD` is checked.
4. Press `Start NUS Download!`.
5. Open the `titles` -> `0000000100000002` -> (Wii Menu version) and copy the .wad file to a folder called `wad` on your SD Card or USB drive.
6. Repeat steps 2-5 with `IOS` -> `000000010000003A` -> `Latest Version` and `IOS` -> `0000000100000050` -> `Latest Version`.
7. After you have copied all 3 `.wad` files, eject your SD card/USB drive from your PC and put it back into your Wii.

| Regió  | Wii Menu verzió                                |
| ------ | ---------------------------------------------- |
| Japán  | v512 (4.3J) |
| USA    | v513 (4.3U) |
| Európa | v514 (4.3E) |
| Korea  | v518 (4.3K) |

### II. rész – Telepítés

1. Power off your console. Tartsd nyomva a RESET gombot és kapcsold be.
2. In the Priiloader menu, select `Homebrew Channel`.
   - If the Priiloader menu does not appear, please [install it immediately](priiloader). A Priiloader szükséges ehhez az útmutatóhoz.
3. Idítsd el a YAWM ModMii Edition-t.
4. Válaszd ki az SD kártyád vagy az USD drive-od.
5. Press `+` to one the IOS80 and IOS58 WADs to highlight them, then press A twice to install.
6. Navigálj a Wii Menu WAD-hoz és nyomj A gombot kétszer a telepítéshez.
7. Amikor a Priiloader megtartására kér, nyomd meg az A gombot a megerősítéshez.
8. A sikeres telepítést követően a nyomd meg a HOME gombot, hogy kilépj a Homebrew Channel-hez.

::: tip

[Click here to go back to the site index.](site-navigation)

:::
