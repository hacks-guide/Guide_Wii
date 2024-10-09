# Wii mentés betöltők

Ez az útmutató bemutatja a Wii mentés betöltőit. Ezek elsősorban a kiskereskedelmi játéklemezről lementett játéklemezek SD-kártyáról vagy USB-lemezről történő betöltésére használhatók. A betöltőtől függően lehetnek olyan kiterjesztések is, amelyek lehetővé teszik, hogy nem Wii-s játékok frontendjeként is működjön. A két leggyakrabban használt betöltő az USB Loader GX és a WiiFlow Lite (az eredeti WiiFlow rendszeresen frissített modja) - lehet, hogy az egyik betöltő jobban működik neked, mint a másik, ezért érdemes mindkettőt kipróbálni.

::: warning

Ahhoz, hogy a Wii loader megfelelően működjön, a legújabb cIOS-t kell telepíteni. Please check [this](cios) guide for instructions if you are on Wii, and [this](cios-mini) guide if you are on Wii mini.

:::

::: info

A játékok lejátszásához ajánlott egy nagy SD-kártyát vagy egy külső merevlemezt használni, a flash meghajtók nem ajánlottak, és nagyon szórványosan működnek. See [storage FAQ](faq).

:::

::: info

The official Wii Menu forwarder installer for WiiFlow Lite can be found on the [Open Shop Channel](https://oscwii.org/library/app/wiiflow_channel_installer). A forwarder telepítéséhez futtasd az alkalmazást a Homebrew Channel csatornán. The USB Loader GX official forwarder can be found on the [GitHub](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_Wii.wad) page. You can install it with [YAWM ModMii Edition](yawmme).

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

Az alábbiakban egy egyszerű WBFS-példa és egy osztott WBFS-példa látható. A WBFS needs to be split if it is over 4 GB and your storage device is formatted as FAT32. Software such as [Wii Backup Manager](wii-backups#using-wii-backup-manager) or [Wii Backup Fusion](wii-backups#using-wii-backup-fusion) can do this for you, and will automatically set up the game directory structure correctly.

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

### Requirements

- Egy moddolt Wii
- The latest version of [cIOS](cios)
- [WiiFlow](https://oscwii.org/library/app/wiiflow)

### Installation

1. Töltsd le a WiiFlow-t, és telepítsd az SD-kártyára vagy USB-eszközre.

### Gyorsindítási útmutató

#### Általános

- A WiiFlow alapértelmezés szerint csak az SD-kártyán lévő játékokat keresi. This can be changed by going to `Settings > Startup Settings` to then turn off `Mount SD Only`.
- You can toggle the current view in WiiFlow between plugins, games, homebrew, and Wii channels by clicking the button to the left of `Home`, on the bottom right.
- You can download game covers by going to `Settings` > `Download Covers and Banners`.

#### Felhasználói felület

When WiiFlow detects games, they are displayed in flow view.

When you click on a game, you are given these options:

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

### Requirements

- Egy moddolt Wii
- The latest version of [cIOS](cios)
- [USB Loader GX](https://oscwii.org/library/app/usbloader_gx)

### Installation

1. Ensure that your Wii already has cIOS 248-251 installed - this can be checked with applications like [SysChecker](syscheck) or d2x cIOS installer.
2. Töltsd le az USB Loader GX-et, és telepítsd az SD-kártyára vagy USB-eszközre.

### Gyorsindítási útmutató

#### Általános

- Ha az USB Loader GX azt írja, hogy "Waiting for HDD..." 20 másodperces visszaszámlálással, akkor nagy valószínűséggel nem tudja felismerni az USB-eszközt. Próbálj meg kilépni az alkalmazásból, és győződj meg arról, hogy az USB-eszközöd az alsó portba csatlakoztattad, ha a Wii vízszintesen van elhelyezve, vagy a széléhez legközelebbi portba, ha a Wii függőlegesen van elhelyezve. Az is lehet, hogy rosszul van formázva. Győződj meg róla, hogy az USB-meghajtó FAT32 formátumban van formázva, MBR partíciós táblával és 32 kB (32768 bájt) kiosztási egységmérettel/fürtmérettel.
- You can press the 1 Button on your Wii Remote to open up a dialog to download game covers and artwork from [GameTDB](https://gametdb.com/). A játékborítók és grafikák letöltése eltarthat egy ideig, attól függően, hogy mennyi játékod van.
- A GameCube vagy "egyedi" Wii játékokhoz vagy van vagy lehet hogy nincs egyedi banner, amit az USB Loader GX használ. To enable this, find or write `CustomBannersURL = http://banner.rc24.xyz/` in `config/GXGlobal.cfg` on the drive you installed the app on. Then, you can use the `Custom Banner` download by pressing the 1 Button on your Wii Remote.

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

A more comprehensive (although still incomplete) list can be found [here](https://wiki.gbatemp.net/wiki/Wii_cIOS_base_Compatibility_List).

Mind az USB Loader GX, mind a WiiFlow Lite úgy van programozva, hogy automatikusan megtalálja a legjobb cIOS-t, és az alapértelmezett beállításokkal töltse be a játékot.  Ha azonban valamilyen oknál fogva ezek a betöltők rossz cIOS-t választanak, akkor lehetőséged van arra, hogy te magad változtasd meg.

Egy adott játékhoz használt cIOS megváltoztatásához kövesd az USB-töltőre vonatkozó utasításokat:

### USB Loader GX

1. Válaszd ki a játékot, ami nem működik.
2. Kattints a Settings-re.
3. Select `Game Load`.
4. Scroll down to `Game IOS`.
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

[Click here to go back to the site index.](site-navigation)

:::
