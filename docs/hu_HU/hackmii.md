---
title: "A HackMii Installer újraindítása"
---

{% include toc title="Tartalomjegyzék" %}

Ez az útmutató arra van, hogy ha szeretnéd újra futtatni a HackMii Installer-t, hogy frissítsd/újratelepítsd a Homebrew Channel-t vagy a BootMii-t.

Továbbá az is biztonságos [hogy újra csinálj bármilyen exploitot](get-started), hogy visszakerülj a HackMii Installer-be.
{: .notice--info}

### Újraindítás a Homebrew Channel-lel

#### Követelmények

* A Homebrew Channel
* Egy FAT32/MS-DOS-ra formázott SD kártya vagy USB drive
* [A HackMii-telepítő 1.2-es verziója](https://bootmii.org/download/)

#### Útmutató

1. Csatlakoztasd az SD kártyát/USB driveot az PC-dhez.
1. Csomagold ki a HackMii Installer v1.2-t az SD kártyád/USB drive-od `apps` mappájába.
    + Ha a mappa nem létezik, hozd létre.
1. Helyezd be az SD kártyád/USB-d a Wii-odba, majd indítsd el a `hackmii_installer_v1.2` appot a Homebrew Channel-ből.
    + Az appnak nem lesz ikonja.

[Tovább a Homebrew Channel és BootMii telepítéséhez](hbc)
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
