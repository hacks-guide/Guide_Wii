# A Wii Menu frissítése v4.3-ra

Ez a útmutató elmagyarázza, hogyan frissítheted a Wii menüt a 4.3-as verzióra, ha már homebrew-olt a Wii-od.

::: warning

Sokkal biztonságosabb a [ModMii](modmii) (csak Windows) segítségével frissíteni a Wii-t a 4.3-as verzióra.

:::

## Követelmények

- egy Wii a The Homebrew Channel 1.0.8-cal vagy későbbivel
    - Ha nincs Homebrew Channel-ed vagy túl régi kezd [itt](get-started) az (újra)telepítéséhez.
- Egy SD kártya vagy pendrive
- Egy számítógép Windows-szal
- [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest)
- [Priiloader](priiloader)
- [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

## Lépések

### I. rész - Letöltés

1. Csomagold ki a .zip fájlját a NUS Downloader Wii-nak és nyisd meg az alkalmazást.
2. Navigálj a `Database...` > `System` > `0000000100000002 - System Menu` opcióhoz és válaszd a verziót, ami kapcsolódik a régiódhoz az alábbi táblázatból.
3. Biztosítsd, hogy a `Pack WAD` be legyen pipálva.
4. Nyomd meg a `Start NUS Download!`-ot.
5. Nyisd meg a `titles` -> `0000000100000002` -> (Wii Menu verzió) könyvtárat és másold a .wad fájtl egy `wad` nevű mappába az SD kártyádon vagy USB drive-odon.
6. Ismételd meg a 2-5 lépéseket az `IOS` -> `000000010000003A` -> `Latest Version` és az`IOS` -> `000000010000003A` -> `Latest Version` útvonalakon.
7. Ha felmásoltad mind a 3`.wad` fájlt, add ki az SD kártyád/USB drive-od a PC-ből és tedd vissza a Wii-odba.

| Regió  | Wii Menu verzió                                |
| ------ | ---------------------------------------------- |
| Japán  | v512 (4.3J) |
| USA    | v513 (4.3U) |
| Európa | v514 (4.3E) |
| Korea  | v518 (4.3K) |

### II. rész – Telepítés

1. Kapcsold ki a konzolod. Tartsd nyomva a RESET gombot és kapcsold be.
2. A Priiloader menu-ben válaszd a `Homebrew Channel`-t.
    - Ha a Priiloader menu nem jelenik meg, [telepítsd azt rögtön](priiloader). A Priiloader szükséges ehhez az útmutatóhoz.
3. Idítsd el a YAWM ModMii Edition-t.
4. Válaszd ki az SD kártyád vagy az USD drive-od.
5. Nyomdj + jelet az IOS80-ra és az IOS58 WAD-ra, hogy kijelöld őket, majd nyomj A gombot kétszer a telepítésükhöz.
6. Navigálj a Wii Menu WAD-hoz és nyomj A gombot kétszer a telepítéshez.
7. Amikor a Priiloader megtartására kér, nyomd meg az A gombot a megerősítéshez.
8. A sikeres telepítést követően a nyomd meg a HOME gombot, hogy kilépj a Homebrew Channel-hez.

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez.](site-navigation)

:::
