# Wii-témák

Ez az útmutató az utolsó, amire valaha is szükséged lesz, ha a Wii témázásáról van szó, nem csak a csm-installer segítségével a Wii menüjéhez ad útmutatást, hanem a WiiFlow Lite, az USB Loader GX és a Homebrew Channel témáival is. Ezenkívül a forwarderek is le vannak fedve.

## Wii Menu témázás

::: danger

NE FOLYTASD EZT AZ ÚTMUTATÓT, HA NINCS MEGFELELŐ BRICKELÉS VÉDELMED, KÜLÖNÖSEN [BOOTMII](bootmii) (csak Wii) ÉS [PRIILOADER](priiloader)!

:::

::: warning

A csm-installer tartalmaz beépített biztonsági funkciókat, hogy megakadályozza, hogy hibás vagy sérült Wii Menu témákat telepíts, így javasolt, hogy ezt használd más téma telepítő homebrew helyett.

:::

::: warning

Ne használj az itt linkeltnél régebbi ThemeMii verziót, mivel a ThemeMii Mod teszi lehetővé hogy témát készíts a Wii Menu 4.3 verziójához, míg a többi verzió lehet, hogy nem.

:::

::: danger

Csak olyan témákat telepíts a Wii-re, amelyek kifejezetten a Wii verziójához és az aktuális régióhoz lettek formázva. Ha rossz verziójú vagy régiójú témákat telepítesz a Wii-re, az [brickelődik](bricks#theme-brick). Ez a útmutató leírja, hogyan hozhatsz létre egy .csm fájlt, amelyet aztán biztonságosan telepíthetsz.

:::

::: info

Mielőtt folytatnánk, hasznos tudnod, hogy mi a különbség a .MYM és a .CSM fájlformátumok között, amikor a Wii menü témázása során használják őket. Míg a MYM-et a téma készítője készíti, amelyet aztán körbe lehet osztani, addig a CSM a MYM rendszermenübe építésének eredménye. Más szóval, a MYM elsősorban csak eszközöket tartalmaz - maga a tényleges rendszermenü, amelyet telepíteni kell, különálló.

:::

### Téma források

- [Wii Theme Team Creations](https://gbatemp.net/threads/wii-theme-team-creations.260327/) (.mym fájl terjesztés)
- [Wii Theme Google Drive](https://drive.google.com/drive/folders/1H8bKkZa5Nwy7tBmDvKEVXhoZStucpUr3) (.mym fájl terjesztés)
- [GBAtemp Other Files for Wii](https://gbatemp.net/download/categories/other-files.166/) (.mym fájl terjesztés)
- [Wii Themer](http://www.wiithemer.org/) (Ez az oldal csak a Wii és a vWii számára tud egy telepítésre kész .csm fájlt készíteni, de a Wii mini számára a .mym fájlokat a téma adatbázisukból a [Theme Database](http://wiithemer.org/mym/)-ből töltheted le.)

### Követelmények

- Egy SD kártya vagy USB drive
- Egy internetkapcsolattal rendelkező Windows PC
- [csm-installer](https://oscwii.org/library/app/csm-installer)
- [ThemeMii Mod](/assets/files/New_ThemeMii_MOD.zip)

### Az Alap téma letöltése

::::: tabs

:::: tab (Mind) csm-installer-rel

1. Csomagold ki a csm-installer `.zip` fájlt az SD-kártya vagy USB eszköz gyökerébe.
2. Csatlakoztasd az SD-kártyát vagy az USB-eszközt a konzolodhoz, és indítsd el a Homebrew Channel csatornát.
3. Indítsd el s csm-installer-t, majd válaszd a `Download original Wii theme (Base theme)` opciót
4. Miután az alaptéma befejezte a mentést, nyomd meg a HOME gombot az alkalmazásból való kilépéshez.
5. Csatlakoztasd vissza az SD-kártyát/USB-eszközt a számítógépedhez. Az alap app a `themes` mappába lesz mentve.

::::

:::: tab (Wii) NUS Downloader-rel

1. A számítógépeden töltsd le a [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip)-t.
2. Másold ki az NUS Downloader `.zip` fájljának tartalmát egy mappába.
3. Futtasd a `NUS Downloader.exe` fájlt.
4. Navigálja a `Database` -> `System` -> `System Menu` opcióhoz.
5. Válaszd ki a Wii menu verziódnak megfelelő verziót.
6. Jelöld be a`Create decrypted contents (*.app)` dobozt.
7. Kattints a `Start NUS Download!` gombra.
8. A letöltés végeztével találni fogsz egy `titles` mappát a NUS Downloader mappájában.
9. Nyisd meg a `titles` mappát, majd azon belül a `0000000100000002` mappát.
10. Keresd meg a **legnagyobb .app fájlt** (általában 6~7MB) a mappában.
11. Hozz létre egy `themes` mappát az SD-kártya/USB-eszköz gyökerében.
12. Másold az.app fájlt a frissen létrehozott `themes` mappába. Ez az alap téma, amit használni fogsz az egyéni témád létrehozásához.

::::

:::: tab (vWii) NUS Downloader-rel

1. A számítógépeden töltsd le a [NUS Downloader (vWii)](/assets/files/NUSDownloader-vwii.zip)-t
2. Másold ki az vWii NUS Downloader `.zip` fájljának tartalmát egy mappába a számítógépeden.
3. Futtasd a `NUS Downloader.exe` fájlt.
4. Navigálja a `Database` -> `System` -> `System Menu` opcióhoz.
5. Válaszd az alábbi táblázatból azt a verziót, ami megfelel a Wii U-d régiójának:

| Regió  | vWii Menu verzió |
| ------ | ---------------- |
| Japán  | v608             |
| USA    | v609             |
| Európa | v610             |

1. Jelöld be a`Create decrypted contents (*.app)` dobozt.
2. Kattints a `Start NUS Download!` gombra.
3. A letöltés végeztével találni fogsz egy `titles` mappát a NUS Downloader mappájában.
4. Nyisd meg a `titles` mappát, majd azon belül a `0000000700000002` mappát.
5. Keresd azt az .app fájlt, ami az alábbi táblázatból megfelel a Wii U-d régiójának:

| Regió  | .app fájl    |
| ------ | ---------------------------- |
| Japán  | 0000001c.app |
| USA    | 0000001f.app |
| Európa | 00000022.app |

1. Hozz létre egy `themes` mappát az SD-kártya/USB-eszköz gyökerében.
2. Másold az.app fájlt a frissen létrehozott `themes` mappába. Ez az alap téma, amit használni fogsz az egyéni témád létrehozásához.

::::

:::: tab (Wii) ThemeMii-vel

1. Hozz létre egy `themes` mappát az SD-kártya/USB-eszköz gyökerében.
2. Csomagold ki a ThemeMii MOD `.zip` fájlt egy helyre a számítógépeden.
3. Indítsd el a ThemeMii alkalmazást.
4. Navigálj a `Tools` -> `Download Base App` -> `Version of your Wii Menu` -> `Region of your Wii Menu` opcióig.
5. Egy párbeszédablak fog előugrani, hogy adj meg egy értéket egy kulcs létrehozásához. Add be neki amit kér, és létre fog hozni egy kulcsot, amit arra használunk majd, hogy decryptálja a Wii Menu tartalmakat, amik a Nintendo' szervereiről származnak.
6. Egy fájl kiválasztó ablak meg fogja kérdezni hova mentsük az .app fájlt. Mentsd az SD kártyá/USB eszközöd `themes` mappájába.

::::

:::::

### Téma készítése

1. Csomagold ki a ThemeMii MOD `.zip` fájlt egy helyre a számítógépeden.
2. Indítsd el a ThemeMii alkalmazást.
3. Navigálj a `File` -> `Open` opcióhoz, majd válaszd ki a létrehozni kívánt téma `.mym` fájlját.
4. Nyomjd meg a `Create csm` gombot.
5. Amikor egy `.app` fájl kiválasztását kell megtenned, válaszd ki az SD-kártyád vagy USB-meghajtód `themes` mappájában lévő, újonnan letöltött alaptémát.
6. Amikor a `.csm` fájl mentését kell megtenned, mentsd azt a `themes` mappába.
7. Miután a téma felépítése elkészül, a .mym fájl mentésétre vonakozó kérdésre kell válaszolnod. Nyomj `No`-t.

### Téma telepítése

1. Csatlakoztasd az SD-kártyát vagy az USB-eszközt a konzolodhoz, és indítsd el a Homebrew Channel csatornát.
2. Indítsd el a csm-installert, és várd meg, amíg betöltődik.
3. Válaszd ki a telepíteni kívánt témát `A`-val. Ezen a ponton feltétlenül győződj meg arról, hogy a rendszermenü verziódnak és régiódnak megfelelő témát töltöted le.
4. Nyomj `+` gombot a téma telepítéséhez.
5. Indítsd újra a Wii menüt, és nézd meg, hogy a téma sikeresen települt-e. Ha minden jól ment, akkor az alábbihoz hasonló eredményt fogsz kapni!

    ![](/images/themes/themed-wii-menu.png)

## WiiFlow Lite témázás

Sajnos az eredeti WiiFlow és az újabb WiiFlow Lite közötti kódbázisbeli különbség miatt a témák ritkák - valójában csak egyetlen olyan témát találtunk, amely biztosan működik az újabb verzióval. A téma telepítésének utasításai alább találhatók.

### Követelmények

- Egy moddolt Wii
- Egy SD kártya vagy USB drive
- [WiiFlow Lite](wii-loaders#wiiflow-lite)
- Egy Windows/macOS/Linux számítógép internet kapcsolattal
- [Rhapsodii Shima](https://gbatemp.net/threads/rhapsodii-shima-5-4.555062/)

### Lépések

1. A WiiFlow Lite-ot tartalmazó tárolóeszköz legyen csatlakoztatva a számítógépedhez.
2. Töltsd le a Rhapsodii Shima archívumot, a téma mindkét verziója működik, és gond nélkül telepíthető egymás mellé.
3. Csomagold ki és másold a `wiiflow` mappát a tárolóeszköz gyökerébe, egyesítve az összes mappát, és kérésre felülírva az összes fájlt.
4. Kövesd a téma telepítési és beállítási utasításait az `installation.txt` fájlban. Élvezd a témát!

## USB Loader GX témázás

### Követelmények

- Egy moddolt Wii
- Egy SD kártya vagy USB drive
- [USB Loader GX](wii-loaders#usb-loader-gx)
- Egy Windows/macOS/Linux számítógép internet kapcsolattal
- Egy [téma](https://gbatemp.net/threads/dark-wii-usb-loader-gx-themes.584493/), ez a link vegyes sötét témákat tartalmaz

### Lépések

1. Töltsd le a téma `.zip` fájlját a fentebb linkelt weboldalról, vagy bárhonnan máshonnan, ahol megfelelő témát kaphatsz.
2. Csomagold ki a `.zip` fájl tartalmát az `apps\usbloader_gx` könyvtárba azon a tárolóeszközön, ahová az USB Loader GX-et telepítetted.
3. Tedd a tárolóeszközt a Wii-be, és indítsd el.
4. Indítsd el az USB Loader GX-et, lépj a `Settings` menübe, majd a `Theme Menu` opcióhoz.
5. Nyissd meg a témát, és telepítsd azt.

## Homebrew Channel témázás

### Követelmények

- Egy moddolt Wii
- Egy SD kártya vagy USB drive
- Egy Windows/macOS/Linux számítógép internet kapcsolattal
- Egy [téma](https://wiibrew.org/wiki/Homebrew_Channel/Themes) a WiiBrew-ból

### Lépések

1. Töltsd le a téma `.zip` fájlját a fent említett weboldalról.

    ![](/images/themes/homebrew-channel-example-theme.png)

2. Illesszd be a `.zip` fájlt az `apps` mappába a tárolóeszközödön, ahová a homebrew-okat töltöd.

    ![](/images/themes/homebrew-channel-paste-zip.png)

3. Csomagold ki a `.zip` tartalmát az `apps` mappába, majd töröld az archívum fájlt.

    ![](/images/themes/homebrew-channel-extract-theme.png)

4. Csatlakoztasd vissza a tárolóeszközt a Wii-be, és lépj be a Homebrew Channel csatornába.

5. A téma amít telepítettél betölthető úgyanolyan módon, mint ahogy egy standard appot érsz el.

    ![](/images/themes/homebrew-channel-load-theme.png)

6. A témának most már be kell töltődnie, jó szórakozást!

    ![](/images/themes/homebrew-channel-theme-done.png)

## App Forwarder-ek

Az App forwarderek egy kis extra hangulatot adhatnak a Wii menüjének - de légy óvatos velük, mivel a rossz forwarderek [banner brick](bricks#banner-brick)-et okozhatnak. Általában találhatsz forwardereket, olyan helyeken, mint a [GBAtemp](https://gbatemp.net/threads/wii-forwarder-repository.588781/) populáris programokhoz, mint például az emulátorok. Mivel a forwarderek .WAD formátumban érkeznek, a telepítésük ugyanolyan egyszerű, mint a [YAWM ModMii Edition](yawmme) normál használata.

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez.](site-navigation)

:::
