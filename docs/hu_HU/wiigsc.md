# Wii játék shortcut-ok létrehozása

Használsz Wii backup betöltőt, és szeretnél játék parancsikonokat létrehozni, hogy elindíthasd őket a Wii menüjében? Akkor próbáld ki a WiiGSC-t (Wii Game Shortcut Creator), korábbi nevén Crap.

::: warning

Brick esetén a [Priiloader telepítése elengedhetetlen](/priiloader). Továbbá telepítsd a BootMii-t (Boot2-ként, ha korai Wii-d van). A brickvédelem telepítése az útmutató helyes követésével együtt megóv a brickelődéstől. NE FOLYTASD, AMÍG NEM TELEPÍTETTED A PRIILOADER-T ÉS A BOOTMII-T!

:::

::: warning

NE készíts parancsikont a "Mario Party 9" vagy az "A Boy and His Blob" játékokhoz. Ez brickeli a Wii-odat.

:::

::: info

A Wii menü 48 csatornára van korlátozva, nem számítva a meglévő rendszercsatornákat.

:::

## Követelmények

- Egy Wii
- Egy SD kártya vagy USB drive
- [YAWM ModMii Edition](yawmme)
- Egy Windows számítógép.
- [WiiGSC ModMii Edition](https://github.com/modmii/WiiGSC/releases)

## Lépések

1. Csomagold ki a WiiGSC `.zip`-et, keresd meg a `WiiGSC.exe` fájlt és indítsd el.

    ![](/images/desktop-apps/wiigsc/wiigsc-home.png)

2. Válaszd ki az SD-kártyán vagy USB-meghajtón lévő ISO- vagy WBFS-fájl elérési útvonalát, és válaszd ki a használt betöltőt. A többi beállításnak úgy kell lennie, ahogy van.

    ![](/images/desktop-apps/wiigsc/wiigsc-selection.png)

3. Telepítsd a generált WAD-et a [WAD manager](yawmme)-eddel.

::: info

Ha hibaüzenetet kapsz "The system files are corrupted", ne ess pánikba, ha telepítetted a Priiloader-t. Kapcsold ki a Wii-t, majd [bootolj a Priiloader-be](priiloader#section-iii---entering-priiloader) a konzolodhoz rendelkezésre álló módszerek egyikével. Lépj be a Homebrew Channel csatornába, és indítsd el a WAD managert a WAD eltávolításához. Ha a priiloader nem volt telepítve, folytasd a [BlueBomb](bluebomb) lépéssel.

:::

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez.](site-navigation)

:::
