# Wii mentések kezelése

Ez az útmutató végigvezet a Wii mentések kezelésének különböző részletein, a CleanRip által kiadott .PART-fájlok összekapcsolásától a játékfájlok zsugorításáig, hogy ráférjenek egy FAT32-eszközre. A továbbiakban két programot fogunk kiemelni: a Wii Backup Managert (Windowsra) és a Wii Backup Fusiont (Linuxra és Mac-re).

::: info

Ha több játékot akarsz tárolni, javasoljuk egy külső háttértár beszerzését a Wiihez. Szinte bármilyen merevlemez vagy SSD valószínűleg megfelel.

:::

::: info

Egy pendrive használatát nem ajánljuk, mert nagyon kicsik és még ugyanannak a terméknek a különböző példányai is máshogy viselkedhetnek.

As an alternative, you may simply use an SD card, however the Wii's SD card slot will be slow.

:::

::: info

Ellenőrizd, hogy a külső háttértárad FAT32-fájlrendszerre van-e formázva. Ne formázd más típusokra, mint az exFAT vagy az extFS!

You may format it as NTFS, but it won't work with a majority of apps (eg. The Homebrew Channel, Nintendont)

:::

## .PART-fájlok összekapcsolása FAT32-eszközökhöz

::: info

Ha a lemez tartalmát egy FAT32-eszközre másoltad le, akkor a program jó eséllyel legalább két fájlt adott vissza a fájlrendszer korlátozásai miatt, amelyek `.partX.iso`-ban végződnek. Ezeket a fájlokat össze kell kapcsolni (egy támogatott fájlrendszer alatt, mint pl. az NTFS), hogy helyesen be lehessen olvasni őket.

:::

### Windowson

1. Másold át a `.partX.iso`-ban végződő, egyforma nevű fájlokat egy üres mappába a számítógépeden!

   ![](/images/desktop-apps/WBM/dumpedpartfiles.png)

2. Kattints bele a Windows Intéző címsorába, írd be, hogy `cmd` és nyomd meg az Enter-billentyűt! Ezzel megnyithatsz egy Parancssor-ablakot a mappában.

   ![](/images/desktop-apps/WBM/opencmd.png)

3. Írd be a Parancssorba, hogy `copy /b *.part?.iso game.iso`, majd nyomd meg az Enter-billentyűt! Légy türelemmel, amíg a folyamat befejeződik! A parancssor kimenete az alábbiképpen fog kinézni:

   ![](/images/desktop-apps/WBM/joinpartfiles.png)

4. Ha a másolási folyamat sikeresen befejeződött, akkor a kimeneti fájl ellenőrzőértéke meg fog egyezni a játékmásolási információs fájlban találhatóval (ezt az eredeti másolási folyamat kimeneti mappájában találod meg).

   ![](/images/desktop-apps/WBM/filemd5.png)

### macOS-en/Linuxon

1. Másold át a `.partX.iso`-ban végződő, egyforma nevű fájlokat egy üres mappába a számítógépeden!

   ![](/images/desktop-apps/WBM/dumpedpartfileslinux.png)

2. Nyiss meg egy terminálablakot a fájlokat tartalmazó mappában vagy `cd`-zz bele!

   ![](/images/desktop-apps/WBM/openterminallinux.png)

3. Futtasd le a következő parancsot: ``cat `ls *.part?.iso | sort` > game.iso``! Légy türelemmel, amíg az összekapcsolási folyamat befejeződik! Ha a másolási folyamat sikeresen befejeződött, akkor a kimeneti fájl ellenőrzőértéke meg fog egyezni a játékmásolási információs fájlban találhatóval (ezt az eredeti másolási folyamat kimeneti mappájában találod meg).

   ![](/images/desktop-apps/WBM/mergesuccesslinux.png)

## A Wii Backup Manager használata

### Követelmények

- Egy Windowsos számítógép
- Egy SD kártya vagy pendrive
- Egy Wii-játéklemez .iso-formátumú másolata
- A [Wii Backup Manager](https://static.wiidatabase.de/Wii-Backup-Manager.zip)

### Útmutató

#### I. rész – Telepítés

1. Csomagold ki és indítsd el a Wii Backup Managert!
2. Csatlakoztasd a pendrive-ot vagy az SD kártyát a számítógépedhez!

#### II. rész – Játékok másolása

1. Kattints az `1. lemez`-fülre és a legördülő menüből válaszd ki a Wii-játékokat tartalmazó háttértárat!

   ![](/images/desktop-apps/WBM/select_drive.png)

2. Válts át a `Fájlok`-fülre és kattints a `Hozzáadás`-gombra!

   - Ha adott játékokat szeretnél hozzáadni a listához, kattints a `Fájlok`-menüpontra! Ha viszont egy egész mappát, akkor a `Mappa`-menüpontra!

   ![](/images/desktop-apps/WBM/select_games.png)

3. Nyisd meg a `Kijelölés`-menüt és kattints `Az 1. lemezen nem szereplő elemek`-menüpontra!

   ![](/images/desktop-apps/WBM/select_games2.png)

4. Ezek után nyisd meg az `Áthelyezés`-menüt és kattints az `1. lemez`-menüpontra a játékok áthelyezéséhez! A folyamatot az ablak jobb oldalán követheted figyelemmel.

   ![](/images/desktop-apps/WBM/transfer_todrive.png)

## A Wii Backup Fusion használata

### Követelmények

- Egy macOS-es vagy Linuxos számítógép
- Egy SD kártya vagy pendrive
- Egy Wii-játéklemez .iso-formátumú másolata
- A [Wii Backup Fusion](https://github.com/larsenv/Wii-Backup-Fusion)
- A [Wiimm's ISO Tools](https://wit.wiimm.de/download.html)-eszközkészlet

### Útmutató

#### I. rész – Telepítés

1. Töltsd le a Wiimm's ISO Tools operációs rendszerednek megfelelő változatát és csomagold ki a .tar.gz-fájlt egy olyan mappába, amelyhez a Terminálból hozzáférsz! Kicsomagolás után a mappa így fog kinézni:

   ![](/images/desktop-apps/WBM/witinstallfolder.png)

2. Nyiss meg egy Terminálablakot ugyanebben a mappában és futtasd a `sudo ./install.sh`-parancsot!

3. Töltsd le a Wii Backup Fusion operációs rendszerednek megfelelő változatát és telepítsd! Ha Linuxszal dolgozol, akkor futtathatóvá kell tenned az AppImage-fájlt a `chmod +x [FILE]`-parancs futtatásával.

#### II. rész – Játékok másolása

1. Nyisd meg a Wii Backup Fusiont és kattints a `Load` („Megnyitás”)-gombra!

   ![](/images/desktop-apps/WBM/loadwbf.png)

2. Add meg az .iso mappáját!

   ![](/images/desktop-apps/WBM/opendirectorywbf.png)

3. Kattints jobb gombbal a lemezre áthelyezendő játékra és válaszd ki a `Transfer to image` („Áthelyezés lemezképre”)-menüpontot! Add meg az alábbi beállításokat:

   ![](/images/desktop-apps/WBM/settingswbf.png)

4. Ha még nincs a lemezen egy `wbfs`-könyvtár, akkor hozz létre egyet!

5. A `wbfs`-mappán belül hozz létre egy mappát a játékmásolatnak! Ellenőrizd a Wii Backup Fusionon belül a játék azonosítóját („ID”-oszlop), mert szükséged lesz rá a mappanévhez!

6. Hozz létre egy új mappát a játék számára és nevezd el az alábbi módon: `játék címe [JÁTÉKAZONOSÍTÓ]`! Pl.: Az ebben az útmutatóban lemásolt játék mappájának a neve `New Super Mario Bros. Wii [SMNE01]`.

   ![](/images/desktop-apps/WBM/wbfsname.png)

7. Másold át a 3. lépésben létrehozott game.wbfs-fájlt az imént létrehozott mappába! Ezek után a lemez használatra kész.

::: tip

[Continue to cIOS](cios)

cIOS is needed for your Wii to use a USB Loader. Ha ezeket telepíted, készen fogsz állni az [USB Loader GX vagy WiiFlow](wii-loaders) használatára, amelyek segítségével játékokat tölthetsz be egy USB-eszközről vagy SD kártyáról.

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::
