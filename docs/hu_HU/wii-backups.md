# Wii mentések kezelése

Ez az útmutató végigvezet a Wii mentések kezelésének különböző részletein, a CleanRip által kiadott .PART-fájlok összekapcsolásától a játékfájlok zsugorításáig, hogy ráférjenek egy FAT32-eszközre. A továbbiakban két programot fogunk kiemelni: a Wii Backup Managert (Windows-ra) és a Wii Backup Fusiont (Linux-ra és macOS-re).

::: info

Ha több játékot akarsz tárolni, javasoljuk egy külső háttértár beszerzését a Wiihez. Szinte bármilyen merevlemez vagy SSD valószínűleg megfelel.

:::

::: info

A flash meghajtó nem ajánlott, mivel kicsi és még ugyanazon termékek között is eltérő lehet a működése.

Alternatívaként használhatsz egy SD kártyát is, de figyelmeztetünk, hogy a Wii SD kártya-olvasója lassú.

:::

::: info

Ellenőrizd, hogy a külső háttértárad FAT32-fájlrendszerre van-e formázva. Do not format it as other types such as exFAT or extFS.

NTFS-ként is formázhatod, de a legtöbb homebrew alkalmazás (pl.: a Homebrew Channel és a Nintendont) ezt nem támogatja

:::

## A PART fájlok egyesítése egy FAT32 eszközön

::: info

If your disc was dumped to a FAT32 device, you should have gotten at least two files that end with `.partX.iso`, due to filesystem limitations. They need to be joined (on a supported filesystem like NTFS) so the file can be read correctly.

:::

### Windows

1. Másold át a `.partX.iso`-ban végződő, egyforma nevű fájlokat egy üres mappába a számítógépeden.

   ![](/images/desktop-apps/WBM/dumpedpartfiles.png)

2. In this folder, click the address bar in Windows Explorer and type in `cmd`, this will open a command prompt window there.

   ![](/images/desktop-apps/WBM/opencmd.png)

3. Type `copy /b *.part?.iso game.iso` and press enter. Wait for the command to finish, your terminal output should be similar to the below.

   ![](/images/desktop-apps/WBM/joinpartfiles.png)

4. If the copy process executed correctly, the checksum from the game dump info file (located where you dumped your disc at) should match the resulting joined file.

   ![](/images/desktop-apps/WBM/filemd5.png)

### macOS/Linux

1. Copy the files that share the same name and end with `.partX.iso` into an empty folder on your computer.

   ![](/images/desktop-apps/WBM/dumpedpartfileslinux.png)

2. Nyiss meg egy terminálablakot a fájlokat tartalmazó mappában vagy `cd [útvonal]`-lal lépj bele.

   ![](/images/desktop-apps/WBM/openterminallinux.png)

3. Use the following command as is: ``cat `ls *.part?.iso | sort` > game.iso``. Then, wait for the merging process to finish. Like in Windows, the resulting checksum should match the dump.

   ![](/images/desktop-apps/WBM/mergesuccesslinux.png)

## Követelmények

### Követelmények

- Egy Windowsos számítógép
- Egy SD kártya vagy USB drive
- Egy Wii játéklemez ISO formátumú dumpja
- [Wii Backup Manager](https://static.wiidatabase.de/Wii-Backup-Manager.zip)

### Lépések

#### I. rész – Telepítés

1. Csomagold ki és indítsd el a Wii Backup Managert.
2. Csatlakoztasd az USB drive-od vagy az SD kártyátd a számítógépedhez.

#### Section II - Copying Games

1. Menj a `Drive 1`-fülre és a legördülő menüből válaszd ki a Wii-játékok mentését tartalmazó háttértárat.

   ![](/images/desktop-apps/WBM/select_drive.png)

2. Válts át a `Files` (Fájlok) fülre és kattints az `Add` (Hozzáadás) gombra.

   - Válaszd a `Files`-t több játék hozzáadásához vagy a `Folder`-t ha egy egész mappányi játékot szeretnél hozzá adni.

   ![](/images/desktop-apps/WBM/select_games.png)

3. Menj a `Select`-hez, majd kattints a `Games not on drive 1` menüpontra.

   ![](/images/desktop-apps/WBM/select_games2.png)

4. Válaszd ki a `Transfer` gombot majd válasz a `Drive 1`-et a játékok átviteléhez. A folyamatot az ablak jobb oldalán követheted figyelemmel.

   ![](/images/desktop-apps/WBM/transfer_todrive.png)

## Követelmények

### Követelmények

- Egy macOS-es vagy Linuxos számítógép
- Egy SD kártya vagy USB drive
- Egy Wii-játéklemez. iso-formátumú dumpja
- A [Wii Backup Fusion](https://github.com/larsenv/Wii-Backup-Fusion/releases)
- [Wiimm's ISO Tools](https://wit.wiimm.de/download.html)

### Lépések

#### I. rész – Telepítés

1. Töltsd le a Wiimm's ISO Tools operációs rendszerednek megfelelő változatát és csomagold ki a .tar.gz-fájlt egy olyan mappába, amelyhez a Terminálból hozzáférsz. Kicsomagolás után a mappa így fog kinézni:

   ![](/images/desktop-apps/WBM/witinstallfolder.png)

2. Nyiss meg egy Terminálablakot ugyanebben a mappában és futtasd a `sudo ./install.sh`-parancsot.

3. Töltsd le a Wii Backup Fusion operációs rendszerednek megfelelő változatát és telepítsd. Ha Linuxszal dolgozol, akkor futtathatóvá kell tenned az AppImage-fájlt a `chmod +x [FILE]`-parancs futtatásával.

#### Section II - Copying Games

1. Nyisd meg a Wii Backup Fusiont és kattints a `Load` („Megnyitás”) gombra!

   ![](/images/desktop-apps/WBM/loadwbf.png)

2. Válaszd ki a mappát, ahol a játék ISO megtalálható.

   ![](/images/desktop-apps/WBM/opendirectorywbf.png)

3. Kattints jobb gombbal a lemezre áthelyezendő játékra és válaszd ki a `Transfer to image` („Áthelyezés lemezképre”) menüpontot. Használd a következő beállításokat:

   ![](/images/desktop-apps/WBM/settingswbf.png)

4. Ha még nincs a lemezen egy `wbfs` könyvtár, akkor hozz létre egyet.

5. A `wbfs`-mappán belül hozz létre egy mappát a játék másolatnak. Take note of the Game ID in Wii Backup Fusion as you will need this for the game folder.

6. Make a game folder for your game, formatted as `game name [GAMEID]`. Az ebben az útmutatóban példaként lemásolt játék mappájának a neve `New Super Mario Bros. Wii [SMNE01]`.

   ![](/images/desktop-apps/WBM/wbfsname.png)

7. Másold át a 3. lépésben létrehozott game.wbfs fájlt az imént létrehozott mappába. Ezek után a lemezmeghajtó használatra kész a Wii-n.

::: tip

[Folytatás a cIOS-sal](cios)

cIOS-ra van szüksége a Wii-odnak egy USB Loader használatához. Ha ezek készek, akkor használhatod az [USB Loader GX-t vagy WiiFlow-t](wii-loaders), amelyek segítségével játékokat tölthetsz be USB drive-odról vagy SD kártyádról.

:::

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez.](site-navigation)

:::
