---
title: "A HackMii Installer újraindítása"
---

{% include toc title="Tartalomjegyzék" %}

Ez az útmutató arra van, hogy ha szeretnéd újra futtatni a HackMii Installer-t, hogy frissítsd/újratelepítsd a Homebrew Channel-t vagy a BootMii-t.

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
1. Másold a `boot.elf` fájlt a HackMii Installer v1.2 `.zip`-ből az SD kártya vagy USB drive gyökerébe.
1. Csatlakoztasd az SD kártyát/USB driveot az PC-dhez.
1. Lépj be a Priiloader a RESET gomb nyomva tartásával miközben bekapcsolod a Wii-t.
1. Mend a `Load/Install File` opcióhoz.
1. Navigálj a `boot.elf`-hez és nyomj `1`-et a betöltéséhez.

Ha a `Press (1) to continue` nem jelenik meg kb. 30 másodperc után a [HackMii Installer v1.0](https://bootmii.org/download/) segíthet.
{: .notice--info}

[Tovább a Homebrew Channel és BootMii telepítéséhez](hbc)
{: .notice--info}
