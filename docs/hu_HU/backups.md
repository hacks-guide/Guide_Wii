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

If you already have games on your drive and TinyWiiBackupManager prompts you to normalize paths, go to the Toolbox and perform this action to ensure that your drive directories are listed correctly.

:::

1. Csatlakoztasd az USB drive-od vagy az SD kártyátd a számítógépedhez.

2. Kattints a merevlemez ikonon baloldalt alul az appban a meghajtód kiválasztásához. Válaszd a meghatjó gyökerét (pl. `E:\`), ne a "wbfs" vagy a "games" mappát.

   ![](/images/desktop-apps/TWBM/twbm-win-empty.png)

3. Click the :heavy_plus_sign: button on the top right of the app to add one or more games.

   - Click the :file_folder: button to add games from a specific directory.
   - You may also drag and drop games from your file manager to add them.
   - If a transfer is already in progress when adding new games, they will be added to a queue.

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

2. Drag TinyWiiBackupManager to the applications folder.

   ![](/images/desktop-apps/TWBM/twbm-mac-install.png)

3. Run the following command in the Terminal app after installation: `xattr -rd com.apple.quarantine /Applications/TinyWiiBackupManager.app`. This will allow the app to run, as it will otherwise be blocked by macOS security settings.

   ![](/images/desktop-apps/TWBM/twbm-mac-security.png)

4. Indítsd el a TinyWiiBackupManager-t.

##### Section II - Copying Games

::: tip

If you already have games on your drive and TinyWiiBackupManager prompts you to normalize paths, go to the Toolbox and perform this action to ensure that your drive directories are listed correctly.

:::

1. Csatlakoztasd az USB drive-od vagy az SD kártyátd a számítógépedhez.

2. Kattints a merevlemez ikonon baloldalt alul az appban a meghajtód kiválasztásához. Válaszd a meghatjó gyökerét (pl. `E:\`), ne a "wbfs" vagy a "games" mappát.

   ![](/images/desktop-apps/TWBM/twbm-mac-empty.png)

3. Click the :heavy_plus_sign: button on the top right of the app to add one or more games.

   - Click the :file_folder: button to add games from a specific directory.
   - You may also drag and drop games from your file manager to add them.
   - If a transfer is already in progress when adding new games, they will be added to a queue.

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

TinyWiiBackupManager can be installed from the Flathub repository as a Flatpak, or ran directly from an AppImage file. Instructions for both options are outlined below.

###### Flatpak

1. Ensure that FlatPak is [installed on your system](https://flathub.org/en/setup).

2. Navigate to the [Flathub repository for TWBM](https://flathub.org/en/apps/it.mq1.TinyWiiBackupManager) and press the Install button. If nothing happens, download the `.flatpakref` file and open it to find the program in your distro's app store. If nothing happens again, run `flatpak install flathub it.mq1.TinyWiiBackupManager` in your terminal.

   ![](/images/desktop-apps/TWBM/twbm-linux-flatpak-dl.png)

3. Ensure that TinyWiiBackupManager is installed on your system, and then launch the app.

###### AppImage

1. Download the AppImage binary for your system and architecture. Most users should download `TinyWiiBackupManager-vX.X.X-linux-x86_64.AppImage`.

   ![](/images/desktop-apps/TWBM/twbm-linux-appimage-dl.png)

2. Ensure that the AppImage binary is executable by running `chmod +x [binary location]`.

   ![](/images/desktop-apps/TWBM/twbm-linux-appimage-exec.png)

3. Indítsd el a TinyWiiBackupManager-t.

##### Section II - Copying Games

::: tip

If you already have games on your drive and TinyWiiBackupManager prompts you to normalize paths, go to the Toolbox and perform this action to ensure that your drive directories are listed correctly.

:::

1. Csatlakoztasd az USB drive-od vagy az SD kártyátd a számítógépedhez.

2. Click on the Drive icon in the bottom left of the app to select your drive. Select the root of the drive (e.g. `E:`), not the "wbfs" or "games" folder.

   ![](/images/desktop-apps/TWBM/twbm-linux-empty.png)

3. Click the :heavy_plus_sign: button on the top right of the app to add one or more games.

   - Click the :file_folder: button to add games from a specific directory.
   - You may also drag and drop games from your file manager to add them. Please note that this feature is not currently available on Wayland.
   - If a transfer is already in progress when adding new games, they will be added to a queue.

   ![](/images/desktop-apps/TWBM/twbm-linux-games.png)

4. Ne felejtsd el biztonságosan leválasztani a meghajtót mielőtt kihúzod!

::::

:::::

---

::: tip

[Folytatás a cIOS-sal](cios)

A dumpolt Wii játékok külső eszközről lejátszásához a cIOS-t konfigurálnod kell. Once cIOS is configured, you can use [USB Loader GX or WiiFlow](wii-loaders) to play Wii games from your USB drive or SD card.

You can also use [Nintendont](nintendont) to play GameCube games from your USB drive or SD card.

:::

---

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez.](site-navigation)

:::
