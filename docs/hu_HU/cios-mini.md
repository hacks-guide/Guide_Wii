# d2xl cIOS Wii mini-konzolokra (kísérleti)

::: info

Ha az útmutatóval kapcsolatban segítségre lenne szükséged (angol nyelven), kérjük csatlakozz a Wii mini Hacking Discord szerver](https://discord.gg/6ryxnkS)-hez! (ajánlott)

:::

:::details Technikai részletek (opcionális)

A d2x cIOS-telepítő ezen változatát eredetileg a Wii U vWiijére készítette DaveBaol, amit a Wii minire Leseratte ültetett át. Az eredeti oldal [itt](https://wii.leseratte10.de/d2xl-cIOS/) található. Leseratte GitHub oldala [itt](https://github.com/Leseratte10/d2xl-cios) található. Ugyan ez a cIOS még kísérleti fázisban áll, de még senki sem jelentett a működésével kapcsolatos hibát.

:::

::: warning

Ez az útmutató csak Wii Mini felhasználóknak szól.

Ha egy sima Wiid van, [ezt az útmutatót](cios) kövesd!

Ha egy Wii U-d (vWii) van, [ezt](cios-vwii) az útmutatót kövesd helyette.

:::

::: warning

Ne próbálj meg Wii/vWiire tervezett IOS-t vagy System Menu-t a Wii minire telepíteni. Ha mégis így tennél, azzal [brickelheted](bricks#ios-brick) a konzolod.

:::

## Követelmények

- Egy Wii mini, amire telepítve van a Homebrew Channel
- Egy USB drive
- Leseratte [d2xl cIOS Installer](/assets/files/d2xl_wii_mini_cIOS_installer_v1_beta2.zip)-je

## Lépések

### I. rész - Letöltés

1. Kapcsold ki a konzolod.
2. Csatlakoztasd az USB-driveot a számítógépedhez.
3. Ha még nem létezik, hozz létre egy `apps` nevű mappát az USB drive gyökerén.
4. Másold át a d2xl cIOS Installer `.zip` fájlban található `d2x-cios-installer` mappát az USB drive `apps` mappájába.
5. Helyezd be a pendrive-ot a konzolba!
6. Kapcsold be a konzolod.
7. Indítsd el a Homebrew Channelt.
8. Indítsd el a listáról a „d2x cIOS Installer”-t!

### II. rész – Telepítés

1. Válaszd a `Continue`-t.
2. Állíts be mindent az alábbiak szerint:
    ```
    Select cIOS <d2xl-v1-beta2>
    Select cIOS base <57>
    Select cIOS slot <249>
    ```
    - Jegyezd fel a megjelenő verziószámot (`IOS57-64-`-gyel kezdődik és `v31776`-tal vagy `v31775`-tel ér véget)
3. A telepítés indításához nyomd meg az A gombot.
    - Ha a telepítés megszakad `TMD version mismatch` hibával, akkor a Control Pad jobb- és bal nyílgombjaival állítsd át a `Select cIOS base` opciót amíg verziószám más nem lesz, mint amit korábban próbáltál. Az 57-es szám nem változik.
4. A folyamat végén lépj ki a telepítőből.

::: tip

[Folytatás a NAND biztonsági mentés készítése a [RealWnd segítségével](wnd-mini) fejezettel

:::

### A vezetékes internet felállítása

Ha a Wii minin vezetékes internettel szeretnéd használni a Wiimmfit, akkor futtatnod kell a Fullmetal5 által készített Ethernet Enabler Homebrew](/assets/files/Wii_Mini_Ethernet_Enable.zip) alkalmazást. A futtatáshoz csak csomagold ki az USB drive-od `apps` mappájába, majd indítsd el a Homebrew Channelből.

::: info

A Wii és a Wii mini konzolok ismertek arról, hogy csak az AX88772 chipet használó Ethernet adapterrel működnek. Vásárlás előtt ellenőrizd, hogy a termék ilyen chippel rendelkezik. Ez a UGREEN-től ismert, hogy kompatibilis: [Amazon Europe](https://www.amazon.de/dp/B00MYT481C), [Amazon US](https://a.co/d/3OcSJDS)

:::

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez.](site-navigation)

:::
