# d2xl cIOS Wii mini-konzolokra (kísérleti)

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

:::details Technikai részletek (opcionális)

A d2x cIOS-telepítő ezen változatát eredetileg a Wii U vWiijére készítette DaveBaol, amit a Wii minire Leseratte ültetett át. The original download page can be found [here](https://wii.leseratte10.de/d2xl-cIOS/). Leseratte's GitHub page can be found [here](https://github.com/Leseratte10/d2xl-cios). Ugyan ez a cIOS még kísérleti fázisban áll, de még senki sem jelentett a működésével kapcsolatos hibát.

:::

::: warning

Ez az útmutató csak Wii Mini felhasználóknak szól.

Ha egy sima Wiid van, [ezt az útmutatót](cios) kövesd!

If you have a Wii U (vWii), follow [this guide](cios-vwii) instead.

:::

::: warning

Ne próbálj meg Wii/vWiire tervezett IOS-t vagy rendszermenüt Wii minire telepíteni! Ha mégis így tennél, azzal [elronthatod](bricks#ios-brick) a konzolod!

:::

## Követelmények

- Egy Wii mini, amire telepítve van a Homebrew Channel
- Egy USB drive
- Leseratte [d2xl cIOS Installer](/assets/files/d2xl_wii_mini_cIOS_installer_v1_beta2.zip)-je

## Lépések

### I. rész - Letöltés

1. Kapcsold ki a konzolod.
2. Csatlakoztasd a pendrive-ot a számítógépedbe!
3. Create a folder named `apps` on the root of your USB drive if it does not already exist.
4. Másold át a d2xl cIOS Installer `.zip` fájlban található `d2x-cios-installer` mappát az USB drive `apps` mappájába.
5. Helyezd be a pendrive-ot a konzolba!
6. Kapcsold be a konzolod.
7. Indítsd el a Homebrew Channelt!
8. Indítsd el a listáról a „d2x cIOS Installer”-t!

### II. rész – Telepítés

1. Válaszd a `Continue`-t.
2. Állíts be mindent az alábbiak szerint:
   ```
   Select cIOS <d2xl-v1-beta2>
   Select cIOS base <57>
   Select cIOS slot <249>
   ```
   - Take a note of the version number under notes (`IOS57-64-` ending in either `v31776` or `v31775`)
3. A telepítés indításához nyomd meg az A-gombot!
   - If the install fails with a `TMD version mismatch` error, press left or right on the +Control Pad over the `Select cIOS base` option until the version number is different than the one you tried before. Az 57-es szám nem változik.
4. A folyamat végén lépj ki a telepítőből!

::: tip

[Continue to making a NAND Backup using RealWnd](wnd-mini)

:::

### A vezetékes internet felállítása

If you wish to use Wiimmfi with Ethernet on a Wii mini, you have to run the [Ethernet Enabler Homebrew](/assets/files/Wii_Mini_Ethernet_Enable.zip) app made by Fullmetal5. To run it, just unzip it in the `apps` folder of your USB drive and run it from the Homebrew Channel.

::: info

Minden jelenleg ismert működő vezetékesinternet-adapter az AX88772 chipet használja. Vásárlás előtt ellenőrizd, hogy a termék ilyen chippel rendelkezik! This one from UGREEN is known to be compatible: [Amazon Europe](https://www.amazon.de/dp/B00MYT481C), [Amazon US](https://a.co/d/3OcSJDS)

:::

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez!](site-navigation)

:::
