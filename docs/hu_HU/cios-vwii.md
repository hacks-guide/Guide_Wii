# d2xl cIOS vWiire (kísérleti)

:::details Technikai részletek (opcionális)

a cIOS („custom IOS” / „egyéni IOS”)-ek egyéni rendszerfunkciók igénybevételét teszik lehetővé. Ugyan a [cIOS](https://wiibrew.org/wiki/Custom_IOS)-eket nagyrészt kiváltotta az AHBPROT, amely teljes hardveres hozzáférést biztosít, az előbbi továbbra is rendelkezik néhány hasznos képességgel. A cIOS-ek pl. lehetővé teszik az USB-betöltők, mint az USB Loader GX és a WiiFlow, és néhány más program, mint a SaveGame Manager GX működését. Az útmutató ezen része nem kötelező, de ajánlott végigcsinálni, hiszen hátrányok nélkül kiterjeszti a Wiid funkcionalitását.

:::

::: warning

Ez az útmutató csak Wii U felhasználóknak szól.

Ha egy sima Wiid van, [ezt az útmutatót](cios) kövesd!

Ha egy Wii minid van, [ezt az útmutatót](cios-mini) kövesd!

:::

::: warning

Ne próbálj meg Wii/Wii minire tervezett IOS-t vagy rendszermenüt vWiire telepíteni! Ha mégis így tennél, azzal [brickelheted](bricks#ios-brick) a konzolod.

:::

## Követelmények

- Egy Wii U, aminek a vWii-jére telepítve van a Homebrew Channel
- Egy SD kártya
- A [d2x cIOS-telepítő](/assets/files/d2x_cIOS_Installer-vWii.zip)

::: warning

Ha egy SD kártyát használsz, bizonyosodj meg róla, hogy a rajta lévő LOCK-kapcsoló nyitott állásban legyen, különben a telepítőben nem fogod tudni kiválasztani a helyes beállításokat!

:::

## Lépések

### I. rész – Telepítés

1. Másold át az `apps` mappát a d2x-cios-installer `.zip` fájlból az SD kártyád gyökerébe.
2. Vedd ki az SD kártyát a PC-dből és rakd be a Wii U-ba.
3. Kapcsold be a Wii U-t és lépj vWii módba!
4. Indítsd el a Homebrew Channelt!
5. Indítsd el a d2x cIOS Installert.
6. Állíts be mindent az alábbiak szerint:
    - Select cIOS: `d2x-v11-beta2-vWii`
    - Select cIOS base: `56`
    - Select cIOS slot: `249`
7. A telepítés indításához nyomd meg az `A` gombot.
8. Állíts be mindent az alábbiak szerint:
    - Select cIOS: `d2x-v11-beta2-vWii`
    - Select cIOS base: `57`
    - Select cIOS slot: `250`
9. A telepítés indításához nyomd meg az `A` gombot.
10. Állíts be mindent az alábbiak szerint:
    - Select cIOS: `d2x-v11-beta2-vWii`
    - Select cIOS base: `58`
    - Select cIOS slot: `251`
11. A telepítés indításához nyomd meg az `A` gombot.
12. A kilépéshez nyomd meg a `B` gombot.

- Ha végeztél mind a három cIOS telepítésével, nyomd meg a B gombot a Homebrew Channelbe való visszatéréshez.

::: tip

Folytatás a [telepítés befejezésével](vwii-finalizing-setup)

:::
