---
title: "Priiloader"
---

{% include toc title="Tartalomjegyzék" %}

A [Priiloader](https://github.com/DacoTaco/priiloader) egy elhanyagolhatatlan alkalmazás, amelyet [DacoTaco](https://github.com/DacoTaco) fejlesztett ki a Wiik valamilyen szintű elromlásbiztosítása érdekében. A program még a Wii rendszermenü betöltése előtt indul el. A programot arra is felhasználhatod, hogy különböző javításokat alkalmazz a rendszermenüre.

Ezen felül egy program vagy nemhivatalos program megnyitására, és a Wii indításának befolyásolására is használható.

### Követelmények

* Egy SD kártya vagy pendrive
* A [Priiloader-telepítő](https://oscwii.org/library/app/priiloader) (méghozzá a `.zip`-fájl)
* A [Priiloader-betöltő](https://oscwii.org/library/app/loadpriiloader) (ugyancsak a `.zip`-fájl)

#### Egyéb követelmények vWiihez (nem kötelező, de erősen ajánlott)

* Egy SD kártya
* A [Priiloader Wii U Forwarder](https://github.com/DacoTaco/priiloader/releases/download/0.10.0/PriiloaderWiiUForwarder.zip) (közvetlen letöltés)
    * A Priiloader Wii U Forwarder működéséhez az [Aroma](https://wiiu.hacks.guide/#/aroma/getting-started) is szükséges.

### Útmutató

{% capture vwii-notes %}

A vWiire telepített Priiloader nem befolyásolja a Wii U VC-programokat.

{% endcapture %}

<div class="notice--danger">{{ vwii-notes | markdownify }}</div>

#### I. rész – Előkészületek

1. Kapcsold ki a konzolt!
1. Csatlakoztasd a pendrive-ot vagy az SD kártyát a számítógépedbe!
1. Helyezd át az `apps`-mappát a LoadPriiloader `.zip`-fájlból az SD kártya vagy pendrive gyökerére!
1. Helyezd át az `apps`-mappát a priiloader `.zip`-fájlból az SD kártya vagy pendrive gyökerére!
1. (Csak ha vWii-vel dolgozol:) Helyezd át a `wiiu`-mappát a PriiloaderWiiUForwarder `.zip`-fájlból az SD kártya gyökerére!
1. Csatlakoztasd az SD kártyát vagy a pendrive-ot a konzolodba!

#### II. rész – A Priiloader telepítése

1. Kapcsold be a konzolt!
1. Indítsd el a Homebrew Channelt!
1. Indítsd el a listáról a „Priiloader Installer”-t!
1. Nyomd meg a +-gombot a Wii Remote-on vagy az A-gombot a GameCube-vezérlőn!

    ![](/images/priiloader/installer.png)

    ![](/images/priiloader/installing.png)

1. Nyomd meg az A-gombot a Homebrew Channelbe való visszatéréshez!

#### III. rész – A Priiloader indítása

1. Nyomd meg a HOME-gombot, majd válaszd ki az „Exit to System Menu”-gombot a Homebrew Channelbe való visszatéréshez!
1. A konzol most meg fogja nyitni a Priiloader menüjét.

    ![](/images/priiloader/menu.png)

A későbbi indításhoz kövesd az alábbi lépéseket:

+ A Wii bekapcsolása közben tartsd nyomva a RESET-gombot!
    + Csak Wii-konzolokon
+ A konzol bekapcsolása közben tartsd nyomva az Esc-gombot egy csatlakoztatott USB-s billentyűzeten!
    + Wii, Wii mini és Wii U konzolokon
+ Indítsd el a „Load Priiloader”-programot a Homebrew Channelből!
    + Wii, Wii mini és Wii U konzolokon
+ Indítsd el a „Priiloader Wii U Forwarder”-programot!
    + Csak Wii U konzolokon

#### IV. rész – A Priiloader beállítása

1. Görgess le, amíg meg nem látod a „`System Menu Hacks`”-menüpontot és válaszd ki az `A`-gombbal!

    ![](/images/priiloader/menu_hacks.png)

    Ha a Priiloader-telepítőt a pendrive-odra helyezted, bizonyosodj meg róla, hogy ne legyen behelyezve egy SD kártya is! <br> Ha ez mégis így van, akkor a Priiloader nem fogja megtalálni a `hacks_hash.ini`-fájlt.
    {: .notice--warning}

1. A konzolod típusa alapján az alábbi beállításokat kell engedélyezned:
    + Wii:
        + Ha 480p-s módban vagy: `480p graphics fix in the system menu` (480p-s grafikus javítások a rendszermenühöz)
        + Block Disc Updates (lemezes frissítések letiltása)
        + Block Online Updates (internetes frissítések letiltása)
        + Ha NEM katódsugárcsöves kijelzőt használsz: `Remove Deflicker` (villódzáscsökkentő szűrő eltávolítása)
    + vWii:
        + Block Online Updates (internetes frissítések letiltása)
        + Wii System Settings via Options Button (Wii-rendszerbeállítások megnyitása az Options-gombbal)
        + Ha NEM katódsugárcsöves kijelzőt használsz: `Remove Deflicker` (villódzáscsökkentő szűrő eltávolítása)
    + Wii mini:
        + Block Disc Updates (lemezes frissítések letiltása)
        + Ha NEM katódsugárcsöves kijelzőt használsz: `Remove Deflicker` (villódzáscsökkentő szűrő eltávolítása)
1. Ha végeztél, a mentéshez görgess le és válaszd ki a „`save settings”`-menüpontot az A-gombbal!
1. Végezetül, nyomd meg a `B`-gombot a főmenübe való visszatéréshez!

A Priiloader további lehetőségeiről és javításairól való tájékozódáshoz keresd fel a [Priiloader használata](priiloader-usage)-oldalt!
{: .notice--info}

[Az elrontáskiküszöbölési segédlet megtekintése](bricks#brick-prevention)<br> Ebben a segédletben elolvashatod, hogy mit tehetsz a Wiid elrontásának elkerüléséhez, a BootMii és Priiloader telepítésén kívül.
{: .notice--info}

### Wii: További lépések

Folytatás [cIOS-sel](cios)<br> Ez az útmutató végigvezet az alap cIOS-ek telepítésén, ami további funkciókat fog lehetővé tenni, többek között az USB-betöltőknél.
{: .notice--info}

### vWii: További lépések

Folytatás [vWii cIOS-sel](cios-vwii)<br> Ez az útmutató végigvezet az alap cIOS-ek telepítésén, ami további funkciókat fog lehetővé tenni, többek között az USB-betöltőknél.
{: .notice--info}

### Wii mini: További lépések

Folytatás [Wii mini cIOS-sel](cios-mini)<br> Ez az útmutató végigvezet az alap cIOS-ek telepítésén, ami további funkciókat fog lehetővé tenni, többek között az USB-betöltőknél.
{: .notice--info}
