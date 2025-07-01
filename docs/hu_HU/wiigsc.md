# Wii játék shortcut-ok létrehozása

Ez az útmutató azt tartalmazza, hogy a WiiGSC (Wii Game Shortcut Creator) szoftver segítségével hogyan tudsz létrehozni Wii játékparancsikonokat, külső tárolóeszközökön található játékok biztonsági másolataihoz. A játékparancsikonok létrehozásával a játék biztonsági másolatát közvetlenül a Wii menüből indíthatod el, mintha a játékot normál lemezként helyezted volna be.

::: warning

A [Priiloader](priiloader) és a [BootMii](bootmii) telepítése ajánlott, mivel ez az útmutató brickelés kockázatot jelent és a helyes követése biztonságot nyújt. NE folytasd az útmutatót, ha még nem telepítetted a Priiloader vagy a BootMii programot!

:::

::: warning

NE készíts parancsikont a "Mario Party 9" vagy az "A Boy and His Blob" játékokhoz. Ez brickeli a Wii-odat.

:::

::: warning

A böngésződ vagy a vírusírtó szoftvered elképzelhető, hogy a WiiGSC-t malware-nek jelöli - ez hamis pozitív. A WiiGSC NEM tartalmaz malware-t.

:::

::: info

A Wii menü 48 csatornára van korlátozva, nem számítva a meglévő rendszercsatornákat.

:::

## Requirements

- Egy Wii
- Egy SD kártya vagy USB drive
- Egy Windows számítógép
- [YAWM ModMii Edition](yawmme)
- [WiiGSC ModMii Edition](https://github.com/modmii/WiiGSC/releases)

## Lépések

### I. rész - Egy csatorna (channel) létrehozása

1. Csomagold ki a WiiGSC `.zip`-et, keresd meg a `WiiGSC.exe` fájlt és indítsd el. Az első indításkor a rendszer kéri a közös kulcs létrehozását és megjelenik egy nyilatkozat – egyszerűen kattints át ezeken az ablakokon.

    ![](/images/desktop-apps/wiigsc/wiigsc-disclaimer.png)

2. A WiiGSC megnyitásakor válaszd az `Open WBFS Drive` (WBFS meghajtó megnyitása) lehetőséget, majd válaszd ki a WBFS fájlokat tartalmazó eszköz meghajtóbetűjelét. Alternatív megoldásként kiválaszthatsz egy egyedi ISO/WBFS fájlt is.

    ![](/images/desktop-apps/wiigsc/wiigsc-selection.png)

3. Válaszd ki azt a játékot, amelyhez csatornát szeretnél létrehozni, majd nyomd meg a `Use for Channel Creation` (Csatorna létrehozásához használat) gombot. Válaszd ki a játék indításához használni kívánt USB-töltőt, majd nyomd meg a bal alsó sarokban található `Create Channel` (Csatorna létrehozása) gombot.

    ![](/images/desktop-apps/wiigsc/wiigsc-creation.png)

4. Másold a kimeneti WAD fájlod az SD kártyádra vagy más eszközödre, amiről a homebrew-okat töltöd be.

### II. rész – Egy csatorna (channel) telepítése

1. Nyisd meg a WAD manager-ed és keresd meg a kimeneti WAD-ot majd telepítsd azt.

    ![](/images/desktop-apps/wiigsc/wiigsc-install.png)

2. Ha sikeres volt látnod kell a játékod parancsikonját a Wii Menu-ben!

    ![](/images/desktop-apps/wiigsc/wiigsc-success.png)

::: info

Ha hibaüzenetet kapsz "The system files are corrupted", ne ess pánikba, ha telepítetted a Priiloader-t. Kapcsold ki a Wii-t, majd [bootolj a Priiloader-be](priiloader#section-iii---entering-priiloader) a konzolodhoz rendelkezésre álló módszerek egyikével. Lépj be a Homebrew Channel csatornába, és indítsd el a WAD managert a WAD eltávolításához. Ha a priiloader nem volt telepítve, folytasd a [BlueBomb](bluebomb) lépéssel.

:::

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez.](site-navigation)

:::
