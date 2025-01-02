# Nintendo Wi-Fi kapcsolat

A Nintendo Wi-Fi Connection egy online multiplayer játékszolgáltatás volt a Wii számára, amely ingyenes online játékot tett lehetővé. Bár különböző játékok hosszabb ideig voltak támogatva, mint mások, 2023 augusztusától már nem lehet minden játékot hagyományos úton játszani. A Nintendo WFC funkcionalitás visszaszerzéséhez ez az útmutató nyújt útmutatást a Wiimmfi telepítésével. A Wiimmfihez való csatlakozáshoz többféle módszer is kerül itt listázásra a legkisebb nehézségűtől a legnagyobbig terjedő sorrendben - válaszd a helyzetednek leginkább megfelelő módszert.

::: warning

If you get error 23904 while connecting to Wiimmfi, then you are using an outdated patch.

Follow the steps below for the method you're using to connect to Wiimmfi again.

See [this page](https://wiimmfi.de/update) for more details.

:::

## Automatikus lemez patchelés a Priiloader segítségével

::: warning

If the `Wiimmfi Patch` displays as anything other than v4, you do not have the latest version of the hacks_hash.ini file and the patch will not work. Újra kell telepítened a Priiloader-t, az ehhez szükséges útmutatót a követelmények részben találod.

:::

A Wiimmfi patchelés módszere, amely a kiskereskedelmi lemezes játékokon automatikusan fut a Disc Channel csatornán keresztül.

### Követelmények

- Egy internetkapcsolattal rendelkező Wii, a System Menu 4.3-as verzióján
- [Priiloader](priiloader) 0.9 vagy későbbi

### Lépések

1. Tartsd lenyomva a RESET gombot a Wii bekapcsolása közben. Ha Wii mini-t használsz, csatlakoztass egy USB-billentyűzetet, és tartsd lenyomva az Escape gombot bekapcsolás közben.

2. A Priiloader menüt kell látnod.

   ![](/images/priiloader/mainmenu.png)

3. Menj a `System Menu Hacks` menüpontra.

   ::: info

   Ha USB drive-ot használtál a Priiloader telepítéséhez, győződj meg róla, hogy nincs-e SD kártya behelyezve ezzel egyidejűleg.
   Ez azt okozhatja, hogy a Priiloader nem fogja tudni megtalálni a hacks_hash.ini fájlt.

   :::

4. Győződj meg róla, hogy a `Wiimmfi patch v4` hack engedélyezve van.

   ![](/images/priiloader/hacks.png)

5. Görgess a `Save Settings` menüpontra, és mentsd el a módosításokat.

6. Térjvissza a főmenübe, és nyomd meg a `System Menu`-t a Wii menübe való visszatéréshez.

7. Indítsd el a játékodat a Disc Channel-en keresztül - most már Wiimmfi patcheltnek kell lennie.

## Automatikus mentés patchelés USB Loader-en keresztül

Egy módszer a Wiimmfi patcheléshez, amely automatikusan foltozza a játék másolatait az USB Loader GX vagy a WiiFlow Lite legújabb verzióiban.

### Követelmények

- Egy internetkapcsolattal rendelkező Wii
- [USB Loader GX vagy WiiFlow Lite](wii-loaders)

### Lépések

1. Open the game or global settings for your specific USB loader and search for the `Private Server` option. By default, it will be set to `Off`.
2. Set the option to `Wiimmfi` and save the settings. Alapértelmezés szerint a játékoknak mostantól automatikusan patch-elődnie kell a Wiimmfihez.

## Automatikus lemezfoltozás egyéni DNS-en keresztül

Egy patchelési módszer a Wiimmfi-hez f, amely a kiskereskedelmi játéklemezeken automatikusan fut egy egyéni DNS-kiszolgáló használatával. Bár kényelmes, csak a játékok egy kis választékával működik, köztük a Mario Kart Wii és az SSBB játékokkal. A folyamat jellegéből adódóan homebrew nélkül is futtatható Wii-ken.

::: warning

Ha a 20100 vagy 20110 hibaát kapod, akkor a játék, amellyel játszani próbálsz, nem támogatott ezzel a módszerrel.

:::

::: warning

If you get error 23400, your ISP or network is blocking the use of a custom DNS.

To solve this issue, Wiimmfi has a custom DNS server that can be ran on your PC - you can read about it [here](https://wiimmfi.de/patcher/dnspatch#customdns).

:::

### Követelmények

- Egy internetkapcsolattal rendelkező Wii

### Lépések

1. Menj a `Wii Settings > Internet > Connection Settings` opcióhoz és válaszd ki a kapcsolatot amit használsz. Majd `Change Settings > Auto-Obtain DNS NO > Advanced Settings`. Állítsd be elsődleges (primary) DNS-nek a `95.217.77.181` címet és másodlagos (secondary) DNS-nek az `1.1.1.1`-et.
2. Hagyd, hogy a kapcsolat teszt végezzen, és ne futtass Wii System Update-et.
3. Indítsd el a játékodat a Disc Channel-en keresztül - most már Wiimmfi patcheltnek kell lennie.

## Kézi lemezpatchelésa Homebrew Channel csatornán keresztül

A Wiimmfi egy patchelési módszere, amely a kiskereskedelmi lemezes játékokon fut, de manuálisan kell elindítani a Homebrew Channel csatornán keresztül.

### Követelmények

- Egy SD kártya vagy pendrive
- [Auto Wiimmfi Patcher](https://oscwii.org/library/app/wiimmfipatcher)

### Lépések

1. Egyszerűen csomagold ki az `apps` mappát a tömörített fájlból az SD kártyád vagy USB drive-od gyökerébe.
2. Helyezd be az SD-kártyád a Wii-be, és indítsd el az Auto Wiimmfi Patchert a Homebrew Channel-ről.
3. Helyezd be a játéklemezt (ha még nem lenne), várd meg, amíg a patchelés befejeződik, és a játék elindul.

## Kézi lemez patchelés az EULA felhasználói megállapodáson keresztül

A Wiimmfi egy patchelési módszere, amely kiskereskedelmi játéklemezeken fut, de manuálisan kell elindítani az EULA felhasználói megállapodáson keresztül (az [str2hax](str2hax)-ból származik). A folyamat jellegéből adódóan homebrew nélkül is futtatható Wii-ken.

### Követelmények

- Egy internetkapcsolattal rendelkező Wii

### Lépések

1. Helyezd be a játék lemezed.

2. Menj a `Wii Settings > Internet > Connection Settings` opcióhoz és válaszd ki a kapcsolatot amit használsz. Majd `Change Settings > Auto-Obtain DNS NO > Advanced Settings`. Állítsd be elsődleges (primary) DNS-nek a `95.217.77.151` címet és másodlagos (secondary) DNS-nek az `1.1.1.1`-et.

   ![](/images/wiimmfi/dns-str2hax-wiimmfi.png)

3. Hagyd, hogy a kapcsolat teszt végezzen, és ne futtass Wii System Update-et.

4. Menj vissza kétszer az `Internet`-hez, és nyomd meg a `User Agreements` gombot. Ezután erősítsd meg, hogy szeretnéd használni a WC24-et és a Wii Shop Channel csatornát.

5. A Wiimmfi patcher oldalnak most meg kell jelennie. Ha nem, és továbbra is az alapértelmezett licencszerződés jelenik meg, akkor lehet, hogy a routered nem kompatibilis ezzel a módszerrel.

6. Várj egy kicsit, amíg a patcher betöltődik (általában kb. 1,5 percig), és a behelyezett játéknak a Wiimmfi patch-el együtt kell elindulnia.

## Kézi lemezkép javítás az Internet Channel csatornán keresztül

::: warning

Ha UPnP-vel kapcsolatos problémákba ütközöl (például a patcher 10 másodpercnél tovább megáll a ""Init network..." vagy az "add UPnP port forward" lépéseknél), akkor a Wii Remote - gombját vagy a GameCube kontroller Y gombját nyomd meg, amint a patcher betöltődik, hogy ezt megkerüld.

:::

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the Internet Channel (derives from [Flashhax](flashhax)). A folyamat jellegéből adódóan homebrew nélkül is futtatható Wii-ken. [This](wiimmfi#manual-disc-patching-via-eula-user-agreement) method is generally more reliable, and is recommended instead.

### Követelmények

- Egy Wii internet kapcsolattal 60Hz módban futva
- Az Internet Channel

### Lépések

1. Nyisd meg a következő weboldalt az Internet Channel-ben: `http://chadsoft.co.uk/wiimmfi`
2. Add hozzá az oldalt a böngésző kedvenceidhez a csillag ikonra, majd az `Add Favorite` gombra kattintva.
3. Lépj vissza a Wii menübe.
4. Nyisd meg újra az Internet Channel-t, és lépj be az imént létrehozott kedvenchez.
5. A Wiimmfi patchernek el kell indulnia. Légy türelmes, mivel a Flashhax nagyon megbízhatatlan tud lenni - több próbálkozásra is szükség lehet, hogy sikerüljön.

## Kézi WiiWare patchelés PC-vel

A Wiimmfi patchelés egy módszere, amely a WiiWare játékokon fut, de kézzel kell futtatni a PC-n egy szkript segítségével.

### Követelmények

- Egy SD kártya
- A játékod másolata (WAD formátumban)
- [WiiWare Patcher](https://github.com/RiiConnect24/WiiWare-Patcher/releases/latest) (cross platform)
- [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

### Lépések

1. Csomagold ki a WiiWare Patcher legújabb verziójának .zip csomagját, és tedd bele a WAD-edet.
2. Futtasd le az operációs rendszeredhez tartozó patch scriptet: Windows esetén általában `.bat`, Mac/Linux esetén `.sh` végződésű. Ha a RiiConnect24 Patchert használod, válaszd ki a készülékedet (Wii, vWii vagy Dolphin), és válaszd a WiiWare patchert.
3. Ha sikeresen befejeződött, telepítsd a `wiiware-wads`-szel készük WAD fájl a [YAWM ModMii Edition](yawmme)-nel.

## Kézi lemezkép-foltozás PC-n keresztül

A Wiimmfi patchelés egy módszere, amely játék-lemezképeken fut, de kézzel kell futtatni a PC-n egy szkript segítségével.

### Követelmények

- Egy Windows/macOS/Linux számítógép internet kapcsolattal
- A patchelni kívánt játék egy példánya - támogatott formátumok: `ISO`, `WDF`, `WIA`, `CISO (=WBI)`, `WBFS`, `GCZ` és `FST` - az `NKIT` NEM támogatott
- [Wiimmfi ISO Patcher](https://download.wiimmfi.de/patcher/wiimmfi-patcher-latest.zip)

### Lépések

1. Töltsd le a patchert, és csomagold ki a `.zip` fájlt.
2. Nyisd meg a kicsomagolt mappát, és másold bele a Wii játék képeit.
   - Ha Windows rendszeren vagy, kattints duplán a `patch-images.bat` fájlra (ez „patch-images” Batch File néven is megjelenhet). Ha Cygwin-hez kapcsolódó problémákba ütközöl, próbáld meg helyette a `patch-images-32.bat` fájlt.
   - Ha MacOS-t használsz, nyiss parancssort az aktuális mappában és a `chmod +x *.sh` paranccsal tedd futtathatóvá a shell szkriptet, majd futtasd a `./patch-images.sh` fájlt.
   - Ha Linuxon vagy, kattints duplán a `patch-images.desktop` fájlra (ez „Patch Images” néven is megjelenhet), vagy futtasd a `./patch-images.sh` fájlt egy terminálban, miután a `chmod +x *.sh` paranccsal futtathatóvá tetted.
3. Ha a fentiek sikeresek voltak, akkor egy ablaknak kell felugrania, amely a patch folyamatot jeleníti meg. Ha a folyamat befejeződött, a javított képfájlokat a `wiimmfi-images` nevű mappában találod.

::: tip

Gratulálunk, hogy eljutottál a fő útmutató opcionális részének végére! Az oldal indexére nézve megtekinthetsz más útmutatókat is.

:::

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez!](site-navigation)

:::
