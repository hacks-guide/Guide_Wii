---
title: "A HackMii Installer újraindítása"
---

{% include toc title="Tartalomjegyzék" %}

This guide is intended for situations where you need to relaunch the HackMii Installer to update/reinstall the Homebrew Channel or BootMii.

It is also safe to [redo any exploit](get-started) to get back into the HackMii Installer.
{: .notice--info}

### Újraindítás a Homebrew Channel-lel

#### Követelmények

* A Homebrew Channel
* Egy FAT32/MS-DOS-ra formázott SD kártya vagy USB drive
* [A HackMii-telepítő 1.2-es verziója](https://bootmii.org/download/)

#### Útmutató

1. Csatlakoztasd az SD kártyát/USB driveot az PC-dhez.
1. Extract the HackMii Installer v1.2 to the `apps` folder on your SD/USB.
    + If this folder does not exist, create it.
1. Insert the SD/USB into your Wii, and launch the `hackmii_installer_v1.2` app from the Homebrew Channel.
    + The app will not have an icon.

[Continue to Homebrew Channel and BootMii installation](hbc)
{: .notice--info}

### Újraindítás Priiloader-rel

#### Követelmények
* egy Wii telepített Priiloader-rel (vagy Preloader-rel)
* Egy FAT32/MS-DOS-ra formázott SD kártya vagy USB drive
* [A HackMii-telepítő 1.2-es verziója](https://bootmii.org/download/)

Ahhoz, hogy ellenőrizd, hogy a Wii-odon van-e Priiloader, tartsd nyomva a RESET gombot bekapcsoláskor.
{: .notice--info}

A Preloader és Priiloader régi verziói úgy tűnik, hogy nem támogatják az SDHC (>2GB) kártyákat.
{: .notice--warning}

#### Útmutató

1. Csatlakoztasd az SD kártyát/USB driveot az PC-dhez.
1. Copy the `boot.elf` file inside the HackMii Installer v1.2 `.zip` to the root of your SD card or USB drive.
1. Insert your SD/USB into your Wii.
1. Enter Priiloader by holding the RESET button while turning on your Wii.
1. Go to `Load/Install File`.
1. Navigate to `boot.elf` and press `1` to load it.

If `Press (1) to continue` does not show up after about 30 seconds, downloading [HackMii Installer v1.0](https://bootmii.org/download/) may help.
{: .notice--info}

[Tovább a Homebrew Channel és BootMii telepítéséhez](hbc)
{: .notice--info}
