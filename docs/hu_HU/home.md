---
layout: splash
title: "Wii Hack útmutató"
header:
  overlay_color: "#121212"
  overlay_image: /images/main-pages/home-page-feature.jpg
  overlay_filter: 0.5
  caption:
excerpt: "A teljes útmutató a Wii, vWii és Wii mini moddingjához."
---

Mivel ez az útmutató most jelent meg, a fordítások még folyamatban vannak. Köszönjük a türelmedet!
{: .notice--info}

Ahhoz, hogy a legtöbbet hozd ki ebből az útmutatóból, olvasd el ezt az oldalt, mielőtt folytatnád.
{: .notice--warning}

### Mi a homebrew?

A **homebrew** olyan szoftverre utal, amelyet nem a hardver eredeti készítője - ebben az esetben a Nintendo - engedélyezett. Ahhoz, hogy a homebrew futtatására a Wii konzolon képessé váljon, a konzolt először módosítani kell, hogy a nem aláírt kódot futtathassa.

Íme néhány általános példa arra, hogy a homebrew mit tud a Wii-n:

+ A Wii NAND (rendszermemória) biztonsági [mentése](bootmii) és [visszaállítása](bootmiirecover)
+ A Wii [brickelés védelmének](priiloader) javítása
+ Új homebrew alkalmazások letöltése az [Open Shop Channel](osc) csatornán keresztül
+ A [játéklemezek tartalmának patchelése](https://wiki.hacks.guide/wiki/Wii:Riivolution) a játékmódosítások betöltéséhez
+ [Témák](themes) telepítése a Wii menüjébe és a gyakran használt homebrew alkalmazásokba
+ Biztonsági mentés a [lemezekről](dump-games) és [más telepített címekről](dump-wads)
+ [DVD](recommended-homebrew#entertainment)-k megtekintése és külső médiafájlok lejátszása a Wii-n
+ [USB-töltő](wii-loaders) telepítése a Wii (és más konzolok) biztonsági mentéseinek külső tárolóeszközről történő elindításához
+ A [Wii](wii-saves) és a [GameCube](gcsaves) mentési fájljainak biztonsági mentése és visszaállítása
+ Az online funkciók helyreállítása a [WiiConnect24](wiiconnect24) és a [Nintendo Wi-Fi Connection](wiimmfi) esetében is

### Mit telepít ez az útmutató?

Ez az útmutató a következőkre törekszik, beleértve a választható szakaszokat is:

+ Módosítsa a Wii-t a számos exploit egyikének segítségével, azzal a céllal, hogy elérje a HackMii telepítőjét
+ A BootMii és a Homebrew Channel telepítése
+ Biztonsági mentés készítése a kritikus rendszerfájlokról
+ A Priiloader telepítése
+ Az Open Shop Channel telepítése
+ Ajánlott Homebrew-ok a Wii-odra
+ A WiiConnect24 és a Nintendo Wi-Fi Connection funkcióinak visszaállítása

### Mit kell tudni a kezdés előtt?

+ A Homebrew 100%-ban ingyenes, és a Wii módosítása is ingyenes. Bárki, aki ennek ellenkezőjéről próbál meggyőzni, valószínűleg [át akar verni](https://hbc.hackmii.com/scam).
+ Ez az útmutató az exploittól függően minden rendszermenü-verzióval működik, de **ajánlott a 4.3-as verzióra (a legújabb firmware-re) frissíteni,** ha lehetséges.
+ **Ez az útmutató CSAK a kiskereskedelmi/fogyasztói Wiire vonatkozik!** Ez azt jelenti, hogy a fejlesztői egységekre nem vonatkozik.
+ Attól függően, hogy mit szándékozol csinálni a módosított Wii-vel, előfordulhat, hogy a rendszermemóriában olyan módosításokat kell végrehajtanod, amelyek a brickelés (a konzol működésképtelenné válása) kockázatával járnak. Amíg pontosan követed ezt az útmutatót, addig minden rendben lesz, de általános tippeket a tönkremenetel megelőzésére [ezen](bricks#brick-prevention) az oldalon találsz.
+ A Wii és a Wii mini közötti különbségek igen jelentősek. Ez azt jelenti, hogy bizonyos esetekben az, ami a Wii-re normális esetben ártalmatlan, a Wii mininél [súlyos brickelést](bricks#wi-fi-brick) okozhat. Légy óvatos, ha tervezed, hogy módosítod az egyiket!
+ Légy rendkívül óvatos, ha egy [koreai Wii](bricks#korean-kiierror-003-brick)-t módosítasz.

### Kész?

Az útmutató összese 9 fejezettel rendelkezik. Ezek az alábbiak:

1. Exploit kiválasztása és használata (KÖTELEZŐ)
1. A Homebrew Channel és a BootMii telepítése (KÖTELEZŐ)
1. NAND mentés készítése a BootMii-vel (KÖTELEZŐ)
1. A Priiloader telepítése (KÖTELEZŐ)
1. Az Open Shop Channel telepítése (AJÁNLOTT)
1. A cIOS telepítése (AJÁNLOTT)
1. Az ajánlott Homebrew-ok felfedezése (AJÁNLOTT)
1. A WiiConnect24 funkcionalitás visszaszerzése (OPCIONÁLIS)
1. A Nintendo Wi-Fi Connection funkcionalitás visszaszerzése (OPCIONÁLIS)

Folytatás a [Kezdeti lépésekkel](get-started)
{: .notice--info}
