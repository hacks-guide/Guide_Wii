---
title: "cIOS-ek telepítése"
---

{% include toc title="Tartalomjegyzék" %}

{% capture technical_info %}
<summary><em>Technikai részletek (nem kötelező)</em></summary> a cIOS („custom IOS” / „egyéni IOS”)-ek egyéni rendszerfunkciók igénybevételét teszik lehetővé. Ugyan a [cIOS](https://wiibrew.org/wiki/Custom_IOS)-eket nagyrészt kiváltotta az AHBPROT, amely teljes hardveres hozzáférést biztosít, az előbbi továbbra is rendelkezik néhány hasznos képességgel. A cIOS-ek pl. lehetővé teszik az USB-betöltők, mint az USB Loader GX és a WiiFlow, és néhány más program, mint a SaveGame Manager GX működését. Az útmutató ezen része nem kötelező, de ajánlott végigcsinálni, hiszen hátrányok nélkül kiterjeszti a Wiid funkcionalitását.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

Az útmutató ezen része csak Wii-felhasználóknak szól. Ha egy Wii minid van, [ezt az útmutatót](cios-mini) kövesd! Ha egy Wii U-d (vWii) van, [ezt az útmutatót](cios-vwii) kövesd!
{: .notice--warning}

Ne próbálj meg vWii/Wii minire tervezett IOS-t vagy rendszermenüt Wiire telepíteni! Ha mégis így tennél, azzal [elronthatod](bricks#ios-brick) a konzolod!
{: .notice--warning}

### Követelmények

* Egy Wii
* Egy SD kártya vagy pendrive
* [A d2x cIOS-telepítő](/assets/files/d2x-cios-installer.zip)

Ha egy SD kártyát használsz, bizonyosodj meg róla, hogy a rajta lévő LOCK-kapcsoló nyitott állásban legyen, különben a telepítőben nem fogod tudni kiválasztani a helyes beállításokat!
{: .notice--warning}

### Útmutató

#### I. rész – Letöltés

Ha Windowssal dolgozol, letöltheted és futtathatod [ezt a parancsfájlt](/assets/files/d2x_offline_ios.sh) a WAD-fájlok automatikus beszerzéséhez.
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

    A „`(c)IOS detected in slot ### will be overwritten`” („Az x. helyen található (c)IOS felül lesz írva”)-figyelmeztetést figyelmen kívül hagyhatod.
    {: .notice--info}

    If you are seeing "`Slot ### already used in batch settings`" or "`cIOS already added in batch with revision ##### and slot ###`", press `-` to disable batch mode. <br> (If you are trying to exit the installer, the button is B, not Home.)
    {: .notice--info}

1. Nyomj `A`-t. This will bring you to the slot map:

    ![](/images/cios/d2x_summary.png)

1. Nyomj `A`-t újra.

    ![](/images/cios/d2x_installation.png)

1. After the installation has finished, you will be brought back to the slot map. Ensure that the slot that was just installed is highlighted green.

    ![](/images/cios/d2x_log.png)

    If the slot is highlighted red, try install the cIOS again. <br> If you are getting an error before/during the downloading stages, press B to exit and continue from [Section I](#section-i---downloading).
    {: .notice--info}

1. Nyomj `A`-t. This will return you to the configuration screen.
1. Repeat the previous 5 steps with the following configurations:

    + cIOS 249 Installation

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <56>
        Select cIOS slot <249>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_249.png)

    + cIOS 250 Installation

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <57>
        Select cIOS slot <250>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_250.png)

    + cIOS 251 Installation

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <58>
        Select cIOS slot <251>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_251.png)

1. Once you have finished with all 4 cIOSes, press B to return to the Homebrew Channel.

Continue to [Open Shop Channel Installation](osc) <br> Now that your Wii has adequate brick protection, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii.
{: .notice--info}
