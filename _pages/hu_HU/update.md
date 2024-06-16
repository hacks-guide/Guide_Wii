---
title: "A Wii Menu frissítése v4.3-ra"
---

{% include toc title="Tartalomjegyzék" %}

This tutorial will explain how to update your Wii Menu to version 4.3, if you have already homebrewed your Wii.

It is much safer to use [ModMii](modmii) (Windows only) to update your Wii to 4.3.
{: .notice--warning}

### Követelmények

* Egy SD kártya vagy pendrive
* Egy számítógép Windows-szal
* [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest)
* [Priiloader](priiloader)
* [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

### Útmutató

#### I. rész - Letöltés

Your Wii must be modded in order to perform this. If it isn't, then it's best to follow [the guide](get-started) first.
{: .notice--info}

1. Extract the .zip file for NUS Downloader Wii and open the application.
1. Go to `Database...` > `System` > `0000000100000002 - System Menu` and select the version corresponding to your region as shown in the table below.
1. Make sure `Pack WAD` is checked.
1. Press `Start NUS Download!`.
1. Open the `titles` -> `0000000100000002` -> (Wii Menu version) and copy the .wad file to a folder called `wad` on your SD Card or USB drive.
1. Repeat steps 2-5 with `IOS` -> `000000010000003A` -> `Latest Version` and `IOS` -> `0000000100000050` -> `Latest Version`.
1. After you have copied all 3 `.wad` files, eject your SD card/USB drive from your PC and put it back into your Wii.

| Regió  | Wii Menu verzió |
| ------ | --------------- |
| Japán  | v512 (4.3J)     |
| USA    | v513 (4.3U)     |
| Európa | v514 (4.3E)     |
| Korea  | v518 (4.3K)     |

#### II. rész – Telepítés

1. Kapcsold ki a konzolt! Start holding RESET, then turn it back on.
1. In the Priiloader menu, select `Homebrew Channel`.
    * If the Priiloader menu does not appear, please [install it immediately](priiloader). Priiloader is required for this guide.
1. Idítsd el a YAWM ModMii Edition-t.
1. Válaszd ki az SD kártyád vagy az USD drive-od.
1. Press `+` to one the IOS80 and IOS58 WADs to highlight them, then press A twice to install.
1. Navigate to the Wii Menu WAD and press A twice to install it.
1. When prompted to retain Priiloader, press A to confirm.
1. After they are successfully installed, press the HOME Button to exit back to the Homebrew Channel.

[Kattints ide a tartalomjegyzékhez való visszatéréshez!](site-navigation)
{: .notice--info}
