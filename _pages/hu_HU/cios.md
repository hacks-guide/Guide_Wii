---
title: "cIOS-ek telepítése"
---

{% include toc title="Tartalomjegyzék" %}

{% capture technical_info %}
<summary><em>Technikai részletek (nem kötelező)</em></summary> a cIOS („custom IOS” / „egyéni IOS”)-ek egyéni rendszerfunkciók igénybevételét teszik lehetővé. Ugyan a [cIOS](https://wiibrew.org/wiki/Custom_IOS)-eket nagyrészt kiváltotta az AHBPROT, amely teljes hardveres hozzáférést biztosít, az előbbi továbbra is rendelkezik néhány hasznos képességgel. A cIOS-ek pl. lehetővé teszik az USB-betöltők, mint az USB Loader GX és a WiiFlow, és néhány más program, mint a SaveGame Manager GX működését. Az útmutató ezen része nem kötelező, de ajánlott végigcsinálni, hiszen hátrányok nélkül kiterjeszti a Wiid funkcionalitását.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

### Követelmények

Az útmutató ezen része csak Wii-felhasználóknak szól. <br/> Ha egy Wii U-d (vWii) van, [ezt az útmutatót](cios-vwii) kövesd. <br/>Ha egy Wii minid van, [ezt az útmutatót](cios-mini) kövesd.
{: .notice--warning}

* Egy Wii
* Egy SD kártya vagy pendrive
* [A d2x cIOS-telepítő](/assets/files/d2x-cios-installer.zip)

### Útmutató

#### I. rész – Letöltés

Ha macOS vagy Linux rendszerel dolgozol, letöltheted és futtathatod [szkriptet](/assets/files/d2x_offline_ios.sh), ami letölti neked a WAD fájlokat.
{: .notice--info}

Ha képes vagy csatlakoztatni a Wii-t az internetre, átugorgatod a [II. részt](cios#section-ii---installing)
{: .notice--info}

1. Kapcsold ki a konzolt!
1. Csatlakoztasd a pendrive-ot vagy az SD kártyát a számítógépedbe!
1. Töltsd le az [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip)t a számítógépedre!
1. Másold ki az NUS Downloader `.zip`-fájljának tartalmát egy mappába!
1. Futtasd az `NUS Downloader.exe`-fájlt!
1. Kattints a `Database` -> `IOS` -> `IOS38`-menüpontokra, majd válaszd ki a `v4123`-at!
    + Pipáld ki a „Pack WAD” („WAD becsomagolása”)-lehetőséget!
    + *Vedd ki* a pipát a „Patch IOS” („IOS módosítása”)-lehetőségtől! Ezt majd a cIOS-telepítő megteszi.
1. Kattints a „`Start NUS Download!`” („NUS-letöltés indítása”)-gombra!
1. Ismételd meg a fenti lépéseket az `IOS56 v5661`, `IOS57 v5918` és `IOS58 v6175` beszerzéséhez is!
1. A folyamat végén találni fogsz egy `titles`-mappát a NUS Downloader mappájában.
1. Nyisd meg a `titles`-mappát és keresd meg az imént letöltött WAD-fájlokat!
1. Helyezd az összes WAD-fájlt az SD kártya vagy pendrive gyökerére!
    + Ezen az eszközön legyen a d2x cIOS-telepítő is!

Az SD kártyád gyökere így fog kinézni:![](/images/cios/d2x_offline_ios.png)
{: .notice--info}

#### II. rész – Telepítés

1. Helyezd át az `apps`-mappát a d2x-cios-installer `.zip`-fájlból az SD kártya vagy pendrive gyökerére!
1. Csatlakoztasd az SD kártyát vagy a pendrive-ot a konzolodba!
1. Kapcsold be a konzolt!
1. Indítsd el a Homebrew Channelt!
1. Indítsd el a listáról a „d2x cIOS Installer”-t!
1. Állíts be mindent az alábbiak szerint:

    ```
    Select cIOS <d2x-v11-beta1>
    Select cIOS base <38>
    Select cIOS slot <248>
    Select cIOS revision <65535>
    ```

    ![](/images/cios/d2x_v11_248.png)

    Ha nem látod a `d2x-v11-beta1`-et, lépj ki a telepítőből B-vel, és biztosítsd, hogy az SD kártyád írható legyen.
    {: .notice--info}

    A „`(c)IOS detected in slot ### will be overwritten`” („Az x. helyen található (c)IOS felül lesz írva”) figyelmeztetést figyelmen kívül hagyhatod.
    {: .notice--info}

    Ha a telepítő a „`Slot ### already used in batch settings`” („Az x. hely már meg van határozva a kötegbeállításokban”) vagy a „`cIOS already added in batch with revision ##### and slot ###`” („Ez a cIOS már meg van határozva az x. verzió y. helyén”)-figyelmeztetést írja ki, akkor nyomd meg a `-`-gombot a kötegelt mód kikapcsolásához! <br> (Ha ki szeretnél lépni, azt a HOME-gomb helyett a B-gombbal teheted meg!)
    {: .notice--info}

1. Nyomd meg az `A`-gombot! Erre a program meg fogja mutatni a helykiosztást:

    ![](/images/cios/d2x_summary.png)

1. Ismét nyomd meg az `A`-gombot!

    ![](/images/cios/d2x_installation.png)

1. A telepítés befejezése után ismét a helykiosztást fogod látni. Ellenőrizd, hogy az imént telepített IOS helye zölden van kiemelve!

    ![](/images/cios/d2x_log.png)

    Ha pirossal van kiemelve, próbáld újra a telepítést! <br> Ha a letöltési szakasz előtt vagy közben a program hibát jelez, nyomd meg a B-gombot és kezdd újra a folyamatot az [I. résztől](#section-i---downloading)!
    {: .notice--info}

1. Nyomd meg az `A`-gombot! Ezzel visszajutsz a konfigurációs képernyőre.
1. Ismételd meg az előző 5 lépést az alábbi beállításokkal:

    + A cIOS 249 telepítéséhez

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <56>
        Select cIOS slot <249>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_249.png)

    + A cIOS 250 telepítéséhez

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <57>
        Select cIOS slot <250>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_250.png)

    + A cIOS 251 telepítéséhez

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <58>
        Select cIOS slot <251>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_251.png)

1. Ha végeztél mind a négy cIOS telepítésével, nyomd meg a B-gombot a Homebrew Channelbe való visszatéréshez!

Ha letöltötted a 4 WAD fájlt az I. részben, most törölheted őket az SD kártyádról/USB drive-odról.
{: .notice--info}

Folytatás az [Open Shop Channel telepítésével](osc) <br> Most, hogy a konzol megfelelő védelemmel rendelkezik, telepítheted az Open Shop Channelt, ami a nemhivatalos programok megbízható tárháza és hozzáférhető mind egy Wiiről vagy egy számítógépről.
{: .notice--info}
