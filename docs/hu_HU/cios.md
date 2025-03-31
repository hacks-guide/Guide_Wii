---
outline: false
---

# cIOS-ek telepítése

::::: tabs

:::: tab cIOS for Wii/Family Edition

:::details Technikai részletek (opcionális)

a cIOS („custom IOS” / „egyéni IOS”)-ek egyéni rendszerfunkciók igénybevételét teszik lehetővé. Ugyan a [cIOS](https://wiibrew.org/wiki/Custom_IOS)-eket nagyrészt kiváltotta az AHBPROT, amely teljes hardveres hozzáférést biztosít, az előbbi továbbra is rendelkezik néhány hasznos képességgel. A cIOS-ek pl. lehetővé teszik az USB-betöltők, mint az USB Loader GX és a WiiFlow, és néhány más program, mint a SaveGame Manager GX működését. Az útmutató ezen része nem kötelező, de ajánlott végigcsinálni, hiszen hátrányok nélkül kiterjeszti a Wiid funkcionalitását.

:::

::: warning

Ne próbálj meg vWii/Wii minire tervezett IOS-t vagy rendszermenüt Wiire telepíteni! Ha mégis így tennél, azzal [brickelheted](bricks#ios-brick) a konzolod.

:::

## Követelmények

- A Wii with the Homebrew Channel installed
- Egy SD kártya vagy pendrive
- The [d2x cIOS Installer](/assets/files/d2x-cios-installer.zip)

::: warning

Ha egy SD kártyát használsz, bizonyosodj meg róla, hogy a rajta lévő LOCK-kapcsoló nyitott állásban legyen, különben a telepítőben nem fogod tudni kiválasztani a helyes beállításokat!

:::

## Lépések

### I. rész - Letöltés

::: info

Ha macOS vagy Linux rendszerel dolgozol, letöltheted és futtathatod [ezt a szkriptet](/assets/files/d2x_offline_ios.zip), ami letölti neked a WAD fájlokat.

:::

::: info

Ha képes vagy csatlakoztatni a Wii-odat az internetre, átugorgathatsz a [II. részre](cios#section-ii---installing)

:::

1. Kapcsold ki a konzolod.
2. Csatlakoztasd a pendrive-ot vagy az SD kártyát a számítógépedbe!
3. A számítógépeden töltsd le a [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip)-t.
4. Másold ki az NUS Downloader `.zip` fájljának tartalmát egy mappába.
5. Futtasd a `NUS Downloader.exe` fájlt.
6. Navigálj a `Database` > `IOS` > `IOS38` opcióhoz, majd válaszd a `v4123` opciót.
    - Pipáld ki a „Pack WAD” lehetőséget.
    - _Vedd ki a pipát_ a „Patch IOS” lehetőségtől. Ezt majd a cIOS-telepítő megteszi.
7. Kattints a `Start NUS Download!` gombra.
8. Ismételd meg a fenti lépéseket az `IOS56 v5661`, `IOS57 v5918` és az `IOS58 v6175` beszerzéséhez is.
9. A folyamat végén találni fogsz egy `titles` mappát ugyanabban a mappában, mint ahol a NUS Downloader van.
10. Nyisd meg a `titles` mappát és keresd meg az imént letöltött WAD-fájlokat.
11. Helyezd az összes WAD-fájlt az SD kártya vagy USB drive gyökerére.
    - Ezen az eszközön legyen a d2x cIOS-telepítő is.

::: info

A WAD fájlok az SD kártyád gyökerében így fognak kinézni:

![](/images/cios/d2x_offline_ios.png)

:::

### II. rész – Telepítés

1. Másold az `apps` mappát a d2x-cios-installer `.zip` fájlból az SD kártya vagy az USB drive gyökerébe.

2. Csatlakoztasd az SD kártyát vagy a pendrive-ot a konzolodba!

3. Kapcsold be a konzolod.

4. Indítsd el a Homebrew Channelt.

5. Indítsd el a homebrew listáról a „d2x cIOS Installer”-t.

6. Állíts be mindent az alábbiak szerint:

    ```
    Select cIOS <d2x-v11-beta2>
    Select cIOS base <38>
    Select cIOS slot <248>
    Select cIOS revision <65535>
    ```

    ![](/images/cios/d2x_v11_248.png)

    ::: info

    If you do not see `d2x-v11-beta2`, exit the installer with B, and make sure your SD card is unlocked.

    :::

    ::: info

    A „`(c)IOS detected in slot ### will be overwritten`” figyelmeztetést figyelmen kívül hagyhatod.

    :::

    ::: info

    Ha a telepítő a "`Slot ### already used in batch settings`" vagy a "`cIOS already added in batch with revision ##### and slot ###`" figyelmeztetést írja ki, akkor nyomd meg a `-` gombot a kötegelt mód kikapcsolásához.

    (Ha ki szeretnél lépni a telepítőből, azt a Home gomb helyett a B gombbal teheted meg.)

    :::

7. Nyomj `A` gombot. Erre a program meg fogja mutatni a helykiosztást:

    ![](/images/cios/d2x_summary.png)

8. Ismét nyomd meg az `A` gombot.

    ![](/images/cios/d2x_installation.png)

9. A telepítés befejezése után ismét a helykiosztást fogod látni. Ellenőrizd, hogy az imént telepített IOS helye zölden van kiemelve.

    ![](/images/cios/d2x_log.png)

    ::: info

    If the slot is highlighted red, try to install the cIOS again.

    Ha hibát kapsz a letöltési fázisok előtt/alatt, (pl. `tcp_connect timeout`, `net_gethostbyname failed: ...`), nyomj B gombot a kilépéshez és folytasd az [I. résszel](#section-i---downloading).

    :::

10. Nyomj `A` gombot. Ezzel visszajutsz a konfigurációs képernyőre.

11. Ismételd meg az előző 5 lépést az alábbi beállításokkal:

    - A cIOS 249 telepítéséhez

        ```
        Select cIOS <d2x-v11-beta2>
        Select cIOS base <56>
        Select cIOS slot <249>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_249.png)

    - A cIOS 250 telepítéséhez

        ```
        Select cIOS <d2x-v11-beta2>
        Select cIOS base <57>
        Select cIOS slot <250>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_250.png)

    - A cIOS 251 telepítéséhez

        ```
        Select cIOS <d2x-v11-beta2>
        Select cIOS base <58>
        Select cIOS slot <251>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_251.png)

12. Ha végeztél mind a négy cIOS telepítésével, nyomd meg a B gombot a Homebrew Channelbe való visszatéréshez.

::: info

Ha letöltötted a 4 WAD fájlt az I. részben, most törölheted őket az SD kártyádról/USB drive-odról.

:::

::: tip

[Continue to Open Shop Channel installation](osc)

Most, hogy a konzol megfelelő védelemmel rendelkezik, telepítheted az Open Shop Channelt, ami a homebrew programok megbízható tárháza és hozzáférhető mind egy Wiiről vagy egy számítógépről.

:::

::::

:::: tab cIOS for vWii (Wii U)

:::details Technikai részletek (opcionális)

a cIOS („custom IOS” / „egyéni IOS”)-ek egyéni rendszerfunkciók igénybevételét teszik lehetővé. Ugyan a [cIOS](https://wiibrew.org/wiki/Custom_IOS)-eket nagyrészt kiváltotta az AHBPROT, amely teljes hardveres hozzáférést biztosít, az előbbi továbbra is rendelkezik néhány hasznos képességgel. A cIOS-ek pl. lehetővé teszik az USB-betöltők, mint az USB Loader GX és a WiiFlow, és néhány más program, mint a SaveGame Manager GX működését. Az útmutató ezen része nem kötelező, de ajánlott végigcsinálni, hiszen hátrányok nélkül kiterjeszti a Wiid funkcionalitását.

:::

::: warning

Ne próbálj meg Wii/Wii minire tervezett IOS-t vagy rendszermenüt vWiire telepíteni! Ha mégis így tennél, azzal [brickelheted](bricks#ios-brick) a konzolod.

:::

## Requirements

- Egy Wii U, aminek a vWii-jére telepítve van a Homebrew Channel
- Egy SD kártya vagy pendrive
- The [d2x cIOS Installer for vWii](/assets/files/d2x_cIOS_Installer-vWii.zip)

::: warning

Ha egy SD kártyát használsz, bizonyosodj meg róla, hogy a rajta lévő LOCK-kapcsoló nyitott állásban legyen, különben a telepítőben nem fogod tudni kiválasztani a helyes beállításokat!

:::

## Lépések

### I. rész – Telepítés

1. Copy the `apps` folder in the d2x-cios-installer-vwii `.zip` to the root of your SD card or USB drive.

2. Csatlakoztasd az SD kártyát vagy a pendrive-ot a konzolodba!

3. Kapcsold be a konzolod.

4. Indítsd el a Homebrew Channelt.

5. Indítsd el a homebrew listáról a „d2x cIOS Installer”-t.

6. Állíts be mindent az alábbiak szerint:

    ```
    Select cIOS <d2x-v11-beta2-vWii>
    Select cIOS base <38>
    Select cIOS slot <248>
    ```

    ![](/images/cios/d2x_v11_248_vwii.png)

    ::: info

    If you do not see `d2x-v11-beta2-vWii`, exit the installer with B, and make sure your SD card is unlocked.

    :::

7. Press `A` to install.

    ![](/images/cios/d2x_installation.png)

8. Repeat the previous 2 steps with the following configurations:

    - A cIOS 249 telepítéséhez

        ```
        Select cIOS <d2x-v11-beta2-vWii>
        Select cIOS base <56>
        Select cIOS slot <249>
        ```

    ![](/images/cios/d2x_v11_249_vwii.png)

    - A cIOS 250 telepítéséhez

        ```
        Select cIOS <d2x-v11-beta2-vWii>
        Select cIOS base <57>
        Select cIOS slot <250>
        ```

        ![](/images/cios/d2x_v11_250_vwii.png)

    - A cIOS 251 telepítéséhez

        ```
        Select cIOS <d2x-v11-beta2-vWii>
        Select cIOS base <58>
        Select cIOS slot <251>
        ```

        ![](/images/cios/d2x_v11_251_vwii.png)

9. Ha végeztél mind a négy cIOS telepítésével, nyomd meg a B gombot a Homebrew Channelbe való visszatéréshez.

::: tip

[Continue to finalizing setup](vwii-finalizing-setup)

:::

::::

:::: tab cIOS for Wii mini

::: info

Ha az útmutatóval kapcsolatban segítségre lenne szükséged (angol nyelven), kérjük csatlakozz a [Wii mini Hacking Discord server](https://discord.gg/6ryxnkS)-hez. (ajánlott)

:::

:::details Technikai részletek (opcionális)

a cIOS („custom IOS” / „egyéni IOS”)-ek egyéni rendszerfunkciók igénybevételét teszik lehetővé. Ugyan a [cIOS](https://wiibrew.org/wiki/Custom_IOS)-eket nagyrészt kiváltotta az AHBPROT, amely teljes hardveres hozzáférést biztosít, az előbbi továbbra is rendelkezik néhány hasznos képességgel. A cIOS-ek pl. lehetővé teszik az USB-betöltők, mint az USB Loader GX és a WiiFlow, és néhány más program, mint a SaveGame Manager GX működését. Az útmutató ezen része nem kötelező, de ajánlott végigcsinálni, hiszen hátrányok nélkül kiterjeszti a Wiid funkcionalitását.

A d2x cIOS-telepítő ezen változatát eredetileg a Wii U vWiijére készítette DaveBaol, amit a Wii minire Leseratte ültetett át. Az eredeti oldal [itt](https://wii.leseratte10.de/d2xl-cIOS/) található. Leseratte GitHub oldala [itt](https://github.com/Leseratte10/d2xl-cios) található. Ugyan ez a cIOS még kísérleti fázisban áll, de még senki sem jelentett a működésével kapcsolatos hibát.

:::

::: warning

Ne próbálj meg Wii/vWiire tervezett IOS-t vagy System Menu-t a Wii minire telepíteni. Ha mégis így tennél, azzal [brickelheted](bricks#ios-brick) a konzolod.

:::

## Requirements

- Egy Wii mini, amire telepítve van a Homebrew Channel
- Egy USB drive
- The [d2xl cIOS Installer](/assets/files/d2xl-cios-installer-mini.zip)

## Lépések

### I. rész - Letöltés

1. Kapcsold ki a konzolod.
2. Csatlakoztasd az USB drive-ot a számítógépedhez.
3. Copy the `apps` folder from the d2xl-cios-installer-mini `.zip` to the root of your USB drive.
4. Helyezd be a pendrive-ot a konzolba!
5. Kapcsold be a konzolod.
6. Indítsd el a Homebrew Channelt.
7. Indítsd el a listáról a „d2x cIOS Installer”-t!

### II. rész – Telepítés

1. Válaszd a `Continue`-t.
2. Állíts be mindent az alábbiak szerint:

    ```
    Select cIOS <d2xl-v1-beta2>
    Select cIOS base <57>
    Select cIOS slot <249>
    ```

    ![](/images/cios/d2x_v1_249_mini_NTSC.png)
    ![](/images/cios/d2x_v1_249_mini_PAL.png)

    - Under notes, you will see an IOS version number ending in either `v31775` or `v31776`. `IOS57-64-v31775` is for NTSC (North American) consoles, while `IOS57-64-v31776` is for PAL (European) consoles. Make sure you are selecting the correct version number for your console.
3. A telepítés indításához nyomd meg az A gombot.
    - Ha a telepítés megszakad `TMD version mismatch` hibával, akkor a Control Pad jobb- és bal nyílgombjaival állítsd át a `Select cIOS base` opciót amíg verziószám más nem lesz, mint amit korábban próbáltál. Az 57-es szám nem változik.
4. A folyamat végén lépj ki a telepítőből.

::: tip

[Continue to finalizing setup](mini-finalizing-setup)

:::

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez.](site-navigation)

:::

::::

:::::
