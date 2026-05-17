---
outline: false
---

# Wii és GameCube mentések kezelése

Ez az útmutató bemutatja, hogyan kezeld a Wii és GameCube mentéseid a TinyWiiBackupManager-rel, az PART fájlok egyesítése mellett, amik akkor jönnek létre, amikor Wii játékot dumpolunk FAT32 eszközre. Fontos információk a játékok Wii-on történő menedzsmentről olvashatók alább.

::: tip

Ha több játékot akarsz tárolni, javasoljuk egy külső háttértár beszerzését a Wiihez. Szinte bármilyen merevlemez vagy SSD valószínűleg megfelel.

:::

::: warning

Flash drive NEM ajánlott a Wii-on használathoz. Az ok e mögött kifejtésre került a [tároló GYIK-ben](faq#storage-device-faq).

Alternatívaként használhatsz SD kártyád, azonba a Wii SD kártya korlátozásai miatt ez alacsony írási/olvasásá sembességet fog eredményezni. Általában ajánlott, hogy használj egy USB merevlemezt vagy egy SSD-t helyette.

:::

::: danger

Ellenőrizd, hogy az eszközöd FAT32-fájlrendszerre van-e formázva. Ne formázd más válrendszerre, mint például exFAT, extFS, vagy WBFS.

NTFS-ként is formázhatod, de a legtöbb homebrew alkalmazással (pl.: a Homebrew Channel és a Nintendont) nem fog működni.

:::

## Egy Wii lemez PART fájljainak egyesítése egy FAT32 eszközön

Ha egy Wii lemez tartalmát egy FAT32-eszközre dumpoltad, akkor a fájlrendszer korlátozásai miatt legalább két fájlod kell legyen, amelyek `.partX.iso`-ban végződnek. Ezeket a fájlokat össze kell kapcsolni (egy támogatott fájlrendszer alatt, mint pl. az NTFS), hogy helyesen be lehessen olvasni őket.

:::details Lépések

### Windows

1. Másold át a `.partX.iso`-ban végződő, egyforma nevű fájlokat egy üres mappába a számítógépeden.

   ![](/images/desktop-apps/WBM/dumpedpartfiles.png)

2. Kattints bele a Windows Intéző címsorába, írd be, hogy `cmd` és nyomd meg az Enter-billentyűt! Ezzel megnyithatsz egy Parancssor-ablakot a mappában.

   ![](/images/desktop-apps/WBM/opencmd.png)

3. Írd be a Parancssorba, hogy `copy /b *.part?.iso game.iso`, majd nyomd meg az Enter-billentyűt! Légy türelemmel, amíg a folyamat befejeződik! A parancssor kimenete az alábbiképpen fog kinézni:

   ![](/images/desktop-apps/WBM/joinpartfiles.png)

4. Ha a másolási folyamat sikeresen befejeződött, akkor a kimeneti fájl ellenőrzőértéke meg fog egyezni a játékmásolási információs fájlban találhatóval (ezt az eredeti másolási folyamat kimeneti mappájában találod meg).

   ![](/images/desktop-apps/WBM/filemd5.png)

### macOS/Linux

1. Másold át a `.partX.iso`-ban végződő, egyforma nevű fájlokat egy üres mappába a számítógépeden.

   ![](/images/desktop-apps/WBM/dumpedpartfileslinux.png)

2. Nyiss meg egy terminálablakot a fájlokat tartalmazó mappában vagy `cd [útvonal]`-lal lépj bele.

   ![](/images/desktop-apps/WBM/openterminallinux.png)

3. Futtasd le a következő parancsot: ``cat `ls *.part?.iso | sort` > game.iso``! Légy türelemmel, amíg az összekapcsolási folyamat befejeződik! Ha a másolási folyamat sikeresen befejeződött, akkor a kimeneti fájl ellenőrzőértéke meg fog egyezni a játékmásolási információs fájlban találhatóval (ezt az eredeti másolási folyamat kimeneti mappájában találod meg).

   ![](/images/desktop-apps/WBM/mergesuccesslinux.png)

:::

## TinyWiiBackupManager használatával

A TinyWiiBackupManager egy új, könnyű játék mentés manager alkalmazás, amit Rust-ban írtakés ami helyettesíti a korábban ebben az útmutatóban ajánlott WiiBackupManager és WiiBackupFusion alkalmazásokat. A lépései az app használatának fülekre lett rendezve, minden platformnak egy fül, amire a TWBM telepíthető.

::::: tabs

:::: tab Windows

### A TWBM használata Windows-on

#### Követelmények

- Egy PC Windows 7-tel vagy későbbivel
- Egy SD kártya vagy USB drive
- Egy dumpolt Wii/GameCube játék lemez (bármilyen formátum)
- [TinyWiiBackupManagerInstaller](https://github.com/mq1/TinyWiiBackupManagerInstaller/releases/latest/)

#### Lépések

##### I. rész – Telepítés

1. Töltsd le az `TinyWiiBackupManagerInstaller.exe` fájlt és futtasd a telepítőt. Ha Windows SmartScreen üzenetet kapsz, futtas mindeképpen, mert ez egy fals pozitív.

   ![](/images/desktop-apps/TWBM/twbmi-download.png)

2. Hagyd a telepítőt futni, majd ha végzett indítsd el a TinyWiiBackupManager-t.

   ![](/images/desktop-apps/TWBM/twbmi-install.png)

##### Section II - Copying Games

::: tip

Ha már vannak játékok a meghajtón, és a TinyWiiBackupManager kéri az útvonalak normalizálását, lépj a Toolbox-ba, és hajtsd végre ezt a műveletet, úgy hogy a meghajtó könyvtárai helyesen legyenek felsorolva.

:::

1. Csatlakoztasd az USB drive-od vagy az SD kártyátd a számítógépedhez.

2. Kattints a merevlemez ikonon baloldalt alul az appban a meghajtód kiválasztásához. Válaszd a meghatjó gyökerét (pl. `E:\`), ne a "wbfs" vagy a "games" mappát.

   ![](/images/desktop-apps/TWBM/twbm-win-empty.png)

3. Kattints a :heavy_plus_sign: gombra a jobb felső részén az appnak tovább játékok hozzáadásához.

   - Kattints a :file_folder: gombra a játékok adott könyvtárból hozzáadására.
   - Rá is mozgathatod a játékokat a fájlkezelődből a hozzáadásukhoz.
   - Ha átvitel van folyamatban az új játékok hozzáadásakor, azok a várósorhoz kerülnek hozzáadásra.

   ![](/images/desktop-apps/TWBM/twbm-win-games.png)

4. Ne felejtsd el biztonságosan leválasztani a meghajtót mielőtt kihúzod!

::::

:::: tab macOS

### TWBM használatával macOS-en

#### Követelmények

- Egy macOS 10.13 vagy későbbi oprendszerű számítógép
- Egy SD kártya vagy USB drive
- Egy dumpolt Wii/GameCube játék lemez (bármilyen formátum)
- [TinyWiiBackupManager](https://github.com/mq1/TinyWiiBackupManager/releases/latest)

#### Lépések

##### I. rész – Telepítés

1. Töltsd le az univerzális .DMG binárist a macOS-hez.

   ![](/images/desktop-apps/TWBM/twbm-mac-download.png)

2. Húzd a TinyWiiBackupManager-t az alkalmazások mappába.

   ![](/images/desktop-apps/TWBM/twbm-mac-install.png)

3. Futtas a következő parancsot a Terminal appban a telepítést követően: `xattr -rd com.apple.quarantine /Applications/TinyWiiBackupManager.app`. Ez lehetővé teszi az alkalmazás futtatását, egyébként blokkolásra kerül a macOS biztonsági beállításai miatt.

   ![](/images/desktop-apps/TWBM/twbm-mac-security.png)

4. Indítsd el a TinyWiiBackupManager-t.

##### Section II - Copying Games

::: tip

Ha már vannak játékok a meghajtón, és a TinyWiiBackupManager kéri az útvonalak normalizálását, lépj a Toolbox-ba, és hajtsd végre ezt a műveletet, úgy hogy a meghajtó könyvtárai helyesen legyenek felsorolva.

:::

1. Csatlakoztasd az USB drive-od vagy az SD kártyátd a számítógépedhez.

2. Kattints a merevlemez ikonon baloldalt alul az appban a meghajtód kiválasztásához. Válaszd a meghatjó gyökerét (pl. `E:\`), ne a "wbfs" vagy a "games" mappát.

   ![](/images/desktop-apps/TWBM/twbm-mac-empty.png)

3. Kattints a :heavy_plus_sign: gombra a jobb felső részén az appnak tovább játékok hozzáadásához.

   - Kattints a :file_folder: gombra a játékok adott könyvtárból hozzáadására.
   - Rá is mozgathatod a játékokat a fájlkezelődből a hozzáadásukhoz.
   - Ha átvitel van folyamatban az új játékok hozzáadásakor, azok a várósorhoz kerülnek hozzáadásra.

   ![](/images/desktop-apps/TWBM/twbm-mac-games.png)

4. Ne felejtsd el biztonságosan leválasztani a meghajtót mielőtt kihúzod!

::::

:::: tab Linux

### TWBM használatával Linux-on

#### Követelmények

- Egy Linuxot futattó PC AppImage vagy Flatpak támogatással
- Egy SD kártya vagy USB drive
- Egy dumpolt Wii/GameCube játék lemez (bármilyen formátum)
- [TinyWiiBackupManager](https://github.com/mq1/TinyWiiBackupManager/releases/latest)

#### Lépések

##### I. rész – Telepítés

TinyWiiBackupManager ctelepíthető a Flathub repository-ból, mint Flatpak vagy futtatható közvetlenül egy AppImage fájlból. A lépések mindkét opcióhoz alább kerülnek ismertetésre.

###### Flatpak

1. Biztosítsd, hogy a FlatPak [legyen telepítve a rendszeredre](https://flathub.org/en/setup).

2. Navigálj a [Flathub repository for TWBM](https://flathub.org/en/apps/it.mq1.TinyWiiBackupManager) -hez majd nyomd meg az Install gombot. Ha semmi nem történik, töltsd le a `.flatpakref` fájlt és nyisd meg, hogy megtaláld a programod a disztribúciód app store-jában. Ha továbbra sem történik semmi, futtasd a `flatpak install flathub it.mq1.TinyWiiBackupManager` parnacsot a terminálodban.

   ![](/images/desktop-apps/TWBM/twbm-linux-flatpak-dl.png)

3. Biztosítsd, hogy a TinyWiiBackupManager telepítve legyen, majd indítsd el azt.

###### AppImage

1. Töltsd le a rendszerednek és architektúrádnak megfelelő AppImage binárist. A legtöbb felhasználónak a `TinyWiiBackupManager-vX.X.X-linux-x86_64.AppImage`-t kell letölteniük.

   ![](/images/desktop-apps/TWBM/twbm-linux-appimage-dl.png)

2. Biztosítsd, hogy az AppImage bináris futtatható legyen a `chmod +x [binaris állomány helye]` parancs lefuttatásával.

   ![](/images/desktop-apps/TWBM/twbm-linux-appimage-exec.png)

3. Indítsd el a TinyWiiBackupManager-t.

##### Section II - Copying Games

::: tip

Ha már vannak játékok a meghajtón, és a TinyWiiBackupManager kéri az útvonalak normalizálását, lépj a Toolbox-ba, és hajtsd végre ezt a műveletet, úgy hogy a meghajtó könyvtárai helyesen legyenek felsorolva.

:::

1. Csatlakoztasd az USB drive-od vagy az SD kártyátd a számítógépedhez.

2. Kattints a drive ikonon baloldalt alul az appban a meghajtód kiválasztásához. Válaszd a meghatjó gyökerét (pl. `E:`), ne a "wbfs" vagy a "games" mappát.

   ![](/images/desktop-apps/TWBM/twbm-linux-empty.png)

3. Kattints a :heavy_plus_sign: gombra a jobb felső részén az appnak tovább játékok hozzáadásához.

   - Kattints a :file_folder: gombra a játékok adott könyvtárból hozzáadására.
   - Rá is mozgathatod a játékokat a fájlkezelődből a hozzáadásukhoz. Ne felejtsd el, hogy ez a funkció jelenleg nem érhető el a Wayland-en.
   - Ha átvitel van folyamatban az új játékok hozzáadásakor, azok a várósorhoz kerülnek hozzáadásra.

   ![](/images/desktop-apps/TWBM/twbm-linux-games.png)

4. Ne felejtsd el biztonságosan leválasztani a meghajtót mielőtt kihúzod!

::::

:::::

---

::: tip

[Folytatás a cIOS-sal](cios)

A dumpolt Wii játékok külső eszközről lejátszásához a cIOS-t konfigurálnod kell. Ha a cIOS beállított, akkor használhatod az [USB Loader GX-t vagy WiiFlow-t](wii-loaders), amelyek segítségével Wii játékokat tölthetsz be USB drive-odról vagy SD kártyádról.

Továbbá használhatod a [Nintendont](nintendont)-ot a GameCube játékokkal az USB drive-odról vagy az SD kártyádról.

:::

---

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez.](site-navigation)

:::
