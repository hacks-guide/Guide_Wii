# Wii mentés betöltők

Ez az útmutató bemutatja a Wii mentés betöltőit. Ezek elsősorban a kiskereskedelmi játéklemezről lementett játéklemezek SD-kártyáról vagy USB-lemezről történő betöltésére használhatók. A betöltőtől függően lehetnek olyan kiterjesztések is, amelyek lehetővé teszik, hogy nem Wii-s játékok frontendjeként is működjön. A két leggyakrabban használt betöltő az USB Loader GX és a WiiFlow Lite (az eredeti WiiFlow rendszeresen frissített modja) - lehet, hogy az egyik betöltő jobban működik neked, mint a másik, ezért érdemes mindkettőt kipróbálni.

::: warning

Ahhoz, hogy a Wii loader megfelelően működjön, a legújabb cIOS-t kell telepíteni. Kérjük, nézd meg [ezt](cios) az útmutatót az utasításokért, ha Wii-t használsz, és [ezt az útmutatót, ha Wii mini-t](cios-mini).

:::

::: info

A játékok lejátszásához ajánlott egy nagy SD-kártyát vagy egy külső merevlemezt használni, a flash meghajtók nem ajánlottak, és nagyon szórványosan működnek. Lásd a [tárolási GYIK-et](faq).

:::

::: info

A hivatalos Wii Menu forwarder telepítő WiiFlow Lite-hoz megtalálható az [Open Shop Channel](https://oscwii.org/library/app/wiiflow_channel_installer) csatornán. A forwarder telepítéséhez futtasd az alkalmazást a Homebrew Channel csatornán. A hivatalos USB Loader GX forwarder megtalállható a [GitHub](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_Wii.wad) oldalon. A [YAWM ModMii Edition](yawmme) segítségével telepítheted.

:::

## Különbségek a WiiFlow Lite és az USB Loader GX között

- A WiiFlow Lite fejlettebb felhasználói felülettel rendelkezik az animációk és effektek tekintetében, és támogatja a témákat.

    - Az SD-kártyák teljes mértékben támogatottak a Wii-játékok betöltéséhez a WiiFlow Lite-on.
    - A WiiFlow Lite rendelkezik plugin rendszerrel.
    - Míg az eredeti WiiFlow utoljára 2014-ben frissült, a WiiFlow Lite elágazás még mindig rendszeresen frissül.

    ![](/images/usb-loaders/wiiflow-ui.png)

- Az USB Loader GX elsősorban a Wii menüt alapján készült, és támogatja a témákat.

    - Míg korábban az SD-kártyák nem támogatták a Wii-játékok betöltését az USB Loader GX-en, a legutóbbi frissítésekkel a betöltőbe is bekerült a támogatás.
    - Az USB Loader GX nem rendelkezik plugin rendszerrel.
    - Az USB Loader GX továbbra is rendszeres frissítéseket kap.

    ![](/images/usb-loaders/usbloadergx-ui.png)

## Játék könyvtár struktúra

Az alábbiakban egy egyszerű WBFS-példa és egy osztott WBFS-példa látható. Egy WBFS-nek darabolni kell, ha 4 GB-nál nagyobb és a tároló eszköz FAT32-re formázott. A szoftverek, mint [Wii Backup Manager](wii-backups#using-wii-backup-manager) vagy [Wii Backup Fusion](wii-backups#using-wii-backup-fusion) el tudják ezt végezni és automatikusan megfelelő játék-könyvtárszerkezetet állítanak be.

```
💾SD kártya vagy USB:
 ┗ 📂wbfs
    ┣ 📂GameName [GameID]
    ┃  ┗ 📜gameid.wbfs (a nem feldarabolt címekhez)
    ┗ 📂GameName [GameID]
       ┣ 📜gameid.wbfs
       ┗ 📜gameid.wbf1
```

## WiiFlow Lite

### Követelmények

- Egy moddolt Wii
- A [cIOS](cios) legutolsó verziója
- [WiiFlow](https://oscwii.org/library/app/wiiflow)

### Telepítés

1. Töltsd le a WiiFlow-t, és telepítsd az SD-kártyára vagy USB-eszközre.

### Gyorsindítási útmutató

#### Általános

- A WiiFlow alapértelmezés szerint csak az SD-kártyán lévő játékokat keresi. Ez megváltoztatható a `Settings > Startup Settings` menüpontban, ahol `Mount SD Only` opciót kell kikapcsolni.
- A WiiFlow-ban az aktuális nézetet a jobb alsó sarokban, a `Home`-tól balra található gombra kattintva válthatod át a pluginok, játékok, homebrew és Wii-csatornák között.
- A játékborítókat a `Settings` > `Download Covers and Banners` menüpontban töltheted le.

#### Felhasználói felület

Amikor a WiiFlow játékokat észlel, azok flow nézetben jelennek meg.

Ha rákattintasz egy játékra a következő opciókat érheted el:

- Csillag - A játék hozzáadása a kedvencekhez.
- Könyvespolc - Hozzáadja a játékot az általad választott 6 kategória egyikéhez.
- Fogaskerekek - Megnyitja az adott játék beállítási menüjét - ezek a beállítások csak az adott játékra és csak arra a játékra vonatkoznak.
- X - Törli a játékot az USB-meghajtóról vagy az SD-kártyáról.

Amikor a kurzort a képernyő aljára viszed, miközben az flow nézetben vagy, 6 ikon jelenik meg:

- Könyvespolc - A kiválasztott kategóriákba rendezett játékok megtekintése.
- Csillag - A kedvenc játékok megtekintése.
- Fogaskerekek - Megnyitja a WiiFlow beállításait.
- Játéktípus - Váltás a különböző típusú alkalmazások/játékok között. A logó attól függően változik, hogy milyen játéktípust választottál. A logó attól függően változik, hogy milyen játéktípust választottál.
- Disc - Betölti a lemezmeghajtóban lévő játékot.
- Ház - Megnyitja az alábbi menüt. A menü a home gomb megnyomásával is elindítható.

![](/images/usb-loaders/wiiflow-menu.png)

- Help Guide - Megmutatja a WiiFlow-ban használható összes vezérlőelemet.
- Reload Cache - Nyomd meg ezt a gombot, hogy a WiiFlow újra beolvassa az USB-eszközön vagy az SD-kártyán lévő játékokat.
- File Explorer - Lehetővé teszi az USB-eszközön vagy SD-kártyán található könyvtárak listájának felfedezését, és egy-egy játék vagy futtatható fájl kiválasztását.
- Pluginok kiválasztása - Lehetővé teszi a pluginek kiválasztását.
- Credits - Megjeleníti azokat az embereket, akik a WiiFlow-on dolgoztak.
- Shutdown - Lehetővé teszi a teljes leállítás vagy készenléti üzemmódba lépést.
- Exit To - Lehetővé teszi a kilépést a Wii Menu, Homebrew Channel, neek2o, Priiloader vagy Bootmii menübe.
- Settings - Megnyitja a WiiFlow globális beállítási menüjét.

## USB Loader GX

### Követelmények

- Egy moddolt Wii
- A [cIOS](cios) legutolsó verziója
- [USB Loader GX](https://github.com/wiidev/usbloadergx/releases)

### Telepítés

1. Győződj meg róla, hogy a Wii-den már telepítve van a cIOS 248-251 - ezt olyan alkalmazásokkal ellenőrizheted, mint a [SysChecker](syscheck) vagy a d2x cIOS telepítő.
2. Töltsd le az USB Loader GX-et, és telepítsd az SD-kártyára vagy USB-eszközre.

### Gyorsindítási útmutató

#### Általános

- Ha az USB Loader GX azt írja, hogy "Waiting for HDD..." 20 másodperces visszaszámlálással, akkor nagy valószínűséggel nem tudja felismerni az USB-eszközt. Próbálj meg kilépni az alkalmazásból, és győződj meg arról, hogy az USB-eszközöd az alsó portba csatlakoztattad, ha a Wii vízszintesen van elhelyezve, vagy a széléhez legközelebbi portba, ha a Wii függőlegesen van elhelyezve. Az is lehet, hogy rosszul van formázva. Győződj meg róla, hogy az USB-meghajtó FAT32 formátumban van formázva, MBR partíciós táblával és 32 kB (32768 bájt) kiosztási egységmérettel/fürtmérettel.
- A Wii távirányító 1 gombjának megnyomásával megnyithatod a [GameTDB](https://gametdb.com/)-ből a játékborítók és grafikák letöltésére szolgáló párbeszédpanelt. A játékborítók és grafikák letöltése eltarthat egy ideig, attól függően, hogy mennyi játékod van.
- A GameCube vagy "egyedi" Wii játékokhoz vagy van vagy lehet hogy nincs egyedi banner, amit az USB Loader GX használ. Ennek engedélyezéséhez keresd meg vagy írd be a `CustomBannersURL = http://banner.rc24.xyz/` értéket a `config/GXGlobal.cfg` fájlban azon a meghajtón, amelyre telepítetted az alkalmazást. Ezután a `Custom Banner` letöltését a Wii Remote 1 gombjának megnyomásával használhatod.

#### Felhasználói felület

A képernyő aljának közepén láthatod, hogy mennyi szabad hely van az USB-meghajtón és hány játék van telepítve.

Ezek a képernyő tetején található sávban található gombok funkciói, balról jobbra haladva:

- Csillag - Megjeleníti azokat a játékokat, amelyeket "kedvencként" jelöltél meg.
- Keresés - Lehetővé teszi a játékok név szerinti keresését.
- Rendezés - A játékok rendezési módjai között váltogat.
- Platform - A játékokat platformok szerint rendezi.
- Kategória - A játékokat kategória szerint rendezi.
- Lista - A játékok listanézetben történő megjelenítése.
- Több borítós nézet - Több borítós nézetben jeleníti meg a játékokat.
- Cover Carousel View - A játékok megjelenítése körhinta nézetben.
- Wii menü nézet - A játékok megjelenítése Wii menü nézetben.
- Szülői felügyelet - Zárolja az USB Loader GX-et.
- Disc - Betölti a lemezmeghajtóban lévő játékot.

A képernyő alján további gombok is találhatók:

- (+) ikon - Egy játék "telepítése", azaz betöltése a lemezről, és az előre beállított tárolóeszközre való dumpolása.
- Fogaskerekek - Az USB Loader GX globális beállításai.
- SD kártya - Az SD kártya újbóli csatlakoztatása.
- Homebrew - Homebrew alkalmazások betöltése.
- Wii - A HOME menü megnyitása.
- Power gomb - A Wii kikapcsolása.

## Hibaelhárítás

Egyes játékok működéséhez vagy a játék bizonyos funkcióinak használatához egy adott cIOS használata szükséges.
Például:

- A billentyűzet használata az Animal Crossing: City Folk játékban.
- A Spongyabob's Boating Bash futtatása.
- USB-dongle használata a Rock Bandben.

Egy sokkal teljesebb (de még mindig nem teljes) lista megtalálható [itt](https://wiki.gbatemp.net/wiki/Wii_cIOS_base_Compatibility_List).

Mind az USB Loader GX, mind a WiiFlow Lite úgy van programozva, hogy automatikusan megtalálja a legjobb cIOS-t, és az alapértelmezett beállításokkal töltse be a játékot.  Ha azonban valamilyen oknál fogva ezek a betöltők rossz cIOS-t választanak, akkor lehetőséged van arra, hogy te magad változtasd meg.

Egy adott játékhoz használt cIOS megváltoztatásához kövesd az USB-töltőre vonatkozó utasításokat:

### USB Loader GX

1. Válaszd ki a játékot, ami nem működik.
2. Kattints a Settings-re.
3. Válaszd a `Game Load` opciót.
4. Görgess le a `Game IOS` opcióig.
5. Add meg a használandó IOS slot-ot.
    - Próbáld meg a 248, 249, 250 vagy 251-gyel.
6. Nyomj OK-t és próbáld meg betölteni a játékot.

### WiiFlow Lite

1. Válaszd ki a játékot, ami nem működik.
2. Kattints a kerék ikonra.
3. Menj a cIOS-hoz és használd a nyilakat, hogy kiválaszt a használandó IOS slot-ot.
    - Próbáld meg a 248, 249, 250 vagy 251-gyel.
4. Nyomj Save-et és próbáld meg betölteni a játékot.

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez.](site-navigation)

:::
