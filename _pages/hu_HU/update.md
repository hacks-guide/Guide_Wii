---
title: "A Wii Menu frissítése v4.3-ra"
---

{% include toc title="Tartalomjegyzék" %}

Ez a útmutató elmagyarázza, hogyan frissítheted a Wii menüt a 4.3-as verzióra, ha már homebrew-olt a Wii-od.

Sokkal biztonságosabb a [ModMii](modmii) (csak Windows) segítségével frissíteni a Wii-t a 4.3-as verzióra.
{: .notice--warning}

### Követelmények

* a Wii with The Homebrew Channel 1.0.8 or later
    + If you do not have the Homebrew Channel or it is out of date, please [start here](get-started) to (re)install it first.
* Egy SD kártya vagy pendrive
* Egy számítógép Windows-szal
* [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest)
* [Priiloader](priiloader)
* [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

### Útmutató

#### I. rész - Letöltés

1. Csomagold ki a .zip fájlját a NUS Downloader Wii-nak és nyisd meg az alkalmazást.
1. Navigálj a `Database...` > `System` > `0000000100000002 - System Menu` opcióhoz és válaszd a verziót, ami kapcsolódik a régiódhoz az alábbi táblázatból.
1. Biztosítsd, hogy a `Pack WAD` be legyen pipálva.
1. Nyomd meg a `Start NUS Download!`-ot.
1. Nyisd meg a `titles` -> `0000000100000002` -> (Wii Menu verzió) könyvtárat és másold a .wad fájtl egy `wad` nevű mappába az SD kártyádon/USB drive-on.
1. Ismételd meg a 2-5 lépéseket az `IOS` -> `000000010000003A` -> `Latest Version` és `IOS` -> `0000000100000050` -> `Latest Version` útvonalakon.
1. Ha felmásoltad mind a 3 `.wad` fájlt, add ki az SD kártyád USB drive-od a PC-ből és tedd vissza a Wii-odba.

| Regió  | Wii Menu verzió |
| ------ | --------------- |
| Japán  | v512 (4.3J)     |
| USA    | v513 (4.3U)     |
| Európa | v514 (4.3E)     |
| Korea  | v518 (4.3K)     |

#### II. rész – Telepítés

1. Kapcsold ki a konzolt! Tartsd nyomva a RESET gombot és kapcsold be.
1. A Priiloader menu-be nválaszd a `Homebrew Channel`-t.
    * Ha a Priiloader menu nem jelenik meg, [telepítsd azonnal](priiloader). A Priiloader szükséges ehhez az útmutatóhoz.
1. Idítsd el a YAWM ModMii Edition-t.
1. Válaszd ki az SD kártyád vagy az USD drive-od.
1. Nyomdj `+` jelet az IOS80 és az IOS58 WAD-ra, hogy kijelöld őket, nyomj A gombot kétszer a telepítésükhöz.
1. Navigálj a Wii Menu WAD-hoz és nyomj A gombot kétszer a telepítéshez.
1. Amikor a Priiloader megtartására kér, nyomd meg az A gombot a megerősítéshez.
1. A sikeres telepítést követően a nyomd meg a HOME gombot, hogy kilépj a Homebrew Channel-hez.

[Kattints ide a tartalomjegyzékhez való visszatéréshez!](site-navigation)
{: .notice--info}
