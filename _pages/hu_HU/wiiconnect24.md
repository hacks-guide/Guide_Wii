---
title: "WiiConnect24"
---

{% include toc title="Tartalomjegyzék" %}
<!--
This guide provides the means of regaining WiiConnect24 functionality on your console via RiiConnect24.
Although not at all necessary, it is a "nice to have" feature that was originally used for online connectivity in certain applications on the console.
These apps include the Forecast/News Channel, Nintendo Channel, Check Mii Out Channel, some Japan-exclusive channels, and more.
-->

A [WiiConnect24](https://wikipedia.org/wiki/WiiConnect24) egy olyan szolgáltatás volt, amely lehetővé tette az internetkapcsolattal rendelkező felhasználók számára az időjárás-előrejelzés megtekintését, a barátoknak való üzenetküldést, a Mii-versenyeken való részvételt és sok mást. Ez a szolgáltatás 2013. június 27-én megszűnt.

## WiiLink
A [WiiLink](https://www.wiilink24.com/) egy olyan szolgáltatás, ami újraéleszti és kiterjeszti a WiiConnect24 funkcióit. 2023 második felében összeolvadt a RiiConnect24-nevű újraélesztőprojekttel és most mindketten a WiiLink-név alatt futnak.

A WiiLink egy csatornamódosítóval telepíthető, ami támogatja mind a nemzetközi csatornákat, mint a News Channel, mind a korábban régiókorlátos csatornákat, mint a Wii Room. A szolgáltatások telepítési útmutatója a módosítóval együtt a [WiiLink honlapján](https://www.wiilink24.com/guide/) érhető el.

<!-- move this back to another page? or no -->
### A valós idejű óra átállítása

### Wii esetén

#### Követelmények
+ Egy Wii, ami csatlakoztatva van az internetre
+ A Homebrew Channel
+ Egy SD kártya vagy pendrive
+ [Az sntp](https://oscwii.org/library/app/sntp)

#### Útmutató
1. Töltsd le és csomagold ki az sntp .zip-fájlt az SD kártya vagy pendrive gyökerére!
1. Csatlakoztasd a pendrive-ot vagy az SD kártyát a Wiidhez!
1. Indítsd el a Homebrew Channelt!
1. Indítsd el az sntp-t!
1. Állítsd be a pontos időt a nyílgombokkal!
1. A kilépéshez nyomd meg a HOME-gombot!

### vWii esetén

#### Követelmények
+ A Homebrew Channel
+ Egy SD kártya
+ [A Priiloader](priiloader)

#### Útmutató
1. Látogasd meg az [UTC Patch Generator](https://garyodernichts.github.io/priiloader-patch-gen/)-honlapot és töltsd ki az űrlapot!
2. Kattints a „Generate” („generálás”)-gombra, majd másold ki a megjelenő információt kézileg vagy a „Copy” („másolás”)-gombbal!
3. Helyezd be az SD kártyát a számítógépbe és nyisd meg az `/apps/priiloader`-mappában található `hacks_hash.ini`-fájlt egy szövegszerkesztőben, pl. a Jegyzettömbben!
4. Illeszd be a kimásolt adatokat a `hacks_hash.ini`-fájl legaljára és mentsd el a változtatásokat!
5. Ha a régiódban van nyári időszámítás, akkor ismételd meg az 1–4. lépést a másik időzónával is!
6. Helyezd be az SD kártyát a Wii U-ba!
7. [Indítsd el a Priiloadert](priiloader#section-iii---entering-priiloader) vWii módban!
8. Válaszd ki a „Hacks”-menüpontot és engedélyezd a „Fix NWC24iSetUniversalTime”-módosítást!
9. Térj vissza a vWii menübe!

### WiiConnect24 Priiloader-módosítások

A WiiConnect24 vWiin és Wii minin való működéséhez bizonyos módosításokat engedélyezned kell. Ezekről (angol nyelven) alább olvashatsz:

+ [Üzenetküldés a naptárgombon keresztül (vWii, Wii mini)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#create-message-via-calendar-button-vwii-mini)
+ [Tartós vWii-beállítások (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii)
+ [WiiConnect24 bekapcsolása indításkor (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#always-enable-wiiconnect24-on-boot-vwii)
+ [NWC24iSetUniversalTime javítása (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#fix-nwc24isetuniversaltime-vwii)

A [Tartós vWii-beállítások (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#permanent-vwii-system-settings-vwii)- és a [WiiConnect24 bekapcsolása indításkor (vWii)](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html#always-enable-wiiconnect24-on-boot-vwii)-módosításokat nem lehet egyszerre engedélyezni. A Tartós vWii-beállítások használatáról bővebben [itt](https://dacotaco.github.io/priiloader/docs/FAQ.html#how-to-use-permanent-wii-system-settings-on-vwii) olvashatsz (angol nyelven).
{: .notice--info}

[Folytatás a Nintendo Wi-Fi Connectionnel](wiimmfi)<br> Ez az útmutató végigvezet a Wiid ismételt internetre való csatlakoztatásának a folyamatán. Az útmutató végén újra képes leszel online játékokat játszani, mint pl. a Mario Kart Wiit. Ugyan több különböző privát szerver is létezik, mi a Wiimmfit fogjuk megemlíteni.
{: .notice--info}
