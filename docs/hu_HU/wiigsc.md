# Wii játék shortcut-ok létrehozása

Használsz Wii backup betöltőt, és szeretnél játék parancsikonokat létrehozni, hogy elindíthasd őket a Wii menüjében? Akkor próbáld ki a WiiGSC-t (Wii Game Shortcut Creator), korábbi nevén Crap.

::: warning

In the case of a brick, [installing Priiloader is a must](/priiloader). Továbbá telepítsd a BootMii-t (Boot2-ként, ha korai Wii-d van). A brickvédelem telepítése az útmutató helyes követésével együtt megóv a brickelődéstől. NE FOLYTASD, AMÍG NEM TELEPÍTETTED A PRIILOADER-T ÉS A BOOTMII-T!

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
- [WiiGSC](https://wiidatabase.de/downloads/pc-tools/wiigsc-ehemals-crap/)

## Útmutató

1. Install WiiGSC, then right click on it and choose **Run as administrator**. Ha ezt nem teszed meg, a WiiGSC hibát fog dobni, amikor megnyitod.

   ![](/images/desktop-apps/wiigsc/wiigsc-home.png)

2. Válaszd ki az SD-kártyán vagy USB-meghajtón lévő ISO- vagy WBFS-fájl elérési útvonalát, és válaszd ki a használt betöltőt. A többi beállításnak úgy kell lennie, ahogy van.

   ![](/images/desktop-apps/wiigsc/wiigsc-selection.png)

   ::: info

   If you are on vWii, use the [Wiiforwarder2vWii](https://gbatemp.net/download/wiiforwarder2vwii-wii-forwarder-to-vwii-wii-u-forwarder-converter-beta-version.37254/) tool to convert the WAD for use on the vWii.

   :::

3. Install the generated WAD with your [WAD manager](yawmme).

::: info

Ha hibaüzenetet kapsz "The system files are corrupted", ne ess pánikba, ha telepítetted a Priiloader-t. Kapcsold ki a Wii-t, majd [bootolj a Priiloader-be](priiloader#section-iii---entering-priiloader) a konzolodhoz rendelkezésre álló módszerek egyikével. Lépj be a Homebrew Channel csatornába, és indítsd el a WAD managert a WAD eltávolításához. Ha a priiloader nem volt telepítve, folytasd a [BlueBomb](bluebomb) lépéssel.

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::
