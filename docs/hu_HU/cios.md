# cIOS-ek telepítése

:::details Technikai részletek (opcionális)

a cIOS („custom IOS” / „egyéni IOS”)-ek egyéni rendszerfunkciók igénybevételét teszik lehetővé. Ugyan a [cIOS](https://wiibrew.org/wiki/Custom_IOS)-eket nagyrészt kiváltotta az AHBPROT, amely teljes hardveres hozzáférést biztosít, az előbbi továbbra is rendelkezik néhány hasznos képességgel. A cIOS-ek pl. lehetővé teszik az USB-betöltők, mint az USB Loader GX és a WiiFlow, és néhány más program, mint a SaveGame Manager GX működését. Az útmutató ezen része nem kötelező, de ajánlott végigcsinálni, hiszen hátrányok nélkül kiterjeszti a Wiid funkcionalitását.

:::

## Követelmények

::: warning

Az útmutató ezen része csak Wii-felhasználóknak szól.

Ha egy Wii U-d (vWii) van, [ezt](cios-vwii) az útmutatót kövesd helyette.

Ha egy Wii minid van, [ezt az útmutatót](cios-mini) kövesd!

:::

- Egy Wii
- Egy SD kártya vagy pendrive
- [d2x cIOS Installer](/assets/files/d2x-cios-installer.zip)

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

    Ha nem látod a `d2x-v11-beta2`-et, lépj ki a telepítőből B-vel, és biztosítsd, hogy az SD kártyád írható legyen.

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

    Ha pirossal van kiemelve, telepítsd újra a cIOS-t.

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

Folytatás az [Open Shop Channel telepítés](osc)-ével

Most, hogy a konzol megfelelő védelemmel rendelkezik, telepítheted az Open Shop Channelt, ami a homebrew programok megbízható tárháza és hozzáférhető mind egy Wiiről vagy egy számítógépről.

:::
