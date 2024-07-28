---
title: "d2xl cIOS Wii mini-konzolokra (kísérleti)"
---

{% include toc title="Tartalomjegyzék" %}

Ha az útmutatóval kapcsolatban segítségre lenne szükséged (angol nyelven), kérjük [csatlakozz a „Wii mini Hacking”-Discord szerverhez](https://discord.gg/6ryxnkS)! (ajánlott)
{: .notice--info}

{% capture technical_info %}
<summary><em>Technikai részletek (nem kötelező)</em></summary> a cIOS („custom IOS” / „egyéni IOS”)-ek egyéni rendszerfunkciók igénybevételét teszik lehetővé. Ugyan a [cIOS](https://wiibrew.org/wiki/Custom_IOS)-eket nagyrészt kiváltotta az AHBPROT, amely teljes hardveres hozzáférést biztosít, az előbbi továbbra is rendelkezik néhány hasznos képességgel. A cIOS-ek pl. lehetővé teszik az USB-betöltők, mint az USB Loader GX és a WiiFlow, és néhány más program, mint a SaveGame Manager GX működését. Az útmutató ezen része nem kötelező, de ajánlott végigcsinálni, hiszen hátrányok nélkül kiterjeszti a Wiid funkcionalitását.

A d2x cIOS-telepítő ezen változatát eredetileg a Wii U vWiijére készítette DaveBaol, amit a Wii minire Leseratte ültetett át. Az eredeti letöltési oldalt [itt](https://wii.leseratte10.de/d2xl-cIOS/) találhatod meg. Leseratte GitHub-oldalát [itt](https://github.com/Leseratte10/d2xl-cios) találhatod meg. Ugyan ez a cIOS még kísérleti fázisban áll, de még senki sem jelentett a működésével kapcsolatos hibát.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

Ez az útmutató csak Wii Mini felhasználóknak szól. <br/> Ha egy Wii-od van, [ezt az útmutatót](cios) kövesd. <br/> Ha egy Wii U-d (vWii) van, [ezt az útmutatót](cios-vwii) kövesd.
{: .notice--warning}

Ne próbálj meg Wii/vWiire tervezett IOS-t vagy rendszermenüt Wii minire telepíteni! Ha mégis így tennél, azzal [elronthatod](bricks#ios-brick) a konzolod!
{: .notice--warning}

### Követelmények

* Egy Wii mini, amire telepítve van a Homebrew Channel
* Egy pendrive
* Leseratte [d2xl cIOS-telepítője](/assets/files/d2xl_wii_mini_cIOS_installer_v1_beta2.zip)

### Útmutató

#### I. rész – Letöltés

1. Kapcsold ki a konzolt!
1. Csatlakoztasd a pendrive-ot a számítógépedbe!
1. Ha még nem létezik, hozz létre egy `apps`-nevű mappát a pendrive gyökerén!
1. Másold át a d2xl cIOS Installer `.zip`-fájlban található `d2x-cios-installer`-mappát a pendrive `apps`-mappájába!
1. Helyezd be a pendrive-ot a konzolba!
1. Kapcsold be a konzolt!
1. Indítsd el a Homebrew Channelt!
1. Indítsd el a listáról a „d2x cIOS Installer”-t!

#### II. rész – Telepítés

1. Nyomd meg a „`Continue`”-gombot!
1. Állíts be mindent az alábbiak szerint:
    ```
    Select cIOS <d2xl-v1-beta2>
    Select cIOS base <57>
    Select cIOS slot <249>
    ```
    + Jegyezd fel a megjelenő verziószámot (`IOS57-64-`-gyel kezdődik és `v31776`-tal vagy `v31775`-tel ér véget)!
1. A telepítés indításához nyomd meg az A-gombot!
    + Ha a telepítés megszakad és a program „`TMD version mismatch`” („Helytelen TMD-verzió”)-hibát ír ki, akkor a vezérlő jobb- és bal nyílgombjaival állítsd át a „`Select cIOS base`” („cIOS alap kiválasztása”)-lehetőséget, amíg meg nem egyezik a korábban felírttal! Az 57-es szám nem változik.
1. A folyamat végén lépj ki a telepítőből!

[Folytatás a biztonsági mentés készítésével a RealWnd segítségével](wnd-mini)
{: .notice--info}

#### A vezetékes internet felállítása

Ha a Wii minin vezetékes internettel szeretnéd használni a Wiimmfit, akkor futtatnod kell a Fullmetal5 által készített „[Ethernet Enabler Homebrew](/assets/files/Wii_Mini_Ethernet_Enable.zip)”-alkalmazást! A futtatáshoz csomagold ki a pendrive-od `apps`-mappájába, majd indítsd el a Homebrew Channelből!

Minden jelenleg ismert működő vezetékesinternet-adapter az AX88772 chipet használja. Vásárlás előtt ellenőrizd, hogy a termék ilyen chippel rendelkezik! Ez az UGREEN-márkájú adapter biztosan működni fog: [európai Amazon](https://www.amazon.de/dp/B00MYT481C) / [amerikai Amazon](https://a.co/d/3OcSJDS)
{: .notice--info}

[Kattints ide a tartalomjegyzékhez való visszatéréshez!](site-navigation)
{: .notice--info}
