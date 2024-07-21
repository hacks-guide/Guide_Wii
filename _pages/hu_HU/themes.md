---
title: "Wii-témák"
---

{% include toc title="Tartalomjegyzék" %}

Ez az útmutató az utolsó, amire valaha is szükséged lesz, ha a Wii témázásáról van szó, nem csak a csm-installer segítségével a Wii menüjéhez ad útmutatást, hanem a WiiFlow Lite, az USB Loader GX és a Homebrew Channel témáival is. Ezenkívül a forwarderek is le vannak fedve.

### Wii Menu témázás

NE FOLYTASD EZT AZ ÚTMUTATÓT, HA NINCS MEGFELELŐ BRICKELÉS VÉDELMED, KÜLÖNÖSEN [BOOTMII](bootmii) (csak Wii) ÉS [PRIILOADER](priiloader)!
{: .notice--danger}

A csm-installer tartalmaz beépített biztonsági funkciókat, hogy megakadályozza, hogy hibás vagy sérült Wii Menu témákat telepíts, így javasolt, hogy ezt használd más téma telepítő homebrew helyett.
{: .notice--warning}

Ne használj az itt linkeltnél régebbi ThemeMii verziót, mivel a ThemeMii Mod teszi lehetővé hogy témát készíts a Wii Menu 4.3 verziójához, míg a többi verzió lehet, hogy nem.
{: .notice--warning}

Csak olyan témákat telepíts a Wii-re, amelyek kifejezetten a Wii verziójához és az aktuális régióhoz lettek formázva. Ha rossz verziójú vagy régiójú témákat telepítesz a Wii-re, az [brickelődik](bricks#theme-brick). Ez a útmutató leírja, hogyan hozhatsz létre egy .csm fájlt, amelyet aztán biztonságosan telepíthetsz.
{: .notice--danger}

Mielőtt folytatnánk, hasznos tudnod, hogy mi a különbség a .MYM és a .CSM fájlformátumok között, amikor a Wii menü témázása során használják őket. Míg a MYM-et a téma készítője készíti, amelyet aztán körbe lehet osztani, addig a CSM a MYM rendszermenübe építésének eredménye. Más szóval, a MYM elsősorban csak eszközöket tartalmaz - maga a tényleges rendszermenü, amelyet telepíteni kell, különálló.
{: .notice--info}

#### Téma források

+ [Wii Theme Team Creations](https://gbatemp.net/threads/wii-theme-team-creations.260327/) (.mym fájlok terjesztése)
+ [Wii Theme Google Drive](https://drive.google.com/drive/folders/1H8bKkZa5Nwy7tBmDvKEVXhoZStucpUr3) (.mym fájlok terjesztése)
+ [GBAtemp Other Files for Wii](https://gbatemp.net/download/categories/other-files.166/) (.mym fájlok terjesztése)
+ [Wii Themer](http://www.wiithemer.org/) (Ez az oldal csak a Wii és a vWii számára tud egy telepítésre kész .csm fájlt készíteni, de a Wii mini számára a .mym fájlokat a téma adatbázisukból ([Theme Database](http://wiithemer.org/mym/)) töltheted le.)

#### Követelmények

* Egy SD kártya vagy USB drive
* Egy internetkapcsolattal rendelkező Windows PC
* [csm-installer](https://oscwii.org/library/app/csm-installer)
* [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)

#### Téma készítése

1. Csomagold ki a csm-installer `.zip` fájlt az SD-kártya vagy USB eszköz gyökerébe.
1. Hozz létre egy `themes` mappát az SD-kártya/USB-eszköz gyökerén.
1. Csatlakoztasd az SD-kártyát vagy az USB-eszközt a konzolodhoz, és indítsd el a Homebrew Channel csatornát.
1. Indítsd el a csm-installert, és tartsa lenyomva a `+` billentyűt, amíg az alkalmazás betöltődik. Ha jól csináltad, az alkalmazás elkezdi letölteni az alaptémát a Wii menüdhöz.
1. Miután az alaptéma befejezte a mentést, nyomd meg a HOME gombot az alkalmazásból való kilépéshez.
1. Csatlakoztasd vissza az SD-kártyát/USB-eszközt a számítógépedhez.
1. Csomagold ki a ThemeMii MOD `.zip` fájlt egy helyre a számítógépeden.
1. Indítsd el a ThemeMii alkalmazást.
1. Navigálj a `File` -> `Open` opcihoz, majd válaszd ki a létrehozni kívánt téma `.mym` fájlját.
1. Nyomjd meg a `Create csm` gombot.
1. Amikor egy `.app` fájl kiválasztását kell megtenned, válaszd ki az SD-kártyád vagy USB-meghajtód gyökerén lévő, újonnan letöltött alaptémát.
1. Amikor a `.csm` fájl mentését kell megtenned, mentsd azt a `themes` mappába.
1. Miután a téma felépítése elkészül, a .mym fájl mentésétre vonakozó kérdésre kell válaszolnod. Nyomj `No` gombot.

#### Téma telepítése

1. Csatlakoztasd az SD-kártyát vagy az USB-eszközt a konzolodhoz, és indítsd el a Homebrew Channel csatornát.
1. Indítsd el a csm-installert, és várd meg, amíg betöltődik.
1. Válaszd ki a telepíteni kívánt témát `A` -val. Ezen a ponton feltétlenül győződj meg arról, hogy a rendszermenü verziódnak és régiódnak megfelelő témát töltöted le.
1. Nyomj `+` gombot a téma telepítéséhez.
1. Indítsd újra a Wii menüt, és nézd meg, hogy a téma sikeresen települt-e. Ha minden jól ment, akkor az alábbihoz hasonló eredményt fogsz kapni!

    ![](/images/themes/themed-wii-menu.png)

### WiiFlow Lite témázás

Sajnos az eredeti WiiFlow és az újabb WiiFlow Lite közötti kódbázisbeli különbség miatt a témák ritkák - valójában csak egyetlen olyan témát találtunk, amely biztosan működik az újabb verzióval. A téma telepítésének utasításai alább találhatók.

#### Követelmények

* Egy moddolt Wii
* Egy SD kártya vagy USB drive
* [WiiFlow Lite](wii-loaders#wiiflow-lite)
* Egy Windows/macOS/Linux számítógép internet kapcsolattal
* [Rhapsodii Shima](https://gbatemp.net/threads/rhapsodii-shima-5-4.555062/)

#### Útmutató

1. A WiiFlow Lite-ot tartalmazó tárolóeszköz legyen csatlakoztatva a számítógépedhez.
2. Töltsd le a Rhapsodii Shima archívumot, a téma mindkét verziója működik, és gond nélkül telepíthető egymás mellé.
3. Csomagold ki és másold a `wiiflow` mappát a tárolóeszköz gyökerébe, egyesítve az összes mappát, és kérésre felülírva az összes fájlt.
4. Kövesd a téma telepítési és beállítási utasításait az `installation.txt`.fájlban. Élvezd a témát!

### USB Loader GX témázás

#### Követelmények

* Egy moddolt Wii
* Egy SD kártya vagy USB drive
* [USB Loader GX](wii-loaders#usb-loader-gx)
* Egy Windows/macOS/Linux számítógép internet kapcsolattal
* Egy [téma](https://gbatemp.net/threads/dark-wii-usb-loader-gx-themes.584493/), ez a link vegyes sötét témákat tartalmaz

#### Útmutató

1. Töltsd le a téma `.zip` fájlját a fentebb linkelt weboldalról, vagy bárhonnan máshonnan, ahol megfelelő témát kaphatsz.
2. Csomagold ki a `.zip` fájl tartalmát az `apps\usbloader_gx` könyvtárba azon a tárolóeszközön, ahová az USB Loader GX-et telepítetted.
3. Tedd a tárolóeszközt a Wii-be, és indítsd el.
4. Indítsd el az USB Loader GX-et, lépj a `Settings` menübe, majd a `Theme Menu`opcióhoz.
5. Nyissd meg a témát, és telepítsd azt.

### Homebrew Channel témázás

#### Követelmények

* Egy moddolt Wii
* Egy SD kártya vagy USB drive
* Egy Windows/macOS/Linux számítógép internet kapcsolattal
* Egy [téma](https://wiibrew.org/wiki/Homebrew_Channel/Themes) a WiiBrew-ról

#### Útmutató

1. Töltsd le a téma `.zip` fájlját a fent említett weboldalról.

    ![](/images/themes/homebrew-channel-example-theme.png)

2. Illesszd be a `.zip` fájlt az `apps` mappába a tárolóeszközén, ahová a homebrew-ot betölti.

    ![](/images/themes/homebrew-channel-paste-zip.png)

3. Csomagold ki a `.zip` tartalmát az `apps` mappába, majd töröld az archívum fájlt.

    ![](/images/themes/homebrew-channel-extract-theme.png)

4. Csatlakoztasd vissza a tárolóeszközt a Wii-be, és lépj be a Homebrew Channel csatornába.
5. A téma amít telepítettél betölthető úgyanolyan módon, mint ahogy egy standard appot érsz el.

    ![](/images/themes/homebrew-channel-load-theme.png)

6. A témának most már be kell töltődnie, jó szórakozást!

    ![](/images/themes/homebrew-channel-theme-done.png)

### App Forwarder-ek

Az App forwarderek egy kis extra hangulatot adhatnak a Wii menüjének - de légy óvatos velük, mivel a rossz forwarderek [banner bricket](bricks#banner-brick) okozhatnak. Általában olyan helyeken találhatsz forwardereket, mint a [GBAtemp](https://gbatemp.net/threads/wii-forwarder-repository.588781/) a népszerű alkalmazásokhoz, például emulátorokhoz. Mivel a forwarderek .WAD formátumban érkeznek, a telepítésük ugyanolyan egyszerű, mint a [YAWM ModMii Edition](yawmme) normál használata.


[Kattints ide a tartalomjegyzékhez való visszatéréshez!](site-navigation)
{: .notice--info}
